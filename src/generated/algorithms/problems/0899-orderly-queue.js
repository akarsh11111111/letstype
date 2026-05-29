export default {
  "id": 899,
  "name": "Orderly Queue",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/orderly-queue",
  "relativeDir": "O/Orderly Queue",
  "slug": "0899-orderly-queue",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 19,
    "java": 19,
    "python": 12,
    "javascript": 29
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.0%) | Memory: 8.80 MB (Top 64.77%)\r\n\r\nclass Solution {\r\npublic:\r\n    string orderlyQueue(string S, int K) {\r\n       // for k>1 we can make it fully sorted string after roation because here we are not bound to the roatate first char only.\r\n        if (K > 1) {\r\n            sort(S.begin(), S.end());\r\n            return S;\r\n        }\r\n        // for k==1 we can rotate whole string any times like-  S=\"cba\" we can get cba, bac,acb so in S+S =\"cbacba\" we need to find only lexicographically smallest string  of size n in S+S.\r\n            string tempr=S;\r\n            S= S+ S;\r\n            for(int i=1;i<tempr.size();i++){\r\n                tempr=min(tempr,S.substr(i,tempr.size()));\r\n            }\r\n            return tempr;\r\n    }\r\n};",
    "python": "// Runtime: 36 ms (Top 85.00%) | Memory: 13.8 MB (Top 97.50%)\r\nclass Solution:\r\n    def orderlyQueue(self, s: str, k: int) -> str:\r\n        if k>1:\r\n            s=list(c for c in s)\r\n            s.sort()\r\n            return ''.join(s)\r\n        s1=s\r\n        for i in range(len(s)):\r\n            s=s[1:]+s[0]\r\n            s1=min(s1,s)\r\n        return s1",
    "java": "// Time O(n)\r\n// Space O(n)\r\nclass Solution {\r\n    public String orderlyQueue(String s, int k) {\r\n        int n = s.length();\r\n        String ans = \"\";\r\n        if (k == 1){\r\n            s+=s; // add itself again\r\n            for (int i = 0; i < n; i++) if (ans.isEmpty() || s.substring(i, i+n).compareTo(ans) < 0){\r\n                ans = s.substring(i, i+n);\r\n            }\r\n        }else{\r\n            char[] arr = s.toCharArray();\r\n            Arrays.sort(arr);\r\n            ans = String.valueOf(arr);\r\n        }\r\n        return ans;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {string} s\r\n * @param {number} k\r\n * @return {string}\r\n */\r\nvar orderlyQueue = function(s, k) {\r\n  // rotate the string one by one, and check which is lexographically smaller\r\n  if (k === 1) {\r\n    let temp = `${s}`;\r\n    let smallest = `${s}`;\r\n    let count = 0;\r\n    while (count < s.length) {\r\n      temp = temp.substring(1, s.length) + temp.charAt(0);\r\n      if (temp < smallest) {\r\n        smallest = temp;\r\n      }\r\n      count++;\r\n    }\r\n    return smallest;\r\n  }\r\n  \r\n  // if k is greater than 1, any permutation is possilbe\r\n  // so we simply return the sorted string (convert to array -> sort -> back to string)\r\n  if (k > 1) {\r\n    return [...s].sort().join('');\r\n  }\r\n  \r\n  return s;\r\n};"
  }
}
