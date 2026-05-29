export default {
  "id": 1781,
  "name": "Sum of Beauty of All Substrings",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/sum-of-beauty-of-all-substrings",
  "relativeDir": "S/Sum of Beauty of All Substrings",
  "slug": "1781-sum-of-beauty-of-all-substrings",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 20,
    "java": 41,
    "python": 16,
    "javascript": 23
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int beautySum(string s) {\r\n        int n = s.length(), sum = 0;\r\n        for (int i = 0; i < n - 1; i++) {\r\n            vector<int> dp(26, 0);\r\n            dp[s[i] - 'a']++;\r\n            for (int j = i + 1; j < n; j++) {\r\n                dp[s[j] - 'a']++;\r\n                int minNum = INT_MAX, maxNum = INT_MIN;\r\n                for (int k = 0; k < 26; k++) {\r\n                    if (dp[k]) minNum = min(minNum, dp[k]);\r\n                    if (dp[k]) maxNum = max(maxNum, dp[k]);\r\n                }\r\n                sum = sum + (maxNum - minNum);\r\n            }\r\n        }\r\n        return sum;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def beautySum(self, s: str) -> int:\r\n        c, n, ans = Counter(s), len(s), 0\r\n        for i in range(n-2):\r\n            x=c.copy()\r\n            for j in range(n-1,i+1,-1):\r\n                ans+=max(x.values())-min(x.values())\r\n                if x[s[j]]==1:\r\n                    del x[s[j]]\r\n                else:\r\n                    x[s[j]]-=1\r\n            if c[s[i]]==1:\r\n                del c[s[i]]\r\n            else:\r\n                c[s[i]]-=1\r\n        return ans",
    "java": "class Solution {\r\n    private int getMinCount(int[] charCount) {\r\n        int min = Integer.MAX_VALUE;\r\n\t\t\r\n        for (int i = 0; i < charCount.length; ++i) {\r\n            if (charCount[i] != 0) {\r\n                min = Math.min(min, charCount[i]);\r\n            }\r\n        }\r\n\t\t\r\n        return min;\r\n    }\r\n    \r\n    private int getMaxCount(int[] charCount) {\r\n        int max = 0;\r\n\t\t\r\n        for (int i = 0; i < charCount.length; ++i) {\r\n            max = Math.max(max, charCount[i]);\r\n        }\r\n\t\t\r\n        return max;\r\n    }\r\n    \r\n    public int beautySum(String s) {\r\n        int sum = 0;\r\n        \r\n        for (int i = 0; i < s.length(); ++i) {\r\n            int[] charCount = new int[26]; // initialize charCount to all 0\r\n            \r\n            for (int j = i; j < s.length(); ++j) {\r\n                ++charCount[s.charAt(j) - 'a'];\r\n\r\n\t\t\t\t// get beauty of substring from i to j\r\n\t\t\t\tint beauty = getMaxCount(charCount) - getMinCount(charCount);\r\n                sum += beauty;\r\n            }\r\n        }\r\n        \r\n        return sum;\r\n    }\r\n}",
    "javascript": "// Runtime: 667 ms (Top 81.08%) | Memory: 48.8 MB (Top 62.16%)\r\nvar beautySum = function(s) {\r\n    const len = s.length;\r\n\r\n    let ans = 0;\r\n    const freq = new Array(26).fill(0);\r\n\r\n    for(let i = 0; i < len; i++) {\r\n        freq[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;\r\n        for(let j = i + 1; j < len; j++) {\r\n            freq[s[j].charCodeAt(0) - 'a'.charCodeAt(0)]++;\r\n            ans += minMaxDiff(freq);\r\n        }\r\n        freq.fill(0);\r\n    }\r\n\r\n    function minMaxDiff(freq) {\r\n        freq = freq.filter(f => f != 0);\r\n        return Math.max(...freq) - Math.min(...freq);\r\n    }\r\n\r\n    return ans;\r\n};"
  }
}
