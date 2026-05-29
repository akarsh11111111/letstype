export default {
  "id": 149,
  "name": "Max Points on a Line",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/max-points-on-a-line",
  "relativeDir": "M/Max Points on a Line",
  "slug": "0149-max-points-on-a-line",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 43,
    "java": 26,
    "python": 19,
    "javascript": 58
  },
  "languages": {
    "cpp": "// Runtime: 38 ms (Top 82.70%) | Memory: 13.7 MB (Top 45.37%)\r\nclass Solution {\r\npublic:\r\n\r\n    //DP solution\r\n    //TC-O(N*N)\r\n    //SC- ~ O(N*N)\r\n    //Custom Sort\r\n    bool static cmp(vector<int> p1,vector<int> p2){\r\n        if(p1[0]==p2[0])\r\n            return p1[1]<p2[1];\r\n        return p1[0]<p2[0];\r\n    }\r\n\r\n    //Slope Calculating\r\n    float calcSlope(int x1,int y1,int x2,int y2){\r\n       return (y2-y1)/(float)(x2-x1);\r\n    }\r\n    int maxPoints(vector<vector<int>>& points) {\r\n        if(points.size()==2 || points.size()==1)\r\n            return points.size();\r\n\r\n        sort(points.begin(),points.end(),cmp);\r\n        int ans=1;\r\n        //How much points having same slope at current index\r\n        vector<unordered_map<float,int>> dp(points.size()+1);\r\n        for(int i=1;i<points.size();i++){\r\n            for(int j=0;j<i;j++){\r\n                float slope=calcSlope(points[j][0],points[j][1],points[i][0],points[i][1]);\r\n                if(dp[j].find(slope)!=dp[j].end()){\r\n                    dp[i][slope]=1+dp[j][slope];\r\n                    ans=max(ans,dp[i][slope]);\r\n                }else{\r\n                    dp[i][slope]+=1;\r\n                }\r\n            }\r\n        }\r\n        //return ans\r\n\r\n        return ans+1;\r\n\r\n    }\r\n};",
    "python": "class Solution:\r\n    def maxPoints(self, points: List[List[int]]) -> int:\r\n        ans = 0\r\n        n = len(points)\r\n        \r\n        for i in range(n):\r\n            d = collections.defaultdict(int)\r\n            for j in range(n):\r\n                if i != j:\r\n                    slope = float(\"inf\")\r\n                    if (points[j][1] - points[i][1] != 0):\r\n                        slope = (points[j][0] - points[i][0]) / (points[j][1] - points[i][1])\r\n                    d[slope] += 1\r\n            if d:\r\n                ans = max(ans, max(d.values())+1)\r\n            else:\r\n                ans = max(ans, 1)\r\n        \r\n        return ans",
    "java": "// Runtime: 48 ms (Top 45.59%) | Memory: 42 MB (Top 92.59%)\r\nclass Solution {\r\n    public int maxPoints(int[][] points) {\r\n        int n = points.length;\r\n        if(n == 1) return n;\r\n        int result = 0;\r\n        for(int i = 0; i< n; i++){\r\n            for(int j = i+1; j< n; j++){\r\n                result = Math.max(result, getPoints(i, j, points));\r\n            }\r\n        }\r\n        return result;\r\n    }\r\n    private int getPoints(int pt1, int pt2, int[][] points){\r\n        int[] point1 = points[pt1], point2 = points[pt2];\r\n        double slope = (point1[1] - point2[1])/(double)(point1[0] - point2[0]);\r\n        int result = 0;\r\n        for(int i = 0; i<points.length; i++){\r\n            if((points[i][0] == point1[0] && points[i][1] == point1[1]) ||\r\n               (slope == Double.POSITIVE_INFINITY && (point1[1] - points[i][1])/(double)(point1[0] - points[i][0]) == Double.POSITIVE_INFINITY) ||\r\n               ((double)(point1[1] - points[i][1])/(double)(point1[0] - points[i][0]) == slope))\r\n                result++;\r\n        }\r\n        return result;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number[][]} points\r\n * @return {number}\r\n */\r\n\r\nvar maxPoints = function(points) {\r\n    if (points.length === 1) {\r\n        return 1;\r\n    }\r\n    \r\n    const slopes = {};\r\n    let dx, dy;\r\n    let xbase, ybase;\r\n    let xref, yref, key;\r\n    const INFINITE_SLOPE = 'infinite';\r\n    \r\n    for(let i = 0; i < points.length; i++) {\r\n        [xbase, ybase] = points[i];\r\n        \r\n        for(let j = i + 1; j < points.length; j++) {                       \r\n            \r\n            [xref, yref] = points[j];\r\n            \r\n            if (xref === xbase) {\r\n                key = `x = ${xref}`;\r\n                \r\n            } else {\r\n                dx = xref - xbase;\r\n                dy = yref - ybase;\r\n                \r\n                let m = dy / dx;\r\n                let c = yref - m * xref;\r\n                \r\n                m = m.toFixed(4);\r\n                c = c.toFixed(4);\r\n                \r\n                key = `y = ${m}x + ${c}`;                \r\n            }\r\n            \r\n            slopes[key] || (slopes[key] = 0);\r\n            slopes[key]++;\r\n        }\r\n    }\r\n    \r\n    const maxPairs = Math.max(...Object.values(slopes));\r\n    \r\n    if (maxPairs === 2) {\r\n        return 2;\r\n    }\r\n    \r\n    for(let i = 1; i <= 300; i++) {\r\n        if (i * (i - 1) / 2 === maxPairs) {\r\n            return i;\r\n        }\r\n    }\r\n    \r\n    return 0;\r\n};"
  }
}
