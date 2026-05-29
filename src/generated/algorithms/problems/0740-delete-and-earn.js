export default {
  "id": 740,
  "name": "Delete and Earn",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/delete-and-earn",
  "relativeDir": "D/Delete and Earn",
  "slug": "0740-delete-and-earn",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 26,
    "java": 28,
    "python": 21,
    "javascript": 30
  },
  "languages": {
    "cpp": "// Runtime: 44 ms (Top 16.30%) | Memory: 16.4 MB (Top 21.44%)\r\n\r\nclass Solution {\r\npublic:\r\n    // Dynamic Programming : Bottom Up Approach Optmised\r\n    int deleteAndEarn(vector<int>& nums)\r\n    {\r\n        int size = nums.size();\r\n\r\n        // Initialise vectors with size 10001 and value 0\r\n        vector<int> memo(10001 , 0);\r\n        vector<int> res(10001 , 0);\r\n\r\n        // get the count of elements int res vector\r\n        for(auto num : nums)\r\n            res[num]++;\r\n\r\n        // for index : less than 3 calculate memo[i] as the index times number of occurences\r\n        // : greater than equal to 3 as calculate memo[i] as the index times number of occurences + max of the last second and third element\r\n        for(int i = 0 ; i < 10001 ; i++)\r\n            memo[i] += (i < 3) ? (i * res[i]) : (i * res[i]) + max(memo[i-2] , memo[i-3]);\r\n\r\n        // return max of last 2 elements\r\n        return max(memo[10000] , memo[9999]);\r\n    }\r\n};",
    "python": "class Solution:\r\n    def deleteAndEarn(self, nums: List[int]) -> int:\r\n        count = Counter(nums)\r\n        m = max(nums)\r\n        memo = {}\r\n        def choose(num):\r\n            if num > m:\r\n                return 0\r\n            if num not in count:\r\n                count[num] = 0\r\n            if num in memo:\r\n                return memo[num]\r\n            memo[num] = max(choose(num + 1), num * count[num] + choose(num + 2))\r\n            return memo[num]\r\n        \r\n        return choose(1)\r\n\r\n# time and space complexity\r\n# n = max(nums)\r\n# time: O(n)\r\n# space: O(n)",
    "java": "// Runtime: 20 ms (Top 44.61%) | Memory: 44.9 MB (Top 82.96%)\r\nclass Solution {\r\n    public int deleteAndEarn(int[] nums) {\r\n        Arrays.sort(nums);\r\n        int onePreviousAgo = 0;\r\n        int previous = 0;\r\n        for(int i = 0; i < nums.length; i++) {\r\n            int sum = 0;\r\n            // On hop there's no constraint to add the previous value\r\n            if(i > 0 && nums[i-1] < nums[i] - 1) {\r\n                onePreviousAgo = previous;\r\n            }\r\n            // Accumulate equal values\r\n            while(i < nums.length - 1 && nums[i] == nums[i+1]) {\r\n                sum += nums[i];\r\n                i++;\r\n            }\r\n            int currentPrevious = previous;\r\n            previous = Math.max(\r\n                onePreviousAgo + nums[i] + sum,\r\n                previous\r\n            );\r\n            onePreviousAgo = currentPrevious;\r\n            // System.out.println(nums[i] + \":\" + previous);\r\n        }\r\n        return previous;\r\n    }\r\n}",
    "javascript": "var deleteAndEarn = function(nums) {\r\n    let maxNumber = 0;\r\n    \r\n    const cache = {};\r\n    const points = {};\r\n\r\n    function maxPoints(num) {\r\n        if (num === 0) {\r\n            return 0;\r\n        }\r\n        \r\n        if (num === 1) {\r\n            return points[1] || 0;\r\n        }\r\n        \r\n        if (cache[num] !== undefined) {\r\n            return cache[num];\r\n        }\r\n        \r\n        const gain = points[num] || 0;\r\n        return cache[num] = Math.max(maxPoints(num - 1), maxPoints(num - 2) + gain);\r\n    }\r\n    \r\n    for (let num of nums) {\r\n        points[num] = (points[num] || 0) + num;\r\n        maxNumber = Math.max(maxNumber, num);\r\n    }\r\n\r\n    return maxPoints(maxNumber);\r\n};"
  }
}
