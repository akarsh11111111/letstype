export default {
  "id": 1737,
  "name": "Change Minimum Characters to Satisfy One of Three Conditions",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/change-minimum-characters-to-satisfy-one-of-three-conditions",
  "relativeDir": "C/Change Minimum Characters to Satisfy One of Three Conditions",
  "slug": "1737-change-minimum-characters-to-satisfy-one-of-three-conditions",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 29,
    "java": 35,
    "python": 15
  },
  "languages": {
    "cpp": "// Runtime: 560 ms (Top 5.43%) | Memory: 14.7 MB (Top 97.67%)\r\nclass Solution {\r\npublic:\r\n    int count(string &a,string &b)\r\n    {\r\n        int ans=INT_MAX;\r\n        for(char c='a';c<'z';c++)\r\n        {\r\n            int cnt=0;\r\n            for(char it:a) cnt+=(it>c);\r\n            for(char it:b) cnt+=(it<=c);\r\n            ans=min(ans,cnt);\r\n        }\r\n        return ans;\r\n    }\r\n    int minCharacters(string a, string b) {\r\n        int x=count(a,b),y=count(b,a);\r\n        int fans=INT_MAX;\r\n\r\n        for(char c='a';c<='z';c++)\r\n        {\r\n            int cnt=0;\r\n            for(char it:a) cnt+=(it!=c);\r\n            for(char it:b) cnt+=(it!=c);\r\n            fans=min(fans,cnt);\r\n        }\r\n        return min({x,y,fans});\r\n    }\r\n};",
    "python": "// Runtime: 115 ms (Top 83.64%) | Memory: 17.50 MB (Top 38.79%)\r\n\r\nclass Solution:\r\n    def minCharacters(self, a: str, b: str) -> int:\r\n        pa, pb = [0]*26, [0]*26\r\n        for x in a: pa[ord(x)-97] += 1\r\n        for x in b: pb[ord(x)-97] += 1\r\n        \r\n        ans = len(a) - max(pa) + len(b) - max(pb) # condition 3\r\n        for i in range(25): \r\n            pa[i+1] += pa[i]\r\n            pb[i+1] += pb[i]\r\n            ans = min(ans, pa[i] + len(b) - pb[i]) # condition 2\r\n            ans = min(ans, len(a) - pa[i] + pb[i]) # condition 1\r\n        return ans",
    "java": "// Runtime: 14 ms (Top 27.1%) | Memory: 44.54 MB (Top 34.2%)\r\n\r\nclass Solution {\r\n    public int minCharacters(String a, String b) {\r\n        int[] aCount = new int[26];\r\n        int aMax = 0;\r\n        for (int i = 0; i < a.length(); i++) {\r\n            aCount[a.charAt(i) - 'a']++;\r\n            aMax = Math.max(aMax, aCount[a.charAt(i) - 'a']);\r\n        }\r\n        \r\n        int[] bCount = new int[26];\r\n        int bMax = 0;\r\n        for (int i = 0; i < b.length(); i++) {\r\n            bCount[b.charAt(i) - 'a']++;\r\n            bMax = Math.max(bMax, bCount[b.charAt(i) - 'a']);\r\n        }\r\n        int condition3 = a.length() - aMax + b.length() - bMax;\r\n        \r\n        int globalMin = condition3;\r\n        \r\n        int aTillCurrent = 0;\r\n        int bTillCurrent = 0;\r\n        for (int i = 0; i < 25; i++) {\r\n            aTillCurrent += aCount[i];\r\n            bTillCurrent += bCount[i];\r\n            globalMin = Math.min(globalMin, bTillCurrent + a.length() - aTillCurrent);\r\n            globalMin = Math.min(globalMin, aTillCurrent + b.length() - bTillCurrent);\r\n        }\r\n        \r\n        \r\n        \r\n        return globalMin;\r\n    }\r\n}"
  }
}
