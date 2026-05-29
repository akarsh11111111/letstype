export default {
  "id": 1503,
  "name": "Last Moment Before All Ants Fall Out of a Plank",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/last-moment-before-all-ants-fall-out-of-a-plank",
  "relativeDir": "L/Last Moment Before All Ants Fall Out of a Plank",
  "slug": "1503-last-moment-before-all-ants-fall-out-of-a-plank",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 9,
    "java": 14,
    "python": 8,
    "javascript": 8
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int getLastMoment(int n, vector<int>& left, vector<int>& right) {\r\n        int mx=0;\r\n        for(auto&i:left)mx=max(mx,i);\r\n        for(auto&i:right)mx=max(mx,n-i);\r\n        return mx;\r\n    }\r\n};",
    "python": "# Runtime: 316 ms (Top 23.17%) | Memory: 15 MB (Top 18.90%)\r\nclass Solution:\r\n    def getLastMoment(self, n: int, left: List[int], right: List[int]) -> int:\r\n        # make sure left and right are not empty without changing the answer\r\n        left.append(0)\r\n        right.append(n)\r\n\r\n        return max(max(left), n - min(right))",
    "java": "class Solution {\r\n    public int getLastMoment(int n, int[] left, int[] right) {\r\n        int max = 0;\r\n        for (int i = 0; i < left.length; i++) {\r\n            if (left[i] > max)\r\n                max = left[i];\r\n        }\r\n        for (int i = 0; i < right.length; i++) {\r\n            if (n - right[i] > max)\r\n                max = n - right[i];\r\n        }\r\n        return max;\r\n    }\r\n}",
    "javascript": "// Runtime: 54 ms (Top 83.3%) | Memory: 45.05 MB (Top 16.6%)\r\n\r\nvar getLastMoment = function(n, left, right) {\r\n    const maxLeft = Math.max(...left);\r\n    const minRight = Math.min(...right);\r\n\r\n    return Math.max(n - minRight, maxLeft);\r\n};"
  }
}
