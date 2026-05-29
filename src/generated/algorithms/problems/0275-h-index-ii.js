export default {
  "id": 275,
  "name": "H-Index II",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/h-index-ii",
  "relativeDir": "H/H-Index II",
  "slug": "0275-h-index-ii",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 20,
    "java": 14,
    "python": 8,
    "javascript": 33
  },
  "languages": {
    "cpp": "// Runtime: 23 ms (Top 74.27%) | Memory: 18.7 MB (Top 49.37%)\r\nclass Solution {\r\npublic:\r\n    int hIndex(vector<int>& citations) {\r\n        int start = 0 , end = citations.size()-1;\r\n        int n = citations.size();\r\n        while(start <= end){\r\n            int mid = start + (end - start) / 2;\r\n            int val = citations[mid];\r\n            if(val == (n - mid)) return citations[mid];\r\n            else if(val < n - mid){\r\n                start = mid + 1;\r\n            }\r\n            else{\r\n                end = mid - 1;\r\n            }\r\n        }\r\n        return n - start;\r\n    }\r\n};",
    "python": "import bisect\r\n\r\nclass Solution:\r\n    def hIndex(self, citations: List[int]) -> int:\r\n        n = len(citations)\r\n        for h in range(n, -1, -1):\r\n            if h <= n - bisect.bisect_left(citations, h):\r\n                return h",
    "java": "class Solution {\r\n    public int hIndex(int[] citations) {\r\n        int n=citations.length;\r\n        int res=0;\r\n        for(int i=0;i<n;i++)\r\n        {\r\n            if(citations[i]>=n-i)\r\n            {\r\n                return n-i;\r\n            }\r\n        }\r\n        return res;\r\n    }\r\n}",
    "javascript": "/**\r\n * The binary search solution.\r\n * \r\n * Time Complexity:  O(log(n))\r\n * Space Complexity: O(1)\r\n * \r\n * @param {number[]} citations\r\n * @return {number}\r\n */\r\nvar hIndex = function(citations) {\r\n\tconst n = citations.length\r\n\r\n\tlet l = 0\r\n\tlet r = n - 1\r\n\r\n\twhile (l <= r) {\r\n\t\tconst m = Math.floor((l + r) / 2)\r\n\r\n\t\tif (citations[m] > n - m) {\r\n\t\t\tr = m - 1\r\n\t\t\tcontinue\r\n\t\t}\r\n\r\n\t\tif (citations[m] < n - m) {\r\n\t\t\tl = m + 1\r\n\t\t\tcontinue\r\n\t\t}\r\n\r\n\t\treturn citations[m]\r\n\t}\r\n\r\n\treturn n - l\r\n}"
  }
}
