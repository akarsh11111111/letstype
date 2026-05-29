export default {
  "id": 995,
  "name": "Minimum Number of K Consecutive Bit Flips",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips",
  "relativeDir": "M/Minimum Number of K Consecutive Bit Flips",
  "slug": "0995-minimum-number-of-k-consecutive-bit-flips",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 42,
    "java": 21,
    "python": 20,
    "javascript": 14
  },
  "languages": {
    "cpp": "\r\nclass Solution {\r\npublic:\r\n    int minKBitFlips(vector<int>& nums, int k) {\r\n        \r\n        int n = nums.size();\r\n        \r\n        int flips = 0;                  // flips on current positions\r\n        vector<int> flip(n+1,0);        // to set end pointer for a flip i.e i+k ->-1\r\n        int ops = 0;                    // answer\r\n        \r\n        for(int i=0;i<n;i++){\r\n            \r\n            flips +=flip[i];            // update flips for current position\r\n                                       \r\n            // even flips on 1 okay\r\n            if(nums[i]==1 && (flips)%2==0){\r\n                continue;\r\n            }\r\n            \r\n            // odd flips on 0 okay\r\n            \r\n            if(nums[i]==0 && (flips)%2!=0){\r\n                continue;\r\n            }\r\n            \r\n            // margin error as k bits flips is must\r\n            \r\n            if(i+k > n){\r\n                return -1;\r\n            }\r\n            \r\n            ops++;           //increment ans\r\n            flips++;         // do flip at this position\r\n            flip[i+k] = -1;  // set poiter where current flip ends\r\n            \r\n        }\r\n        \r\n        return ops;\r\n        \r\n    }\r\n};",
    "python": "# Runtime: 2365 ms (Top 19.91%) | Memory: 17.1 MB (Top 67.10%)\r\nclass Solution:\r\n    def minKBitFlips(self, nums: List[int], k: int) -> int:\r\n        flips = [0]*len(nums)\r\n        csum = 0\r\n\r\n        for left in range(0, len(nums)-k+1):\r\n            if (nums[left] + csum) % 2 == 0:\r\n                flips[left] += 1\r\n                csum += 1\r\n            if left >= k-1:\r\n                csum -= flips[left-k+1]\r\n\r\n        for check in range(len(nums)-k+1, len(nums)):\r\n            if (nums[check] + csum) % 2 == 0:\r\n                return -1\r\n            if check >= k-1:\r\n                csum -= flips[check-k+1]\r\n\r\n        return sum(flips)",
    "java": "// Runtime: 24 ms (Top 24.69%) | Memory: 90.8 MB (Top 76.54%)\r\nclass Solution {\r\n    public int minKBitFlips(int[] nums, int k) {\r\n        int target = 0, ans = 0;;\r\n        boolean[] flip = new boolean[nums.length+1];\r\n        for (int i = 0; i < nums.length; i++){\r\n            if (flip[i]){\r\n                target^=1;\r\n            }\r\n            if (i<nums.length-k+1&&nums[i]==target){\r\n                target^=1;\r\n                flip[i+k]^=true;\r\n                ans++;\r\n            }\r\n            if (i>nums.length-k&&nums[i]==target){\r\n                return -1;\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n}",
    "javascript": "var minKBitFlips = function(nums, k) {\r\n    let count = 0\r\n    \r\n    for(let i=0; i<nums.length; i++){\r\n        if (nums[i] == 0){\r\n            for(let j=0; j<k && i+k <= nums.length; j++){\r\n                nums[i+j] = 1 - nums[i+j]\r\n            }\r\n            count++\r\n        }\r\n    }\r\n        \r\n    return nums.every(n => n ==1) ? count : -1\r\n};"
  }
}
