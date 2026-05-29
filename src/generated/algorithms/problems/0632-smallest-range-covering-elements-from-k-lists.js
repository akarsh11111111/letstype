export default {
  "id": 632,
  "name": "Smallest Range Covering Elements from K Lists",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists",
  "relativeDir": "S/Smallest Range Covering Elements from K Lists",
  "slug": "0632-smallest-range-covering-elements-from-k-lists",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 56,
    "java": 39,
    "python": 33,
    "javascript": 28
  },
  "languages": {
    "cpp": "// Runtime: 53 ms (Top 49.31%) | Memory: 15.90 MB (Top 91.78%)\r\n\r\n#include <vector>\r\n#include <queue>\r\n#include <limits>\r\n\r\nusing namespace std;\r\n\r\nstruct Item {\r\n    int val;\r\n    int r;\r\n    int c;\r\n    \r\n    Item(int val, int r, int c): val(val), r(r), c(c) {\r\n    }\r\n};\r\n\r\nstruct Comp {\r\n    bool operator() (const Item& it1, const Item& it2) {\r\n        return it2.val < it1.val;\r\n    }\r\n};\r\n\r\nclass Solution {\r\npublic:\r\n    vector<int> smallestRange(vector<vector<int>>& nums) {\r\n        priority_queue<Item, vector<Item>, Comp> pq;\r\n        \r\n        int high = numeric_limits<int>::min();\r\n        int n = nums.size();\r\n        for (int i = 0; i < n; ++i) {\r\n            pq.push(Item(nums[i][0], i, 0));\r\n            high = max(high , nums[i][0]);\r\n        }\r\n        int low = pq.top().val;\r\n        \r\n        vector<int> res{low, high};\r\n        \r\n        while (pq.size() == (size_t)n) {\r\n            auto it = pq.top();\r\n            pq.pop();\r\n            \r\n            if ((size_t)it.c + 1 < nums[it.r].size()) {\r\n                pq.push(Item(nums[it.r][it.c + 1], it.r, it.c + 1));\r\n                high = max(high, nums[it.r][it.c + 1]);\r\n                low = pq.top().val;\r\n                if (high - low < res[1] - res[0]) {\r\n                    res[0] = low;\r\n                    res[1] = high;\r\n                }\r\n            }\r\n        }\r\n        \r\n        return res;\r\n    }\r\n};",
    "python": "// Runtime: 188 ms (Top 86.16%) | Memory: 23.30 MB (Top 59.07%)\r\n\r\nfrom typing import List\r\nimport heapq\r\n\r\n\r\nclass Solution:\r\n    def smallestRange(self, nums: List[List[int]]) -> List[int]:\r\n        heap = [(row[0], i, 0) for i, row in enumerate(nums)]\r\n        heapq.heapify(heap)\r\n        ans = [-10**9, 10**9]\r\n        right = max(row[0] for row in nums)\r\n        while heap:\r\n            left, row, col = heapq.heappop(heap)\r\n            if right - left < ans[1] - ans[0]:\r\n                ans = [left, right]\r\n            if col + 1 == len(nums[row]):\r\n                return ans\r\n            right = max(right, nums[row][col + 1])\r\n            heapq.heappush(heap, (nums[row][col + 1], row, col + 1))\r\n\r\n# Tests:\r\nif __name__ == '__main__':\r\n    s = Solution()\r\n    # test case 1\r\n    output1 = s.smallestRange([[4,10,15,24,26],[0,9,12,20],[5,18,22,30]])\r\n    expected_output1 = [20,24]\r\n    assert output1 == expected_output1, f\"Expected {expected_output1}, but got {output1}\"\r\n    # test case 2\r\n    output2 = s.smallestRange([[1,2,3],[1,2,3],[1,2,3]])\r\n    expected_output2 = [1,1]\r\n    assert output2 == expected_output2, f\"Expected {expected_output2}, but got {output2}\"\r\n    print(\"All tests passed!\")",
    "java": "// Runtime: 28 ms (Top 89.13%) | Memory: 48.60 MB (Top 83.44%)\r\n\r\nclass Solution {\r\n    public int[] smallestRange(List<List<Integer>> nums) {\r\n        int[] res = {-100000 , 100000};\r\n        PriorityQueue<int[]>pq = new PriorityQueue<>((a , b) -> a[0] - b[0]);\r\n        int max = Integer.MIN_VALUE;\r\n        int k = nums.size();\r\n\r\n        for(int i = 0; i < k; i++){\r\n            int minElem = nums.get(i).get(0);\r\n            int[] arr = {minElem , 0 , i};\r\n\r\n            max = Math.max(max , minElem);\r\n            pq.add(arr);\r\n\r\n        }\r\n        while(true){\r\n            int min[] = pq.poll();\r\n            if(res[1] - res[0] > max - min[0]){\r\n                res[1] = max;\r\n                res[0] = min[0];\r\n            }\r\n            min[1]++;\r\n\r\n            List<Integer>cur = nums.get(min[2]);\r\n\r\n            if(min[1] == cur.size()){\r\n                break;\r\n            }\r\n            else{\r\n                min[0] = cur.get(min[1]);\r\n                max = Math.max(max , cur.get(min[1]));\r\n                pq.add(min);\r\n            }\r\n        }\r\n        return res;\r\n    }\r\n}",
    "javascript": "var smallestRange = function(nums) {\r\n    let minHeap = new MinPriorityQueue({\r\n        compare: (a,b) => a[0] - b[0]\r\n    });\r\n    let start = 0, end = Infinity;\r\n    let maxSoFar = -Infinity;\r\n\t\r\n    for (let num of nums) {\r\n        minHeap.enqueue([num[0], 0, num]);\r\n        maxSoFar = Math.max(maxSoFar, num[0]);\r\n    }\r\n\t\r\n    while (minHeap.size() == nums.length) {\r\n        let [num, i, list] = minHeap.dequeue();\r\n        \r\n        if (end - start > maxSoFar - num) {\r\n            start = num;\r\n            end = maxSoFar;\r\n        }\r\n        \r\n        if (list.length > i + 1) {\r\n            minHeap.enqueue([list[i + 1], i + 1, list]);\r\n            maxSoFar = Math.max(maxSoFar, list[i + 1]);\r\n        }\r\n    }\r\n    \r\n    return [start, end];\r\n};"
  }
}
