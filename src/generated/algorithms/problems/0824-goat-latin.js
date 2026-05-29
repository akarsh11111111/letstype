export default {
  "id": 824,
  "name": "Goat Latin",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/goat-latin",
  "relativeDir": "G/Goat Latin",
  "slug": "0824-goat-latin",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 36,
    "java": 31,
    "python": 15,
    "javascript": 31
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    string toGoatLatin(string sentence) {\r\n        sentence += ' ';\r\n        vector<string> Words;\r\n        string TEMP, SOL, A = \"a\";\r\n        for (int i = 0; i < sentence.size(); ++i)\r\n        {\r\n            if (sentence[i] == ' ')\r\n            {\r\n                Words.push_back(TEMP);\r\n                TEMP = \"\";\r\n            }\r\n            else\r\n                TEMP += sentence[i];\r\n        }\r\n        for (string V : Words)\r\n        {\r\n            char TMP = tolower(V[0]);\r\n            if (TMP == 'a' || TMP == 'e' || TMP == 'i' || TMP == 'o' || TMP == 'u')\r\n                V += \"ma\";\r\n            else\r\n            {\r\n                TMP = V[0];\r\n                V.erase(0, 1);\r\n                V += TMP;\r\n                V += \"ma\";\r\n            }\r\n            V += A;\r\n            A += 'a';\r\n            SOL += V + ' ';\r\n        }\r\n        SOL.erase(SOL.size() - 1, 1);\r\n        return SOL;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def toGoatLatin(self, sentence: str) -> str:\r\n        wordList, result, index = sentence.split(' '), \"\", 1\r\n        for word in wordList:\r\n            if index > 1:\r\n                result += \" \"\r\n            firstLetter = word[0]\r\n            if firstLetter in 'aeiouAEIOU':\r\n                result += word + \"ma\"\r\n            else:\r\n                result += word[1:] + firstLetter + \"ma\"\r\n            for i in range(index):\r\n                result += 'a'\r\n            index += 1\r\n        return result",
    "java": "// Runtime: 3 ms (Top 83.72%) | Memory: 42.5 MB (Top 62.02%)\r\nclass Solution {\r\n    public String toGoatLatin(String sentence) {\r\n        StringBuffer sb = new StringBuffer();\r\n        StringBuffer temp = new StringBuffer(\"a\"); // temporary stringbuffer\r\n\r\n        for(String str : sentence.split(\" \")) {\r\n            if(beginsWithConsonant(str)) {\r\n                sb.append(str.substring(1)); // removing the first letter\r\n                sb.append(str.charAt(0)); // appending it to the end\r\n            } else {\r\n                sb.append(str);\r\n            }\r\n\r\n            sb.append(\"ma\"); // appending \"ma\" to the end of the word (common operation)\r\n            sb.append(temp); // adding one letter 'a' to the end of each word\r\n\r\n            // the first word gets \"a\" added to the end,\r\n            // the second word gets \"aa\" added to the end,\r\n            // and so on.\r\n            temp.append(\"a\"); // increasing the a's for every word\r\n            sb.append(\" \"); // to put space between words\r\n        }\r\n\r\n        return sb.toString().trim(); // using trim() to remove the one extra space from the end of string.\r\n    }\r\n\r\n    public boolean beginsWithConsonant(String str) {\r\n        return \"aeiou\".indexOf(str.toLowerCase().charAt(0)) == -1;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {string} S\r\n * @return {string}\r\n */\r\nvar toGoatLatin = function(S) {\r\n    let re = /[aeiou]/gi\r\n    let word = S.split(' ')\r\n    let add = 0\r\n    let arr = []\r\n    \r\n    for(let i= 0; i < word.length; i++) {\r\n        if(!word[i].substring(0,1).match(re)) {\r\n            arr = word[i].split('')\r\n            let letter = arr.shift()\r\n            arr.push(letter)\r\n            word[i] = arr.join('')\r\n        }\r\n        \r\n        // have to append 'ma' regardless if it starts with a vowel\r\n        word[i] += 'ma'\r\n        \r\n        // append 'a' number of times as the index + 1\r\n        add = i+1\r\n        while(add >0) {\r\n            word[i] += 'a'\r\n            add--\r\n        }\r\n    }\r\n    \r\n    return word.join(' ')\r\n};"
  }
}
