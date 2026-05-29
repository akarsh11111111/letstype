export default {
  "id": 2352,
  "name": "Equal Row and Column Pairs",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/equal-row-and-column-pairs",
  "relativeDir": "E/Equal Row and Column Pairs",
  "slug": "2352-equal-row-and-column-pairs",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 24,
    "java": 23,
    "python": 16,
    "javascript": 40
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int equalPairs(vector<vector<int>>& grid) \r\n    {\r\n        // Number to store the count of equal pairs.\r\n        int ans = 0;\r\n        map<vector<int>, int> mp;\r\n        // Storing each row int he map\r\n        for (int i = 0; i < grid.size(); i++)\r\n            mp[grid[i]]++;\r\n        \r\n        for (int i = 0; i < grid[0].size(); i++)\r\n        {\r\n            vector<int> v;\r\n            // extracting column in a vector.\r\n            for (int j = 0; j < grid.size(); j++)\r\n                v.push_back(grid[j][i]);\r\n            // Add the number of times that column appeared as a row.\r\n            ans += mp[v];\r\n        }\r\n        // Return the number of count\r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 467 ms (Top 64.2%) | Memory: 21.54 MB (Top 44.5%)\r\n\r\nclass Solution:\r\n    def equalPairs(self, grid: List[List[int]]) -> int:\r\n        m = defaultdict(int)\r\n        cnt = 0\r\n\r\n        for row in grid:\r\n            m[str(row)] += 1\r\n        \r\n        for i in range(len(grid[0])):\r\n            col = []\r\n            for j in range(len(grid)):\r\n                col.append(grid[j][i])\r\n            cnt += m[str(col)]\r\n        return cnt",
    "java": "class Solution {\r\n    public int equalPairs(int[][] grid) {\r\n        HashMap<String, Integer> map = new HashMap<>();\r\n        int row = grid.length;\r\n        int col = grid.length;\r\n        for(int i = 0; i < row; i++){\r\n            String res = \"\";\r\n            for(int j = 0; j < col; j++){\r\n                res += \"-\" + grid[i][j];\r\n            }\r\n            map.put(res, map.getOrDefault(res, 0) + 1);\r\n        }\r\n        int cnt = 0;\r\n        for(int j = 0; j < col; j++){\r\n            String res = \"\";\r\n            for(int i = 0; i < row; i++){\r\n                res += \"-\" + grid[i][j];\r\n            }\r\n            cnt += map.getOrDefault(res, 0);\r\n        }\r\n        return cnt;\r\n    }\r\n}",
    "javascript": "// Runtime: 218 ms (Top 37.41%) | Memory: 52 MB (Top 63.08%)\r\nvar equalPairs = function(grid) {\r\n    let n = grid.length\r\n    let count = 0;\r\n\r\n    let map = new Map()\r\n\r\n    //making rowArray\r\n    for(let row = 0; row < n; row++){\r\n        let temp = []\r\n        for(let col = 0; col < n; col++){\r\n            temp.push(grid[row][col])\r\n        }\r\n\r\n        temp = temp.join()\r\n\r\n        if(map.has(temp)){\r\n            let tempCount = map.get(temp)\r\n            map.set(temp, tempCount+1)\r\n        }\r\n        else{\r\n            map.set(temp, 1)\r\n        }\r\n    }\r\n\r\n    for(let col = 0; col < n; col++){\r\n        let temp = []\r\n        for(let row = 0; row < n; row++){\r\n            temp.push(grid[row][col])\r\n        }\r\n\r\n        temp = temp.join()\r\n\r\n        if(map.has(temp)){\r\n            count += map.get(temp)\r\n        }\r\n    }\r\n\r\n    return count;\r\n};"
  }
}
