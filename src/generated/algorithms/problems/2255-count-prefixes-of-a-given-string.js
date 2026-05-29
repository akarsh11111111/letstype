export default {
  "id": 2255,
  "name": "Count Prefixes of a Given String",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/count-prefixes-of-a-given-string",
  "relativeDir": "C/Count Prefixes of a Given String",
  "slug": "2255-count-prefixes-of-a-given-string",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 16,
    "java": 23,
    "python": 5,
    "javascript": 14
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int countPrefixes(vector<string>& words, string s) {\r\n        int res = words.size();\r\n\r\n        for (auto && word : words) {\r\n            for (int i = 0; i < word.size(); i++) {\r\n                if (s[i] != word[i]) {\r\n                    res--;\r\n                    break;\r\n                }\r\n            }\r\n        }\r\n        return res;\r\n    }\r\n};",
    "python": "# Runtime: 74 ms (Top 25.9%) | Memory: 16.47 MB (Top 86.6%)\r\n\r\nclass Solution:\r\n    def countPrefixes(self, words: List[str], s: str) -> int:\r\n        return len([i for i in words if s.startswith(i)])",
    "java": "class Solution {\r\n    public int countPrefixes(String[] words, String s) {\r\n        int i = 0;\r\n        int j = 0;\r\n        int count = 0;\r\n        for(int k = 0; k < words.length; k++){\r\n            if(words[k].length() > s.length()){\r\n                continue;\r\n            }\r\n            \r\n            while(i < words[k].length() && words[k].charAt(i) == s.charAt(j)){\r\n                i++;\r\n                j++;\r\n            }\r\n            if(i == words[k].length()){\r\n                count++;\r\n            }\r\n            i = 0;\r\n            j = 0;\r\n        }\r\n        return count;\r\n    }\r\n}",
    "javascript": "var countPrefixes = function(words, s) {\r\n  \r\n    let cont = 0;\r\n    \r\n    for(i = 0; i < words.length; i++){\r\n        for(j = 1; j <= s.length; j++){\r\n            if(words[i] == s.slice(0, j)){\r\n                cont++;\r\n            }\r\n        }        \r\n    }\r\n     return cont;\r\n    \r\n};"
  }
}
