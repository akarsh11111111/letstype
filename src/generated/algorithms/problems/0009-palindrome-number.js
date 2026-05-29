export default {
  "id": 9,
  "name": "Palindrome Number",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/palindrome-number",
  "relativeDir": "P/Palindrome Number",
  "slug": "0009-palindrome-number",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 21,
    "java": 14,
    "python": 4,
    "javascript": 14
  },
  "languages": {
    "cpp": "// Runtime: 7 ms (Top 71.76%) | Memory: 6.40 MB (Top 21.28%)\r\n\r\nclass Solution {\r\npublic:\r\n    bool isPalindrome(int x) {\r\n        if (x < 0) {\r\n            return false;\r\n        }\r\n\r\n        long long reversed = 0;\r\n        long long temp = x;\r\n\r\n        while (temp != 0) {\r\n            int digit = temp % 10;\r\n            reversed = reversed * 10 + digit;\r\n            temp /= 10;\r\n        }\r\n\r\n        return (reversed == x);\r\n    }\r\n};",
    "python": "# Runtime: 61 ms (Top 94.40%) | Memory: 13.8 MB (Top 59.53%)\r\nclass Solution(object):\r\n   def isPalindrome(self,x):\r\n       return str(x) == str(x)[::-1]",
    "java": "// Runtime: 16 ms (Top 39.53%) | Memory: 44.7 MB (Top 53.62%)\r\nclass Solution {\r\n    public boolean isPalindrome(int x) {\r\n        int sum = 0;\r\n        int X = x;\r\n\r\n        while(x > 0){\r\n            sum = 10 * sum + x % 10;\r\n            x /= 10;\r\n        }\r\n\r\n        return sum == X;\r\n    }\r\n}",
    "javascript": "// Runtime: 314 ms (Top 29.18%) | Memory: 50.3 MB (Top 91.06%)\r\nvar isPalindrome = function(x) {\r\n    if(x < 0 || x % 10 === 0 && x !== 0) return false\r\n\r\n    let num = x\r\n    let rev_x = 0\r\n\r\n    while(x > 0){\r\n        let digit = Math.floor(x % 10)\r\n        rev_x = Math.floor(rev_x * 10 + digit)\r\n        x = Math.floor(x / 10)\r\n    }\r\n    return num === rev_x\r\n};"
  }
}
