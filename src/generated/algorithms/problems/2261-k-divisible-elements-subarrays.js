export default {
  "id": 2261,
  "name": "K Divisible Elements Subarrays",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/k-divisible-elements-subarrays",
  "relativeDir": "K/K Divisible Elements Subarrays",
  "slug": "2261-k-divisible-elements-subarrays",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 28,
    "java": 22,
    "python": 18,
    "javascript": 43
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n\r\n    int countDistinct(vector<int>& nums, int k, int p) {\r\n        \r\n        int n=nums.size();\r\n        set<vector<int>>ans;\r\n        \r\n        int i,j;\r\n        for(i=0;i<n;i++)\r\n        {\r\n            vector<int>tt;\r\n            int ct=0;\r\n            for(j=i;j<n;j++)\r\n            {\r\n                tt.push_back(nums[j]);\r\n                if(nums[j]%p==0)\r\n                    ++ct;\r\n                if(ct>k)\r\n                    break;\r\n                ans.insert(tt);\r\n                    \r\n            }\r\n        }\r\n        return ans.size();\r\n    }\r\n    \r\n};",
    "python": "class Solution:\r\n    def countDistinct(self, nums: List[int], k: int, p: int) -> int:\r\n        n = len(nums)                        \r\n        sub_arrays = set()\r\n        \r\n\t\t# generate all combinations of subarray\r\n        for start in range(n):\r\n            cnt = 0\r\n            temp = ''\r\n            for i in range(start, n):\r\n                if nums[i]%p == 0:\r\n                    cnt+=1                 \r\n                temp+=str(nums[i]) + ',' # build the sequence subarray in CSV format          \r\n                if cnt>k: # check for termination \r\n                    break\r\n                sub_arrays.add(temp)                                    \r\n                \r\n        return len(sub_arrays)",
    "java": "// Runtime: 99 ms (Top 84.38%) | Memory: 67.2 MB (Top 74.81%)\r\nclass Solution {\r\n    public int countDistinct(int[] nums, int k, int p) {\r\n        int n = nums.length;\r\n        // we are storing hashcode for all the substrings so that we can compare them faster.\r\n        // main goal is to avoid entire sub array comparision using hashcode.\r\n        Set<Long> ways = new HashSet<>();\r\n        for(int i = 0; i < n; i++) {\r\n            int cnt = 0;\r\n            long hc = 1; // this is the running hashcode for sub array [i...j]\r\n            for(int j = i; j < n; j++) {\r\n                hc = 199L * hc + nums[j]; // updating running hashcode, since we nums are <=200, we shall consider a prime near 200 to avoid collision\r\n                if(nums[j] % p == 0)\r\n                    cnt++;\r\n                if(cnt <= k) { // if current subarray [i...j] is valid, add its hashcode in our storage.\r\n                    ways.add(hc);\r\n                }\r\n            }\r\n        }\r\n        return ways.size();\r\n    }\r\n}",
    "javascript": "// Runtime: 3190 ms (Top 8.57%) | Memory: 86.8 MB (Top 45.72%)\r\nvar countDistinct = function(nums, k, p) {\r\n    let ans = [];\r\n\r\n    let rec = (index,k,p,nums,ans,curr) => {\r\n        let val = nums[index];\r\n        let check = val%p;\r\n        let isdiv = false;\r\n        if(check == 0) isdiv=true;\r\n\r\n        if(index == nums.length) {\r\n            if(curr.length>0){\r\n                ans.push(curr.join(\",\"));\r\n            }\r\n            return;\r\n        }\r\n\r\n        //take conditions\r\n        if(isdiv && k==0){\r\n          ans.push(curr.join(\",\"));\r\n        } else if(isdiv){\r\n             curr.push(val)\r\n             rec(index+1,k-1,p,nums,ans,curr);\r\n             curr.pop()\r\n        } else {\r\n             curr.push(val)\r\n             rec(index+1,k,p,nums,ans,curr);\r\n             curr.pop()\r\n        }\r\n\r\n        //non take conditions\r\n        if(curr.length == 0){\r\n             rec(index+1,k,p,nums,ans,curr);\r\n        } else {\r\n            ans.push(curr.join(\",\"));\r\n        }\r\n\r\n    }\r\n    rec(0,k,p,nums,ans,[]);\r\n    let set = new Set(ans);\r\n\r\n    return set.size\r\n};"
  }
}
