export default {
  "id": 1046,
  "name": "Last Stone Weight",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/last-stone-weight",
  "relativeDir": "L/Last Stone Weight",
  "slug": "1046-last-stone-weight",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 12,
    "java": 15,
    "python": 15,
    "javascript": 11
  },
  "languages": {
    "cpp": "// Runtime: 4 ms (Top 39.06%) | Memory: 7.6 MB (Top 77.62%)\r\nclass Solution {\r\npublic:\r\n    int lastStoneWeight(vector<int>& stones) {\r\n        while(stones.size()>1){\r\n            sort(stones.begin(), stones.end(), greater<int>());\r\n            stones[1] = (stones[0]-stones[1]);\r\n            stones.erase(stones.begin());\r\n        }\r\n        return stones[0];\r\n    }\r\n};",
    "python": "# Runtime: 59 ms (Top 27.86%) | Memory: 13.9 MB (Top 62.57%)\r\nclass Solution:\r\n    def lastStoneWeight(self, stones: List[int]) -> int:\r\n        stones = [-x for x in stones]\r\n        heapq.heapify(stones)\r\n\r\n        while len(stones) > 1:\r\n            mx1 = -heapq.heappop(stones)\r\n            mx2 = -heapq.heappop(stones)\r\n            if mx1 - mx2:\r\n                heapq.heappush(stones, -(mx1 - mx2))\r\n\r\n        if len(stones):\r\n            return -heapq.heappop(stones)\r\n        return 0",
    "java": "// Runtime: 3 ms (Top 42.30%) | Memory: 40.7 MB (Top 84.83%)\r\nclass Solution {\r\n    public int lastStoneWeight(int[] stones) {\r\n        PriorityQueue<Integer> pq = new PriorityQueue<>((x,y) -> Integer.compare(y,x));\r\n        for (int i = 0; i < stones.length; i++) {\r\n            pq.add(stones[i]);\r\n        }\r\n        while (pq.size() > 1) {\r\n            int r1 = pq.poll();\r\n            int r2 = pq.poll();\r\n            if (r1 != r2) pq.add(r1 - r2);\r\n        }\r\n        return (pq.isEmpty()) ? 0 : pq.poll();\r\n    }\r\n}",
    "javascript": "var lastStoneWeight = function(stones) {\r\n    let first = 0, second = 0;\r\n    stones.sort((a,b) => a - b);\r\n    while(stones.length > 1) {\r\n        first = stones.pop();\r\n        second = stones.pop();\r\n        stones.push(first - second);\r\n        stones.sort((a,b) => a - b);\r\n    }\r\n    return stones[0];\r\n};"
  }
}
