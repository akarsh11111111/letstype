export default {
  "id": 1620,
  "name": "Coordinate With Maximum Network Quality",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/coordinate-with-maximum-network-quality",
  "relativeDir": "C/Coordinate With Maximum Network Quality",
  "slug": "1620-coordinate-with-maximum-network-quality",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 33,
    "java": 30,
    "python": 9,
    "javascript": 51
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<int> bestCoordinate(vector<vector<int>>& towers, int radius) {\r\n        int n = towers.size();\r\n        int sum;\r\n        int ans = 0;\r\n        pair<int,int> ansCoor;\r\n\t\t// Calculate for every 'x's and 'y's \r\n        for(int x = 0; x <= 50; x++){\r\n            for(int y = 0; y <= 50; y++){\r\n                sum = 0;\r\n                for(const auto it : towers){\r\n                    int xa = it[0];\r\n                    int ya = it[1];\r\n                    int qa = it[2];\r\n\t\t\t\t\t// get the distance between the two points\r\n                    int distance = pow(x - xa, 2) + pow(y - ya, 2);\r\n                    if(distance > radius * radius) {\r\n                        continue;\r\n                    }\r\n\t\t\t\t\t// increment the quality value\r\n                    sum += (int)(qa / (1 + sqrt(distance)));\r\n                }\r\n\t\t\t\t// store the maximum ans\r\n                if(sum > ans){\r\n                    ans = sum;\r\n                    ansCoor = {x,y};\r\n                }\r\n            }\r\n        }\r\n        return vector<int>{{ansCoor.first, ansCoor.second}};\r\n    }\r\n};",
    "python": "class Solution:\r\n    def bestCoordinate(self, towers: List[List[int]], radius: int) -> List[int]:\r\n        return max(\r\n            (\r\n                (sum(qi // (1 + dist) for xi, yi, qi in towers if (dist := sqrt((xi - x) ** 2 + (yi - y) ** 2)) <= radius),\r\n                 [x, y]) for x in range(51) for y in range(51)\r\n            ),\r\n            key=lambda x: (x[0], -x[1][0], -x[1][1])\r\n        )[1]",
    "java": "// Runtime: 16 ms (Top 84.85%) | Memory: 41.90 MB (Top 33.33%)\r\n\r\nclass Solution {\r\n    public int[] bestCoordinate(int[][] towers, int radius) {\r\n        int minX = 51, maxX = 0, minY = 51, maxY = 0, max = 0;\r\n        int[] res = new int[2];\r\n        for(int[] t : towers) {\r\n            minX = Math.min(minX, t[0]);\r\n            maxX = Math.max(maxX, t[0]);\r\n            minY = Math.min(minY, t[1]);\r\n            maxY = Math.max(maxY, t[1]);\r\n        }\r\n        for(int i = minX; i <= maxX; i++) {\r\n            for(int j = minY; j <= maxY; j++) {\r\n                int sum = 0;\r\n                for(int[] t : towers) {\r\n                    int d = (t[0] - i) *(t[0] - i) + (t[1] - j) *(t[1] - j);\r\n                    if(d <= radius * radius) {\r\n                        sum += t[2] /(1+ Math.sqrt(d));    \r\n                    }\r\n                }\r\n                if(sum > max) {\r\n                    max = sum;\r\n                    res = new int[]{i,j};\r\n                }\r\n            }\r\n        }\r\n        return res;\r\n    }\r\n}",
    "javascript": "var bestCoordinate = function(towers, radius) {\r\n    const n = towers.length;\r\n    const grid = [];\r\n    \r\n    for (let i = 0; i <= 50; i++) {\r\n        grid[i] = new Array(51).fill(0);\r\n    }\r\n    \r\n    \r\n    for (let i = 0; i < n; i++) {\r\n        const [x1, y1, quality1] = towers[i];\r\n        \r\n        for (let x2 = 0; x2 <= 50; x2++) {\r\n            for (let y2 = 0; y2 <= 50; y2++) {\r\n                const dist = Math.sqrt((x1 - x2)**2 + (y1 - y2)**2);\r\n\r\n                if (dist > radius) continue;\r\n\r\n                const network = Math.floor(quality1 / (1 + dist));\r\n                \r\n                grid[x2][y2] += network;\r\n            }\r\n        }\r\n    }\r\n    \r\n\t\r\n    let maxX = 0;\r\n    let maxY = 0;\r\n    let maxVal = grid[0][0];\r\n    \r\n    for (let i = 0; i <= 50; i++) {\r\n        for (let j = 0; j <= 50; j++) {\r\n            const val = grid[i][j];\r\n            \r\n            if (val > maxVal) {\r\n                maxVal = val;\r\n                maxX = i;\r\n                maxY = j;\r\n            }\r\n            else if (val === maxVal) {\r\n                if (i < maxX || (i === maxX && j < maxY)) {\r\n                    maxVal = val;\r\n                    maxX = i;\r\n                    maxY = j;\r\n                }\r\n            }\r\n        }\r\n    }\r\n    \r\n    return [maxX, maxY];\r\n};"
  }
}
