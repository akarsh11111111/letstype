export default {
  "id": 729,
  "name": "My Calendar I",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/my-calendar-i",
  "relativeDir": "M/My Calendar I",
  "slug": "0729-my-calendar-i",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 17,
    "python": 10,
    "javascript": 13
  },
  "languages": {
    "cpp": "// Runtime: 195 ms (Top 40.35%) | Memory: 37.6 MB (Top 80.95%)\r\nclass MyCalendar {\r\npublic:\r\n    vector<pair<int,int>>cal;\r\n    MyCalendar() {\r\n\r\n    }\r\n\r\n    bool book(int start, int end) {\r\n        for(int i=0;i<cal.size();i++){\r\n            if(end<=cal[i].first || start>=cal[i].second)continue;\r\n            else return false;\r\n        }\r\n        cal.push_back({start,end});\r\n        return true;\r\n    }\r\n};",
    "python": "class MyCalendar(object):\r\n    def __init__(self):\r\n        self.booking = []\r\n\r\n    def book(self, start, end):\r\n        for i, j in self.booking:\r\n            if i < end and start < j:\r\n                return False\r\n        self.booking.append((start, end))\r\n        return True",
    "javascript": "// Runtime: 346 ms (Top 24.85%) | Memory: 51 MB (Top 48.26%)\r\n// Brute Force => T.C: O(n^2) | S.C: O(n);\r\nvar MyCalendar = function() {\r\n  this.val = [];\r\n};\r\n\r\nMyCalendar.prototype.book = function(start, end) {\r\n  for (let book of this.val) {\r\n    if (end > book[0] && start < book[1]) return false;\r\n  }\r\n  this.val.push([start, end]);\r\n  return true;\r\n};"
  }
}
