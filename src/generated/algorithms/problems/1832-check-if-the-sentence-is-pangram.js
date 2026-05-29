export default {
  "id": 1832,
  "name": "Check if the Sentence Is Pangram",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/check-if-the-sentence-is-pangram",
  "relativeDir": "C/Check if the Sentence Is Pangram",
  "slug": "1832-check-if-the-sentence-is-pangram",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 11,
    "java": 10,
    "python": 3,
    "javascript": 4
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool checkIfPangram(string sentence) {\r\n        vector<int> v(26,0);\r\n        for(auto x:sentence)\r\n        {\r\n            v[x-'a'] = 1;\r\n        }\r\n        return accumulate(begin(v),end(v),0) == 26;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def checkIfPangram(self, sentence: str) -> bool:\r\n        return len(set(sentence))==26",
    "java": "class Solution {\r\n    public boolean checkIfPangram(String sentence) {\r\n        int seen = 0;\r\n        for(char c : sentence.toCharArray()) {\r\n            int ci = c - 'a';\r\n            seen = seen | (1 << ci);\r\n        }\r\n        return seen == ((1 << 26) - 1);\r\n    }\r\n}",
    "javascript": "// Runtime: 66 ms (Top 92.66%) | Memory: 42.6 MB (Top 67.15%)\r\nvar checkIfPangram = function(sentence) {\r\n    return new Set(sentence.split(\"\")).size == 26;\r\n};"
  }
}
