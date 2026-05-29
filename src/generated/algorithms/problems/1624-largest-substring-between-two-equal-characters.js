export default {
  "id": 1624,
  "name": "Largest Substring Between Two Equal Characters",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/largest-substring-between-two-equal-characters",
  "relativeDir": "L/Largest Substring Between Two Equal Characters",
  "slug": "1624-largest-substring-between-two-equal-characters",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 14,
    "java": 24,
    "python": 9,
    "javascript": 15
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int maxLengthBetweenEqualCharacters(string s) {\r\n        vector<int> v(26, -1);\r\n        int maxi = -1;\r\n        \r\n        for (int i = 0; i < s.size(); i++) {\r\n            if (v[s[i] - 'a'] == -1) v[s[i] - 'a'] = i;\r\n            else maxi = max(maxi, abs(v[s[i] - 'a'] - i) - 1);      \r\n        }\r\n        \r\n        return maxi;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def maxLengthBetweenEqualCharacters(self, s: str) -> int:\r\n        last, ans = {}, -1 \r\n        for i, c in enumerate(s):\r\n            if c not in last:\r\n                last[c] = i\r\n            else:\r\n                ans = max(ans, i - last[c] - 1)\r\n        return ans",
    "java": "// Runtime: 1 ms (Top 92.59%) | Memory: 41.10 MB (Top 80.55%)\r\n\r\nclass Solution {\r\n    public int maxLengthBetweenEqualCharacters(String s) {\r\n        int[] v1 = new int[26];\r\n        int[] v2 = new int[26];\r\n        Arrays.fill(v1, -1);\r\n        Arrays.fill(v2, -1);\r\n        int ans = -1;\r\n\r\n        for (int i = 0; i < s.length(); ++i) {\r\n            int temp = s.charAt(i) - 'a';\r\n\r\n            if (v1[temp] == -1) {\r\n                v1[temp] = i;\r\n            } else {\r\n                v2[temp] = i;\r\n                ans = Math.max(ans, v2[temp] - v1[temp] - 1);\r\n            }\r\n        }\r\n\r\n        return ans;\r\n    }\r\n}",
    "javascript": "var maxLengthBetweenEqualCharacters = function(s) {\r\n    \r\n    const map = new Map();\r\n    let max=-1;\r\n    for(let i=0;i<s.length;i++){\r\n\r\n        if(map.has(s[i])){\r\n            max=Math.max(max,i-(map.get(s[i])+1))\r\n        }else{\r\n            map.set(s[i],i)    \r\n        }\r\n        \r\n    }\r\n    return max;\r\n};"
  }
}
