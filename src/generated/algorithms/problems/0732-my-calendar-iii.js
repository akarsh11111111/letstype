export default {
  "id": 732,
  "name": "My Calendar III",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/my-calendar-iii",
  "relativeDir": "M/My Calendar III",
  "slug": "0732-my-calendar-iii",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 17,
    "java": 30,
    "python": 18,
    "javascript": 58
  },
  "languages": {
    "cpp": "class MyCalendarThree {\r\npublic:\r\n    map<int,int>mp;\r\n    MyCalendarThree() {   \r\n    }\r\n    int book(int start, int end) {\r\n        mp[start]++;\r\n        mp[end]--;\r\n        int sum = 0;\r\n        int ans = 0;\r\n        for(auto it = mp.begin(); it != mp.end(); it++){\r\n            sum += it->second;\r\n            ans = max(ans,sum);\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "import bisect\r\nclass MyCalendarThree:\r\n\r\n    def __init__(self):\r\n        self.events = []        \r\n\r\n    def book(self, start: int, end: int) -> int:\r\n        L, R = 1, 0\r\n        bisect.insort(self.events, (start, L))\r\n        bisect.insort(self.events, (end, R))\r\n        res = 0\r\n        cnt = 0\r\n        for _, state in self.events:\r\n            #if an interval starts, increase the counter\r\n            #othewise, decreas the counter\r\n            cnt += 1 if state == L else -1\r\n            res = max(res, cnt)\r\n        return res",
    "java": "// Runtime: 197 ms (Top 36.54%) | Memory: 54.3 MB (Top 59.44%)\r\nclass MyCalendarThree {\r\n\r\n    TreeMap<Integer, Integer> map;\r\n    public MyCalendarThree() {\r\n        map = new TreeMap<>();\r\n    }\r\n\r\n    public int book(int start, int end) {\r\n        if(map.isEmpty()){\r\n            map.put(start, 1);\r\n            map.put(end,-1);\r\n            return 1;\r\n        }\r\n\r\n        //upvote if you like the solution\r\n\r\n        map.put(start, map.getOrDefault(start,0)+1);\r\n        map.put(end, map.getOrDefault(end,0)-1);\r\n\r\n        int res = 0;\r\n        int sum = 0;\r\n        for(Map.Entry<Integer, Integer> e: map.entrySet()){\r\n            sum += e.getValue();\r\n            res = Math.max(res,sum);\r\n        }\r\n\r\n        return res;\r\n    }\r\n}",
    "javascript": "var MyCalendarThree = function() {\r\n    this.intersections = [];\r\n    this.kEvents = 0;\r\n    \r\n};\r\n\r\n/** \r\n * @param {number} start \r\n * @param {number} end\r\n * @return {number}\r\n */\r\nMyCalendarThree.prototype.book = function(start, end) {\r\n    let added = false;\r\n    for(let i = 0; i < this.intersections.length; i++) {\r\n        const a = this.intersections[i];\r\n        if(end <= a.start) {\r\n            this.intersections.splice(i, 0, {start, end, count: 1});\r\n            this.kEvents = Math.max(this.kEvents, 1);\r\n            this.added = true;\r\n            break;\r\n        }\r\n        if(start < a. start) {\r\n            this.intersections.splice(i, 0, {start, end: a.start, count: 1});\r\n            i++;\r\n            start = a.start;\r\n        }\r\n        if(a.start < start && start < a.end ) {\r\n            this.intersections.splice(i, 0, {start: a.start, end: start, count: a.count});\r\n            i++;\r\n            a.start = start;\r\n        }\r\n        if(end < a.end) {\r\n            this.intersections.splice(i + 1, 0, {start: end, end: a.end, count: a.count});\r\n            a.count++;\r\n            a.end = end;\r\n            this.kEvents = Math.max(this.kEvents, a.count);\r\n            this.added = true;\r\n            break;\r\n        }\r\n        if(end === a.end) {\r\n            a.count++;\r\n            a.end = end;\r\n            this.kEvents = Math.max(this.kEvents, a.count); \r\n            this.added = true;\r\n            break;\r\n        } \r\n        if(a.start === start && a.end < end ) {\r\n            a.count++;\r\n            this.kEvents = Math.max(this.kEvents, a.count);\r\n            start = a.end;\r\n        }\r\n    }\r\n    if(!added) {\r\n        this.intersections.push({start, end, count: 1});\r\n        this.kEvents = Math.max(this.kEvents, 1);\r\n    }\r\n    return this.kEvents;\r\n};"
  }
}
