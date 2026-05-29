export default {
  "id": 467,
  "name": "Unique Substrings in Wraparound String",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/unique-substrings-in-wraparound-string",
  "relativeDir": "U/Unique Substrings in Wraparound String",
  "slug": "0467-unique-substrings-in-wraparound-string",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 21,
    "java": 26,
    "python": 21,
    "javascript": 19
  },
  "languages": {
    "cpp": "// Runtime: 7 ms (Top 84.73%) | Memory: 8.30 MB (Top 65.52%)\r\n\r\nclass Solution {\r\npublic:\r\n    int findSubstringInWraproundString(string p) {\r\n        int ans=1,prev_ans=1;\r\n        vector<int> arr(26,0);\r\n        arr[p[0]-'a']=1;\r\n        for (int i=1;i<p.size();i++){\r\n            if ((p[i-1]-'a'+1)%26==p[i]-'a') // Checking for continuation\r\n                prev_ans++;\r\n            else\r\n                prev_ans=1;\r\n            if (arr[p[i]-'a']<prev_ans){\r\n                ans+=prev_ans-arr[p[i]-'a'];\r\n                arr[p[i]-'a']=prev_ans;\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "def get_next(char):\r\n    x = ord(char)-ord('a')\r\n    x = (x+1)%26\r\n    return chr(ord('a') + x)\r\nclass Solution:\r\n    def findSubstringInWraproundString(self, p: str) -> int:\r\n        i = 0\r\n        n = len(p)\r\n        map_ = collections.defaultdict(int)\r\n        while i<n:\r\n            start = i\r\n            prev_val = p[i]\r\n            while i+1<n and get_next(prev_val) == p[i+1]:\r\n                prev_val = p[i+1]\r\n                i+=1\r\n            while start <= i:\r\n                curr_val = i-start+1\r\n                map_[p[start]] = max(map_[p[start]], curr_val)\r\n                start += 1\r\n            i+=1\r\n        return sum(map_.values())",
    "java": "// One Pass Counting Solution\r\n// 1. check cur-prev == 1 or -25 to track the length of longest continuos subtring.\r\n// 2. counts to track the longest continuos subtring starting with current character.\r\n// Time complexity: O(N)\r\n// Space complexity: O(1)\r\nclass Solution {\r\n    public int findSubstringInWraproundString(String p) {\r\n        final int N = p.length();\r\n        int res = 0, len = 1;\r\n        int[] counts = new int[26];\r\n        for (int i = 0; i < N; i++) {\r\n            char ch = p.charAt(i);\r\n            if (i > 0 && (ch - p.charAt(i-1) == 1 || ch - p.charAt(i-1) == -25)) {\r\n                len++;\r\n            } else {\r\n                len = 1;\r\n            }\r\n            int idx = ch - 'a';\r\n            counts[idx] = Math.max(counts[idx], len);\r\n        }\r\n        for (int count : counts) {\r\n            res += count;\r\n        }\r\n        return res;\r\n    }\r\n}",
    "javascript": "var findSubstringInWraproundString = function(p) {\r\n\tconst dp = Array(26).fill(0);\r\n\tconst origin = 'a'.charCodeAt(0);\r\n\tlet count = 0;\r\n\r\n\tfor (let index = 0; index < p.length; index++) {\r\n\t\tconst code = p.charCodeAt(index);\r\n\t\tconst preCode = p.charCodeAt(index - 1);\r\n\t\tconst pos = code - origin;\r\n\r\n\t\tcount = code - preCode === 1 || preCode - code === 25\r\n\t\t\t? count + 1\r\n\t\t\t: 1;\r\n\r\n\t\tdp[pos] = Math.max(count, dp[pos]);\r\n\t}\r\n\r\n\treturn dp.reduce((total, count) => total + count);\r\n};"
  }
}
