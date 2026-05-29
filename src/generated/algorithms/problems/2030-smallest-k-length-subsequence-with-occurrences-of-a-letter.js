export default {
  "id": 2030,
  "name": "Smallest K-Length Subsequence With Occurrences of a Letter",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/smallest-k-length-subsequence-with-occurrences-of-a-letter",
  "relativeDir": "S/Smallest K-Length Subsequence With Occurrences of a Letter",
  "slug": "2030-smallest-k-length-subsequence-with-occurrences-of-a-letter",
  "availableLanguages": [
    "cpp",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 55,
    "python": 22
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    string smallestSubsequence(string s, int k, char letter, int repetition) {\r\n        int count=0, inStack=0;\r\n        int n=s.size();\r\n        for(int i=0; i<n; i++) \r\n            if(s[i]==letter)\r\n                count++;\r\n        string res=\"\";\r\n        int i=0;\r\n        while(i<n) {\r\n            if(res.empty())\r\n                res.push_back(s[i]);\r\n            else {\r\n            while(!res.empty() && res.back()>s[i] && n-i+res.size()>k) {\r\n                if(res.back()==letter && count+inStack-1>=repetition) {\r\n                        res.pop_back();\r\n                        inStack--;\r\n                }\r\n                else if(res.back()==letter)\r\n                    break;\r\n                else\r\n                res.pop_back();\r\n            }\r\n            if(s[i]==letter) {\r\n                inStack++;\r\n                count--;\r\n            }\r\n            res.push_back(s[i]);\r\n            }\r\n            i++;\r\n        }\r\n        string ret=\"\";\r\n        for(int i=0;i<res.size();i++)\r\n        {\r\n            if(res[i]==letter && repetition>0 && k>0)\r\n            {\r\n                repetition--;\r\n                ret+=res[i];\r\n                k--;\r\n            }\r\n            else if(k-repetition>0)\r\n            {\r\n\t\t\t\tk--;\r\n\t\t\t\tret+=res[i];   \r\n            }\r\n        }\r\n     return ret;\r\n    }\r\n};\r\n/*\r\nif(find helpful) {\r\ndo upvote(); // thanks\r\n}\r\n*/",
    "python": "class Solution:\r\n    def smallestSubsequence(self, s: str, k: int, letter: str, r: int) -> str:\r\n        n_letters = len([c for c in s if c == letter])\r\n        stack = []\r\n        \r\n        for i, c in enumerate(s):\r\n            while stack and stack[-1] > c and (len(s) - i + len(stack) > k) and (stack[-1] != letter or n_letters > r):\r\n                d = stack.pop()\r\n                if d == letter:\r\n                    r += 1\r\n                \r\n            if len(stack) < k:\r\n                if c == letter:\r\n                    stack.append(c)\r\n                    r -= 1\r\n                elif k - len(stack) > r:\r\n                    stack.append(c)\r\n            \r\n            if c == letter:\r\n                n_letters -= 1\r\n            \r\n        return ''.join(stack)"
  }
}
