export default {
  "id": 1365,
  "name": "How Many Numbers Are Smaller Than the Current Number",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number",
  "relativeDir": "H/How Many Numbers Are Smaller Than the Current Number",
  "slug": "1365-how-many-numbers-are-smaller-than-the-current-number",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 16,
    "java": 40,
    "python": 4,
    "javascript": 32
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<int> smallerNumbersThanCurrent(vector<int>& nums) {\r\n        vector<int> ans;\r\n        int i,j,size,count;\r\n        size = nums.size();\r\n        for(i = 0; i<size; i++){\r\n            count = 0;\r\n            for(j = 0;j<size;j++){\r\n                if(nums[j]<nums[i]) count++;\r\n            }\r\n            ans.push_back(count);\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def smallerNumbersThanCurrent(self, nums):\r\n        sortify = sorted(nums)\r\n        return (bisect_left(sortify, i) for i in nums)",
    "java": "// Runtime: 8 ms (Top 76.25%) | Memory: 44.5 MB (Top 55.91%)\r\nclass Solution {\r\n    public int[] smallerNumbersThanCurrent(int[] nums) {\r\n        int[] sorted = nums.clone();\r\n        int[] res = new int[nums.length];//result array\r\n        Arrays.sort(sorted);\r\n        for (int i = 0; i < nums.length; ++i) {\r\n            //binary search it, if there is no duplicates the idx will be how many smaller are there\r\n            int idx = binarySearch(sorted, nums[i]);\r\n            //if there are duplicates, then we need to find the first one presented in the array\r\n            if (idx-1>=0 && sorted[idx-1] == nums[i]) {\r\n                while (idx >= 0 && sorted[idx] == nums[i]) {\r\n                    --idx;\r\n                }\r\n                ++idx;\r\n            }\r\n            //As I said before, array of indices(indexes) will be the answer\r\n            res[i] = idx;\r\n        }\r\n        return res;\r\n    }\r\n    //Just simple iterative binary search\r\n     public static int binarySearch(int[] arr, int target) {\r\n        int s = 0;\r\n        int e = arr.length-1;\r\n        int m = (s+e)/2;\r\n\r\n        while (s<=e) {\r\n            if (arr[m] == target) {\r\n                return m;\r\n            } else if (arr[m] > target) {\r\n                e = m-1;\r\n            } else {\r\n                s = m+1;\r\n            }\r\n            m = (s+e)/2;\r\n        }\r\n        return -1;\r\n    }\r\n}",
    "javascript": "var smallerNumbersThanCurrent = function(nums) {\r\n    let count, ans=[];\r\n    /*Run a loop on each element excluding nums[i]\r\n    and compare it with nums[j] if it's large, then count++\r\n    else break;*/\r\n    \r\n    for(let i=0; i<nums.length; i++){\r\n        let temp=nums[i], count=0;\r\n        for(let j=0; j<nums.length; j++){\r\n            if(i===j) continue;\r\n            if(temp>nums[j]) count++;\r\n        }\r\n        ans.push(count);\r\n    }\r\n    return ans;\r\n};\r\n\r\n//second way using objects:--->\r\n\r\nvar smallerNumbersThanCurrent = function(nums) {\r\n    let arr=[...nums], ans=[];\r\n    arr.sort((a,b)=>a-b);\r\n    let map={};\r\n    map[arr[0]]=0;\r\n    for(let i=1; i<arr.length; i++){\r\n        if(arr[i-1]!==arr[i]) map[arr[i]]=i;\r\n    }\r\n    for(let i=0; i<nums.length; i++){\r\n        ans.push(map[nums[i]]);\r\n    }\r\n    return ans;\r\n};"
  }
}
