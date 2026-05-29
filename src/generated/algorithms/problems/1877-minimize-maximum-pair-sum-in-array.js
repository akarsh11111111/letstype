export default {
  "id": 1877,
  "name": "Minimize Maximum Pair Sum in Array",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimize-maximum-pair-sum-in-array",
  "relativeDir": "M/Minimize Maximum Pair Sum in Array",
  "slug": "1877-minimize-maximum-pair-sum-in-array",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 14,
    "java": 16,
    "python": 7,
    "javascript": 12
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int minPairSum(vector<int>& nums){\r\n\t    //sort the array\r\n        sort(nums.begin(),nums.end());\r\n        int start=0,end=nums.size()-1,min_max_pair_sum=0;\r\n\t\t//Observe the pattern of taking the first and last element, second and second last element... and soo onn.. \r\n\t\t//would help you to minimize the maximum sum.\r\n        while(start<end){\r\n            min_max_pair_sum=max(min_max_pair_sum,nums[start++]+nums[end--]);\r\n        }\r\n        return min_max_pair_sum;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def minPairSum(self, nums: List[int]) -> int:\r\n        pair_sum = []\r\n        nums.sort()\r\n        for i in range(len(nums)//2):\r\n            pair_sum.append(nums[i]+nums[len(nums)-i-1])\r\n        return max(pair_sum)",
    "java": "// Runtime: 89 ms (Top 12.88%) | Memory: 106.2 MB (Top 42.39%)\r\nclass Solution {\r\n    public int minPairSum(int[] nums) {\r\n        Arrays.sort(nums);\r\n\r\n        int output = Integer.MIN_VALUE;\r\n\r\n        //This is greedy, so n/2 pairs must be from start and end and move inwards\r\n        for(int i=0, j=nums.length - 1; i<nums.length/2; i++, j--)\r\n        {\r\n            output = Math.max(output, nums[i] + nums[j]);\r\n        }\r\n\r\n        return output;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number[]} nums\r\n * @return {number}\r\n */\r\nvar minPairSum = function(nums) {\r\n    nums.sort((a,b) => a-b);\r\n    let max = 0;\r\n    for(let i=0; i<nums.length/2; i++){\r\n        max = Math.max(max , nums[i] + nums[nums.length-1-i]);\r\n    }\r\n    return max;\r\n};"
  }
}
