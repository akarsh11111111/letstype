export default {
  "id": 1317,
  "name": "Convert Integer to the Sum of Two No-Zero Integers",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers",
  "relativeDir": "C/Convert Integer to the Sum of Two No-Zero Integers",
  "slug": "1317-convert-integer-to-the-sum-of-two-no-zero-integers",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 21,
    "java": 11,
    "python": 7,
    "javascript": 18
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.00%) | Memory: 6.2 MB (Top 93.27%)\r\nclass Solution {\r\npublic:\r\n    int has0(int x)\r\n{\r\n    while (x){\r\n        if (x % 10 == 0)\r\n          return 1;\r\n        x /= 10;\r\n    }\r\n    return 0;\r\n}\r\n    vector<int> getNoZeroIntegers(int n) {\r\n        for(int i=1;i<=n;i++){\r\n            if(has0(i)==false && has0(n-i)==false){\r\n                return {i,n-i};\r\n            }\r\n        }\r\n        return {1,1};\r\n    }\r\n};",
    "python": "class Solution:\r\n    def getNoZeroIntegers(self, n: int) -> List[int]:\r\n        for i in range(1,n//2+1):\r\n            first = str(i)\r\n            second = str(n-i)\r\n            if \"0\" not in first and \"0\" not in second:\r\n                return [i, n-i]",
    "java": "class Solution {\r\n    public int[] getNoZeroIntegers(int n) {\r\n        int B;\r\n        for (int A = 1; A < n; ++A) {\r\n            B = n - A;\r\n            if (!(A + \"\").contains(\"0\") && !(B + \"\").contains(\"0\"))\r\n            return new int[] {A, B};\r\n    }\r\n        return new int[]{};\r\n}\r\n}",
    "javascript": "var getNoZeroIntegers = function(n) {\r\n   for(let i=1;i<=n;i++){\r\n       if(!haveZero(i) && !haveZero(n-i)){\r\n           return [i,n-i]\r\n       }\r\n   }\r\n};\r\n\r\nconst haveZero = (n) =>{\r\n    let copy = n;\r\n    while(copy>0){\r\n        if(copy%10===0){\r\n            return true\r\n        }\r\n        copy=Math.floor(copy/10)\r\n    }\r\n    return false\r\n}"
  }
}
