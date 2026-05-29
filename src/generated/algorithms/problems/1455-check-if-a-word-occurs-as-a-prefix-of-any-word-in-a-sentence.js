export default {
  "id": 1455,
  "name": "Check If a Word Occurs As a Prefix of Any Word in a Sentence",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence",
  "relativeDir": "C/Check If a Word Occurs As a Prefix of Any Word in a Sentence",
  "slug": "1455-check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 13,
    "java": 27,
    "python": 14,
    "javascript": 11
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int isPrefixOfWord(string s, string sw) {\r\n    stringstream ss(s);\r\n    string temp;\r\n    int i=1;\r\n        while(ss>>temp) {\r\n            if(temp.compare(0, sw.size(),sw)==0) return i;\r\n            i++;\r\n        }\r\n        return -1;\r\n    }\r\n};",
    "python": "class Solution(object):\r\n    def isPrefixOfWord(self, sentence, searchWord):\r\n        \"\"\"\r\n        :type sentence: str\r\n        :type searchWord: str\r\n        :rtype: int\r\n        \"\"\"\r\n        word_list = sentence.split()\r\n        counter = 0\r\n        for word in sentence.split():\r\n            counter+=1\r\n            if searchWord == word[0:len(searchWord)]:\r\n                return counter\r\n        return -1",
    "java": "// Runtime: 1 ms (Top 44.68%) | Memory: 41.8 MB (Top 51.62%)\r\nclass Solution {\r\n    public int isPrefixOfWord(String sentence, String searchWord) {\r\n        if(!sentence.contains(searchWord))\r\n            return -1;\r\n        boolean y=false;\r\n        String[] str=sentence.split(\" \");\r\n\r\n        for(int i=0;i<str.length;i++){\r\n            if(str[i].contains(searchWord)){\r\n                for(int j=0;j<searchWord.length();j++){\r\n                    if(str[i].charAt(j)!=searchWord.charAt(j)){\r\n                        y=true;\r\n                        break;\r\n                    }\r\n\r\n                }\r\n                 if(!y){\r\n                     return i+1;\r\n                 }\r\n            }\r\n            y=false;\r\n        }\r\n\r\n        return -1;\r\n    }\r\n}",
    "javascript": "var isPrefixOfWord = function(sentence, searchWord) {\r\n    let arr = sentence.split(' ');\r\n    \r\n    for (let i = 0; i < arr.length; i++) {\r\n        let word = arr[i];\r\n        \r\n        if (word.startsWith(searchWord)) return i + 1;\r\n    }\r\n    \r\n    return -1;\r\n};"
  }
}
