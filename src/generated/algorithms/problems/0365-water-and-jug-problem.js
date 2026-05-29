export default {
  "id": 365,
  "name": "Water and Jug Problem",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/water-and-jug-problem",
  "relativeDir": "W/Water and Jug Problem",
  "slug": "0365-water-and-jug-problem",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 38,
    "java": 13,
    "python": 41,
    "javascript": 6
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool canMeasureWater(int jug1Capacity, int jug2Capacity, int targetCapacity) {\r\n        \r\n        if(targetCapacity > jug1Capacity + jug2Capacity)\r\n            return false;\r\n        \r\n        vector<int> dp(jug1Capacity + jug2Capacity + 1, -1);\r\n        return helper(0, jug1Capacity, jug2Capacity, targetCapacity, dp);\r\n    }\r\n    \r\n    bool helper(int tmp, int &jug1Capacity, int &jug2Capacity, int &targetCapacity, vector<int> &dp)\r\n    {\r\n        if(tmp < 0 || tmp > jug1Capacity + jug2Capacity)\r\n            return false;\r\n        \r\n        if(tmp == targetCapacity)\r\n            return true;\r\n        \r\n        if(dp[tmp] != -1)\r\n            return dp[tmp];\r\n        \r\n        dp[tmp] = false;            \r\n        if(helper(tmp + jug1Capacity, jug1Capacity, jug2Capacity, targetCapacity, dp))\r\n            return dp[tmp] = true;\r\n        \r\n        if(helper(tmp - jug1Capacity, jug1Capacity, jug2Capacity, targetCapacity, dp))\r\n            return dp[tmp] = true;\r\n        \r\n        if(helper(tmp + jug2Capacity, jug1Capacity, jug2Capacity, targetCapacity, dp))\r\n            return dp[tmp] = true;\r\n        \r\n         if(helper(tmp - jug2Capacity, jug1Capacity, jug2Capacity, targetCapacity, dp))\r\n            return dp[tmp] = true;\r\n            \r\n        return dp[tmp] = false;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def canMeasureWater(self, jug1Capacity: int, jug2Capacity: int, targetCapacity: int) -> bool:\r\n        n1, n2, t = jug1Capacity, jug2Capacity, targetCapacity\r\n        if n1 == t or n2 == t or n1 + n2 == t:\r\n            return True\r\n        if n1 + n2 < t:\r\n            return False\r\n        if n1 < n2:\r\n            n1, n2 = n2, n1\r\n        stack = []\r\n        visited = set()\r\n        d = n1 - n2\r\n        if d == t:\r\n            return True\r\n        while d > n2:\r\n            d -= n2\r\n            if d == t:\r\n                return True\r\n        stack.append(d)\r\n        while stack:\r\n            #print(stack)\r\n            d = stack.pop()\r\n            visited.add(d)\r\n            n = n1 + d\r\n            if n == t:\r\n                return True\r\n            n = n1 - d\r\n            if n == t:\r\n                return True\r\n            while n > n2:\r\n                n -= n2\r\n                if n == t:\r\n                    return True\r\n            if n < n2 and n not in visited:\r\n                stack.append(n)\r\n            n = n2 - d\r\n            if n == t:\r\n                return True\r\n            if n not in visited:\r\n                stack.append(n)\r\n        return False",
    "java": "class Solution {\r\n    private static int gcd(int a,int b){\r\n        if(b==0)return a;\r\n        return gcd(b,a%b);\r\n    }\r\n    public boolean canMeasureWater(int jug1Capacity, int jug2Capacity, int targetCapacity) {\r\n        if(targetCapacity>jug1Capacity+jug2Capacity){\r\n            return false;\r\n        }\r\n        int g=gcd(jug1Capacity,jug2Capacity);\r\n        return (targetCapacity%g==0);\r\n    }\r\n}",
    "javascript": "var canMeasureWater = function(jug1Capacity, jug2Capacity, targetCapacity) {\r\n\tconst gcd = (x, y) => y === 0 ? x : gcd(y, x % y);\r\n\r\n\treturn jug1Capacity + jug2Capacity >= targetCapacity && \r\n\t\ttargetCapacity % gcd(jug1Capacity, jug2Capacity) === 0;\r\n};"
  }
}
