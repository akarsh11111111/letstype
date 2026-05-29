export default {
  "id": 387,
  "name": "First Unique Character in a String",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/first-unique-character-in-a-string",
  "relativeDir": "F/First Unique Character in a String",
  "slug": "0387-first-unique-character-in-a-string",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 19,
    "java": 18,
    "python": 8,
    "javascript": 28
  },
  "languages": {
    "cpp": "// Runtime: 120 ms (Top 5.22%) | Memory: 10.8 MB (Top 40.32%)\r\nclass Solution {\r\npublic:\r\nint firstUniqChar(string s) {\r\n    unordered_map<char, int> mp;\r\n\r\n    for(int i=0; i<s.length(); i++){\r\n        mp[s[i]]++;\r\n    }\r\n\r\n    for(int i=0; i<s.length(); i++){\r\n        if(mp[s[i]] == 1){\r\n            return i;\r\n        }\r\n    }\r\n\r\n    return -1;\r\n}\r\n};",
    "python": "class Solution:\r\n    def firstUniqChar(self, s: str) -> int:\r\n        ls=[]\r\n        for i in range(len(s)):\r\n            x=s.count(s[i])\r\n            if x==1:\r\n                return i\r\n        return -1",
    "java": "class Solution {\r\n    public int firstUniqChar(String s) {\r\n        HashMap<Character,Integer>hmap=new HashMap<>();\r\n        for(int i=0;i<s.length();i++){\r\n            if(!hmap.containsKey(s.charAt(i))){\r\n                hmap.put(s.charAt(i),1);\r\n            }\r\n                else{\r\n                    hmap.put(s.charAt(i),hmap.get(s.charAt(i))+1);\r\n            }\r\n        }\r\n        for(int i=0;i<s.length();i++){\r\n            if(hmap.get(s.charAt(i))==1)\r\n                return i;\r\n        }\r\n        return -1;\r\n    }\r\n}",
    "javascript": "// Runtime: 201 ms (Top 19.95%) | Memory: 46.9 MB (Top 27.05%)\r\n/**\r\n * @param {string} s\r\n * @return {number}\r\n */\r\n\r\nvar firstUniqChar = function(s) {\r\n    let dec = {};\r\n\r\n    for(let i=0; i < s.length ; i++){\r\n        if(dec[s[i]]){\r\n            dec[s[i]]['counter']++;\r\n        }else{\r\n            dec[s[i]] = {},\r\n            dec[s[i]]['counter'] = 1;\r\n            dec[s[i]]['index'] = i;\r\n        }\r\n    }\r\n\r\n    for(let i=0; i < s.length ; i++){\r\n        if(dec[s[i]]['counter'] == 1) {\r\n            return dec[s[i]]['index'];\r\n            break;\r\n        }\r\n    }\r\n\r\n    return -1;\r\n};"
  }
}
