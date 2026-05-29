export default {
  "id": 1712,
  "name": "Ways to Split Array Into Three Subarrays",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/ways-to-split-array-into-three-subarrays",
  "relativeDir": "W/Ways to Split Array Into Three Subarrays",
  "slug": "1712-ways-to-split-array-into-three-subarrays",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 18,
    "java": 60,
    "python": 13,
    "javascript": 37
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int waysToSplit(vector<int>& nums) {\r\n        int n = nums.size(), mod = 1e9 + 7;  long long ans = 0;\r\n        vector<int> prefix(n);\r\n        partial_sum(nums.begin(), nums.end(),prefix.begin());\r\n        for (int i = 0; i < n - 2; i++) {\r\n            int left = prefix[i], remain = (prefix[n - 1] - prefix[i]);\r\n                if (remain < left * 2) break;\r\n            int leftPtr = lower_bound(prefix.begin() + i + 1, prefix.end() - 1, left * 2) - prefix.begin();\r\n            int rightPtr = upper_bound(prefix.begin() + i + 1, prefix.end() - 1, left + remain / 2) - prefix.begin() - 1;\r\n\r\n            if (rightPtr - leftPtr + 1 > 0) ans += rightPtr - leftPtr + 1;\r\n        }\r\n        \r\n        return ans % mod;\r\n    }\r\n};",
    "python": "# Runtime: 1271 ms (Top 38.4%) | Memory: 29.79 MB (Top 48.0%)\r\n\r\nclass Solution:\r\n    def waysToSplit(self, nums: List[int]) -> int:\r\n        prefix = [0]\r\n        for x in nums: prefix.append(prefix[-1] + x)\r\n        \r\n        ans = 0\r\n        for i in range(1, len(nums)): \r\n            j = bisect_left(prefix, 2*prefix[i])\r\n            k = bisect_right(prefix, (prefix[i] + prefix[-1])//2)\r\n            ans += max(0, min(len(nums), k) - max(i+1, j))\r\n        return ans % 1_000_000_007",
    "java": "class Solution {\r\n    public int waysToSplit(int[] nums) {\r\n        int size = nums.length;\r\n        for (int i = 1; i < size; ++i) {\r\n            nums[i] += nums[i - 1];\r\n        }\r\n        int res = 0;\r\n        int mod = 1_000_000_007;\r\n        for (int i = 0; i < size - 2; ++i) {\r\n            int left = searchLeft(nums, i, size - 1);\r\n            int right = searchRight(nums, i, size - 1);\r\n            if (left == -1 || right == -1) {\r\n                continue;\r\n            }\r\n            res = (res + right - left + 1) % mod;\r\n        }\r\n        return res;\r\n    }\r\n    \r\n    private int searchLeft(int[] nums, int left, int right) {\r\n        int pos = -1;\r\n        int min = nums[left];\r\n        int lo = left + 1, hi = right - 1;\r\n        while (lo <= hi) {\r\n            int mi = lo + (hi - lo) / 2;\r\n            int mid = nums[mi] - min;\r\n            int max = nums[right] - nums[mi];\r\n            if (mid < min) {\r\n                lo = mi + 1;\r\n            } else if (max < mid){\r\n                hi = mi - 1;\r\n            } else {\r\n                pos = mi;\r\n                hi = mi - 1;\r\n            }\r\n        }\r\n        return pos;\r\n    }\r\n    \r\n    private int searchRight(int[] nums, int left, int right) {\r\n        int pos = -1;\r\n        int min = nums[left];\r\n        int lo = left + 1, hi = right - 1;\r\n        while (lo <= hi) {\r\n            int mi = lo + (hi - lo) / 2;\r\n            int mid = nums[mi] - min;\r\n            int max = nums[right] - nums[mi];\r\n            if (mid < min) {\r\n                lo = mi + 1;\r\n            } else if (max < mid){\r\n                hi = mi - 1;\r\n            } else {\r\n                pos = mi;\r\n                lo = mi + 1;\r\n            }\r\n        }\r\n        return pos;\r\n    }\r\n    \r\n}",
    "javascript": "var waysToSplit = function(nums) {\r\n    const mod = 1000000007;\r\n    const lastIndex = nums.length - 2;\r\n    const total = nums.reduce((sum, num) => sum + num)\r\n\r\n    let midLeftPtr = -1;\r\n    let midRightPtr = -1;\r\n    \r\n    let leftSum = 0;\r\n    let midLeftSum = 0;\r\n    let midRightSum = 0;\r\n    \r\n    let numWaysToSplit = 0;\r\n    \r\n    for (let leftPtr = 0; leftPtr < nums.length; leftPtr++) {\r\n        leftSum += nums[leftPtr];        \r\n        midLeftSum -= nums[leftPtr];\r\n        midRightSum -= nums[leftPtr];\r\n\r\n       // find the first index that satisfies the middle sum\r\n\t   // being greater than or equal to the left sum\r\n        while (midLeftPtr <= lastIndex && \r\n               (midLeftPtr <= leftPtr || midLeftSum < leftSum)) {\r\n            midLeftPtr++;\r\n            midLeftSum += nums[midLeftPtr]\r\n        }\r\n\r\n        // find the first index that makes the middle sum greater than the right sum\r\n        while (midRightPtr <= lastIndex && \r\n               (midLeftPtr > midRightPtr || midRightSum <= total - midRightSum - leftSum)) {\r\n            midRightPtr++\r\n            midRightSum += nums[midRightPtr]\r\n        }\r\n        numWaysToSplit = (numWaysToSplit + midRightPtr - midLeftPtr) % mod;\r\n    }\r\n    return numWaysToSplit\r\n};"
  }
}
