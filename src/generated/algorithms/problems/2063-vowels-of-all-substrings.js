export default {
  "id": 2063,
  "name": "Vowels of All Substrings",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/vowels-of-all-substrings",
  "relativeDir": "V/Vowels of All Substrings",
  "slug": "2063-vowels-of-all-substrings",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 20,
    "java": 20,
    "python": 11,
    "javascript": 14
  },
  "languages": {
    "cpp": "// Runtime: 38 ms (Top 56.71%) | Memory: 11.1 MB (Top 20.60%)\r\nclass Solution {\r\npublic:\r\n    bool isVowel(char ch) {\r\n        return ch == 'a' or ch == 'e' or ch == 'i' or ch == 'o' or ch == 'u';\r\n    }\r\n\r\n    long long countVowels(string word) {\r\n        long long count = 0;\r\n        int len = word.size();\r\n\r\n        for(int pos = 0; pos < len; pos++) {\r\n            if(isVowel(word[pos])) {\r\n                count += (long)(len - pos) * (long)(pos + 1);\r\n            }\r\n        }\r\n\r\n        return count;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def countVowels(self, word: str) -> int:\r\n        count = vowelIndexSum = 0\r\n        vowels = {'a', 'e', 'i', 'o', 'u'}\r\n\r\n        for i, c in enumerate(word, start=1):\r\n            if c in vowels:\r\n                vowelIndexSum += i\r\n            count += vowelIndexSum\r\n        \r\n        return count",
    "java": "// Runtime: 23 ms (Top 33.08%) | Memory: 50 MB (Top 44.62%)\r\nclass Solution {\r\n\r\n    boolean isVowel(char ch) {\r\n        return ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u';\r\n    }\r\n\r\n    public long countVowels(String word) {\r\n        long count = 0;\r\n        int len = word.length();\r\n\r\n        for(int pos = 0; pos < len; pos++) {\r\n            if(isVowel(word.charAt(pos))) {\r\n                count += (long)(len - pos) * (long)(pos + 1);\r\n            }\r\n        }\r\n\r\n        return count;\r\n    }\r\n}",
    "javascript": "// Runtime: 69 ms (Top 95.24%) | Memory: 45.10 MB (Top 52.38%)\r\n\r\nvar countVowels = function(word) {\r\n    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);\r\n    let total = 0;\r\n    let count = 0;\r\n    for (let i = 0; i < word.length; i++) {\r\n        if (vowels.has(word[i])) {\r\n            count += i + 1;\r\n        }\r\n        total += count;\r\n    }\r\n    return total;\r\n};"
  }
}
