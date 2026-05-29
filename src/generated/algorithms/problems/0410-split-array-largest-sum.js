export default {
  "id": 410,
  "name": "Split Array Largest Sum",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/split-array-largest-sum",
  "relativeDir": "S/Split Array Largest Sum",
  "slug": "0410-split-array-largest-sum",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 38,
    "java": 30,
    "python": 15,
    "javascript": 38
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int splitArray(vector<int>& nums, int m) {\r\n        long long low = 0;\r\n        long long res =0;\r\n        long long high = 1000000005;\r\n        while(low<=high){\r\n            long long mid = (low+high)/2;\r\n            int cnt = 1;\r\n            long long current_sum = 0;\r\n            int can = 1;\r\n            for(auto num: nums){\r\n                if(num > mid){\r\n                    can = 0;\r\n                    break;\r\n                }\r\n                if(current_sum+num>mid){\r\n                    cnt ++;\r\n                    current_sum = 0;\r\n                }\r\n                current_sum += num;\r\n            }\r\n            if(can==1){\r\n                if(cnt>m){\r\n                    low = mid+1;\r\n                }\r\n                else{\r\n                    res = mid;\r\n                    high = mid-1;\r\n                }\r\n            }\r\n            else{\r\n                low = mid+1;\r\n            }\r\n        }\r\n        return res;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def splitArray(self, nums: List[int], m: int) -> int:\r\n        lo, hi = max(nums), sum(nums)\r\n        while lo < hi:\r\n            mid = (lo+hi)//2\r\n            tot, cnt = 0, 1\r\n            for num in nums:\r\n                if tot+num<=mid: \r\n                    tot += num\r\n                else:\r\n                    tot = num\r\n                    cnt += 1\r\n            if cnt>m: lo = mid+1\r\n            else: hi = mid\r\n        return hi",
    "java": "class Solution {\r\n    int[] nums;\r\n    public int splitArray(int[] nums, int m) {\r\n        this.nums = nums;\r\n        int low = 0, high = 0, min = Integer.MAX_VALUE;\r\n        for(int i=0;i<nums.length;i++){\r\n            low = Math.max(low, nums[i]);\r\n            high += nums[i];\r\n        }\r\n        while(low <= high) {\r\n            int mid = (low + high) / 2;\r\n            if(required_no_of_chunks(mid, m)){\r\n               min = Math.min(min, mid);\r\n               high = mid - 1;\r\n            }\r\n            else low = mid + 1;\r\n        }\r\n        return min;\r\n    }\r\n    \r\n    private boolean required_no_of_chunks(int mid, int m){\r\n        int chunks = 0, i=0;\r\n        while(i < nums.length){\r\n            int val = 0;\r\n            while(i < nums.length && nums[i] + val <= mid) val += nums[i++];\r\n            chunks++;\r\n        }\r\n        return chunks <= m;\r\n    }\r\n}",
    "javascript": "// Runtime: 50 ms (Top 77.73%) | Memory: 49.00 MB (Top 11.74%)\r\n\r\nvar splitArray = function(nums, m) {\r\n    let low = Math.max(...nums);\r\n    let high = 0;\r\n    let ans = 0;\r\n    \r\n    for(let num of nums) {\r\n        high += num;\r\n    }\r\n    \r\n    while(low <= high) {\r\n        let mid = Math.floor(low + (high - low) / 2); // to prevent overflow\r\n        \r\n        if(isPossible(nums, mid, m)) {\r\n            ans = mid;\r\n            high = mid - 1;\r\n        } else {\r\n            low = mid + 1;\r\n        }\r\n    }\r\n    return ans;\r\n};\r\n\r\nfunction isPossible(arr, mid, noOfParts) {\r\n    let part = 1;\r\n    let sum = 0;\r\n    \r\n    for(let i = 0; i < arr.length; i++) {\r\n        sum += arr[i];\r\n        \r\n        if(sum > mid) {\r\n            part++;\r\n            sum = arr[i];\r\n        }\r\n    }\r\n    return part <= noOfParts; \r\n}"
  }
}
