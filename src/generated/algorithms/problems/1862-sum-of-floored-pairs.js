export default {
  "id": 1862,
  "name": "Sum of Floored Pairs",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/sum-of-floored-pairs",
  "relativeDir": "S/Sum of Floored Pairs",
  "slug": "1862-sum-of-floored-pairs",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 53,
    "java": 29,
    "python": 9
  },
  "languages": {
    "cpp": "// Runtime: 687 ms (Top 46.29%) | Memory: 121.4 MB (Top 57.71%)\r\nclass Solution {\r\n\r\nprivate:\r\n\r\n    int MOD = 1e9 + 7;\r\n\r\npublic:\r\n\r\n    int sumOfFlooredPairs(vector<int>& nums) {\r\n\r\n        // first of all, we record the max value\r\n        int max_n = INT_MIN;\r\n        for(int n : nums) max_n = max(max_n, n);\r\n\r\n        // then the occurences for each number in [0, max]\r\n        vector<int> occs(max_n + 1, 0);\r\n        for(int n : nums) occs[n]++;\r\n\r\n        // prefix sum algorithm to accumulate the occurences\r\n        vector<int> occs_acc(max_n + 1, 0);\r\n        for(int i = 1; i < max_n + 1; ++i) {\r\n            occs_acc[i] = occs[i] + occs_acc[i - 1];\r\n        }\r\n\r\n        // long long needed to prevent overflows\r\n        long long ans = 0;\r\n        for(int i = 0; i < max_n + 1; ++i) {\r\n\r\n            // just handle numbers that occur at least once\r\n            if(occs[i] != 0) {\r\n\r\n                int k = 1;\r\n                int k_next;\r\n\r\n                // for each multiple of i\r\n                do {\r\n\r\n                    k_next = k + 1;\r\n\r\n                    // \"right and left\" multipliers in occs_acc\r\n                    int r = min(k_next * i - 1, max_n);\r\n                    int l = k * i - 1;\r\n\r\n                    ans += ((long long) occs_acc[r] - (long long) occs_acc[l]) * (long long) occs[i] * k++;\r\n\r\n                } while(k_next * i - 1 < max_n);\r\n            }\r\n        }\r\n\r\n        return ans % MOD;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def sumOfFlooredPairs(self, nums: List[int]) -> int:\r\n        \r\n        incs, counter=[0]*(max(nums)+1), Counter(nums)            # To store all the quotients increases; counter\r\n        for num in counter:                                       # Loop over all the divisors\r\n            for j in range(num, len(incs), num):                  # Loop over all the possible dividends where the quotient increases\r\n                incs[j] += counter[num]                           # Increment the increases in quotients\r\n        quots=list(accumulate(incs))                              # Accumulate the increases to get the sum of quotients\r\n        return sum([quots[num] for num in nums]) % 1_000_000_007  # Sum up all the quotients for all the numbers in the list.",
    "java": "class Solution {\r\n    public int sumOfFlooredPairs(int[] nums) {\r\n        Arrays.sort(nums);\r\n        int n=nums.length;\r\n        long cnt[]=new long[nums[n-1]+2];\r\n        for(int num:nums){\r\n            cnt[num+1]++;\r\n        }\r\n        for(int i=1;i<cnt.length;i++){\r\n            cnt[i]+=cnt[i-1];\r\n        }\r\n        long res=0;\r\n        long mod=1000000007;\r\n        long dp[]=new long[cnt.length];\r\n        for(int num:nums){\r\n            if(dp[num]!=0){\r\n                res=(res+dp[num])%mod;\r\n                continue;\r\n            }\r\n            long tot=0;\r\n            for(int j=num;j<cnt.length-1;j+=num){\r\n                tot=(tot+(j/num)*(cnt[Math.min(j+num-1,nums[n-1])+1]-cnt[j]))%mod;\r\n            }\r\n            dp[num]=tot;\r\n            res=(res+tot)%mod;\r\n        }\r\n        return (int)res;\r\n    }\r\n}"
  }
}
