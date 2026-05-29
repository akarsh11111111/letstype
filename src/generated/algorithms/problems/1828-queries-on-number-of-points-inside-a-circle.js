export default {
  "id": 1828,
  "name": "Queries on Number of Points Inside a Circle",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/queries-on-number-of-points-inside-a-circle",
  "relativeDir": "Q/Queries on Number of Points Inside a Circle",
  "slug": "1828-queries-on-number-of-points-inside-a-circle",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 41,
    "java": 28,
    "python": 11,
    "javascript": 17
  },
  "languages": {
    "cpp": "class Solution {\r\n    void buildTree(vector<vector<int>>& p, int depth, int i, int j) {\r\n        if (j - i <= 1) return;\r\n        \r\n        int k = 1 - depth & 1, m = i + (j - i) / 2;\r\n        nth_element(p.begin() + i, p.begin() + m, p.begin() + j,\r\n                    [k](auto &a, auto& b) { return a[k] < b[k]; });\r\n        partition(p.begin() + i, p.begin() + j,\r\n                  [k, m, &p](auto &a){ return a[k] < p[m][k]; });\r\n\r\n        buildTree(p, depth+1, i, m);\r\n        buildTree(p, depth+1, m+1, j);\r\n    }\r\n    \r\n    inline bool isPointInside(const vector<int> &p, const vector<int> &c) {\r\n        return (p[0] - c[0]) * (p[0] - c[0]) + (p[1] - c[1]) * (p[1] - c[1]) <= c[2] * c[2];\r\n    }\r\n\r\n    int pointsInside(const vector<vector<int>> &t, const vector<int> &q, int depth,\r\n                    int i, int j) {\r\n        if (j == i) return 0;\r\n        else if (j - i == 1) return isPointInside(t[i], q);\r\n        \r\n        int k = 1 - depth & 1, m = i + (j - i) / 2, diff = t[m][k] -  q[k];\r\n        if (diff > q[2]) return pointsInside(t, q, depth+1, i, m);\r\n        else if (diff < -q[2]) return pointsInside(t, q, depth+1, m+1, j);\r\n        else\r\n            return pointsInside(t, q, depth+1, i, m)\r\n                + isPointInside(t[m], q)\r\n                + pointsInside(t, q, depth+1, m+1, j);\r\n    }\r\npublic:\r\n    vector<int> countPoints(vector<vector<int>>& points, vector<vector<int>>& queries) {\r\n        buildTree(points, 0, 0, points.size());\r\n\r\n        vector<int> res(queries.size());\r\n        for (size_t i = 0; i < queries.size(); ++i)\r\n            res[i] = pointsInside(points, queries[i], 0, 0, points.size());\r\n        return res;\r\n    }\r\n};",
    "python": "class Solution:\r\n\tdef countPoints(self, points: List[List[int]], queries: List[List[int]]) -> List[int]:\r\n\t\tcircle = []\r\n\t\tfor x2, y2, radius in queries:\r\n\t\t\tcount = 0\r\n\t\t\tfor x1, y1 in points:\r\n\t\t\t\tdis = ((x2-x1)**2+(y2-y1)**2)**0.5 # Use the Distance Formula...\r\n\t\t\t\tif dis <= radius:\r\n\t\t\t\t\tcount += 1\r\n\t\t\tcircle.append(count)\r\n\t\treturn circle",
    "java": "// Runtime: 16 ms (Top 100.00%) | Memory: 42.8 MB (Top 96.08%)\r\n\r\nclass Solution {\r\n    public int[] countPoints(int[][] points, int[][] queries) {\r\n        int len = queries.length;\r\n        int[] ans = new int[len];\r\n\r\n        for(int i=0;i<len;i++){\r\n            int count = 0;\r\n            int radius2 = queries[i][2] * queries[i][2];\r\n            for(int p=0; p<points.length;p++){\r\n                int[] point = points[p];\r\n                if(radius2(point,queries[i]) <= radius2){\r\n                    count += 1;\r\n                }\r\n            }\r\n            ans[i] = count;\r\n        }\r\n\r\n        return ans;\r\n    }\r\n\r\n    private int radius2(int[] point, int[] center){\r\n        int x = point[0] - center[0];\r\n        int y = point[1] - center[1];\r\n        return x*x + y*y;\r\n    }\r\n}",
    "javascript": "var countPoints = function(points, queries) {\r\n    const getDistance = (x1,y1,x2,y2) => {\r\n        return Math.sqrt((x1-x2) * (x1-x2) + (y1-y2) * (y1-y2));\r\n    }\r\n    \r\n    let output = [];\r\n    \r\n    queries.forEach(([a,b,r]) => {\r\n        let count = 0;\r\n        points.forEach(([x,y]) => {\r\n            if(getDistance(a,b,x,y) <= r) count += 1;\r\n        });\r\n        output.push(count);\r\n    });\r\n \r\n    return output;\r\n};"
  }
}
