export default {
  "id": 1903,
  "name": "Largest Odd Number in String",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/largest-odd-number-in-string",
  "relativeDir": "L/Largest Odd Number in String",
  "slug": "1903-largest-odd-number-in-string",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 31,
    "java": 9,
    "python": 11,
    "javascript": 9
  },
  "languages": {
    "cpp": "// Runtime: 28 ms (Top 84.21%) | Memory: 14.9 MB (Top 67.84%)\r\nclass Solution {\r\npublic:\r\n    string largestOddNumber(string num) {\r\n        // Length of the given string\r\n        int len = num.size();\r\n        // We initialize an empty string for the result\r\n        string res = \"\";\r\n        // We start searching digits from the very right to left because we want to find the first odd digit\r\n        // Which will be the last digit of our biggest odd number\r\n        for (int i = len - 1; i >= 0; i--) {\r\n            // Here we just convert char to an integer in C++\r\n            // We can also do the reverse operation by adding '0' to an int to get char from an int\r\n            int isOdd = num[i] - '0';\r\n            // We check if the current digit is odd, if so this is the position we want to find\r\n            if (isOdd % 2 == 1) {\r\n                // Since we have found the correct spot, let's create our result string\r\n                // We can basically extract the part starting from 0th index to right most odd digit's index\r\n                // Like this:\r\n                // 0123456 -> indices\r\n                // 1246878 -> digits\r\n                // ^....^ -> The part we extracted [0 to 5]\r\n                res = num.substr(0, i + 1); // i+1 is length of substring\r\n                // Because we know this would be the largest substring as we are starting from last\r\n                // We can terminate the loop and return the result\r\n                break;\r\n            }\r\n        }\r\n        return res;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def largestOddNumber(self, num: str) -> str:\r\n        indx = -1\r\n        n = len(num)\r\n        for i in range(n):\r\n            if int(num[i])%2 == 1:\r\n                indx = i\r\n        \r\n        if indx == -1:\r\n            return \"\"\r\n        return num[:indx+1]",
    "java": "// Runtime: 3 ms (Top 63.81%) | Memory: 54.8 MB (Top 11.36%)\r\nclass Solution {\r\n    public String largestOddNumber(String num) {\r\n        for (int i = num.length() - 1; i > -1; i--) {\r\n            if (num.charAt(i) % 2 == 1) return num.substring(0,i+1);\r\n        }\r\n        return \"\";\r\n    }\r\n}",
    "javascript": "var largestOddNumber = function(num) {\r\n    for (let i = num.length - 1; i >= 0; i--) {\r\n\t    // +num[i] converts string into number like parseInt(num[i])\r\n        if ((+num[i]) % 2) {\r\n            return num.slice(0, i + 1);\r\n        }\r\n    }\r\n    return '';\r\n};"
  }
}
