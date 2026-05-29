export default {
  "id": 1662,
  "name": "Check If Two String Arrays are Equivalent",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent",
  "relativeDir": "C/Check If Two String Arrays are Equivalent",
  "slug": "1662-check-if-two-string-arrays-are-equivalent",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 34,
    "java": 7,
    "python": 3,
    "javascript": 4
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool arrayStringsAreEqual(vector<string>& word1, vector<string>& word2) \r\n    {\r\n        int wordIdx1 = 0, wordIdx2 = 0, chIdx1 = 0, chIdx2 = 0;\r\n        while(true)\r\n        {\r\n            char ch1 = word1[wordIdx1][chIdx1];\r\n            char ch2 = word2[wordIdx2][chIdx2];\r\n            if (ch1 != ch2) return false;\r\n            \r\n            chIdx1++; //incrementing the character index of current word from \"word1\"\r\n            chIdx2++; //incrementing the character index of current word from \"word2\";\r\n            //=========================================================\r\n            if (chIdx1 == word1[wordIdx1].size()) //if current word from \"word1\" is over\r\n            { \r\n                wordIdx1++;  //move to next word in \"word1\"\r\n                chIdx1 = 0;  //reset character index to 0\r\n            }\r\n            if (chIdx2 == word2[wordIdx2].size()) //if  current word from \"word2\" is over\r\n            { \r\n                wordIdx2++;  //move to next word  in \"word2\"\r\n                chIdx2 = 0; //reset character index to 0\r\n            }\r\n            //=================================================================\r\n            if (wordIdx1 == word1.size() && wordIdx2 == word2.size()) break; // words in both arrays are finished\r\n            \r\n            if (wordIdx1 == word1.size() || wordIdx2 == word2.size()) return false;\r\n            //if words in any onr of the arrays are finished and other still has some words in it\r\n            //then there is no way same string could be formed on concatenation\r\n        }\r\n        return true; \r\n    }\r\n};",
    "python": "class Solution:\r\n    def arrayStringsAreEqual(self, word1: List[str], word2: List[str]) -> bool:\r\n        return True if \"\".join(word1) == \"\".join(word2) else False",
    "java": "// Runtime: 2 ms (Top 57.48%) | Memory: 41.5 MB (Top 82.47%)\r\nclass Solution {\r\n    public boolean arrayStringsAreEqual(String[] word1, String[] word2)\r\n    {\r\n        return(String.join(\"\", word1).equals(String.join(\"\", word2)));\r\n    }\r\n}",
    "javascript": "// Runtime: 92 ms (Top 44.97%) | Memory: 41.6 MB (Top 99.15%)\r\nvar arrayStringsAreEqual = function(word1, word2) {\r\n    return word1.join('') === word2.join('')\r\n};"
  }
}
