export default {
  "id": 84,
  "name": "Largest Rectangle in Histogram",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/largest-rectangle-in-histogram",
  "relativeDir": "L/Largest Rectangle in Histogram",
  "slug": "0084-largest-rectangle-in-histogram",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 61,
    "java": 39,
    "python": 20,
    "javascript": 45
  },
  "languages": {
    "cpp": "class Solution {\r\nprivate:\r\n    vector<int> nextSmallerElement(vector<int>& arr, int n){\r\n        \r\n        stack<int> s;\r\n        s.push(-1);\r\n        vector<int> ans(n);\r\n        \r\n        for(int i = n-1; i>=0 ; i--){\r\n            int curr = arr[i];\r\n            \r\n            while(s.top()!=-1 && arr[s.top()]>=curr){\r\n                s.pop();\r\n            }\r\n            ans[i] = s.top();\r\n            s.push(i);\r\n        }\r\n        return ans;\r\n    }\r\n    vector<int> prevSmallerElement(vector<int>& arr, int n){\r\n        \r\n        stack<int> s;\r\n        s.push(-1);\r\n        vector<int> ans(n);\r\n        \r\n        for(int i = 0; i<n ; i++){\r\n            int curr = arr[i];\r\n            \r\n            while(s.top()!=-1 && arr[s.top()]>=curr){\r\n                s.pop();\r\n            }\r\n            ans[i] = s.top();\r\n            s.push(i);\r\n        }\r\n        return ans;\r\n    }\r\npublic:\r\n    int largestRectangleArea(vector<int>& heights) {\r\n        int n = heights.size();\r\n        int area = 1, ans = INT_MIN;\r\n        \r\n        vector<int> next(n);\r\n        next = nextSmallerElement(heights, n);\r\n        \r\n        vector<int> prev(n);\r\n        prev = prevSmallerElement(heights, n);\r\n        \r\n        for(int i = 0; i<n ; i++){\r\n            int l = heights[i];\r\n            \r\n            if(next[i] == -1){\r\n                next[i] = n;\r\n            }\r\n            int b = next[i] - prev[i] - 1;\r\n            \r\n            area = l*b;\r\n            ans = max(ans,area);\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def largestRectangleArea(self, heights: List[int]) -> int:\r\n        maxArea = 0\r\n        stack = [] # (index, height)\r\n        \r\n        for i, h in enumerate(heights):\r\n            startIndex = i\r\n            while stack and stack[-1][1] > h:\r\n                index, height = stack.pop()\r\n                maxArea = max(maxArea, height * (i - index))\r\n                startIndex = index\r\n            stack.append((startIndex, h))\r\n            \r\n        \r\n        \r\n        for index, height in stack:\r\n            maxArea = max(maxArea, height * (len(heights) - index))\r\n            \r\n            \r\n        return maxArea",
    "java": "class Solution {\r\n    public int largestRectangleArea(int[] heights) {\r\n        Stack<Integer> stack1 = new Stack<>();\r\n        Stack<Integer> stack2 = new Stack<>();\r\n        int n = heights.length;\r\n        int[] left = new int[n];\r\n        int[] right = new int[n];\r\n        int[] width = new int[n];\r\n        \r\n        for(int i=0; i<n; i++){\r\n            while(!stack1.isEmpty() && heights[stack1.peek()] >= heights[i])\r\n                stack1.pop();\r\n            if(!stack1.isEmpty())\r\n                left[i] = stack1.peek();\r\n            else\r\n                left[i] = -1;\r\n            stack1.push(i);\r\n        }\r\n        \r\n        for(int i=n-1; i>=0; i--){\r\n            while(!stack2.isEmpty() && heights[stack2.peek()] >= heights[i])\r\n                stack2.pop();\r\n            if(!stack2.isEmpty())\r\n                right[i] = stack2.peek();\r\n            else\r\n                right[i] = n;\r\n            stack2.push(i);\r\n        }\r\n        \r\n        for(int i=0; i<n; i++){\r\n            width[i] = right[i] - left[i] - 1;\r\n        }\r\n        int mxArea = 0;\r\n        for(int i=0; i<n; i++){\r\n            mxArea = Math.max(mxArea, width[i] * heights[i]);\r\n        }        \r\n        return mxArea;\r\n    }\r\n}",
    "javascript": "// Runtime: 79 ms (Top 90.82%) | Memory: 54.50 MB (Top 69.89%)\r\n\r\nvar largestRectangleArea = function(heights) {\r\n    const n = heights.length;\r\n    const nsr = new Array(n).fill(0);\r\n    const nsl = new Array(n).fill(0);\r\n\r\n    const stack = [];\r\n        \r\n    for (let i = n - 1; i >= 0; i--) {\r\n        while (stack.length !== 0 && heights[i] <= heights[stack[stack.length - 1]]) {\r\n                stack.pop();\r\n        }\r\n        if (stack.length === 0) {\r\n            nsr[i] = n;\r\n        } else {\r\n            nsr[i] = stack[stack.length - 1];\r\n        }\r\n        stack.push(i);\r\n    }\r\n\r\n    while (stack.length !== 0) {\r\n        stack.pop();\r\n    }\r\n\r\n    for (let i = 0; i < n; i++) {\r\n        while (stack.length !== 0 && heights[i] <= heights[stack[stack.length - 1]]) {\r\n            stack.pop();\r\n        }\r\n        if (stack.length === 0) {\r\n            nsl[i] = -1;\r\n        } else {\r\n             nsl[i] = stack[stack.length - 1];\r\n        }\r\n        stack.push(i);\r\n    }\r\n\r\n    let ans = 0;\r\n\r\n    for (let i = 0; i < n; i++) {\r\n        ans = Math.max(ans, heights[i] * (nsr[i] - nsl[i] - 1));\r\n    }\r\n   \r\n    return ans;\r\n};"
  }
}
