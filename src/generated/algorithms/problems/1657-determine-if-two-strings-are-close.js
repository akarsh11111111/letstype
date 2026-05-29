export default {
  "id": 1657,
  "name": "Determine if Two Strings Are Close",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/determine-if-two-strings-are-close",
  "relativeDir": "D/Determine if Two Strings Are Close",
  "slug": "1657-determine-if-two-strings-are-close",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 23,
    "java": 30,
    "python": 7,
    "javascript": 14
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool closeStrings(string word1, string word2) {\r\n        set<int> w1_letters, w2_letters, w1_freq, w2_freq;\r\n        unordered_map<char, int> w1_m, w2_m;\r\n        \r\n        for (auto a : word1) {\r\n            w1_letters.insert(a);\r\n            w1_m[a]++;\r\n        }\r\n        \r\n        for (auto a : word2) {\r\n            w2_letters.insert(a);\r\n            w2_m[a]++;\r\n        }\r\n        \r\n        for (auto [k, v] : w1_m) w1_freq.insert(v);\r\n        \r\n        for (auto [k, v] : w2_m) w2_freq.insert(v);\r\n\r\n        return w1_letters == w2_letters && w1_freq == w2_freq;\r\n    }\r\n};",
    "python": "# Runtime: 137 ms (Top 70.4%) | Memory: 17.77 MB (Top 49.0%)\r\n\r\nfrom collections import Counter\r\n\r\nclass Solution:\r\n    def closeStrings(self, word1: str, word2: str) -> bool:\r\n        return set(word1) == set(word2) and Counter(Counter(word1).values()) == Counter(Counter(word2).values())",
    "java": "// Runtime: 24 ms (Top 51.63%) | Memory: 58.9 MB (Top 49.30%)\r\nclass Solution {\r\n    private int N = 26;\r\n    public boolean closeStrings(String word1, String word2) {\r\n        // count the English letters\r\n        int[] arr1 = new int[N], arr2 = new int[N];\r\n        for (char ch : word1.toCharArray())\r\n            arr1[ch - 'a']++;\r\n        for (char ch : word2.toCharArray())\r\n            arr2[ch - 'a']++;\r\n\r\n        // if one has a letter which another one doesn't have, dont exist\r\n        for (int i = 0; i < N; i++) {\r\n            if (arr1[i] == arr2[i]) {\r\n                continue;\r\n            }\r\n            if (arr1[i] == 0 || arr2[i] == 0) {\r\n                return false;\r\n            }\r\n        }\r\n        Arrays.sort(arr1);\r\n        Arrays.sort(arr2);\r\n        for (int i = 0; i < N; i++) {\r\n            if (arr1[i] != arr2[i]) {\r\n                return false;\r\n            }\r\n        }\r\n        return true;\r\n    }\r\n}",
    "javascript": "var closeStrings = function(word1, word2) {\r\n    if (word1.length != word2.length) return false;\r\n    let map1 = new Map(), map2 = new Map(),freq1=new Set(),freq2=new Set();\r\n    for (let i = 0; i < word1.length; i++) map1.set(word1[i],map1.get(word1[i])+1||1),map2.set(word2[i],map2.get(word2[i])+1||1);\r\n    if (map1.size != map2.size) return false;\r\n    for (const [key,value] of map1) {\r\n      if (!map2.has(key)) return false\r\n      freq1.add(value);\r\n      freq2.add(map2.get(key));\r\n    }\r\n    if (freq1.size != freq2.size) return false;\r\n    for (const freq of freq1) if (!freq2.has(freq)) return false\r\n    return true;    \r\n};"
  }
}
