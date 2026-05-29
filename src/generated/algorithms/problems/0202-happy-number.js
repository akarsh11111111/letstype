export default {
  "id": 202,
  "name": "Happy Number",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/happy-number",
  "relativeDir": "H/Happy Number",
  "slug": "0202-happy-number",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 30,
    "java": 30,
    "python": 9,
    "javascript": 20
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool isHappy(int n) {\r\n        // Create a set...\r\n        set<int> hset;\r\n        while(hset.count(n) == 0) {\r\n            // If total is equal to 1 return true.\r\n            if(n == 1)\r\n                return true;\r\n            // Insert the current number in hset...\r\n            hset.insert(n);\r\n            // Initialize the total...\r\n            int total=0;\r\n            // Create a while loop...\r\n            while(n) {\r\n                // Process to get happy number...\r\n                // We use division and modulus operators to repeatedly take digits off the number until none remain...\r\n                // Then squaring each removed digit and adding them together.\r\n                total += (n % 10) * (n % 10);\r\n                n /= 10;\r\n                // Each new converted number must not had occurred before...\r\n            }\r\n            // Insert the current number into the set s...\r\n            // Replace the current number with total of the square of its digits.\r\n            n = total;\r\n        }\r\n        // If current number is already in the HashSet, that means we're in a cycle and we should return false..\r\n        return false;\r\n    }\r\n};",
    "python": "class Solution(object):\r\n    def isHappy(self, n):\r\n        hset = set()\r\n        while n != 1:\r\n            if n in hset: return False\r\n            hset.add(n)\r\n            n = sum([int(i) ** 2 for i in str(n)])\r\n        else:\r\n            return True",
    "java": "// Runtime: 3 ms (Top 47.06%) | Memory: 41.5 MB (Top 32.65%)\r\nclass Solution {\r\n    public boolean isHappy(int n) {\r\n        // Create a hash set...\r\n        Set<Integer> hset = new HashSet<Integer>();\r\n        // If the number is not in the HashSet, we should add it...\r\n        while (hset.add(n)) {\r\n            // Initialize the total...\r\n            int total = 0;\r\n            // Create a while loop...\r\n            while (n > 0) {\r\n                // Process to get happy number...\r\n                // We use division and modulus operators to repeatedly take digits off the number until none remain...\r\n                // Then squaring each removed digit and adding them together...\r\n                total += (n % 10) * (n % 10);\r\n                n /= 10;\r\n                // Each new converted number must not had occurred before...\r\n            }\r\n            // If total is equal to 1 return true.\r\n            if (total == 1)\r\n                return true;\r\n            // Insert the current number into the set s...\r\n            // Replace the current number with total of the square of its digits.\r\n            else\r\n                n = total;\r\n        }\r\n        // If current number is already in the HashSet, that means we're in a cycle and we should return false..\r\n        return false;\r\n    }\r\n}",
    "javascript": "// Runtime: 121 ms (Top 23.03%) | Memory: 43.2 MB (Top 71.09%)\r\nvar isHappy = function(n) {\r\n    if(n<10){\r\n        if(n === 1 || n === 7){\r\n            return true\r\n        }\r\n        return false\r\n    }\r\n    let total = 0\r\n    while(n>0){\r\n        let sq = n % 10\r\n        total += sq**2\r\n        n -= sq\r\n        n /= 10\r\n    }\r\n    if(total === 1){\r\n        return true\r\n    }\r\n    return isHappy(total)\r\n};"
  }
}
