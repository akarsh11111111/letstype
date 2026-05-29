export default {
  "id": 1974,
  "name": "Minimum Time to Type Word Using Special Typewriter",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter",
  "relativeDir": "M/Minimum Time to Type Word Using Special Typewriter",
  "slug": "1974-minimum-time-to-type-word-using-special-typewriter",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 11,
    "java": 14,
    "python": 9,
    "javascript": 17
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int minTimeToType(string word) {\r\n        int res = word.size(), point = 'a';\r\n        for (auto ch : word) {\r\n            res += min(abs(ch - point), 26 - abs(point - ch));\r\n            point = ch;\r\n        }\r\n        return res;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def minTimeToType(self, word: str) -> int:\r\n        prev = \"a\"\r\n        res = 0\r\n        for c in word:\r\n            gap = abs(ord(c)-ord(prev))\r\n            res += min(gap, 26 - gap)\r\n            prev = c\r\n        return res + len(word)",
    "java": "class Solution {\r\n    public int minTimeToType(String word) {\r\n        char prevChar = 'a';\r\n        int totalTime = word.length();\r\n        for(int i = 0; i < word.length(); i++){\r\n            char currChar = word.charAt(i);\r\n            int diff = Math.abs(currChar - prevChar);\r\n            totalTime += Math.min(diff, 26 - diff);\r\n            prevChar = currChar;\r\n        }\r\n        \r\n        return totalTime;\r\n    }\r\n}",
    "javascript": "var minTimeToType = function(word) {\r\n  let ops = 0;\r\n  let cur = 'a';\r\n  \r\n  for(const char of word) {\r\n    const diff = Math.abs(cur.charCodeAt(0) - char.charCodeAt(0));\r\n    if(diff > 13) {\r\n      ops += 26 - diff + 1;\r\n    } else {\r\n      ops += diff + 1;\r\n    }\r\n    \r\n    cur = char;\r\n  }\r\n  \r\n  return ops;\r\n};"
  }
}
