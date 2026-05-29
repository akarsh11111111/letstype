export default {
  "id": 456,
  "name": "132 Pattern",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/132-pattern",
  "relativeDir": "0-9/132 Pattern",
  "slug": "0456-132-pattern",
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
    "python": 13,
    "javascript": 21
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool find132pattern(vector<int>& nums) {\r\n        // Initialise a empty stack \"s\"...\r\n        stack<int> s;\r\n        // To keep track of minimum element...\r\n        int min = INT_MIN;\r\n        // Run a Loop from last to first index...\r\n        for (int i = nums.size() - 1; i >= 0; i--) {\r\n            // If min is greater than nums[i], return true...\r\n            if (nums[i] < min)\r\n                return true;\r\n            // If stack is not empty &  nums[i] is greater than the top element of stack, then pop the element...\r\n            while (!s.empty() && nums[i] > s.top()) {\r\n                min = s.top();\r\n                s.pop();\r\n            }\r\n            // Otherwise, push nums[i] into stack...\r\n            s.push(nums[i]);\r\n        }\r\n        // If the condition is not satisfied, return false.\r\n        return false;\r\n    }\r\n};",
    "python": "// Runtime: 476 ms (Top 99.36%) | Memory: 36.40 MB (Top 85.77%)\r\n\r\nclass Solution:\r\n    def find132pattern(self, nums: List[int]) -> bool:\r\n        stack, third = [], float('-inf')\r\n        \r\n        for num in reversed(nums):\r\n            if num < third:\r\n                return True\r\n            while stack and stack[-1] < num:\r\n                third = stack.pop()\r\n            stack.append(num)\r\n        return False",
    "java": "// Runtime: 4 ms (Top 96.40%) | Memory: 67 MB (Top 55.57%)\r\nclass Solution {\r\n    public boolean find132pattern(int[] nums) {\r\n        int min = Integer.MIN_VALUE;\r\n        int peak = nums.length;\r\n        for (int i = nums.length - 1; i >= 0; i--) {\r\n            // We find a \"132\" pattern if nums[i] < min, so return true...\r\n            if (nums[i] < min)\r\n                return true;\r\n            // If peak < nums.length & nums[i] is greater than the peak element...\r\n            while (peak < nums.length && nums[i] > nums[peak])\r\n                min = nums[peak++];\r\n            // Now we have nums[i] <= nums[peak]\r\n            // We push nums[i] to the \"stack\"\r\n            peak--;\r\n            nums[peak] = nums[i];\r\n        }\r\n        return false;\r\n    }\r\n}",
    "javascript": "// Runtime: 85 ms (Top 89.19%) | Memory: 53.4 MB (Top 61.26%)\r\nvar find132pattern = function(nums) {\r\n    let m = -Infinity\r\n    // Initialise a empty stack...\r\n    const stack = []\r\n    // Run a Loop from last to first index...\r\n    for (let i = nums.length - 1; i >= 0; i--) {\r\n        // If nums[i] is greater than the top element of stack, then pop the element...\r\n        while (nums[i] > stack[stack.length - 1]) {\r\n            m = stack.pop()\r\n        }\r\n        // If m is greater than nums[i], return true...\r\n        if (nums[i] < m) {\r\n            return true\r\n        }\r\n        // Otherwise, push nums[i] into stack...\r\n        stack.push(nums[i])\r\n    }\r\n    // If the condition is not satisfied, return false.\r\n    return false\r\n};"
  }
}
