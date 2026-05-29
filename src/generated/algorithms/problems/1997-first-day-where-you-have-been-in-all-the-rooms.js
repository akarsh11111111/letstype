export default {
  "id": 1997,
  "name": "First Day Where You Have Been in All the Rooms",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/first-day-where-you-have-been-in-all-the-rooms",
  "relativeDir": "F/First Day Where You Have Been in All the Rooms",
  "slug": "1997-first-day-where-you-have-been-in-all-the-rooms",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 17,
    "java": 14,
    "python": 18
  },
  "languages": {
    "cpp": "#define ll long long \r\nint  mod=1e9+7;\r\nclass Solution {\r\npublic:\r\n    int firstDayBeenInAllRooms(vector<int>& nextVisit) {\r\n          int n=nextVisit.size();\r\n          vector<vector<ll>>dp(n,vector<ll>(2,0));\r\n          dp[0][0]=2;\r\n          dp[0][1]=1;\r\n          for(int i=1;i<n;i++)\r\n          {   dp[i][1]=dp[i-1][0]+1;\r\n               if(i==n-1)break;\r\n              dp[i][0]=(dp[i][1]+(dp[i-1][0]-dp[nextVisit[i]][1])+2)%mod;  \r\n          }\r\n          return (dp[n-1][1]+mod-1)%mod;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def firstDayBeenInAllRooms(self, nextVisit: List[int]) -> int:\r\n\t        n:int = len(nextVisit)\r\n        days:List[int] = n*[0] # days[i] is the number of days it takes to first reach room i\r\n        MOD = pow(10, 9) + 7\r\n        for i in range(0,n-1):\r\n            # First we are already at room i. days[i] days has passed\r\n            days[i+1] = days[i]\r\n            # lets go from room i to room i+1. \r\n            # When we first visit room i, we need to visit room i again (so room i is visited twice, which is an even number), then we can visit room i+1\r\n            # after we fist visit room i, the next day we will visit room (nextVisit[i]). \r\n            days[i+1] = (days[i+1] + 1) % MOD\r\n            # Then the problem becomes \"how to go from room (nextVisit[i]) back to room i\". The step is (days[i] - days[nextVisit[i]])\r\n            days[i+1] = (days[i+1] + days[i] - days[nextVisit[i]]) % MOD\r\n            # Then, in the next day we go from room i to i+1\r\n            days[i+1] = (days[i+1] + 1) % MOD\r\n        \r\n        return days[n-1]",
    "java": "class Solution {\r\n    public int firstDayBeenInAllRooms(int[] nextVisit) {\r\n        int rooms = nextVisit.length;\r\n        long dp[] = new long[rooms];\r\n        int mod = (int)(1e9)+7;\r\n        for (int i=1 ; i<rooms ; i++) {\r\n            if (nextVisit[i-1] == i-1)\r\n                dp[i] = dp[i-1]+2;\r\n            else\r\n                dp[i] = (dp[i-1] + dp[i-1] - dp[nextVisit[i-1]] + 2 + mod)%mod;\r\n        }\r\n        return (int)dp[rooms-1];\r\n    }\r\n}"
  }
}
