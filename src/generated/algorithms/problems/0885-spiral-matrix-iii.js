export default {
  "id": 885,
  "name": "Spiral Matrix III",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/spiral-matrix-iii",
  "relativeDir": "S/Spiral Matrix III",
  "slug": "0885-spiral-matrix-iii",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 37,
    "python": 35,
    "javascript": 38
  },
  "languages": {
    "cpp": "// Runtime: 35 ms (Top 23.18%) | Memory: 12.2 MB (Top 76.14%)\r\nclass Solution {\r\npublic:\r\n    vector<vector<int>> spiralMatrixIII(int rows, int cols, int rStart, int cStart) {\r\n\r\n        vector<vector<int>> ans;\r\n        ans.push_back({rStart, cStart}); //Pushing the starting point in answer\r\n        int topRow = rStart-1; //Row above starting point\r\n        int bottomRow = rStart+1; //Row below starting point\r\n        int leftCol = cStart-1; //Col left to starting point\r\n        int rightCol = cStart+1; //Col right to starting point\r\n\r\n        while(topRow != -1 || bottomRow != rows || leftCol != -1 || rightCol != cols){ //Untill all rows and columns are exhausted\r\n\r\n            if(rightCol != cols){ //Checking if this col is exhausted\r\n                for(int i = topRow+1; i < bottomRow;i++) ans.push_back({i, rightCol}); //Running loop from one bottom of top row till bottom row in right col\r\n                rightCol++; //Incrementing the col forward\r\n            }\r\n            //Similar things are done below with different cols and rows\r\n            if(bottomRow != rows){\r\n                for(int j = rightCol-1; j > leftCol; j--) ans.push_back({bottomRow, j});\r\n                bottomRow++;\r\n            }\r\n\r\n            if(leftCol != -1){\r\n                for(int i = bottomRow-1; i > topRow; i--) ans.push_back({i, leftCol});\r\n                leftCol--;\r\n            }\r\n\r\n            if(topRow != -1){\r\n                for(int j = leftCol+1; j < rightCol; j++) ans.push_back({topRow, j});\r\n                topRow--;\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def spiralMatrixIII(self, rows: int, cols: int, rStart: int, cStart: int) -> List[List[int]]:\r\n        ans = [[rStart, cStart]]\r\n        val = 1\r\n        i, j = rStart, cStart\r\n        def is_valid(i, j):\r\n            if 0 <= i < rows and 0 <= j < cols:\r\n                return True\r\n            return False\r\n        \r\n        while True:\r\n            if len(ans) == rows * cols:\r\n                return ans\r\n            \r\n            # go right val times\r\n            for _ in range(val):\r\n                j+=1\r\n                if is_valid(i,j):\r\n                    ans.append([i,j])\r\n            # go bottom val times\r\n            for _ in range(val):\r\n                i+=1\r\n                if is_valid(i,j):\r\n                    ans.append([i,j])\r\n            # go left val+1 times\r\n            for _ in range(val+1):\r\n                j-=1\r\n                if is_valid(i,j):\r\n                    ans.append([i,j])\r\n            # go up val+1 times\r\n            for _ in range(val+1):\r\n                i-=1\r\n                if is_valid(i,j):\r\n                    ans.append([i,j])\r\n            val+=2",
    "javascript": "var spiralMatrixIII = function(rows, cols, rStart, cStart) {\r\n    let output = [];\r\n    let r = rStart, c = cStart;\r\n    let right = true, down = false, left = false, up = false;\r\n    let steps = 1, maxSteps = 2;\r\n\r\n    while (output.length !== (rows * cols)) {\r\n        if (r >= 0 && c >= 0 && r < rows && c < cols) output.push([r, c]);\r\n        if (right) {\r\n            if (steps + 1 > maxSteps) {\r\n                steps = 2, r++;\r\n                right = false, down = true;\r\n            } else c++, steps++;\r\n        }\r\n        else if (down) {\r\n            if (steps + 1 > maxSteps) {\r\n                steps = 2, c--;\r\n                down = false, left = true;\r\n                maxSteps++;\r\n            } else r++, steps++;\r\n        }\r\n        else if (left) {\r\n            if (steps + 1 > maxSteps) {\r\n                steps = 2, r--;\r\n                left = false, up = true;\r\n            } else c--, steps++;\r\n        }\r\n        else if (up) {\r\n            if (steps + 1 > maxSteps) {\r\n                steps = 2, c++;\r\n                up = false, right = true;\r\n                maxSteps++;\r\n            } else r--, steps++;\r\n        }\r\n    }\r\n\r\n    return output;\r\n};"
  }
}
