export default {
  "id": 1262,
  "name": "Greatest Sum Divisible by Three",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/greatest-sum-divisible-by-three",
  "relativeDir": "G/Greatest Sum Divisible by Three",
  "slug": "1262-greatest-sum-divisible-by-three",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 29,
    "java": 46,
    "python": 34,
    "javascript": 18
  },
  "languages": {
    "cpp": "// Runtime: 44 ms (Top 95.18%) | Memory: 25.1 MB (Top 80.72%)\r\n\r\nclass Solution {\r\npublic:\r\n    int maxSumDivThree(vector<int>& nums) {\r\n        vector<int> twos = {(int)1e4+1, (int)1e4+1}, ones = {(int)1e4+1, (int)1e4+1};\r\n        int res = 0;\r\n        for(int i: nums) {\r\n            if(i%3 == 2) {\r\n                if(i <= twos[0]) {\r\n                    twos[1] = twos[0], twos[0] = i;\r\n                }\r\n                else if(i < twos[1]) twos[1] = i;\r\n            }\r\n            else if(i%3 == 1) {\r\n                if(i <= ones[0]) {\r\n                    ones[1] = ones[0], ones[0] = i;\r\n                }\r\n                else if(i < ones[1]) ones[1] = i;\r\n            }\r\n            res += i;\r\n        }\r\n        if(res%3 == 2)\r\n            return max(res - twos[0], res - ones[0] - ones[1]);\r\n        else if(res%3 == 1)\r\n            return max(res - ones[0], res - twos[0] - twos[1]);\r\n        return res;\r\n    }\r\n};",
    "python": "// Runtime: 190 ms (Top 92.53%) | Memory: 22.10 MB (Top 78.57%)\r\n\r\nfrom math import inf\r\n\r\n\r\nclass Solution:\r\n    def maxSumDivThree(self, nums: List[int]) -> int:\r\n        res = 0\r\n        r1_min1 = inf\r\n        r1_min2 = inf\r\n        r2_min1 = inf\r\n        r2_min2 = inf\r\n\r\n        for v in nums:\r\n            res += v\r\n            if v % 3 == 1:\r\n                if v < r1_min1:\r\n                    r1_min2 = r1_min1\r\n                    r1_min1 = v\r\n                elif v < r1_min2:\r\n                    r1_min2 = v\r\n            elif v % 3 == 2:\r\n                if v < r2_min1:\r\n                    r2_min2 = r2_min1\r\n                    r2_min1 = v\r\n                elif v < r2_min2:\r\n                    r2_min2 = v\r\n\r\n        if res % 3 == 1:\r\n            res -= min(r1_min1, r2_min1 + r2_min2)\r\n        elif res % 3 == 2:\r\n            res -= min(r2_min1, r1_min1 + r1_min2)\r\n\r\n        return res",
    "java": "// Runtime: 11 ms (Top 68.46%) | Memory: 54.3 MB (Top 56.38%)\r\n\r\nclass Solution {\r\n\r\n    public int maxSumDivThree(int[] nums) {\r\n        int r0 = 0;\r\n        int r1 = 0;\r\n        int r2 = 0;\r\n        for (int i = 0; i < nums.length; i++) {\r\n            int nr0 = r0;\r\n            int nr1 = r1;\r\n            int nr2 = r2;\r\n            int a = r0 + nums[i];\r\n            int b = r1 + nums[i];\r\n            int c = r2 + nums[i];\r\n            if (a % 3 == 0) {\r\n                nr0 = Math.max(nr0, a);\r\n            } else if (a % 3 == 1) {\r\n                nr1 = Math.max(nr1, a);\r\n            } else if (a % 3 == 2) {\r\n                nr2 = Math.max(nr2, a);\r\n            }\r\n\r\n            if (b % 3 == 0) {\r\n                nr0 = Math.max(nr0, b);\r\n            } else if (b % 3 == 1) {\r\n                nr1 = Math.max(nr1, b);\r\n            } else if (b % 3 == 2) {\r\n                nr2 = Math.max(nr2, b);\r\n            }\r\n\r\n            if (c % 3 == 0) {\r\n                nr0 = Math.max(nr0, c);\r\n            } else if (c % 3 == 1) {\r\n                nr1 = Math.max(nr1, c);\r\n            } else if (c % 3 == 2) {\r\n                nr2 = Math.max(nr2, c);\r\n            }\r\n            r0=nr0;\r\n            r1=nr1;\r\n            r2=nr2;\r\n        }\r\n\r\n        return r0;\r\n    }\r\n}",
    "javascript": "// Runtime: 134 ms (Top 41.38%) | Memory: 50.9 MB (Top 15.52%)\r\nvar maxSumDivThree = function(nums) {\r\n    // there are 3 options for how the sum fit's into 3 via mod % 3\r\n    // track those 3 options via indices in the dp array\r\n    // dp[0] = %3 === 0\r\n    // dp[1] = %3 === 1\r\n    // dp[2] = %3 === 2\r\n    let dp = new Array(3).fill(0);\r\n    for (let num of nums) {\r\n        for (let i of dp.slice(0)) {\r\n            let sum = i + num;\r\n            let mod = sum % 3;\r\n            // on each pass, set the value of dp[mod] to the Math.max val\r\n            dp[mod] = Math.max(dp[mod], sum);\r\n        }\r\n    }\r\n    return dp[0];\r\n};"
  }
}
