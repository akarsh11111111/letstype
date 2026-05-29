export default {
  "id": 567,
  "name": "Permutation in String",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/permutation-in-string",
  "relativeDir": "P/Permutation in String",
  "slug": "0567-permutation-in-string",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 14,
    "java": 57,
    "python": 36,
    "javascript": 31
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n\tbool checkInclusion(string s1, string s2) {\r\n\t\tsort(s1.begin(),s1.end());\r\n\t\tint n = s1.size(), m = s2.size();\r\n\t\tfor(int i=0;i<=m-n;i++)\r\n\t\t{\r\n\t\t\tstring s = s2.substr(i,n);\r\n\t\t\tsort(s.begin(),s.end());\r\n\t\t\tif(s1 == s)     return true;\r\n\t\t}\r\n\t\treturn false;\r\n\t}\r\n};",
    "python": "class Solution:\r\n    def checkInclusion(self, s1: str, s2: str) -> bool:\r\n        if len(s1) > len(s2):\r\n            return False\r\n        s1_map = {}\r\n        s2_map = {}\r\n        for i in range(ord('a') , ord('z') + 1):\r\n            s1_map[chr(i)] = 0\r\n            s2_map[chr(i)] = 0\r\n        \r\n        for i in s1:\r\n            s1_map[i] += 1\r\n            \r\n        l = 0\r\n        r = 0\r\n        \r\n        while r < len(s2):\r\n            print(s2_map , l ,r)\r\n            if r == 0:\r\n                while r < len(s1):\r\n                    s2_map[s2[r]] += 1\r\n                    r += 1\r\n                if s2_map == s1_map:\r\n                    return True\r\n\r\n            else:\r\n                s2_map[s2[l]] -= 1\r\n                s2_map[s2[r]] += 1\r\n                \r\n                if s2_map == s1_map:\r\n                    return True\r\n                else:\r\n                    l += 1\r\n                    r += 1\r\n            \r\n        return False",
    "java": "class Solution {\r\n    public boolean checkInclusion(String s1, String s2) {\r\n        if(s1.length() > s2.length()) {\r\n            return false;\r\n        }\r\n        \r\n        int[]s1Count = new int[26];\r\n        int[]s2Count = new int[26];\r\n        \r\n        for(int i = 0; i < s1.length(); i++) {\r\n            char c = s1.charAt(i);\r\n            char s = s2.charAt(i);\r\n            s1Count[c - 'a'] += 1;\r\n            s2Count[s - 'a'] += 1;\r\n        }\r\n        \r\n        int matches = 0;\r\n        \r\n        for(int i = 0; i < 26;i++) {\r\n            if(s1Count[i] == s2Count[i]) {\r\n                matches+=1;\r\n            }\r\n        }\r\n        \r\n        int left = 0;\r\n        for(int right = s1.length(); right < s2.length();right++) {\r\n            if(matches == 26) {\r\n                return true;\r\n            }\r\n            \r\n            int index = s2.charAt(right) - 'a';\r\n            s2Count[index] += 1;\r\n            if(s1Count[index] == s2Count[index]) {\r\n                matches += 1;\r\n            }\r\n            else if(s1Count[index] + 1 == s2Count[index]) {\r\n                matches -= 1;\r\n            }\r\n            \r\n            index = s2.charAt(left) - 'a';\r\n            s2Count[index] -= 1;\r\n            if(s1Count[index] == s2Count[index]) {\r\n                matches += 1;\r\n            }\r\n            else if(s1Count[index] - 1 == s2Count[index]) {\r\n                matches -= 1;\r\n            }\r\n            left += 1;\r\n        }\r\n        \r\n        if(matches == 26) {\r\n            return true;\r\n        }\r\n        \r\n        return false;\r\n    }\r\n}",
    "javascript": "// Runtime: 135 ms (Top 60.53%) | Memory: 45.4 MB (Top 55.95%)\r\nconst getCharIdx = (c) => c.charCodeAt(0) - 'a'.charCodeAt(0);\r\nconst isEqual = (a, b) => a.every((v, i) => v == b[i]);\r\n\r\nvar checkInclusion = function(s1, s2) {\r\n    const occS1 = new Array(26).fill(0);\r\n    const occS2 = new Array(26).fill(0);\r\n\r\n    const s1Len = s1.length, s2Len = s2.length;\r\n\r\n    if(s1Len > s2Len) return false;\r\n\r\n    let l = 0, r = 0;\r\n    for(; r < s1Len ; r++) {\r\n        occS1[getCharIdx(s1[r])]++;\r\n        occS2[getCharIdx(s2[r])]++;\r\n    }\r\n\r\n    if(isEqual(occS1, occS2)) {\r\n        return true;\r\n    }\r\n\r\n    for(; r < s2Len; r++) {\r\n        occS2[getCharIdx(s2[r])]++;\r\n        occS2[getCharIdx(s2[l++])]--;\r\n\r\n        if(isEqual(occS1, occS2)) return true;\r\n    }\r\n\r\n    return false;\r\n};"
  }
}
