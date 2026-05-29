export default {
  "id": 1576,
  "name": "Replace All ?'s to Avoid Consecutive Repeating Characters",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters",
  "relativeDir": "R/Replace All 's to Avoid Consecutive Repeating Characters",
  "slug": "1576-replace-all-s-to-avoid-consecutive-repeating-characters",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 29,
    "java": 31,
    "python": 13,
    "javascript": 13
  },
  "languages": {
    "cpp": "class Solution {\r\n    char update_char(char x, char y){\r\n        char c = 'a';\r\n        while(c==x || c==y){\r\n            c++;\r\n        }\r\n        return c;\r\n    }\r\npublic:\r\n    string modifyString(string s) {\r\n        int l = s.length();\r\n        char c;\r\n        if(s[0] == '?'){\r\n            c = update_char(s[0],s[1]);\r\n            s[0] = c;\r\n        }\r\n        if(s[l-1] == '?'){\r\n            c = update_char(s[l-2],s[l-1]);\r\n            s[l-1] = c;\r\n        }\r\n        for(int i=1; i<l-1; ++i){\r\n            if(s[i] == '?'){\r\n                c = update_char(s[i-1],s[i+1]);\r\n                s[i] = c;\r\n            }\r\n        }\r\n        return s;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def modifyString(self, s: str) -> str:\r\n        s = list(s)\r\n        abc = set(['a','b','c'])\r\n        for i, c in enumerate(s):\r\n            if c == '?':\r\n                neib = set()\r\n                if i != 0:\r\n                    neib.add(s[i-1])\r\n                if i != len(s)-1:\r\n                    neib.add(s[i+1])\r\n                s[i] = (abc-neib).pop()\r\n        return \"\".join(s)",
    "java": "class Solution {\r\n    public String modifyString(String s) {\r\n\r\n        \r\n         if(s.length()==1){\r\n            return String.valueOf('a');\r\n        }\r\n        if(s.length()==0){\r\n            return null;\r\n        }\r\n        \r\n        StringBuilder stringBuilder=new StringBuilder(s);\r\n        for (int i=0;i<stringBuilder.length();i++){\r\n            if(stringBuilder.charAt(i)=='?'){\r\n                for(char j='a';j<='z';j++){\r\n                    if(i!=0&&i!=stringBuilder.length()-1&&j!=stringBuilder.charAt(i-1)&&j!=stringBuilder.charAt(i+1)){\r\n                        stringBuilder.replace(i,i+1, String.valueOf(j));\r\n                    }\r\n                    if(i==0&&j!=stringBuilder.charAt(i+1)){\r\n                        stringBuilder.replace(i,i+1, String.valueOf(j));\r\n                    }\r\n                    if(i==stringBuilder.length()-1&&j!=stringBuilder.charAt(i-1)){\r\n                        stringBuilder.replace(i,i+1,String.valueOf(j));\r\n                    }\r\n                }\r\n\r\n            }\r\n        }\r\n        return stringBuilder.toString();\r\n    }\r\n}",
    "javascript": "var modifyString = function(s) {\r\n    let t=\"\";\r\n    for(let i=0; i<s.length; i++){\r\n        if(s[i]==\"?\"){\r\n            let j=\"a\";\r\n            while(t[i-1]==j || s[i+1]==j){j=String.fromCharCode(j.charCodeAt()+1)};\r\n            t+=j;\r\n        }else{\r\n            t+=s[i];\r\n        }\r\n    }\r\n    return t;\r\n};"
  }
}
