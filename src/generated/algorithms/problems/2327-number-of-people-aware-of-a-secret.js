export default {
  "id": 2327,
  "name": "Number of People Aware of a Secret",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/number-of-people-aware-of-a-secret",
  "relativeDir": "N/Number of People Aware of a Secret",
  "slug": "2327-number-of-people-aware-of-a-secret",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 25,
    "java": 34,
    "python": 23,
    "javascript": 33
  },
  "languages": {
    "cpp": "static int MOD=1e9+7;\r\nclass Solution {\r\npublic:\r\n    int delay,forget;\r\n    vector<long> memo;\r\n    // Total number of people who would have found out about the secret by the nth day.\r\n    long dp(int n) {\r\n        if(!n)\r\n            return 0;\r\n        if(memo[n]!=-1)  // Return cached result if exists.\r\n            return memo[n];\r\n\t\t// Current contribution of 1 person who knows the secret\r\n        long result=1;\r\n        for(int i=delay;i<forget;i++)       // Number of people that the secret will be forwarded to\r\n            if(n-i>=0)\r\n                result=(result+dp(n-i))%MOD;\r\n        return memo[n]=result;\r\n    }\r\n    int peopleAwareOfSecret(int n, int delay, int forget) {\r\n        this->delay=delay;\r\n        this->forget=forget;\r\n        memo.resize(n+1,-1);\r\n        return (dp(n)-dp(n-forget)+MOD)%MOD;    // Subtract the people who found out by the `n-forget` day as observed.\r\n    }\r\n};",
    "python": "\r\n```class Solution:\r\n    def peopleAwareOfSecret(self, n: int, delay: int, forget: int) -> int:\r\n        table = [0]*(forget+1)\r\n        table[1] = 1\r\n        days = 1\r\n        while days<=n-1:\r\n            count = 0\r\n            for k in range(forget-1,-1,-1):\r\n                if k+1>delay:\r\n                    table[k+1] = table[k]\r\n                    count+=table[k]\r\n                elif k+1<=delay:\r\n                    table[k+1] = table[k]\r\n            table[1] = count\r\n            days+=1\r\n        count = 0\r\n        for k in range(1,forget+1):\r\n            count+=table[k]\r\n        return count%(pow(10,9)+7)\r\n\t\t\r\nTC---O(forget*n)\r\nsc---O(forget)",
    "java": "// Runtime: 14 ms (Top 38.08%) | Memory: 41.3 MB (Top 54.72%)\r\nclass Solution {\r\n    public int peopleAwareOfSecret(int n, int delay, int forget) {\r\n        long mod = 1000000007L;\r\n        long[] shares = new long[n + 1];\r\n        long[] forgets = new long[n + 1];\r\n\r\n        if (delay < n) {\r\n            shares[delay + 1] = 1;\r\n        }\r\n        if (forget < n) {\r\n            forgets[forget + 1] = 1;\r\n        }\r\n\r\n        long shareToday = 0;\r\n        long peopleKnow = 1;\r\n        for (int i = delay; i <= n; i++) {\r\n            shareToday += shares[i] % mod;\r\n            shareToday -= forgets[i] % mod;\r\n\r\n            peopleKnow -= forgets[i] % mod;\r\n            peopleKnow += shareToday % mod;\r\n\r\n            if (i + delay < n + 1) {\r\n                shares[i + delay] += shareToday % mod;\r\n            }\r\n            if (i + forget < n + 1) {\r\n                forgets[i + forget] += shareToday % mod;\r\n            }\r\n        }\r\n\r\n        return (int) (peopleKnow % mod);\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number} n\r\n * @param {number} delay\r\n * @param {number} forget\r\n * @return {number}\r\n */\r\nvar peopleAwareOfSecret = function(n, delay, forget) {\r\n    const dp=new Array(n+1).fill(0);\r\n    let numberOfPeopleSharingSecret = 0;\r\n    let totalNumberOfPeopleWithSecret = 0;\r\n    const MOD = 1000000007n;\r\n    \r\n    dp[1]=1; // as on day one only one person knows the secret\r\n    \r\n    for(let i=2;i<=n;i++){\r\n        const numberOfNewPeopleSharingSecret = dp[Math.max(i-delay,0)];\r\n        const numberOfPeopleForgettingSecret = dp[Math.max(i-forget,0)];\r\n        numberOfPeopleSharingSecret = BigInt(numberOfPeopleSharingSecret) + \r\n            (   BigInt(numberOfNewPeopleSharingSecret) \r\n              - BigInt(numberOfPeopleForgettingSecret) \r\n              + BigInt(MOD)\r\n            ) % BigInt(MOD);\r\n        \r\n        dp[i] = numberOfPeopleSharingSecret;\r\n    }\r\n    \r\n    for(let i=n-forget+1;i<=n;i++){\r\n       totalNumberOfPeopleWithSecret = \r\n           (BigInt(totalNumberOfPeopleWithSecret) + BigInt(dp[i])) % BigInt(MOD); \r\n    }\r\n    \r\n    return totalNumberOfPeopleWithSecret;\r\n};"
  }
}
