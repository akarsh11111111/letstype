export default {
  "id": 801,
  "name": "Minimum Swaps To Make Sequences Increasing",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-swaps-to-make-sequences-increasing",
  "relativeDir": "M/Minimum Swaps To Make Sequences Increasing",
  "slug": "0801-minimum-swaps-to-make-sequences-increasing",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 44,
    "java": 20,
    "python": 24,
    "javascript": 19
  },
  "languages": {
    "cpp": "// Runtime: 370 ms (Top 57.12%) | Memory: 107.8 MB (Top 57.19%)\r\nclass Solution {\r\npublic:\r\n    int n;\r\n    vector<int>nums1,nums2;\r\n    int dp[200005][3];\r\n    int find(int index,int sp)\r\n    {\r\n        if(index==n)\r\n        {\r\n            return 0;\r\n        }\r\n        if(dp[index][sp]!=-1)\r\n        {\r\n            return dp[index][sp];\r\n        }\r\n        int prev1=nums1[index-1];\r\n        int prev2=nums2[index-1];\r\n        int ans=1e8;\r\n        if(sp)\r\n        {\r\n            swap(prev1,prev2);\r\n        }\r\n        if(prev1<nums1[index]&&prev2<nums2[index])\r\n        {\r\n            ans=min(ans,find(index+1,0));\r\n        }\r\n        if(prev1<nums2[index]&&prev2<nums1[index])\r\n        {\r\n            ans=min(ans,1+find(index+1,1));\r\n        }\r\n        return dp[index][sp]=ans;\r\n    }\r\n    int minSwap(vector<int>& nums1, vector<int>& nums2)\r\n    {\r\n        memset(dp,-1,sizeof(dp));\r\n        nums1.insert(nums1.begin(),-1);\r\n        nums2.insert(nums2.begin(),-1);\r\n        n=nums1.size();\r\n        this->nums1=nums1;\r\n        this->nums2=nums2;\r\n        return find(1,0);\r\n    }\r\n};",
    "python": "# Runtime: 1198 ms (Top 36.1%) | Memory: 149.20 MB (Top 27.6%)\r\n\r\nclass Solution:\r\n    def minSwap(self, nums1: List[int], nums2: List[int]) -> int:\r\n        dp = [[-1]*2 for i in range(len(nums1))]\r\n        \r\n        def solve(prev1, prev2, i, swaped):\r\n            if i >= len(nums1): return 0\r\n            if dp[i][swaped] != -1: return dp[i][swaped]\r\n                        \r\n            ans = 2**31\r\n            \r\n            # No Swap\r\n            if nums1[i] > prev1 and nums2[i] > prev2:\r\n                ans = solve(nums1[i], nums2[i], i+1, 0) \r\n            \r\n            # Swap\r\n            if nums1[i] > prev2 and nums2[i] > prev1:\r\n                ans = min(ans, 1 + solve(nums2[i], nums1[i], i+1, 1)) \r\n            \r\n            dp[i][swaped] = ans\r\n            return ans\r\n        \r\n        return solve(-1, -1, 0, 0)",
    "java": "class Solution {\r\n    public int minSwap(int[] nums1, int[] nums2) {\r\n        int p1 = nums1[0], p2 = nums2[0], ans = 0;\r\n        int len = nums1.length, s = 0, count = 0;\r\n        for (int i=1; i < len; i++) {\r\n            int n1 = nums1[i], n2 = nums2[i];\r\n            if (n1 > p1 && n2 > p2) {\r\n                if (n1 > p2 && n2 > p1) {\r\n                    ans += Math.min(count, i - s - count);\r\n                    s = i; count = 0;\r\n                }\r\n                p1 = n1; p2 = n2;\r\n            } else {\r\n                count++;\r\n                p1 = n2; p2 = n1;\r\n            }\r\n        }\r\n        return ans + Math.min(count, len - s - count);\r\n    }\r\n}",
    "javascript": "// Runtime: 71 ms (Top 90.91%) | Memory: 54.30 MB (Top 81.82%)\r\n\r\nvar minSwap = function(a, b) {\r\n    let n1 = 0, s1 = 1, len = a.length;\r\n    for(let i = 1 ; i < len ; i ++) {\r\n        let n2 = Number.MAX_VALUE, s2 = Number.MAX_VALUE;\r\n        if(a[i-1] < a[i] && b[i-1] < b[i]) {\r\n            n2 = Math.min(n2, n1);\r\n            s2 = Math.min(s2, s1 + 1);\r\n        }\r\n        if(a[i-1] < b[i] && b[i-1] < a[i]) {\r\n            n2 = Math.min(n2, s1);\r\n            s2 = Math.min(s2, n1 + 1);\r\n        }\r\n        n1 = n2;\r\n        s1 = s2;\r\n    }\r\n    return Math.min(n1, s1);\r\n};"
  }
}
