export default {
  "id": 1387,
  "name": "Sort Integers by The Power Value",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/sort-integers-by-the-power-value",
  "relativeDir": "S/Sort Integers by The Power Value",
  "slug": "1387-sort-integers-by-the-power-value",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 32,
    "java": 26,
    "python": 24,
    "javascript": 77
  },
  "languages": {
    "cpp": "// Runtime: 93 ms (Top 57.79%) | Memory: 12.6 MB (Top 53.41%)\r\nclass Solution {\r\npublic:\r\n    int getPower(int num) {\r\n        if (num == 1)\r\n            return 0;\r\n\r\n        int res = 0;\r\n        if (num %2 == 0)\r\n            res += getPower(num/2);\r\n        else\r\n            res += getPower(3*num + 1);\r\n        res++;\r\n        return res;\r\n    }\r\n\r\n    int getKth(int lo, int hi, int k) {\r\n        multimap<int,int> um;\r\n        for (int i = lo; i <= hi; i++) {\r\n            um.insert({getPower(i), i});\r\n        }\r\n        int cnt = 1;\r\n        int res = 0;\r\n        for (auto iter = um.begin(); iter != um.end(); iter++) {\r\n            if (cnt == k) {\r\n                res = iter->second;\r\n            }\r\n            cnt++;\r\n        }\r\n        return res;\r\n    }\r\n};",
    "python": "// Runtime: 156 ms (Top 74.13%) | Memory: 16.70 MB (Top 42.43%)\r\n\r\nimport heapq\r\nclass Solution:\r\n    def power(self,n):\r\n        if n in self.dic:\r\n            return self.dic[n]\r\n        if n % 2:\r\n            self.dic[n] = self.power(3 * n + 1) + 1\r\n        else:\r\n            self.dic[n] = self.power(n // 2) + 1\r\n        return self.dic[n]    \r\n    def getKth(self, lo: int, hi: int, k: int) -> int:\r\n        self.dic = {1:0}\r\n        for i in range(lo,hi+1):\r\n            self.power(i)\r\n                        \r\n        lst = [(self.dic[i],i) for i in range(lo,hi+1)]\r\n        heapq.heapify(lst)\r\n        \r\n        for i in range(k):\r\n            ans = heapq.heappop(lst)\r\n        \r\n        return ans[1]",
    "java": "class Solution {\r\n    public int getKth(int lo, int hi, int k) {\r\n\r\n        int p = 0;\r\n        int[][] powerArr = new int[hi - lo + 1][2];\r\n\r\n        Map<Integer, Integer> memo = new HashMap<>();\r\n        for (int i = lo; i <= hi; i++)\r\n            powerArr[p++] = new int[]{i, getPower(i, memo)};\r\n\r\n        Arrays.sort(powerArr, (a1, a2) -> a1[1] - a2[1] == 0 ? a1[0] - a2[0] : a1[1] - a2[1]);\r\n\r\n        return powerArr[k - 1][0];\r\n    }\r\n\r\n    private int getPower(int i, Map<Integer, Integer> memo) {\r\n        if (memo.containsKey(i)) return memo.get(i);\r\n\r\n        if (i == 1) return 0;\r\n\r\n        int power = 1 + (i % 2 == 0 ? getPower(i / 2, memo) : getPower(i * 3 + 1, memo));\r\n\r\n        memo.put(i, power);\r\n        return power;\r\n    }\r\n}",
    "javascript": "var getKth = function(lo, hi, k) {\r\n    const dp = new Map();\r\n    dp.set(1, 0);\r\n    const powerVals = [];\r\n    for(let num = lo; num <= hi; ++num) {\r\n        powerVals.push([num, findPowerVal(num, dp)]);\r\n    }\r\n    const heap = new MinHeap();\r\n    heap.build(powerVals);\r\n    let top;\r\n    while(k--) {    // O(klogn)\r\n        top = heap.removeTop();\r\n    }\r\n    return top[0];\r\n};\r\n\r\nfunction findPowerVal(num, dp) {\r\n    if(dp.has(num)) {\r\n        return dp.get(num);\r\n    }\r\n    let powerVal;\r\n    if(num % 2 === 0) {\r\n        powerVal = findPowerVal(num/2, dp) + 1;\r\n    } else {\r\n        powerVal = findPowerVal(3 * num + 1, dp) + 1;\r\n    }\r\n    dp.set(num, powerVal);\r\n    return dp.get(num);\r\n}\r\n\r\nclass Heap {\r\n    constructor(property) {\r\n        this.data = [];\r\n    }\r\n    size() {\r\n        return this.data.length;\r\n    }\r\n    build(arr) {    // O(n)\r\n        this.data = [...arr];\r\n        for(let i = Math.floor((this.size() - 1)/2); i >= 0; --i) {\r\n            this.heapify(i);\r\n        }\r\n    }\r\n    heapify(i) {    // O(logn)\r\n        const left = 2 * i + 1, right = 2 * i + 2;\r\n        let p = i;\r\n        if(left < this.size() && this.compare(left, p)) {\r\n            p = left;\r\n        }\r\n        if(right < this.size() && this.compare(right, p)) {\r\n            p = right;\r\n        }\r\n        if(p !== i) {\r\n            [this.data[p], this.data[i]] = [this.data[i], this.data[p]];\r\n            this.heapify(p);\r\n        }\r\n    }\r\n    removeTop() {   // O(logn)\r\n        if(this.size() === 1) {\r\n            return this.data.pop();\r\n        }\r\n        const top = this.data[0];\r\n        [this.data[0], this.data[this.size() - 1]] = [this.data[this.size() - 1], this.data[0]];\r\n        this.data.pop();\r\n        this.heapify(0);\r\n        return top;\r\n    }\r\n}\r\n\r\nclass MinHeap extends Heap {\r\n    constructor() {\r\n        super();\r\n    }\r\n    compare(a, b) {\r\n        return this.data[a][1] < this.data[b][1] || (this.data[a][1] === this.data[b][1] && this.data[a][0] < this.data[b][0]);\r\n    }\r\n}"
  }
}
