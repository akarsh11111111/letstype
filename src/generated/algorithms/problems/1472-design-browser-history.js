export default {
  "id": 1472,
  "name": "Design Browser History",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/design-browser-history",
  "relativeDir": "D/Design Browser History",
  "slug": "1472-design-browser-history",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 37,
    "java": 39,
    "python": 37,
    "javascript": 34
  },
  "languages": {
    "cpp": "// Runtime: 265 ms (Top 35.36%) | Memory: 60.7 MB (Top 39.67%)\r\nclass Node{\r\npublic:\r\n    string url;\r\n    Node* next;\r\n    Node* back;\r\n    Node(string s){\r\n        url = s;\r\n        next = NULL;\r\n        back = NULL;\r\n    }\r\n};\r\n\r\nclass BrowserHistory {\r\n    Node* head;\r\npublic:\r\n    BrowserHistory(string homepage) {\r\n        head = new Node(homepage);\r\n    }\r\n\r\n    void visit(string url) {\r\n        Node* ptr = new Node(url);\r\n        head->next = ptr;\r\n        ptr->back = head;\r\n        head = ptr;\r\n    }\r\n\r\n    string back(int steps) {\r\n        while(head->back && steps--){ head = head->back; }\r\n        return head->url;\r\n    }\r\n\r\n    string forward(int steps) {\r\n        while(head->next && steps--){ head = head->next; }\r\n        return head->url;\r\n    }\r\n};",
    "python": "# Runtime: 702 ms (Top 9.12%) | Memory: 16.8 MB (Top 36.03%)\r\nclass Node:\r\n    def __init__(self, val):\r\n        self.val = val\r\n        self.prev = None\r\n        self.next = None\r\n\r\nclass BrowserHistory:\r\n    def __init__(self, web):\r\n        self.Node = Node(web)\r\n        self.ptr = self.Node\r\n\r\n    def visit(self, web):\r\n        self.newWeb = Node(web)\r\n        self.newWeb.prev = self.ptr\r\n        self.ptr.next = self.newWeb\r\n        self.ptr = self.ptr.next\r\n\r\n    def back(self, steps):\r\n        i = 0\r\n        while i < steps:\r\n            if self.ptr.prev:\r\n                self.ptr = self.ptr.prev\r\n            else:\r\n                break\r\n            i += 1\r\n        return self.ptr.val\r\n\r\n    def forward(self, steps):\r\n        i = 0\r\n        while i < steps:\r\n            if self.ptr.next:\r\n                self.ptr = self.ptr.next\r\n            else:\r\n                break\r\n            i += 1\r\n        return self.ptr.val",
    "java": "// Runtime: 122 ms (Top 39.97%) | Memory: 81.7 MB (Top 80.48%)\r\nclass BrowserHistory {\r\n    int current;\r\n    ArrayList<String> history;\r\n    public BrowserHistory(String homepage) {\r\n        this.history = new ArrayList<>();\r\n        history.add(homepage);\r\n        this.current = 0;\r\n    }\r\n\r\n    public void visit(String url) {\r\n        while (history.size()-1 > current) {//delete forward history\r\n            history.remove(history.size()-1);//which means delete everything beyond our current website\r\n        }\r\n        history.add(url);\r\n        ++current;\r\n    }\r\n\r\n    public String back(int steps) {\r\n        if (steps>current) current = 0;//if we can't get enough back, we return first thing in our history\r\n        else current -= steps;//if there will be no arrayindexoutofrange error, go back\r\n        return history.get(current);//return current webpage\r\n    }\r\n\r\n    public String forward(int steps) {\r\n        //if we are going to move more than our arraylist, then we will return the last element\r\n        if (steps+current>=history.size()) current = history.size() - 1;\r\n        else current += steps;//if there will be no arrayindexoutofrange error, go forward!\r\n        return history.get(current);//return the current webpage\r\n    }\r\n}\r\n\r\n/**\r\n * Your BrowserHistory object will be instantiated and called as such:\r\n * BrowserHistory obj = new BrowserHistory(homepage);\r\n * obj.visit(url);\r\n * String param_2 = obj.back(steps);\r\n * String param_3 = obj.forward(steps);\r\n */",
    "javascript": "var BrowserHistory = function(homepage) {\r\n    this.page = {\r\n        url: homepage,\r\n        back: null,\r\n        next: null,\r\n    };\r\n};\r\n\r\nBrowserHistory.prototype.visit = function(url) {\r\n    this.page.next = {\r\n        url,\r\n        back: this.page,\r\n        next: null\r\n    };\r\n    this.page = this.page.next;\r\n};\r\n\r\nBrowserHistory.prototype.back = function(steps) {\r\n    while (this.page.back && steps) {\r\n        this.page = this.page.back;\r\n        steps--;\r\n    }\r\n    \r\n    return this.page.url;\r\n};\r\n\r\nBrowserHistory.prototype.forward = function(steps) {\r\n    while (this.page.next && steps) {\r\n        this.page = this.page.next;\r\n        steps--;\r\n    }\r\n    \r\n    return this.page.url;\r\n};"
  }
}
