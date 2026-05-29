export default {
  "id": 628,
  "name": "Maximum Product of Three Numbers",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-product-of-three-numbers",
  "relativeDir": "M/Maximum Product of Three Numbers",
  "slug": "0628-maximum-product-of-three-numbers",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 45,
    "java": 26,
    "python": 17,
    "javascript": 10
  },
  "languages": {
    "cpp": "// Runtime: 66 ms (Top 61.05%) | Memory: 27.8 MB (Top 36.29%)\r\nclass Solution {\r\npublic:\r\n    int maximumProduct(vector<int>& nums) {\r\n\r\n        int min1 = INT_MAX , min2 = INT_MAX; // Both have the maximum value that is +infinte\r\n        int max1 = INT_MIN, max2 = INT_MIN , max3 = INT_MIN; //All these have the minimum value that is -infinte\r\n\r\n        //now finding all these value above declared.\r\n        for(int i = 0 ; i < nums.size() ; i++)\r\n        {\r\n            if(nums[i] > max1 )\r\n            {\r\n                max3 = max2 ;\r\n                max2 = max1;\r\n                max1 = nums[i];\r\n\r\n            }\r\n            else if(nums[i] > max2)\r\n            {\r\n                max3 = max2 ;\r\n                max2 = nums[i] ;\r\n\r\n            }\r\n            else if(nums[i] > max3)\r\n            {\r\n                max3 = nums[i] ;\r\n\r\n            }\r\n\r\n            if(nums[i] < min1)\r\n            {\r\n                min2 = min1 ;\r\n                min1 = nums[i] ;\r\n\r\n            }\r\n            else if(nums[i] < min2)\r\n            {\r\n                min2 = nums[i];\r\n\r\n            }\r\n        }\r\n        return max(min1*min2*max1 , max1*max2*max3);\r\n    }\r\n};",
    "python": "class Solution:\r\n    def maximumProduct(self, nums: List[int]) -> int:\r\n        # TC = O(NlogN) because sorting the array \r\n        # SC = O(1); no extra space needed; sorting was done in place.\r\n        \r\n        # sorting the array in descending order\r\n        nums.sort(reverse = True)\r\n        \r\n        # maximum product can only occur for:\r\n        # 1. positive no * positive no * positive no\r\n        # 2. negative no * negative no * positive no\r\n        \r\n        # one negative and two positives and all negatives wont give max product\r\n        # case where all numbers in the array are negative \r\n        # eg : [-4,-3,-2,-1] is covered in all positives \r\n        \r\n        return max(nums[0]*nums[1]*nums[2],nums[-1]*nums[-2]*nums[0])",
    "java": "// Runtime: 2 ms (Top 99.90%) | Memory: 54.7 MB (Top 23.03%)\r\nclass Solution {\r\n    public int maximumProduct(int[] nums) {\r\n        int min1 = Integer.MAX_VALUE, min2 = Integer.MAX_VALUE;\r\n        int max1 = Integer.MIN_VALUE, max2 = Integer.MIN_VALUE, max3 = Integer.MIN_VALUE;\r\n        for (int n: nums) {\r\n            if (n <= min1) {\r\n                min2 = min1;\r\n                min1 = n;\r\n            } else if (n <= min2) { // n lies between min1 and min2\r\n                min2 = n;\r\n            }\r\n            if (n >= max1) { // n is greater than max1, max2 and max3\r\n                max3 = max2;\r\n                max2 = max1;\r\n                max1 = n;\r\n            } else if (n >= max2) { // n lies betweeen max1 and max2\r\n                max3 = max2;\r\n                max2 = n;\r\n            } else if (n >= max3) { // n lies betwen max2 and max3\r\n                max3 = n;\r\n            }\r\n        }\r\n        return Math.max(min1 * min2 * max1, max1 * max2 * max3);\r\n    }\r\n}",
    "javascript": "var maximumProduct = function(nums) {\r\n    nums.sort((a, b) => a-b)\r\n    \r\n    var lastNumber = nums.length - 1\r\n    var midNumber = nums.length - 2\r\n    var firstNumber = nums.length - 3\r\n    var total = nums[lastNumber] * nums[midNumber] * nums[firstNumber]\r\n    return total\r\n    \r\n};"
  }
}
