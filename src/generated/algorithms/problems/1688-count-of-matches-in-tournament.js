export default {
  "id": 1688,
  "name": "Count of Matches in Tournament",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/count-of-matches-in-tournament",
  "relativeDir": "C/Count of Matches in Tournament",
  "slug": "1688-count-of-matches-in-tournament",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 21,
    "java": 29,
    "python": 3,
    "javascript": 18
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int numberOfMatches(int n) {\r\n        int count=0;\r\n        while(n>1)\r\n        { \r\n            if(n%2==0)\r\n            {\r\n           int a=n/2;\r\n           n=n/2;\r\n           count=count+a;}\r\n           else\r\n           {\r\n               int a=(n-1)/2;\r\n               n=a+1;\r\n               count=count+a;\r\n           }            \r\n        }\r\n        return count;\r\n    }\r\n};",
    "python": "class Solution:\r\n\tdef numberOfMatches(self, n: int) -> int:\r\n\t\treturn n - 1",
    "java": "class Solution {\r\n    public int numberOfMatches(int n) {\r\n\t\t// This is the problem's base case; we know that if n == 1,\r\n\t\t// the number of matches played must be 0, since the last team left\r\n\t\t// can't play a match against themselves.\r\n        if (n == 1) return 0;\r\n        \r\n\t\t// We declare an int to hold our recursive solution.\r\n        int res;\r\n\t\t\r\n\t\t// We initialize res using a recursive call, reducing n \r\n\t\t// as described in the problem.\r\n        if (n % 2 == 0) {\r\n            res = numberOfMatches(n / 2);\r\n\t\t\t// After the recursive call is executed, we add the appropriate value to \r\n\t\t\t// our solution variable.\r\n            res += n / 2;\r\n        }\r\n        else {\r\n            res = numberOfMatches((n - 1) / 2 + 1);\r\n            res += (n - 1) / 2;\r\n        }\r\n        \r\n\t\t// Our initial call to numberOfMatches()\r\n\t\t// will return the total number of matches \r\n\t\t// added to res in each recursive call.\r\n        return res;\r\n    }\r\n}",
    "javascript": "// Runtime: 103 ms (Top 28.10%) | Memory: 42.3 MB (Top 15.43%)\r\n/**\r\n * @param {number} n\r\n * @return {number}\r\n */\r\nvar numberOfMatches = function(n) {\r\n    let matches = 0,current = n;\r\n    while(current > 1){\r\n        if(current % 2 === 0){\r\n            matches += current/2;\r\n            current = current/2\r\n        }else{\r\n            matches += (current-1)/2;\r\n            current = (current-1)/2 + 1 ;\r\n        }\r\n    }\r\n    return matches;\r\n};"
  }
}
