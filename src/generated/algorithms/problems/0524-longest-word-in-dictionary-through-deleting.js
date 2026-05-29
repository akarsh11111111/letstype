export default {
  "id": 524,
  "name": "Longest Word in Dictionary through Deleting",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/longest-word-in-dictionary-through-deleting",
  "relativeDir": "L/Longest Word in Dictionary through Deleting",
  "slug": "0524-longest-word-in-dictionary-through-deleting",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 30,
    "java": 75,
    "python": 12,
    "javascript": 28
  },
  "languages": {
    "cpp": "class Solution {\r\nprivate:\r\n    //checks whether the string word is a subsequence of s\r\n    bool isSubSeq(string &s,string &word){\r\n        int start=0;\r\n        for(int i=0;i<s.size();i++){\r\n            if(s[i]==word[start]){\r\n                //every character of word occurs in s, therefore we return true\r\n                if(++start==word.size()){\r\n                    return true;\r\n                }\r\n            }\r\n        }\r\n        return false;\r\n    }\r\npublic:\r\n    string findLongestWord(string s, vector<string>& dictionary) {\r\n        string ans=\"\";\r\n        for(string word:dictionary){\r\n            if(word.size()>=ans.size() and isSubSeq(s,word)){\r\n                if(word.size()>ans.size()){\r\n                    ans=word;\r\n                } else if(word.size()==ans.size() and word<ans){\r\n                    ans=word;\r\n                }\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def findLongestWord(self, s: str, dictionary: list[str]) -> str:\r\n        solution = \"\"\r\n        for word in dictionary:\r\n            j = 0\r\n            for i in range(len(s)):\r\n                if s[i] == word[j]:\r\n                    j+=1\r\n                if j == len(word):\r\n                    solution = word if len(word) > len(solution) or len(word) == len(solution) and word < solution  else solution\r\n                    break\r\n        return solution",
    "java": "class Solution {\r\n    public String findLongestWord(String s, List<String> dictionary) {\r\n        \r\n        int[] fre=new int[26];\r\n       \r\n        \r\n        String ans=\"\";\r\n        int flag=0;\r\n        int[] fff=new int[26];\r\n         char[] ch = s.toCharArray();\r\n        for(char c : ch)\r\n            fre[c-'a']+=1;\r\n        \r\n        for(String s1 : dictionary)\r\n        { \r\n             fff=fre.clone();\r\n             int[] fre1=new int[26];\r\n             char[] ch1 = s1.toCharArray();\r\n            for(char c : ch1)\r\n            {\r\n               \r\n                fre1[c-'a']+=1;\r\n            }\r\n            \r\n            for(char c : ch1)\r\n            {\r\n                if(fre1[c-'a'] <= fff[c-'a'])\r\n                { flag=0;\r\n                  fff[c-'a']-=1; \r\n                 fre1[c-'a']-=1;\r\n                }\r\n                else\r\n                {flag=1;\r\n                  break;}                \r\n            }\r\n            if(flag==0)\r\n            {\r\n                if(ans != \"\")\r\n                {\r\n                  if(ans.length() <s1.length())\r\n                  {\r\n                      \r\n                      ans=s1;\r\n                  }else\r\n                  {\r\n                      if(ans.length() ==s1.length())\r\n                      {\r\n                          int f=0;\r\n                         for(int m=0;m<ans.length();m++)\r\n                         {\r\n                             if(ans.charAt(m)>s1.charAt(m))\r\n                             {\r\n                                 f=1;\r\n                                 break;\r\n                             }\r\n                                 \r\n                         }\r\n                          if(f==1)\r\n                              ans=s1;\r\n                      }\r\n                  }\r\n                }\r\n                else\r\n                    ans =s1;\r\n            }\r\n            else\r\n            {\r\n                flag=0;\r\n            }\r\n        }\r\n        \r\n        return ans;\r\n        \r\n    }\r\n}",
    "javascript": "/**\r\n * @param {string} s\r\n * @param {string[]} dictionary\r\n * @return {string}\r\n */\r\nvar findLongestWord = function(s, dictionary) {\r\n    const getLen = (s1, s2) => {\r\n        let i = 0, j = 0;\r\n        while(i < s1.length && j < s2.length) {\r\n            if(s1[i] == s2[j]) { i++, j++; }\r\n            else i++;\r\n        }\r\n        if(j != s2.length) return 0;\r\n        return s2.length;\r\n    }\r\n    let ans = '', ml = 0;\r\n    for(let word of dictionary) {\r\n        const len = getLen(s, word);\r\n        if(len > ml) {\r\n            ans = word;\r\n            ml = len;\r\n        }\r\n        else if(len == ml && ans > word) {\r\n            ans = word;\r\n        }\r\n    }\r\n    return ans;\r\n};"
  }
}
