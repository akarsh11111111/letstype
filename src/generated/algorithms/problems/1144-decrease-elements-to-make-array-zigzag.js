export default {
  "id": 1144,
  "name": "Decrease Elements To Make Array Zigzag",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/decrease-elements-to-make-array-zigzag",
  "relativeDir": "D/Decrease Elements To Make Array Zigzag",
  "slug": "1144-decrease-elements-to-make-array-zigzag",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 36,
    "java": 38,
    "python": 24,
    "javascript": 36
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.0%) | Memory: 7.50 MB (Top 80.85%)\r\n\r\nclass Solution {\r\npublic:\r\n    int movesToMakeZigzag(vector<int>& nums) {\r\n        int even = 0, odd = 0;\r\n\r\n\t\tif (nums.size() <= 1) return 0;\r\n\r\n        /* Even indices are smaller */\r\n        for (int i = 0; i < nums.size(); i+= 2) {\r\n\t\t\tif (i == 0) {\r\n\t\t\t\tif (nums[i] >= nums[i+1]) even += nums[i]-nums[i+1]+1;\r\n\t\t\t} else if (i == nums.size() - 1) {\r\n\t\t\t\tif (nums[i-1] <= nums[i]) even += nums[i]-nums[i-1]+1;\r\n\t\t\t} else {\r\n\t\t\t\tif (nums[i-1] <= nums[i] || nums[i+1] <= nums[i]) {\r\n\t\t\t\t\teven += nums[i] - min(nums[i-1], nums[i+1]) + 1;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n        \r\n        /* Odd indices are smaller */\r\n\t\tfor (int i = 1; i < nums.size(); i += 2) {\r\n\t\t\tif (i == nums.size() - 1) {\r\n\t\t\t\tif (nums[i-1] <= nums[i]) odd += nums[i]-nums[i-1]+1;\r\n\t\t\t} else {\r\n\t\t\t\tif (nums[i-1] <= nums[i] || nums[i+1] <= nums[i]) {\r\n\t\t\t\t\todd += nums[i] - min(nums[i-1], nums[i+1]) + 1;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\treturn min(even, odd);\r\n    }\r\n};",
    "python": "class Solution:\r\n    def solve(self,arr,n,x):\r\n        idx = 1\r\n        ans = 0\r\n        while idx < n:\r\n            if idx == 0: idx += 1\r\n            if idx % 2 == x:\r\n                if arr[idx-1] >= arr[idx]:\r\n                    ans += arr[idx-1] - arr[idx] + 1\r\n                    arr[idx-1] = arr[idx] - 1\r\n                    idx = idx-1\r\n                else:\r\n                    idx = idx+1\r\n            else:\r\n                if arr[idx-1] <= arr[idx]:\r\n                    ans += arr[idx] - arr[idx - 1] + 1\r\n                    arr[idx] = arr[idx-1] - 1\r\n                idx += 1               \r\n        return ans\r\n    \r\n    def movesToMakeZigzag(self, nums: List[int]) -> int:\r\n        ans1 = self.solve([x for x in nums],len(nums),0)\r\n        ans2 = self.solve([x for x in nums],len(nums),1)\r\n        return min(ans1,ans2)",
    "java": "class Solution {\r\n    /*\r\n        firstly, check elements in odd indices are greater than its neighbours.\r\n        if not, decrease its neigbours and update the cost.\r\n        \r\n        do same thing for even indices, because there can be two combinations as indicated in question.\r\n    */\r\n    \r\n    private int calculateCost(int[] nums, int start){\r\n        int res = 0;\r\n        int n = nums.length;\r\n        int[] arr = Arrays.copyOf(nums, nums.length); // nums array will be modified, so copy it.\r\n        \r\n        for(int i=start;i<n;i+=2){\r\n            int prev = (i==0) ? Integer.MIN_VALUE : arr[i-1]; \r\n            int cur = arr[i];\r\n            int next = (i == n-1) ? Integer.MIN_VALUE : arr[i+1];\r\n            \r\n            if(prev < cur && next < cur)\r\n                continue;\r\n        \r\n            if(prev >= cur){\r\n                res += prev-cur +1;\r\n                arr[i-1] = cur-1;\r\n            } \r\n            \r\n            if(next >= cur){\r\n                res += next-cur +1;\r\n                arr[i+1] = cur-1;\r\n            }\r\n        }\r\n        return res;\r\n    }\r\n        \r\n    public int movesToMakeZigzag(int[] nums) {\r\n        return Math.min(calculateCost(nums, 0), calculateCost(nums,1));\r\n    }\r\n}",
    "javascript": "// Runtime: 112 ms (Top 7.14%) | Memory: 41.7 MB (Top 57.14%)\r\nvar movesToMakeZigzag = function(nums) {\r\n    const n = nums.length;\r\n\r\n    let lastEvenRight = Number.MIN_SAFE_INTEGER;\r\n    let evenMoves = 0;\r\n\r\n    let lastOddRight = nums[0];\r\n    let oddMoves = 0;\r\n\r\n    for (let i = 0; i < n; i++) {\r\n        const currNum = nums[i];\r\n        const nextNum = i < n - 1 ? nums[i + 1] : Number.MIN_SAFE_INTEGER;\r\n\r\n        if (i % 2 === 0) {\r\n            if (lastEvenRight >= currNum) evenMoves += lastEvenRight - currNum + 1;\r\n\r\n            if (currNum <= nextNum) {\r\n                evenMoves += nextNum - currNum + 1;\r\n            }\r\n\r\n            lastEvenRight = Math.min(currNum - 1, nextNum);\r\n        }\r\n        else {\r\n            if (lastOddRight >= currNum) oddMoves += lastOddRight - currNum + 1;\r\n\r\n            if (currNum <= nextNum) {\r\n                oddMoves += nextNum - currNum + 1;\r\n            }\r\n\r\n            lastOddRight = Math.min(currNum - 1, nextNum);\r\n        }\r\n    }\r\n\r\n    return Math.min(oddMoves, evenMoves);\r\n};"
  }
}
