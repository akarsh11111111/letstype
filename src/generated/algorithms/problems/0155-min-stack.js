export default {
  "id": 155,
  "name": "Min Stack",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/min-stack",
  "relativeDir": "M/Min Stack",
  "slug": "0155-min-stack",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 37,
    "python": 27,
    "javascript": 29
  },
  "languages": {
    "cpp": "// Runtime: 29 ms (Top 73.41%) | Memory: 16.5 MB (Top 10.27%)\r\nclass MinStack {\r\npublic:\r\n    stack<int> stk;\r\n    stack<int> minstk;\r\n\r\n    MinStack() {\r\n      //leave empty because we don't need to initialise an object while it being created\r\n    }\r\n\r\n    void push(int val) {\r\n        //---------------Push in original stack------------------------------\r\n        stk.push(val);\r\n        //-------Put always minimum element to MIN stack--------------\r\n        if(minstk.size()==0)\r\n            minstk.push(val);\r\n        else{\r\n            if(minstk.top()<val)\r\n                minstk.push(minstk.top());\r\n            else\r\n                minstk.push(val);\r\n        }\r\n    }\r\n\r\n    void pop() {\r\n        stk.pop();\r\n        minstk.pop();\r\n    }\r\n\r\n    int top() {\r\n        return stk.top();\r\n    }\r\n\r\n    int getMin() {\r\n        return minstk.top();\r\n    }\r\n};",
    "python": "# Runtime: 117 ms (Top 35.13%) | Memory: 18.5 MB (Top 10.03%)\r\nclass MinStack:\r\n\r\n    def __init__(self):\r\n        self.stack = []\r\n\r\n    def push(self, val: int) -> None:\r\n        if not self.stack:\r\n            self.stack.append((val, val))\r\n        else:\r\n            self.stack.append((val, min(val, self.stack[-1][1])))\r\n\r\n    def pop(self) -> None:\r\n        if self.stack:\r\n            self.stack.pop()\r\n\r\n    def top(self) -> int:\r\n        if self.stack:\r\n            return self.stack[-1][0]\r\n        else:\r\n            return None\r\n\r\n    def getMin(self) -> int:\r\n        if self.stack:\r\n            return self.stack[-1][1]\r\n        else:\r\n            return None",
    "javascript": "var MinStack = function() {\r\n    this.stack = [];\r\n    this.min = [];\r\n};\r\n\r\nMinStack.prototype.push = function(val) {\r\n    this.stack.push(val);\r\n\r\n    const lastMin = this.min[this.min.length - 1];\r\n\r\n    if (lastMin === undefined || val < lastMin) {\r\n        this.min.push(val);\r\n    } else {\r\n        this.min.push(lastMin);\r\n    }\r\n};\r\n\r\nMinStack.prototype.pop = function() {\r\n    this.stack.pop();\r\n    this.min.pop();\r\n};\r\n\r\nMinStack.prototype.top = function() {\r\n    return this.stack[this.stack.length - 1];\r\n};\r\n\r\nMinStack.prototype.getMin = function() {\r\n    return this.min[this.min.length - 1];\r\n};"
  }
}
