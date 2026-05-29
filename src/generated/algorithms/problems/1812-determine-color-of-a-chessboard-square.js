export default {
  "id": 1812,
  "name": "Determine Color of a Chessboard Square",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/determine-color-of-a-chessboard-square",
  "relativeDir": "D/Determine Color of a Chessboard Square",
  "slug": "1812-determine-color-of-a-chessboard-square",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 6,
    "java": 5,
    "python": 4
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool squareIsWhite(string coordinates) {\r\n        return (coordinates[0] - 'a' + coordinates[1] - '1') % 2;\r\n    }\r\n};",
    "python": "# Runtime: 62 ms (Top 10.11%) | Memory: 13.8 MB (Top 56.37%)\r\nclass Solution:\r\n    def squareIsWhite(self, coordinates: str) -> bool:\r\n        return (ord(coordinates[0])+ord(coordinates[1]))%2",
    "java": "class Solution {\r\n    public boolean squareIsWhite(String coordinates) {\r\n        return (coordinates.charAt(0) - 'a'+ coordinates.charAt(1) - '0')%2==0 ;\r\n    }\r\n}"
  }
}
