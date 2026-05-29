export default {
  "id": 1023,
  "name": "Camelcase Matching",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/camelcase-matching",
  "relativeDir": "C/Camelcase Matching",
  "slug": "1023-camelcase-matching",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 42,
    "java": 27,
    "python": 38,
    "javascript": 20
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<bool> camelMatch(vector<string>& queries, string pattern) {\r\n        \r\n        vector<bool> res(queries.size());\r\n        \r\n        for (int i = 0; i < queries.size(); i++)\r\n        {\r\n            int patRef = 0;\r\n            bool isCamel = true;\r\n            \r\n            for (const char& ltr : queries[i])\r\n            {\r\n                if (patRef == pattern.size())\r\n                {\r\n                    if (isupper(ltr))\r\n                    {\r\n                        isCamel = false;\r\n                        break;\r\n                    }\r\n                }\r\n                else\r\n                {\r\n                    if (isupper(ltr) and isupper(pattern[patRef]) and ltr != pattern[patRef])\r\n                    {\r\n                        isCamel = false;\r\n                        break;\r\n                    }\r\n                    else if (islower(ltr) and islower(pattern[patRef]) and ltr == pattern[patRef])\r\n                        patRef++;\r\n                    else if (ltr == pattern[patRef])\r\n                        patRef++;\r\n                }\r\n            }\r\n            \r\n            if (patRef == pattern.size() and isCamel)\r\n                res[i] = true;\r\n        }\r\n                             \r\n        return res;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def camelMatch(self, queries: List[str], pattern: str) -> List[bool]:\r\n        res, N = [], len(pattern)\r\n\t\t\r\n        for query in queries:\r\n\t\t\r\n            if self.upLetter(query) != self.upLetter(pattern) or self.LCS(query, pattern) != N:\r\n                res.append(False)\r\n            \r\n            else:\r\n                res.append(True)\r\n\t\t\t\t\r\n        return res\r\n                \r\n        \r\n\t\t\r\n    def LCS(self, A, B):\r\n        N, M = len(A), len(B)\r\n        d = [[0 for _ in range(M+1)] for _ in range(N+1)]\r\n\r\n        for i in range(1, N+1):\r\n            for j in range(1, M+1):\r\n\t\t\t\r\n                if A[i - 1] == B[j - 1]:\r\n                    d[i][j] = 1 + d[i-1][j-1]\r\n\r\n                else:\r\n                    d[i][j] = max(d[i-1][j], d[i][j-1])\r\n        return d[-1][-1]\r\n\r\n\r\n    \r\n    def upLetter(self, w):\r\n        count = 0\r\n        for c in w:\r\n            if c.isupper():\r\n                count += 1\r\n        return count",
    "java": "// Runtime: 1 ms (Top 33.0%) | Memory: 40.70 MB (Top 50.3%)\r\n\r\nclass Solution {\r\n    public List<Boolean> camelMatch(String[] queries, String pattern) {\r\n      List<Boolean> list = new ArrayList<>();\r\n\r\n      for (var q : queries) {\r\n         int index = 0;\r\n         boolean flag = true;\r\n         for (var c : q.toCharArray()) {\r\n            if(index < pattern.length() && c == pattern.charAt(index)){\r\n               index++;\r\n               continue;\r\n            }\r\n            if(c >= 'A' && c <= 'Z'){\r\n               if(index >= pattern.length() || c != pattern.charAt(index)){\r\n                  flag = false;\r\n                  break;\r\n               }\r\n            }\r\n         }\r\n         flag = flag && index == pattern.length();\r\n         list.add(flag);\r\n      }\r\n      return list;\r\n    }\r\n}",
    "javascript": "// Runtime: 117 ms (Top 20.64%) | Memory: 42.2 MB (Top 53.97%)\r\nvar camelMatch = function(queries, pattern) {\r\n    function camelMatch(q, p){\r\n        let qlist=[]\r\n        let plist=[]\r\n        for(let a of q) if(a<='Z') qlist.push(a);\r\n        for(let a of p) if(a<='Z') plist.push(a);\r\n        return plist.join('') === qlist.join('')\r\n    }\r\n    function seqMatch(q, p){\r\n        if(!camelMatch(p,q)) return false\r\n        let pi=0\r\n        for(let qi=0; qi<q.length; qi++){\r\n            if(pi<p.length && p[pi]===q[qi]) pi++\r\n        }\r\n        return pi===p.length\r\n    }\r\n\r\n    return queries.map(q=>seqMatch(q, pattern))\r\n}"
  }
}
