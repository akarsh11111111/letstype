export default {
  "id": 2336,
  "name": "Smallest Number in Infinite Set",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/smallest-number-in-infinite-set",
  "relativeDir": "S/Smallest Number in Infinite Set",
  "slug": "2336-smallest-number-in-infinite-set",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 23,
    "java": 30,
    "python": 15,
    "javascript": 30
  },
  "languages": {
    "cpp": "// Runtime: 176 ms (Top 46.61%) | Memory: 35.5 MB (Top 86.20%)\r\nclass SmallestInfiniteSet {\r\npublic:\r\n    int cur;\r\n    set<int> s;\r\n    SmallestInfiniteSet() {\r\n        cur=1;\r\n    }\r\n\r\n    int popSmallest() {\r\n        if(s.size()){\r\n            int res=*s.begin(); s.erase(res);\r\n            return res;\r\n        }else{\r\n            cur+=1;\r\n            return cur-1;\r\n        }\r\n    }\r\n\r\n    void addBack(int num) {\r\n        if(cur>num) s.insert(num);\r\n    }\r\n};",
    "python": "class SmallestInfiniteSet:\r\n\r\n    def __init__(self):\r\n        self.index = 1\r\n        self.heap = []\r\n\r\n    def popSmallest(self) -> int:\r\n        if self.heap:\r\n            return heapq.heappop(self.heap)\r\n        self.index += 1\r\n        return self.index-1\r\n\r\n    def addBack(self, num: int) -> None:\r\n        if self.index > num and num not in self.heap:\r\n            heapq.heappush(self.heap,num)",
    "java": "class SmallestInfiniteSet {\r\n    private PriorityQueue<Integer> q;\r\n    private int index;\r\n    public SmallestInfiniteSet() {\r\n        q = new PriorityQueue<Integer>();\r\n        index = 1;\r\n    }\r\n    \r\n    public int popSmallest() {\r\n        if (q.size()>0){\r\n            return q.poll();\r\n        }\r\n        return index++;\r\n    }\r\n    \r\n    private boolean is_in_q(int num){\r\n        for(int i : q){\r\n            if (i == num){\r\n                return true;\r\n            }\r\n        }\r\n        return false;\r\n    }\r\n    \r\n    public void addBack(int num) {\r\n        if( num < index && !is_in_q(num)){\r\n            q.add(num);\r\n        }\r\n    }\r\n}",
    "javascript": "// Runtime: 346 ms (Top 36.17%) | Memory: 49.7 MB (Top 80.14%)\r\nvar SmallestInfiniteSet = function() {\r\n    const s = new Set();\r\n    this.s = s;\r\n    for(let i = 1; i <= 1000; i++) s.add(i);\r\n};\r\n\r\n/**\r\n * @return {number}\r\n */\r\nSmallestInfiniteSet.prototype.popSmallest = function() {\r\n    const min = Math.min(...Array.from(this.s));\r\n    this.s.delete(min);\r\n    return min;\r\n};\r\n\r\n/**\r\n * @param {number} num\r\n * @return {void}\r\n */\r\nSmallestInfiniteSet.prototype.addBack = function(num) {\r\n    this.s.add(num);\r\n};\r\n\r\n/**\r\n * Your SmallestInfiniteSet object will be instantiated and called as such:\r\n * var obj = new SmallestInfiniteSet()\r\n * var param_1 = obj.popSmallest()\r\n * obj.addBack(num)\r\n */"
  }
}
