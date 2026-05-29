export default {
  "id": 1780,
  "name": "Check if Number is a Sum of Powers of Three",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/check-if-number-is-a-sum-of-powers-of-three",
  "relativeDir": "C/Check if Number is a Sum of Powers of Three",
  "slug": "1780-check-if-number-is-a-sum-of-powers-of-three",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 12,
    "java": 31,
    "python": 8
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.00%) | Memory: 5.9 MB (Top 49.47%)\r\nclass Solution {\r\npublic:\r\n    bool checkPowersOfThree(int n) {\r\n        // grinding n down by powers of 3\r\n        while (n) {\r\n            if (n % 3 == 2) return false;\r\n            n /= 3;\r\n        }\r\n        return true;\r\n    }\r\n};",
    "python": "// Runtime: 79 ms (Top 10.08%) | Memory: 17.20 MB (Top 9.7%)\r\n\r\nclass Solution:\r\n    def checkPowersOfThree(self, n: int) -> bool:\r\n        while n > 1:\r\n            n, r = divmod(n, 3)\r\n            if r == 2: return False\r\n        return True",
    "java": "// Runtime: 1 ms (Top 41.31%) | Memory: 41.4 MB (Top 27.03%)\r\n\r\nclass Solution {\r\n    public boolean checkPowersOfThree(int n) {\r\n        //max power of 3\r\n        int maxPower = (int)(Math.log(n) / Math.log(3));\r\n\r\n        //save all the power of 3 from 0 to maxPower\r\n        // 3^0, 3^1, 3^2 .... 3^maxPower\r\n        int[] threePower = new int[maxPower + 1];\r\n        threePower[0] = 1;\r\n        for(int i = 1; i <= maxPower; i++){\r\n            threePower[i] = threePower[i - 1] * 3;\r\n        }\r\n\r\n        //Intuition\r\n        //if we subtract n with every power of 3\r\n        //at the end if n is zero, then it is sum of power 3\r\n\r\n        //subtract n with power of 3,\r\n        //if n is graeter than power\r\n        for(int i = maxPower; i >= 0; i--){\r\n            //n is greater/equal to power 3\r\n            if(n >= threePower[i]){\r\n                 n -= threePower[i];\r\n            }\r\n        }\r\n\r\n        return n == 0;\r\n    }\r\n}"
  }
}
