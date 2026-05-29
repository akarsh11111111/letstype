export default {
  "id": 1108,
  "name": "Defanging an IP Address",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/defanging-an-ip-address",
  "relativeDir": "D/Defanging an IP Address",
  "slug": "1108-defanging-an-ip-address",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 17,
    "java": 5,
    "python": 5,
    "javascript": 18
  },
  "languages": {
    "cpp": "// Runtime: 2 ms (Top 45.49%) | Memory: 5.9 MB (Top 68.62%)\r\nclass Solution {\r\npublic:\r\n    string defangIPaddr(string address) {\r\n     string res;\r\n        for(int i=0;i<address.length();i++){\r\n         if(address[i]=='.'){\r\n             res+=\"[.]\";\r\n\r\n         }\r\n        else{\r\n                res+=address[i];\r\n            }\r\n     }\r\n        return res;\r\n    }\r\n};",
    "python": "// Runtime: 46 ms (Top 6.11%) | Memory: 16.10 MB (Top 75.91%)\r\n\r\nclass Solution:\r\n\tdef defangIPaddr(self, address: str) -> str:\r\n\t\treturn address.replace('.', '[.]')",
    "java": "class Solution {\r\n    public String defangIPaddr(String address) {\r\n        return address.replace(\".\",\"[.]\");\r\n    }\r\n}",
    "javascript": "// Runtime: 45 ms (Top 87.3%) | Memory: 41.80 MB (Top 53.19%)\r\n\r\n/**\r\n * @param {string} address\r\n * @return {string}\r\n */\r\nvar defangIPaddr = function(address) {\r\n    var result=\"\";\r\n    \r\n    for(var i=0;i<address.length;i++) {\r\n        if(address[i] === \".\")\r\n            result += \"[.]\";\r\n        else\r\n            result += address[i];\r\n    }\r\n    \r\n    return result;    \r\n};"
  }
}
