export default {
  "id": 54,
  "name": "Spiral Matrix",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/spiral-matrix",
  "relativeDir": "S/Spiral Matrix",
  "slug": "0054-spiral-matrix",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 66,
    "java": 30,
    "python": 32,
    "javascript": 31
  },
  "languages": {
    "cpp": "\r\nclass Solution {\r\npublic:\r\n\r\n    vector<int> _res;\r\n    vector<vector<bool>> _visited;\r\n\r\n    void spin(vector<vector<int>>& matrix, int direction, int i, int j) {\r\n\r\n        _visited[i][j] = true;\r\n        _res.push_back(matrix[i][j]);\r\n\r\n        switch (direction){\r\n            // left to right\r\n            case 0:\r\n                if ( j+1 >= matrix[0].size() || _visited[i][j+1]) {\r\n                    direction = 1;\r\n                    i++;\r\n                } else {\r\n                    j++;\r\n                }\r\n                break;\r\n            // up to bottom\r\n            case 1:\r\n                if ( i+1 >= matrix.size() || _visited[i+1][j]) {\r\n                    direction = 2;\r\n                    j--;\r\n                } else {\r\n                    i++;\r\n                }\r\n                break;\r\n            // right to left\r\n            case 2:\r\n                if ( j == 0 || _visited[i][j-1]) {\r\n                    direction = 3;\r\n                    i--;\r\n                } else {\r\n                    j--;\r\n                }\r\n                break;\r\n            // bottom to up\r\n            case 3:\r\n                if ( i == 0 || _visited[i-1][j]) {\r\n                    direction = 0;\r\n                    j++;\r\n                } else {\r\n                    i--;\r\n                }\r\n                break;\r\n        }\r\n        if ( i < 0 || i >= matrix.size() || j < 0 || j >= matrix[0].size() ) {\r\n            return;\r\n        }\r\n        if ( _visited[i][j] ) {\r\n            return;\r\n        }\r\n        spin(matrix, direction, i, j);\r\n    }\r\n    \r\n    vector<int> spiralOrder(vector<vector<int>>& matrix) {\r\n        _res.clear();\r\n        _visited = vector<vector<bool>>(matrix.size(), std::vector<bool>(matrix[0].size(), false));\r\n        spin(matrix, 0, 0, 0);\r\n        return _res;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:\r\n        col, row = len(matrix[0]), len(matrix)\r\n        l, t, r, b = 0, 0, col - 1, row - 1\r\n        res = []\r\n        while l <= r and t <= b:\r\n            for i in range(l, r):\r\n                res.append(matrix[t][i])\r\n            for i in range(t, b):\r\n                res.append(matrix[i][r])\r\n            \r\n\t\t\t# Append the orphan left by the open interval\r\n            if t == b:\r\n                res.append(matrix[t][r])\r\n            else:\r\n                # From right to left at the bottom\r\n                for i in range(r, l, -1):\r\n                    res.append(matrix[b][i])\r\n            \r\n\t\t\t# Avoid duplicated appending if it is a square\r\n            if l == r and t != b:\r\n                res.append(matrix[b][r])\r\n            else:\r\n                # From bottom to top at the left\r\n                for i in range(b, t, -1):\r\n                    res.append(matrix[i][l])\r\n            l += 1\r\n            t += 1\r\n            r -= 1\r\n            b -= 1\r\n\r\n        return res",
    "java": "class Solution {\r\n    public List<Integer> spiralOrder(int[][] matrix) {\r\n        List<Integer> ans = new ArrayList<>();\r\n        int top = 0, left = 0, bottom = matrix.length - 1, right = matrix[0].length - 1;\r\n\r\n        while (top <= bottom && left <= right) \r\n        {\r\n            for (int i = left; i <= right; i++)\r\n                ans.add(matrix[top][i]);\r\n            top++;\r\n\r\n            for (int i = top; i <= bottom; i++)\r\n                ans.add(matrix[i][right]);\r\n            right--;\r\n\r\n            if (top <= bottom) {\r\n                for (int i = right; i >= left; i--)\r\n                    ans.add(matrix[bottom][i]);\r\n                bottom--;\r\n            }\r\n\r\n            if (left <= right) {\r\n                for (int i = bottom; i >= top; i--)\r\n                    ans.add(matrix[i][left]);\r\n                left++;\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n}",
    "javascript": "// Runtime: 121 ms (Top 5.08%) | Memory: 41.2 MB (Top 98.87%)\r\n/**\r\n * @param {number[][]} matrix\r\n * @return {number[]}\r\n */\r\nvar spiralOrder = function(matrix) {\r\n    let [top, bot, left, right, ans] = [0, matrix.length - 1, 0, matrix[0].length - 1,[]]\r\n\r\n    while ((top <= bot) && (left <= right)) {\r\n        for (let j = left; j <= right; j++) {\r\n            ans.push(matrix[top][j])\r\n        }\r\n        top ++;\r\n        for (let i = top; i <= bot; i++) {\r\n            ans.push(matrix[i][right])\r\n        }\r\n        right --;\r\n        if ((bot < top) || (right < left)) {\r\n            break\r\n        }\r\n        for (let j = right; left <= j; j--){\r\n            ans.push(matrix[bot][j])\r\n        }\r\n        bot --;\r\n        for (let i = bot; top <= i; i--){\r\n            ans.push(matrix[i][left])\r\n        }\r\n        left ++;\r\n    }\r\n    return ans\r\n}"
  }
}
