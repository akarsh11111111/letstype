export default {
  "id": 464,
  "name": "Can I Win",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/can-i-win",
  "relativeDir": "C/Can I Win",
  "slug": "0464-can-i-win",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 28,
    "java": 35,
    "python": 18
  },
  "languages": {
    "cpp": "class Solution {\r\nprivate:\r\n    vector<vector<int>>dp;\r\n    bool backtrack(int curr,int &maxInt,int &desire,int mask,int player){\r\n        if(dp[player][mask]!=-1){\r\n            return dp[player][mask];\r\n        } else {\r\n            for(int i=1;i<=maxInt;i++){\r\n                int nmask=(1<<(i-1));\r\n                if((mask&nmask)==0){\r\n                    if(curr+i>=desire or !backtrack(curr+i,maxInt,desire,mask+nmask,(player+1)%2)){\r\n                        return dp[player][mask]=true;\r\n                    }\r\n                }\r\n            }\r\n            return dp[player][mask]=false;\r\n        }\r\n    }\r\npublic:\r\n    bool canIWin(int maxChoosableInteger, int desiredTotal) {\r\n        dp=vector<vector<int>>(2,vector<int>(1<<maxChoosableInteger,-1));\r\n        if(maxChoosableInteger*(maxChoosableInteger+1)/2<desiredTotal){\r\n            return false;\r\n        }\r\n        int curr=0,mask=0;\r\n        return backtrack(curr,maxChoosableInteger,desiredTotal,mask,0);\r\n    }\r\n};",
    "python": "class Solution:\r\n    def canIWin(self, maxChoosableInteger: int, desiredTotal: int) -> bool:\r\n        remainder = [i+1 for i in range(maxChoosableInteger)] # numbers\r\n        @cache\r\n        def can_win(total, remainder):\r\n            if total >= desiredTotal:\r\n                return False # total is already exceed the desiredTotal. Opponent won. \r\n            \r\n            for num in remainder:\r\n                if can_win(total + num, tuple([n for n in remainder if n != num])) == False: # if opponent lose, I win(return True)\r\n                    return True\r\n            return False \r\n        \r\n        if desiredTotal == 0: \r\n            return True \r\n        if sum(remainder) < desiredTotal: # Both of two cannot win.\r\n            return False \r\n        return can_win(0, tuple(remainder))",
    "java": "class Solution {\r\n    int numlimit, tgt;\r\n    public boolean canIWin(int maxChoosableInteger, int desiredTotal) {\r\n        numlimit = maxChoosableInteger;\r\n        tgt = desiredTotal;\r\n        \r\n        int maxsum = (numlimit*(numlimit+1))/2;\r\n        if(maxsum < tgt)\r\n            return false;\r\n        \r\n        int dp[] = new int[(1<<numlimit)];\r\n        if(solve(0, 0, 0, dp)){\r\n            return true;\r\n        }\r\n        return false;\r\n    }\r\n    \r\n    public boolean solve(int mask, int lstsum, int player, int dp[]) {\r\n        \r\n        if(dp[mask] != 0)\r\n            return (dp[mask] == 1);\r\n        \r\n        for(int i = 0; i < numlimit; i++) {\r\n            if((mask&(1<<i)) == 0) {\r\n                if((lstsum+(i+1) >= tgt) || !solve((mask|(1<<i)), lstsum+(i+1), player+1, dp)) {\r\n                    dp[mask] = 1;\r\n                    return true;\r\n                } \r\n            }\r\n        }\r\n        \r\n        dp[mask] = -1;\r\n        return false;\r\n    }\r\n}"
  }
}
