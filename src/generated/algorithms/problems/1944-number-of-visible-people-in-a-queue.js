export default {
  "id": 1944,
  "name": "Number of Visible People in a Queue",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/number-of-visible-people-in-a-queue",
  "relativeDir": "N/Number of Visible People in a Queue",
  "slug": "1944-number-of-visible-people-in-a-queue",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 31,
    "java": 17,
    "python": 26,
    "javascript": 24
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<int> canSeePersonsCount(vector<int>& h) {\r\n        vector<int>ans ;\r\n        stack<int>s ;\r\n        int a = 0;\r\n        for(int i = h.size()-1 ; i >= 0 ; i--){\r\n            if(s.empty()){\r\n                ans.push_back(a);\r\n                s.push(h[i]);a++;\r\n            }\r\n            else{\r\n                if(s.top() > h[i]){\r\n                    ans.push_back(1);\r\n                    s.push(h[i]);a++;\r\n                }\r\n                else{\r\n                int b = 0;\r\n                while(!s.empty() && s.top() < h[i]){\r\n                    s.pop() ; a--;b++;\r\n                }\r\n                if(!s.empty())b++;\r\n                ans.push_back(b);\r\n                s.push(h[i]); a++;\r\n                } \r\n            }\r\n        }\r\n        reverse(ans.begin() , ans.end());\r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 2162 ms (Top 20.79%) | Memory: 30.1 MB (Top 6.96%)\r\n\r\nclass Solution:\r\n    def canSeePersonsCount(self, heights: List[int]) -> List[int]:\r\n        ans=[]\r\n        stack=[]\r\n        n=len(heights)\r\n        for i in range(n-1,-1,-1):\r\n            if len(stack)==0:\r\n                ans.append(0)\r\n                stack.append(heights[i])\r\n            else:\r\n                if heights[i]<stack[-1]:\r\n                    ans.append(1)\r\n                    stack.append(heights[i])\r\n                else:\r\n                    ctr=0\r\n                    while(len(stack)>0 and stack[-1]<heights[i]):\r\n                        ctr+=1\r\n                        stack.pop()\r\n                    if len(stack)==0:\r\n                        ans.append(ctr)\r\n                    else:\r\n                        ans.append(ctr+1)\r\n                    stack.append(heights[i])\r\n        return ans[::-1]",
    "java": "class Solution {\r\n    public int[] canSeePersonsCount(int[] heights) {\r\n        Stack<Integer> stack = new Stack<>();\r\n        int result[] = new int[heights.length];\r\n        for(int i = heights.length - 1; i >= 0; i--) {\r\n            int visibility = 0;\r\n            while(!stack.isEmpty() && heights[i] > stack.peek()) {\r\n                stack.pop();\r\n                visibility++;\r\n            }\r\n            if(!stack.isEmpty()) visibility++;\r\n            stack.push(heights[i]);\r\n            result[i] = visibility;\r\n        }\r\n        return result;\r\n    }\r\n}",
    "javascript": "// Runtime: 167 ms (Top 85.71%) | Memory: 73.90 MB (Top 15.71%)\r\n\r\n/**\r\n * @param {number[]} heights\r\n * @return {number[]}\r\n */\r\nvar canSeePersonsCount = function(heights) {\r\n    const stack = []\r\n    const answer = new Array(heights.length).fill(0)\r\n\r\n    for(let i = 0; i < heights.length; i++) {\r\n        while(stack.length && heights[i] > heights[stack[stack.length - 1]]) {\r\n            answer[stack.pop()]++\r\n        }\r\n\r\n        if(stack.length) {\r\n            answer[stack[stack.length - 1]]++\r\n        }\r\n\r\n        stack.push(i)\r\n    }\r\n\r\n    return answer\r\n};"
  }
}
