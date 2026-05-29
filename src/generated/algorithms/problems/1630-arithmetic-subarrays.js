export default {
  "id": 1630,
  "name": "Arithmetic Subarrays",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/arithmetic-subarrays",
  "relativeDir": "A/Arithmetic Subarrays",
  "slug": "1630-arithmetic-subarrays",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 65,
    "java": 30,
    "python": 21,
    "javascript": 47
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<bool> checkArithmeticSubarrays(vector<int>& nums, vector<int>& l, vector<int>& r) {\r\n        \r\n        vector<bool> ans(l.size(),false);\r\n        for(int i=0;i<l.size();i++)\r\n        {\r\n            //if the sub array size is equal to 2\r\n            if(r[i]-l[i]+1==2)\r\n                ans[i]=true;\r\n            else if(isArthemetic(nums,l[i],r[i]))\r\n                ans[i]=true;\r\n        }\r\n        return ans;\r\n    }\r\n    \r\n    //return true if the sub array can be rearranged in a arthemetic sequence\r\n    bool isArthemetic(vector<int>& nums,int start,int end)\r\n    {\r\n        //get the maximum and min elements \r\n        int mini=INT_MAX;\r\n        int maxi=INT_MIN;\r\n        for(int i=start;i<=end;i++)\r\n        {\r\n            mini=min(nums[i],mini);\r\n            maxi=max(nums[i],maxi);\r\n        }\r\n        \r\n        //when mini==maxi it means all the elements are same in the sub array\r\n        if(mini==maxi)\r\n            return true; \r\n        \r\n        //we cant have same common difference betweeen  two adjacent  elements\r\n        //when we arrange in arthemetic sequence\r\n        if((maxi-mini)%(end-start)!=0)\r\n            return false;\r\n        \r\n        \r\n        //the diff between every two integers when we rearrange sub array\r\n        int diff=(maxi-mini)/(end-start);\r\n        \r\n        //to check  if the duplicate elemnts are present\r\n        //ex- [2,4,6,6]\r\n        //6 is repeating two times \r\n        vector<bool> present(end-start+1,false);\r\n        for(int i=start;i<=end;i++)\r\n        {\r\n            \r\n            //we cant set a index of nums[i]\r\n            if((nums[i]-mini)%diff!=0)\r\n                return false;\r\n            \r\n            int ind=(nums[i]-mini)/diff;\r\n            \r\n            // same element is alreeady repeated ( 6 in the above  example)\r\n            if(present[ind])\r\n                return false;\r\n            //mark it presence\r\n            present[ind]=true;\r\n            \r\n        }\r\n        return true;\r\n        \r\n    }\r\n};",
    "python": "// Runtime: 194 ms (Top 22.81%) | Memory: 17.70 MB (Top 6.09%)\r\n\r\nclass Solution:\r\n    def checkArithmeticSubarrays(self, nums: List[int], l: List[int], r: List[int]) -> List[bool]:\r\n        ans = []\r\n        \r\n        def find_diffs(arr):\r\n            \r\n            arr.sort()\r\n\r\n            dif = []\r\n            \r\n            for i in range(len(arr) - 1):\r\n                dif.append(arr[i] - arr[i + 1])\r\n            \r\n            return len(set(dif)) == 1\r\n        \r\n        for i , j in zip(l , r):\r\n            ans.append(find_diffs(nums[i:j + 1]))\r\n        \r\n        return ans",
    "java": "// Runtime: 16 ms (Top 83.14%) | Memory: 45.90 MB (Top 9.57%)\r\n\r\nclass Solution {\r\n    public Boolean check(int[] arr) {\r\n        Arrays.sort(arr);\r\n        int diff = arr[1] - arr[0];\r\n        \r\n        for (int i = 2; i < arr.length; i++) {\r\n            if (arr[i] - arr[i - 1] != diff) {\r\n                return false;\r\n            }\r\n        }\r\n        \r\n        return true;\r\n    }\r\n    \r\n    public List<Boolean> checkArithmeticSubarrays(int[] nums, int[] l, int[] r) {\r\n        List<Boolean> ans = new ArrayList();\r\n        for (int i = 0; i < l.length; i++) {\r\n            int[] arr = new int[r[i] - l[i] + 1];\r\n            for (int j = 0; j < arr.length; j++) {\r\n                arr[j] = nums[l[i] + j];\r\n            }\r\n            \r\n            ans.add(check(arr));\r\n        }\r\n\r\n        return ans;\r\n    }\r\n}",
    "javascript": "// Runtime: 84 ms (Top 88.87%) | Memory: 49.20 MB (Top 18.22%)\r\n\r\n/**\r\n * @param {number[]} nums\r\n * @param {number[]} l\r\n * @param {number[]} r\r\n * @return {boolean[]}\r\n */\r\nvar checkArithmeticSubarrays = function(nums, l, r) {\r\n    let result = [];\r\n    for (let i = 0; i < l.length; i++) {\r\n        result.push(isArithmetic(nums.slice(l[i], r[i] + 1)));\r\n    }\r\n    return result;\r\n};\r\n\r\nfunction isArithmetic(arr) {\r\n    let min = Math.min(...arr);\r\n    let max = Math.max(...arr);\r\n\r\n    if (min == max) {\r\n        return true;\r\n    }\r\n\r\n    let step = (max - min) / (arr.length - 1);\r\n\r\n    if (step != Math.floor(step)) {\r\n        return false;\r\n    }\r\n\r\n    let set = new Set();\r\n    for (let x of arr) {\r\n        if (set.has(x)) {\r\n            return false;\r\n        }\r\n\r\n        set.add(x);\r\n    }\r\n\r\n    for (let x = min; x <= max; x += step) {\r\n        if (!set.has(x)) {\r\n            return false;\r\n        }\r\n    }\r\n\r\n    return true;\r\n}"
  }
}
