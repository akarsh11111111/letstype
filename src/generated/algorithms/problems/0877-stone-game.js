export default {
  "id": 877,
  "name": "Stone Game",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/stone-game",
  "relativeDir": "S/Stone Game",
  "slug": "0877-stone-game",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 22,
    "java": 10,
    "python": 3,
    "javascript": 3
  },
  "languages": {
    "cpp": "// Runtime: 68 ms (Top 11.26%) | Memory: 16.5 MB (Top 13.92%)\r\nclass Solution {\r\npublic:\r\n\r\n    int solve(vector<int>&piles, int i, int j, vector<vector<int>>&dp){\r\n\r\n        if(i==j)\r\n            return piles[i];\r\n\r\n        if(dp[i][j]!=-1)\r\n            return dp[i][j];\r\n\r\n        return dp[i][j] = max((piles[i] + solve(piles, i+1, j, dp)), (piles[j] + solve(piles, i, j-1, dp)));\r\n\r\n    }\r\n\r\n    bool stoneGame(vector<int>& piles) {\r\n        int n = piles.size();\r\n        vector<vector<int>>dp(n, vector<int>(n,-1));\r\n        return solve(piles, 0, n-1, dp);\r\n    }\r\n};",
    "python": "class Solution:\r\n    def stoneGame(self, piles: List[int]) -> bool:\r\n        return True",
    "java": "class Solution {\r\n    \r\n    //This is the Easy One..\r\n    //The main Thing is We(Alice) have to take win\r\n    \r\n    //alice going to check the even sum and the odd sum if even sum> odd sum alice start with 0 else start with n-1.\r\n    public boolean stoneGame(int[] piles) {\r\n        return true;\r\n    }\r\n}",
    "javascript": "var stoneGame = function(piles) {\r\n    return true;\r\n};"
  }
}
