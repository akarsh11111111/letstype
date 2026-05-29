export default {
  "id": 1727,
  "name": "Largest Submatrix With Rearrangements",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/largest-submatrix-with-rearrangements",
  "relativeDir": "L/Largest Submatrix With Rearrangements",
  "slug": "1727-largest-submatrix-with-rearrangements",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 30,
    "java": 23,
    "python": 30,
    "javascript": 29
  },
  "languages": {
    "cpp": "// Runtime: 145 ms (Top 80.13%) | Memory: 84.00 MB (Top 13.41%)\r\n\r\n#pragma GCC optimize(\"O3\")\r\nclass Solution {\r\npublic:\r\n    int largestSubmatrix(vector<vector<int>>& matrix) {\r\n        int m=matrix.size(), n=matrix[0].size();\r\n        int area=count(matrix[0].begin(), matrix[0].end(), 1);\r\n        for(int i=1;  i<m; i++){\r\n            #pragma unroll\r\n            for(int j=0; j<n; j++){\r\n                if (matrix[i][j]!=0)\r\n                    matrix[i][j]+=matrix[i-1][j];\r\n            }\r\n            auto row=matrix[i];\r\n            sort(row.begin(), row.end());\r\n            #pragma unroll\r\n            for(int i=0; i<n; i++)\r\n                area=max(area, row[i]*(n-1-i+1));\r\n        }\r\n        return area;\r\n    }\r\n};\r\nauto init = []()\r\n{ \r\n    ios::sync_with_stdio(0);\r\n    cin.tie(0);\r\n    cout.tie(0);\r\n    return 'c';\r\n}();",
    "python": "# Runtime: 3821 ms (Top 7.64%) | Memory: 37.3 MB (Top 95.14%)\r\nfrom collections import Counter\r\n\r\nclass Solution:\r\n    def largestSubmatrix(self, matrix: List[List[int]]) -> int:\r\n        M = len(matrix)\r\n        N = len(matrix[0])\r\n\r\n        colcons = [] # preprocess columns\r\n        for c in range(N):\r\n            cons = []\r\n            s = 0\r\n            for r in range(M):\r\n                if not matrix[r][c]:\r\n                    s = 0\r\n                else:\r\n                    s += 1\r\n                cons.append(s)\r\n            colcons.append(cons)\r\n        # colcons[c][r] is how much 1's we'll get if we start from column c at row r and go up\r\n\r\n        best = 0\r\n        for r in range(M):\r\n            # try r as the lowest row\r\n            C = Counter(colcons[c][r] for c in range(N))\r\n            vs = sorted(C.keys(), reverse=True)\r\n            cs = accumulate(C[v] for v in vs)\r\n            for v,c in zip(vs,cs):\r\n                best = max(best,v*c)\r\n        return best",
    "java": "// Runtime: 9 ms (Top 97.37%) | Memory: 73.60 MB (Top 19.35%)\r\n\r\nclass Solution {\r\n    public int largestSubmatrix(int[][] matrix) {\r\n        int m = matrix.length, n = matrix[0].length;\r\n        for (int i = 1; i < m; ++i) {\r\n            for (int j = 0; j < n; ++j) {\r\n                if (matrix[i][j] == 1) {\r\n                    matrix[i][j] = matrix[i - 1][j] + 1;\r\n                }\r\n            }\r\n        }\r\n        int ans = 0;\r\n        for (var row : matrix) {\r\n            Arrays.sort(row);\r\n            for (int j = n - 1, k = 1; j >= 0 && row[j] > 0; --j, ++k) {\r\n                int s = row[j] * k;\r\n                ans = Math.max(ans, s);\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n}",
    "javascript": "var largestSubmatrix = function(matrix) {\r\n    let n = matrix.length;\r\n    let m = matrix[0].length;\r\n    let col = new Array(m).fill(0);\r\n    let res = 0;\r\n    for(let i = 0; i < n; i++){\r\n        for(let j = 0; j < m; j++){\r\n            if(matrix[i][j]) col[j]++;\r\n            else col[j] = 0;\r\n        }\r\n        res = counting(col, res);\r\n    }\r\n    return res;\r\n};\r\n\r\n\r\n//if you did 84. Largest Rectangle in Histogram, you can replace the following part with your 84 answer and don't forget to sort.\r\nlet counting = function(column, max) {\r\n     let sorted = [...column].sort((a,b)=>b-a);\r\n     let k, j;\r\n    for (let i=0; i < sorted.length ;i++){\r\n        if(sorted[i]===sorted[i-1]) continue;  \r\n        k = j = i;\r\n        while(sorted[j]&&sorted[j]>=sorted[i]) j++;\r\n        while(sorted[k]&&sorted[k]>=sorted[i]) k--;\r\n        max = Math.max(sorted[i]*Math.abs(k-j+1), max);\r\n    }\r\n    return max;\r\n};"
  }
}
