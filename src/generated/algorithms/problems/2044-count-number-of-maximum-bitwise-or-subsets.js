export default {
  "id": 2044,
  "name": "Count Number of Maximum Bitwise-OR Subsets",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/count-number-of-maximum-bitwise-or-subsets",
  "relativeDir": "C/Count Number of Maximum Bitwise-OR Subsets",
  "slug": "2044-count-number-of-maximum-bitwise-or-subsets",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 37,
    "java": 31,
    "python": 10,
    "javascript": 29
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int countMaxOrSubsets(vector<int>& nums) {\r\n        \r\n        int i,j,max_possible_or=0,n=nums.size(),ans=0;\r\n        \r\n        //maximum possible or=or of all number in array\r\n        for(i=0;i<n;i++)\r\n        {\r\n            max_possible_or=nums[i]|max_possible_or;\r\n        }\r\n        \r\n        //checking all subset \r\n        \r\n        \r\n        for(i=1;i<(1<<n);i++)\r\n        {\r\n            int p=0;\r\n            for(j=0;j<n;j++)\r\n            {\r\n                if(i&(1<<j))\r\n                {\r\n                    p=p|nums[j];\r\n                }\r\n            }\r\n            //if xor of given subset is equal to maximum possible or\r\n\t\t\t\r\n            if(p==max_possible_or)\r\n            {\r\n                ans++;\r\n            }\r\n        }\r\n        \r\n        return ans;\r\n        \r\n    }\r\n};",
    "python": "class Solution:\r\n    def countMaxOrSubsets(self, nums: List[int]) -> int:\r\n        \r\n        def dfs(i,val):\r\n            if maxBit == val : return 1<<(len(nums)-i)\r\n            if i == len(nums): return 0\r\n            return dfs(i+1,val|nums[i]) + dfs(i+1,val)\r\n        maxBit = 0\r\n        for i in nums: maxBit |= i\r\n        return dfs(0,0)",
    "java": "class Solution {\r\n    public int countMaxOrSubsets(int[] nums) {\r\n        \r\n        subsets(nums, 0, 0);\r\n        return count;\r\n    }\r\n    \r\n    int count = 0;\r\n    int maxOR = 0;\r\n    \r\n    private void subsets(int[] arr, int vidx, int OR){\r\n        \r\n        if(vidx == arr.length){\r\n            \r\n            if(OR == maxOR){\r\n                count ++;\r\n            }else if(OR > maxOR){\r\n                count = 1;\r\n                maxOR = OR;\r\n            }\r\n            \r\n            return;\r\n        }\r\n        \r\n        // include\r\n        subsets(arr, vidx+1, OR | arr[vidx]);\r\n        \r\n        // exclude\r\n        subsets(arr, vidx+1, OR);\r\n    }\r\n}",
    "javascript": "// Runtime: 509 ms (Top 12.12%) | Memory: 43.2 MB (Top 78.79%)\r\n/**\r\n * @param {number[]} nums\r\n * @return {number}\r\n */\r\nvar countMaxOrSubsets = function(nums) {\r\n\r\n    let n = nums.length;\r\n    let len = Math.pow(2, n);\r\n    let ans = 0;\r\n    let hash = {};\r\n\r\n    for (let i = 0; i < len; i++) {\r\n        let tmp = 0;\r\n        for (let j = 0; j < n; j++) {\r\n            if(i & (1 << j)) {\r\n                tmp |= nums[j];\r\n            }\r\n        }\r\n        if (hash[tmp]) {\r\n            hash[tmp] += 1;\r\n        } else {\r\n            hash[tmp] = 1;\r\n        }\r\n        ans = Math.max(ans, tmp);\r\n    }\r\n\r\n    return hash[ans];\r\n};"
  }
}
