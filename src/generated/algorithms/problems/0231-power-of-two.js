export default {
  "id": 231,
  "name": "Power of Two",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/power-of-two",
  "relativeDir": "P/Power of Two",
  "slug": "0231-power-of-two",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 9,
    "java": 14,
    "python": 27,
    "javascript": 6
  },
  "languages": {
    "cpp": "// Runtime: 4 ms (Top 41.31%) | Memory: 6 MB (Top 27.35%)\r\nclass Solution {\r\npublic:\r\n    bool isPowerOfTwo(int n) {\r\n        if(n==0) return false;\r\n        while(n%2==0) n/=2;\r\n        return n==1;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def isPowerOfTwo(self, n: int) -> bool:\r\n        \r\n         if n == 0: return False\r\n        \r\n         k = n\r\n         while k != 1:\r\n             if k % 2 != 0:\r\n                 return False\r\n             k = k // 2\r\n            \r\n            \r\n         return True\r\n\r\n        count = 0\r\n        for i in range(33):\r\n            mask = 1 << i\r\n            \r\n            if mask & n:\r\n                count += 1\r\n                \r\n            if count > 1:\r\n                return False\r\n                \r\n        if count == 1:\r\n            return True\r\n        return False",
    "java": "// Runtime: 3 ms (Top 14.46%) | Memory: 41.2 MB (Top 58.53%)\r\nclass Solution {\r\n    public boolean isPowerOfTwo(int n) {\r\n        return power2(0,n);\r\n\r\n    }\r\n    public boolean power2(int index,int n){\r\n        if(Math.pow(2,index)==n)\r\n            return true;\r\n        if(Math.pow(2,index)>n)\r\n            return false;\r\n        return power2(index+1,n);\r\n    }\r\n}",
    "javascript": "var isPowerOfTwo = function(n) {\r\n    let i=1;\r\n    while(i<n){\r\n        i*=2\r\n    }return i===n\r\n};"
  }
}
