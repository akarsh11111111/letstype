export default {
  "id": 2068,
  "name": "Check Whether Two Strings are Almost Equivalent",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent",
  "relativeDir": "C/Check Whether Two Strings are Almost Equivalent",
  "slug": "2068-check-whether-two-strings-are-almost-equivalent",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 18,
    "java": 15,
    "python": 3,
    "javascript": 22
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n\tbool checkAlmostEquivalent(string word1, string word2) {\r\n\t\tunordered_map<char, int> m;\r\n\t\tfor(int i = 0; i < word1.size(); i++){\r\n\t\t\tm[word1[i]]++;\r\n\t\t}\r\n\t\tfor(int i = 0; i < word2.size(); i++){\r\n\t\t\tm[word2[i]]--;\r\n\t\t}\r\n\t\tfor(auto i : m){\r\n\t\t\tif(abs(i.second) > 3){\r\n\t\t\t\treturn false;\r\n\t\t\t}\r\n\t\t}\r\n\t\treturn true;\r\n\t}\r\n};",
    "python": "class Solution:\r\n    def checkAlmostEquivalent(self, w1: str, w2: str) -> bool:\r\n\t\treturn all(v < 4 for v in ((Counter(w1) - Counter(w2)) + (Counter(w2) - Counter(w1))).values())",
    "java": "class Solution { \r\n    public boolean checkAlmostEquivalent(String word1, String word2) {\r\n        Map<Character,Integer> map = new HashMap();\r\n        for (int i = 0; i < word1.length(); i++) {\r\n            map.put(word1.charAt(i), map.getOrDefault(word1.charAt(i), 0) + 1);\r\n            map.put(word2.charAt(i), map.getOrDefault(word2.charAt(i), 0) - 1);\r\n        }\r\n        for (int i : map.values()) { //get value set\r\n            if (i > 3 || i < -3) { \r\n                return false;\r\n            }\r\n        }\r\n        return true;\r\n    }\r\n}",
    "javascript": "// Runtime: 48 ms (Top 98.13%) | Memory: 42.70 MB (Top 89.72%)\r\n\r\nvar checkAlmostEquivalent = function(word1, word2) {\r\n    const hm = new Map()\r\n    const addToHm = (ch, add) => {\r\n        if (hm.has(ch)) \r\n            hm.set(ch, hm.get(ch) + (add ? +1 : -1))\r\n        else \r\n            hm.set(ch, (add ? +1 : -1))  \r\n    }\r\n    \r\n    for (let i = 0; i < word1.length; i++) {\r\n        addToHm(word1[i], true) \r\n        addToHm(word2[i], false) \r\n    }\r\n    \r\n    for (const val of hm.values())\r\n        if (Math.abs(val) > 3)\r\n\t\t\treturn false\r\n    \r\n    return true\r\n};"
  }
}
