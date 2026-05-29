export default {
  "id": 1140,
  "name": "Stone Game II",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/stone-game-ii",
  "relativeDir": "S/Stone Game II",
  "slug": "1140-stone-game-ii",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 20,
    "java": 41,
    "python": 28,
    "javascript": 31
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int dp[103][103][2];\r\n    int rec(int i,int m,int p,vector<int>& piles){\r\n        if(i==piles.size()) return 0;\r\n        if(dp[i][m][p]!=-1) return dp[i][m][p];\r\n        int cnt = 0,ans=INT_MIN,n=piles.size();\r\n        for(int j=i;j<min(n,i+2*m);j++){\r\n            cnt += piles[j];\r\n            ans =max(ans, cnt - rec(j+1,max(j-i+1,m),1-p,piles));\r\n        }\r\n        return dp[i][m][p] = ans;\r\n    }\r\n    int stoneGameII(vector<int>& piles) {\r\n        int sum = 0;\r\n        memset(dp,-1,sizeof(dp));\r\n        for(auto i:piles) sum += i;\r\n        return (sum + rec(0,1,0,piles))/2;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def stoneGameII(self, piles: List[int]) -> int:\r\n        n = len(piles)\r\n        dp = {} \r\n        def recursion(index,M):\r\n            # if we reached to the end we cannot score any value\r\n            if index == n:\r\n                return 0\r\n            # we search if we have solved the same case earlier\r\n            if (index,M) in dp:\r\n                return dp[(index,M)] \r\n            # total remaining score is the sum of array from index to the end\r\n            total = sum(piles[index:])           \r\n            # if we can take the complete array it is the best choice\r\n            if index + 2*M >= n :return total\r\n            # my_score is the score we are getting as the player who is playing\r\n            my_score = 0\r\n            for x in range(index,index+2*M):\r\n                # opponent score will be calculated by next recursion\r\n                opponent_score = recursion(x+1,max(M,x-index+1))\r\n                # my_score is the remaining value of total - opponent_score\r\n                my_score = max(my_score,total - opponent_score)          \r\n            # this is memoization part\r\n            dp[(index,M)] = my_score\r\n            # return the score\r\n            return my_score\r\n        \r\n        return recursion(0,1)",
    "java": "// Runtime: 884 ms (Top 5.06%) | Memory: 117.5 MB (Top 5.06%)\r\nclass Solution {\r\n    public int stoneGameII(int[] piles) {\r\n        Map<String, Integer> memo = new HashMap<>();\r\n        int diff = stoneGame(piles,1,0,0,memo);\r\n        int totalSum = 0;\r\n        for(int ele: piles)\r\n            totalSum+=ele;\r\n        return (diff+totalSum)/2;\r\n    }\r\n\r\n    public int stoneGame(int[] piles, int M, int index, int turn,Map<String, Integer> memo )\r\n    {\r\n        if(index >= piles.length)\r\n            return 0;\r\n        if(memo.containsKey(index+\"-\"+M+\"-\"+turn))\r\n            return memo.get(index+\"-\"+M+\"-\"+turn);\r\n        int score=0,maxScore=Integer.MIN_VALUE;\r\n        // Alice's turn\r\n        if(turn == 0)\r\n        {\r\n            for(int X=1;X<=2*M && index+X-1<piles.length;X++)\r\n            {\r\n                score += piles[index+X-1];\r\n                maxScore= Math.max(maxScore,stoneGame(piles,Math.max(X,M),index+X,1,memo)+score);\r\n            }\r\n            memo.put(index+\"-\"+M+\"-\"+turn,maxScore);\r\n            return maxScore;\r\n        }\r\n        // Bob's turn\r\n        int minScore=Integer.MAX_VALUE;\r\n        for(int X=1;X<=2*M && index+X-1<piles.length;X++)\r\n        {\r\n            score += piles[index+X-1];\r\n            minScore = Math.min(minScore, stoneGame(piles,Math.max(X,M),index+X,0,memo) - score ) ;\r\n        }\r\n        memo.put(index+\"-\"+M+\"-\"+turn,minScore);\r\n        return minScore;\r\n    }\r\n\r\n}",
    "javascript": "// Runtime: 76 ms (Top 76.19%) | Memory: 47.60 MB (Top 52.38%)\r\n\r\n/**\r\n * @param {number[]} piles\r\n * @return {number}\r\n */\r\nvar stoneGameII = function(piles) {\r\n    let sum = 0;\r\n    const dp = new Array(101).fill(0).map(() => new Array(201).fill(0));\r\n    for(let i = 0; i < piles.length; i++) {\r\n        sum += piles[i];\r\n    }\r\n    let diff = help(0, 1, piles, dp);\r\n    return (sum + diff) / 2;\r\n};\r\n\r\nfunction help(i, M, piles, dp) {\r\n    if(i >= piles.length)\r\n        return 0;\r\n    if(dp[i][M] != 0)\r\n        return dp[i][M];\r\n    let total = 0;\r\n    let ans = Number.MIN_SAFE_INTEGER;\r\n    for(let j = 0; j < 2 * M; j++) {\r\n        if(i + j < piles.length)\r\n            total += piles[i+j];\r\n        ans = Math.max(ans, total - help(i+j+1,Math.max(M,j+1),piles, dp));\r\n    }\r\n    dp[i][M] = ans;\r\n    return ans;\r\n}"
  }
}
