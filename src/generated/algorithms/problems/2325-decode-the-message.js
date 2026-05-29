export default {
  "id": 2325,
  "name": "Decode the Message",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/decode-the-message",
  "relativeDir": "D/Decode the Message",
  "slug": "2325-decode-the-message",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 30,
    "java": 28,
    "python": 18,
    "javascript": 18
  },
  "languages": {
    "cpp": "// Runtime: 8 ms (Top 57.83%) | Memory: 7 MB (Top 72.52%)\r\nclass Solution {\r\npublic:\r\n    string decodeMessage(string key, string message) {\r\n        vector <char> alpha {'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'};\r\n        int i=0;\r\n\r\n        map<char,char> d;\r\n\r\n        for(int j=0;j<26;j++){\r\n            d[alpha[j]]='0';\r\n        }\r\n\r\n        for(int j=0; j<key.size(); j++){\r\n\r\n            if(key[j]!=' ' && d[key[j]]=='0'){\r\n                d[key[j]]=alpha[i];\r\n                i++;\r\n            }\r\n            if (i==26) break;\r\n        }\r\n        d[' '] = ' ';\r\n\r\n        string res=\"\";\r\n        for(int i=0; i<message.size(); i++){\r\n            res += d[message[i]];\r\n        }\r\n        return res;\r\n    }\r\n};",
    "python": "// Runtime: 32 ms (Top 94.64%) | Memory: 17.30 MB (Top 36.34%)\r\n\r\nclass Solution:\r\n    def decodeMessage(self, key: str, message: str) -> str:\r\n        mapping = {' ': ' '}\r\n        i = 0\r\n        res = ''\r\n        letters = 'abcdefghijklmnopqrstuvwxyz'\r\n        \r\n        for char in key:\r\n            if char not in mapping:\r\n                mapping[char] = letters[i]\r\n                i += 1\r\n        \r\n        for char in message:\r\n            res += mapping[char]\r\n                \r\n        return res",
    "java": "// Runtime: 12 ms (Top 48.65%) | Memory: 44.7 MB (Top 35.73%)\r\nclass Solution {\r\n    public String decodeMessage(String key, String message) {\r\n        StringBuilder ans = new StringBuilder();//Using String Builder to append the string\r\n        key = key.replaceAll(\" \", \"\");\r\n        //Removing the spaces\r\n        HashMap<Character,Character> letters = new HashMap<>();\r\n        //Mapping the key into a hashmap.\r\n        char original = 'a';\r\n        for (int i = 0; i < key.length() ; i++) {\r\n            if (!letters.containsKey(key.charAt(i))){\r\n                letters.put(key.charAt(i),original++);\r\n            }\r\n        }\r\n        //After the first pass all the letters of the key will be mapped with their respective original letters.\r\n        for (int i = 0; i < message.length(); i++) {\r\n            if (letters.containsKey(message.charAt(i))){\r\n                //Now replacing the letters of the message with appropriate letter according to the key\r\n                ans.append(letters.get(message.charAt(i)));\r\n            }else{\r\n                ans.append(message.charAt(i));\r\n                //This is for characters other than the letters in the key example a space \" \"\r\n                //They will not be replaced by any letters hence original letter is appended into the StringBuilder\r\n            }\r\n        }\r\n        return ans.toString();\r\n    }\r\n}",
    "javascript": "// Runtime: 49 ms (Top 97.08%) | Memory: 44.30 MB (Top 78.72%)\r\n\r\nvar decodeMessage = function(key, message) {\r\n  let result = ''\r\n  key = Array.from(new Set(key.split(' ').join('')))\r\n  const hash = new Map()\r\n  const alpha = 'abcdefghijklmnopqrstuvwxyz'\r\n  \r\n  for (let i = 0; i < alpha.length; i++) {\r\n    hash.set(key[i], alpha[i])\r\n  }\r\n\r\n  for (let chr of message) {\r\n    result += hash.get(chr) || ' '\r\n  }\r\n    \r\n  return result\r\n};"
  }
}
