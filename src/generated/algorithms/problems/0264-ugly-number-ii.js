export default {
  "id": 264,
  "name": "Ugly Number II",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/ugly-number-ii",
  "relativeDir": "U/Ugly Number II",
  "slug": "0264-ugly-number-ii",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 18,
    "java": 18,
    "python": 49,
    "javascript": 27
  },
  "languages": {
    "cpp": "// Runtime: 113 ms (Top 11.61%) | Memory: 30.00 MB (Top 16.43%)\r\n\r\nclass Solution {\r\npublic:\r\n    int nthUglyNumber(int n) {\r\n        set<long> st;\r\n        st.insert(1);\r\n        long num = 1;\r\n        for(int i=0;i<n;i++){\r\n            num = *st.begin();\r\n            st.erase(num);\r\n            st.insert(num * 2);\r\n            st.insert(num * 3);\r\n            st.insert(num * 5);\r\n        }\r\n        return num;\r\n    }\r\n};",
    "python": "# Runtime: 354 ms (Top 28.01%) | Memory: 13.9 MB (Top 55.93%)\r\nimport heapq\r\nclass Solution:\r\n    def nthUglyNumber(self, n: int) -> int:\r\n        h1, h2, h3 = [], [], []\r\n        heapq.heappush(h1, 1)\r\n        heapq.heappush(h2, 1)\r\n        heapq.heappush(h3, 1)\r\n        ugly_number = 1\r\n        last_ugly_number = 1\r\n        count = 1\r\n        while count < n:\r\n            if 2 * h1[0] <= 3 * h2[0] and 2 * h1[0] <= 5 * h3[0]:\r\n                # pop from h1\r\n                x = heapq.heappop(h1)\r\n                ugly_number = 2 * x\r\n                if ugly_number == last_ugly_number:\r\n                    # do nothing\r\n                    continue\r\n                count+=1\r\n                last_ugly_number = ugly_number\r\n                heapq.heappush(h1, ugly_number)\r\n                heapq.heappush(h2, ugly_number)\r\n                heapq.heappush(h3, ugly_number)\r\n\r\n            elif 3 * h2[0] <= 2 * h1[0] and 3 * h2[0] <= 5 * h3[0]:\r\n                # pop from h2\r\n                x = heapq.heappop(h2)\r\n                ugly_number = 3 * x\r\n                if ugly_number == last_ugly_number:\r\n                    continue\r\n                count+=1\r\n                last_ugly_number = ugly_number\r\n                heapq.heappush(h1, ugly_number)\r\n                heapq.heappush(h2, ugly_number)\r\n                heapq.heappush(h3, ugly_number)\r\n            else:\r\n                # pop from h3\r\n                x = heapq.heappop(h3)\r\n                ugly_number = 5 * x\r\n                if ugly_number == last_ugly_number:\r\n                    continue\r\n                count+=1\r\n                last_ugly_number = ugly_number\r\n                heapq.heappush(h1, ugly_number)\r\n                heapq.heappush(h2, ugly_number)\r\n                heapq.heappush(h3, ugly_number)\r\n\r\n        return last_ugly_number",
    "java": "// Runtime: 7 ms (Top 41.12%) | Memory: 41.5 MB (Top 87.73%)\r\n// Ugly number II\r\n// https://leetcode.com/problems/ugly-number-ii/\r\n\r\nclass Solution {\r\n    public int nthUglyNumber(int n) {\r\n        int[] dp = new int[n];\r\n        dp[0] = 1;\r\n        int i2 = 0, i3 = 0, i5 = 0;\r\n        for (int i = 1; i < n; i++) {\r\n            dp[i] = Math.min(dp[i2] * 2, Math.min(dp[i3] * 3, dp[i5] * 5));\r\n            if (dp[i] == dp[i2] * 2) i2++;\r\n            if (dp[i] == dp[i3] * 3) i3++;\r\n            if (dp[i] == dp[i5] * 5) i5++;\r\n        }\r\n        return dp[n - 1];\r\n    }\r\n}",
    "javascript": "var nthUglyNumber = function(n) {\r\nlet uglyNo = 1;\r\nlet uglySet = new Set(); // Set to keep track of all the ugly Numbers to stop repetition\r\nuglySet.add(uglyNo);\r\nlet minHeap = new MinPriorityQueue(); // Javascript provides inbuilt min and max heaps, constructor does not require callback function for primitive types but a comparator callback for object data types, to know which key corresponds to the priority\r\n//callback looks like this new MinPriorityQueue((bid) => bid.value)\r\n// if this is confusing, check the documentation here\r\n// https://github.com/datastructures-js/priority-queue/blob/master/README.md#constructor\r\nwhile(n>1){\r\n    if(!uglySet.has(uglyNo*2)){// add only if the set does not have this ugly no.\r\n        minHeap.enqueue(uglyNo*2,uglyNo*2);// enqueue takes two inputs element and priority respectively, both are same here\r\n        uglySet.add(uglyNo*2);\r\n    }\r\n    if(!uglySet.has(uglyNo*3)){\r\n        minHeap.enqueue(uglyNo*3,uglyNo*3);\r\n        uglySet.add(uglyNo*3);\r\n    }\r\n    if(!uglySet.has(uglyNo*5)){\r\n        minHeap.enqueue(uglyNo*5,uglyNo*5);\r\n        uglySet.add(uglyNo*5);\r\n    }\r\n    uglyNo = minHeap.dequeue().element;//dequeue returns an object with two properties priority and element\r\n    n--;\r\n}\r\n\r\nreturn uglyNo;\r\n};"
  }
}
