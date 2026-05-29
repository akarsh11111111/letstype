export default {
  "id": 2296,
  "name": "Design a Text Editor",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/design-a-text-editor",
  "relativeDir": "D/Design a Text Editor",
  "slug": "2296-design-a-text-editor",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 61,
    "java": 36,
    "python": 27,
    "javascript": 65
  },
  "languages": {
    "cpp": "// Runtime: 380 ms (Top 93.02%) | Memory: 106.3 MB (Top 89.43%)\r\nclass TextEditor {\r\n    stack<char> left;\r\n    stack<char> right;\r\npublic:\r\n    TextEditor() {\r\n\r\n    }\r\n\r\n    void addText(string text) {\r\n        for(auto &c : text){\r\n            left.push(c);\r\n        }\r\n    }\r\n\r\n    int deleteText(int k) {\r\n        int cnt=0;\r\n        while(!left.empty() and k>0){\r\n            left.pop();\r\n            cnt++;\r\n            k--;\r\n        }\r\n        return cnt;\r\n    }\r\n\r\n    string cursorLeft(int k) {\r\n        while(!left.empty() and k>0){\r\n            char c = left.top();left.pop();\r\n            right.push(c);\r\n            k--;\r\n        }\r\n        // returning the last min(10, len) characters to the left of the cursor\r\n        return cursorShiftString();\r\n    }\r\n\r\n    string cursorRight(int k) {\r\n        while(!right.empty() and k>0){\r\n            char c = right.top();right.pop();\r\n            left.push(c);\r\n            k--;\r\n        }\r\n        // returning the last min(10, len) characters to the left of the cursor\r\n        return cursorShiftString();\r\n    }\r\n\r\n    // function to return the last min(10, len) characters to the left of the cursor\r\n    string cursorShiftString(){\r\n        string rtn = \"\";\r\n        int cnt=10;\r\n        while(!left.empty() and cnt>0){\r\n            char c = left.top();left.pop();\r\n            rtn += c;\r\n            cnt--;\r\n        }\r\n        reverse(rtn.begin(),rtn.end());\r\n        for(int i=0;i<rtn.size();i++){\r\n            left.push(rtn[i]);\r\n        }\r\n        return rtn;\r\n    }\r\n};",
    "python": "# Runtime: 1865 ms (Top 50.36%) | Memory: 27.8 MB (Top 82.98%)\r\nclass TextEditor:\r\n\r\n    def __init__(self):\r\n        self.s = ''\r\n        self.cursor = 0\r\n\r\n    def addText(self, text: str) -> None:\r\n        self.s = self.s[:self.cursor] + text + self.s[self.cursor:]\r\n        self.cursor += len(text)\r\n\r\n    def deleteText(self, k: int) -> int:\r\n        new_cursor = max(0, self.cursor - k)\r\n        noOfChars = k if self.cursor - k >= 0 else self.cursor\r\n        self.s = self.s[:new_cursor] + self.s[self.cursor:]\r\n        self.cursor = new_cursor\r\n        return noOfChars\r\n\r\n    def cursorLeft(self, k: int) -> str:\r\n        self.cursor = max(0, self.cursor - k)\r\n        start = max(0, self.cursor-10)\r\n        return self.s[start:self.cursor]\r\n\r\n    def cursorRight(self, k: int) -> str:\r\n        self.cursor = min(len(self.s), self.cursor + k)\r\n        start = max(0, self.cursor - 10)\r\n        return self.s[start:self.cursor]",
    "java": "// Runtime: 380 ms (Top 41.73%) | Memory: 138.9 MB (Top 59.95%)\r\nclass TextEditor {\r\n    StringBuilder res;\r\n    int pos=0;\r\n\r\n    public TextEditor() {\r\n        res = new StringBuilder();\r\n    }\r\n\r\n    public void addText(String text) {\r\n        res.insert(pos,text);\r\n        pos += text.length();\r\n    }\r\n\r\n    public int deleteText(int k) {\r\n        int tmp = pos;\r\n        pos -= k;\r\n        if(pos<0) pos=0;\r\n        res.delete(pos,tmp);\r\n        return tmp-pos;\r\n    }\r\n\r\n    public String cursorLeft(int k) {\r\n        pos-=k;\r\n        if(pos<0) pos = 0;\r\n        if(pos<10) return res.substring(0,pos);\r\n        return res.substring(pos-10,pos);\r\n    }\r\n\r\n    public String cursorRight(int k) {\r\n        pos+=k;\r\n        if(pos>res.length()) pos = res.length();\r\n        if(pos<10) return res.substring(0,pos);\r\n        return res.substring(pos-10,pos);\r\n    }\r\n}",
    "javascript": "\r\n\r\nvar TextEditor = function() {\r\n    this.forward = [];\r\n    this.backward = [];\r\n};\r\n\r\n/** \r\n * @param {string} text\r\n * @return {void}\r\n */\r\nTextEditor.prototype.addText = function(text) {\r\n    for (let letter of text) {\r\n        this.forward.push(letter);\r\n    }\r\n};\r\n\r\n/** \r\n * @param {number} k\r\n * @return {number}\r\n */\r\nTextEditor.prototype.deleteText = function(k) {\r\n    let deleted = 0;\r\n    while (this.forward.length && deleted < k) {\r\n        this.forward.pop();\r\n        deleted++;\r\n    }\r\n    return deleted;\r\n};\r\n\r\n/** \r\n * @param {number} k\r\n * @return {string}\r\n */\r\nTextEditor.prototype.cursorLeft = function(k) {\r\n    let moved = 0;\r\n    while (this.forward.length && moved < k) {\r\n        this.backward.push(this.forward.pop());\r\n        moved++;\r\n    }\r\n    return toTheLeft(this.forward);\r\n};\r\n\r\n/** \r\n * @param {number} k\r\n * @return {string}\r\n */\r\nTextEditor.prototype.cursorRight = function(k) {\r\n    let moved = 0;\r\n    while (moved < k && this.backward.length) {\r\n        this.forward.push(this.backward.pop());\r\n        moved++;\r\n    }\r\n    return toTheLeft(this.forward);\r\n};\r\n\r\n\r\nfunction toTheLeft (arr) {\r\n    let letters = [];\r\n    for (let i = Math.max(0, arr.length - 10); i < arr.length; i++) {\r\n        letters.push(arr[i]);\r\n    }\r\n    let res = letters.join(\"\");\r\n    return res; \r\n}"
  }
}
