export default {
  "id": 239,
  "name": "Sliding Window Maximum",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/sliding-window-maximum",
  "relativeDir": "S/Sliding Window Maximum",
  "slug": "0239-sliding-window-maximum",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 19,
    "java": 25,
    "python": 16,
    "javascript": 33
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n\t#define f first\r\n\t#define s second\r\n\tvector<int> maxSlidingWindow(vector<int>& nums, int k) {\r\n\t\tvector<int> ans;\r\n\t\tpriority_queue<pair<int,int>> pq;\r\n\t\tfor(int i=0;i<k;i++)pq.push({nums[i],i});\r\n\r\n\t\tans.push_back(pq.top().f);\r\n\r\n\t\tfor(int i=k; i<nums.size(); i++){\r\n\t\t\tpq.push({nums[i],i});\r\n\t\t\twhile(!pq.empty() && pq.top().s < i-k+1)pq.pop();\r\n\t\t\tans.push_back(pq.top().f);\r\n\t\t}\r\n\t\treturn ans;\r\n\t}\r\n};",
    "python": "# Runtime: 4951 ms (Top 7.51%) | Memory: 39.4 MB (Top 5.02%)\r\nclass Solution:\r\n    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:\r\n        ans = []\r\n        pq = []\r\n\r\n        for i in range(k): heapq.heappush(pq,(-nums[i],i))\r\n\r\n        ans.append(-pq[0][0])\r\n\r\n        for i in range(k,len(nums)):\r\n            heapq.heappush(pq,(-nums[i],i))\r\n            while pq and pq[0][1] < i-k+1 : heapq.heappop(pq)\r\n            ans.append(-pq[0][0])\r\n\r\n        return ans",
    "java": "class Solution {\r\n    public int[] maxSlidingWindow(int[] nums, int k) {\r\n        Deque<Integer> queue = new LinkedList<>();\r\n        int l = 0, r = 0;\r\n        int[] res = new int[nums.length - k + 1];\r\n        int index = 0;\r\n        while (r < nums.length) {\r\n            int n = nums[r++];\r\n            while (!queue.isEmpty() && n > queue.peekLast()) {\r\n                queue.pollLast();\r\n            }\r\n            queue.offer(n);\r\n            while (r - l > k) {\r\n                int m = nums[l++];\r\n                if (m == queue.peekFirst()) {\r\n                    queue.pollFirst();\r\n                }\r\n            }\r\n            if (r - l == k) {\r\n                res[index++] = queue.peekFirst();\r\n            }\r\n        }\r\n        return res;\r\n    }\r\n}",
    "javascript": "// Runtime: 948 ms (Top 34.96%) | Memory: 100.4 MB (Top 5.58%)\r\n/**\r\n * @param {number[]} nums\r\n * @param {number} k\r\n * @return {number[]}\r\n */\r\nvar maxSlidingWindow = function(nums, k) {\r\n    var i=0, j=0, max=0, deque=[], output=[];\r\n    while(j<nums.length){\r\n        if(deque.length === 0){\r\n            deque.push(nums[j])\r\n        }else if(deque[deque.length-1] > nums[j]){\r\n            deque.push(nums[j])\r\n        }else{\r\n            while(deque[deque.length-1] < nums[j]){\r\n                deque.pop()\r\n            }\r\n            deque.push(nums[j])\r\n        }\r\n\r\n        if(j-i+1 === k){\r\n            if(nums[i] === deque[0]){\r\n                output.push(deque.shift());\r\n            }else{\r\n                output.push(deque[0])\r\n            }\r\n            i++;\r\n        }\r\n        j++;\r\n\r\n    }\r\n    return output\r\n};"
  }
}
