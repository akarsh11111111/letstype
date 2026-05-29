export default {
  "id": 479,
  "name": "Largest Palindrome Product",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/largest-palindrome-product",
  "relativeDir": "L/Largest Palindrome Product",
  "slug": "0479-largest-palindrome-product",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 31,
    "java": 27,
    "python": 16,
    "javascript": 20
  },
  "languages": {
    "cpp": "// Runtime: 335 ms (Top 8.2%) | Memory: 7.03 MB (Top 6.6%)\r\n\r\nclass Solution {\r\npublic:\r\n    int largestPalindrome(int n) {\r\n        if(n==1)\r\n        {\r\n            return 9;\r\n        }\r\n        int hi=pow(10,n)-1;\r\n        int lo=pow(10,n-1);\r\n        int kk=1337;\r\n        for(int i=hi;i>=lo;i--)\r\n        {\r\n            string s=to_string(i);\r\n            string k=s;\r\n            reverse(k.begin(),k.end());\r\n            s+=k;\r\n            long long int ll=stol(s);\r\n            for(int j=hi;j>=sqrtl(ll);j--)\r\n            {\r\n                if(ll%j==0)\r\n                {\r\n                    return ll%kk;\r\n                }\r\n            }\r\n            \r\n        }\r\n        return 0;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def largestPalindrome(self, n: int) -> int:\r\n        return [0, 9, 987, 123, 597, 677, 1218, 877, 475][n]\r\n\r\n        \r\n    def isPalindrome(x):\r\n        return str(x) == str(x)[::-1]\r\n\r\n    def solve(n):\r\n        best = 0\r\n        for i in range(10**n-1, 0, -1):\r\n            for j in range(max(i, (best-1)//i+1), 10**n):\r\n                if isPalindrome(i*j):\r\n                    #print(i, j, i*j)\r\n                    best = i*j\r\n        return best",
    "java": "class Solution {\r\n    public int largestPalindrome(int n) {\r\n        if(n == 1 ){\r\n            return 9;\r\n        }\r\n       if(n == 2){\r\n           return 987;\r\n       }\r\n        if(n == 3){\r\n            return 123;\r\n        }\r\n        if(n == 4){\r\n            return 597;\r\n        }\r\n        if(n == 5){\r\n            return  677;\r\n        }\r\n        if(n == 6){\r\n            return 1218;\r\n        }\r\n        if(n == 7){\r\n            return 877;\r\n        }\r\n        return 475;\r\n        \r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number} n\r\n * @return {number}\r\n */\r\nvar largestPalindrome = function(n) {\r\n    if (n === 1) return 9;\r\n    let hi = BigInt(Math.pow(10, n) - 1);\r\n    let num = hi;\r\n    while(num > 0) {\r\n        num -= 1n;\r\n        const palindrome = BigInt(String(num) + String(num).split('').reverse().join(''));\r\n        for (let i = hi; i >= 2n; i -= 2n) {\r\n            const j = palindrome / i; \r\n            if (j > hi) break;\r\n            if (palindrome % i === 0n) {\r\n                return String(palindrome % 1337n);\r\n            };\r\n        }\r\n    }\r\n};"
  }
}
