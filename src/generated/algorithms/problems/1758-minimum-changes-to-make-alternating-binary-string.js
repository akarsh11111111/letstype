export default {
  "id": 1758,
  "name": "Minimum Changes To Make Alternating Binary String",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string",
  "relativeDir": "M/Minimum Changes To Make Alternating Binary String",
  "slug": "1758-minimum-changes-to-make-alternating-binary-string",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 14,
    "java": 21,
    "python": 18,
    "javascript": 27
  },
  "languages": {
    "cpp": "// Runtime: 4 ms (Top 41.14%) | Memory: 7.40 MB (Top 44.57%)\r\n\r\nclass Solution {\r\npublic:\r\n    int minOperations(string s) {\r\n        int n=s.size(), ans=0;\r\n        for(int i=0;i<n;i++)\r\n        {\r\n            if(s[i]-'0' != i%2)\r\n            ans++;\r\n        }\r\n        return min(ans, n-ans);\r\n    }\r\n};",
    "python": "# Runtime: 52 ms (Top 66.2%) | Memory: 16.53 MB (Top 16.1%)\r\n\r\nclass Solution:\r\n    def minOperations(self, s: str) -> int:\r\n        count = 0\r\n        count1 = 0\r\n        for i in range(len(s)):\r\n            if i % 2 == 0:\r\n                if s[i] == '1':\r\n                    count += 1\r\n                if s[i] == '0':\r\n                    count1 += 1\r\n            else:\r\n                if s[i] == '0':\r\n                    count += 1\r\n                if s[i] == '1':\r\n                    count1 += 1\r\n        return min(count, count1)",
    "java": "// Runtime: 4 ms (Top 86.00%) | Memory: 41.7 MB (Top 99.33%)\r\nclass Solution {\r\n    public int minOperations(String s) {\r\n        int count0 = 0; // changes required when the string starts from 0\r\n        int count1 = 0; // changes required when the string starts from 1\r\n\r\n        for(int i = 0; i < s.length(); i++){\r\n\r\n            // string starts with 1 => all chars at even places should be 1 and that at odd places should be 0\r\n            if((i % 2 == 0 && s.charAt(i) == '0') || (i % 2 != 0 && s.charAt(i) == '1'))\r\n                count1++;\r\n\r\n            // string starts with 0 => all chars at even places should be 0 and that at odd places should be 1\r\n            else if((i % 2 == 0 && s.charAt(i) == '1') || (i % 2 != 0 && s.charAt(i) == '0'))\r\n                count0++;\r\n        }\r\n\r\n        // return minimum of the two\r\n        return Math.min(count0, count1);\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {string} s\r\n * @return {number}\r\n */\r\nvar minOperations = function(s) {\r\n    let counter1=0;\r\n    let counter2=0;\r\n    for(let i=0;i<s.length;i++){\r\n        if(i%2===0){\r\n            if(s[i]===\"0\"){\r\n                counter1++;\r\n            }\r\n            if(s[i]===\"1\"){\r\n                counter2++;\r\n            }\r\n        }\r\n        if(i%2===1){\r\n            if(s[i]===\"1\"){\r\n                counter1++;\r\n            }\r\n            if(s[i]===\"0\"){\r\n                counter2++;\r\n            }\r\n        }\r\n    }\r\n    return Math.min(counter1,counter2);\r\n};"
  }
}
