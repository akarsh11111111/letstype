export default {
  "id": 1556,
  "name": "Thousand Separator",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/thousand-separator",
  "relativeDir": "T/Thousand Separator",
  "slug": "1556-thousand-separator",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 20,
    "java": 16,
    "python": 31,
    "javascript": 19
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    string thousandSeparator(int n) {\r\n        string s=\"\";\r\n        int a=0;\r\n        if(n==0)return \"0\";\r\n       while(n>0){\r\n           s+=char(n%10+48);\r\n           a++;\r\n           n/=10;\r\n           if(a==3&&n!=0)\r\n           {\r\n               a=0;\r\n               s+=\".\";\r\n           }\r\n       }\r\n        reverse(s.begin(),s.end());\r\n        return s;\r\n    }\r\n};",
    "python": "# Runtime: 17 ms (Top 24.0%) | Memory: 13.24 MB (Top 48.1%)\r\n\r\nclass Solution(object):\r\n    def thousandSeparator(self, n):\r\n        \"\"\"\r\n        :type n: int\r\n        :rtype: str\r\n        \"\"\"\r\n        n = str(n)\r\n        if len(n) <= 3:\r\n            return str(n)\r\n        result = \"\"      \r\n        dot = '.'\r\n        index = 0\r\n        startPos = len(n) % 3 \r\n        if startPos == 0:\r\n            startPos += 3\r\n        val = -1\r\n        while index < len(n):\r\n            result += n[index]\r\n            if index == startPos - 1:\r\n                result += dot\r\n                val = 0\r\n            if val != -1:\r\n                val += 1\r\n                if val > 3 and (val - 1) % 3 == 0 and index != len(n) - 1:\r\n                    result += dot\r\n                    val = 1  \r\n            index += 1\r\n\r\n        return result",
    "java": "// Runtime: 0 ms (Top 100.0%) | Memory: 39.69 MB (Top 67.9%)\r\n\r\nclass Solution {\r\n    public String thousandSeparator(int n) {\r\n       \r\n        StringBuffer str = new StringBuffer(Integer.toString(n));\r\n        int index = str.length() - 3;\r\n        \r\n        while(index >= 1){\r\n            str.insert(index , '.');\r\n            index = index - 3;\r\n        }\r\n        \r\n        return str.toString();\r\n    }\r\n}",
    "javascript": "// Runtime: 63 ms (Top 94.17%) | Memory: 41.7 MB (Top 95.00%)\r\nvar thousandSeparator = function(n) {\r\n    let ans = \"\";\r\n\r\n    if(n >= 1000){\r\n    const arr = String(n).split('');\r\n        for(let i=0;i<arr.length;i++){\r\n            let temp = arr.length - i;\r\n            if(temp === 3 && arr.length > temp || temp === 6 && arr.length > temp || temp === 9 && arr.length > temp || temp === 12 && arr.length > temp){\r\n                ans += '.';\r\n            }\r\n        ans += arr[i];\r\n        }\r\n    }else{\r\n        ans += n;\r\n    }\r\n\r\n    return ans;\r\n};"
  }
}
