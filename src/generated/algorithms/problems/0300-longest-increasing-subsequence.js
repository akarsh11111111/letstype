export default {
  "id": 300,
  "name": "Longest Increasing Subsequence",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/longest-increasing-subsequence",
  "relativeDir": "L/Longest Increasing Subsequence",
  "slug": "0300-longest-increasing-subsequence",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 15,
    "java": 36,
    "python": 48,
    "javascript": 14
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int lengthOfLIS(vector<int>& nums) {\r\n        int n = nums.size();\r\n        vector<int>dp(n,1);\r\n        for(int i=n-2;i>=0;i--){\r\n            for(int j=i+1;j<n;j++){\r\n                if(nums[j]>nums[i])dp[i]=max(dp[i],1+dp[j]);\r\n            }\r\n        }\r\n       int mx=0;\r\n       for(int i=0;i<n;i++)mx=max(mx,dp[i]);\r\n       return mx;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def lengthOfLIS(self, nums: list[int]) -> int:\r\n\r\n        # Initialize the result\r\n        res = []\r\n\r\n        # Binary search to find the index of the smallest number in result that is greater than or equal to the target\r\n        def binarySearch(l, r, target):\r\n\r\n            nonlocal res\r\n\r\n            # If the left and right pointers meet, we have found the smallest number that is greater than the target\r\n            if l == r:\r\n                return l\r\n\r\n            # Find the mid pointer\r\n            m = (r - l) // 2 + l\r\n\r\n            # If the number at the mid pointer is equal to the target, we have found a number that is equal to the target\r\n            if res[m] == target:\r\n                return m\r\n\r\n            # Else if the number at the mid poitner is less than the target, we search the right side\r\n            elif res[m] < target:\r\n                return binarySearch(m + 1, r, target)\r\n\r\n            # Else, we search the left side including the number at mid pointer because it is one of the possible solution since it is greater than the target\r\n            else:\r\n                return binarySearch(l, m, target)\r\n\r\n        # Iterate through all numbers\r\n        for n in nums:\r\n\r\n            # If the last number in the result is less than the current number\r\n            if not res or res[-1] < n:\r\n\r\n                # Append the current number to the result\r\n                res.append(n)\r\n\r\n                continue\r\n\r\n            # Else, find the index of the smallest number in the result that is greater than or equal to the current number\r\n            i = binarySearch(0, len(res) - 1, n)\r\n\r\n            # Replace the current number at such index\r\n            res[i] = n\r\n\r\n        return len(res)",
    "java": "// Runtime: 15 ms (Top 68.33%) | Memory: 43.7 MB (Top 85.25%)\r\nclass Solution {\r\n    public int lengthOfLIS(int[] nums) {\r\n\r\n        ArrayList<Integer> lis = new ArrayList<>();\r\n\r\n        for(int num:nums){\r\n\r\n            int size = lis.size();\r\n\r\n            if(size==0 ||size>0 && num>lis.get(size-1)){\r\n                lis.add(num);\r\n            }else{\r\n                int insertIndex = bs(lis,num);\r\n                lis.set(insertIndex,num);\r\n            }\r\n        }\r\n\r\n        return lis.size();\r\n    }\r\n\r\n    int bs(List<Integer> list, int target){\r\n        int lo = 0;\r\n        int hi = list.size()-1;\r\n\r\n        while(lo<hi){\r\n            int mid = (lo+hi)/2;\r\n            if(list.get(mid)<target){\r\n                lo=mid+1;\r\n            }else{\r\n                hi=mid;\r\n            }\r\n        }\r\n        return lo;\r\n    }\r\n}",
    "javascript": "var lengthOfLIS = function(nums) {\r\n  let len = nums.length;\r\n  let dp = Array.from({length: len}, v => 1);\r\n  \r\n  for (let i = 1 ; i < len; i++) {\r\n    for (let j = 0; j < i; j++) {\r\n      if (nums[i] > nums[j] && dp[i] <= dp[j]) {\r\n        dp[i] = dp[j] + 1;\r\n      }\r\n    }\r\n  }\r\n  \r\n  return Math.max(...dp);\r\n};"
  }
}
