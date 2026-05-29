export default {
  "id": 2172,
  "name": "Maximum AND Sum of Array",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-and-sum-of-array",
  "relativeDir": "M/Maximum AND Sum of Array",
  "slug": "2172-maximum-and-sum-of-array",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 38,
    "java": 41,
    "python": 19,
    "javascript": 30
  },
  "languages": {
    "cpp": "class Solution {\r\nprivate:\r\n    int dp[20][60000];\r\n    vector<int> a;\r\n    int n;\r\n    int k;\r\n    // n numbers, k slots\r\n    int ans;\r\n    int h[12];  // h[i] == 3^i\r\n    int search(int start, int mask) {\r\n        if (start == n) return 0;\r\n        if (dp[start][mask] != -1) return dp[start][mask];\r\n        // try to push a[start] into slot 1 ~ k\r\n        for (int i = 1; i <= k; i++) {\r\n            int cnt = (mask % h[i+1]) / h[i];\r\n            if (cnt <= 1) {\r\n                dp[start][mask] = max(dp[start][mask], (a[start] & i) + search(start+1, mask + h[i]));\r\n            }\r\n        }\r\n        return dp[start][mask];\r\n    }\r\npublic:\r\n    int maximumANDSum(vector<int>& nums, int numSlots) {\r\n        // states: at most 3^k\r\n        // search: k\r\n        a.assign(nums.begin(), nums.end());\r\n        memset(dp, -1, sizeof(dp));\r\n        // dp[i][mask]: the answer for nums[i:] with mask   (based-3)\r\n        // a 3^1 + b 3^2 + c 3^3 + ...\r\n        n = nums.size();\r\n        k = numSlots;\r\n        ans = 0;\r\n        h[0] = 1;\r\n        for (int i = 1; i < 12; i++)\r\n\t\t\th[i] = h[i-1] * 3;\r\n        return search(0, 0);\r\n    }\r\n};",
    "python": "# Runtime: 1881 ms (Top 9.44%) | Memory: 23.9 MB (Top 80.86%)\r\nfrom functools import lru_cache, cache\r\n\r\nclass Solution:\r\n    def maximumANDSum(self, nums: List[int], numSlots: int) -> int:\r\n        @cache\r\n        def dp(i=0, m1=0, m2=0): # mask1, mask2\r\n            if i == len(nums):\r\n                return 0\r\n            ans = 0\r\n            for s in range(numSlots):\r\n                if m2 & (1 << s) == 0: # i.e. 0b0?, implying the slot is not full\r\n                    if m1 & (1 << s) == 0: # 0b00 + 1 => 0b01\r\n                        nm1 = m1 | (1 << s); nm2 = m2\r\n                    else: # 0b01 + 1 => 0b10\r\n                        nm1 = m1 & ~(1 << s); nm2 = m2 | (1 << s)\r\n                    ans = max(ans, dp(i + 1, nm1, nm2) + ((s + 1) & nums[i])) # s + 1 is the actual slot no.\r\n            return ans\r\n        return dp()",
    "java": "// Runtime: 11 ms (Top 93.9%) | Memory: 44.11 MB (Top 57.7%)\r\n\r\nclass Solution {\r\n    int[] memo;\r\n    int[] nums;\r\n    int numSlots;\r\n    public int maximumANDSum(int[] nums, int numSlots) {\r\n        this.memo=new int[1<<(2*numSlots)];\r\n        this.nums=nums;\r\n        this.numSlots=numSlots;\r\n        return helper(0,0);\r\n    }\r\n    int helper(int numIndex, int set) {\r\n        // Base case when we used all the numbers \r\n        if(numIndex==nums.length) return 0;\r\n        // Set informs BOTH the slots used and the numIndex. If the later\r\n        // statement surprises you, think it like this: We must place all\r\n        // the numbers in a slot, so how many slots are used in numIndex=10?\r\n        // yes! 9 slots (because we will use the 10th now!), so the set will\r\n        // have 10 ones. No other numIndex will have 9 ones. So having memo\r\n        // with 2 dimentions would be redundant, as you would naver have a\r\n        // combination of numIndex 3 with sets 1, 2, 4, 6.. etc, only\r\n        // numIndex 2 will have those sets.\r\n        if(memo[set]>0) return memo[set]-1; // I use memo-1 so I dont have to fill it with -1\r\n        int max=0;\r\n        for(int i=0;i<numSlots;i++) {\r\n            int firstHalfSlot = (set&(1<<i))==0?i:-1; // -1 if it is used\r\n            int secondHalfSlot = (set&(1<<(i+numSlots)))==0?i+numSlots:-1; // -1 if it is used\r\n            int slotChosen = firstHalfSlot>-1?firstHalfSlot:secondHalfSlot;\r\n            if(slotChosen<0) continue; // both slots are used\r\n            int andSum=0;\r\n            if(slotChosen>=numSlots) andSum=((slotChosen-numSlots)+1)&nums[numIndex];\r\n            else andSum=(slotChosen+1)&nums[numIndex];\r\n            // By adjusting the set in the recursion signature\r\n            // I am backtracking in an elegant way.\r\n            max=Math.max(max, andSum+ helper(numIndex+1,set|1<<slotChosen));\r\n        }\r\n        memo[set]=max+1; // I use memo+1 so I dont have to fill it with -1\r\n        return max;\r\n    }\r\n}",
    "javascript": "// Runtime: 86 ms (Top 100.0%) | Memory: 53.30 MB (Top 25.0%)\r\n\r\n/**\r\n * @param {number[]} nums\r\n * @param {number} numSlots\r\n * @return {number}\r\n */\r\nvar maximumANDSum = function(nums, numSlots) {\r\n    let memo=[],mask=0;\r\n    let ans =  dp(0,0);\r\n    return ans;\r\n    \r\n    function dp(i,mask){\r\n        let max = 0,sum;\r\n        if(memo[mask]!==undefined){\r\n            return memo[mask];\r\n        }\r\n        if(i===nums.length){\r\n            return 0;\r\n        }\r\n        for(let s=1,maskBit=1;s<=numSlots;s++,maskBit*=3){\r\n            if(Math.floor(mask/maskBit)%3<2){\r\n                sum = (nums[i]&s)+dp(i+1,mask+maskBit);\r\n                max = Math.max(sum,max);\r\n            }\r\n        }\r\n        memo[mask]=max;\r\n        return memo[mask];\r\n    }\r\n};"
  }
}
