export default {
  "id": 557,
  "name": "Reverse Words in a String III",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/reverse-words-in-a-string-iii",
  "relativeDir": "R/Reverse Words in a String III",
  "slug": "0557-reverse-words-in-a-string-iii",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 16,
    "java": 17,
    "python": 14,
    "javascript": 20
  },
  "languages": {
    "cpp": "Time: O(n+n)  Space: O(1)\r\n\r\nclass Solution {\r\npublic:\r\n    string reverseWords(string s) {\r\n        int i,j;\r\n        for( i=0,j=0;i<size(s);i++){\r\n            if(s[i]==' '){\r\n                reverse(begin(s)+j,begin(s)+i);\r\n                j=i+1;\r\n            }\r\n        }\r\n        reverse(begin(s)+j,end(s));\r\n        return s;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def reverseWords(self, s: str) -> str:\r\n        s = s + ' '\r\n        l = len(s)\r\n        t = ''\r\n        w = ''\r\n        for i in range(l):\r\n            if s[i]!=' ':\r\n                t = s[i] + t  # t stores the word in reverse order\r\n            else:\r\n\t\t\t\t# w stores the reversed word in the same order\r\n                w = w + t + ' ' # could have used .join() function and not write .strip()\r\n                t = \"\" # value of t is null so that it won't affect upcoming words\r\n        return w.strip() # removes extra whitespace",
    "java": "// Runtime: 21 ms (Top 36.48%) | Memory: 50.7 MB (Top 54.16%)\r\nclass Solution {\r\n    public String reverseWords(String s) {\r\n        if(s == null || s.trim().equals(\"\")){\r\n            return null;\r\n        }\r\n        String [] words = s.split(\" \");\r\n        StringBuilder resultBuilder = new StringBuilder();\r\n        for(String word: words){\r\n            for(int i = word.length() - 1; i>=0; i --){\r\n                resultBuilder.append(word.charAt(i));\r\n            }\r\n            resultBuilder.append(\" \");\r\n        }\r\n        return resultBuilder.toString().trim();\r\n    }\r\n}",
    "javascript": "// Runtime: 76 ms (Top 15.58%) | Memory: 49.70 MB (Top 6.97%)\r\n\r\nvar reverseWords = function(s){\r\n        let chars = [...s];\r\n        let start = 0;\r\n\r\n        for (let i = 0; i < chars.length; i++) {\r\n            if (chars[i] === ' ' || i === chars.length - 1) {\r\n                let end = (i === chars.length - 1 && chars[i] !== ' ') ? i + 1 : i;\r\n                while (start < end) {\r\n                    [chars[start], chars[end - 1]] = [chars[end - 1], chars[start]];\r\n                    start++;\r\n                    end--;\r\n                }\r\n                start = i + 1;\r\n            }\r\n        }\r\n\r\n        return chars.join('');\r\n    }"
  }
}
