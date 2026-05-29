export default {
  "id": 739,
  "name": "Daily Temperatures",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/daily-temperatures",
  "relativeDir": "D/Daily Temperatures",
  "slug": "0739-daily-temperatures",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 17,
    "java": 22,
    "python": 11,
    "javascript": 18
  },
  "languages": {
    "cpp": "// Runtime: 373 ms (Top 14.90%) | Memory: 88.8 MB (Top 51.45%)\r\nclass Solution {\r\npublic:\r\n    vector<int> dailyTemperatures(vector<int>& temperatures) {\r\n        int n = temperatures.size();\r\n        stack<int> st;\r\n        vector<int> result(n, 0);\r\n        for(int i = 0; i<n; i++){\r\n            while(!st.empty() && temperatures[i]>temperatures[st.top()]){\r\n                result[st.top()] = i-st.top();\r\n                st.pop();\r\n            }\r\n            st.push(i);\r\n        }\r\n        return result;\r\n    }\r\n};",
    "python": "// Runtime: 1085 ms (Top 46.04%) | Memory: 30.40 MB (Top 85.02%)\r\n\r\nclass Solution:\r\n    def dailyTemperatures(self, T):\r\n        ans, s = [0]*len(T), deque()\r\n        for cur, cur_tmp in enumerate(T):\r\n            while s and cur_tmp > T[s[-1]]:\r\n                ans[s[-1]] = cur - s[-1]\r\n                s.pop()\r\n            s.append(cur)\r\n        return ans",
    "java": "// Runtime: 207 ms (Top 22.03%) | Memory: 127.9 MB (Top 72.12%)\r\nclass Solution {\r\n    public int[] dailyTemperatures(int[] temperatures) {\r\n        HashMap<Integer,Integer>hm=new HashMap<>();\r\n        Stack<Integer>st=new Stack<>();\r\n        for(int i=0;i<temperatures.length;i++){\r\n            while(st.size()>0&&temperatures[i]>temperatures[st.peek()]){\r\n                hm.put(st.pop(),i);\r\n            }\r\n            st.push(i);\r\n        }\r\n        int []ans=new int[temperatures.length];\r\n        for(int i=0;i<temperatures.length;i++){\r\n            if(hm.containsKey(i)){\r\n                ans[i]=hm.get(i)-i;\r\n            }else{\r\n                ans[i]=0;\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n}",
    "javascript": "var dailyTemperatures = function(temperatures) {\r\n    const len = temperatures.length;\r\n    const res = new Array(len).fill(0);\r\n    const stack = [];\r\n    \r\n    for (let i = 0; i < len; i++) {\r\n        const temp = temperatures[i];\r\n        \r\n        while (temp > (stack[stack.length - 1] || [Infinity])[0]) {\r\n            const [_, j]  = stack.pop();\r\n            res[j] = i - j;\r\n        }\r\n        \r\n        stack.push([temp, i]);\r\n    }\r\n    \r\n    return res;\r\n};"
  }
}
