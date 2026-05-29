export default {
  "id": 486,
  "name": "Predict the Winner",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/predict-the-winner",
  "relativeDir": "P/Predict the Winner",
  "slug": "0486-predict-the-winner",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 21,
    "java": 23,
    "python": 26,
    "javascript": 19
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool PredictTheWinner(vector<int>& nums) {\r\n        vector<vector<vector<int>>> dp(nums.size(),vector<vector<int>>(nums.size(),vector<int>(3,INT_MAX)));\r\n        int t=fun(dp,nums,0,nums.size()-1,1);\r\n        return t>=0;\r\n    }\r\n    int fun(vector<vector<vector<int>>>& dp,vector<int>& v,int i,int j,int t)\r\n    {\r\n        if(i>j)\r\n            return 0;\r\n        \r\n        if(dp[i][j][t+1]!=INT_MAX)\r\n            return dp[i][j][t+1];\r\n        \r\n        if(t>0)\r\n            return dp[i][j][t+1]=max(v[i]*t+fun(dp,v,i+1,j,-1),v[j]*t+fun(dp,v,i,j-1,-1));\r\n        else\r\n            return dp[i][j][t+1]=min(v[i]*t+fun(dp,v,i+1,j,1),v[j]*t+fun(dp,v,i,j-1,1));\r\n    }\r\n};",
    "python": "class Solution:\r\n    def PredictTheWinner(self, nums: List[int]) -> bool:\r\n        dp = [[-1] * len(nums) for _ in nums]\r\n        def get_score(i: int, j: int) -> int:\r\n            if i == j: \r\n                dp[i][j] = 0\r\n                return dp[i][j]\r\n            if i == j - 1:\r\n                dp[i][j] = nums[j] if nums[i] > nums[j] else nums[i]\r\n                return dp[i][j]\r\n            if dp[i][j] != -1:\r\n                return dp[i][j]\r\n\r\n            y1 = get_score(i + 1, j - 1)\r\n            y2 = get_score(i + 2, j)\r\n            y3 = get_score(i, j - 2)\r\n            res_y1 = y1 + nums[j] if y1 + nums[j] > y2 + nums[i+1] else y2 + nums[i+1]\r\n            res_y2 = y1 + nums[i] if y1 + nums[i] > y3 + nums[j-1] else y3 + nums[j-1]\r\n\r\n            dp[i][j] = min(res_y1, res_y2)\r\n            return dp[i][j]       \r\n                     \r\n        y = get_score(0, len(nums) - 1)\r\n        x = sum(nums) - y\r\n\r\n        return 0 if y > x else 1",
    "java": "class Solution {\r\n    public boolean PredictTheWinner(int[] nums) {\r\n        return predictTheWinner(nums, 0, nums.length-1,true,0, 0);\r\n    }\r\n   private boolean predictTheWinner(int[] nums, int start,int  end, boolean isP1Turn, long p1Score, long p2Score){\r\n        if(start > end){\r\n            return p1Score >= p2Score;\r\n        }\r\n\r\n        boolean firstTry;\r\n        boolean secondTry;\r\n        if(isP1Turn){\r\n             firstTry = predictTheWinner(nums, start +1 , end, false, p1Score + nums[start], p2Score);\r\n             secondTry = predictTheWinner(nums, start, end-1, false, p1Score + nums[end], p2Score);\r\n\r\n        }else{\r\n            firstTry = predictTheWinner(nums, start +1 , end, true, p1Score, p2Score + nums[start]);\r\n            secondTry = predictTheWinner(nums, start, end-1, true, p1Score , p2Score + nums[end]);\r\n\r\n        }\r\n        return isP1Turn ? (firstTry || secondTry) : (firstTry && secondTry);\r\n    }\r\n}",
    "javascript": "// Runtime: 105 ms (Top 44.44%) | Memory: 42.5 MB (Top 62.50%)\r\nvar PredictTheWinner = function(nums) {\r\n    const n = nums.length;\r\n    const dp = [];\r\n\r\n    for (let i = 0; i < n; i++) {\r\n        dp[i] = new Array(n).fill(0);\r\n        dp[i][i] = nums[i];\r\n    }\r\n\r\n    for (let len = 2; len <= n; len++) {\r\n        for (let start = 0; start < n - len + 1; start++) {\r\n            const end = start + len - 1;\r\n            dp[start][end] = Math.max(nums[start] - dp[start + 1][end], nums[end] - dp[start][end - 1]);\r\n        }\r\n    }\r\n\r\n    return dp[0][n - 1] >= 0;\r\n};"
  }
}
