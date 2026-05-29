export default {
  "id": 1544,
  "name": "Make The String Great",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/make-the-string-great",
  "relativeDir": "M/Make The String Great",
  "slug": "1544-make-the-string-great",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 33,
    "java": 17,
    "python": 11,
    "javascript": 25
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    string makeGood(string s) {\r\n        \tstack<char>st;\r\n\tst.push(s[0]);\r\n\tstring ans=\"\";\r\n\r\n\tfor(int i=1;i<s.size();++i){\r\n\t\tif(!st.empty() and (st.top()==s[i]+32 or st.top()==s[i]-32)){\r\n\t\t\tcout<<\"top :\"<<st.top()<<endl;\r\n\t\t\tst.pop();\r\n\t\t}\r\n\r\n\t\telse {\r\n\r\n\t\t\tst.push(s[i]);\r\n\t\t}\r\n\t}\r\n\r\n\t\r\n\t\twhile(!st.empty()){\r\n\t\t// cout<<st.top()<<\"\";\r\n\t\tans+=st.top();\r\n\t\tst.pop();\r\n\r\n\t\t}\r\n\t\t\treverse(ans.begin(),ans.end());\r\n\t\r\n\t\treturn ans;\r\n\t\r\n\t\r\n    }\r\n};",
    "python": "# Runtime: 76 ms (Top 13.82%) | Memory: 13.8 MB (Top 62.06%)\r\nclass Solution:\r\n    def makeGood(self, s: str) -> str:\r\n        while True:\r\n            for i in range(len(s)-1):\r\n                if s[i].lower() == s[i+1].lower() and (s[i].islower() and s[i+1].isupper() or s[i].isupper() and s[i+1].islower()):\r\n                    s = s[:i]+s[i+2:]\r\n                    break\r\n            else:\r\n                break\r\n        return s",
    "java": "class Solution {\r\npublic String makeGood(String s) {\r\n     char[] res = s.toCharArray();\r\n    int i = 0;\r\n    for( char n: s.toCharArray())\r\n    {\r\n        res[i] = n;\r\n        \r\n        if(i>0 && Math.abs((int) res[i-1]- (int) res[i])==32)\r\n        {\r\n            i-=2;\r\n        }\r\n        i++;\r\n    }\r\n    return new String(res, 0, i);\r\n}\r\n}",
    "javascript": "var makeGood = function(s) {\r\n    const sArr = []\r\n    for(let i = 0; i < s.length; i++) {\r\n        sArr.push(s[i])\r\n    }\r\n    const popper = function() {\r\n        let counter = 0\r\n                for(let i = 0; i < sArr.length; i++) {\r\n            if(sArr[i] !== sArr[i + 1]) {\r\n                if(sArr[i].toUpperCase() === sArr[i + 1] || sArr[i].toLowerCase() === sArr[i + 1]) {\r\n                    sArr.splice(i,2)\r\n                    counter++\r\n                }\r\n            }\r\n        }\r\n        if(counter > 0) {\r\n            popper()\r\n        }\r\n    }\r\n    popper()\r\n  \r\n    return sArr.join('');\r\n};\r\n\r\nconvert string to array to allow access to splice method. iterate over array checking for eqality between i and i +1  in the array. if equal, do nothing. if not equal convert to lower/uppercase and again check for equality. if equal splice those two from the array. counter checks if anything has been removed, if it has it iterates over the array again"
  }
}
