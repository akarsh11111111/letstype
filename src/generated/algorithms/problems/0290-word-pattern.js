export default {
  "id": 290,
  "name": "Word Pattern",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/word-pattern",
  "relativeDir": "W/Word Pattern",
  "slug": "0290-word-pattern",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 45,
    "java": 21,
    "python": 10,
    "javascript": 23
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.00%) | Memory: 6.5 MB (Top 54.74%)\r\n\r\nclass Solution {\r\npublic:\r\n\r\n    unordered_set<string> processed_words;\r\n    string m[26]; // char to string mapping\r\n\r\n    bool crunch_next_word(char c, string word)\r\n    {\r\n        int idx = c-'a';\r\n        if(m[idx].empty() && processed_words.count(word)==0)\r\n        {\r\n            m[idx] = word;\r\n            processed_words.insert(word);\r\n            return true;\r\n        }\r\n        else if(m[idx]==word) return true;\r\n        else return false;\r\n    }\r\n\r\n    bool wordPattern(string pattern, string s)\r\n    {\r\n        int count = 0;\r\n\r\n        int start = 0;\r\n        int end = s.find(' ');\r\n        while (end != -1)\r\n        {\r\n            string word = s.substr(start, end - start);\r\n            char c = pattern[count];\r\n            if(!crunch_next_word(c,word)) return false;\r\n\r\n            start = end + 1;\r\n            end = s.find(' ', start);\r\n            count++;\r\n            if(count == pattern.length()) return false;\r\n        }\r\n        if(count != pattern.length()-1) return false;\r\n        string word = s.substr(start, end - start);\r\n        char c = pattern[count];\r\n        if(!crunch_next_word(c,word)) return false;\r\n        return true;\r\n    }\r\n};",
    "python": "class Solution(object):\r\n    def wordPattern(self, pattern, s):\r\n        \"\"\"\r\n        :type pattern: str\r\n        :type s: str\r\n        :rtype: bool\r\n        \"\"\"\r\n        p, s = list(pattern), list(s.split(\" \"))\r\n\r\n        return len(s) == len(p) and len(set(zip(p, s))) == len(set(s)) == len(set(p))",
    "java": "class Solution {\r\n    public boolean wordPattern(String pattern, String s) {\r\n        String[] arr=s.split(\" \");\r\n         if(pattern.length()!=arr.length) return false;\r\n        Map<Character,String> map=new HashMap<Character,String>();\r\n        \r\n        for(int i=0;i<pattern.length();i++){\r\n            char ch=pattern.charAt(i);\r\n            if(map.containsKey(ch)){\r\n                 if(!map.get(ch).equals(arr[i])){\r\n                    return false;\r\n                }    \r\n            }else if(!(map.containsKey(ch)|| map.containsValue(arr[i]))){\r\n               map.put(ch,arr[i]);\r\n            }else{\r\n                return false;\r\n            }\r\n        }\r\n        return true;\r\n    }\r\n}",
    "javascript": "// Runtime: 63 ms (Top 92.39%) | Memory: 41.7 MB (Top 76.57%)\r\nvar wordPattern = function(pattern, s) {\r\n    let wordArray = s.split(\" \");\r\n    if(wordArray.length !== pattern.length) return false;\r\n\r\n    let hm = {};\r\n    let hs = new Set();\r\n\r\n    for(let index in pattern) {\r\n        let word = wordArray[index];\r\n        let char = pattern[index];\r\n\r\n        if(hm[char] !== undefined) {\r\n            if(hm[char] !== word) return false;\r\n        } else {\r\n            if(hs.has(word)) return false; // Duplicate Occurence of word on first occurrence of a char\r\n            hm[char] = word;\r\n            hs.add(word);\r\n        }\r\n    }\r\n\r\n    return true;\r\n}"
  }
}
