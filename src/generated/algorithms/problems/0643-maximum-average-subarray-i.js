export default {
  "id": 643,
  "name": "Maximum Average Subarray I",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-average-subarray-i",
  "relativeDir": "M/Maximum Average Subarray I",
  "slug": "0643-maximum-average-subarray-i",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 40,
    "python": 41,
    "javascript": 24
  },
  "languages": {
    "cpp": "// Runtime: 552 ms (Top 5.09%) | Memory: 109.6 MB (Top 89.15%)\r\n//O(N) Time and O(1) Space - SLIDING WINDOW\r\n\r\nclass Solution {\r\npublic:\r\n    double findMaxAverage(vector<int>& nums, int k) {\r\n\r\n        double ans = INT_MIN;\r\n\r\n        int i = 0;\r\n        int j = 0;\r\n        int sum = 0;\r\n\r\n        while(j<nums.size()){\r\n\r\n            //calcs\r\n            sum = sum+nums[j];\r\n\r\n            if(j-i+1 < k){\r\n                j++;\r\n            }\r\n            else if(j-i+1 == k){\r\n\r\n                //ans\r\n                double nos = k*1.0;\r\n                ans = max(ans, sum/nos);\r\n\r\n                int v = nums[i];\r\n                sum = sum - v;\r\n\r\n                //SLIDE\r\n                i++;\r\n                j++;\r\n            }\r\n        }\r\n\r\n        return ans;\r\n\r\n    }\r\n};",
    "python": "//O(N) Time and O(1) Space - SLIDING WINDOW\r\n\r\nclass Solution {\r\npublic:\r\n    double findMaxAverage(vector<int>& nums, int k) {\r\n        \r\n        double ans = INT_MIN;\r\n        \r\n        int i = 0;\r\n        int j = 0;\r\n        int sum = 0;\r\n        \r\n        while(j<nums.size()){\r\n            \r\n            //calcs\r\n            sum = sum+nums[j];\r\n            \r\n            if(j-i+1 < k){\r\n                j++;\r\n            }\r\n            else if(j-i+1 == k){\r\n                \r\n                //ans\r\n                double nos =  k*1.0;\r\n                ans = max(ans, sum/nos);\r\n                \r\n\r\n                int v = nums[i];\r\n                sum = sum - v;\r\n                \r\n                //SLIDE\r\n                i++;\r\n                j++;\r\n            }\r\n        }\r\n        \r\n        return ans;\r\n        \r\n        \r\n    }\r\n};",
    "javascript": "// Runtime: 76 ms (Top 77.71%) | Memory: 54.70 MB (Top 57.09%)\r\n\r\n/**\r\n * @param {number[]} nums\r\n * @param {number} k\r\n * @return {number}\r\n */\r\nvar findMaxAverage = function(nums, k) {\r\n    let avr = -Infinity;\r\n    let windowSum = 0;\r\n    let windowStart = 0;\r\n    \r\n    for(let windowEnd = 0; windowEnd < nums.length; windowEnd++){\r\n         windowSum += nums[windowEnd];\r\n        \r\n        if((windowEnd - windowStart) + 1 === k){\r\n             avr = Math.max(avr, windowSum/k);\r\n            windowSum -= nums[windowStart];\r\n            windowStart += 1;\r\n        }       \r\n    }\r\n    \r\n    return avr;\r\n};"
  }
}
