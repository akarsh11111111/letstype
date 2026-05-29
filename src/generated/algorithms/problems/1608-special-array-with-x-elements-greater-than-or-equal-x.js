export default {
  "id": 1608,
  "name": "Special Array With X Elements Greater Than or Equal X",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x",
  "relativeDir": "S/Special Array With X Elements Greater Than or Equal X",
  "slug": "1608-special-array-with-x-elements-greater-than-or-equal-x",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 17,
    "java": 22,
    "python": 10,
    "javascript": 32
  },
  "languages": {
    "cpp": "// Runtime: 3 ms (Top 75.09%) | Memory: 8.5 MB (Top 12.83%)\r\nclass Solution {\r\npublic:\r\n    int specialArray(vector<int>& nums) {\r\n        int v[102];\r\n        memset(v, 0, sizeof v);\r\n        for (const auto &n : nums) {\r\n            ++v[n > 100 ? 100 : n];\r\n        }\r\n        for (int i = 100; i > 0; --i) {\r\n            v[i] = v[i + 1] + v[i];\r\n            if (v[i] == i)\r\n                return i;\r\n        }\r\n        return -1;\r\n    }\r\n};",
    "python": "# Runtime: 58 ms (Top 23.2%) | Memory: 16.30 MB (Top 28.6%)\r\n\r\nclass Solution:\r\n    def specialArray(self, nums: List[int]) -> int:\r\n        nums.sort()\r\n        for i in range(max(nums)+1):\r\n            y=len(nums)-bisect.bisect_left(nums,i)\r\n            if y==i:\r\n                return i\r\n        return -1",
    "java": "// Runtime: 1 ms (Top 88.84%) | Memory: 42.3 MB (Top 22.19%)\r\nclass Solution {\r\n    public int specialArray(int[] nums) {\r\n        int x = nums.length;\r\n        int[] counts = new int[x+1];\r\n\r\n        for(int elem : nums)\r\n            if(elem >= x)\r\n                counts[x]++;\r\n            else\r\n                counts[elem]++;\r\n\r\n        int res = 0;\r\n        for(int i = counts.length-1; i > 0; i--) {\r\n            res += counts[i];\r\n            if(res == i)\r\n                return i;\r\n        }\r\n\r\n        return -1;\r\n    }\r\n}",
    "javascript": "// Runtime: 57 ms (Top 37.81%) | Memory: 42.20 MB (Top 49.25%)\r\n\r\n/**\r\n * @param {number[]} nums\r\n * @return {number}\r\n */\r\nvar specialArray = function(nums) {\r\n    // step 1: sort\r\n    nums = nums.sort((a,b) => a-b);\r\n    // step 2: search\r\n    for(let i=nums.length; i>=0; i--) {\r\n        // found:\r\n        if(bs(nums, i)) return i;\r\n    }\r\n    // not found:\r\n    return -1;\r\n};\r\n\r\nfunction bs(array, target) {\r\n    let left = 0;\r\n    let right = array.length - 1;\r\n\r\n    while(left <= right){\r\n        const mid = Math.floor((left+right)/2);\r\n        if(array[mid] < target) left = mid + 1;\r\n        else right = mid - 1;\r\n    }\r\n\r\n    const greaterThanTarget = array.length - left;\r\n\r\n    return greaterThanTarget === target;\r\n}"
  }
}
