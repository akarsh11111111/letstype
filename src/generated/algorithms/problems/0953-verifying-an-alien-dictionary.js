export default {
  "id": 953,
  "name": "Verifying an Alien Dictionary",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/verifying-an-alien-dictionary",
  "relativeDir": "V/Verifying an Alien Dictionary",
  "slug": "0953-verifying-an-alien-dictionary",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 22,
    "java": 33,
    "python": 15,
    "javascript": 22
  },
  "languages": {
    "cpp": "// Runtime: 7 ms (Top 68.11%) | Memory: 9.5 MB (Top 56.46%)\r\nclass Solution {\r\npublic:\r\n    bool isAlienSorted(vector<string>& words, string order)\r\n    {\r\n        unordered_map<char,char> m;\r\n        for(int i=0;i<26;i++)\r\n        {\r\n            m[order[i]]=i+'a';\r\n        }\r\n        for(auto &w:words)\r\n        {\r\n            for(auto &ch:w)\r\n            {\r\n                ch=m[ch];\r\n            }\r\n        }\r\n        return is_sorted(words.begin(),words.end());// check sorting\r\n\r\n    }\r\n};\r\n//if you like the solution plz upvote;",
    "python": "# Runtime: 74 ms (Top 17.14%) | Memory: 13.7 MB (Top 99.39%)\r\nclass Solution:\r\n    def isAlienSorted(self, words: List[str], order: str) -> bool:\r\n        order_index = {key:index for index, key in enumerate(order)}\r\n\r\n        for i in range(len(words)-1):\r\n           w1,w2 = words[i] , words[i + 1]\r\n           for j in range(len(w1)):\r\n                if j == len(w2):\r\n                    return False\r\n                if w1[j] != w2[j]:\r\n                    if order_index.get(w2[j]) < order_index.get(w1[j]):\r\n                        return False\r\n                    break\r\n        return True",
    "java": "// Runtime: 1 ms (Top 80.43%) | Memory: 42.9 MB (Top 28.86%)\r\nclass Solution {\r\n    public boolean isAlienSorted(String[] words, String order) {\r\n        int val=1;\r\n        int[] alp = new int[26];\r\n\r\n        for(int i=0;i<order.length();i++) {\r\n            alp[order.charAt(i)-'a']=val;\r\n            val++;\r\n        }\r\n        int flag=0; // if second string is shorter than first then this will be used to check if second is a subset of first starting from the beginning\r\n\r\n        for(int i=0;i<words.length-1;i++) {\r\n            flag=0;\r\n            for(int j=0; j<words[i].length() && j<words[i+1].length(); j++) {\r\n                if(words[i].charAt(j) == words[i+1].charAt(j)) {\r\n                    continue;\r\n                }\r\n                if(alp[words[i].charAt(j)-'a'] > alp[words[i+1].charAt(j)-'a']) {\r\n                    return false;\r\n                } else if(alp[words[i].charAt(j)-'a'] < alp[words[i+1].charAt(j)-'a']) {\r\n                    flag=1;\r\n                    break;\r\n                }\r\n            }\r\n            if(flag==0 && words[i].length()>words[i+1].length()) {\r\n                return false; // if second word is sub string of first word starting from the beginning, return false.\r\n            }\r\n        }\r\n\r\n        return true;\r\n    }\r\n}",
    "javascript": "// Runtime: 74 ms (Top 79.90%) | Memory: 44.6 MB (Top 9.41%)\r\n/**\r\n * @param {string[]} words\r\n * @param {string} order\r\n * @return {boolean}\r\n */\r\nvar isAlienSorted = function(words, order) {\r\n    let map = {}\r\n    for(let i = 0; i < 26; i++){\r\n        map[order[i]] = i\r\n    }\r\n    for(let i = 0; i < words.length - 1; i++){\r\n        for(let j = 0; j < words[i].length; j++){\r\n            if(j === words[i+1].length) return false\r\n            if(words[i][j] !== words[i+1][j]){\r\n                if(map[words[i+1][j]] < map[words[i][j]]) return false\r\n                break\r\n            }\r\n        }\r\n    }\r\n    return true\r\n};"
  }
}
