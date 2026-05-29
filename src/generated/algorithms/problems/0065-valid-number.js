export default {
  "id": 65,
  "name": "Valid Number",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/valid-number",
  "relativeDir": "V/Valid Number",
  "slug": "0065-valid-number",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 31,
    "java": 17,
    "python": 9,
    "javascript": 18
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.00%) | Memory: 5.8 MB (Top 94.26%)\r\n/*\r\nMax Possible combination of characters in the string has followig parts(stages) :\r\n            +/- number . number e/E +/- number\r\nstages: 0 1 2 3 4 5 6 7\r\n\r\nNow check each characters at there correct stages or not and increament the stage\r\nas per the character found at ith position.\r\n\r\n*/\r\n\r\nclass Solution {\r\npublic:\r\n    bool isNumber(string s){\r\n        char stage = 0;\r\n        for(int i = 0; i<s.size(); ++i){\r\n            if( (s[i] == '+' || s[i] == '-') && (stage == 0 || stage == 5)){ stage++; }\r\n            else if((s[i] == 'e' || s[i] == 'E') && stage > 1 && stage < 5){ stage = 5; }\r\n            else if(s[i] == '.' && stage < 3) {\r\n                //both side of '.' do not have any digit then return false\r\n                if(stage <= 1 && ( i + 1 >= s.size() || !(s[i+1] >= '0' && s[i+1] <= '9')) ) return false;\r\n                stage = 3;\r\n            }else if(s[i] >= '0' && s[i] <= '9'){\r\n                if(!(stage == 2 || stage == 4 || stage == 7) ) stage++;\r\n                if(stage == 1 || stage == 6 ) stage++;\r\n            }else return false;\r\n        }\r\n        if(stage <= 1 || stage == 5 || stage == 6) return false;\r\n        return true;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def isNumber(self, s: str) -> bool:\r\n        if s == \"inf\" or s == \"-inf\" or s == \"+inf\" or s == \"Infinity\" or s == \"-Infinity\" or s == \"+Infinity\":\r\n            return False\r\n        try:\r\n            float(s)\r\n        except (Exception):\r\n            return False\r\n        return True",
    "java": "// Runtime: 8 ms (Top 19.3%) | Memory: 44.65 MB (Top 6.2%)\r\n\r\nclass Solution {\r\n    public boolean isNumber(String s) {\r\n        try{\r\n            int l=s.length();\r\n            if(s.equals(\"Infinity\")||s.equals(\"-Infinity\")||s.equals(\"+Infinity\")||s.charAt(l-1)=='f'||s.charAt(l-1)=='d'||s.charAt(l-1)=='D'||s.charAt(l-1)=='F')\r\n            return false;\r\n            double x=Double.parseDouble(s);\r\n            return true;\r\n        }\r\n        catch(Exception e){\r\n            return false;\r\n        }\r\n        \r\n    }\r\n}",
    "javascript": "// Runtime: 66 ms (Top 66.53%) | Memory: 44.40 MB (Top 36.55%)\r\n\r\nvar isNumber = function(S) {\r\n    let exp = false, sign = false, num = false, dec = false\r\n    for (let c of S)\r\n        if (c >= '0' && c <= '9') num = true     \r\n        else if (c === 'e' || c === 'E')\r\n            if (exp || !num) return false\r\n            else exp = true, sign = false, num = false, dec = false\r\n        else if (c === '+' || c === '-')\r\n            if (sign || num || dec) return false\r\n            else sign = true\r\n        else if (c === '.')\r\n            if (dec || exp) return false\r\n            else dec = true\r\n        else return false\r\n    return num\r\n};"
  }
}
