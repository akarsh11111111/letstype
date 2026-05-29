export default {
  "id": 1839,
  "name": "Longest Substring Of All Vowels in Order",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/longest-substring-of-all-vowels-in-order",
  "relativeDir": "L/Longest Substring Of All Vowels in Order",
  "slug": "1839-longest-substring-of-all-vowels-in-order",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 27,
    "java": 19,
    "python": 14,
    "javascript": 31
  },
  "languages": {
    "cpp": "// Runtime: 86 ms (Top 97.61%) | Memory: 26.9 MB (Top 59.63%)\r\nclass Solution {\r\npublic:\r\n    int longestBeautifulSubstring(string word) {\r\n        const auto n = word.size();\r\n\r\n        int cnt = 1;\r\n        int len = 1;\r\n        int max_len = 0;\r\n        for (int i = 1; i != n; ++i) {\r\n            if (word[i - 1] == word[i]) {\r\n                ++len;\r\n            } else if (word[i - 1] < word[i]) {\r\n                ++len;\r\n                ++cnt;\r\n            } else {\r\n                cnt = 1;\r\n                len = 1;\r\n            }\r\n\r\n            if (cnt == 5) {\r\n                max_len = max(max_len, len);\r\n            }\r\n        }\r\n        return max_len;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def longestBeautifulSubstring(self, word: str) -> int:\r\n        g = ''\r\n        count = m = 0\r\n        for x in word:\r\n            if g and x < g[-1]:\r\n                count = 0\r\n                g = ''\r\n            if not g or x > g[-1]:\r\n                g += x\r\n            count += 1\r\n            if g == 'aeiou':\r\n                m = max(m, count)\r\n        return m",
    "java": "// Runtime: 192 ms (Top 11.20%) | Memory: 65.5 MB (Top 18.15%)\r\nclass Solution {\r\n    public int longestBeautifulSubstring(String word) {\r\n      int max = 0;\r\n      for(int i = 1;i<word.length();i++){\r\n         int temp = 1;\r\n         Set<Character> verify = new HashSet<>();\r\n         verify.add(word.charAt(i-1));\r\n         while(i < word.length() && word.charAt(i) >= word.charAt(i-1)){\r\n            temp++;\r\n            verify.add(word.charAt(i));\r\n            i++;\r\n         }\r\n         max = verify.size() == 5 ? Math.max(max,temp) : max ;\r\n      }\r\n\r\n      return max;\r\n    }\r\n}",
    "javascript": "// Runtime: 315 ms (Top 5.8%) | Memory: 83.55 MB (Top 17.6%)\r\n\r\n/**\r\n * @param {string} word\r\n * @return {number}\r\n */\r\nvar longestBeautifulSubstring = function(word) {\r\n   \r\n    let obj = { 'a': 1, 'e': 2, 'i': 3, 'o': 4, 'u': 5 }\r\n    let seq = 0\r\n    let maxstrcount = 0, strcount = \"\"\r\n    for (let i = 0; i <= word.length; i++) {\r\n        if (seq <= obj[word[i]]) {\r\n            strcount += word[i]\r\n            seq = obj[word[i]]\r\n        } else {\r\n            let set = new Set()\r\n            for (let i = 0; i < strcount.length; i++) {\r\n                set.add(strcount[i])\r\n            }\r\n            if (set.size == 5) {\r\n                maxstrcount = Math.max(strcount.length, maxstrcount)\r\n            }\r\n            if (i < word.length - 1)\r\n                i--\r\n            strcount = \"\"\r\n            seq = 0\r\n        }\r\n    }\r\n    return maxstrcount\r\n};"
  }
}
