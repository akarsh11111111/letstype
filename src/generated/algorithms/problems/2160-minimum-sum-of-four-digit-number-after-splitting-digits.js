export default {
  "id": 2160,
  "name": "Minimum Sum of Four Digit Number After Splitting Digits",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits",
  "relativeDir": "M/Minimum Sum of Four Digit Number After Splitting Digits",
  "slug": "2160-minimum-sum-of-four-digit-number-after-splitting-digits",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 10,
    "java": 19,
    "python": 5,
    "javascript": 9
  },
  "languages": {
    "cpp": "// Runtime: 4 ms (Top 21.96%) | Memory: 5.9 MB (Top 94.64%)\r\nclass Solution{\r\npublic:\r\n    int minimumSum(int num){\r\n        string s = to_string(num);\r\n        sort(s.begin(), s.end());\r\n        int res = (s[0] - '0' + s[1] - '0') * 10 + s[2] - '0' + s[3] - '0';\r\n        return res;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def minimumSum(self, num: int) -> int:\r\n        s=list(str(num))\r\n        s.sort()\r\n        return int(s[0]+s[2])+int(s[1]+s[3])",
    "java": "// Runtime: 0 ms (Top 100.0%) | Memory: 40.20 MB (Top 59.52%)\r\n\r\nclass Solution\r\n{\r\n    public int minimumSum(int num)\r\n    {\r\n        int[] dig = new int[4]; // For each digit\r\n        int cur = 0;\r\n        while(num > 0) // Getting each digit\r\n        {\r\n            dig[cur++] = num % 10;\r\n            num /= 10;\r\n        }\r\n        Arrays.sort(dig); // Ascending order\r\n        int num1 = dig[0] * 10 + dig[2]; // 1st and 3rd digit\r\n        int num2 = dig[1] * 10 + dig[3]; // 2nd and 4th digit\r\n        return num1 + num2;\r\n    }\r\n}",
    "javascript": "var minimumSum = function(num) {\r\n   let numbers = []\r\n    for(let i = 0; i<4; i++){\r\n        numbers.push(~~num % 10)\r\n        num /= 10\r\n    }\r\n    const sorted = numbers.sort((a,b) => b - a)\r\n    return sorted[0] + sorted[1] + (10 *( sorted[2] + sorted[3]))\r\n};"
  }
}
