export default {
  "id": 205,
  "name": "Isomorphic Strings",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/isomorphic-strings",
  "relativeDir": "I/Isomorphic Strings",
  "slug": "0205-isomorphic-strings",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 23,
    "java": 18,
    "python": 20,
    "javascript": 26
  },
  "languages": {
    "cpp": "// Runtime: 4 ms (Top 91.36%) | Memory: 7.1 MB (Top 46.74%)\r\nclass Solution {\r\npublic:\r\n    bool isIsomorphic(string s, string t) {\r\n        if(s.size()!=t.size()) return false;\r\n        unordered_map<char,char>mp;\r\n        for(int i=0;i<s.size();i++){\r\n            if(mp.find(s[i])==mp.end()){\r\n                for(auto it:mp){\r\n                    if(it.second==t[i])return false;\r\n                }\r\n                mp[s[i]]=t[i];\r\n            }\r\n            else{\r\n                if(mp[s[i]]!=t[i]) return false;\r\n\r\n            }\r\n\r\n        }\r\n        return true;\r\n\r\n    }\r\n};",
    "python": "class Solution:\r\n    def isIsomorphic(self, s: str, t: str) -> bool:\r\n        dict1={}\r\n        m=\"\"\r\n\t\t#creating a dictionary by mapping each element from string S to string T\r\n        for i,j in zip(s,t):\r\n\t\t# this for the cases like \"badc\" and \"baba\" so we dont want two keys mapping to same value hence we can reject directly\r\n            if j in dict1.values() and i not in dict1.keys():\r\n                return False\r\n            dict1[i]=j          \r\n        \r\n\t\t#now take each letter from string s and using dictionary values replace it with that specific character\r\n        for k in s:\r\n            m=m+dict1[k]\r\n\t\t\t\r\n\t\t#now if newly formed string m == T is same then the strings are Isomorphic\r\n        if(m==t):\r\n            return True\r\n        else:\r\n            return False",
    "java": "class Solution {\r\n    public boolean isIsomorphic(String s, String t) {\r\n        \r\n        ArrayList<Integer>list1 = new ArrayList<>();\r\n        ArrayList<Integer>list2 = new ArrayList<>();\r\n        for(int i=0;i<s.length();i++){\r\n            list1.add(s.lastIndexOf(s.charAt(i)));\r\n            list2.add(t.lastIndexOf(t.charAt(i)));\r\n        }\r\n        \r\n        if(list1.equals(list2)){\r\n            return true;\r\n        }\r\n        else{\r\n            return false;\r\n        }\r\n    }\r\n}",
    "javascript": "// Runtime: 138 ms (Top 25.43%) | Memory: 42.6 MB (Top 72.74%)\r\n/**\r\n * @param {string} s\r\n * @param {string} t\r\n * @return {boolean}\r\n */\r\nvar isIsomorphic = function(s, t) {\r\n    const obj = {};\r\n    const setValues = new Set();\r\n    let isIso = true;\r\n\r\n    for(var indexI=0; indexI<s.length;indexI++) {\r\n       if(obj[s[indexI]] || setValues.has(t[indexI])) {\r\n            if (obj[s[indexI]] === t[indexI]) continue;\r\n\r\n            isIso= false;\r\n            break;\r\n       }\r\n       else {\r\n           obj[s[indexI]] = t[indexI];\r\n        setValues.add(t[indexI]);\r\n       }\r\n    }\r\n\r\n    return isIso;\r\n};"
  }
}
