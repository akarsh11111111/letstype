export default {
  "id": 2114,
  "name": "Maximum Number of Words Found in Sentences",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-number-of-words-found-in-sentences",
  "relativeDir": "M/Maximum Number of Words Found in Sentences",
  "slug": "2114-maximum-number-of-words-found-in-sentences",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 12,
    "java": 10,
    "python": 10,
    "javascript": 18
  },
  "languages": {
    "cpp": "// Runtime: 18 ms (Top 59.02%) | Memory: 9.7 MB (Top 71.88%)\r\nclass Solution {\r\npublic:\r\n    int mostWordsFound(vector<string>& sentences) {\r\n        int res = 0;\r\n        for (auto const &s: sentences) {\r\n            int n = count(s.begin(), s.end(), ' ');\r\n            res = max(res, n + 1);\r\n        }\r\n        return res;\r\n    }\r\n};",
    "python": "// Runtime: 43 ms (Top 84.42%) | Memory: 16.70 MB (Top 56.32%)\r\n\r\nclass Solution:\r\n    def mostWordsFound(self, sentences: List[str]) -> int:\r\n        mx=0\r\n        for i in sentences:\r\n            c=i.split()\r\n            if len(c)>mx:\r\n                mx=len(c)\r\n        return mx",
    "java": "// Runtime: 6 ms (Top 54.44%) | Memory: 45.2 MB (Top 33.72%)\r\nclass Solution {\r\n    public int mostWordsFound(String[] sentences) {\r\n        int max=0;\r\n        for(int i=0; i<sentences.length; i++) {\r\n            max = Math.max(max,(sentences[i].split(\" \")).length);\r\n        }\r\n        return max;\r\n    }\r\n}",
    "javascript": "// Runtime: 65 ms (Top 95.45%) | Memory: 43.6 MB (Top 89.35%)\r\n\r\n/**\r\n * @param {string[]} sentences\r\n * @return {number}\r\n */\r\nvar mostWordsFound = function(sentences) {\r\n    let max = 0;\r\n    let temp = 0;\r\n    for (let i = 0; i < sentences.length; i++) {\r\n        temp = sentences[i].split(\" \").length;\r\n        if (temp > max) {\r\n            max = temp;\r\n        }\r\n    }\r\n\r\n    return max;\r\n};"
  }
}
