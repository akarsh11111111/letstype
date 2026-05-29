export default {
  "id": 13,
  "name": "Roman to Integer",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/roman-to-integer",
  "relativeDir": "R/Roman to Integer",
  "slug": "0013-roman-to-integer",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 20,
    "java": 36,
    "python": 23,
    "javascript": 29
  },
  "languages": {
    "cpp": "// Runtime: 16 ms (Top 39.9%) | Memory: 7.79 MB (Top 70.0%)\r\n\r\nclass Solution {\r\npublic:\r\n    int romanToInt(string s){\r\n        unordered_map<char, int> T = { { 'I' , 1 },\r\n        { 'V' , 5 },\r\n        { 'X' , 10 },\r\n        { 'L' , 50 },\r\n        { 'C' , 100 },\r\n        { 'D' , 500 },\r\n        { 'M' , 1000 } };\r\n        int sum = T[s.back()];\r\n        for (int i = s.length() - 2; i >= 0; --i){\r\n            if (T[s[i]] < T[s[i + 1]]) sum -= T[s[i]];\r\n            else sum += T[s[i]];\r\n        }\r\n        return sum;\r\n    }\r\n};",
    "python": "# Runtime: 89 ms (Top 30.66%) | Memory: 13.8 MB (Top 76.49%)\r\nclass Solution:\r\n    def romanToInt(self, s: str) -> int:\r\n        roman = {\r\n            \"I\": 1,\r\n            \"V\": 5,\r\n            \"X\": 10,\r\n            \"L\": 50,\r\n            \"C\": 100,\r\n            \"D\": 500,\r\n            \"M\": 1000\r\n        }\r\n\r\n        sum = 0;\r\n        for i in range(0, len(s) - 1):\r\n            curr = roman[s[i]]\r\n            nxt = roman[s[i + 1]]\r\n            if curr < nxt:\r\n                sum -= curr\r\n            else:\r\n                sum += curr\r\n        sum += roman[s[-1]]\r\n        return sum",
    "java": "// Runtime: 8 ms (Top 63.45%) | Memory: 44.6 MB (Top 83.79%)\r\nclass Solution {\r\n    public int romanToInt(String s) {\r\n        int res=0;\r\n        // Let s = \"IV\" after traversing string res will be 6\r\n        // Let s= \"IX\" after traversing string res will be 11\r\n        for(int i=0;i<s.length();i++){\r\n            switch(s.charAt(i)){\r\n                case 'I': res=res+1;\r\n                    break;\r\n                case 'V': res=res+5;\r\n                    break;\r\n                case 'X': res+=10;\r\n                    break;\r\n                case 'L': res+=50;\r\n                    break;\r\n                case 'C': res+=100;\r\n                    break;\r\n                case 'D': res+=500;\r\n                    break;\r\n                case 'M': res+=1000;\r\n                    break;\r\n            }\r\n        }\r\n        // Since s= \"IV\" it satisfies first condition and 2 is subtracted from res. res=4\r\n        // Since s= \"IX\" it satisfies first condition and 2 is subtracted from res. res=9\r\n        if(s.contains(\"IV\")||s.contains(\"IX\"))\r\n            res=res-2;\r\n        if(s.contains(\"XL\")||s.contains(\"XC\"))\r\n            res=res-20;\r\n        if(s.contains(\"CD\")||s.contains(\"CM\"))\r\n            res=res-200;\r\n\r\n        return res;\r\n    }\r\n}",
    "javascript": "// Runtime: 115 ms (Top 52.9%) | Memory: 45.97 MB (Top 98.2%)\r\n\r\nvar romanToInt = function(s) {\r\n      const sym = {\r\n        'I': 1,\r\n        'V': 5,\r\n        'X': 10,\r\n        'L': 50,\r\n        'C': 100,\r\n        'D': 500,\r\n        'M': 1000\r\n    }\r\n\r\n    let result = 0;\r\n\r\n    for (let i = 0; i < s.length; i++) {\r\n        const cur = sym[s[i]];\r\n        const next = sym[s[i + 1]];\r\n\r\n        if (cur < next) {\r\n            result += next - cur;\r\n            i++;\r\n        } else {\r\n            result += cur;\r\n        }\r\n    }\r\n\r\n    return result;\r\n};"
  }
}
