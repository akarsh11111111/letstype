export default {
  "id": 1598,
  "name": "Crawler Log Folder",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/crawler-log-folder",
  "relativeDir": "C/Crawler Log Folder",
  "slug": "1598-crawler-log-folder",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 47,
    "java": 17,
    "python": 21,
    "javascript": 12
  },
  "languages": {
    "cpp": "//1.using stack\r\nclass Solution {\r\npublic:\r\n    int minOperations(vector<string>& logs) {\r\n\t\r\n        if(logs.size()==0) return 0;\r\n\t\t\r\n        stack<string> st;\r\n        for(auto x: logs){\r\n            if (x[0] != '.')  //Move to the child folder so add children\r\n                st.push(x);\r\n            else if(x==\"../\"){ // Move to the parent folder of the current folder so pop\r\n                 if(!st.empty())  st.pop(); \r\n                 else continue; //don’t move the pointer beyond the main folder.\r\n            }\r\n        }\r\n        return st.size();\r\n    }\r\n};\r\n//2.\r\nclass Solution {\r\npublic:\r\n    int minOperations(vector<string>& logs) {\r\n         int ans = 0;\r\n        for (string log : logs) {\r\n            if (log == \"../\") { // go deeper\r\n                ans--; \r\n                ans = max(ans, 0);\r\n            } else if (log != \"./\") // one level up\r\n\t\t\t   ans++; \r\n        }\r\n        return ans;\r\n    }\r\n};\r\n//3.\r\nclass Solution {\r\npublic:\r\n    int minOperations(vector<string>& logs) {\r\n        int res = 0;\r\n        for (string s : logs) {\r\n            if (s==\"../\") res = max(0, --res);\r\n            else if (s==\"./\") continue;\r\n            else res++;\r\n        }\r\n        return res;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def minOperations(self, logs: List[str]) -> int:\r\n        m='../'\r\n        r='./'\r\n\t\t#create an empty stack\r\n        stk=[]\r\n\t\t#iterate through the list\r\n        for i in logs:\r\n\t\t\t#if Move to the parent folder (../) operator occurs and stack is not empty, pop element from stack\r\n            if(i==m):\r\n                if(len(stk)>0):\r\n                    stk.pop()\r\n\t\t\t#else if Remain in the same folder (./) operator occurs, do nothing and move to next element in list\r\n            elif(i==r):\r\n                continue\r\n\t\t\t#else add element to the stack\r\n            else:\r\n                stk.append(i)\r\n\t\t#now return the size of the stack which would be the minimum number of operations needed to go back to the main folder\r\n        return(len(stk))\r\n\t\t```",
    "java": "// Runtime: 2 ms (Top 58.89%) | Memory: 41.7 MB (Top 94.57%)\r\nclass Solution {\r\n    public int minOperations(String[] logs) {\r\n         var stack = new Stack<String>();\r\n        for(var log : logs){\r\n            if(log.equals(\"../\")){\r\n                if(!stack.empty())\r\n                    stack.pop();\r\n            }else if(log.equals(\"./\")){\r\n\r\n            }else{\r\n                stack.push(log);\r\n            }\r\n        }\r\n        return stack.size();\r\n    }\r\n}",
    "javascript": "var minOperations = function(logs) {\r\n    let count = 0;\r\n    for(i=0;i<logs.length;i++){\r\n        if(logs[i] === '../') {\r\n            if(count > 0)  count = count - 1;\r\n            continue\r\n        }\r\n        if(logs[i] === './') continue;\r\n        else count = count + 1;\r\n    }\r\n    return count\r\n};"
  }
}
