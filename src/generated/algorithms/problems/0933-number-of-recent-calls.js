export default {
  "id": 933,
  "name": "Number of Recent Calls",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/number-of-recent-calls",
  "relativeDir": "N/Number of Recent Calls",
  "slug": "0933-number-of-recent-calls",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 16,
    "java": 24,
    "python": 18,
    "javascript": 13
  },
  "languages": {
    "cpp": "// Runtime: 319 ms (Top 23.25%) | Memory: 57.2 MB (Top 92.90%)\r\nclass RecentCounter {\r\npublic:\r\n    queue<int> q;\r\n    RecentCounter() {\r\n    }\r\n\r\n    int ping(int t) {\r\n        q.push(t);\r\n        int x = q.front();\r\n        while(x < t-3000){\r\n            q.pop(); x = q.front();\r\n        }\r\n        return q.size();\r\n    }\r\n};",
    "python": "# Runtime: 676 ms (Top 17.97%) | Memory: 19.4 MB (Top 70.89%)\r\nclass RecentCounter:\r\n    # Here we use list to store ping details.\r\n    def __init__(self):\r\n        self.store = []\r\n\r\n    def ping(self, t: int) -> int:\r\n        # Basically what we need to return is how many pings fall in the range(t-3000, t).\r\n        # So here we append every t. Now in loop how many t from left side < t-3000, we just pop them\r\n        # and return the length of the list, which'd contain elements in range(t-3000, t).\r\n        # And since every t is going to greater than previous, we don't need to think about duplicates.\r\n\r\n        self.store.append(t)\r\n\r\n        while self.store[0] < t-3000:\r\n            self.store.pop(0)\r\n\r\n        return len(self.store)",
    "java": "// Runtime: 1373 ms (Top 10.1%) | Memory: 52.32 MB (Top 27.9%)\r\n\r\nclass RecentCounter {\r\n    ArrayList<Integer> calls ;\r\n    public RecentCounter() {\r\n        calls = new ArrayList<Integer>();\r\n        }\r\n    \r\n    public int ping(int t) {\r\n        calls.add(t);\r\n        int count = 0;\r\n        for(Integer call:calls){\r\n            if( t-call<=3000) count++;\r\n        }\r\n        return count;\r\n        \r\n    }\r\n}\r\n\r\n/**\r\n * Your RecentCounter object will be instantiated and called as such:\r\n * RecentCounter obj = new RecentCounter();\r\n * int param_1 = obj.ping(t);\r\n */",
    "javascript": "// Runtime: 307 ms (Top 78.95%) | Memory: 57.2 MB (Top 34.87%)\r\n\r\nvar RecentCounter = function() {\r\n    this.arr = [];\r\n};\r\n\r\nRecentCounter.prototype.ping = function(t) {\r\n    this.arr.push(t);\r\n    while(t > this.arr[0]+3000){\r\n        this.arr.shift();\r\n    }\r\n    return this.arr.length;\r\n};"
  }
}
