export default {
  "id": 1551,
  "name": "Minimum Operations to Make Array Equal",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-operations-to-make-array-equal",
  "relativeDir": "M/Minimum Operations to Make Array Equal",
  "slug": "1551-minimum-operations-to-make-array-equal",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 11,
    "java": 9,
    "python": 4,
    "javascript": 15
  },
  "languages": {
    "cpp": "// Runtime: 7 ms (Top 23.02%) | Memory: 5.9 MB (Top 36.86%)\r\nclass Solution {\r\npublic:\r\n    int minOperations(int n) {\r\n        int s=0;\r\n        for(int i=0; i<= (n-1)/2; ++i){\r\n            s += fabs(n-(2*i+1));\r\n        }\r\n        return s;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def minOperations(self, n: int) -> int:\r\n\r\n        return sum([n-x for x in range(n) if x % 2 != 0])",
    "java": "class Solution {\r\n    public int minOperations(int n) {\r\n        int ans = (n/2)*(n/2);\r\n        if(n%2==1){\r\n            ans += n/2;\r\n        }\r\n        return ans;\r\n    }\r\n}",
    "javascript": "// Runtime: 120 ms (Top 27.08%) | Memory: 41.9 MB (Top 89.58%)\r\n\r\nvar minOperations = function(n) {\r\n    let reqNum;\r\n    if(n%2!=0){\r\n        reqNum = Math.floor(n/2)*2+1\r\n    }else{\r\n        reqNum = ((Math.floor(n/2))*2+1 + (Math.floor(n/2) -1)*2+1)/2\r\n    }\r\n    let count = 0;\r\n    for(let i=1; i<reqNum; i +=2){\r\n        count += (reqNum-i)\r\n    }\r\n    return count\r\n};"
  }
}
