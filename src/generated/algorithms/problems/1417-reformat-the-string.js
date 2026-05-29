export default {
  "id": 1417,
  "name": "Reformat The String",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/reformat-the-string",
  "relativeDir": "R/Reformat The String",
  "slug": "1417-reformat-the-string",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 18,
    "java": 48,
    "python": 29,
    "javascript": 16
  },
  "languages": {
    "cpp": "// Runtime: 7 ms (Top 65.55%) | Memory: 7.5 MB (Top 65.85%)\r\nclass Solution {\r\npublic:\r\n    string reformat(string s) {\r\n        string dg,al;\r\n        for(auto&i:s)isdigit(i)?dg+=i:al+=i;\r\n        if(abs((int)size(dg)-(int)size(al))>1) return \"\";\r\n        int i=0,j=0,k=0;\r\n        string ans(size(s),' ');\r\n        bool cdg=size(dg)>size(al);\r\n        while(k<size(s)){\r\n            if(cdg)ans[k++]=dg[i++];\r\n            else ans[k++]=al[j++];\r\n            cdg=!cdg;\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def reformat(self, s: str) -> str:\r\n        # Store the alphabets and the numerics from the string in a seperat arrays\r\n        alpha = []\r\n        num = []\r\n        # Initiate a res variable to store the resultant string\r\n        res = ''\r\n        \r\n        for i in s:\r\n            if i.isalpha():\r\n                alpha.append(i)\r\n            else:\r\n                num.append(i)\r\n                \r\n        # It's not possible to create a permutation if the absolute difference b/w len(alpha) and len(num) > 1.\r\n        if abs(len(alpha)-len(num)) > 1: return ''\r\n        \r\n        # Use Zip to create list of tuples.\r\n        # For ex:- if alpha = ['a','b'] and num = ['1', '2'] then,\r\n        # zip(alpha, num) = [('a', '1'), ('b', '2')]\r\n        for ch, n in zip(alpha, num):\r\n            res += (ch+n)\r\n            \r\n        if len(alpha) > len(num):\r\n            res += alpha[-1]\r\n        if len(num) > len(alpha):\r\n            res = num[-1] + res\r\n            \r\n        return res",
    "java": "class Solution {\r\n    public String reformat(String s) {\r\n        \r\n        List<Character> ch = new ArrayList<>();\r\n        List<Character> d = new ArrayList<>();\r\n        \r\n        for(char c : s.toCharArray()){\r\n            if(c >= 'a' && c <= 'z')ch.add(c);\r\n            else d.add(c);\r\n        }\r\n        \r\n        if(Math.abs(d.size() - ch.size()) > 1)  return \"\";\r\n        \r\n        StringBuilder str = new StringBuilder();\r\n        \r\n        for(int i = 0; i < s.length(); i++){\r\n            \r\n            if(!ch.isEmpty() || !d.isEmpty()){\r\n                if(ch.size() > d.size())\r\n                    str.append(appender(ch,d));\r\n                else \r\n                    str.append(appender(d,ch));\r\n            }\r\n            else{\r\n                break;\r\n            }\r\n        }\r\n        \r\n        return new String(str);\r\n        \r\n    }\r\n    \r\n    public String appender(List<Character> first,List<Character> second){\r\n        \r\n        StringBuilder str = new StringBuilder();\r\n        \r\n        if(!first.isEmpty()){\r\n            str.append(first.get(0));\r\n            first.remove(0);\r\n        }\r\n        if(!second.isEmpty()){\r\n            str.append(second.get(0));\r\n            second.remove(0);\r\n        }\r\n        \r\n        return new String(str);\r\n    }\r\n}",
    "javascript": "var reformat = function(s) {\r\n    let letter=[], digit=[];\r\n    for(let i=0; i<s.length; i++){\r\n        s[i]>=0 && s[i]<=9? digit.push(s[i]): letter.push(s[i]);\r\n    }\r\n\t// impossible to reformat\r\n    if(Math.abs(letter.length-digit.length)>=2){return \"\"}\r\n    \r\n    let i=0, output=\"\";\r\n    while(i<letter.length && i<digit.length){\r\n        output=output+letter[i]+digit[i]; i++;\r\n    }\r\n    if(i<letter.length){output=output+letter[i]}; // add in the END\r\n    if(i<digit.length){output=digit[i]+output}; // add in the FRONT\r\n    return output;\r\n};"
  }
}
