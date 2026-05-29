export default {
  "id": 890,
  "name": "Find and Replace Pattern",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-and-replace-pattern",
  "relativeDir": "F/Find and Replace Pattern",
  "slug": "0890-find-and-replace-pattern",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 57,
    "java": 24,
    "python": 27,
    "javascript": 22
  },
  "languages": {
    "cpp": "\t\t\t//😉If you Like the repository don't foget to star & fork the repository😉\r\nclass Solution {\r\npublic:\r\n    \r\n    vector<int> found_Pattern(string pattern)\r\n    {\r\n\t   // if string is empty return empty vector.\r\n        if(pattern.size() == 0)\r\n            return {};\r\n        \r\n        vector<int> v;\r\n\t\t\r\n\t\t// ind variable for keeping track of unique characters\r\n        int ind = 0;\r\n\t\t\r\n        unordered_map<char,int> mp;\r\n        for(int i = 0; i<pattern.size(); ++i)\r\n        {\r\n\t\t\t// if character not present in map, insert the char with an index,\r\n\t\t\t// increment index because for next unique character the index should be differnt.\r\n           if(mp.find(pattern[i]) == mp.end())\r\n           {\r\n               mp.insert({pattern[i],ind++});\r\n\t\t\t   // also  push the index to v(numeric  pattern vector)\r\n\t\t\t   // mp[pattern[i]] gives the key to that character, here key is ind(which we are giving to every unique character)\r\n               v.push_back(mp[pattern[i]]);\r\n           }\r\n            else\r\n            {\r\n\t\t\t\t// if char is already in map than push index mapped to that character into the vector\r\n                v.push_back(mp[pattern[i]]);\r\n            }\r\n        }\r\n\t\t// return numeric pattern\r\n        return v;\r\n    }\r\n    vector<string> findAndReplacePattern(vector<string>& words, string pattern) {\r\n       \r\n\t\t// store numeric patten of Pattern string in v\r\n        vector<int> v = found_Pattern(pattern);\r\n        \r\n        int n = words.size();\r\n        vector<string> ans;\r\n        \r\n\t\t// iterating and comparing pattern of each word with v(numeric pattern of Pattern)\r\n        for(int i = 0; i<n; ++i)\r\n        {\r\n            vector<int> pattern_word = found_Pattern(words[i]);\r\n            \r\n\t\t\t// if matched add words[i] to answer vector\r\n            if(v == pattern_word)\r\n                ans.push_back(words[i]);\r\n        }\r\n        \r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 47 ms (Top 36.0%) | Memory: 16.40 MB (Top 44.2%)\r\n\r\nclass Solution:\r\n    def findAndReplacePattern(self, words: List[str], pattern: str) -> List[str]:\r\n        d={}\r\n        for i,v in enumerate(pattern):\r\n            if v in d:\r\n                d[v].append(i)\r\n            else:\r\n                d|={v:[i]}\r\n        #DICTIONARY CONTAINING LETTERS AND THEIR INDICES\r\n        ans=[]\r\n        for i in words:\r\n            e={}\r\n            for j,v in enumerate(i):\r\n                if v in e:\r\n                    e[v].append(j)\r\n                else:\r\n                    e|={v:[j]}\r\n        #DICTIONARY CONTAINING LETTERS OF INDICES OF CURRENT WORD\r\n            for u,v in zip(d.values(),e.values()):\r\n                #COMPARING EACH VALUE\r\n                if u!=v:\r\n                    break\r\n            #IF SUCCESSFUL APPEND TO ANS\r\n            else:ans.append(i)\r\n        return ans",
    "java": "class Solution {\r\n    public List<String> findAndReplacePattern(String[] words, String pattern) {\r\n        List<String> result=new ArrayList<>();\r\n        for(String word:words) {\r\n            Map<Character,Character> map=new HashMap<>();\r\n            Set<Character> set=new HashSet<>();\r\n            int i=0;\r\n            for(;i<word.length();i++) {\r\n                char ch=pattern.charAt(i);\r\n                if(map.get(ch)==null) {\r\n                    if(set.contains(word.charAt(i))) break;\r\n                   map.put(ch, word.charAt(i));\r\n                    set.add(word.charAt(i));\r\n                }\r\n                else {\r\n                    char mc=map.get(ch);\r\n                    if(mc!=word.charAt(i)) break;\r\n                }\r\n            }\r\n            if(i==pattern.length()) result.add(word);\r\n        }\r\n        return result;\r\n    }\r\n}",
    "javascript": "// Runtime: 41 ms (Top 98.6%) | Memory: 42.10 MB (Top 94.41%)\r\n\r\nvar findAndReplacePattern = function(words, pattern) {\r\n    let ans = [], codex = new Map()\r\n    const translate = char => {\r\n        if (!codex.has(char))\r\n            codex.set(char, String.fromCharCode(97 + codex.size))\r\n        return codex.get(char)\r\n    }\r\n    const compare = word => {\r\n        codex.clear()\r\n        for (let i = 0; i < word.length; i++)\r\n            if (translate(word[i]) !== cipher[i])\r\n                return\r\n        ans.push(word)\r\n    }\r\n    let cipher = new Array(pattern.length)\r\n    for (let i = 0; i < pattern.length; i++)\r\n        cipher[i] = translate(pattern.charAt(i))\r\n    words.forEach(compare)\r\n    return ans\r\n};"
  }
}
