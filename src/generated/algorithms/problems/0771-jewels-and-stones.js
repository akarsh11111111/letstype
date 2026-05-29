export default {
  "id": 771,
  "name": "Jewels and Stones",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/jewels-and-stones",
  "relativeDir": "J/Jewels and Stones",
  "slug": "0771-jewels-and-stones",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 18,
    "java": 17,
    "python": 11,
    "javascript": 12
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.0%) | Memory: 6.60 MB (Top 45.88%)\r\n\r\nclass Solution {\r\npublic:\r\n    map<char,int> umap;\r\n    int numJewelsInStones(string J, string S) {\r\n        for(char c:S){\r\n            umap[c]++;\r\n        }\r\n        int count=0;\r\n        for(char c:J){\r\n            if(umap.count(c)){\r\n                count+=umap[c];\r\n            }\r\n        }\r\n        return count;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def numJewelsInStones(self, jewels: str, stones: str) -> int:\r\n\t\t# 1 : One line solution, My best runtime 38 with 13.9 MB\r\n        return sum(1 for k in stones if k in jewels)\r\n\t\t\r\n\t\t# 2 : Traditional solution\r\n\t\tx=0\r\n\t\tfor k in stones:\r\n\t\t\tif k in jewels:\r\n\t\t\t\tx+=1\r\n\t\treturn x",
    "java": "// Runtime: 3 ms (Top 31.57%) | Memory: 42.7 MB (Top 19.07%)\r\nclass Solution {\r\n    public int numJewelsInStones(String jewels, String stones) {\r\n        HashSet<Character> hs=new HashSet<>();\r\n        int count=0;\r\n        for(int i=0;i<jewels.length();i++)\r\n        {\r\n            hs.add(jewels.charAt(i));\r\n        }\r\n        for(int i=0;i<stones.length();i++)\r\n        {\r\n            if(hs.contains(stones.charAt(i)))\r\n                count++;\r\n        }\r\n        return count;\r\n    }\r\n}",
    "javascript": "var numJewelsInStones = function(jewels, stones) {\r\n    let trackDict = new Map();\r\n    let output = 0;\r\n\r\n    for (let char of stones)\r\n        trackDict.set(char, trackDict.has(char) ? trackDict.get(char) + 1 : 1);\r\n    \r\n    for (let char of jewels)\r\n        output += trackDict.has(char) ? trackDict.get(char) : 0;\r\n\r\n    return output;\r\n};"
  }
}
