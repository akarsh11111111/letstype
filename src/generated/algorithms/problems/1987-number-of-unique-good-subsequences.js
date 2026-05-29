export default {
  "id": 1987,
  "name": "Number of Unique Good Subsequences",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/number-of-unique-good-subsequences",
  "relativeDir": "N/Number of Unique Good Subsequences",
  "slug": "1987-number-of-unique-good-subsequences",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 19,
    "java": 26,
    "python": 27,
    "javascript": 17
  },
  "languages": {
    "cpp": "class Solution {\r\n    int MOD = 1000000007;\r\npublic:\r\n    int numberOfUniqueGoodSubsequences(string binary) {\r\n        int zero = 0;\r\n        long long ones = 0;\r\n        long long zeros = 0;\r\n        \r\n        for (int i = binary.size() - 1; i >= 0; --i) {\r\n            if (binary[i] == '1') {\r\n                ones = (ones + zeros + 1) % MOD;\r\n            } else {\r\n                zero = 1;\r\n                zeros = (ones + zeros + 1) % MOD;\r\n            }\r\n        }\r\n        return (ones + zero) % MOD;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def numberOfUniqueGoodSubsequences(self, binary: str) -> int:\r\n        \r\n        \r\n        # zero_as_last: the count of S0, good sequence ending in 0\r\n        # one_as_last : the count of S1: good sequence ending in 1\r\n        # zero_exist:   existence flag of 0 in given binary\r\n        \r\n        dp = {\"zero_as_last\": 0, \"one_as_last\": 0, \"zero_exist\": 0}\r\n        \r\n        for bit in map(int, binary):\r\n            \r\n            if bit:\r\n                # current good = ( S0 concate with 1 ) + ( S1 concate with 1 ) + 1 alone\r\n                # + \"1\" is allowed because leading 1 is valid by description\r\n                dp[\"one_as_last\"] = dp[\"zero_as_last\"] + dp[\"one_as_last\"] + 1\r\n            \r\n            else:\r\n                # current good = ( S0 concate with 0 ) + ( S1 concate with 0 ) \r\n                # + \"0\" is NOT allowed because leading 0 is invalid by description\r\n                dp[\"zero_as_last\"] = dp[\"zero_as_last\"] + dp[\"one_as_last\"]\r\n            \r\n            # check the existence of 0\r\n            dp[\"zero_exist\"] |= (1-bit)\r\n        \r\n        \r\n        return sum( dp.values() ) % ( 10**9 + 7 )",
    "java": "class Solution {\r\n    public int numberOfUniqueGoodSubsequences(String binary) {\r\n        int initialZeroCount= 0;\r\n        while(initialZeroCount < binary.length() && binary.charAt(initialZeroCount) == '0') initialZeroCount++;\r\n        if(initialZeroCount == binary.length()) return 1;\r\n        long[] dp = new long[binary.length()];\r\n        dp[initialZeroCount] = 1;\r\n        int lastOne = 0, lastZero = 0;\r\n        long mod = (long) Math.pow(10, 9)+7;\r\n        for(int i=initialZeroCount+1;i<binary.length();i++){\r\n            int j = binary.charAt(i) == '1' ? lastOne : lastZero;\r\n            long dup = j > 0 ? dp[j-1] : 0;\r\n            dp[i] = 2 * dp[i-1] - dup;\r\n            if(dp[i] < 0) dp[i] += mod;\r\n            dp[i] %= mod;\r\n            if(binary.charAt(i) == '0') lastZero = i;\r\n            else lastOne = i;\r\n        }\r\n        \r\n        int hasZero = 0;\r\n        if(binary.contains(\"0\")) hasZero = 1;\r\n        \r\n        \r\n        return (int) (dp[binary.length()-1] + hasZero);\r\n    }\r\n}",
    "javascript": "// Runtime: 115 ms (Top 44.44%) | Memory: 45.8 MB (Top 33.33%)\r\nconst MOD = 1000000007;\r\n\r\nvar numberOfUniqueGoodSubsequences = function(binary) {\r\n    let endsZero = 0;\r\n    let endsOne = 0;\r\n    let hasZero = 0;\r\n    for (let i = 0; i < binary.length; i++) {\r\n        if (binary[i] === '1') {\r\n            endsOne = (endsZero + endsOne + 1) % MOD;\r\n        } else {\r\n            endsZero = (endsZero + endsOne) % MOD;\r\n            hasZero = 1;\r\n        }\r\n    }\r\n    return (endsZero + endsOne + hasZero) % MOD;\r\n};"
  }
}
