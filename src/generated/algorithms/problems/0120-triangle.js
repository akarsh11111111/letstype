export default {
  "id": 120,
  "name": "Triangle",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/triangle",
  "relativeDir": "T/Triangle",
  "slug": "0120-triangle",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 27,
    "java": 17,
    "python": 21,
    "javascript": 23
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    \r\n    \r\n    int travel(vector<vector<int>>& tr , int lvl , int ind) {\r\n        \r\n        if(ind >= tr[lvl].size()) // To check if we are going out of bound \r\n            return INT_MAX;\r\n        \r\n        if(lvl == tr.size() - 1) { // Return if we are on last line\r\n            return tr[lvl][ind];\r\n        }\r\n        \r\n        int s = travel(tr , lvl + 1, ind ); // Go South\r\n        int se = travel(tr , lvl + 1 , ind + 1); // Go South East \r\n        \r\n\t\t// Return the minimum of south and south east + cost of the index we are currently at.\r\n\t\t\r\n        return min(s , se) + tr[lvl][ind]; \r\n        \r\n    }\r\n    \r\n    \r\n    int minimumTotal(vector<vector<int>>& triangle) {\r\n        return travel(triangle , 0 , 0);\r\n    }\r\n};",
    "python": "class Solution:\r\n    def minimumTotal(self, t: List[List[int]]) -> int:\r\n        dp = []\r\n        dp.append(t[0])\r\n        \r\n        r = len(t)\r\n        answer = float('inf')\r\n        for i in range(1, r):\r\n            c = len(t[i])\r\n            dp.append([])\r\n            for j in range(0, c):\r\n                if j == 0:\r\n                    val = dp[i - 1][j] + t[i][j]\r\n                elif j == c - 1:\r\n                    val = dp[i - 1][j - 1] + t[i][j]\r\n                else:\r\n                    val = min(dp[i - 1][j], dp[i - 1][j - 1]) + t[i][j]\r\n                if i == r - 1:\r\n                    answer = min(answer, val)\r\n                dp[i].append(val)\r\n        return answer if r > 1 else t[0][0]",
    "java": "// Runtime: 6 ms (Top 41.54%) | Memory: 43.9 MB (Top 66.49%)\r\nclass Solution {\r\n    public int minimumTotal(List<List<Integer>> triangle) {\r\n\r\n        int n = triangle.get( triangle.size() - 1).size();\r\n        int dp[] = new int[n + 1];\r\n\r\n        for(int i = triangle.size() - 1; i>=0; i--)\r\n        {\r\n            for(int j = 0; j<triangle.get(i).size(); j++)\r\n                dp[j] = triangle.get(i).get(j) + Math.min(dp[j], dp[j+1]);\r\n        }\r\n\r\n        return dp[0];\r\n\r\n    }\r\n}",
    "javascript": "var minimumTotal = function(triangle) {\r\n    const memo = {};\r\n    \r\n    function minPath(row, col) {\r\n        let key = `${row}:${col}`;\r\n        \r\n        if (key in memo) {\r\n            return memo[key];\r\n        }\r\n        \r\n        let path = triangle[row][col];\r\n        \r\n        if (row < triangle.length - 1) {\r\n            path += Math.min(minPath(row + 1, col), minPath(row + 1, col + 1));\r\n        }\r\n        \r\n        memo[key] = path;\r\n        \r\n        return path;\r\n    }\r\n    \r\n    return minPath(0, 0);\r\n};"
  }
}
