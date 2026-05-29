export default {
  "id": 2233,
  "name": "Maximum Product After K Increments",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-product-after-k-increments",
  "relativeDir": "M/Maximum Product After K Increments",
  "slug": "2233-maximum-product-after-k-increments",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 23,
    "java": 19,
    "python": 14,
    "javascript": 29
  },
  "languages": {
    "cpp": "// Runtime: 613 ms (Top 89.84%) | Memory: 85.9 MB (Top 80.08%)\r\nclass Solution {\r\npublic:\r\n    int maximumProduct(vector<int>& nums, int k) {\r\n\r\n        priority_queue<int, vector<int>, greater<int>> pq(nums.begin(), nums.end());\r\n\r\n        while(k--) {\r\n            int mini = pq.top();\r\n            pq.pop();\r\n            pq.push(mini + 1);\r\n        }\r\n\r\n        long long ans = 1, mod = 1e9+7;\r\n\r\n        while(!pq.empty()) {\r\n            ans = ((ans % mod) * (pq.top() % mod)) % mod;\r\n            pq.pop();\r\n        }\r\n\r\n        return (int)ans;\r\n    }\r\n};",
    "python": "// Runtime: 985 ms (Top 85.38%) | Memory: 27.10 MB (Top 71.7%)\r\n\r\nclass Solution:\r\n    def maximumProduct(self, nums: List[int], k: int) -> int:\r\n        heap = nums.copy()\r\n        heapify(heap)\r\n        for i in range(k):\r\n            t = heappop(heap)\r\n            heappush(heap, t + 1)\r\n        ans = 1\r\n        mod = 1000000007\r\n        for i in heap:\r\n            ans = (ans*i) % mod\r\n        return ans",
    "java": "class Solution {\r\n    public int maximumProduct(int[] nums, int k) {\r\n        \r\n        Queue<Integer> pq = new PriorityQueue<>();\r\n        for (int num : nums)    pq.add(num);\r\n        \r\n        while (k-->0) {\r\n            int top = pq.poll() + 1 ;\r\n            pq.add(top);\r\n        }\r\n\r\n        long res = 1;\r\n        while (!pq.isEmpty()) {\r\n            res = (res*pq.poll()) % 1000000007;\r\n        }\r\n\r\n        return (int)(res);\r\n    }\r\n}",
    "javascript": "// Runtime: 2154 ms (Top 9.38%) | Memory: 125.7 MB (Top 6.25%)\r\nvar maximumProduct = function(nums, k) {\r\n  let MOD = Math.pow(10, 9) + 7;\r\n\r\n  // build a new minimum priority queue\r\n  // LeetCode loads MinPriorityQueue by default, no need to implement again\r\n  let queue = new MinPriorityQueue();\r\n  for (let i = 0; i < nums.length; i++) {\r\n    queue.enqueue(nums[i], nums[i]);\r\n  }\r\n\r\n  // To maximize the product, take the smallest element out\r\n  // add 1 to it and add it back to the queue\r\n  let count = 0;\r\n  while (count < k && queue.size() > 0) {\r\n    let {element, priority} = queue.dequeue();\r\n    queue.enqueue(element + 1, priority + 1);\r\n    count += 1;\r\n  }\r\n\r\n  // calculate the product\r\n  let result = 1;\r\n  let elements = queue.toArray().map((a) => a.element);\r\n  for (let i = 0; i < elements.length; i++) {\r\n    result = (result * elements[i]) % MOD;\r\n  }\r\n\r\n  return result;\r\n};"
  }
}
