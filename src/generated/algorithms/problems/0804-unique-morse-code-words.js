export default {
  "id": 804,
  "name": "Unique Morse Code Words",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/unique-morse-code-words",
  "relativeDir": "U/Unique Morse Code Words",
  "slug": "0804-unique-morse-code-words",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 28,
    "java": 15,
    "python": 29,
    "javascript": 22
  },
  "languages": {
    "cpp": "// Runtime: 3 ms (Top 85.58%) | Memory: 8.5 MB (Top 62.02%)\r\nclass Solution {\r\npublic:\r\n\r\n  string convert(string st)\r\n  {\r\n     string s1[]={\".-\",\"-...\",\"-.-.\",\"-..\",\".\",\"..-.\",\"--.\",\"....\",\"..\",\".---\",\"-.-\",\".-..\",\"--\",\"-.\",\"---\",\".--.\",\"--.-\",\".-.\",\"...\",\"-\",\"..-\",\"...-\",\".--\",\"-..-\",\"-.--\",\"--..\"};\r\n    string s=\"\";\r\n    for(char a:st)\r\n    {\r\n      s+=s1[a - 'a'];\r\n\r\n    }\r\n    return s;\r\n\r\n  }\r\n    int uniqueMorseRepresentations(vector<string>& words) {\r\n\r\n     set<string>st;\r\n      for(int i=0;i<words.size();i++)\r\n      {\r\n      st.insert(convert(words[i]));\r\n\r\n      }\r\n\r\n      return st.size();\r\n    }\r\n};",
    "python": "// Runtime: 43 ms (Top 50.2%) | Memory: 17.50 MB (Top 5.12%)\r\n\r\nclass Solution:\r\n    def uniqueMorseRepresentations(self, words: List[str]) -> int:\r\n        \r\n        # create a dictionary for morse code (You can just copy & paste it! ^.^)\r\n        ENG_to_MORSE = {  \r\n            'a':\".-\", 'b':\"-...\", 'c':\"-.-.\", 'd':\"-..\", 'e':\".\",\r\n            'f':\"..-.\", 'g':\"--.\", 'h':\"....\", 'i':\"..\", 'j':\".---\",\r\n            'k':\"-.-\", 'l':\".-..\", 'm':\"--\", 'n':\"-.\", 'o':\"---\",\r\n            'p':\".--.\", 'q':\"--.-\", 'r':\".-.\", 's':\"...\", 't':\"-\",\r\n            'u':\"..-\", 'v':\"...-\", 'w':\".--\", 'x':\"-..-\", 'y':\"-.--\", 'z':\"--..\",\r\n        }\r\n        \r\n        cnt = {}    # dictionary for different transformations\r\n        \r\n        for word in words:      # loop through every word\r\n            \r\n            tmp = \"\"\r\n            \r\n            for c in word:      # loop through every character\r\n                tmp += ENG_to_MORSE[c]    # convert the word to morse code\r\n                \r\n            if tmp not in cnt:\r\n                cnt[tmp] = 0\r\n            else:\r\n                cnt[tmp] += 1\r\n\r\n        return len(cnt)     # return how many different elements in cnt",
    "java": "class Solution {\r\n    public int uniqueMorseRepresentations(String[] words) {\r\n        HashSet<String> set = new HashSet<>();\r\n        String[] morse = new String[]{\".-\",\"-...\",\"-.-.\",\"-..\",\".\",\"..-.\",\"--.\",\"....\",\"..\",\".---\",\"-.-\",\".-..\",\"--\",\"-.\",\"---\",\".--.\",\"--.-\",\".-.\",\"...\",\"-\",\"..-\",\"...-\",\".--\",\"-..-\",\"-.--\",\"--..\"};\r\n        \r\n        for (int i = 0; i < words.length; ++i) {\r\n            String temp = \"\";\r\n            for (int j = 0; j < words[i].length(); ++j) {\r\n                temp += morse[(int)words[i].charAt(j)-'a'];\r\n            }\r\n            set.add(temp);\r\n        }\r\n        return set.size();\r\n    }\r\n}",
    "javascript": "// Runtime: 79 ms (Top 79.05%) | Memory: 43.6 MB (Top 56.48%)\r\nvar uniqueMorseRepresentations = function(words) {\r\n    var morse = [\".-\",\"-...\",\"-.-.\",\"-..\",\".\",\"..-.\",\r\n                  \"--.\",\"....\",\"..\",\".---\",\r\n                  \"-.-\",\".-..\",\"--\",\"-.\",\"---\",\".--.\",\r\n                  \"--.-\",\".-.\",\"...\",\"-\",\"..-\",\"...-\",\r\n                  \".--\",\"-..-\",\"-.--\",\"--..\"];\r\n\r\n    var transformations = new Set();\r\n\r\n    for (let word of words) {\r\n        var trans = \"\";\r\n        for (let letter of word) {\r\n            var index = letter.charCodeAt(0) - 97;\r\n            trans += morse[index];\r\n        }\r\n\r\n        transformations.add(trans);\r\n    }\r\n\r\n    return transformations.size;\r\n};"
  }
}
