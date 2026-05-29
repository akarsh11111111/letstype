export default {
  "id": 1779,
  "name": "Find Nearest Point That Has the Same X or Y Coordinate",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate",
  "relativeDir": "F/Find Nearest Point That Has the Same X or Y Coordinate",
  "slug": "1779-find-nearest-point-that-has-the-same-x-or-y-coordinate",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 19,
    "java": 19,
    "python": 12,
    "javascript": 14
  },
  "languages": {
    "cpp": "// Runtime: 362 ms (Top 9.60%) | Memory: 59.3 MB (Top 73.30%)\r\nclass Solution {\r\npublic:\r\n    int nearestValidPoint(int x, int y, vector<vector<int>>& points) {\r\n        int pos = -1;\r\n        int ans = INT_MAX;\r\n\r\n        for(int i=0; i<points.size(); i++){\r\n            if(points[i][0] == x or points[i][1] == y){\r\n                int dist = abs(x-points[i][0]) + abs(y-points[i][1]);\r\n                if(dist < ans){\r\n                    pos = i;\r\n                    ans = dist;\r\n                }\r\n            }\r\n        }\r\n       return pos;\r\n    }\r\n};",
    "python": "# Runtime: 689 ms (Top 99.93%) | Memory: 19.5 MB (Top 5.79%)\r\nclass Solution:\r\n    def nearestValidPoint(self, x: int, y: int, points: List[List[int]]) -> int:\r\n        minDist = math.inf\r\n        ans = -1\r\n        for i in range(len(points)):\r\n            if points[i][0]==x or points[i][1]==y:\r\n                manDist = abs(points[i][0]-x)+abs(points[i][1]-y)\r\n                if manDist<minDist:\r\n                    ans = i\r\n                    minDist = manDist\r\n        return ans",
    "java": "class Solution {\r\n    public int nearestValidPoint(int x, int y, int[][] points) {\r\n        int min=Integer.MAX_VALUE, index=-1, i;\r\n        \r\n        for ( i=0;i<points.length;i++){\r\n            if (x==points[i][0] ||  y==points[i][1]){\r\n                 int d = Math.abs(x - points[i][0]) + Math.abs(y - points[i][1]);\r\n                if (d<min){\r\n                    min=d;\r\n                    index=i;\r\n                }\r\n            }\r\n            \r\n        }\r\n        // if ( min== Integer.MAX_VALUE) return -1; --> no longer needed as index is initialized as -1 in the declartion.\r\n        return  index;\r\n        \r\n    }\r\n}",
    "javascript": "var nearestValidPoint = function(x, y, points) {\r\n    let min = Infinity\r\n    let idx = -1\r\n    points.forEach(([a,b], i)=>{\r\n        if(a===x || b===y){\r\n            const dist = Math.abs(x-a) + Math.abs(y-b)\r\n            if(dist<min){\r\n                idx = i\r\n                min = dist\r\n            }\r\n        }\r\n    })\r\n    return idx\r\n};"
  }
}
