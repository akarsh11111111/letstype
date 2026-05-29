export default {
  "id": 71,
  "name": "Simplify Path",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/simplify-path",
  "relativeDir": "S/Simplify Path",
  "slug": "0071-simplify-path",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 48,
    "java": 19,
    "python": 26,
    "javascript": 22
  },
  "languages": {
    "cpp": "// Runtime: 10 ms (Top 59.80%) | Memory: 10.6 MB (Top 29.82%)\r\n                    // Please upvote if it helps\r\nclass Solution {\r\npublic:\r\n    string simplifyPath(string path) {\r\n\r\n        stack<string> st;\r\n        string res;\r\n\r\n        for(int i = 0; i<path.size(); ++i)\r\n        {\r\n            if(path[i] == '/')\r\n                continue;\r\n            string temp;\r\n            // iterate till we doesn't traverse the whole string and doesn't encounter the last /\r\n            while(i < path.size() && path[i] != '/')\r\n            {\r\n                // add path to temp string\r\n                temp += path[i];\r\n                ++i;\r\n            }\r\n            if(temp == \".\")\r\n                continue;\r\n            // pop the top element from stack if exists\r\n            else if(temp == \"..\")\r\n            {\r\n                if(!st.empty())\r\n                    st.pop();\r\n            }\r\n            else\r\n            // push the directory file name to stack\r\n                st.push(temp);\r\n        }\r\n\r\n        // adding all the stack elements to res\r\n        while(!st.empty())\r\n        {\r\n            res = \"/\" + st.top() + res;\r\n            st.pop();\r\n        }\r\n\r\n        // if no directory or file is present\r\n        if(res.size() == 0)\r\n            return \"/\";\r\n\r\n        return res;\r\n    }\r\n};",
    "python": "class Solution:\r\n   def simplifyPath(self, path: str) -> str:\r\n   \tstack = []\r\n   \t\r\n   \ti = 0\r\n       while i < len(path):\r\n           if path[i] == '/':\r\n               i += 1\r\n               continue\r\n\r\n           else:\r\n               cur = ''\r\n               while i < len(path) and path[i] != '/':\r\n                   cur += path[i]\r\n                   i += 1\r\n\r\n               if cur == '..':\r\n                   if stack:\r\n                       stack.pop()\r\n               elif cur == '.' or cur == '':\r\n                   i += 1\r\n                   continue\r\n               else:\r\n                    stack.append(cur)\r\n\r\n       return '/' + '/'.join(stack)",
    "java": "// Runtime: 4 ms (Top 86.82%) | Memory: 43.20 MB (Top 75.26%)\r\n\r\nclass Solution {\r\n    public String simplifyPath(String path) {\r\n        Deque<String> dirOrFiles = new ArrayDeque<>();\r\n        for (String dirOrFile : path.split(\"/\")) {\r\n            if (!dirOrFiles.isEmpty() && dirOrFile.equals(\"..\")) {\r\n                dirOrFiles.removeLast();\r\n            } else if (!dirOrFile.equals(\".\") && !dirOrFile.equals(\"\") && !dirOrFile.equals(\"..\")) {\r\n                dirOrFiles.addLast(dirOrFile);\r\n            }\r\n        }\r\n        StringBuilder simplified_path = new StringBuilder();\r\n        for (String dirOrFile : dirOrFiles) {\r\n            simplified_path.append(\"/\").append(dirOrFile);\r\n        }\r\n        return simplified_path.length() == 0 ? \"/\" : simplified_path.toString();\r\n    }\r\n}",
    "javascript": "// Runtime: 114 ms (Top 38.66%) | Memory: 44.1 MB (Top 64.37%)\r\nvar simplifyPath = function(path) {\r\n    let stack=[];\r\n    path=path.split(\"/\")\r\n    for(let i=0;i<path.length;i++){\r\n        if(path[i]===\"\" || path[i]===\".\")continue;\r\n        if(path[i]===\"..\"){\r\n            stack.pop();\r\n        }else{\r\n            stack.push(path[i]);\r\n        }\r\n    }\r\n    //edge case\r\n    if(stack.length===0)return \"/\"\r\n    //edge case\r\n\r\n    let string=\"\";\r\n    for(let j=0;j<stack.length;j++){\r\n        string+=\"/\"+stack[j];\r\n    }\r\n    return string;\r\n};"
  }
}
