export default {
  "id": 1381,
  "name": "Design a Stack With Increment Operation",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/design-a-stack-with-increment-operation",
  "relativeDir": "D/Design a Stack With Increment Operation",
  "slug": "1381-design-a-stack-with-increment-operation",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 37,
    "java": 46,
    "python": 24,
    "javascript": 30
  },
  "languages": {
    "cpp": "// Runtime: 35 ms (Top 95.05%) | Memory: 21.1 MB (Top 38.81%)\r\nclass CustomStack {\r\n    int *data;\r\n    int nextIndex;\r\n    int capacity;\r\npublic:\r\n    CustomStack(int maxSize) {\r\n        data = new int[maxSize];\r\n        nextIndex = 0;\r\n        capacity = maxSize;\r\n    }\r\n\r\n    void push(int x) {\r\n        if(nextIndex == capacity){\r\n            return;\r\n        }\r\n        data[nextIndex] = x;\r\n        nextIndex++;\r\n    }\r\n\r\n    int pop() {\r\n        if(nextIndex == 0){\r\n            return -1;\r\n        }\r\n        int temp = data[nextIndex-1];\r\n        nextIndex--;\r\n        return temp;\r\n    }\r\n\r\n    void increment(int k, int val) {\r\n        //loop will run upto nextIndex if k >= nextIndex else runt upto k only\r\n        int n = (k >= nextIndex) ? nextIndex : k;\r\n        for(int i = 0; i < n; i++){\r\n            data[i] = data[i] + val;\r\n        }\r\n    }\r\n};",
    "python": "\tclass CustomStack:\r\n\r\n\t\tdef __init__(self, maxSize: int):\r\n\t\t\tself.size = maxSize\r\n\t\t\tself.stack = []\r\n\r\n\t\tdef push(self, x: int) -> None:\r\n\t\t\tif self.size > len(self.stack):\r\n\t\t\t\tself.stack.append(x)\r\n\r\n\t\tdef pop(self) -> int:\r\n\t\t\tif self.stack:\r\n\t\t\t\treturn self.stack.pop()\r\n\t\t\treturn -1\r\n\r\n\t\tdef increment(self, k: int, val: int) -> None:\r\n\t\t\tlen_stack = len(self.stack)\r\n\r\n\t\t\tif len_stack < k:\r\n\t\t\t\tself.stack[:] = [i + val for i in self.stack]\r\n\t\t\t\treturn\r\n\r\n\t\t\tfor i in range(k):\r\n\t\t\t\tself.stack[i] += val",
    "java": "// Runtime: 8 ms (Top 70.94%) | Memory: 50.6 MB (Top 37.77%)\r\n\r\nclass CustomStack {\r\n\r\n    int[] stack;\r\n    int top;\r\n\r\n    public CustomStack(int maxSize) {\r\n\r\n        //intialise the stack and the top\r\n         stack= new int[maxSize];\r\n        top=-1;\r\n    }\r\n\r\n    public void push(int x) {\r\n\r\n        // if the stack is full just skip\r\n        if( top==stack.length-1) return;\r\n\r\n        //add to the stack\r\n        top++;\r\n        stack[top]=x;\r\n    }\r\n\r\n    public int pop() {\r\n\r\n        //if stack is empty return -1\r\n        if( top==-1) return -1;\r\n\r\n        //remove/pop the top element\r\n        top--;\r\n        return stack[top+1];\r\n\r\n    }\r\n\r\n    public void increment(int k, int val) {\r\n\r\n        //got to increment the min of the elements present in the stack and k\r\n        int n= Math.min(top+1,k);\r\n\r\n        for( int i=0; i<n ; i++){\r\n            stack[i]+=val;\r\n        }\r\n\r\n    }\r\n}",
    "javascript": "// Runtime: 216 ms (Top 17.69%) | Memory: 50.1 MB (Top 69.23%)\r\nvar CustomStack = function(maxSize) {\r\n    this.stack = new Array(maxSize).fill(-1);\r\n    this.maxSize = maxSize;\r\n    this.size = 0;\r\n};\r\n\r\nCustomStack.prototype.push = function(x) {\r\n    if(this.size < this.maxSize){\r\n        this.stack[this.size] = x;\r\n        this.size++;\r\n    }\r\n};\r\n\r\nCustomStack.prototype.pop = function() {\r\n    if(this.size > 0){\r\n        this.size--;\r\n        return this.stack[this.size];\r\n    }\r\n    return -1;\r\n};\r\n\r\nCustomStack.prototype.increment = function(k, val) {\r\n    let count = k >= this.size ? this.size-1 : k-1;\r\n\r\n    while(count >= 0){\r\n        this.stack[count] += val;\r\n        count--;\r\n    }\r\n};"
  }
}
