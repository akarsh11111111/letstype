export default {
  "id": 1689,
  "name": "Partitioning Into Minimum Number Of Deci-Binary Numbers",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers",
  "relativeDir": "P/Partitioning Into Minimum Number Of Deci-Binary Numbers",
  "slug": "1689-partitioning-into-minimum-number-of-deci-binary-numbers",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 6,
    "java": 9,
    "python": 4
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int minPartitions(string n) {\r\n        return *max_element(n.begin(), n.end()) - '0';\r\n    }\r\n};",
    "python": "# Runtime: 109 ms (Top 63.86%) | Memory: 14.9 MB (Top 22.11%)\r\nclass Solution:\r\n    def minPartitions(self, n: str) -> int:\r\n        return int(max(n))",
    "java": "class Solution {\r\n    public int minPartitions(String n) {\r\n        int res = 0;\r\n        for (int i = 0; i < n.length(); i++) {\r\n            res = Math.max(res, n.charAt(i) - '0');\r\n        }\r\n        return res;\r\n    }\r\n}"
  }
}
