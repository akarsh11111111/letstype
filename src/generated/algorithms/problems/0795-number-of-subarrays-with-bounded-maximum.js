export default {
  "id": 795,
  "name": "Number of Subarrays with Bounded Maximum",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/number-of-subarrays-with-bounded-maximum",
  "relativeDir": "N/Number of Subarrays with Bounded Maximum",
  "slug": "0795-number-of-subarrays-with-bounded-maximum",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 25,
    "java": 22,
    "python": 21,
    "javascript": 13
  },
  "languages": {
    "cpp": "// Runtime: 46 ms (Top 85.16%) | Memory: 52.70 MB (Top 42.49%)\r\n\r\nclass Solution {\r\npublic:\r\n    int numSubarrayBoundedMax(vector<int>& nums, int left, int right) {\r\n        int n =  nums.size();\r\n        int si =0;//starting index\r\n        int ei = 0; //ending index\r\n        int result =0, prev_count =0;\r\n        while(ei < n){\r\n            if(left <= nums[ei]  &&  nums[ei]<= right){\r\n              prev_count = ei- si +1;\r\n              result += prev_count;\r\n            }else if (  nums[ei] < left){\r\n                 result += prev_count;\r\n            }else{\r\n                //right < nums[ei]\r\n                si = ei +1;\r\n                prev_count =0;\r\n            }\r\n            ei++;\r\n       }\r\n      return result;\r\n    }\r\n};",
    "python": "# Runtime: 1574 ms (Top 5.27%) | Memory: 22.4 MB (Top 17.30%)\r\nclass Solution:\r\n    def numSubarrayBoundedMax(self, nums: List[int], left: int, right: int) -> int:\r\n        n = len(nums)\r\n        stack = []\r\n        next_greater = [n] * n\r\n        prev_greater = [-1] * n\r\n        for i in range(n):\r\n            while len(stack) > 0 and nums[i] > nums[stack[-1]]:\r\n                curr = stack.pop()\r\n                next_greater[curr] = i\r\n            if len(stack) > 0:\r\n                prev_greater[i] = stack[-1]\r\n            stack.append(i)\r\n        res = 0\r\n        for i in range(n):\r\n            if left <= nums[i] <= right:\r\n                l = prev_greater[i]\r\n                r = next_greater[i]\r\n                res += (i - l) * (r - i)\r\n        return res",
    "java": "// Runtime: 4 ms (Top 82.54%) | Memory: 72.1 MB (Top 7.10%)\r\nclass Solution {\r\n    public int numSubarrayBoundedMax(int[] nums, int left, int right) {\r\n        int res = 0;\r\n\r\n        int s = -1;\r\n        int e = -1;\r\n\r\n        for(int i=0;i<nums.length;i++){\r\n\r\n            if(nums[i] >= left && nums[i] <= right){\r\n                e = i;\r\n            }else if(nums[i] > right){\r\n                e = s = i;\r\n            }\r\n\r\n            res += (e - s);\r\n        }\r\n\r\n        return res;\r\n    }\r\n}",
    "javascript": "// Runtime: 53 ms (Top 100.0%) | Memory: 47.90 MB (Top 57.14%)\r\n\r\nvar numSubarrayBoundedMax = function(nums, left, right) {\r\n    let ans = 0, low = 0, mid = 0\r\n    for (let i = 0; i < nums.length; i++) {\r\n        let num = nums[i]\r\n        if (num > right) mid = 0\r\n        else ans += ++mid\r\n        if (num >= left) low = 0\r\n        else ans -= ++low\r\n    }\r\n    return ans\r\n};"
  }
}
