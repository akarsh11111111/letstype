export default {
  "id": 581,
  "name": "Shortest Unsorted Continuous Subarray",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/shortest-unsorted-continuous-subarray",
  "relativeDir": "S/Shortest Unsorted Continuous Subarray",
  "slug": "0581-shortest-unsorted-continuous-subarray",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 36,
    "java": 23,
    "python": 31,
    "javascript": 12
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int max_value = 1000000;\r\n    int min_value = -1000000;\r\n    \r\n    int findUnsortedSubarray(vector<int>& nums) {\r\n\t\t// max_list refers to: the max value on the left side of the current element\r\n\t\t// min_list refers to: the min value on the right side of the current element\r\n        vector<int> max_list(nums.size(), 0);\r\n        vector<int> min_list(nums.size(), 0);\r\n        min_list[nums.size()-1] = max_value;\r\n        max_list[0] = min_value;\r\n        \r\n        // init two lists\r\n        for(int i=nums.size()-2; i>=0; i--)\r\n            min_list[i] = min(min_list[i+1], nums[i+1]);\r\n        \r\n        for(int i=1; i<nums.size(); i++) \r\n            max_list[i] = max(max_list[i-1], nums[i-1]);\r\n        \r\n        // get left bound\r\n        int left = 0;\r\n        while(left < nums.size() && min_list[left] >= nums[left])\r\n            left++;\r\n        \r\n        // get right bound\r\n        int right = nums.size() - 1;\r\n        while(right >= 0 && max_list[right] <= nums[right])\r\n            right--;\r\n        \r\n        if (left == nums.size()) // monotonic ascending array\r\n            return 0;\r\n        else\r\n            return (right-left+1);\r\n    }\r\n};",
    "python": "# Runtime: 250 ms (Top 81.05%) | Memory: 16.2 MB (Top 5.39%)\r\n#lets start adding elements to stack. We have to fin the min length [a, b] interval (corresponding to the problem description).\r\n# a has to be the first element's index we pop from the array. lets say y is the last element's index we pop.\r\n# and max_pop is the maximum element(not index) we pop during stacking.After stacking process is done we are going to have\r\n#last elements in the stack E(E is the stack after stacking is done).We have to find M = maximum_element(max_pop, all elements of E)\r\n#Index of M is going to be right edge of the [a, b] interval\r\n\r\nclass Solution:\r\n    def findUnsortedSubarray(self, nums) -> int:\r\n        stack = []\r\n        min_index = len(nums)\r\n        max_index = 0\r\n        max_pop = float('-inf')\r\n        for i in range(len(nums)):\r\n            while stack and nums[i] < stack[-1][0]:\r\n\r\n                p = stack.pop()\r\n                if p[0] > max_pop:\r\n                    max_pop = p[0]\r\n                if p[1] < min_index:\r\n                    min_index = p[1]\r\n                if p[1] > max_index:\r\n                    max_index = p[1]\r\n            stack.append([nums[i], i])\r\n        max_r = max_index\r\n        for st in stack:\r\n            if st[0] < max_pop:\r\n                max_r = st[1]\r\n        if min_index == len(nums):\r\n            return 0\r\n        return max_r - min_index +1",
    "java": "// Runtime: 7 ms (Top 47.11%) | Memory: 43.4 MB (Top 88.72%)\r\nclass Solution {\r\n    public int findUnsortedSubarray(int[] nums) {\r\n        int[] numsClone = nums.clone();\r\n        Arrays.sort(nums);\r\n\r\n        int s = Integer.MAX_VALUE;\r\n        int e = Integer.MIN_VALUE;\r\n\r\n        for(int i = 0; i<nums.length; i++) {\r\n            if(numsClone[i] != nums[i]) {\r\n                s = Math.min(s, i);\r\n                e = Math.max(e, i);\r\n            }\r\n        }\r\n\r\n        if(s == Integer.MAX_VALUE || e == Integer.MIN_VALUE) {\r\n            return 0;\r\n        }\r\n\r\n        return e-s+1;\r\n    }\r\n}",
    "javascript": "// Runtime: 177 ms (Top 10.70%) | Memory: 46.2 MB (Top 31.77%)\r\nvar findUnsortedSubarray = function(nums) {\r\n    let left = 0;\r\n    let right = nums.length - 1;\r\n    const target = [...nums].sort((a, b) => a - b);\r\n\r\n    while (left < right && nums[left] === target[left]) left += 1;\r\n    while (right > left && nums[right] === target[right]) right -= 1;\r\n    const result = right - left;\r\n\r\n    return result === 0 ? 0 : result + 1;\r\n};"
  }
}
