export default {
  "id": 1380,
  "name": "Lucky Numbers in a Matrix",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/lucky-numbers-in-a-matrix",
  "relativeDir": "L/Lucky Numbers in a Matrix",
  "slug": "1380-lucky-numbers-in-a-matrix",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 34,
    "java": 33,
    "python": 31,
    "javascript": 25
  },
  "languages": {
    "cpp": "// Runtime: 87 ms (Top 5.05%) | Memory: 15.9 MB (Top 5.33%)\r\nclass Solution {\r\npublic:\r\n    vector<int> luckyNumbers (vector<vector<int>>& matrix) {\r\n\r\n        unordered_map<int,vector<int>>m;\r\n\r\n        for(int i=0;i<matrix.size();i++){\r\n            vector<int>temp = matrix[i];\r\n            for(int j=0;j<temp.size();j++){\r\n                m[j].push_back(temp[j]);\r\n            }\r\n        }\r\n\r\n        unordered_map<int,int>mp;\r\n        for(int i=0;i<matrix.size();i++){\r\n            vector<int>helper = matrix[i];\r\n\r\n            sort(helper.begin(),helper.end());\r\n\r\n            mp[helper[0]]++;\r\n        }\r\n        vector<int>result;\r\n        for(auto i:m){\r\n            vector<int>helper = i.second;\r\n            sort(helper.begin(),helper.end());\r\n            int a = helper[helper.size()-1];\r\n            if(mp.find(a)!=mp.end()){\r\n                result.push_back(a);\r\n            }\r\n        }\r\n        return result;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def luckyNumbers (self, matrix: List[List[int]]) -> List[int]:\r\n        min_, max_ = 0, 0\r\n        min_temp = []\r\n        max_temp = []\r\n        m = len(matrix)\r\n        n = len(matrix[0])\r\n        for i in matrix:\r\n            min_temp.append(min(i))\r\n        print(min_temp)\r\n        if n >= m:\r\n            for i in range(n):\r\n                max_check = []\r\n                for j in range(m):\r\n                    max_check.append(matrix[j][i])\r\n                max_temp.append(max(max_check))\r\n            return set(min_temp).intersection(set(max_temp))\r\n        elif n == 1:\r\n            for i in range(m):\r\n                max_check = []\r\n                for j in range(n):\r\n                    max_check.append(matrix[i][j])\r\n                max_temp.append(max(max_check))\r\n            return [max(max_temp)]\r\n        else:\r\n            for i in range(n):\r\n                max_check = []\r\n                for j in range(m):\r\n                    max_check.append(matrix[j][i])\r\n                max_temp.append(max(max_check))\r\n            return set(min_temp).intersection(set(max_temp))",
    "java": "class Solution {\r\n    public List<Integer> luckyNumbers (int[][] matrix) {\r\n        List<Integer> luckyNums = new ArrayList();\r\n        int n = matrix.length;\r\n        int m = matrix[0].length;\r\n        \r\n        for(int[] row : matrix){\r\n            int min = row[0];\r\n            int index = 0;\r\n            boolean lucky = true;\r\n            for(int col = 0; col < m; col++){\r\n                if(min > row[col]){\r\n                    min = row[col];\r\n                    index = col;\r\n                }\r\n            }\r\n            \r\n            for(int r = 0; r < n; r++){\r\n                if(min < matrix[r][index]){\r\n                    lucky = false;\r\n                    break;\r\n                }\r\n            }\r\n            if(lucky){\r\n                luckyNums.add(min);\r\n            }\r\n            \r\n        }\r\n        \r\n        return luckyNums;\r\n        \r\n    }\r\n}",
    "javascript": "// Runtime: 114 ms (Top 31.62%) | Memory: 46.2 MB (Top 10.29%)\r\n/**\r\n * @param {number[][]} matrix\r\n * @return {number[]}\r\n */\r\nvar luckyNumbers = function(matrix) {\r\n    let rowLucky = new Set();\r\n    let colLucky = new Set();\r\n    let cols = [...Array(matrix[0].length)].map(e => []);\r\n\r\n    for (let i = 0; i < matrix.length; i++) {\r\n        let row = matrix[i];\r\n        rowLucky.add(Math.min(...row));\r\n\r\n        // build columns\r\n        for (let j = 0; j < row.length; j++) {\r\n            cols[j].push(row[j]);\r\n        }\r\n    }\r\n\r\n    // Compare sets\r\n    for (const col of cols)\r\n        colLucky.add(Math.max(...col));\r\n    return [...rowLucky].filter(x => colLucky.has(x));\r\n};"
  }
}
