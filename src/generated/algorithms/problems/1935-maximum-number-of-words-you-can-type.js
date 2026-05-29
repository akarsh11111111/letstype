export default {
  "id": 1935,
  "name": "Maximum Number of Words You Can Type",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-number-of-words-you-can-type",
  "relativeDir": "M/Maximum Number of Words You Can Type",
  "slug": "1935-maximum-number-of-words-you-can-type",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 31,
    "java": 19,
    "python": 13,
    "javascript": 12
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.0%) | Memory: 7.10 MB (Top 30.21%)\r\n\r\nclass Solution {\r\npublic:\r\n    int canBeTypedWords(string text, string brokenLetters) {\r\n        vector<int> ch(26,0);\r\n        //store the broken letters\r\n        for(char c: brokenLetters){\r\n            ch[c-'a']=1;\r\n        }\r\n        // breaking text into word using string stream\r\n        stringstream s(text); // Used for breaking words\r\n        string word; // to store individual words\r\n  \r\n        int count = 0,flag=0;\r\n        while (s >> word){\r\n            flag=0;\r\n            for(char &c: word){\r\n                //if the word contains a broken letter mark flag=1\r\n                if(ch[c-'a']==1){\r\n                    flag=1;\r\n                    break;\r\n                }\r\n            }\r\n            //if flag is 0 which means that there is no broken letter in word so increase the count\r\n            if(flag==0)\r\n                count++;\r\n        }\r\n        return count;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def canBeTypedWords(self, text: str, brokenLetters: str) -> int:\r\n        text = text.split()\r\n        length = len(text)\r\n        brokenLetters = set(brokenLetters)\r\n\r\n        for word in text:\r\n            for char in word:\r\n                if char in brokenLetters:\r\n                    length -= 1\r\n                    break\r\n\t\t\t\t\t\r\n        return length",
    "java": "// Runtime: 8 ms (Top 25.13%) | Memory: 42.1 MB (Top 88.13%)\r\nclass Solution {\r\n    public int canBeTypedWords(String text, String brokenLetters) {\r\n        int count = 1;\r\n        boolean isBad = false;\r\n        for (char c : text.toCharArray()) {\r\n            if (c == ' ') {\r\n                isBad = false;\r\n                count++;\r\n            } else {\r\n                if (!isBad && brokenLetters.indexOf(c) != -1) {\r\n                    isBad = true;\r\n                    count--;\r\n                }\r\n            }\r\n        }\r\n        return count;\r\n    }\r\n}",
    "javascript": "// Runtime: 108 ms (Top 32.13%) | Memory: 44.5 MB (Top 16.74%)\r\nvar canBeTypedWords = function(text, brokenLetters) {\r\n    let regexp=\"[\"+brokenLetters+\"]\\+\"\r\n    let word=text.split(\" \"), count=0;\r\n    for(let i=0; i<word.length; i++){\r\n        let work=true;\r\n        // if matches, means word[i] contains malfunction letters.\r\n        if(word[i].match(regexp)){work=false};\r\n        if(work){count++};\r\n    }\r\n    return count;\r\n};"
  }
}
