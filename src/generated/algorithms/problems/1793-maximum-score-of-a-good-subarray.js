export default {
  "id": 1793,
  "name": "Maximum Score of a Good Subarray",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-score-of-a-good-subarray",
  "relativeDir": "M/Maximum Score of a Good Subarray",
  "slug": "1793-maximum-score-of-a-good-subarray",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 19,
    "java": 37,
    "python": 39,
    "javascript": 45
  },
  "languages": {
    "cpp": "// Runtime: 373 ms (Top 42.29%) | Memory: 91.1 MB (Top 60.46%)\r\nclass Solution {\r\npublic:\r\n    int maximumScore(vector<int>& nums, int k) {\r\n        nums.push_back(0);\r\n        stack<int> st ;\r\n        int n = nums.size(), res = 0;\r\n        for(int i=0; i<n ; i++){\r\n            while(!st.empty() && nums[st.top()] >= nums[i]){\r\n                int height = nums[st.top()];\r\n                st.pop();\r\n                int left = st.empty() ? -1: st.top();\r\n                if(k < i && k > left) res = max(height* (i-left-1), res);\r\n            }\r\n            st.push(i);\r\n        }\r\n        return res;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def nextSmallerElement(self, nums):\r\n        nextSmaller = [None] * len(nums)\r\n        stack = [[-sys.maxsize, -1]]\r\n        for i in range(len(nums)-1, -1, -1):\r\n            while nums[i] <= stack[-1][0]:\r\n                stack.pop()\r\n            nextSmaller[i] = stack[-1][1]\r\n            stack.append([nums[i], i])\r\n        return nextSmaller\r\n            \r\n    \r\n    def previousSmallerElement(self, nums):\r\n        previousSmaller = [None] * len(nums)\r\n        stack = [[-sys.maxsize, -1]]\r\n        for i in range(len(nums)):\r\n            while nums[i] <= stack[-1][0]:\r\n                stack.pop()\r\n            previousSmaller[i] = stack[-1][1]\r\n            stack.append([nums[i], i])\r\n        return previousSmaller\r\n    \r\n    def maximumScore(self, nums: List[int], k: int) -> int:\r\n        nextSmaller = self.nextSmallerElement(nums)\r\n        previousSmaller = self.previousSmallerElement(nums)\r\n\r\n        score = 0\r\n        for idx, num in enumerate(nums):\r\n\t\t\t# previousSmaller[idx] (let's say i) and nextSmaller[idx] (let's say j) ensures that the element present at idx is the minimum in range (i -> j)\r\n            i = previousSmaller[idx]\r\n            i += 1\r\n            j = nextSmaller[idx]\r\n            if j == -1:\r\n                j = len(nums)\r\n            j -= 1\r\n            if i <= k <= j:\r\n                score = max(score, num * (j-i+1))\r\n        \r\n        return score",
    "java": "// Runtime: 8 ms (Top 75.40%) | Memory: 51.5 MB (Top 97.59%)\r\nclass Solution {\r\n    public int maximumScore(int[] nums, int k) {\r\n        int n = nums.length;\r\n        int i = k - 1, j = k + 1;\r\n        int min = nums[k];\r\n        int ans = min;\r\n\r\n        while(i >= 0 || j < n) {\r\n            int v1 = 0, v2 = 0;\r\n            int min1 = min, min2 = min;\r\n\r\n            if(i >= 0) {\r\n                min1 = Math.min(min, nums[i]);\r\n                v1 = min1 * (j - i);\r\n            }\r\n\r\n            if(j < n) {\r\n                min2 = Math.min(min, nums[j]);\r\n                v2 = min2 * (j - i);\r\n            }\r\n\r\n            if(v1 > v2) {\r\n                --i;\r\n                ans = Math.max(v1, ans);\r\n                min = Math.min(min1, min);\r\n            }\r\n            else {\r\n                ++j;\r\n                ans = Math.max(ans, v2);\r\n                min = Math.min(min, min2);\r\n            }\r\n        }\r\n\r\n        return ans;\r\n    }\r\n}",
    "javascript": "/*\r\n\r\n\tJAVASCRIPT\r\n\r\n */\r\nvar maximumScore = function(nums, k) {\r\n    // iterate to the left to update the minimum value at each index\r\n    let min = nums[k];\r\n    for (let i = k - 1; i >= 0; i--) {\r\n        min = Math.min(min, nums[i]);\r\n        nums[i] = min;\r\n    }\r\n\r\n    // iterate to the right to update the minimum value at each index\r\n    min = nums[k];\r\n    for (let i = k + 1; i < nums.length; i++) {\r\n        min = Math.min(min, nums[i]);\r\n        nums[i] = min;\r\n    }\r\n    \r\n    // start with 2 pointers at opposite ends of nums\r\n    let left = 0;\r\n    let right = nums.length - 1;\r\n    let bestScore = 0;\r\n\r\n    while (left <= right) {\r\n        bestScore = Math.max(bestScore, Math.min(nums[left], nums[right]) * (right - left + 1));\r\n        \r\n        // first to check if either pointer is at k\r\n        // if it is at k then we must move the other pointer inwards\r\n        if (left === k) {\r\n            right--;\r\n        } else if (right === k) {\r\n            left++\r\n            \r\n        // if neither index is at k move the pointer\r\n        // that is smaller inwards\r\n        } else if (nums[left] < nums[right]) {\r\n            left++;\r\n        } else {\r\n            right--;\r\n        }\r\n    }\r\n    return bestScore;\r\n};"
  }
}
