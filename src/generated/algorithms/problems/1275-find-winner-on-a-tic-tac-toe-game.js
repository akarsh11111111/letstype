export default {
  "id": 1275,
  "name": "Find Winner on a Tic Tac Toe Game",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game",
  "relativeDir": "F/Find Winner on a Tic Tac Toe Game",
  "slug": "1275-find-winner-on-a-tic-tac-toe-game",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 37,
    "java": 33,
    "python": 37,
    "javascript": 23
  },
  "languages": {
    "cpp": "// Runtime: 2 ms (Top 71.74%) | Memory: 8.3 MB (Top 83.23%)\r\nclass Solution {\r\npublic:\r\n    string tictactoe(vector<vector<int>>& moves)\r\n    {\r\n        vector<vector<char>> grid(3,vector<char>(3));\r\n        char val='x';\r\n        for(auto &p:moves)\r\n        {\r\n            grid[p[0]][p[1]]=val;\r\n\r\n            val=val=='x'?'o':'x';\r\n        }\r\n        for (int i = 0; i < 3; i++){\r\n            //check row\r\n            if (grid[i][0] == 'x' && grid[i][1] == 'x' && grid[i][2] == 'x')return \"A\";\r\n            if (grid[i][0] == 'o' && grid[i][1] == 'o' && grid[i][2] == 'o')return \"B\";\r\n\r\n            //check columns\r\n            if (grid[0][i] == 'x' && grid[1][i] == 'x' && grid[2][i] == 'x')return \"A\";\r\n            if (grid[0][i] == 'o' && grid[1][i] == 'o' && grid[2][i] == 'o')return \"B\";\r\n        }\r\n        //check diagonal\r\n        if (grid[0][0] == 'x' && grid[1][1] == 'x' && grid[2][2] == 'x')return \"A\";\r\n        if (grid[0][2] == 'x' && grid[1][1] == 'x' && grid[2][0] == 'x')return \"A\";\r\n        if (grid[0][0] == 'o' && grid[1][1] == 'o' && grid[2][2] == 'o')return \"B\";\r\n        if (grid[0][2] == 'o' && grid[1][1] == 'o' && grid[2][0] == 'o')return \"B\";\r\n\r\n        if(moves.size()==9)\r\n        {\r\n            return \"Draw\";\r\n        }\r\n        return \"Pending\";\r\n\r\n    }\r\n};\r\n//if you like the solution plz upvote.",
    "python": "class Solution:\r\n    def tictactoe(self, moves: List[List[int]]) -> str:\r\n        wins = [\r\n            [(0, 0), (0, 1), (0, 2)],\r\n            [(1, 0), (1, 1), (1, 2)],\r\n            [(2, 0), (2, 1), (2, 2)],\r\n            [(0, 0), (1, 0), (2, 0)],\r\n            [(0, 1), (1, 1), (2, 1)],\r\n            [(0, 2), (1, 2), (2, 2)],\r\n            [(0, 0), (1, 1), (2, 2)],\r\n            [(0, 2), (1, 1), (2, 0)],\r\n        ]\r\n    \r\n        def checkWin(S):\r\n            for win in wins:\r\n                flag = True\r\n                for pos in win:\r\n                    if pos not in S:\r\n                        flag = False\r\n                        break\r\n                if flag:\r\n                    return True\r\n            return False\r\n        \r\n        A, B = set(), set()\r\n        for i, (x, y) in enumerate(moves):\r\n            if i % 2 == 0:\r\n                A.add((x, y))\r\n            else:\r\n                B.add((x, y))\r\n        \r\n        if checkWin(A):\r\n            return 'A'\r\n        elif checkWin(B):\r\n            return 'B'\r\n        \r\n        return \"Draw\" if len(moves) == 9 else \"Pending\"",
    "java": "/**\r\nHere is my solution : \r\n\r\nTime Complexity O(M) \r\nSpace Complaexity O(1)\r\n*/\r\n\r\nclass Solution {\r\n    public String tictactoe(int[][] moves) {\r\n        \r\n        int [][] rcd = new int[3][3]; // rcd[0] --> rows , rcd[1] --> columns , rcd[2] --> diagonals\r\n          \r\n        for(int turn =0 ; turn < moves.length ; turn++){\r\n            \r\n\t\t\tint AorB =-1;\r\n            if(turn%2==0){AorB=1;}\r\n            \r\n            rcd[0][moves[turn][0]]+= AorB; \r\n            rcd[1][moves[turn][1]]+= AorB; \r\n            \r\n            if(moves[turn][0]== moves[turn][1]){rcd[2][0]+=AorB;}     // first diagonal\r\n            if(moves[turn][0]+moves[turn][1]-2 == 0){rcd[2][1]+=AorB;} //2nd diagonal                \r\n            \r\n            if( Math.abs(rcd[0][moves[turn][0]]) == 3 || Math.abs(rcd[1][moves[turn][1]]) == 3 \r\n               ||Math.abs(rcd[2][0]) ==3 || Math.abs(rcd[2][1]) ==3  ){\r\n             \r\n\t\t\t return AorB == 1 ? \"A\" : \"B\"; }\r\n                                                         } \r\n        \r\n        return moves.length == 9 ? \"Draw\" : \"Pending\";\r\n        \r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number[][]} moves\r\n * @return {string}\r\n */\r\nlet validate = (arr) => {\r\n    let set = [...new Set(arr)];\r\n    return set.length == 1 && set[0] != 0;\r\n}\r\n\r\nvar tictactoe = function(moves) {\r\n    let grid = [[0,0,0],[0,0,0],[0,0,0]];\r\n    for(let i in moves){\r\n        let [x,y] = moves[i]\r\n        grid[x][y] = (i % 2 == 1) ? -1 : 1;\r\n        if(validate(grid[x]) \r\n           || validate(grid.reduce((prev, curr) => [...prev, curr[y]], []))\r\n           || validate([grid[0][0], grid[1][1], grid[2][2]])\r\n           || validate([grid[0][2], grid[1][1], grid[2][0]])\r\n          )\r\n            return (i % 2) ? \"B\" : \"A\";\r\n    }\r\n    return (moves.length == 9) ? \"Draw\" : \"Pending\"\r\n};"
  }
}
