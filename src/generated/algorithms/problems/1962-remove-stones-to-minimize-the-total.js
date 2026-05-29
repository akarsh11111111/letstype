export default {
  "id": 1962,
  "name": "Remove Stones to Minimize the Total",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/remove-stones-to-minimize-the-total",
  "relativeDir": "R/Remove Stones to Minimize the Total",
  "slug": "1962-remove-stones-to-minimize-the-total",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 22,
    "java": 18,
    "python": 8,
    "javascript": 100
  },
  "languages": {
    "cpp": "// Runtime: 888 ms (Top 54.12%) | Memory: 105 MB (Top 66.11%)\r\nclass Solution {\r\npublic:\r\n    int minStoneSum(vector<int>& piles, int k) {\r\n        priority_queue<int> pq;\r\n        int sum = 0, curr;\r\n\r\n        for (auto pile : piles) {\r\n            pq.push(pile);\r\n            sum += pile;\r\n        }\r\n\r\n        while (k--) {\r\n            curr = pq.top();\r\n            pq.pop();\r\n            sum -= curr/2;\r\n            pq.push(curr - curr/2);\r\n        }\r\n\r\n        return sum;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def minStoneSum(self, piles: List[int], k: int) -> int:\r\n        heap = [-p for p in piles]\r\n        heapq.heapify(heap)\r\n        for _ in range(k):\r\n            cur = -heapq.heappop(heap)\r\n            heapq.heappush(heap, -(cur-cur//2))\r\n        return -sum(heap)",
    "java": "// Runtime: 304 ms (Top 95.0%) | Memory: 58.55 MB (Top 23.6%)\r\n\r\nclass Solution {\r\n        public int minStoneSum(int[] A, int k) {\r\n        PriorityQueue<Integer> pq = new PriorityQueue<>((a, b)->b - a);\r\n        int res = 0;\r\n        for (int a : A) {\r\n            pq.add(a);\r\n            res += a;\r\n        }\r\n        while (k-- > 0) {\r\n            int a = pq.poll();\r\n            pq.add(a - a / 2);\r\n            res -= a / 2;\r\n        }\r\n        return res;\r\n    }\r\n}",
    "javascript": "// Runtime: 435 ms (Top 38.09%) | Memory: 65.90 MB (Top 50.0%)\r\n\r\n/**\r\n * @param {number[]} piles\r\n * @param {number} k\r\n * @return {number}\r\n */\r\nvar minStoneSum = function(piles, k) {\r\n    const heap = new Heap(piles);\r\n    \r\n    let i = 0;\r\n    while(i< k){\r\n\t\r\n\t\t//TAKE THE TOP MAX VALUE TO REDUCE\r\n        let top = heap.dequeue();\r\n        let updated = top - (~~(top/2));\r\n\t\t\r\n\t\t//IF AFTER  UPDATION VALUE IS NOT 0 THEN INSERT AGAIN\r\n        if(updated){\r\n            heap.enqueue(updated);\r\n        }\r\n        i++;\r\n    }\r\n    return  heap.getTree().reduce((acc,v)=> acc+v,0);\r\n    \r\n};\r\n\r\n\r\nclass Heap{\r\n    constructor(list = []){\r\n        this.tree = [null];\r\n        this.list = list;\r\n        this.build();\r\n    }\r\n    \r\n    build(){\r\n        for(let priority of this.list)\r\n            this.enqueue(priority);\r\n    }\r\n    \r\n    swap(pos1, pos2){\r\n        [this.tree[pos1], this.tree[pos2]] = [this.tree[pos2],this.tree[pos1]]\r\n    }\r\n    \r\n    enqueue(priority){\r\n        this.tree[this.tree.length] = priority;\r\n        let i = this.tree.length - 1, parent = ~~(i/2);\r\n        while(i > 1){\r\n            if(this.tree[parent] < this.tree[i])\r\n                this.swap(parent,i);\r\n            i = parent;\r\n            parent = ~~(i/2);\r\n        }\r\n    }\r\n    \r\n    dequeue(){\r\n     let size = this.tree.length - 1, pos = 1;\r\n    if(!size) return;\r\n\r\n\r\n    let last = this.tree.pop(), deleted = this.tree[pos];\r\n\r\n\r\n    if(!deleted && last) return last;\r\n\r\n    this.tree[pos] = last;\r\n    this.heapify(pos);\r\n    return deleted;\r\n    }\r\n    \r\n    heapify(pos){\r\n    \r\n        if(pos > this.tree.length) return;\r\n        let leftPos = 2*pos, rightPos = 2*pos +1;\r\n        \r\n        let left = this.tree[leftPos] ? this.tree[leftPos] : -Infinity;\r\n        let right = this.tree[rightPos] ? this.tree[rightPos] : -Infinity, minVal = null, minIndex = null;\r\n        \r\n        if(left > right){\r\n            minVal = left;\r\n            minIndex = leftPos;\r\n        }else{\r\n            minVal = right;\r\n            minIndex = rightPos\r\n        }\r\n        if(this.tree[pos] < minVal){\r\n            this.swap(pos,minIndex);\r\n            this.heapify(minIndex);\r\n        }\r\n        \r\n    }\r\n    \r\n    getTree(){\r\n        return this.tree.slice(1);\r\n    }\r\n    \r\n    getSize(){\r\n        return this.tree.length - 1;\r\n    }\r\n}"
  }
}
