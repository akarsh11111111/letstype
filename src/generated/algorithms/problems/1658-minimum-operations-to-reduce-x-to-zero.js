export default {
  "id": 1658,
  "name": "Minimum Operations to Reduce X to Zero",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero",
  "relativeDir": "M/Minimum Operations to Reduce X to Zero",
  "slug": "1658-minimum-operations-to-reduce-x-to-zero",
  "availableLanguages": [
    "python",
    "javascript"
  ],
  "defaultLanguage": "python",
  "lineCounts": {
    "python": 20,
    "javascript": 12
  },
  "languages": {
    "python": "// Runtime: 825 ms (Top 92.58%) | Memory: 31.60 MB (Top 21.29%)\r\n\r\nclass Solution:\r\n    def minOperations(self, nums: List[int], x: int) -> int:\r\n        target, n = sum(nums) - x, len(nums)\r\n        \r\n        if target == 0:\r\n            return n\r\n        \r\n        max_len = cur_sum = left = 0\r\n        \r\n        for right, val in enumerate(nums):\r\n            cur_sum += val\r\n            while left <= right and cur_sum > target:\r\n                cur_sum -= nums[left]\r\n                left += 1\r\n            if cur_sum == target:\r\n                max_len = max(max_len, right - left + 1)\r\n        \r\n        return n - max_len if max_len else -1",
    "javascript": "var minOperations = function(nums, x) {\r\n    let len = nums.length, best = 0\r\n    for (let i = 1; i < len; i++) nums[i] += nums[i-1]\r\n    let y = nums[len-1] - x\r\n    if (y < 0) return -1\r\n    if (y === 0) return len\r\n    for (let i = -1, j = l = 0; i < len - best && l <= x; l = nums[++i]) {\r\n        while (nums[j] - l < y) j++\r\n        if (nums[j] - l === y) best = Math.max(best, j - i)\r\n    }\r\n    return best > 0 ? len - best : -1\r\n};"
  }
}
