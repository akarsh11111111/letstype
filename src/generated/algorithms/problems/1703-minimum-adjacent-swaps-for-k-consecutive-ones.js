export default {
  "id": 1703,
  "name": "Minimum Adjacent Swaps for K Consecutive Ones",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-adjacent-swaps-for-k-consecutive-ones",
  "relativeDir": "M/Minimum Adjacent Swaps for K Consecutive Ones",
  "slug": "1703-minimum-adjacent-swaps-for-k-consecutive-ones",
  "availableLanguages": [
    "java",
    "python"
  ],
  "defaultLanguage": "java",
  "lineCounts": {
    "java": 34,
    "python": 37
  },
  "languages": {
    "python": "class Solution:\r\n    def minMoves(self, nums: List[int], k: int) -> int:\r\n        p = [i for i, v in enumerate(nums) if v == 1]\r\n        # p[i]: the position of i-th 1\r\n        n = len(p)\r\n        presum = [0]*(n+1)\r\n        # presum[i]: sum(p[0]...p[i-1])\r\n        for i in range(n):\r\n            presum[i+1] = presum[i]+p[i]\r\n\r\n        res = inf\r\n\r\n        # sliding window\r\n        if k % 2 == 1:\r\n            # if odd\r\n            radius = (k-1)//2\r\n            for i in range(radius, n-radius):\r\n                # i-radius ... i ... i+radius\r\n                # move radius to i\r\n                # i+1, ..., i+radius\r\n                right = presum[i+radius+1]-presum[i+1]\r\n                # i-radius, ..., i-1\r\n                left = presum[i]-presum[i-radius]\r\n                res = min(res, right-left)\r\n            return res-radius*(radius+1)\r\n        else:\r\n            # even\r\n            radius = (k-2)//2\r\n            for i in range(radius, n-radius-1):\r\n                # i-radius ... i i+1 ... i+radius+1\r\n                # move radius to i (moving to i+1 is also OK)\r\n                # i+1, ..., i+radius+1\r\n                right = presum[i+radius+2]-presum[i+1]\r\n                # i-radius, ..., i-1\r\n                left = presum[i]-presum[i-radius]\r\n                res = min(res, right-left-p[i])\r\n            return res-radius*(radius+1)-(radius+1)",
    "java": "// Runtime: 33 ms (Top 32.47%) | Memory: 112.8 MB (Top 59.74%)\r\nclass Solution {\r\n    public int minMoves(int[] nums, int k) {\r\n        var gaps = new ArrayList<Integer>();\r\n        for(int i = 0, last = -1; i < nums.length; ++i){\r\n            if (nums[i] == 1){\r\n                if (last > -1){\r\n                    gaps.add(i-1-last);\r\n                }\r\n                last = i;\r\n            }\r\n        }\r\n        int lsum = 0, rsum = 0, wlsum = 0, wrsum = 0;\r\n        for(int i = k/2-1; i >= 0; --i){\r\n            lsum += gaps.get(i);//lsum = 3+0\r\n            wlsum += lsum;//wlsum = 1*3+2*0\r\n        }\r\n        for(int i = k/2; i < k-1; ++i){\r\n            rsum += gaps.get(i);//rsum = 2+5\r\n            wrsum += rsum;//wrsum = 2*2+1*5\r\n        }\r\n        int ans = wlsum+wrsum;\r\n        for(int p = 0, q = k/2, r = k-1; r < gaps.size(); ++p, ++q, ++r){\r\n            wlsum += (k/2)*gaps.get(q) - lsum;\r\n            lsum += gaps.get(q) - gaps.get(p);\r\n\r\n            rsum += gaps.get(r) - gaps.get(q);\r\n            wrsum += rsum-((k-1)/2)*gaps.get(q);\r\n\r\n            ans = Math.min(ans,wlsum+wrsum);\r\n        }\r\n        return ans;\r\n    }\r\n}"
  }
}
