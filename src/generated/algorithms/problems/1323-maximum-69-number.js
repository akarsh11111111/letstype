export default {
  "id": 1323,
  "name": "Maximum 69 Number",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-69-number",
  "relativeDir": "M/Maximum 69 Number",
  "slug": "1323-maximum-69-number",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 24,
    "java": 25,
    "python": 8,
    "javascript": 12
  },
  "languages": {
    "cpp": "// Runtime: 2 ms (Top 44.3%) | Memory: 6.40 MB (Top 48.64%)\r\n\r\nclass Solution {\r\npublic:\r\n    int maximum69Number (int num) {\r\n        \r\n        string s = to_string(num);\r\n        \r\n        /* You can change at the most one digit,\r\n           so traverse from left and change the first\r\n           encountered 6  to  9  (to increase th value of num) */\r\n        \r\n        for(int i = 0 ; i < s.size() ; i++)\r\n        {\r\n            if(s[i] == '6')\r\n            {\r\n                s[i] = '9';\r\n                break;\r\n            }\r\n        }\r\n        \r\n        return stoi(s);\r\n    }\r\n};",
    "python": "class Solution:\r\n    def maximum69Number(self, num):\r\n        lst= list(str(num)) #! convert the number to a list\r\n        for i in range(len(lst)): #! iterate through the list\r\n            if lst[i]=='6': #! if the element is 6\r\n                lst[i]='9' #! replace the element with 9\r\n                break #! break the loop\r\n        return int(''.join(lst))  #! convert the list to a number",
    "java": "class Solution {\r\n    public int maximum69Number (int num) {\r\n        int i;\r\n        String s=String.valueOf(num);\r\n        int l=s.length();\r\n        int max=num;\r\n        \r\n        for(i=0;i<l;i++)\r\n        {\r\n            char c[]=s.toCharArray();\r\n            if(c[i]=='9')\r\n            {\r\n                c[i]='6';\r\n            }\r\n            else\r\n            {\r\n                c[i]='9';\r\n            }\r\n            String p=new String(c);\r\n            int k=Integer.parseInt(p);\r\n            max=Math.max(max,k);\r\n        }\r\n        return max;\r\n    }\r\n}",
    "javascript": "// Runtime: 89 ms (Top 56.57%) | Memory: 41.7 MB (Top 89.01%)\r\nvar maximum69Number = function(num) {\r\n  let flag=true\r\n   num= num.toString().split('').map((x)=>{\r\n        if(x!=='9'&&flag){\r\n            flag=false\r\n            return '9'\r\n        }\r\n        return x\r\n    })\r\n    return parseInt(num.join(''))\r\n};"
  }
}
