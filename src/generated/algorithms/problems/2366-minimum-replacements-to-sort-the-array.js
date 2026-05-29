export default {
  "id": 2366,
  "name": "Minimum Replacements to Sort the Array",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-replacements-to-sort-the-array",
  "relativeDir": "M/Minimum Replacements to Sort the Array",
  "slug": "2366-minimum-replacements-to-sort-the-array",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 22,
    "java": 27,
    "python": 16,
    "javascript": 17
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    long long minimumReplacement(vector<int>& nums) {\r\n        long long res=0;\r\n        int n=nums.size();\r\n        int mxm=nums[n-1];\r\n        long long val;\r\n        for(int i=n-2;i>=0;i--)\r\n        {\r\n            // minimum no. of elemetns nums[i] is divided such that every number is less than mxm and minimum is maximized\r\n            val= ceil(nums[i]/(double)mxm); \r\n            \r\n            // no. of steps is val-1\r\n            res+=(val-1);\r\n            \r\n            // the new maximized minimum value \r\n            val=nums[i]/val;\r\n            mxm= val;\r\n        }\r\n        return res;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def minimumReplacement(self, nums) -> int:\r\n        ans = 0\r\n        n = len(nums)\r\n        curr = nums[-1]\r\n        for i in range(n - 2, -1, -1):\r\n            if nums[i] > curr:\r\n                q = nums[i] // curr\r\n                if nums[i] == curr * q:\r\n                    nums[i] = curr\r\n                    ans += q - 1\r\n                else:\r\n                    nums[i] = nums[i] // (q + 1)\r\n                    ans += q\r\n            curr = nums[i]\r\n        return ans",
    "java": "// Runtime: 4 ms (Top 98.50%) | Memory: 81.6 MB (Top 36.30%)\r\nclass Solution {\r\n    public long minimumReplacement(int[] nums) {\r\n        long ret = 0L;\r\n        int n = nums.length;\r\n        int last = nums[n - 1];\r\n        for(int i = n - 2;i >= 0; i--){\r\n            if(nums[i] <= last){\r\n                last = nums[i];\r\n                continue;\r\n            }\r\n            if(nums[i] % last == 0){\r\n                // split into nums[i] / last elements, operations cnt = nums[i] / last - 1;\r\n                ret += nums[i] / last - 1;\r\n            }else{\r\n                // split into k elements operations cnt = k - 1;\r\n                int k = nums[i] / last + 1; // ceil\r\n                ret += k - 1;\r\n                last = nums[i] / k; // left most element max is nums[i] / k\r\n            }\r\n\r\n        }\r\n\r\n        return ret;\r\n    }\r\n\r\n}",
    "javascript": "// Runtime: 179 ms (Top 13.79%) | Memory: 52.3 MB (Top 70.69%)\r\n/**\r\n * @param {number[]} nums\r\n * @return {number}\r\n */\r\nvar minimumReplacement = function(nums) {\r\n    const n = nums.length;\r\n    let ans = 0;\r\n    for(let i = n - 2 ; i >= 0 ; i--){\r\n        if(nums[i]>nums[i+1]){\r\n            const temp = Math.ceil(nums[i]/nums[i+1]);\r\n            ans += temp - 1;\r\n            nums[i] = Math.floor(nums[i]/temp);\r\n        }\r\n    }\r\n    return ans;\r\n};"
  }
}
