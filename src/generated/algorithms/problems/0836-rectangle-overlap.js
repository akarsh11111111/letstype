export default {
  "id": 836,
  "name": "Rectangle Overlap",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/rectangle-overlap",
  "relativeDir": "R/Rectangle Overlap",
  "slug": "0836-rectangle-overlap",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 26,
    "java": 19,
    "python": 7,
    "javascript": 12
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool isRectangleOverlap(vector<int>& rec1, vector<int>& rec2) {\r\n        int ax1 = rec1[0];\r\n        int ay1 = rec1[1];\r\n        int ax2 = rec1[2];\r\n        int ay2 = rec1[3];\r\n \r\n        int bx1 = rec2[0];\r\n        int by1 = rec2[1];\r\n        int bx2 = rec2[2];\r\n        int by2 = rec2[3];\r\n\r\n        int x5 = max(ax1,bx1);\r\n        int y5 = max(ay1,by1);\r\n        int x6 = min(ax2,bx2);\r\n        int y6 = min(ay2,by2);\r\n        if(x5<x6 && y5<y6){\r\n            return true;\r\n        }\r\n        else{\r\n            return false;\r\n        }\r\n\r\n    }\r\n};",
    "python": "class Solution:\r\n    def isRectangleOverlap(self, rec1: List[int], rec2: List[int]) -> bool:\r\n        if (rec2[1]>=rec1[3] or rec2[0]>=rec1[2] or rec2[3]<=rec1[1] or rec1[0]>=rec2[2])  :\r\n            \r\n            return False\r\n        else:\r\n            return True",
    "java": "// Rectangle Overlap\r\n// https://leetcode.com/problems/rectangle-overlap/\r\n\r\nclass Solution {\r\n    public boolean isRectangleOverlap(int[] rec1, int[] rec2) {\r\n        int x1 = rec1[0];\r\n        int y1 = rec1[1];\r\n        int x2 = rec1[2];\r\n        int y2 = rec1[3];\r\n        int x3 = rec2[0];\r\n        int y3 = rec2[1];\r\n        int x4 = rec2[2];\r\n        int y4 = rec2[3];\r\n        if (x1 >= x4 || x2 <= x3 || y1 >= y4 || y2 <= y3) {\r\n            return false;\r\n        }\r\n        return true;       \r\n    }\r\n}",
    "javascript": "// Runtime: 104 ms (Top 17.42%) | Memory: 41.6 MB (Top 89.39%)\r\n/**\r\n * @param {number[]} rec1\r\n * @param {number[]} rec2\r\n * @return {boolean}\r\n */\r\nvar isRectangleOverlap = function(rec1, rec2) {\r\n    if(rec1[0] >= rec2[2] || rec2[0] >= rec1[2] || rec1[1] >= rec2[3] || rec2[1] >= rec1[3]){\r\n        return false\r\n    }\r\n    return true\r\n};"
  }
}
