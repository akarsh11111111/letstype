export default {
  "id": 67,
  "name": "Add Binary",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/add-binary",
  "relativeDir": "A/Add Binary",
  "slug": "0067-add-binary",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 23,
    "java": 19,
    "python": 9,
    "javascript": 5
  },
  "languages": {
    "cpp": "// Runtime: 3 ms (Top 78.39%) | Memory: 6.3 MB (Top 85.17%)\r\nclass Solution {\r\npublic:\r\n    string addBinary(string a, string b) {\r\n        string ans;\r\n        int i=a.length()-1,j=b.length()-1;\r\n        int carry=0;\r\n        while(carry||i>=0||j>=0){\r\n            if(i>=0){\r\n                carry+=a[i]-'0';\r\n                i--;\r\n            }\r\n            if(j>=0){\r\n                carry+=b[j]-'0';\r\n                j--;\r\n            }\r\n            ans+=carry%2+'0';\r\n            carry=carry/2;\r\n        }\r\n        reverse(ans.begin(),ans.end());\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution(object):\r\n    def addBinary(self, a, b):\r\n        \"\"\"\r\n        :type a: str\r\n        :type b: str\r\n        :rtype: str\r\n        \"\"\"\r\n\r\n        return str(bin(int(a, base = 2)+int(b, base = 2)))[2:]",
    "java": "// Runtime: 1 ms (Top 100.0%) | Memory: 42.20 MB (Top 42.63%)\r\n\r\nclass Solution {\r\n    public String addBinary(String a, String b) {\r\n        StringBuilder res = new StringBuilder();\r\n        int i = a.length() - 1;\r\n        int j = b.length() - 1;\r\n        int carry = 0;\r\n        while(i >= 0 || j >= 0){\r\n            int sum = carry;\r\n            if(i >= 0) sum += a.charAt(i--) - '0';\r\n            if(j >= 0) sum += b.charAt(j--) - '0';\r\n            carry = sum > 1 ? 1 : 0;\r\n            res.append(sum % 2);\r\n        }\r\n        if(carry != 0) res.append(carry);\r\n        return res.reverse().toString();\r\n    }\r\n}",
    "javascript": "// Runtime: 52 ms (Top 82.96%) | Memory: 41.90 MB (Top 95.02%)\r\n\r\nvar addBinary = function(a, b) {\r\n    return (BigInt(\"0b\"+a) + BigInt(\"0b\"+b)).toString(2);\r\n}"
  }
}
