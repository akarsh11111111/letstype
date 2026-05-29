export default {
  "id": 1493,
  "name": "Longest Subarray of 1's After Deleting One Element",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element",
  "relativeDir": "L/Longest Subarray of 1's After Deleting One Element",
  "slug": "1493-longest-subarray-of-1-s-after-deleting-one-element",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 22,
    "java": 32,
    "python": 29,
    "javascript": 24
  },
  "languages": {
    "cpp": "// Runtime: 76 ms (Top 31.66%) | Memory: 36.5 MB (Top 84.20%)\r\nclass Solution {\r\npublic:\r\n    int longestSubarray(vector<int>& nums) {\r\n        int x=0,y=0,cnt=0;\r\n        for(int i=0;i<nums.size();i++){\r\n            if(nums[i]==1){\r\n                x++;\r\n            }\r\n            else if(nums[i]==0){\r\n               cnt=max(cnt,x+y);\r\n                y=x;\r\n                x=0;\r\n            }\r\n            if(i==nums.size()-1){\r\n                cnt=max(cnt,x+y);\r\n            }\r\n        }\r\n        if(cnt==nums.size())return cnt-1;\r\n        return cnt;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def longestSubarray(self, nums: List[int]) -> int:\r\n        n = len(nums)\r\n        pre, suf = [1]*n, [1]*n\r\n        if nums[0] == 0:pre[0] = 0\r\n        if nums[-1] == 0:suf[-1] = 0\r\n        \r\n        for i in range(1, n):\r\n            if nums[i] == 1 and nums[i-1] == 1:\r\n                pre[i] = pre[i-1] + 1\r\n            elif nums[i] == 0:\r\n                pre[i] = 0\r\n        \r\n        for i in range(n-2, -1, -1):\r\n            if nums[i] == 1 and nums[i+1] == 1:\r\n                suf[i] = suf[i+1] + 1\r\n            elif nums[i] == 0:\r\n                suf[i] = 0\r\n        \r\n        ans = 0\r\n        for i in range(n):\r\n            if i == 0:\r\n                ans = max(ans, suf[i+1])\r\n            elif i == n-1:\r\n                ans = max(ans, pre[i-1])\r\n            else:\r\n                ans = max(ans, pre[i-1] + suf[i+1])\r\n        \r\n        return ans",
    "java": "class Solution {\r\n    public int longestSubarray(int[] nums) {\r\n        List<Integer> groups = new ArrayList<>();\r\n        for (int i = 0; i < nums.length; i++) {\r\n            if (nums[i] == 0)\r\n                groups.add(nums[i]);\r\n            if (nums[i] == 1) {\r\n                int count = 0;\r\n                while (i < nums.length && nums[i] == 1) {\r\n                    count++;\r\n                    i++;\r\n                }\r\n                groups.add(count);\r\n                if (i < nums.length && nums[i] == 0)\r\n                    groups.add(0);\r\n            }\r\n        }\r\n        int max = 0;\r\n        if (groups.size() == 1) {\r\n            return groups.get(0) - 1;\r\n        }\r\n        for (int i = 0; i < groups.size(); i++) {\r\n            if (i < groups.size() - 2) {\r\n                max = Math.max(max, groups.get(i) + groups.get(i+2));\r\n            } else {\r\n                max = Math.max(max, groups.get(i));\r\n            }\r\n        }\r\n        \r\n        return max;\r\n    }\r\n}",
    "javascript": "var longestSubarray = function(nums) {\r\n    let l = 0, r = 0;\r\n    let longest = 0;\r\n    // Keep track of the idx where the last zero was seen\r\n    let zeroIdx = null;\r\n    while (r < nums.length) {\r\n        // If we encounter a zero\r\n        if (nums[r] === 0) {\r\n            // If this is the first zero encountered, then set the zeroIdx to the current r index\r\n            if (zeroIdx === null) zeroIdx = r;\r\n            else {\r\n                // If we've already encountered a zero, then set the l index to the zeroIdx + 1,\r\n\t\t\t\t// effectively removing that zero from the subarray\r\n                l = zeroIdx + 1;\r\n                // Then update the zeroIdx to the current r index\r\n                // This way there will be, at most, one zero in the subarray at all times\r\n                zeroIdx = r;\r\n            }\r\n        }\r\n        longest = Math.max(longest, r - l);\r\n        r++;\r\n    }\r\n    return longest;\r\n};"
  }
}
