export default {
  "id": 831,
  "name": "Masking Personal Information",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/masking-personal-information",
  "relativeDir": "M/Masking Personal Information",
  "slug": "0831-masking-personal-information",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 25,
    "java": 49,
    "python": 53,
    "javascript": 30
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n  string email(string &s, int id){\r\n    string t = string(1, s[0] | ' ') + \"*****\" + string(1, s[id-1] | ' ');\r\n  \r\n    for(int i = id + 1; i != s.size(); i++) \r\n      if(s[i] != '.') s[i] |= ' ';\r\n    \r\n    return t + s.substr(id, s.size());\r\n  }\r\n  \r\n  string phone(string &s){\r\n    string table[] = { \"\" , \"+*-\", \"+**-\", \"+***-\" }, t;\r\n    \r\n    for(auto &ch: s)\r\n      if(ch >= '0' && ch <= '9') t.push_back(ch);\r\n   \r\n    return table[t.size() - 10] + \"***-***-\" + t.substr(t.size() - 4, 4);\r\n  }\r\n  \r\n  string maskPII(string s) {\r\n    int id = s.find('@'); \r\n    return id == -1 ? phone(s) : email(s, id);\r\n  }\r\n};",
    "python": "class Solution:\r\n    def maskPII(self, s: str) -> str:\r\n        res=''\r\n        if '@' in s:\r\n            \r\n            l=s.split('@')\r\n            \r\n            a=l[0]\r\n            b=l[1]\r\n            \r\n            c=b.split('.')\r\n            \r\n            \r\n            res=a[0].lower()+'*'*5+a[-1].lower()+'@'+c[0].lower()+'.'+c[1].lower()\r\n            return res\r\n        else:\r\n            l=0\r\n            res=''\r\n            flag=False\r\n            f=False\r\n            c=0\r\n            for i in range(len(s)-1,-1,-1):\r\n                if s[i]==\"(\" or s[i]==')' or s[i]=='-' or s[i]=='+' or s[i]==' ':\r\n                    continue\r\n                  \r\n                if f==True:\r\n                    c+=1\r\n                    continue\r\n                \r\n                if flag==False:\r\n                    res=s[i]+res\r\n                else:\r\n                    res='*'+res\r\n                    \r\n                \r\n                \r\n                if l==3 or l==6:\r\n                    if l==3:\r\n                        flag=True\r\n                    res='-'+res\r\n                l+=1\r\n                \r\n                if len(res)==12:\r\n                    f=True\r\n            if c==1:\r\n                res='+*-'+res\r\n            elif c==2:\r\n                res=\"+**-\"+res\r\n            elif c==3:\r\n                res=\"+***-\"+res\r\n                    \r\n           \r\n            return res",
    "java": "// Runtime: 1 ms (Top 93.55%) | Memory: 42.3 MB (Top 50.00%)\r\nclass Solution {\r\n    public String maskPII(String s) {\r\n        StringBuilder sb = new StringBuilder();\r\n                 //email handeling\r\n        if((s.charAt(0) >= 97 && s.charAt(0) <= 122) || (s.charAt(0) >= 65 && s.charAt(0) <= 90)){\r\n\r\n            s = s.toLowerCase();\r\n           int indexofAt = s.indexOf('@');\r\n           String firstName = s.substring(0, indexofAt);\r\n           sb.append(firstName.charAt(0)).append(\"*****\").append(firstName.charAt(firstName.length()-1));\r\n           sb.append(s.substring(indexofAt,s.length()));\r\n        }\r\n        //phone number handeling\r\n        else{\r\n           int digits = 0;\r\n           for(int i = 0 ; i < s.length(); i++){\r\n               if(Character.isDigit(s.charAt(i))){\r\n                   digits++;\r\n               }\r\n           }\r\n           if(digits > 10){\r\n               sb.append('+');\r\n           }\r\n           while(digits > 10){\r\n               sb.append('*');\r\n               digits--;\r\n           }\r\n           if(sb.toString().isEmpty() == false){\r\n               sb.append('-');\r\n           }\r\n           sb.append(\"***\").append('-').append(\"***-\");\r\n           StringBuilder last4 = new StringBuilder();\r\n           int count = 0;\r\n           for(int i = s.length()-1; i >=0; --i){\r\n               if(count == 4){\r\n                   break;\r\n               }\r\n               if(Character.isDigit(s.charAt(i))){\r\n                   last4.append(s.charAt(i));\r\n                   count++;\r\n               }\r\n           }\r\n           sb.append(last4.reverse());\r\n        }\r\n\r\n        return sb.toString();\r\n    }\r\n}",
    "javascript": "// Runtime: 39 ms (Top 100.0%) | Memory: 42.72 MB (Top 5.8%)\r\n\r\nvar maskPII = function(S) {\r\n    if (isEmail(S)) return maskEmail(S);\r\n    return maskPhone(S);\r\n    \r\n    function isEmail(str) {\r\n       return /^[A-Za-z]{2,}@[A-Za-z]{2,}.[A-Za-z]{2,}$/.test(str);\r\n    }\r\n    \r\n    function maskEmail(str) {\r\n        let res = \"\";\r\n        const [local, domain] = str.split(\"@\");\r\n        \r\n        res += local.charAt(0).toLowerCase() + \"*****\" + local.charAt(local.length - 1).toLowerCase();\r\n        return res + \"@\" + domain.toLowerCase(); \r\n    }\r\n    \r\n    function maskPhone(str) {\r\n        const onlyDigits = str.replace(/\\D/g, \"\");\r\n        \r\n        const localNum = \"***-***-\" + onlyDigits.substring(onlyDigits.length - 4);\r\n        \r\n        if (onlyDigits.length === 10) return localNum;\r\n        \r\n        let countryNum = \"+\" + \"*\".repeat(onlyDigits.length - 10) + \"-\";\r\n        \r\n        return countryNum + localNum;\r\n    } \r\n};"
  }
}
