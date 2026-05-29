export default {
  "id": 1941,
  "name": "Check if All Characters Have Equal Number of Occurrences",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences",
  "relativeDir": "C/Check if All Characters Have Equal Number of Occurrences",
  "slug": "1941-check-if-all-characters-have-equal-number-of-occurrences",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 11,
    "java": 13,
    "python": 3,
    "javascript": 8
  },
  "languages": {
    "cpp": "// Runtime: 8 ms (Top 38.89%) | Memory: 6.6 MB (Top 89.52%)\r\nclass Solution {\r\npublic:\r\n    bool areOccurrencesEqual(string s) {\r\n        unordered_map<char, int> freq;\r\n        for (auto c : s) freq[c]++;\r\n        int val = freq[s[0]];\r\n        for (auto [a, b] : freq) if (b != val) return false;\r\n        return true;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def areOccurrencesEqual(self, s: str) -> bool:\r\n        return len(set(Counter(s).values())) == 1",
    "java": "class Solution {\r\n    public boolean areOccurrencesEqual(String s) {\r\n        int[] freq = new int[26];\r\n        \r\n        for (int i = 0; i < s.length(); i++) freq[s.charAt(i)-'a']++;\r\n\r\n        int val = freq[s.charAt(0) - 'a'];\r\n        for (int i = 0; i < 26; i++)\r\n            if (freq[i] != 0 && freq[i] != val) return false; \r\n\r\n        return true;\r\n    }\r\n}",
    "javascript": "// Runtime: 116 ms (Top 33.13%) | Memory: 44.9 MB (Top 21.58%)\r\nvar areOccurrencesEqual = function(s) {\r\n    var freq = {}\r\n    for (let c of s) freq[c] = (freq[c] || 0) + 1\r\n    var val = freq[s[0]]\r\n    for (let c in freq) if (freq[c] && freq[c] != val) return false;\r\n    return true;\r\n};"
  }
}
