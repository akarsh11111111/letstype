export default {
  "id": 1656,
  "name": "Design an Ordered Stream",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/design-an-ordered-stream",
  "relativeDir": "D/Design an Ordered Stream",
  "slug": "1656-design-an-ordered-stream",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 22,
    "python": 23,
    "javascript": 19
  },
  "languages": {
    "cpp": "class OrderedStream {\r\npublic:\r\n    int pointer = 0;\r\n    vector<string>stream;\r\n    \r\n    OrderedStream(int n) {\r\n        stream.resize(n);\r\n    }\r\n    \r\n    vector<string> insert(int idKey, string value) {\r\n        vector<string>ans;\r\n        \r\n        stream[idKey-1] = value;\r\n        \r\n        while(pointer<stream.size() and stream[pointer] != \"\"){\r\n            ans.push_back(stream[pointer]);\r\n            pointer++;\r\n        }\r\n        \r\n        return ans;\r\n    }\r\n};",
    "python": "class OrderedStream:\r\n\r\n    def __init__(self, n: int):\r\n        self.seen = {}\r\n        self.ptr = 1\r\n\r\n    def insert(self, id: int, value: str) -> List[str]:\r\n        seen, ptr = self.seen, self.ptr\r\n        \r\n        seen[id] = value\r\n        result = []\r\n        while ptr in seen:\r\n            result.append(seen[ptr])\r\n            del seen[ptr]\r\n            ptr += 1\r\n        \r\n        self.ptr = ptr\r\n        return result\r\n\r\n\r\n# Your OrderedStream object will be instantiated and called as such:\r\n# obj = OrderedStream(n)\r\n# param_1 = obj.insert(id,value)",
    "javascript": "// Runtime: 154 ms (Top 77.78%) | Memory: 53.40 MB (Top 88.89%)\r\n\r\nvar OrderedStream = function(n) {\r\n    this.pointer = 0;\r\n    this.streamArray = new Array(n).fill(undefined);\r\n};\r\nOrderedStream.prototype.insert = function(idKey, value) {\r\n    this.streamArray[idKey-1] = value;\r\n    if(this.streamArray[this.pointer] === undefined){\r\n        return [];\r\n    }else{\r\n        const result = [];\r\n        while(this.streamArray[this.pointer] !== undefined){\r\n            result.push(this.streamArray[this.pointer]);\r\n            this.pointer++;\r\n        }\r\n        return result;\r\n    }\r\n};"
  }
}
