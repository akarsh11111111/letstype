export default {
  "id": 225,
  "name": "Implement Stack using Queues",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/implement-stack-using-queues",
  "relativeDir": "I/Implement Stack using Queues",
  "slug": "0225-implement-stack-using-queues",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 37,
    "java": 34,
    "python": 37,
    "javascript": 42
  },
  "languages": {
    "cpp": "// Runtime: 3 ms (Top 41.4%) | Memory: 7.10 MB (Top 85.79%)\r\n\r\nclass MyStack {\r\npublic:\r\n    /** Initialize your data structure here. */\r\n    queue<int> q1;\r\n    MyStack() {\r\n        \r\n    }\r\n    \r\n    /** Push element x onto stack. */\r\n    void push(int x) {\r\n        int sz = q1.size();\r\n        q1.push(x);\r\n        while(sz--){\r\n            q1.push(q1.front());\r\n            q1.pop();\r\n        }\r\n    }\r\n    \r\n    /** Removes the element on top of the stack and returns that element. */\r\n    int pop() {\r\n        int result = top();\r\n        q1.pop();\r\n        return result;\r\n    }\r\n    \r\n    /** Get the top element. */\r\n    int top() {\r\n        return q1.front();\r\n    }\r\n    \r\n    /** Returns whether the stack is empty. */\r\n    bool empty() {\r\n        return q1.empty();\r\n    }\r\n};",
    "python": "// Runtime: 44 ms (Top 15.83%) | Memory: 16.50 MB (Top 18.94%)\r\n\r\nclass MyStack:\r\n\r\n    def __init__(self):\r\n        self.q1 = deque()\r\n        self.q2 = deque()\r\n\r\n    def push(self, x: int) -> None:\r\n        self.q1.append(x)\r\n\r\n    def pop(self) -> int:\r\n        while len(self.q1) > 1:\r\n            self.q2.append(self.q1.popleft())\r\n        \r\n        popped_element = self.q1.popleft()\r\n        \r\n        # Swap q1 and q2\r\n        self.q1, self.q2 = self.q2, self.q1\r\n        \r\n        return popped_element\r\n\r\n    def top(self) -> int:\r\n        while len(self.q1) > 1:\r\n            self.q2.append(self.q1.popleft())\r\n        \r\n        top_element = self.q1[0]\r\n        \r\n        self.q2.append(self.q1.popleft())\r\n        \r\n        # Swap q1 and q2\r\n        self.q1, self.q2 = self.q2, self.q1\r\n        \r\n        return top_element\r\n\r\n    def empty(self) -> bool:\r\n        return len(self.q1) == 0",
    "java": "// Runtime: 1 ms (Top 34.13%) | Memory: 42.2 MB (Top 19.29%)\r\nclass MyStack {\r\n\r\n    Queue<Integer> queue = null;\r\n\r\n    public MyStack() {\r\n        queue = new LinkedList<>();\r\n    }\r\n\r\n    public void push(int x) {\r\n\r\n        Queue<Integer> tempQueue = new LinkedList<>();\r\n        tempQueue.add(x);\r\n\r\n        while(!queue.isEmpty()){\r\n         tempQueue.add(queue.remove());\r\n        }\r\n\r\n        queue = tempQueue;\r\n\r\n    }\r\n\r\n    public int pop() {\r\n       return queue.remove();\r\n    }\r\n\r\n    public int top() {\r\n        return queue.peek();\r\n    }\r\n\r\n    public boolean empty() {\r\n        return queue.isEmpty();\r\n    }\r\n}",
    "javascript": "\r\nvar MyStack = function() {\r\n    this.stack = [];\r\n};\r\n\r\n/** \r\n * @param {number} x\r\n * @return {void}\r\n */\r\nMyStack.prototype.push = function(x) {\r\n    this.stack.push(x);\r\n};\r\n\r\n/**\r\n * @return {number}\r\n */\r\nMyStack.prototype.pop = function() {\r\n    return this.stack.splice([this.stack.length-1], 1)\r\n};\r\n\r\n/**\r\n * @return {number}\r\n */\r\nMyStack.prototype.top = function() {\r\n     return this.stack[this.stack.length-1]\r\n};\r\n\r\n/**\r\n * @return {boolean}\r\n */\r\nMyStack.prototype.empty = function() {\r\n    return this.stack.length === 0 ? true : false;\r\n};\r\n\r\n/** \r\n * Your MyStack object will be instantiated and called as such:\r\n * var obj = new MyStack()\r\n * obj.push(x)\r\n * var param_2 = obj.pop()\r\n * var param_3 = obj.top()\r\n * var param_4 = obj.empty()\r\n */"
  }
}
