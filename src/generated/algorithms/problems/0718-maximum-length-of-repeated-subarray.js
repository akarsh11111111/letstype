export default {
  "id": 718,
  "name": "Maximum Length of Repeated Subarray",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-length-of-repeated-subarray",
  "relativeDir": "M/Maximum Length of Repeated Subarray",
  "slug": "0718-maximum-length-of-repeated-subarray",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 58,
    "java": 17,
    "python": 12,
    "javascript": 18
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int findLength(vector<int>& nums1, vector<int>& nums2) {\r\n        \r\n        \r\n        int n1 = nums1.size();\r\n        int n2 = nums2.size();\r\n\r\n        //moving num2 on num1\r\n        \r\n        int ptr2 = 0;\r\n        \r\n        int cnt = 0;\r\n        \r\n        int largest  = INT_MIN;\r\n        \r\n        for(int i=0;i<n1;i++)\r\n        {\r\n            cnt = 0;\r\n            for(int j=i,ptr2=0;j<n1 && ptr2<n2;j++,ptr2++)\r\n            {\r\n                if(nums1[j]==nums2[ptr2])\r\n                {\r\n                    cnt++;\r\n                    \r\n                }\r\n                else\r\n                {\r\n                    cnt = 0;\r\n                }\r\n                largest = max(largest,cnt);\r\n            }\r\n        }\r\n        \r\n        //moving num1 on num2\r\n        ptr2 = 0;\r\n        cnt = 0;\r\n        for(int i=0;i<n2;i++)\r\n        {\r\n            cnt = 0;\r\n            for(int j=i,ptr2=0;j<n2 && ptr2<n1;j++,ptr2++)\r\n            {\r\n                if(nums2[j]==nums1[ptr2])\r\n                {\r\n                    cnt++;\r\n                }\r\n                else\r\n                {\r\n                    cnt = 0;\r\n                }\r\n                largest = max(largest,cnt);\r\n            }\r\n        }\r\n        \r\n        return largest;\r\n        \r\n    }\r\n};",
    "python": "class Solution:\r\n    def findLength(self, nums1: List[int], nums2: List[int]) -> int:\r\n        dp = [[0]*(len(nums1)+ 1) for _ in range(len(nums2) + 1)]\r\n        max_len = 0\r\n        for row in range(len(nums2)):\r\n            for col in range(len(nums1)):\r\n                if nums2[row] == nums1[col]:\r\n                    dp[row][col] = 1 + dp[row - 1][col - 1]\r\n                    max_len = max(max_len,dp[row][col])\r\n                else:\r\n                    dp[row][col] = 0\r\n        return max_len",
    "java": "class Solution {\r\n    public int findLength(int[] nums1, int[] nums2) {\r\n        int n=  nums1.length , m = nums2.length;\r\n        int[][] dp = new int [n+1][m+1];\r\n        // for(int [] d: dp)Arrays.fill(d,-1);\r\n        int ans =0;\r\n            for(int i =n-1;i>=0;i--){\r\n                for(int j = m-1 ;j>=0;j--){\r\n                    if(nums1[i]==nums2[j]){\r\n                        dp[i][j] = dp[i+1][j+1]+1;\r\n                        if(ans<dp[i][j])ans = dp[i][j];\r\n                    }\r\n                }\r\n            } \r\n        return ans;\r\n    }\r\n}",
    "javascript": "// Runtime: 560 ms (Top 30.97%) | Memory: 88.4 MB (Top 38.43%)\r\nvar findLength = function(nums1, nums2) {\r\n    let dp = new Array(nums1.length+1).fill(0).map(\r\n        () => new Array(nums2.length+1).fill(0)\r\n    )\r\n    let max = 0;\r\n    for (let i = 0; i < nums1.length; i++) {\r\n        for (let j = 0; j < nums2.length; j++) {\r\n            if (nums1[i] != nums2[j]) {\r\n                continue;\r\n            }\r\n            dp[i+1][j+1] = dp[i][j]+1;\r\n            max = Math.max(max, dp[i+1][j+1]);\r\n        }\r\n    }\r\n\r\n    return max;\r\n};"
  }
}
