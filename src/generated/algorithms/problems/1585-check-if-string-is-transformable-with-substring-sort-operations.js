export default {
  "id": 1585,
  "name": "Check If String Is Transformable With Substring Sort Operations",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/check-if-string-is-transformable-with-substring-sort-operations",
  "relativeDir": "C/Check If String Is Transformable With Substring Sort Operations",
  "slug": "1585-check-if-string-is-transformable-with-substring-sort-operations",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 26,
    "java": 54,
    "python": 15
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool isTransformable(string s, string t) {\r\n        vector<vector<int>> inx(10);\r\n        for(int i = 0; i < s.length(); i++) \r\n            inx[s[i]-'0'].push_back(i);\r\n        \r\n        vector<int> cnt(10, 0);\r\n        for(int i = 0; i < t.length(); i++) {\r\n            int d = t[i] - '0';\r\n            // check anagram\r\n            if(cnt[d] >= inx[d].size())\r\n                return false;\r\n            for(int k = 0; k < d; k++) {\r\n                if(cnt[k] < inx[k].size() && inx[k][cnt[k]] < inx[d][cnt[d]])\r\n                    return false;\r\n            }\r\n            cnt[d] += 1;\r\n        }\r\n        \r\n        return true;\r\n    }\r\n};\r\n\r\n// 1 1 9 1 9  \r\n// 1 9 1 1 9",
    "python": "from collections import defaultdict\r\nclass Solution:\r\n    def isTransformable(self, s: str, t: str) -> bool:\r\n        index = defaultdict(list)\r\n        for i, c in enumerate(s):\r\n            index[c].append(i)\r\n        curpos = defaultdict(int)\r\n        for c in t:\r\n            if curpos[c] == len(index[c]): return False\r\n            for i in range(int(c)):\r\n                i = str(i)\r\n                if curpos[i] < len(index[i]) and index[i][curpos[i]] < index[c][curpos[c]]:\r\n                    return False\r\n            curpos[c] += 1\r\n        return True",
    "java": "class Solution {\r\n    public boolean isTransformable(String s, String t) {\r\n        if (!equal(s, t)) return false;\r\n        int[] countS = new int[10];\r\n        int[] countT = new int[10];\r\n        int[][] prev = new int[10][10];\r\n        int[][] after = new int[10][10];\r\n        \r\n        for (int i = 0; i < s.length(); i++) {\r\n            int s1 = s.charAt(i) - '0';\r\n            int t1 = t.charAt(i) - '0';\r\n            countS[s1]++;\r\n            countT[t1]++;\r\n            \r\n\t\t\t// This step is to calculate how many digit less than s1/t1 occur before time i\r\n\t\t\t// Store the frequency pair into 2-d array\r\n            for (int j = 0; j < s1; j++) {\r\n                if (countS[j] == 0) continue;\r\n                prev[j][s1] += countS[j];\r\n\r\n            }\r\n            \r\n            for (int j = 0; j < t1; j++) {\r\n                if (countT[j] == 0) continue;    \r\n                after[j][t1] += countT[j];\r\n            }\r\n            \r\n        }\r\n        \r\n        for (int i = 0; i <= 8; i++) {\r\n            for (int j = i + 1; j <= 9; j++) {\r\n                if (prev[i][j] == 0) continue;\r\n\t\t\t\t// Check if any ascending pair's frequency has been reduced after modified.\r\n                if (after[i][j] < prev[i][j]) return false;\r\n            }\r\n        }\r\n        \r\n        return true;\r\n    }\r\n    \r\n\t// Judge whether the two strings has the same digits\r\n    public boolean equal(String s, String t) {\r\n        char[] sc = s.toCharArray();\r\n        char[] tc = t.toCharArray();\r\n        Arrays.sort(sc);\r\n        Arrays.sort(tc);\r\n        \r\n        for (int i = 0; i < s.length(); i++) {\r\n            if (sc[i] != tc[i]) return false;\r\n        }\r\n        \r\n        return true;\r\n    }\r\n}"
  }
}
