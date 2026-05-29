export default {
  "id": 2147,
  "name": "Number of Ways to Divide a Long Corridor",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/number-of-ways-to-divide-a-long-corridor",
  "relativeDir": "N/Number of Ways to Divide a Long Corridor",
  "slug": "2147-number-of-ways-to-divide-a-long-corridor",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 27,
    "java": 22,
    "python": 17
  },
  "languages": {
    "cpp": "// Runtime: 103 ms (Top 92.66%) | Memory: 31.10 MB (Top 53.61%)\r\n\r\nclass Solution {\r\npublic:\r\n    int numberOfWays(string corridor) {\r\n        // Store 1000000007 in a variable for convenience\r\n        const int MOD = 1e9 + 7;\r\n\r\n        // Initial values of three variables\r\n        int zero = 0;\r\n        int one = 0;\r\n        int two = 1;\r\n\r\n        // Compute using derived equations\r\n        for (char thing : corridor) {\r\n            if (thing == 'S') {\r\n                zero = one;\r\n                swap(one, two);\r\n            } else {\r\n                two = (two + zero) % MOD;\r\n            }\r\n        }\r\n\r\n        // Return the result\r\n        return zero;\r\n    }\r\n};",
    "python": "// Runtime: 253 ms (Top 99.08%) | Memory: 17.50 MB (Top 42.72%)\r\n\r\nclass Solution:\r\n    def numberOfWays(self, corridor):\r\n        seat, res, plant = 0, 1, 0\r\n        for i in corridor:\r\n            if i=='S':\r\n                seat += 1\r\n            else:\r\n                if seat == 2:\r\n                    plant += 1\r\n            if seat == 3:\r\n                res = res*(plant+1) % (10**9 + 7)\r\n                seat , plant = 1 , 0\r\n        if seat != 2:\r\n            return 0\r\n        return res",
    "java": "// Runtime: 25 ms (Top 89.8%) | Memory: 44.90 MB (Top 30.5%)\r\n\r\nclass Solution {\r\n    public int numberOfWays(String corridor) {\r\n        int numSeats = 0, numPlants = 0;\r\n        long dividers = 1;\r\n        \r\n        for(int i = 0; i < corridor.length(); ++i) {\r\n            if(corridor.charAt(i) == 'S') numSeats += 1;\r\n            if(numSeats == 2 && corridor.charAt(i) == 'P') numPlants += 1;\r\n            if(numSeats == 3) {\r\n                dividers *= (numPlants + 1);\r\n                dividers %= 1000000007;\r\n                numSeats = 1;\r\n                numPlants = 0;\r\n            }\r\n        }\r\n        \r\n        if(numSeats < 2) return 0;\r\n        return (int)dividers;\r\n    }\r\n}"
  }
}
