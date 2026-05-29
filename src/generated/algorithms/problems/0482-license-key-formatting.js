export default {
  "id": 482,
  "name": "License Key Formatting",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/license-key-formatting",
  "relativeDir": "L/License Key Formatting",
  "slug": "0482-license-key-formatting",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 27,
    "java": 19,
    "python": 15,
    "javascript": 13
  },
  "languages": {
    "cpp": "// Runtime: 8 ms (Top 55.67%) | Memory: 9.70 MB (Top 8.81%)\r\n\r\nclass Solution {\r\npublic:\r\n    string licenseKeyFormatting(string S, int K) {\r\n        stack<char> sChars;\r\n        for (auto ch : S) {\r\n            if (ch != '-')\r\n                sChars.push(ch);\r\n        }\r\n        \r\n        string sRet;\r\n        int cur = 0;\r\n        while (!sChars.empty()) {\r\n            sRet += toupper(sChars.top());\r\n            sChars.pop();\r\n            cur++;\r\n            \r\n            if (cur == K && !sChars.empty()) {\r\n                sRet += '-';\r\n                cur = 0;\r\n            }\r\n        }\r\n        reverse(sRet.begin(), sRet.end());\r\n        return sRet;\r\n    }\r\n};",
    "python": "# Runtime: 81 ms (Top 55.38%) | Memory: 14.3 MB (Top 86.51%)\r\nclass Solution:\r\n    def licenseKeyFormatting(self, s: str, k: int) -> str:\r\n        new_str = s.replace(\"-\", \"\")\r\n        res = \"\"\r\n        j = len(new_str)-1\r\n        i = 0\r\n        while j >= 0:\r\n            res += new_str[j].upper()\r\n            i += 1\r\n            if i == k and j != 0:\r\n                res += \"-\"\r\n                i = 0\r\n            j -= 1\r\n        return res[::-1]",
    "java": "// Runtime: 26 ms (Top 55.76%) | Memory: 45.6 MB (Top 53.19%)\r\nclass Solution {\r\n    public String licenseKeyFormatting(String s, int k) {\r\n        StringBuilder answer = new StringBuilder();\r\n        int length = 0;\r\n        // Iterate Backwards to fullfill first group condition\r\n        for(int i=s.length()-1;i>=0;i--) {\r\n            if(s.charAt(i) == '-') {\r\n                continue;\r\n            }\r\n            if(length > 0 && length % k == 0) {\r\n                answer.append('-');\r\n            }\r\n            answer.append(Character.toUpperCase(s.charAt(i)));\r\n            length++;\r\n        }\r\n        return answer.reverse().toString();\r\n    }\r\n}",
    "javascript": "// Runtime: 84 ms (Top 86.97%) | Memory: 44.9 MB (Top 98.14%)\r\n// Please upvote if you like the solution. Thanks\r\n\r\nvar licenseKeyFormatting = function(s, k) {\r\n let str=s.replace(/[^A-Za-z0-9]/g,\"\").toUpperCase()\r\n    let ans=\"\"\r\n    let i=str.length;\r\n    while(i>0){\r\n        ans=\"-\"+str.substring(i-k,i)+ans // we are taking k characters from the end of string and adding it to answer\r\n        i=i-k\r\n    }\r\n    return (ans.substring(1)) // removing the \"-\" which is present in the start of ans\r\n};"
  }
}
