export default {
  "id": 840,
  "name": "Magic Squares In Grid",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/magic-squares-in-grid",
  "relativeDir": "M/Magic Squares In Grid",
  "slug": "0840-magic-squares-in-grid",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 44,
    "java": 39,
    "python": 29,
    "javascript": 19
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.00%) | Memory: 8.4 MB (Top 48.63%)\r\nclass Solution {\r\npublic:\r\n    int numMagicSquaresInside(vector<vector<int>>& grid) {\r\n        int result = 0;\r\n        for(int i = 0; i < grid.size(); i++){\r\n            for(int j = 0; j < grid[i].size() ; j++){\r\n                if(isMagicSquare(grid, i, j)){\r\n                    result++;\r\n                }\r\n            }\r\n        }\r\n        return result;\r\n    }\r\n    bool isMagicSquare(vector<vector<int>>& grid, int i, int j){\r\n        if(i + 2 < grid.size() && j+2 < grid[i].size()){\r\n            int col1 = grid[i][j] + grid[i+1][j] + grid[i+2][j];\r\n            int col2 = grid[i][j+1] + grid[i+1][j+1] + grid[i+2][j+1];\r\n            int col3 = grid[i][j+2] + grid[i+1][j+2] + grid[i+2][j+2];\r\n            int row1 = grid[i][j] + grid[i][j+1] + grid[i][j+2];\r\n            int row2 = grid[i+1][j] + grid[i+1][j+1] + grid[i+1][j+2];\r\n            int row3 = grid[i+2][j] + grid[i+2][j+1] + grid[i+2][j+2];\r\n            int diag1 = grid[i][j] + grid[i+1][j+1] + grid[i+2][j+2];\r\n            int diag2 = grid[i+2][j] + grid[i+1][j+1] + grid[i][j+2];\r\n            if(\r\n                (col1 == col2) &&\r\n                (col1 == col3) &&\r\n                (col1 == row1) &&\r\n                (col1 == row2) &&\r\n                (col1 == row3) &&\r\n                (col1 == diag1) &&\r\n                (col1 == diag2)) {\r\n                    set<int> s({1,2,3,4,5,6,7,8,9});\r\n                    for(int r = 0 ; r < 3 ; r++){\r\n                        for(int c = 0; c < 3 ; c++){\r\n                            s.erase(grid[i + r][j + c]);\r\n                        }\r\n                    }\r\n                    return s.empty();\r\n            }\r\n        }\r\n        return false;\r\n    }\r\n};",
    "python": "class Solution:\r\n\r\n    digits = {1, 2, 3, 4, 5, 6, 7, 8, 9}\r\n\r\n    @classmethod\r\n    def magic_3_3(cls, square: List[List[int]]) -> bool:\r\n        if set(sum(square, [])) != Solution.digits:\r\n            return False\r\n        sum_row0 = sum(square[0])\r\n        for r in range(1, 3):\r\n            if sum(square[r]) != sum_row0:\r\n                return False\r\n        if any(sum(col) != sum_row0 for col in zip(*square)):\r\n            return False\r\n        sum_main_diagonal = sum_second_diagonal = 0\r\n        for i in range(3):\r\n            sum_main_diagonal += square[i][i]\r\n            sum_second_diagonal += square[i][2 - i]\r\n        return sum_main_diagonal == sum_second_diagonal == sum_row0\r\n\r\n    def numMagicSquaresInside(self, grid: List[List[int]]) -> int:\r\n        count = 0\r\n        rows, cols = len(grid), len(grid[0])\r\n        for r in range(rows - 2):\r\n            for c in range(cols - 2):\r\n                if Solution.magic_3_3([grid[row_idx][c: c + 3]\r\n                                       for row_idx in range(r, r + 3)]):\r\n                    count += 1\r\n        return count",
    "java": "class Solution {\r\n\tpublic int numMagicSquaresInside(int[][] grid) {\r\n\t\tint n=grid.length,m=grid[0].length,count=0;\r\n\t\tfor(int i=0;i<n-2;i++)\r\n\t\t{\r\n\t\t\tfor(int j=0;j<m-2;j++)\r\n\t\t\t{\r\n\t\t\t\tif(sum(i,j,grid))\r\n\t\t\t\t\tcount++;\r\n\t\t\t}\r\n\t\t}\r\n\t\treturn count;\r\n\t}\r\n\tpublic boolean sum(int x,int y,int[][] grid)\r\n\t{\r\n\t\tint sum=grid[x][y]+grid[x][y+1]+grid[x][y+2],sum1=0,sum2=0;\r\n\t\tint []count=new int[10];\r\n\t\tfor(int i=0;i<3;i++)\r\n\t\t{\r\n\t\t\tsum1=0;\r\n\t\t\tsum2=0;   \r\n\t\t\tfor(int j=0;j<3;j++)\r\n\t\t\t{\r\n\t\t\t\tsum1+=grid[x+i][y+j];\r\n\t\t\t\tsum2+=grid[x+j][y+i];\r\n\t\t\t\tif(grid[x+i][y+j]<1 ||grid[x+i][y+j]>9 ||count[grid[x+i][y+j]]!=0)\r\n\t\t\t\t\treturn false;\r\n\t\t\t\tcount[grid[x+i][y+j]]=1;\r\n\r\n\t\t\t}\r\n\t\t\tif(sum1!=sum || sum!=sum2 || sum1!=sum2)\r\n\t\t\t\treturn false;\r\n\t\t}\r\n\t\tsum1=grid[x][y]+grid[x+1][y+1]+grid[x+2][y+2];\r\n\t\tsum2=grid[x][y+2]+grid[x+1][y+1]+grid[x+2][y];\r\n\t\tif(sum1!=sum2 || sum1!=sum)\r\n\t\t\treturn false;\r\n\t\treturn true;\r\n\t}",
    "javascript": "// Runtime: 101 ms (Top 52.00%) | Memory: 42.3 MB (Top 94.00%)\r\nvar numMagicSquaresInside = function(grid) {\r\n    let res = 0;\r\n    for(let i = 0; i < grid.length - 2; i++){\r\n       for(let j = 0; j < grid[0].length - 2; j++){\r\n           //only check 4\r\n           if(grid[i][j]+grid[i][j+1]+grid[i][j+2]==15\r\n           && grid[i][j]+grid[i+1][j]+grid[i+2][j]==15\r\n           && grid[i][j]+grid[i+1][j+1]+grid[i+2][j+2]==15\r\n           && grid[i+2][j]+grid[i+2][j+1]+grid[i+2][j+2]==15){\r\n               let set = new Set();\r\n           for(let a = i; a<=i+2; a++){\r\n              for(let b = j; b<=j+2; b++){\r\n                  if(grid[a][b]>=1&&grid[a][b]<=9) set.add(grid[a][b]);\r\n           }}\r\n           if(set.size===9) res++;\r\n       }}}\r\n    return res;\r\n};"
  }
}
