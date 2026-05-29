export default {
  "id": 383,
  "name": "Ransom Note",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/ransom-note",
  "relativeDir": "R/Ransom Note",
  "slug": "0383-ransom-note",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 16,
    "java": 34,
    "python": 18,
    "javascript": 14
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool canConstruct(string ransomNote, string magazine) {\r\n        int cnt[26] = {0};\r\n        for(char x: magazine)\r\n            cnt[x-'a']++;\r\n        \r\n        for(char x: ransomNote) {\r\n            if(cnt[x-'a'] == 0)\r\n                return false;\r\n            cnt[x-'a']--;\r\n        }\r\n        \r\n        return true;\r\n    }\r\n};",
    "python": "from collections import Counter\r\nclass Solution:\r\n    def canConstruct(self, ransomNote: str, magazine: str) -> bool:\r\n         \r\n        ransomNote_count = dict(Counter(ransomNote))\r\n        magazine_count = dict(Counter(magazine))\r\n        \r\n        for key , value in ransomNote_count.items():\r\n            \r\n            if key in magazine_count:\r\n                if value <= magazine_count[key]:\r\n                    continue\r\n            else:\r\n                return False\r\n            \r\n            return False\r\n        \r\n        return True",
    "java": "// Runtime: 17 ms (Top 19.48%) | Memory: 44.60 MB (Top 8.88%)\r\n\r\nclass Solution {\r\n    public boolean canConstruct(String ransomNote, String magazine) {\r\n        char[] rs = ransomNote.toCharArray();\r\n        char[] ms = magazine.toCharArray();\r\n        \r\n        HashMap<Character, Integer> rm = new HashMap<>();\r\n        HashMap<Character, Integer> mz = new HashMap<>();\r\n        \r\n        for (char c : rs) {\r\n            if (rm.containsKey(c)) {\r\n                rm.put(c, rm.get(c) + 1);\r\n            } else {\r\n                rm.put(c, 1);\r\n            }\r\n        }\r\n\r\n        for (char c : ms) {\r\n            if (mz.containsKey(c)) {\r\n                mz.put(c, mz.get(c) + 1);\r\n            } else {\r\n                mz.put(c, 1);\r\n            }\r\n        }\r\n\r\n        for (char c : rm.keySet()) {\r\n            if (!mz.containsKey(c) || mz.get(c) < rm.get(c)) {\r\n                return false;\r\n            }\r\n        }\r\n        return true;  \r\n    }\r\n}",
    "javascript": "// Runtime: 157 ms (Top 28.08%) | Memory: 44.7 MB (Top 69.70%)\r\nvar canConstruct = function(ransomNote, magazine) {\r\n    map = {};\r\n    for(let i of magazine){\r\n        map[i] = (map[i] || 0) + 1;\r\n    }\r\n    for(let i of ransomNote){\r\n        if(!map[i]){\r\n            return false\r\n        }\r\n        map[i]--;\r\n    }\r\n    return true\r\n};"
  }
}
