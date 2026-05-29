export default {
  "id": 1897,
  "name": "Redistribute Characters to Make All Strings Equal",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal",
  "relativeDir": "R/Redistribute Characters to Make All Strings Equal",
  "slug": "1897-redistribute-characters-to-make-all-strings-equal",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 16,
    "java": 26,
    "python": 14,
    "javascript": 23
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool makeEqual(vector<string>& words) {\r\n        int mp[26] = {0};\r\n        for(auto &word: words){\r\n            for(auto &c: word){\r\n                mp[c - 'a']++;\r\n            }\r\n        }\r\n        \r\n        for(int i = 0;i<26;i++){\r\n            if(mp[i] % words.size() != 0) return false;\r\n        }\r\n        return true;      \r\n    }\r\n};",
    "python": "class Solution:\r\n    def makeEqual(self, words: List[str]) -> bool:\r\n        map_ = {}\r\n        for word in words:\r\n            for i in word:\r\n                if i not in map_:\r\n                    map_[i] = 1\r\n                else:\r\n                    map_[i] += 1\r\n        n = len(words)\r\n        for k,v in map_.items():\r\n            if (v%n) != 0:\r\n                return False\r\n        return True",
    "java": "class Solution {\r\n    public boolean makeEqual(String[] words) {\r\n        \r\n        HashMap<Character, Integer> map = new HashMap<>();\r\n        \r\n        for(String str : words){\r\n            \r\n            for(int i=0; i<str.length(); i++){\r\n                char ch = str.charAt(i);\r\n                \r\n                map.put(ch, map.getOrDefault(ch, 0) + 1);\r\n            }\r\n            \r\n        }\r\n        \r\n        for(Character key : map.keySet()){\r\n            \r\n            int freq = map.get(key);\r\n            if(freq % words.length!=0){\r\n                return false;\r\n            }\r\n        }\r\n        \r\n        return true;\r\n    }\r\n}",
    "javascript": "// Runtime: 144 ms (Top 34.85%) | Memory: 45.3 MB (Top 50.00%)\r\n/**\r\n * @param {string[]} words\r\n * @return {boolean}\r\n */\r\nvar makeEqual = function(words) {\r\n\r\n    let length = words.length\r\n\r\n    let map = {}\r\n    for( let word of words ) {\r\n        for( let ch of word ) {\r\n            map[ch] = ( map[ch] || 0 ) + 1\r\n        }\r\n    }\r\n\r\n    for( let key of Object.keys(map)) {\r\n        if( map[key] % length !=0 ) return false\r\n    }\r\n\r\n    return true\r\n\r\n};"
  }
}
