export default {
  "id": 16,
  "name": "3Sum Closest",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/3sum-closest",
  "relativeDir": "0-9/3Sum Closest",
  "slug": "0016-3sum-closest",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 25,
    "python": 18,
    "javascript": 36
  },
  "languages": {
    "cpp": "// Runtime: 516 ms (Top 46.24%) | Memory: 16.3 MB (Top 87.10%)\r\nclass Solution {\r\npublic:\r\n    int threeSumClosest(vector<int>& nums, int target) {\r\n      sort(nums.begin(),nums.end());\r\n        int n=nums.size(),ans;\r\n        int diff=INT_MAX;\r\n        for(int i=0;i<n-2;i++)// fixating the firstt element\r\n        {\r\n               int l=i+1, r= n-1;\r\n               while(l<r)\r\n               {\r\n                   int sum =nums[i]+nums[l]+nums[r];\r\n                   if(sum == target)return sum;\r\n                   if(abs(sum-target)<diff)\r\n                   { // updating the sum if sum so far. is closest to target\r\n                      diff=abs(sum-target);\r\n                      ans=sum;\r\n                    }\r\n                  (sum > target) ? r-- : l++;\r\n               }\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 1535 ms (Top 7.9%) | Memory: 16.58 MB (Top 11.9%)\r\n\r\nclass Solution:\r\n    def threeSumClosest(self, nums: List[int], target: int) -> int:\r\n        closet = float('inf')\r\n        nums.sort()\r\n        for i in range(len(nums) - 2):\r\n            l, r = i + 1, len(nums) - 1\r\n            while l < r:\r\n                sum3 = nums[i] + nums[l] + nums[r]\r\n                print(sum3)\r\n                if sum3 < target:\r\n                    l += 1\r\n                else:\r\n                    r -=1\r\n                if abs(sum3 - target) < abs(closet - target):\r\n                    closet = sum3\r\n        return closet",
    "javascript": "/**\r\n * @param {number[]} nums\r\n * @param {number} target\r\n * @return {number}\r\n */\r\nvar threeSumClosest = function(nums, target) {\r\n    // TC : O(n^2)\r\n    const n = nums.length;\r\n    nums.sort((x, y) => x - y);\r\n    var result = nums[1]+nums[0]+nums[2]\r\n    \r\n    for(var i = 0 ; i< n-1 ; i++)\r\n    {\r\n        var low = i+1;\r\n        var high = n-1;\r\n        \r\n        while(low < high){\r\n            var sum = nums[i] + nums[low] + nums[high];\r\n            \r\n            if(target == sum)\r\n                return sum;\r\n            \r\n            if(Math.abs(sum-target) < Math.abs(result - target)){\r\n                result = sum;\r\n            }\r\n            \r\n            if(sum > target)\r\n                high -= 1;\r\n            \r\n            else\r\n                low += 1;\r\n            \r\n        }\r\n    }\r\n    return result;\r\n};"
  }
}
