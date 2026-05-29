export default {
  "id": 903,
  "name": "Valid Permutations for DI Sequence",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/valid-permutations-for-di-sequence",
  "relativeDir": "V/Valid Permutations for DI Sequence",
  "slug": "0903-valid-permutations-for-di-sequence",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 72,
    "java": 26,
    "python": 24
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int numPermsDISequence(string s) {\r\n        int n=s.length();\r\n        queue<pair<string,unordered_set<int>>> q;\r\n        unordered_set<int> v;\r\n        string str=\"\";\r\n        for(int i=0;i<=n;++i)\r\n        {\r\n            str=\"\";\r\n            v.clear();\r\n            str+=(i+'0');\r\n            v.insert(i);\r\n            q.push({str,v});\r\n        }\r\n        int i=0;\r\n        unordered_set<string> visall;\r\n        while(!q.empty())\r\n        {\r\n            int sz=q.size();\r\n            if(i==n)\r\n            {\r\n                return q.size();\r\n            }\r\n            while(sz--)\r\n            {\r\n                auto temp=q.front();\r\n                q.pop();\r\n                if(visall.find(temp.first)!=visall.end())\r\n                {\r\n                    continue;\r\n                }\r\n                if(s[i]=='D')\r\n                {\r\n                    for(int j=temp.first.back()-'0'-1;j>=0;--j)\r\n                    {\r\n                        if(temp.second.find(j)==temp.second.end())\r\n                        {\r\n                            temp.first+=(j+'0');\r\n                            temp.second.insert(j);\r\n                            if(visall.find(temp.first)==visall.end())\r\n                            {\r\n                                q.push({temp.first,temp.second});\r\n                            }\r\n                            temp.second.erase(j);\r\n                            temp.first.pop_back();\r\n                        }\r\n                    }\r\n            }\r\n                else\r\n                {\r\n                    for(int j=temp.first.back()-'0'+1;j<=n;++j)\r\n                    {\r\n                        if(temp.second.find(j)==temp.second.end())\r\n                        {\r\n                            temp.first+=(j+'0');\r\n                            temp.second.insert(j);\r\n                            if(visall.find(temp.first)==visall.end())\r\n                            {\r\n                                q.push({temp.first,temp.second});\r\n                            }\r\n                            temp.second.erase(j);\r\n                            temp.first.pop_back();\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n            i++;\r\n        }\r\n        return 0;\r\n    }\r\n};",
    "python": "// Runtime: 46 ms (Top 80.0%) | Memory: 18.80 MB (Top 54.55%)\r\n\r\nclass Solution:\r\n    def numPermsDISequence(self, s: str) -> int:\r\n        n = len(s)\r\n        dp = [[None for j in range(n-i+1)] for i in range(n)]\r\n        for j in range(n-1, 0-1, -1):\r\n            if s[j] == \"I\":\r\n                if j == n-1:\r\n                    dp[j][0] = 1\r\n                    dp[j][1] = 0\r\n                else:\r\n                    dp[j][n-j] = 0\r\n                    for i in range((n-j)-1, 0-1, -1):\r\n                        dp[j][i] = dp[j+1][i]+dp[j][i+1]\r\n            else:\r\n                if j == n-1:\r\n                    dp[j][0] = 0\r\n                    dp[j][1] = 1\r\n                else:\r\n                    dp[j][0] = 0\r\n                    for i in range(1, n-j+1):\r\n                        dp[j][i] = dp[j+1][i-1]+dp[j][i-1]\r\n        return sum([dp[0][i] for i in range(n+1)])%(10**9+7)",
    "java": "// Runtime: 3 ms (Top 88.89%) | Memory: 42.50 MB (Top 24.07%)\r\n\r\nclass Solution {\r\n\tpublic int numPermsDISequence(String s) {\r\n\t\tint length = s.length();\r\n\t\tint mod = 1000000007;\r\n\t\tint[] dp1 = new int[length + 1];\r\n\t\tint[] dp2 = new int[length];\r\n\t\tfor (int j = 0; j <= length; j++) {\r\n\t\t\tdp1[j] = 1;\r\n\t\t}\r\n\t\tfor (int i = 0; i < length; i++) {\r\n\t\t\tif (s.charAt(i) == 'I') {\r\n\t\t\t\tfor (int j = 0, curr = 0; j < length - i; j++) {\r\n\t\t\t\t\tdp2[j] = curr = (curr + dp1[j]) % mod;\r\n\t\t\t\t}\r\n\t\t\t} else {\r\n\t\t\t\tfor (int j = length - i - 1, curr = 0; j >= 0; j--) {\r\n\t\t\t\t\tdp2[j] = curr = (curr + dp1[j + 1]) % mod;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\tdp1 = Arrays.copyOf(dp2, length);\r\n\t\t}\r\n\t\treturn dp1[0];\r\n\t}\r\n}"
  }
}
