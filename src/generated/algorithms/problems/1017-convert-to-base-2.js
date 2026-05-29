export default {
  "id": 1017,
  "name": "Convert to Base -2",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/convert-to-base-2",
  "relativeDir": "C/Convert to Base -2",
  "slug": "1017-convert-to-base-2",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 14,
    "java": 9,
    "python": 11
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    string baseNeg2(int n) {\r\n        if(n==0) return \"0\";\r\n        string result;\r\n        while(n) {\r\n            int c=n>>1;\r\n            result += to_string(n-2*c);\r\n            n = -c;\r\n        }\r\n        reverse(result.begin(), result.end());\r\n        return result;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def baseNeg2(self, n: int) -> str:\r\n        ans = \"\"\r\n        while n != 0:\r\n            if n%-2 != 0 :\r\n                ans = '1' + ans\r\n                n = (n-1)//-2\r\n            else:\r\n                ans = '0' + ans\r\n                n = n//-2\r\n        return ans if ans !=\"\" else '0'",
    "java": "class Solution {\r\n    public String baseNeg2(int n) {\r\n        StringBuilder answer = new StringBuilder(n == 0 ? \"0\" : \"\" );\r\n        for(;n!=0;n=-(n>>1)) {\r\n            answer.append((n&1) == 0 ? '0' : '1' );\r\n        }\r\n        return answer.reverse().toString();\r\n    }\r\n}"
  }
}
