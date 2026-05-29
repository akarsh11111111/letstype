export default {
  "id": 1016,
  "name": "Binary String With Substrings Representing 1 To N",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/binary-string-with-substrings-representing-1-to-n",
  "relativeDir": "B/Binary String With Substrings Representing 1 To N",
  "slug": "1016-binary-string-with-substrings-representing-1-to-n",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 17,
    "java": 11,
    "python": 10
  },
  "languages": {
    "cpp": "// Runtime: 5 ms (Top 42.03%) | Memory: 6.5 MB (Top 32.61%)\r\nclass Solution {\r\npublic:\r\n    bool queryString(string s, int n) {\r\n        unordered_set<int> seen;\r\n        int len = s.length();\r\n        for(int i=len-1;i>=0;i--){\r\n            int num = 0;\r\n            for(int j=1;j<=min(len-i,31);j++){ //max 31 bit is enough to form positive integer\r\n                num = num*2 + (s[i+j-1] == '1' ? 1 : 0);\r\n                if(0 < num && num <= n) seen.insert(num);\r\n            }\r\n            if(seen.size() == n) return true;\r\n        }\r\n        return false;\r\n    }\r\n};",
    "python": "// Runtime: 34 ms (Top 84.96%) | Memory: 16.60 MB (Top 62.78%)\r\n\r\nclass Solution:\r\n    def queryString(self, S: str, N: int) -> bool:\r\n        ans = set()\r\n        for i in range(len(S)):\r\n            for ii in range(i, i + N.bit_length()): \r\n                x = int(S[i:ii+1], 2)\r\n                if 1 <= x <= N: ans.add(x)\r\n        return len(ans) == N",
    "java": "// Runtime: 0 ms (Top 100.0%) | Memory: 41.50 MB (Top 30.38%)\r\n\r\nclass Solution {\r\n    public boolean queryString(String s, int n) {\r\n        for(int i = 1 ; i <= n ; i++) {\r\n            String binary = Integer.toBinaryString(i);\r\n            if(!s.contains(binary)) return false; \r\n        }\r\n        return true;\r\n    }\r\n}"
  }
}
