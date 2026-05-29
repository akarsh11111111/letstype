export default {
  "id": 2085,
  "name": "Count Common Words With One Occurrence",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/count-common-words-with-one-occurrence",
  "relativeDir": "C/Count Common Words With One Occurrence",
  "slug": "2085-count-common-words-with-one-occurrence",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 13,
    "java": 19,
    "python": 4,
    "javascript": 18
  },
  "languages": {
    "cpp": "// Runtime: 35 ms (Top 93.71%) | Memory: 19.1 MB (Top 51.70%)\r\nclass Solution {\r\npublic:\r\n    int countWords(vector<string>& words1, vector<string>& words2) {\r\n        unordered_map<string, int> freq1, freq2;\r\n        for (auto& s : words1) ++freq1[s];\r\n        for (auto& s : words2) ++freq2[s];\r\n        int ans = 0;\r\n        for (auto& [s, v] : freq1)\r\n            if (v == 1 && freq2[s] == 1) ++ans;\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n\tdef countWords(self, words1: List[str], words2: List[str]) -> int:\r\n\t\tcount = Counter(words1 + words2)\r\n\t\treturn len([word for word in count if count[word] == 2 and word in words1 and word in words2])",
    "java": "class Solution\r\n{\r\n    public int countWords(String[] words1, String[] words2)\r\n    {\r\n        HashMap<String, Integer> map1 = new HashMap<>();\r\n        HashMap<String, Integer> map2 = new HashMap<>();\r\n\t\t\r\n        for(String word : words1)\r\n            map1.put(word,map1.getOrDefault(word,0)+1);\r\n        for(String word : words2)\r\n            map2.put(word,map2.getOrDefault(word,0)+1);\r\n\t\t\t\r\n        int count = 0;\r\n        for(String word : words1)\r\n            if(map1.get(word) == 1 && map2.getOrDefault(word,0) == 1)\r\n                count++;\r\n        return count;\r\n    }\r\n}",
    "javascript": "// Runtime: 141 ms (Top 32.57%) | Memory: 46 MB (Top 62.84%)\r\nvar countWords = function(words1, words2) {\r\n    const map1 = new Map();\r\n    const map2 = new Map();\r\n    let count = 0;\r\n\r\n    for (const word of words1) {\r\n        map1.set(word, map1.get(word) + 1 || 1);\r\n    }\r\n    for (const word of words2) {\r\n        map2.set(word, map2.get(word) + 1 || 1);\r\n    }\r\n    for (const word of words1) {\r\n        if (map1.get(word) === 1 && map2.get(word) === 1) count++;\r\n    }\r\n\r\n    return count;\r\n};"
  }
}
