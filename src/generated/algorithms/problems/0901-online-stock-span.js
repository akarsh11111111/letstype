export default {
  "id": 901,
  "name": "Online Stock Span",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/online-stock-span",
  "relativeDir": "O/Online Stock Span",
  "slug": "0901-online-stock-span",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 34,
    "java": 32,
    "python": 19,
    "javascript": 31
  },
  "languages": {
    "cpp": "// Runtime: 324 ms (Top 61.68%) | Memory: 88.2 MB (Top 5.31%)\r\nclass StockSpanner {\r\npublic:\r\n    stack<pair<int , int>>s; //val , index\r\n    vector<int>prices;\r\n    vector<int>res;\r\n    StockSpanner() {\r\n\r\n    }\r\n\r\n    int next(int price) {\r\n        prices.push_back(price);\r\n        int n = prices.size();\r\n        for(int i = n-1 ; i<n ; i++)\r\n        {\r\n            while(!s.empty() and s.top().first <= prices[i])\r\n            {\r\n                s.pop();\r\n            }\r\n            if(s.empty())\r\n            {\r\n                res.push_back(i - 0 + 1);\r\n                s.push({prices[i] , i});\r\n            }\r\n            else\r\n            {\r\n                auto it = s.top();\r\n                res.push_back({i - it.second });\r\n                s.push({prices[i] , i});\r\n            }\r\n        }\r\n        return res[n-1];\r\n    }\r\n};",
    "python": "class StockSpanner:\r\n\r\n    def __init__(self):\r\n        self.stack = []\r\n        \r\n    def next(self, price: int) -> int:\r\n        \r\n        ans = 1\r\n        while self.stack and self.stack[-1][0] <= price:\r\n            ans += self.stack.pop()[1]\r\n        \r\n        self.stack.append((price, ans))\r\n        \r\n        return ans\r\n        \r\n\r\n# Your StockSpanner object will be instantiated and called as such:\r\n# obj = StockSpanner()\r\n# param_1 = obj.next(price)",
    "java": "class Pair{\r\n    int stock;\r\n    int span;\r\n    \r\n    public Pair(int stock, int span){\r\n        this.stock = stock;\r\n        this.span = span;\r\n    }\r\n    \r\n}\r\nclass StockSpanner {\r\n    Stack<Pair> stack;\r\n    public StockSpanner() {\r\n        stack = new Stack<>();\r\n    }\r\n    \r\n    public int next(int price) {\r\n        int span = 1;\r\n        while(!stack.isEmpty() && stack.peek().stock <= price){\r\n           Pair pStock = stack.pop();\r\n           span += pStock.span ;\r\n        }\r\n        stack.push(new Pair(price, span));\r\n        return span;\r\n    }\r\n}\r\n\r\n/**\r\n * Your StockSpanner object will be instantiated and called as such:\r\n * StockSpanner obj = new StockSpanner();\r\n * int param_1 = obj.next(price);\r\n */",
    "javascript": "var StockSpanner = function() {\r\n    this.stack = [];\r\n    this.idx = 0;\r\n};\r\n\r\nStockSpanner.prototype.next = function(price) {\r\n    \r\n\t// keep Pop-ing if top element of stack is bigger than current price\r\n    while(this.stack.length > 0 && this.stack[this.stack.length-1][0] <= price){\r\n        this.stack.pop();\r\n    }\r\n    \r\n\t// if stack is empty after above operation\r\n    if(this.stack.length === 0){\r\n\t\r\n\t\t// Push current price with index\r\n        this.stack.push([price,this.idx]);\r\n\t\t\r\n\t\t// increment index - this is a tricky part\r\n        this.idx++;\r\n\t\t\r\n        return this.idx;\r\n    }\r\n    \r\n\t// caclulate distance from top element of stack and return\r\n\t\r\n    const res = this.idx - this.stack[this.stack.length-1][1];\r\n    this.stack.push([price,this.idx]);\r\n    this.idx++;\r\n    return res;\r\n};"
  }
}
