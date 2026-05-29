export default {
  "id": 1037,
  "name": "Valid Boomerang",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/valid-boomerang",
  "relativeDir": "V/Valid Boomerang",
  "slug": "1037-valid-boomerang",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 13,
    "java": 12,
    "python": 4,
    "javascript": 20
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool isBoomerang(vector<vector<int>>& points) {\r\n        if (points.size()<=2) return false;\r\n        int x0=points[0][0], y0=points[0][1];\r\n        int x1=points[1][0], y1=points[1][1];\r\n        int x2=points[2][0], y2=points[2][1];\r\n        int dx1=x1-x0, dy1=y1-y0;\r\n        int dx2=x2-x1, dy2=y2-y1;\r\n        if (dy1*dx2==dy2*dx1) return false;\r\n        return true;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def isBoomerang(self, points: List[List[int]]) -> bool:\r\n        a,b,c=points\r\n        return (b[1]-a[1])*(c[0]-b[0]) != (c[1]-b[1])*(b[0]-a[0])",
    "java": "// Runtime: 1 ms (Top 58.12%) | Memory: 42.3 MB (Top 12.94%)\r\nclass Solution {\r\n    public boolean isBoomerang(int[][] points) {\r\n        double a, b, c, d, area;\r\n        a=points[0][0]-points[1][0];\r\n        b=points[1][0]-points[2][0];\r\n        c=points[0][1]-points[1][1];\r\n        d=points[1][1]-points[2][1];\r\n        area=0.5*((a*d)-(b*c));\r\n        return area!=0;\r\n    }\r\n}",
    "javascript": "var isBoomerang = function(points) {\r\n    \r\n // if any two of the three points are the same point return false;\r\n \r\n if (points[0][0] == points[1][0] && points[0][1] == points[1][1]) return false;\r\n if (points[0][0] == points[2][0] && points[0][1] == points[2][1]) return false;\r\n if (points[2][0] == points[1][0] && points[2][1] == points[1][1]) return false;\r\n \r\n // if the points are in a straight line return false;\r\n \r\n let slope1 = (points[0][1] - points[1][1]) / (points[0][0] - points[1][0]);\r\n let slope2 = (points[1][1] - points[2][1]) / (points[1][0] - points[2][0]);\r\n if (points[0][0] == points[1][0] && points[0][0] === points[2][0]) return false;\r\n if (points[0][1] == points[1][1] && points[0][1] === points[2][1]) return false;\r\n \r\n if (slope1 === slope2) return false;\r\n \r\n return true;\r\n \r\n};"
  }
}
