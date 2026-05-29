export default {
  "id": 519,
  "name": "Random Flip Matrix",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/random-flip-matrix",
  "relativeDir": "R/Random Flip Matrix",
  "slug": "0519-random-flip-matrix",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 26,
    "java": 45,
    "python": 18,
    "javascript": 30
  },
  "languages": {
    "cpp": "// Runtime: 38 ms (Top 34.69%) | Memory: 18.8 MB (Top 82.14%)\r\nclass Solution {\r\npublic:\r\n  unordered_map<int,int>table;\r\n  int y, x;\r\n\r\n  Solution(int m, int n) {\r\n    y = m, x = n;\r\n  }\r\n\r\n  vector<int> flip() {\r\n    int Y = rand() % y, X = rand() % x, id;\r\n\r\n    while(table. count(id = (Y << 14) + X )){\r\n      if(++X == x) X = 0, Y++;\r\n      if(Y == y) Y = 0;\r\n    }\r\n\r\n    table[id] = 1;\r\n    return {Y, X};\r\n  }\r\n\r\n  void reset() {\r\n    table.clear();\r\n  }\r\n};",
    "python": "from random import randint\r\n\r\nclass Solution:\r\n\r\n    def __init__(self, m: int, n: int):\r\n        self.m = m\r\n        self.n = n\r\n        self.ones = set()\r\n\r\n    def flip(self) -> List[int]:\r\n        i, j = randint(0, self.m - 1), randint(0, self.n - 1)\r\n        while (i, j) in self.ones:\r\n            i, j = randint(0, self.m - 1), randint(0, self.n - 1)\r\n        self.ones.add((i, j))\r\n        return [i, j]\r\n\r\n    def reset(self) -> None:\r\n        self.ones.clear()",
    "java": "// Runtime: 45 ms (Top 62.26%) | Memory: 50.7 MB (Top 63.21%)\r\n// Swap Tail Element Solution\r\n// 1. Get a random number between [0, size-1]\r\n// 2. size - 1\r\n// 3. Get the index in map by the random map\r\n// 4. Update the flipped element with the tail element.\r\n// Time complexity: O(1) to init, flip, and reset\r\n// Space complexity: O(K), where K is the times of flip calls.\r\nclass Solution {\r\n    private final int M, N, CAPACITY;\r\n    private int size;\r\n    private Random random;\r\n    private Map<Integer, Integer> map;\r\n\r\n    public Solution(int m, int n) {\r\n        M = m;\r\n        N = n;\r\n        CAPACITY = m * n;\r\n        size = CAPACITY;\r\n        random = new Random();\r\n        map = new HashMap<>();\r\n    }\r\n\r\n    public int[] flip() {\r\n        if (size <= 0) return new int[]{-1, -1}; // or throw exception.\r\n        Integer rand = random.nextInt(size);\r\n        size--;\r\n        int idx = map.getOrDefault(rand, rand);\r\n        Integer tail = map.getOrDefault(size, size);\r\n        map.put(rand, tail);\r\n        return new int[]{idx / N, idx % N};\r\n    }\r\n\r\n    public void reset() {\r\n        map = new HashMap();\r\n        size = CAPACITY;\r\n    }\r\n}\r\n\r\n/**\r\n * Your Solution object will be instantiated and called as such:\r\n * Solution obj = new Solution(m, n);\r\n * int[] param_1 = obj.flip();\r\n * obj.reset();\r\n */",
    "javascript": "// Runtime: 80 ms (Top 83.33%) | Memory: 61.30 MB (Top 16.67%)\r\n\r\nvar Solution = function(m, n) {\r\n   this.length = m * n;\r\n   this.range = new Array(this.length);\r\n   this.n = n;\r\n   this.pointer = 0;    \r\n};\r\n\r\nSolution.prototype.flip = function() {\r\n    let limit = this.length - this.pointer - 1;\r\n    let index = ~~(Math.random() * limit) + this.pointer;\r\n\r\n    if(this.range[index] === undefined) this.range[index] = index;\r\n    if(this.range[this.pointer] === undefined) this.range[this.pointer] = this.pointer;\r\n\r\n    let tmp = this.range[index];\r\n    this.range[index] = this.range[this.pointer];\r\n    this.range[this.pointer] = tmp;\r\n\r\n    let a = ~~(this.range[this.pointer] / this.n);\r\n    let b = this.range[this.pointer] % this.n;\r\n\r\n    this.pointer++;\r\n    return[a, b];\r\n};\r\n\r\nSolution.prototype.reset = function() {\r\n    this.pointer = 0;\r\n};"
  }
}
