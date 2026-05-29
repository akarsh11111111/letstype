export default {
  "id": 2000,
  "name": "Reverse Prefix of Word",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/reverse-prefix-of-word",
  "relativeDir": "R/Reverse Prefix of Word",
  "slug": "2000-reverse-prefix-of-word",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 16,
    "java": 21,
    "python": 19,
    "javascript": 3
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.00%) | Memory: 6.1 MB (Top 72.47%)\r\nclass Solution {\r\npublic:\r\n    string reversePrefix(string word, char ch) {\r\n        string ans = \"\";\r\n        int tr = true;\r\n        for(auto w : word){\r\n            ans.push_back(w);\r\n            if(tr && w == ch){\r\n                tr=false;\r\n                reverse(ans.begin(), ans.end());\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "// Runtime: 32 ms (Top 84.42%) | Memory: 16.40 MB (Top 68.29%)\r\n\r\nclass Solution:\r\n    def reversePrefix(self, word: str, ch: str) -> str:\r\n        \"\"\"\r\n        #method 1:\r\n        for i in range(len(word)):\r\n            if word[i]==ch:\r\n                return word[:i+1][::-1]+word[i+1:]\r\n        return word\"\"\"\r\n        #method 2:\r\n        l=0\r\n        r=word.find(ch)\r\n        word=list(word)\r\n        while l<r:\r\n            word[l],word[r]=word[r],word[l]\r\n            l+=1\r\n            r-=1\r\n        return \"\".join(word)",
    "java": "// Runtime: 1 ms (Top 86.37%) | Memory: 42 MB (Top 72.03%)\r\nclass Solution {\r\n    public String reversePrefix(String word, char ch) {\r\n        char[] c = word.toCharArray();\r\n        int locate = 0;\r\n        for (int i = 0; i < word.length(); i++) { //first occurrence of ch\r\n            if (ch == c[i]) {\r\n                locate = i;\r\n                break;\r\n            }\r\n        }\r\n        char[] res = new char[word.length()];\r\n        for (int i = 0; i <= locate; i++) {\r\n            res[i] = c[locate - i];\r\n        }\r\n        for (int i = locate + 1; i < word.length(); i++) {\r\n            res[i] = c[i];\r\n        }\r\n        return String.valueOf(res);\r\n    }\r\n}",
    "javascript": "var reversePrefix = function(word, ch) {\r\n    return word.indexOf(ch) !== -1 ? word.split(\"\").slice(0, word.indexOf(ch) + 1).reverse().join(\"\") + word.slice(word.indexOf(ch) + 1) : word;\r\n};"
  }
}
