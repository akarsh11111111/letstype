export default {
  "id": 1694,
  "name": "Reformat Phone Number",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/reformat-phone-number",
  "relativeDir": "R/Reformat Phone Number",
  "slug": "1694-reformat-phone-number",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 55,
    "java": 17,
    "python": 16,
    "javascript": 12
  },
  "languages": {
    "cpp": "// Runtime: 5 ms (Top 21.01%) | Memory: 6.2 MB (Top 47.48%)\r\nclass Solution {\r\npublic:\r\n    string reformatNumber(string number) {\r\n\r\n        string temp; // stores the digits from string number\r\n        string ans; //stores final answer\r\n        int n = number.size();\r\n\r\n        for(auto ch:number)\r\n            if(isdigit(ch)) temp += ch;\r\n\r\n        int len = temp.size();\r\n        int i = 0;\r\n\r\n        while(len>0){\r\n            //check for different values of \"len\"\r\n            if(len > 4){ //if len > 4 -> make grp of 3 digits\r\n                ans += temp.substr(i,i+3);\r\n                temp.erase(i,3);\r\n                len = len-3;\r\n                ans += \"-\";\r\n            }\r\n\r\n            else if(len == 3){ //if len == 3 -> make grp of 3 digits\r\n                ans += temp.substr(i,i+3);\r\n                temp.erase(i,3);\r\n                len = len-3;\r\n                ans += \"-\";\r\n            }\r\n\r\n            else if(len == 2){ //if len == 2 -> make grp of 2 digits\r\n                ans += temp.substr(i,i+2);\r\n                temp.erase(i,2);\r\n                len = len-2;\r\n                ans += \"-\";\r\n            }\r\n\r\n            else if(len == 4){ //if len == 4 -> make 1 grp of 2 digits & reduce the length by 2 units, in the next iteration it will automatically catch (len==2) condition\r\n                ans += temp.substr(i,i+2);\r\n                temp.erase(i,2);\r\n                ans += \"-\";\r\n                // ans += temp.substr(i,i+2); ------(1)\r\n                // temp.erase(i,2); ------(2)\r\n                // ans += \"-\"; ------(3)\r\n                len = len-2; // *len = len-4* can be edited to *len = len-2*------(4)\r\n\r\n            }\r\n\r\n        }\r\n\r\n        ans.pop_back();\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def reformatNumber(self, number: str) -> str:\r\n        s = number.replace(\" \", \"\").replace(\"-\", \"\")\r\n        pieces = list()\r\n        while s:\r\n            if len(s) == 2:\r\n                pieces.append(s)\r\n                break\r\n            elif len(s) == 4:\r\n                pieces.append(s[:2])\r\n                pieces.append(s[2:])\r\n                break\r\n            else:\r\n                pieces.append(s[:3])\r\n                s = s[3:]\r\n        return \"-\".join(pieces)",
    "java": "// Runtime: 10 ms (Top 38.91%) | Memory: 42.8 MB (Top 36.01%)\r\nclass Solution {\r\n    String modifiedNumber=\"\";\r\n    public String reformatNumber(String number) {\r\n        modifiedNumber=number.replace(\" \",\"\");\r\n        modifiedNumber=modifiedNumber.replace(\"-\",\"\");\r\n        int l=modifiedNumber.length();\r\n        if(l<=3){\r\n            return modifiedNumber;\r\n        } else if(l==4){\r\n            return modifiedNumber.substring(0,2)+\"-\"+ modifiedNumber.substring(2,4);\r\n        } else {\r\n            modifiedNumber=modifiedNumber.substring(0,3)+\"-\"+reformatNumber(modifiedNumber.substring(3,l));\r\n        }\r\n        return modifiedNumber;\r\n    }\r\n}",
    "javascript": "// Runtime: 86 ms (Top 60.00%) | Memory: 42.6 MB (Top 25.38%)\r\nvar reformatNumber = function(number) {\r\n    let numArr = number.replace(/-/g,'').replace(/ /g,'').split('')\r\n    let res = ''\r\n    while(numArr.length >= 4){\r\n        numArr.length == 4 ?\r\n            res += numArr.splice(0,2).join('') +'-'+numArr.splice(0,2).join('') :\r\n            res += numArr.splice(0,3).join('') + '-'\r\n    }\r\n    res += numArr.join('')\r\n    return res\r\n};"
  }
}
