export default {
  "id": 1406,
  "name": "Stone Game III",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/stone-game-iii",
  "relativeDir": "S/Stone Game III",
  "slug": "1406-stone-game-iii",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 46,
    "java": 37,
    "python": 21,
    "javascript": 21
  },
  "languages": {
    "cpp": "// Runtime: 312 ms (Top 80.63%) | Memory: 135.9 MB (Top 49.12%)\r\nclass Solution {\r\npublic:\r\n\r\n    int dp[50001][2][2];\r\n\r\n    int playGame(vector<int>& stones, bool alice, bool bob, int i) {\r\n\r\n        if (i >= stones.size()) return 0;\r\n\r\n        int ans;\r\n        int sum = 0;\r\n\r\n        if (dp[i][alice][bob] != -1) return dp[i][alice][bob];\r\n\r\n        if (alice) {\r\n            ans = INT_MIN;\r\n            for (int idx=i; idx < i + 3 && idx < stones.size(); idx++) {\r\n                sum += stones[idx];\r\n                ans = max(ans, sum + playGame(stones, false, true, idx + 1));\r\n            }\r\n        }\r\n\r\n        if (bob) {\r\n            ans = INT_MAX;\r\n            for (int idx=i; idx < i + 3 && idx < stones.size(); idx++) {\r\n                sum += stones[idx];\r\n                ans = min(ans, playGame(stones, true, false, idx + 1));\r\n            }\r\n        }\r\n\r\n        return dp[i][alice][bob] = ans;\r\n    }\r\n\r\n    string stoneGameIII(vector<int>& stoneValue) {\r\n        memset(dp, -1, sizeof dp);\r\n        int totalScore = 0;\r\n        for (auto i : stoneValue) totalScore += i;\r\n        int aliceScore = playGame(stoneValue, true, false, 0);\r\n        if (totalScore - aliceScore > aliceScore)\r\n            return \"Bob\";\r\n        else if (totalScore - aliceScore < aliceScore)\r\n            return \"Alice\";\r\n        else return \"Tie\";\r\n    }\r\n};",
    "python": "class Solution(object):\r\n    def stoneGameIII(self, stoneValue):\r\n        \"\"\"\r\n        :type stoneValue: List[int]\r\n        :rtype: str\r\n        \"\"\"\r\n        n = len(stoneValue)\r\n        suffixSum = [0 for _ in range(n+1)]\r\n        dp = [0 for _ in range(n+1)]\r\n        for i in range(n-1, -1, -1):\r\n            suffixSum[i] = suffixSum[i+1] + stoneValue[i]\r\n        for i in range(n-1, -1, -1):\r\n            dp[i] = stoneValue[i] + suffixSum[i+1] - dp[i+1]\r\n            for k in range(i+1, min(n, i+3)):\r\n                dp[i] = max(dp[i], suffixSum[i] - dp[k+1])\r\n        if dp[0]*2 == suffixSum[0]:\r\n            return \"Tie\"\r\n        elif dp[0]*2 > suffixSum[0]:\r\n            return \"Alice\"\r\n        else:\r\n            return \"Bob\"",
    "java": "class Solution {\r\n\tInteger[] dp;\r\n\r\n\tpublic String stoneGameIII(int[] stoneValue) {\r\n\t\tdp = new Integer[stoneValue.length + 1];\r\n\t\r\n\t\t\tArrays.fill(dp, null);\r\n\t\t\r\n\t\tint ans = stoneGameIII(0, stoneValue);\r\n\t\tif (ans == 0)\r\n\t\t\treturn \"Tie\";\r\n\t\telse if (ans > 0)\r\n\t\t\treturn \"Alice\";\r\n\t\telse\r\n\t\t\treturn \"Bob\";\r\n\t}\r\n\r\n\tpublic int stoneGameIII(int l, int[] s) {\r\n\t\tif (l >= s.length)\r\n\t\t\treturn 0;\r\n\t\tif (dp[l] != null)\r\n\t\t\treturn dp[l];\r\n\t\tint ans;\r\n\t\t\tans = Integer.MIN_VALUE;\r\n\t\t\tif (l < s.length) {\r\n\t\t\t\tans = Math.max(ans, s[l] - stoneGameIII(l + 1, s));\r\n\t\t\t}\r\n\t\t\tif (l + 1 < s.length) {\r\n\t\t\t\tans = Math.max(ans, s[l] + s[l + 1] -stoneGameIII(l + 2, s));\r\n\t\t\t}\r\n\t\t\tif (l + 2 < s.length) {\r\n\t\t\t\tans = Math.max(ans, s[l] + s[l + 1] +s[l + 2] -stoneGameIII(l + 3, s));\r\n\t\t\t}\r\n\t\t \r\n\t\treturn dp[l] = ans;\r\n\t}\r\n}",
    "javascript": "// Runtime: 229 ms (Top 67.86%) | Memory: 51.8 MB (Top 92.86%)\r\nvar stoneGameIII = function(stoneValue) {\r\n    let len = stoneValue.length-1\r\n    let bestMoves = [0,0,0]\r\n    bestMoves[len%3] = stoneValue[len]\r\n    for(let i = len-1; i >= 0 ; i--){\r\n        let turn = stoneValue[i]\r\n        let option1 = turn - bestMoves[(i+1)%3]\r\n        turn += stoneValue[i+1] ||0\r\n        let option2 = turn - bestMoves[(i+2)%3]\r\n        turn += stoneValue[i+2] || 0\r\n        let option3 = turn - bestMoves[i %3]\r\n        let best = Math.max(option1,option2,option3)\r\n        bestMoves[i%3] = best\r\n    }\r\n    return bestMoves[0] > 0\r\n        ? \"Alice\"\r\n        : bestMoves[0] !== 0\r\n            ? \"Bob\"\r\n            : \"Tie\"\r\n};"
  }
}
