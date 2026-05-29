export default {
  "id": 1913,
  "name": "Maximum Product Difference Between Two Pairs",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-product-difference-between-two-pairs",
  "relativeDir": "M/Maximum Product Difference Between Two Pairs",
  "slug": "1913-maximum-product-difference-between-two-pairs",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 41,
    "java": 24,
    "python": 17,
    "javascript": 4
  },
  "languages": {
    "cpp": "// Runtime: 60 ms (Top 31.22%) | Memory: 20.4 MB (Top 66.96%)\r\nclass Solution {\r\npublic:\r\n    int maxProductDifference(vector<int>& nums) {\r\n        //we have to return the result of\r\n        // (firstMax*secondMax) - (firstMin*secondMin)\r\n        int max1=INT_MIN;\r\n        int max2=INT_MIN;\r\n        int min1=INT_MAX;\r\n        int min2=INT_MAX;\r\n        for(int i=0;i<nums.size();i++)\r\n        {\r\n\r\n            if(nums[i]>max1)\r\n            {\r\n                //assign the second max to max2\r\n                max2=max1;\r\n                max1=nums[i];\r\n            }\r\n            else if(nums[i]>max2)\r\n            {\r\n                //it can become second max\r\n                max2= nums[i];\r\n            }\r\n\r\n            //check for the minimum\r\n            if(nums[i]<min1)\r\n            {\r\n                //it can become first minimum\r\n                min2=min1;\r\n                min1=nums[i];\r\n            }\r\n            else if(nums[i]<min2)\r\n            {\r\n                //it can become second minimum\r\n                min2=nums[i];\r\n            }\r\n        }\r\n        return (max1*max2)- (min1*min2);\r\n    }\r\n};",
    "python": "class Solution:\r\n    def maxProductDifference(self, nums: List[int]) -> int:\r\n        max_1 = 0\r\n        max_2 = 0\r\n        min_1 = 10001\r\n        min_2 = 10001\r\n        for i in nums:\r\n            if i >= max_1:\r\n                max_2,max_1 = max_1,i\r\n            elif i > max_2:\r\n                max_2 = i\r\n            if i <= min_1:\r\n                min_2,min_1 = min_1,i\r\n            elif i < min_2:\r\n                min_2 = i\r\n            \r\n        return max_1*max_2 - min_1*min_2",
    "java": "class Solution {\r\n    public int maxProductDifference(int[] nums) {\r\n        int max1 = Integer.MIN_VALUE;\r\n        int max2 = max1;\r\n\r\n        int min1 = Integer.MAX_VALUE;\r\n        int min2 = min1;\r\n        for (int i = 0; i < nums.length; i++) {\r\n            if (max1 < nums[i]) {\r\n                max2 = max1;\r\n                max1 = nums[i];\r\n            } else if(nums[i] > max2)\r\n                max2 = nums[i];\r\n\r\n            if(min1 > nums[i]){\r\n                min2 = min1;\r\n                min1 = nums[i];\r\n            }else if (nums[i] < min2)\r\n                min2 = nums[i];\r\n        }\r\n        \r\n        return (max1 * max2) - (min1 * min2);\r\n    }\r\n}",
    "javascript": "var maxProductDifference = function(nums) {\r\n    nums.sort((a,b) => a-b);\r\n    return nums.slice(nums.length - 2).reduce((a,b) => a*b, 1) - nums.slice(0, 2).reduce((a,b) => a*b, 1);\r\n};"
  }
}
