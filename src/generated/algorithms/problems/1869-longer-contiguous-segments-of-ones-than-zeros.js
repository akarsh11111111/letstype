export default {
  "id": 1869,
  "name": "Longer Contiguous Segments of Ones than Zeros",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros",
  "relativeDir": "L/Longer Contiguous Segments of Ones than Zeros",
  "slug": "1869-longer-contiguous-segments-of-ones-than-zeros",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 36,
    "java": 25,
    "python": 8,
    "javascript": 23
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool checkZeroOnes(string s) {\r\n        int count1=0;\r\n        int count2=0;\r\n       int max1=0;int max2=0;\r\n        for(int i=0;i<s.size();i++)\r\n        {\r\n            if(s[i]=='1')\r\n            {\r\n                count1++;\r\n                if(s[i+1]!=s[i])\r\n                {\r\n                    max1=max(count1,max1);\r\n                    count1=0;\r\n                }\r\n            }\r\n            \r\n            if(s[i]=='0')\r\n            {\r\n                count2++;\r\n                if(s[i+1]!=s[i])\r\n                {\r\n                    max2=max(count2,max2);\r\n                    count2=0;\r\n                }\r\n            }\r\n        }\r\n        \r\n        if(max1>max2)\r\n            return true;\r\n        return false;\r\n        \r\n        \r\n    }\r\n};",
    "python": "# Runtime: 47 ms (Top 65.12%) | Memory: 13.9 MB (Top 66.60%)\r\nclass Solution:\r\n    def checkZeroOnes(self, s: str) -> bool:\r\n        s1 = s.split('0')\r\n        s0 = s.split('1')\r\n        r1 = max([len(i) for i in s1])\r\n        r0 = max([len(i) for i in s0])\r\n        return r1>r0",
    "java": "// Runtime: 1 ms (Top 92.84%) | Memory: 41.5 MB (Top 80.00%)\r\n\r\nclass Solution {\r\n    public boolean checkZeroOnes(String s) {\r\n        int length1 = 0;\r\n        int length0 = 0;\r\n\r\n        int i = 0;\r\n        while(i < s.length()){\r\n            int temp = 0;\r\n            while(i < s.length() && s.charAt(i) == '1'){ //counting 1s\r\n                temp++;\r\n                i++;\r\n            }\r\n            length1 = Math.max(temp,length1);\r\n            temp = 0;\r\n            while(i < s.length() && s.charAt(i) == '0'){ // counting 0s\r\n                temp++;\r\n                i++;\r\n            }\r\n            length0 = Math.max(temp,length0);\r\n        }\r\n       return length1 > length0;\r\n    }\r\n}",
    "javascript": "// Runtime: 63 ms (Top 99.07%) | Memory: 42.3 MB (Top 75.00%)\r\nvar checkZeroOnes = function(s) {\r\n    let longest1 = 0;\r\n    let longest0 = 0;\r\n\r\n    let count1 = 0;\r\n    let count0 = 0;\r\n\r\n    for (let i = 0; i < s.length; i++) {\r\n        const bit = s.charAt(i);\r\n\r\n        if (bit === \"1\") count1++;\r\n        else count1 = 0;\r\n\r\n        if (bit === \"0\") count0++;\r\n        else count0 = 0;\r\n\r\n        longest1 = Math.max(longest1, count1);\r\n        longest0 = Math.max(longest0, count0);\r\n    }\r\n\r\n    return longest1 > longest0;\r\n};"
  }
}
