export default {
  "id": 1967,
  "name": "Number of Strings That Appear as Substrings in Word",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word",
  "relativeDir": "N/Number of Strings That Appear as Substrings in Word",
  "slug": "1967-number-of-strings-that-appear-as-substrings-in-word",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 13,
    "java": 11,
    "python": 3,
    "javascript": 20
  },
  "languages": {
    "cpp": "// Runtime: 5 ms (Top 84.96%) | Memory: 8.8 MB (Top 65.84%)\r\nclass Solution {\r\npublic:\r\n    int numOfStrings(vector<string>& patterns, string word) {\r\n        int count=0;\r\n        for(int i=0;i<patterns.size();i++)\r\n        {\r\n            if(word.find(patterns[i])!=string::npos)\r\n                count++;\r\n        }\r\n        return count;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def numOfStrings(self, patterns: List[str], word: str) -> int:\r\n        return sum([pattern in word for pattern in patterns])",
    "java": "class Solution {\r\n    public int numOfStrings(String[] patterns, String word) {\r\n        int count = 0;\r\n        for(int i=0;i<patterns.length;i++){\r\n            if(word.contains(patterns[i])){\r\n                count++;\r\n            }\r\n        }\r\n        return count;\r\n    }\r\n}",
    "javascript": "// Runtime: 45 ms (Top 93.3%) | Memory: 42.54 MB (Top 18.4%)\r\n\r\n/**\r\n * @param {string[]} patterns\r\n * @param {string} word\r\n * @return {number}\r\n */\r\nvar numOfStrings = function(patterns, word) {\r\n    let result = 0; \r\n    \r\n    for(let char of patterns){\r\n        if(word.includes(char)){\r\n            result++;\r\n           } else{\r\n               result += 0;\r\n           }\r\n    }\r\n    \r\n    return result;\r\n};"
  }
}
