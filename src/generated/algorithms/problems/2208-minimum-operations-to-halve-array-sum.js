export default {
  "id": 2208,
  "name": "Minimum Operations to Halve Array Sum",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-operations-to-halve-array-sum",
  "relativeDir": "M/Minimum Operations to Halve Array Sum",
  "slug": "2208-minimum-operations-to-halve-array-sum",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 24,
    "java": 20,
    "python": 24,
    "javascript": 29
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int halveArray(vector<int>& nums) {\r\n\t\tpriority_queue<double> pq;\r\n        double totalSum = 0;\r\n        double requiredSum = 0;\r\n        for(auto x: nums){\r\n            totalSum += x;\r\n            pq.push(x);\r\n        }\r\n        \r\n        requiredSum = totalSum/2;\r\n        int minOps = 0;\r\n        while(totalSum > requiredSum){\r\n            double currtop = pq.top();\r\n            pq.pop();\r\n            currtop = currtop/2;\r\n            totalSum -= currtop;\r\n            pq.push(currtop);\r\n            minOps++;\r\n        }\r\n        return minOps;\r\n\t}\r\n}",
    "python": "class Solution:\r\n    def halveArray(self, nums: List[int]) -> int:\r\n        # Creating empty heap\r\n        maxHeap = []\r\n        heapify(maxHeap) # Creates minHeap \r\n        \r\n        totalSum = 0\r\n        for i in nums:\r\n            # Adding items to the heap using heappush\r\n            # for maxHeap, function by multiplying them with -1\r\n            heappush(maxHeap, -1*i) \r\n            totalSum += i\r\n        \r\n        requiredSum = totalSum / 2\r\n        minOps = 0\r\n        \r\n        while totalSum > requiredSum:\r\n            x = -1*heappop(maxHeap) # Got negative value make it positive\r\n            x /= 2\r\n            totalSum -= x\r\n            heappush(maxHeap, -1*x) \r\n            minOps += 1\r\n        \r\n        return minOps",
    "java": "// Runtime: 392 ms (Top 56.62%) | Memory: 107.3 MB (Top 79.45%)\r\nclass Solution {\r\n    public int halveArray(int[] nums) {\r\n        PriorityQueue<Double> q = new PriorityQueue<>(Collections.reverseOrder());\r\n        double sum=0;\r\n        for(int i:nums){\r\n            sum+=(double)i;\r\n            q.add((double)i);\r\n        }\r\n        int res=0;\r\n        double req = sum;\r\n        while(sum > req/2){\r\n            double curr = q.poll();\r\n            q.add(curr/2);\r\n            res++;\r\n            sum -= curr/2;\r\n        }\r\n        return res;\r\n    }\r\n}",
    "javascript": "// Runtime: 1606 ms (Top 23.08%) | Memory: 137.1 MB (Top 30.77%)\r\nvar halveArray = function(nums) {\r\n    const n = nums.length;\r\n    const maxHeap = new MaxPriorityQueue({ priority: x => x });\r\n\r\n    let startSum = 0;\r\n\r\n    for (const num of nums) {\r\n        maxHeap.enqueue(num);\r\n        startSum += num;\r\n    }\r\n\r\n    let currSum = startSum;\r\n\r\n    let numberOfOperations = 0;\r\n\r\n    while (currSum > startSum / 2) {\r\n        const biggestNum = maxHeap.dequeue().element;\r\n\r\n        const halfNum = biggestNum / 2;\r\n\r\n        numberOfOperations += 1;\r\n        currSum -= halfNum;\r\n\r\n        maxHeap.enqueue(halfNum);\r\n    }\r\n\r\n    return numberOfOperations;\r\n};"
  }
}
