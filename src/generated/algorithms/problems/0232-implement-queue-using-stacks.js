export default {
  "id": 232,
  "name": "Implement Queue using Stacks",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/implement-queue-using-stacks",
  "relativeDir": "I/Implement Queue using Stacks",
  "slug": "0232-implement-queue-using-stacks",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 56,
    "java": 53,
    "python": 54,
    "javascript": 42
  },
  "languages": {
    "cpp": "class MyQueue {\r\npublic:\r\n    stack<int>s1;\r\n    stack<int>s2;\r\n\r\n    MyQueue() {\r\n        \r\n    }\r\n    \r\n    void push(int x) {\r\n        s1.push(x);\r\n    }\r\n    \r\n    int pop() {\r\n        if(s1.empty() && s2.empty()) return -1;\r\n        while(s2.empty()){\r\n        while(!s1.empty()){\r\n            s2.push(s1.top());\r\n            s1.pop();\r\n        }\r\n        }\r\n        int x = s2.top();\r\n        s2.pop();\r\n        return x;\r\n    }\r\n    \r\n    int peek() {\r\n        if(!s2.empty()){\r\n            return s2.top();\r\n        }\r\n        else{\r\n            while(!s1.empty()){\r\n                int val = s1.top();\r\n                s2.push(val);\r\n                s1.pop();\r\n            }\r\n            return s2.top();\r\n        }\r\n    }\r\n    \r\n    bool empty() {\r\n        if(s1.empty() && s2.empty()){\r\n            return true;\r\n        }\r\n        return false;\r\n    }\r\n};\r\n\r\n/**\r\n * Your MyQueue object will be instantiated and called as such:\r\n * MyQueue* obj = new MyQueue();\r\n * obj->push(x);\r\n * int param_2 = obj->pop();\r\n * int param_3 = obj->peek();\r\n * bool param_4 = obj->empty();\r\n */",
    "python": "# Runtime: 53 ms (Top 33.00%) | Memory: 13.9 MB (Top 98.49%)\r\nclass MyStack:\r\n    def __init__(self):\r\n        self.stack = []\r\n\r\n    def push(self, x):\r\n        self.stack.append(x)\r\n\r\n    def top(self):\r\n        return self.stack[-1]\r\n\r\n    def pop(self):\r\n        return self.stack.pop()\r\n\r\n    def size(self):\r\n        return len(self.stack)\r\n\r\n    def isEmpty(self):\r\n        return len(self.stack) == 0\r\n\r\nclass MyQueue:\r\n\r\n    def __init__(self):\r\n        self.stack1 = MyStack()\r\n        self.stack2 = MyStack()\r\n\r\n    def push(self, x: int) -> None:\r\n        self.stack1.push(x)\r\n\r\n    def pop(self) -> int:\r\n        while not self.stack1.isEmpty():\r\n            self.stack2.push(self.stack1.pop())\r\n        out = self.stack2.pop()\r\n        while not self.stack2.isEmpty():\r\n            self.stack1.push(self.stack2.pop())\r\n        return out\r\n\r\n    def peek(self) -> int:\r\n        while not self.stack1.isEmpty():\r\n            self.stack2.push(self.stack1.pop())\r\n        out = self.stack2.top()\r\n        while not self.stack2.isEmpty():\r\n            self.stack1.push(self.stack2.pop())\r\n        return out\r\n\r\n    def empty(self) -> bool:\r\n        return self.stack1.isEmpty()\r\n\r\n# Your MyQueue object will be instantiated and called as such:\r\n# obj = MyQueue()\r\n# obj.push(x)\r\n# param_2 = obj.pop()\r\n# param_3 = obj.peek()\r\n# param_4 = obj.empty()",
    "java": "// Runtime: 1 ms (Top 70.23%) | Memory: 41.5 MB (Top 77.34%)\r\nclass MyQueue {\r\n\r\n    private final Deque<Integer> stack = new ArrayDeque<>();\r\n    private final Deque<Integer> temp = new ArrayDeque<>();\r\n\r\n    /**\r\n     * Initialize your data structure here.\r\n     */\r\n    public MyQueue() {}\r\n\r\n    /**\r\n     * Pushes element x to the back of the queue.\r\n     */\r\n    public void push(int x) {\r\n        stack.push(x);\r\n    }\r\n\r\n    /**\r\n     * @return the element at the front of the queue and remove it.\r\n     */\r\n    public int pop() {\r\n        while (stack.size() > 1)\r\n            temp.push(stack.pop());\r\n\r\n        var val = stack.pop();\r\n        while (!temp.isEmpty())\r\n            stack.push(temp.pop());\r\n\r\n        return val;\r\n    }\r\n\r\n    /**\r\n     * @return the element at the front of the queue.\r\n     */\r\n    public int peek() {\r\n        while (stack.size() > 1)\r\n            temp.push(stack.pop());\r\n\r\n        var val = stack.peek();\r\n        while (!temp.isEmpty())\r\n            stack.push(temp.pop());\r\n\r\n        return val;\r\n    }\r\n\r\n    /**\r\n     * @return true if the queue is empty, false otherwise.\r\n     */\r\n    public boolean empty() {\r\n        return stack.isEmpty();\r\n    }\r\n}",
    "javascript": "\r\nvar MyQueue = function() {\r\n    this.queue = [];\r\n};\r\n\r\n/** \r\n * @param {number} x\r\n * @return {void}\r\n */\r\nMyQueue.prototype.push = function(x) {\r\n    this.queue.push(x);\r\n};\r\n\r\n/**\r\n * @return {number}\r\n */\r\nMyQueue.prototype.pop = function() {\r\n    return this.queue.splice(0, 1);\r\n};\r\n\r\n/**\r\n * @return {number}\r\n */\r\nMyQueue.prototype.peek = function() {\r\n    return this.queue[0]\r\n};\r\n\r\n/**\r\n * @return {boolean}\r\n */\r\nMyQueue.prototype.empty = function() {\r\n    return this.queue.length === 0;\r\n};\r\n\r\n/** \r\n * Your MyQueue object will be instantiated and called as such:\r\n * var obj = new MyQueue()\r\n * obj.push(x)\r\n * var param_2 = obj.pop()\r\n * var param_3 = obj.peek()\r\n * var param_4 = obj.empty()\r\n */"
  }
}
