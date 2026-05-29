export default {
  "id": 474,
  "name": "Ones and Zeroes",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/ones-and-zeroes",
  "relativeDir": "O/Ones and Zeroes",
  "slug": "0474-ones-and-zeroes",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 43,
    "python": 11,
    "javascript": 31
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int dp[102][102][601];\r\n    int countzero(string s)\r\n    {   int c=0;\r\n        for(int i=0;i<s.size();i++)\r\n        {\r\n            if(s[i]=='0') c++;\r\n        }\r\n        return c;\r\n    }\r\n    int solve(vector<string>&strs, int index, int m, int n,int ans)\r\n    {\r\n        if(index==strs.size() )\r\n        {\r\n            return ans;\r\n            //return 0;\r\n        }\r\n        \r\n        int c0= countzero(strs[index]);\r\n        int c1= strs[index].size()-c0;\r\n        \r\n        if(dp[m][n][index]!=-1) return dp[m][n][index];\r\n        \r\n        int a=INT_MIN, b=INT_MIN;\r\n        \r\n        if(m-c0>=0 && n-c1>=0)\r\n        {\r\n           // int c=ans;\r\n            a= solve(strs, index+1, m-c0, n-c1,ans+1);\r\n            \r\n            \r\n        }\r\n        b=solve(strs, index+1, m, n,ans);\r\n        return  dp[m][n][index]=max(a,b);\r\n    }\r\n    int findMaxForm(vector<string>& strs, int m, int n) {\r\n        \r\n        memset(dp, -1,sizeof(dp));\r\n        \r\n        return solve(strs, 0, m , n,0 ) ;\r\n    }\r\n};",
    "python": "# Runtime: 7928 ms (Top 10.31%) | Memory: 14.1 MB (Top 82.43%)\r\nclass Solution:\r\n    def findMaxForm(self, strs: List[str], m: int, n: int) -> int:\r\n        dp = [[0 for _ in range(m+1)] for _ in range(n + 1)]\r\n        for s in strs:\r\n            zeroes = s.count(\"0\")\r\n            ones = len(s)-zeroes\r\n            for i in range(n, ones-1, -1):\r\n                for j in range(m, zeroes-1, -1):\r\n                    dp[i][j] = max(dp[i][j], dp[i-ones][j-zeroes]+1)\r\n        return dp[n][m]",
    "javascript": "var findMaxForm = function(strs, m, n) {\r\n    const countZerosAndOne = strs.map(str => {\r\n        let z = 0, o = 0;\r\n        str.split('').forEach(c => c == '0' ? z++ : o++);\r\n        return [z, o];\r\n    });\r\n    const len = strs.length;\r\n    \r\n    const dp = new Map();\r\n    const knapsack = (i, m, n ) => {\r\n        if(i == len) return 0;\r\n        \r\n        const key = i + '#' + m + '#' + n;\r\n\r\n        if(dp.has(key)) return dp.get(key);\r\n        \r\n        let pick = 0;\r\n        \r\n        const [rz, ro] = countZerosAndOne[i];\r\n        \r\n        if(m >= rz && n >= ro) pick = knapsack(i + 1, m - rz, n - ro) + 1;\r\n        \r\n        // drop check\r\n        let drop = knapsack(i + 1, m, n);\r\n        \r\n        const op = Math.max(drop, pick);\r\n        dp.set(key, op);\r\n        return op;\r\n    }\r\n    return knapsack(0, m, n);\r\n};"
  }
}
