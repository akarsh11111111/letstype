export default {
  "id": 976,
  "name": "Largest Perimeter Triangle",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/largest-perimeter-triangle",
  "relativeDir": "L/Largest Perimeter Triangle",
  "slug": "0976-largest-perimeter-triangle",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 14,
    "java": 12,
    "python": 8,
    "javascript": 26
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int largestPerimeter(vector<int>& nums) {\r\n\t// sort the elements \r\n        sort(nums.begin(),nums.end());\r\n\t\t// iterate in everse order to get maximum perimeter\r\n        for (int i=nums.size()-2; i>=1 ; i--){\r\n\t\t//Triangle is formed if sum of two sides is greater than third side\r\n        if (nums[i]+nums[i-1] >nums[i+1])return (nums[i]+nums[i+1]+nums[i-1]); // return perimeter which is sum of three sides\r\n        }\r\n        return 0; // when no triangle possible it will come out of loop so return 0 here\r\n        \r\n    }\r\n};",
    "python": "class Solution:\r\n    def largestPerimeter(self, nums: List[int]) -> int:\r\n        nums=sorted(nums,reverse=True)\r\n        l=len(nums)\r\n        for i in range(l-2):\r\n            if nums[i]<nums[i+1]+nums[i+2]: #condition if triangle can be formed\r\n                return  nums[i]+nums[i+1]+nums[i+2]\r\n        return 0",
    "java": "// Runtime: 12 ms (Top 44.30%) | Memory: 54.1 MB (Top 55.23%)\r\nclass Solution {\r\n    public int largestPerimeter(int[] nums) {\r\n        Arrays.sort(nums);\r\n\r\n        for(int i = nums.length - 3; i >= 0; i--) {\r\n            if(nums[i] + nums[i + 1] > nums[i + 2])\r\n                return nums[i] + nums[i + 1] + nums[i + 2];\r\n        }\r\n        return 0;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number[]} nums\r\n * @return {number}\r\n */\r\nvar largestPerimeter = function(nums) {\r\n    const sorted=nums.sort((a,b)=>a-b);\r\n    const result=[];\r\n    \r\n    for(let i=0;i<sorted.length;i++){\r\n        \r\n        if((sorted[i]+sorted[i+1]>sorted[i+2])&&(sorted[i+2]+sorted[i+1]>sorted[i])&&(sorted[i]+sorted[i+2]>sorted[i+1])){\r\n            \r\n           result.push(sorted[i]+sorted[i+1]+sorted[i+2]);\r\n        \r\n        }\r\n    }\r\n    if(result.length!==0){\r\n        \r\n    return Math.max(...result); \r\n        \r\n    }else{\r\n        \r\n    return 0;\r\n        \r\n    }\r\n};"
  }
}
