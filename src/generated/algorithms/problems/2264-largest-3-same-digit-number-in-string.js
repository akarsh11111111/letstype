export default {
  "id": 2264,
  "name": "Largest 3-Same-Digit Number in String",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/largest-3-same-digit-number-in-string",
  "relativeDir": "L/Largest 3-Same-Digit Number in String",
  "slug": "2264-largest-3-same-digit-number-in-string",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 13,
    "java": 12,
    "python": 3,
    "javascript": 11
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    string largestGoodInteger(string num) {\r\n        string ans = \"\";\r\n        for(int i=1; i<num.size()-1; i++) {\r\n            if(num[i-1] == num[i] && num[i] == num[i+1]) {\r\n\t\t\t\tstring temp = {num[i-1], num[i], num[i+1]};\r\n                ans = max(ans, temp);\r\n            }\r\n        }\r\n        return ans;    \r\n    }\r\n};",
    "python": "class Solution:\r\n    def largestGoodInteger(self, n: str) -> str:\r\n        return max(n[i-2:i+1] if n[i] == n[i - 1] == n[i - 2] else \"\" for i in range(2, len(n)))",
    "java": "class Solution\r\n{\r\n    public String largestGoodInteger(String num)\r\n    {\r\n        String ans = \"\";\r\n        for(int i = 2; i < num.length(); i++)\r\n            if(num.charAt(i) == num.charAt(i-1) && num.charAt(i-1) == num.charAt(i-2))\r\n                if(num.substring(i-2,i+1).compareTo(ans) > 0) // Check if the new one is larger\r\n                    ans = num.substring(i-2,i+1);\r\n        return ans;\r\n    }\r\n}",
    "javascript": "var largestGoodInteger = function(num) {\r\n    let maxGoodInt = '';\r\n    for (let i = 0; i <= num.length - 3; i++) {\r\n        if (num[i] === num[i+1] && num[i+1] === num[i+2]) {\r\n            if (num[i] >= maxGoodInt) {\r\n                maxGoodInt = num[i];\r\n            }\r\n        }\r\n    }\r\n    return maxGoodInt + maxGoodInt + maxGoodInt;\r\n};"
  }
}
