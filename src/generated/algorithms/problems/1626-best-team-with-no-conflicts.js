export default {
  "id": 1626,
  "name": "Best Team With No Conflicts",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/best-team-with-no-conflicts",
  "relativeDir": "B/Best Team With No Conflicts",
  "slug": "1626-best-team-with-no-conflicts",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 29,
    "java": 36,
    "python": 21,
    "javascript": 34
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int dp[1005][1005];\r\n    int bestTeamScore(vector<int>& scores, vector<int>& ages) {\r\n        vector<vector<int>>grp;\r\n        for(int i=0;i<scores.size();i++)\r\n        {\r\n            grp.push_back({scores[i],ages[i]});\r\n        }\r\n        sort(grp.begin(),grp.end());     \r\n        memset(dp,-1,sizeof(dp));\r\n        return recur(grp,0,ages.size(),0);\r\n    }\r\n    \r\n    int recur(vector<vector<int>>&grp , int i , int n , int maxiAge)\r\n    {\r\n        if(i==n)\r\n            return 0;\r\n        if(dp[i][maxiAge]!=-1)\r\n            return dp[i][maxiAge];\r\n        // score is already greater than previous socre we need to check age \r\n        // if current age is  greater than previous maxiAge then two choices\r\n        if(grp[i][1]>=maxiAge)\r\n        {\r\n            return dp[i][maxiAge] = max(grp[i][0]+recur(grp,i+1,n,grp[i][1]),recur(grp,i+1,n,maxiAge));\r\n        }\r\n        return dp[i][maxiAge] = recur(grp,i+1,n,maxiAge);\r\n    }\r\n};",
    "python": "# Runtime: 5727 ms (Top 5.11%) | Memory: 14.3 MB (Top 62.50%)\r\nclass Solution(object):\r\n    def bestTeamScore(self, scores, ages):\r\n        \"\"\"\r\n        :type scores: List[int]\r\n        :type ages: List[int]\r\n        :rtype: int\r\n        \"\"\"\r\n        l = len(scores)\r\n        mapped = [[ages[i], scores[i]] for i in range(l)]\r\n        mapped = sorted(mapped, key = lambda x : (x[0], x[1]))\r\n        dp = [i[1] for i in mapped]\r\n\r\n        for i in range(l):\r\n            for j in range(0, i):\r\n                if mapped[j][1] <= mapped[i][1]:\r\n                    dp[i] = max(dp[i], mapped[i][1] + dp[j])\r\n                elif mapped[i][0] == mapped[j][0]:\r\n                    dp[i] = max(dp[i], mapped[i][1] + dp[j])\r\n\r\n        return max(dp)",
    "java": "// Runtime: 27 ms (Top 92.02%) | Memory: 45.10 MB (Top 27.31%)\r\n\r\nclass Solution {\r\n    int res = 0;\r\n    public int bestTeamScore(int[] scores, int[] ages) {\r\n        int len = scores.length;\r\n        int[][] team = new int[len][2];\r\n        for (int i = 0; i < len; i++) {\r\n            team[i][0] = ages[i];\r\n            team[i][1] = scores[i]; // team is [age, score]\r\n        }\r\n\t\t// double sort first by age then by score, then we can traverse from young to old\r\n        Arrays.sort(team, (a, b) -> a[0] != b[0] ? a[0] - b[0] : a[1] - b[1]);\r\n        \r\n        int[] dp = new int[len];\r\n        // dp is the max sum for all sequences (not necessarily consecutive) ending in current idx\r\n        dp[0] = team[0][1];\r\n        for (int i = 1; i < len; i++) {\r\n            int max = team[i][1]; // At least it could start a new sequence by itself without extend\r\n\t\t\t// for each current idx, go visit all previous index to grow the sequences\r\n            for (int j = 0; j < i; j++) {\r\n                if (team[i][1] >= team[j][1]) {\r\n                    max = Math.max(max, dp[j] + team[i][1]);\r\n                }\r\n            }\r\n            dp[i] = max;\r\n        }\r\n      \r\n        int res = 0;\r\n        for (int num : dp) {\r\n            res = Math.max(res, num);\r\n        }\r\n        \r\n        return res;\r\n    }\r\n}",
    "javascript": "var bestTeamScore = function(scores, ages) {\r\n    const players = scores.map((score, index) => ({ score, age: ages[index] }))\r\n        .sort((a,b) => a.score === b.score ? a.age - b.age : a.score - b.score);\r\n    let memo = new Array(scores.length).fill(0).map(_ => new Array());\r\n    return dfs(0, 0);\r\n    \r\n    function dfs(maxAge, index) {\r\n        if (index === players.length) {\r\n            return 0;\r\n        }\r\n        \r\n        if (memo[index][maxAge] !== undefined) {\r\n            return memo[index][maxAge];\r\n        }\r\n        \r\n        let max = 0;\r\n        let currentPlayer = players[index];\r\n\r\n        // cannot take because I'm too young and better than an old guy in my team\r\n        if (currentPlayer.age < maxAge) {\r\n            memo[index][maxAge] = dfs(maxAge, index + 1)\r\n            return memo[index][maxAge];\r\n        }\r\n        \r\n        // take\r\n        max = Math.max(max, currentPlayer.score + dfs(Math.max(maxAge, currentPlayer.age), index + 1));\r\n        \r\n        // not take\r\n        max = Math.max(max, dfs(maxAge, index + 1));\r\n        \r\n        memo[index][maxAge] = max;\r\n        return max;\r\n    }\r\n};"
  }
}
