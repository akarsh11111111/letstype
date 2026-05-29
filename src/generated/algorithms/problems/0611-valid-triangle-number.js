export default {
  "id": 611,
  "name": "Valid Triangle Number",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/valid-triangle-number",
  "relativeDir": "V/Valid Triangle Number",
  "slug": "0611-valid-triangle-number",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 26,
    "java": 21,
    "python": 26,
    "javascript": 20
  },
  "languages": {
    "cpp": "class Solution {\r\n    public int triangleNumber(int[] nums) {\r\n        int n = nums.length;\r\n        Arrays.sort(nums);\r\n        int count =0;\r\n        for(int k = n-1; k>=2; k--)\r\n        {\r\n            int i = 0;\r\n            int j = k-1;\r\n            while(i < j)\r\n            {\r\n                int sum = nums[i] +nums[j];\r\n                if(sum > nums[k])\r\n                {\r\n                    count += j-i;\r\n                    j--;\r\n                }\r\n                else\r\n                {\r\n                    i++;\r\n                }\r\n            }\r\n        }\r\n        return count;\r\n    }\r\n}",
    "python": "class Solution {\r\n    public int triangleNumber(int[] nums) {\r\n        int n = nums.length;\r\n        Arrays.sort(nums);\r\n        int count =0;\r\n        for(int k = n-1; k>=2; k--)\r\n        {\r\n            int i = 0;\r\n            int j = k-1;\r\n            while(i < j)\r\n            {\r\n                int sum = nums[i] +nums[j];\r\n                if(sum > nums[k])\r\n                {\r\n                    count += j-i;\r\n                    j--;\r\n                }\r\n                else\r\n                {\r\n                    i++;\r\n                }\r\n            }\r\n        }\r\n        return count;\r\n    }\r\n}",
    "java": "// Runtime: 23 ms (Top 95.13%) | Memory: 43.50 MB (Top 23.38%)\r\n\r\nclass Solution {\r\n    public int triangleNumber(int[] a) {\r\n        Arrays.sort(a);\r\n        int n=a.length;\r\n        int count=0;\r\n        for(int i=n-1;i>=1;i--){\r\n            int left=0,right=i-1;\r\n            while(left<right){\r\n                if(a[left]+a[right]>a[i]){\r\n                    count+=right-left;\r\n                    right--;\r\n                }\r\n                else\r\n                left++;\r\n            }\r\n        }\r\n        return count;\r\n    }\r\n}",
    "javascript": "// Runtime: 103 ms (Top 39.24%) | Memory: 50.90 MB (Top 13.92%)\r\n\r\n/**\r\n * @param {number[]} nums\r\n * @return {number}\r\n */\r\nvar triangleNumber = function(nums) {\r\n    nums.sort((a,b) => a-b);\r\n    let result = 0, n = nums.length, i, j, k;\r\n    for(i = 0; i<n ; i++) {\r\n        for(j = i+1, k = j+1; j<(n - 1) && k<=n;) {\r\n            if(k == n || nums[i]+nums[j] <= nums[k]){\r\n                if(k > (j+1))\r\n                    result += k - j - 1;\r\n                j++;\r\n            }else k++;\r\n        }\r\n    }\r\n    return result;\r\n};"
  }
}
