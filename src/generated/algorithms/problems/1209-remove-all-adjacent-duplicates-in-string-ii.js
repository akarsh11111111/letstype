export default {
  "id": 1209,
  "name": "Remove All Adjacent Duplicates in String II",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii",
  "relativeDir": "R/Remove All Adjacent Duplicates in String II",
  "slug": "1209-remove-all-adjacent-duplicates-in-string-ii",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 66,
    "java": 28,
    "python": 17,
    "javascript": 25
  },
  "languages": {
    "cpp": "#define pp pair< int , char > \r\n\r\nclass Solution {\r\npublic:\r\n    string removeDuplicates(string s, int k) {\r\n        \r\n        int n=s.size();\r\n        \r\n        stack< pp > stk;\r\n        \r\n        int i=0;\r\n        \r\n        while(i<n)\r\n        {\r\n            int count=1;\r\n            \r\n            char ch=s[i];\r\n            \r\n            while((i+1)<n && s[i]==s[i+1])\r\n            {\r\n                i++;\r\n                count++;\r\n            }\r\n         \r\n            int c=0;\r\n            \r\n            if(!stk.empty() && stk.top().second==ch)\r\n            {\r\n                c+=stk.top().first;\r\n                stk.pop();\r\n            }\r\n            \r\n            count+=c;\r\n            \r\n            count=count%k;\r\n            \r\n            if(count!=0)\r\n            {\r\n                stk.push({count , ch});\r\n            }\r\n            \r\n            i++;\r\n            \r\n            \r\n        }\r\n        \r\n        string str=\"\";\r\n        \r\n        while(!stk.empty())\r\n        {\r\n            int count=stk.top().first;\r\n            \r\n            while(count--)\r\n            {\r\n                str.push_back(stk.top().second);\r\n            }\r\n            \r\n            stk.pop();\r\n        }\r\n        \r\n        reverse(str.begin() , str.end());\r\n        \r\n        return str;\r\n        \r\n    }\r\n};",
    "python": "# Runtime: 309 ms (Top 14.94%) | Memory: 18.7 MB (Top 36.81%)\r\nclass Solution:\r\n    def removeDuplicates(self, s: str, k: int) -> str:\r\n        stack=[]\r\n        res=''\r\n        for i in range(len(s)):\r\n            if len(stack)==0:\r\n                stack.append([s[i],1])\r\n            elif stack[-1][0]==s[i]:\r\n                stack[-1][1]=stack[-1][1]+1\r\n            else:\r\n                stack.append([s[i],1])\r\n            if stack[-1][1]==k:\r\n                stack.pop()\r\n        for i in range(len(stack)):\r\n            res+=stack[i][0]*stack[i][1]\r\n        return res",
    "java": "// Runtime: 71 ms (Top 53.30%) | Memory: 48.3 MB (Top 81.34%)\r\nclass Solution\r\n{\r\n    public String removeDuplicates(String s, int k)\r\n    {\r\n        int i = 0 ;\r\n        StringBuilder newString = new StringBuilder(s) ;\r\n        int[] count = new int[newString.length()] ;\r\n        while( i < newString.length() )\r\n        {\r\n            if( i == 0 || newString.charAt(i) != newString.charAt( i - 1 ) )\r\n            {\r\n                count[i] = 1 ;\r\n            }\r\n            else\r\n            {\r\n                count[i] = count[ i - 1 ] + 1 ;\r\n                if( count[i] == k )\r\n                {\r\n                    newString.delete( i - k + 1 , i + 1 ) ;\r\n                    i = i - k ;\r\n                }\r\n            }\r\n            i++ ;\r\n        }\r\n        return newString.toString() ;\r\n    }\r\n}",
    "javascript": "// Runtime: 172 ms (Top 24.83%) | Memory: 57.7 MB (Top 11.96%)\r\nvar removeDuplicates = function(s, k) {\r\n  const stack = []\r\n  for(const c of s){\r\n    const obj = {count: 1, char: c}\r\n    if(!stack.length){\r\n      stack.push(obj)\r\n      continue\r\n    }\r\n    const top = stack[stack.length-1]\r\n    if(top.char === obj.char && obj.count + top.count === k){\r\n      let count = k\r\n      while(count > 1){\r\n        stack.pop()\r\n        count--\r\n      }\r\n    }else if(top.char === obj.char){\r\n      obj.count+=top.count\r\n      stack.push(obj)\r\n    }else{\r\n      stack.push(obj)\r\n    }\r\n  }\r\n  return stack.reduce((a,b)=> a+b.char, '')\r\n};"
  }
}
