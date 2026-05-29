export default {
  "id": 405,
  "name": "Convert a Number to Hexadecimal",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/convert-a-number-to-hexadecimal",
  "relativeDir": "C/Convert a Number to Hexadecimal",
  "slug": "0405-convert-a-number-to-hexadecimal",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 20,
    "java": 29,
    "python": 16,
    "javascript": 37
  },
  "languages": {
    "cpp": "class Solution\r\n{\r\npublic:\r\n    string toHex(int num)\r\n    {\r\n        string hex = \"0123456789abcdef\";\r\n        unsigned int n = num; // to handle neg numbers\r\n        string ans = \"\";\r\n        if (n == 0)\r\n            return \"0\";\r\n        while (n > 0)\r\n        {\r\n            int k = n % 16;\r\n            ans += hex[k];\r\n            n /= 16;\r\n        }\r\n        reverse(ans.begin(), ans.end()); // as we stored it in the opposite order\r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 33 ms (Top 88.95%) | Memory: 13.8 MB (Top 62.28%)\r\nclass Solution:\r\n    def toHex(self, num: int) -> str:\r\n        ret = [\"0\",\"1\",\"2\",\"3\",\"4\",\"5\",\"6\",\"7\",\"8\",\"9\",\"a\",\"b\",\"c\",\"d\",\"e\",\"f\"]\r\n        ans = \"\"\r\n\r\n        if num < 0:\r\n            num = pow(2,32) +num\r\n\r\n        if num == 0:\r\n            return \"0\"\r\n        while num > 0:\r\n            ans = ret[num%16] +ans\r\n            num = num//16\r\n\r\n        return ans",
    "java": "// Runtime: 0 ms (Top 100.00%) | Memory: 41.4 MB (Top 60.13%)\r\nclass Solution {\r\n    public String toHex(int num) {\r\n        if(num == 0) return \"0\";\r\n\r\n        boolean start = true;\r\n\r\n        StringBuilder sb = new StringBuilder();\r\n\r\n        for(int i = 28; i >= 0; i -= 4) {\r\n            int digit = (num >> i) & 15;\r\n            if(digit > 9) {\r\n                char curr = (char)(digit%10 + 'a');\r\n                sb.append(curr);\r\n                start = false;\r\n            } else if(digit != 0) {\r\n                char curr = (char)(digit + '0');\r\n                sb.append(curr);\r\n                start = false;\r\n            } else {//digit == 0\r\n                if(start == false) { //avoid case: 00001a\r\n                    sb.append('0');\r\n                }\r\n            }\r\n\r\n        }\r\n        return sb.toString();\r\n    }\r\n}",
    "javascript": "// Runtime: 97 ms (Top 34.09%) | Memory: 42.1 MB (Top 50.91%)\r\n var toHex = function(num) {\r\n    let hexSymbols = [\"0\",\"1\",\"2\",\"3\",\"4\",\"5\",\"6\",\"7\",\"8\",\"9\",\"a\",\"b\",\"c\",\"d\",\"e\",\"f\"];\r\n    if (num >= 0) {\r\n        let hex = \"\";\r\n        do {\r\n            let reminder = num % 16;\r\n            num = Math.floor(num/16);\r\n            hex = hexSymbols[reminder] + hex;\r\n        } while (num > 0)\r\n        return hex;\r\n    } else {\r\n        num = -num;\r\n        let invertedHex = \"\"; //FFFFFFFF - hex\r\n        let needToCarry1 = true; //adding + 1 initially and carrying it on if needed\r\n        while (num > 0) {\r\n            let reminder = num % 16;\r\n            let invertedReminder = 15 - reminder; //inverting\r\n            if (needToCarry1) { //adding 1 for 2's complement\r\n                invertedReminder += 1;\r\n                if (invertedReminder === 16) { //overflow, carrying 1 to the left\r\n                    invertedReminder = 0;\r\n                    needToCarry1 = true;\r\n                } else {\r\n                    needToCarry1 = false;\r\n                }\r\n            }\r\n            num = Math.floor(num/16);\r\n            invertedHex = hexSymbols[invertedReminder] + invertedHex;\r\n        }\r\n        //formatting as \"FFFFFFFF\"\r\n        while (invertedHex.length < 8) {\r\n            invertedHex = \"f\" + invertedHex;\r\n        }\r\n        return invertedHex;\r\n    }\r\n};"
  }
}
