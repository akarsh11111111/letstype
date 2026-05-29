export default {
  "id": 2185,
  "name": "Counting Words With a Given Prefix",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/counting-words-with-a-given-prefix",
  "relativeDir": "C/Counting Words With a Given Prefix",
  "slug": "2185-counting-words-with-a-given-prefix",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 25,
    "java": 10,
    "python": 3,
    "javascript": 3
  },
  "languages": {
    "cpp": "// Runtime: 7 ms (Top 81.4%) | Memory: 10.90 MB (Top 13.89%)\r\n\r\n// The easiest solution to this problem is:\r\n// Step 1: Calculate length of \"pref\"\r\n// Step 2: find substring of \"words\" from 0 to length of \"pref\"\r\n// if both match increment count by 1;\r\n\r\n\r\n\r\nclass Solution {\r\npublic:\r\n    int prefixCount(vector<string>& words, string pref) {\r\n        \r\n        int count=0;\r\n        int preflen=pref.size();        //step 1\r\n        \r\n        for(auto i:words){\r\n            if(i.substr(0,preflen) == pref)     //step 2\r\n                count++;                        //if both matches then increment count by 1\r\n            \r\n        }\r\n        return count;   //return count\r\n        \r\n    }\r\n};",
    "python": "class Solution:\r\n    def prefixCount(self, words: List[str], pref: str) -> int:\r\n        return sum(word.find(pref) == 0 for word in words)",
    "java": "class Solution {\r\n    public int prefixCount(String[] words, String pref) {\r\n    int c = 0;\r\n    for(String s : words) {\r\n        if(s.indexOf(pref)==0) \r\n            c++;\r\n    }\r\n    return c; \r\n    }\r\n}",
    "javascript": "var prefixCount = function(words, pref) {\r\n    return words.filter(word => word.slice(0, pref.length) === pref).length;\r\n};"
  }
}
