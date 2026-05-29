export default {
  "id": 79,
  "name": "Word Search",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/word-search",
  "relativeDir": "W/Word Search",
  "slug": "0079-word-search",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 29,
    "java": 34,
    "python": 41,
    "javascript": 51
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool solve(int i,int j,int &m,int &n,vector<vector<char>> &board,string &str,int s){\r\n        if(s>=str.length()){\r\n            return true;\r\n        }\r\n        if(i<0||j<0||i>=m||j>=n||board[i][j]=='#'){\r\n            return false;\r\n        }\r\n        char c = board[i][j];\r\n        board[i][j] = '#';\r\n        bool a = false;\r\n        if(c==str[s])\r\n        a = solve(i+1,j,m,n,board,str,s+1)||solve(i-1,j,m,n,board,str,s+1)||solve(i,j-1,m,n,board,str,s+1) ||  solve(i,j+1,m,n,board,str,s+1);\r\n        board[i][j] = c;\r\n        return a;\r\n    }\r\n    bool exist(vector<vector<char>>& board, string word) {\r\n        int i,j,m=board.size(),n=board[0].size();\r\n        for(i = 0; i < m; i++){\r\n            for(j = 0; j < n; j++){\r\n                if(board[i][j]==word[0] && solve(i,j,m,n,board,word,0)){\r\n                    return true;\r\n                }\r\n            }\r\n        }\r\n        return false;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def exist(self, board: List[List[str]], word: str) -> bool:\r\n        m = len(board)\r\n        n = len(board[0])\r\n        \r\n        marked = set() # visited by the dfs\r\n        def dfs(cell: Tuple[int, int], wp: int) -> bool:\r\n            i = cell[0]\r\n            j = cell[1]\r\n            \r\n            if wp == len(word):\r\n                return True\r\n            \r\n            # Get appropriate neighbours and perform dfs on them\r\n            # When going on dfs, we mark certain cells, we should remove # \r\n            #them from the marked list after we return from the dfs\r\n            marked.add((i,j))\r\n            neibs = [(i - 1, j), (i, j - 1), (i + 1, j), (i, j + 1)]\r\n            for x, y in neibs:\r\n                if (\r\n                        x < 0 or y < 0 or\r\n                        x >= m or y >= n or\r\n                        (x, y) in marked or\r\n                        board[x][y] != word[wp]\r\n                ):\r\n                    continue\r\n                \r\n                if dfs((x,y), wp + 1):\r\n                    return True\r\n                \r\n            marked.remove((i,j))\r\n            return False\r\n                \r\n        \r\n        for i in range(m):\r\n            for j in range(n):\r\n                if board[i][j] == word[0]:\r\n                    if dfs((i,j), 1):\r\n                        return True\r\n        \r\n        return False",
    "java": "// Runtime: 177 ms (Top 52.16%) | Memory: 42.7 MB (Top 24.25%)\r\nclass Solution {\r\n    public boolean exist(char[][] board, String word) {\r\n        boolean vis[][]=new boolean[board.length][board[0].length];\r\n        for(int i=0;i<board.length;i++){\r\n           for(int j=0;j<board[0].length;j++){\r\n              if(word.charAt(0)==board[i][j]){\r\n              boolean is=isexist(i,j,board,vis,1,word);\r\n              if(is) return true;\r\n              }\r\n           }\r\n        }\r\n        return false;\r\n    }\r\n\r\n    static int dir[][]={{1,0},{0,1},{-1,0},{0,-1}};\r\n\r\n    static boolean isexist(int r, int c,char board[][],boolean vis[][],\r\n                           int idx,String word){\r\n        if(idx==word.length()) return true;\r\n        vis[r][c]=true;\r\n        for(int k=0;k<4;k++){\r\n            int rd=r+dir[k][0];\r\n            int cd=c+dir[k][1];\r\n            if(rd<0 || cd<0 || rd>=board.length || cd>=board[0].length\r\n              || vis[rd][cd]==true ||\r\n               board[rd][cd]!=word.charAt(idx)) continue;\r\n            boolean is=isexist(rd,cd,board,vis,idx+1,word);\r\n            if(is) return true;\r\n        }\r\n        vis[r][c]=false;\r\n        return false;\r\n    }\r\n}",
    "javascript": "// Runtime: 744 ms (Top 49.74%) | Memory: 49.8 MB (Top 8.66%)\r\n/**\r\n * @param {character[][]} board\r\n * @param {string} word\r\n * @return {boolean}\r\n */\r\n\r\nlet visited\r\n\r\nconst getNeighbours=([i,j],board)=>{\r\n    let arr=[];\r\n    if(i>0 && !visited[i-1][j])arr.push([i-1,j])\r\n    if(j>0 && !visited[i][j-1])arr.push([i,j-1])\r\n    if(i+1<board.length && !visited[i+1][j])arr.push([i+1,j])\r\n    if(j+1<board[i].length && !visited[i][j+1])arr.push([i,j+1])\r\n    return arr;\r\n}\r\nconst dfs=([i,j],board, word,index)=>{\r\n if(word[index]!==board[i][j])return false;\r\n if(word.length-1===index)return true;\r\n    visited[i][j]=true;\r\n    let neighbours=getNeighbours([i,j],board,word,index)||[];\r\n\r\n    for(let k=0;k<neighbours.length;k++){\r\n        let temp_result=dfs(neighbours[k],board, word,index+1);\r\n        if(temp_result===true)return true;\r\n    }\r\n    visited[i][j]=false;\r\n    return false;\r\n\r\n}\r\n\r\nvar exist = function(board, word) {\r\n    visited=[];\r\n    for(let i=0;i<board.length;i++){\r\n        visited[i]=[];\r\n        for(let j=0;j<board[i].length;j++){\r\n           visited[i][j]=false;\r\n        }\r\n    }\r\n   for(let i=0;i<board.length;i++){\r\n        for(let j=0;j<board[i].length;j++){\r\n           if(board[i][j]===word[0]){\r\n               let result=dfs([i,j],board,word,0);\r\n               if(result===true)return true;\r\n           }\r\n        }\r\n    }\r\n\r\n    return false;\r\n};"
  }
}
