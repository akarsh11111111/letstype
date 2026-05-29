export default {
  "id": 397,
  "name": "Integer Replacement",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/integer-replacement",
  "relativeDir": "I/Integer Replacement",
  "slug": "0397-integer-replacement",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 19,
    "java": 22,
    "python": 27,
    "javascript": 12
  },
  "languages": {
    "cpp": "// Runtime: 11 ms (Top 9.31%) | Memory: 5.9 MB (Top 81.51%)\r\nclass Solution {\r\npublic:\r\n    int integerReplacement(int n) {\r\n\r\n        return helper(n);\r\n    }\r\n\r\n    int helper(long n)\r\n    {\r\n        if(n == 1)\r\n            return 0;\r\n\r\n        if(n % 2)\r\n            return 1 + min(helper(n - 1), helper(n + 1));\r\n\r\n        return 1 + helper(n / 2);\r\n    }\r\n};",
    "python": "# Runtime: 42 ms (Top 77.23%) | Memory: 14 MB (Top 29.19%)\r\n\r\nclass Solution:\r\n    def integerReplacement(self, n: int) -> int:\r\n        dp = {}\r\n        def dfs(num):\r\n            if num == 1:\r\n                return 0\r\n\r\n            if num in dp:\r\n                return dp[num]\r\n\r\n            # if num is even, we have only one option -> n / 2\r\n            even = odd = 0\r\n            if num % 2 == 0:\r\n                even = 1 + dfs(num // 2)\r\n            else:\r\n                # if num is odd, we have two option, either we increment the num or decrement the num\r\n                odd1 = 1 + dfs(num - 1)\r\n                odd2 = 1 + dfs(num + 1)\r\n                # take the min of both operation\r\n                odd = min(odd1, odd2)\r\n\r\n            dp[num] = even + odd\r\n            return dp[num]\r\n\r\n        return dfs(n)",
    "java": "class Solution {\r\n    public int integerReplacement(int n) {\r\n        return (int)calc(n,0);\r\n    }\r\n    public long calc(long n,int i){\r\n        if(n==1) \r\n            return i;\r\n        if(n<1) \r\n            return 0;\r\n        \r\n        long a=Long.MAX_VALUE,b=Long.MAX_VALUE,c=Long.MAX_VALUE;\r\n        \r\n        if(n%2==0) \r\n            a=calc(n/2,i+1);\r\n        else{\r\n            b=calc(n-1,i+1);\r\n            c=calc(n+1,i+1);\r\n        }\r\n        long d=Math.min(a,Math.min(b,c));\r\n        return d;\r\n    }\r\n}",
    "javascript": "var integerReplacement = function(n) {\r\n    let count=0;\r\n    while(n>1){\r\n       if(n%2===0){n/=2;}\r\n       else{\r\n         if(n!==3 && (n+1)%4===0){n++;}\r\n         else{n--;}\r\n       } \r\n      count++;  \r\n    }\r\n    return count;  \r\n};"
  }
}
