export default {
  "id": 284,
  "name": "Peeking Iterator",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/peeking-iterator",
  "relativeDir": "P/Peeking Iterator",
  "slug": "0284-peeking-iterator",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 54,
    "java": 29,
    "python": 17,
    "javascript": 19
  },
  "languages": {
    "cpp": "// Runtime: 3 ms (Top 82.50%) | Memory: 7.5 MB (Top 36.47%)\r\n/*\r\n * Below is the interface for Iterator, which is already defined for you.\r\n * **DO NOT** modify the interface for Iterator.\r\n *\r\n * class Iterator {\r\n * struct Data;\r\n * Data* data;\r\n * public:\r\n * Iterator(const vector<int>& nums);\r\n * Iterator(const Iterator& iter);\r\n *\r\n * // Returns the next element in the iteration.\r\n * int next();\r\n *\r\n * // Returns true if the iteration has more elements.\r\n * bool hasNext() const;\r\n * };\r\n */\r\n\r\nclass PeekingIterator : public Iterator {\r\npublic:\r\n    int _nextVal;\r\n    bool _hasNext;\r\n    PeekingIterator(const vector<int>& nums) : Iterator(nums) {\r\n        // Initialize any member here.\r\n        // **DO NOT** save a copy of nums and manipulate it directly.\r\n        // You should only use the Iterator interface methods.\r\n        _nextVal = 0;\r\n        _hasNext = Iterator::hasNext();\r\n        if (_hasNext)\r\n            _nextVal = Iterator::next();\r\n    }\r\n\r\n    // Returns the next element in the iteration without advancing the iterator.\r\n    int peek() {\r\n        return (_nextVal);\r\n    }\r\n\r\n    // hasNext() and next() should behave the same as in the Iterator interface.\r\n    // Override them if needed.\r\n    int next() {\r\n        int tmp = _nextVal;\r\n\r\n        _hasNext = Iterator::hasNext();\r\n        if (_hasNext)\r\n            _nextVal = Iterator::next();\r\n        return (tmp);\r\n    }\r\n\r\n    bool hasNext() const {\r\n        return (_hasNext);\r\n    }\r\n};",
    "python": "// Runtime: 44 ms (Top 25.31%) | Memory: 17.60 MB (Top 8.9%)\r\n\r\nclass PeekingIterator:\r\n    def __init__(self, iterator):\r\n        self.iterator = iterator\r\n        self.buffer = self.iterator.next() if self.iterator.hasNext() else None\r\n        \r\n    def peek(self):\r\n        return self.buffer\r\n        \r\n    def next(self):\r\n        tmp = self.buffer\r\n        self.buffer = self.iterator.next() if self.iterator.hasNext() else None\r\n        return tmp\r\n        \r\n    def hasNext(self):\r\n        return self.buffer != None",
    "java": "// Java Iterator interface reference:\r\n// https://docs.oracle.com/javase/8/docs/api/java/util/Iterator.html\r\n\r\nclass PeekingIterator implements Iterator<Integer> {\r\n    Queue<Integer> q;\r\n\tpublic PeekingIterator(Iterator<Integer> iterator) {\r\n\t    // initialize any member here.\r\n\t    q= new LinkedList<>();\r\n        while(iterator.hasNext())\r\n          q.add(iterator.next());  \r\n\t}\r\n\t\r\n    // Returns the next element in the iteration without advancing the iterator.\r\n\tpublic Integer peek() {\r\n        return q.peek();\r\n\t}\r\n\t\r\n\t// hasNext() and next() should behave the same as in the Iterator interface.\r\n\t// Override them if needed.\r\n\t@Override\r\n\tpublic Integer next() {\r\n\t    return q.remove();\r\n\t}\r\n\t\r\n\t@Override\r\n\tpublic boolean hasNext() {\r\n\t    return q.size()!=0;\r\n\t}\r\n}",
    "javascript": "var PeekingIterator = function(iterator) {\r\n    this.iterator = iterator\r\n    this.curr = iterator.next()\r\n\r\n};\r\n\r\nPeekingIterator.prototype.peek = function() {\r\n    return this.curr\r\n};\r\n\r\nPeekingIterator.prototype.next = function() {\r\n    let temp = this.curr\r\n    this.curr = this.iterator.next()\r\n    return temp\r\n};\r\n\r\nPeekingIterator.prototype.hasNext = function() {\r\n    return this.curr > 0   // the input iterator return -100000000 when next() after it run out of members, instead of return undefined.\r\n};"
  }
}
