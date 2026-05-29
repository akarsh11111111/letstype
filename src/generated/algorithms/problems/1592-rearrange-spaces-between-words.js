export default {
  "id": 1592,
  "name": "Rearrange Spaces Between Words",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/rearrange-spaces-between-words",
  "relativeDir": "R/Rearrange Spaces Between Words",
  "slug": "1592-rearrange-spaces-between-words",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 46,
    "java": 47,
    "python": 10,
    "javascript": 13
  },
  "languages": {
    "cpp": "// Runtime: 4 ms (Top 33.02%) | Memory: 6.1 MB (Top 81.73%)\r\nclass Solution {\r\npublic:\r\n    string reorderSpaces(string text) {\r\n       int ct=0;\r\n\r\n       // Collection of words\r\n        vector<string> v;\r\n        for (int i=0; i<text.size(); i++){\r\n\r\n            // Calculate the numbert of spaces\r\n            while(i<text.size() && text[i] == ' '){\r\n                ct++;\r\n                i++;\r\n            }\r\n\r\n            // Extract the words and collect them\r\n            string tp=\"\";\r\n            while(i<text.size() && text[i] != ' '){\r\n                tp+=text[i];\r\n                i++;\r\n            }\r\n            i--;\r\n\r\n            // Adding word to the collection\r\n            if(tp.size()) v.push_back(tp);\r\n        }\r\n\r\n        text = \"\";\r\n\r\n        // Combining the words with equal number of white spaces\r\n        for(int i=0; i<v.size()-1; i++){\r\n            text += v[i];\r\n            int j=ct/(v.size()-1);\r\n            while(j--) text += ' ';\r\n        }\r\n\r\n        text += v[v.size()-1];\r\n\r\n        // Adding remaining extra spaces at the end\r\n        int j=(v.size() > 1)?ct % (v.size()-1):ct;\r\n        while(j--) text += ' ';\r\n\r\n        return text;\r\n    }\r\n};",
    "python": "class Solution(object):\r\n    def reorderSpaces(self, text):\r\n        word_list = text.split()\r\n        words, spaces = len(word_list), text.count(\" \")\r\n        \r\n        if words > 1:\r\n            q, r = spaces//(words-1), spaces%(words-1)\r\n            return (\" \" * q).join(word_list) + \" \" * r\r\n        else:\r\n            return \"\".join(word_list) + \" \" * spaces",
    "java": "// Runtime: 3 ms (Top 61.66%) | Memory: 40.5 MB (Top 92.33%)\r\nclass Solution {\r\n    public String reorderSpaces(String text) {\r\n        int spaces = 0;\r\n\r\n        //count the spacex\r\n        for(char c: text.toCharArray()){\r\n            if(c==' ')\r\n                spaces++;\r\n        }\r\n\r\n        //form word array\r\n        String[] words = text.trim().split(\"\\\\s+\");\r\n        int nWords = words.length;\r\n\r\n        StringBuilder sb = new StringBuilder();\r\n        int spacesToApply=0,extraSpaces=0;\r\n\r\n        //if there is only 1 word, then all spaces will be at the end\r\n        if(nWords == 1){\r\n            extraSpaces=spaces;\r\n        }\r\n\r\n        //if there are multiple words, find the spaces to apply between words and also any extra space\r\n        else{\r\n            spacesToApply = spaces / (nWords-1);\r\n            extraSpaces = spaces % (nWords-1);\r\n        }\r\n\r\n        //append every word and then apply spaces\r\n        for(int i=0;i<words.length-1;i++){\r\n            sb.append(words[i]);\r\n\r\n            for(int j=0;j<spacesToApply;j++)\r\n                sb.append(\" \");\r\n        }\r\n\r\n        //now append last word separately, bcz we dont want to apply spaces after last word\r\n        sb.append(words[nWords-1]);\r\n\r\n        //if there are any extra spaces that cannot be distributed among words, add them here\r\n        for(int j=0;j<extraSpaces;j++)\r\n                sb.append(\" \");\r\n\r\n        return sb.toString();\r\n    }\r\n}",
    "javascript": "// Runtime: 77 ms (Top 77.31%) | Memory: 42.2 MB (Top 47.52%)\r\nvar reorderSpaces = function(text) {\r\n    let arr = text.split(\" \");\r\n    let totalSpace = arr.length-1;\r\n    arr = arr.filter(w => w !== '');\r\n    let spaceBetween = arr.length > 1 ?\r\n                    Math.floor(totalSpace / (arr.length-1)) : 0;\r\n    let spaceLeftOver = arr.length > 1 ?\r\n                    totalSpace % (arr.length-1) : totalSpace;\r\n    return (arr.join(\" \".repeat(spaceBetween)) + \" \".repeat(spaceLeftOver));\r\n    // Time Complexity: O(n)\r\n    // Space Complexity: O(n)\r\n};"
  }
}
