export default {
  "id": 2262,
  "name": "Total Appeal of A String",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/total-appeal-of-a-string",
  "relativeDir": "T/Total Appeal of A String",
  "slug": "2262-total-appeal-of-a-string",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 20,
    "java": 17,
    "python": 9,
    "javascript": 11
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n\tlong long appealSum(string s) {\r\n\t\tint n = s.size();\r\n\t\tlong long ans = 0;\r\n\t\tfor(char ch='a';ch<='z';ch++)       // we are finding the number of substrings containing at least 1 occurence of ch\r\n\t\t{\r\n\t\t\tint prev = 0;                   // prev will store the previous index of the charcter ch\r\n\t\t\tfor(int i=0;i<n;i++)\r\n\t\t\t{\r\n\t\t\t\tif(s[i] == ch) prev = i+1;  // if the current character is equal to ch , then the no. of substring\r\n\t\t\t\t\t\t\t\t\t\t\t// ending at i and having at least one occurence of ch will be i+1 .\r\n\r\n\t\t\t\tans+=prev;                  // else the no. of substrings ending at i and having at least\r\n\t\t\t\t\t\t\t\t\t\t\t// one occurence of ch will be the equal to, the previous index of ch.\r\n\t\t\t}\r\n\t\t}\r\n\t\treturn ans;                        // TC - O(n*26) , SC - O(1)\r\n\t}\r\n};",
    "python": "// Runtime: 201 ms (Top 33.23%) | Memory: 18.20 MB (Top 28.53%)\r\n\r\nclass Solution:\r\n    def appealSum(self, s: str) -> int:\r\n        res, n, prev = 0, len(s), defaultdict(lambda: -1)\r\n        for i, ch in enumerate(s):\r\n            res += (i - prev[ch]) * (n - i)\r\n            prev[ch] = i\r\n        return res",
    "java": "// Runtime: 9 ms (Top 66.9%) | Memory: 43.90 MB (Top 92.4%)\r\n\r\nclass Solution {\r\n    public long appealSum(String s) {\r\n        long res = 0;\r\n        char[] cs = s.toCharArray();\r\n        int n = cs.length;\r\n        int[] pos = new int[26];\r\n        Arrays.fill(pos, -1);\r\n        for (int i = 0; i < n; ++i) {\r\n            int j = cs[i] - 'a', prev = pos[j]; \r\n            res += (i - prev) * (long) (n - i);\r\n            pos[j] = i;\r\n        }\r\n        return res;\r\n    }\r\n}",
    "javascript": "var appealSum = function(s) {\r\n  let ans = 0, n = s.length;\r\n  let lastIndex = Array(26).fill(-1);\r\n  for (let i = 0; i < n; i++) {\r\n    let charcode = s.charCodeAt(i) - 97;\r\n    let lastIdx = lastIndex[charcode];\r\n    ans += (n - i) * (i - lastIdx);\r\n    lastIndex[charcode] = i;\r\n  }  \r\n  return ans;\r\n};"
  }
}
