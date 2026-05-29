export default {
  "id": 1668,
  "name": "Maximum Repeating Substring",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-repeating-substring",
  "relativeDir": "M/Maximum Repeating Substring",
  "slug": "1668-maximum-repeating-substring",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 14,
    "java": 13,
    "python": 16,
    "javascript": 8
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n\tint maxRepeating(string sequence, string word) {\r\n\t\tint k = 0;\r\n\t\tstring temp = word;\r\n\r\n\t\twhile(sequence.find(temp) != string::npos){\r\n\t\t\ttemp += word;\r\n\t\t\tk++;\r\n\t\t}\r\n\r\n\t\treturn k;\r\n\t}\r\n};",
    "python": "# Runtime: 61 ms (Top 15.28%) | Memory: 13.8 MB (Top 62.83%)\r\nclass Solution:\r\n    def maxRepeating(self, sequence: str, word: str) -> int:\r\n        if word not in sequence:\r\n            return 0\r\n\r\n        left = 1\r\n        right = len(sequence) // len(word)\r\n        while left <= right:\r\n            mid = (left + right) // 2\r\n            if word * mid in sequence:\r\n                left = mid + 1\r\n            else:\r\n                right = mid - 1\r\n\r\n        return left - 1",
    "java": "class Solution {\r\n    public int maxRepeating(String s, String w) {\r\n        if(w.length()>s.length()) return 0;\r\n        int ans=0;\r\n        StringBuilder sb=new StringBuilder(\"\");\r\n        while(sb.length()<=s.length()){\r\n            sb.append(w);\r\n            if(s.contains(sb)) ans++;\r\n            else break;\r\n        }\r\n        return ans;\r\n    }\r\n}",
    "javascript": "var maxRepeating = function(sequence, word) {\r\n\tlet result = 0;\r\n\r\n\twhile (sequence.includes(word.repeat(result + 1))) {\r\n\t\tresult += 1;\r\n\t};\r\n\treturn result;\r\n};"
  }
}
