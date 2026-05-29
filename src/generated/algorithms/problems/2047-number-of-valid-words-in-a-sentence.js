export default {
  "id": 2047,
  "name": "Number of Valid Words in a Sentence",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/number-of-valid-words-in-a-sentence",
  "relativeDir": "N/Number of Valid Words in a Sentence",
  "slug": "2047-number-of-valid-words-in-a-sentence",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 26,
    "java": 17,
    "python": 23,
    "javascript": 18
  },
  "languages": {
    "cpp": "// Runtime: 541 ms (Top 5.28%) | Memory: 54.1 MB (Top 5.61%)\r\n#include <regex>\r\n\r\nclass Solution {\r\npublic:\r\n    int countValidWords(string sentence) {\r\n\r\n        int count = 0;\r\n\r\n        // Defining the regex pattern\r\n        regex valid_word(\"[a-z]*([a-z]-[a-z])?[a-z]*[!,.]?\");\r\n\r\n        // splitting the sentence to words\r\n        stringstream s(sentence);\r\n        string word;\r\n        while(getline(s, word, ' ')) {\r\n\r\n            // Checking if the word matches the regex pattern\r\n            if(word != \"\" && regex_match(word, valid_word)){\r\n                ++count;\r\n            }\r\n        }\r\n\r\n        return count;\r\n    }\r\n};",
    "python": "import re\r\nclass Solution:\r\n    def countValidWords(self, sentence: str) -> int:\r\n        \r\n        # parse and get each word from sentence\r\n        words = sentence.split()\r\n        \r\n        # regular expression pattern for valid words\r\n        pattern = re.compile( r'^([a-z]+\\-?[a-z]+[!\\.,]?)$|^([a-z]*[!\\.,]?)$' )\r\n        \r\n        # valid word count\r\n        count = 0\r\n        \r\n        # scan each word from word pool\r\n        for word in words:\r\n            \r\n            # judge whether current word is valid or not\r\n            match = re.match(pattern, word)\r\n            \r\n            if match:\r\n                count+=1\r\n                \r\n        return count",
    "java": "class Solution {\r\n    public int countValidWords(String sentence) {\r\n        String regex = \"^([a-z]+(-?[a-z]+)?)?(!|\\\\.|,)?$\";\r\n        String r2 = \"[^0-9]+\";\r\n        String[] arr = sentence.split(\"\\\\s+\");\r\n        int ans = 0;\r\n        for(String s: arr)\r\n        {\r\n            if(s.matches(regex) && s.matches(r2))\r\n            {\r\n                ans++;\r\n                //System.out.println(s);\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n}",
    "javascript": "// Runtime: 55 ms (Top 92.5%) | Memory: 45.64 MB (Top 65.6%)\r\n\r\n/**\r\n * @param {string} sentence\r\n * @return {number}\r\n */\r\nvar countValidWords = function(sentence) {\r\n    let list = sentence.split(' ')\r\n    let filtered = list.filter(s => {\r\n        if (/\\d/.test(s) || s === '') return false   //removes anything with numbers or is blank\r\n        if (/^[!,.]$/.test(s)) return true          //punctuation only\r\n        if (/^\\w+[!,.]?$/.test(s)) return true      //word + optional punctuation\r\n        if (/^\\w+[-]?\\w+[!,.]?$/.test(s)) return true //word + optional hypen + word + optional punctuation\r\n        return false\r\n    })\r\n    \r\n    return filtered.length\r\n};"
  }
}
