export default {
  "id": 1266,
  "name": "Minimum Time Visiting All Points",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-time-visiting-all-points",
  "relativeDir": "M/Minimum Time Visiting All Points",
  "slug": "1266-minimum-time-visiting-all-points",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 16,
    "java": 14,
    "python": 15,
    "javascript": 11
  },
  "languages": {
    "cpp": "// Runtime: 13 ms (Top 59.60%) | Memory: 10.2 MB (Top 67.84%)\r\nclass Solution {\r\npublic:\r\n    int minTimeToVisitAllPoints(vector<vector<int>>& points) {\r\n        vector<int>sk;\r\n        int x,y,maxy=0;\r\n        for(int i=0;i<points.size()-1;i++){\r\n            for(int j=0;j<points[i].size()-1;j++){\r\n                x=abs(points[i][j]-points[i+1][j]);\r\n                y=abs(points[i][j+1]-points[i+1][j+1]);\r\n                maxy+=std::max(x,y);\r\n            }\r\n        }\r\n        return maxy;\r\n    }\r\n};",
    "python": "# Runtime: 38 ms (Top 57.7%) | Memory: 13.27 MB (Top 67.6%)\r\n\r\nclass Solution:\r\n    def minTimeToVisitAllPoints(self, points):\r\n        res = 0\r\n        n = len(points)\r\n        for i in range(n-1):\r\n            dx = abs(points[i+1][0]-points[i][0])\r\n            dy = abs(points[i+1][1]-points[i][1])\r\n            res+= max(dx,dy)\r\n        return res\r\n\r\n            \r\nobj = Solution()\r\nprint(obj.minTimeToVisitAllPoints([[1,1],[3,4],[-1,0]]))",
    "java": "// Runtime: 2 ms (Top 57.50%) | Memory: 43.4 MB (Top 57.64%)\r\nclass Solution {\r\n    public int minTimeToVisitAllPoints(int[][] points) {\r\n        int max = 0, x, y;\r\n        for(int i = 0; i < points.length - 1; i++){\r\n            for(int j = 0; j < points[i].length - 1; j++){\r\n                x = Math.abs(points[i][j] - points[i+1][j]);\r\n                y = Math.abs(points[i][j+1] - points[i+1][j+1]);\r\n                max += Math.max(x,y);\r\n            }\r\n        }\r\n        return max;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number[][]} points\r\n * @return {number}\r\n */\r\nvar minTimeToVisitAllPoints = function(points) {\r\n    let sum = 0;\r\n    for(let i=1; i<points.length; i++){\r\n        sum += Math.max(Math.abs(points[i][0] - points[i-1][0]) , Math.abs(points[i][1] - points[i-1][1]));\r\n    }\r\n    return sum;\r\n};"
  }
}
