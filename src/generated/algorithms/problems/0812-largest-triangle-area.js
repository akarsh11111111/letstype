export default {
  "id": 812,
  "name": "Largest Triangle Area",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/largest-triangle-area",
  "relativeDir": "L/Largest Triangle Area",
  "slug": "0812-largest-triangle-area",
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
    "python": 11,
    "javascript": 28
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    double largestTriangleArea(vector<vector<int>>& points) {\r\n        double ans = 0.00000;\r\n        for(int i = 0; i<points.size(); ++i)\r\n            for(int j = 0; j<points.size(); ++j)\r\n                if(i!=j)\r\n                    for(int k = 0; k<points.size(); ++k)\r\n                        if(k!=i and k!=j)\r\n                        {\r\n                            //For triangle formed by 3 points a,b and c: the area will be = 1/2 * [(xa*yb + xb*yc + xc*ya) - (ya*xb + yb*xc + yc*xa)]\r\n                            ans = max(ans, 0.50000 * (points[i][0]*points[j][1] + points[j][0]*points[k][1] + points[k][0]*points[i][1] - points[i][1]*points[j][0] - points[j][1]*points[k][0] - points[k][1]*points[i][0]));\r\n                        }\r\n        return ans;\r\n    }\r\n};",
    "python": "from itertools import combinations\r\nclass Solution:\r\n    def largestTriangleArea(self, points: List[List[int]]) -> float:\r\n        maxA = 0\r\n        for p1, p2, p3 in combinations(points, 3):\r\n            x1, y1 = p1\r\n            x2, y2 = p2\r\n            x3, y3 = p3\r\n            A=(1/2) * abs(x1*(y2 - y3) + x2*(y3 - y1)+ x3*(y1 - y2))\r\n            if A > maxA: maxA = A\r\n        return maxA",
    "java": "class Solution {\r\n    public double largestTriangleArea(int[][] points) {\r\n        double ans = 0;\r\n        int n = points.length;\r\n        for(int i=0;i<n;i++){\r\n            for(int j=i+1;j<n;j++){\r\n                for(int k=j+1;k<n;k++){\r\n                    ans = Math.max(ans,0.5*Math.abs(points[i][0]*(points[j][1] - points[k][1]) + points[j][0]*( points[k][1] - points[i][1]) + points[k][0]*(points[i][1] - points[j][1])));\r\n                }\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n}",
    "javascript": "var largestTriangleArea = function(points) {\r\n    const n = points.length;\r\n    let maxArea = 0;\r\n    \r\n    for (let i = 0; i < n; i++) {\r\n        for (let j = i + 1; j < n; j++) {\r\n            for (k = j + 1; k < n; k++) {\r\n                const area = calcArea(points[i], points[j], points[k]);\r\n                maxArea = Math.max(maxArea, area);\r\n            }\r\n        }\r\n    }\r\n\r\n    return maxArea;\r\n};\r\n\r\n\r\nfunction calcArea(coordA, coordB, coordC){\r\n    const [xCoordA, yCoordA] = coordA;\r\n    const [xCoordB, yCoordB] = coordB;\r\n    const [xCoordC, yCoordC] = coordC;\r\n    \r\n    const sideA = xCoordA * (yCoordB - yCoordC);\r\n    const sideB = xCoordB * (yCoordC - yCoordA);\r\n    const sideC = xCoordC * (yCoordA - yCoordB);\r\n    \r\n    return Math.abs((sideA + sideB + sideC) / 2);\r\n}"
  }
}
