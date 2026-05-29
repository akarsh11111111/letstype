export default {
  "id": 1957,
  "name": "Delete Characters to Make Fancy String",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/delete-characters-to-make-fancy-string",
  "relativeDir": "D/Delete Characters to Make Fancy String",
  "slug": "1957-delete-characters-to-make-fancy-string",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 18,
    "java": 19,
    "python": 11,
    "javascript": 20
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    string makeFancyString(string s) {\r\n        int cnt=1;\r\n        string ans=\"\";    ans.push_back(s[0]);\r\n\t\t\r\n        for(int i=1;i<s.length();++i) {\r\n            cnt=s[i]==s[i-1]? cnt+1:1;\r\n\r\n            if(cnt<3) {\r\n                ans.push_back(s[i]);\r\n            }\r\n        }\r\n        return ans;\r\n\r\n    }\r\n};\r\n};",
    "python": "class Solution:\r\n    def makeFancyString(self, s: str) -> str:\r\n        if len(s) < 3:\r\n            return s\r\n        ans = ''\r\n        ans += s[0]\r\n        ans += s[1]\r\n        for i in range(2,len(s)):\r\n            if s[i] != ans[-1] or s[i] != ans[-2]:\r\n                ans += s[i]\r\n        return ans",
    "java": "class Solution {\r\n    public String makeFancyString(String s) {\r\n        char prev = s.charAt (0);\r\n        int freq = 1;\r\n        StringBuilder res = new StringBuilder ();\r\n        res.append (s.charAt (0));\r\n        for (int i = 1; i < s.length (); i++) {\r\n            if (s.charAt (i) == prev)\r\n                freq++;\r\n            else {\r\n                prev = s.charAt (i);\r\n                freq = 1;\r\n            }\r\n            if (freq < 3)\r\n                res.append (s.charAt (i));\r\n        }\r\n        return res.toString ();\r\n    }\r\n}",
    "javascript": "var makeFancyString = function(s) {\r\n    let res = '';\r\n    let currCount = 0;\r\n    \r\n    for (let i = 0; i < s.length; i++) {\r\n        if (currCount === 2 && s[i] === s[i - 1]) continue;\r\n        \r\n        else if (s[i] === s[i - 1]) {\r\n            currCount++;\r\n            res += s[i];\r\n        }\r\n        \r\n        else {\r\n            currCount = 1;\r\n            res += s[i]\r\n        }\r\n    }\r\n    \r\n    return res;\r\n};"
  }
}
