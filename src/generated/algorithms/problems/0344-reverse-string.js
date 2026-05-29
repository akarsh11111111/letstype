export default {
  "id": 344,
  "name": "Reverse String",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/reverse-string",
  "relativeDir": "R/Reverse String",
  "slug": "0344-reverse-string",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 17,
    "java": 15,
    "python": 7,
    "javascript": 6
  },
  "languages": {
    "cpp": "// Runtime: 11 ms (Top 95.78%) | Memory: 23.70 MB (Top 32.89%)\r\n\r\nclass Solution {\r\npublic:\r\n    void reverseString(vector<char>& s) {\r\n        int i = 0;\r\n        int j = s.size() - 1;\r\n        \r\n        while(i <= j){\r\n            char temp = s[i];\r\n            s[i] = s[j];\r\n            s[j] = temp;\r\n            i++;\r\n            j--;\r\n        }\r\n    }\r\n};",
    "python": "# Runtime: 1141 ms (Top 5.04%) | Memory: 18.3 MB (Top 98.71%)\r\n\r\nclass Solution(object):\r\n    def reverseString(self, s):\r\n        for i in range(len(s)):\r\n            s.insert(i,s.pop())\r\n        return s",
    "java": "// Runtime: 1 ms (Top 99.91%) | Memory: 54.3 MB (Top 74.13%)\r\nclass Solution {\r\n    public void reverseString(char[] s) {\r\n        int start = 0, end = s.length-1;\r\n\r\n        while(start < end) {\r\n            char temp = s[end];\r\n            s[end] = s[start];\r\n            s[start] = temp;\r\n            start++;\r\n            end--;\r\n        }\r\n\r\n    }\r\n}",
    "javascript": "var reverseString = function(s) {\r\n    for(let i = 0 ; i < s.length / 2 ; i++){\r\n        [s[i], s[s.length - i - 1]] = [s[s.length - i - 1], s[i]]\r\n    }\r\n    return s;\r\n};"
  }
}
