export default {
  "id": 2011,
  "name": "Final Value of Variable After Performing Operations",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/final-value-of-variable-after-performing-operations",
  "relativeDir": "F/Final Value of Variable After Performing Operations",
  "slug": "2011-final-value-of-variable-after-performing-operations",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 9,
    "java": 10,
    "python": 10,
    "javascript": 8
  },
  "languages": {
    "cpp": "// Runtime: 8 ms (Top 48.49%) | Memory: 14.60 MB (Top 7.99%)\r\n\r\nclass Solution {\r\npublic:\r\n    int finalValueAfterOperations(vector<string>& o,int c=0) {\r\n           for(auto &i:o) if(i==\"++X\" or i==\"X++\") c++; else c--;\r\n           return c;\r\n    }\r\n};",
    "python": "# Runtime: 111 ms (Top 13.83%) | Memory: 14 MB (Top 12.56%)\r\nclass Solution:\r\n    def finalValueAfterOperations(self, operations: List[str]) -> int:\r\n        x = 0\r\n        for o in operations:\r\n            if '+' in o:\r\n                x += 1\r\n            else:\r\n                x -= 1\r\n        return x",
    "java": "class Solution {\r\n    public int finalValueAfterOperations(String[] operations) {\r\n        int val = 0;\r\n        for(int i = 0; i<operations.length; i++){\r\n            if(operations[i].charAt(1)=='+') val++;\r\n            else val--;\r\n        }\r\n        return val;\r\n    }\r\n}",
    "javascript": "var finalValueAfterOperations = function(operations) {\r\n    let count = 0;\r\n    for(let i of operations) {\r\n        if(i === 'X++' || i === '++X') count++;\r\n        else count--;\r\n    }\r\n    return count;\r\n};"
  }
}
