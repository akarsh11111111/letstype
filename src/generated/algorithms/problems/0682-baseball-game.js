export default {
  "id": 682,
  "name": "Baseball Game",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/baseball-game",
  "relativeDir": "B/Baseball Game",
  "slug": "0682-baseball-game",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 32,
    "java": 28,
    "python": 15,
    "javascript": 21
  },
  "languages": {
    "cpp": "// Runtime: 11 ms (Top 21.91%) | Memory: 8.5 MB (Top 29.43%)\r\nclass Solution {\r\npublic:\r\n    int calPoints(vector<string>& ops) {\r\n        stack<int>st;\r\n        int n = ops.size();\r\n        for(int i=0;i<n;i++){\r\n                    if(ops[i] == \"C\"){\r\n                        st.pop();\r\n                    }\r\n                    else if (ops[i] ==\"D\"){\r\n                        st.push(st.top() * 2);\r\n                    }\r\n                    else if(ops[i] ==\"+\"){\r\n                        int temp = st.top();\r\n                        st.pop();\r\n                        int temp2 = st.top();\r\n                        st.push(temp);\r\n                        st.push(temp+temp2);\r\n                   }\r\n                  else{\r\n                      st.push(stoi(ops[i]));\r\n                  }\r\n        }\r\n        int res = 0;\r\n        while(!st.empty()){\r\n            res += st.top();\r\n            st.pop();\r\n        }\r\n        return res;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def calPoints(self, ops: List[str]) -> int:\r\n        temp = []\r\n        for i in ops:\r\n            if i!=\"C\" and i!=\"D\" and i!=\"+\":\r\n                temp.append(int(i))\r\n            elif i==\"C\":\r\n                temp.remove(temp[len(temp)-1])\r\n            elif i==\"D\":\r\n                temp.append(2*temp[len(temp)-1])\r\n            elif i==\"+\":\r\n                temp.append(temp[len(temp)-1]+temp[len(temp)-2])\r\n        \r\n        \r\n        return sum(temp)",
    "java": "class Solution {\r\n    public int calPoints(String[] ops) {\r\n        List<Integer> list = new ArrayList<Integer>();\r\n        \r\n        for(int i = 0; i < ops.length; i++){\r\n            switch(ops[i]){\r\n                case \"C\":\r\n                    list.remove(list.size() - 1);\r\n                    break;\r\n                case \"D\":\r\n                    list.add(list.get(list.size() - 1) * 2);\r\n                    break;\r\n                case \"+\":\r\n                    list.add(list.get(list.size() - 1) + list.get(list.size() - 2));\r\n                    break;\r\n                default:\r\n                    list.add(Integer.valueOf(ops[i]));\r\n                    break;\r\n            }\r\n        }\r\n        \r\n        int finalScore = 0;\r\n        for(Integer score: list)\r\n            finalScore += score;\r\n        \r\n        return finalScore;\r\n    }\r\n}",
    "javascript": "\r\n//Plus sign in the below algo confirms that the data type we are getting is integer. So, instead of adding it as a string, the data type will be  added as integer\r\nvar calPoints = function(ops) {\r\n    let stack = [];\r\n    for(let i = 0; i < ops.length; i++){\r\n        if(ops[i] === \"C\")\r\n            stack.pop();\r\n        else if(ops[i] === \"D\")\r\n            stack.push((+stack[stack.length - 1]) * 2);\r\n        //we have to take stack.length to get the element of stack. We cannot take i for getting the element of stack as i refers to ops and it wont give the index of previous element in stack\r\n        else if(ops[i] ===\"+\")\r\n            stack.push((+stack[stack.length - 1]) + (+stack[stack.length - 2]));\r\n        else\r\n        stack.push(+ops[i]);\r\n    }\r\n    let sum = 0;\r\n    for(let i = 0; i < stack.length; i++){\r\n        sum = sum + stack[i];\r\n    }\r\n    return sum;\r\n};"
  }
}
