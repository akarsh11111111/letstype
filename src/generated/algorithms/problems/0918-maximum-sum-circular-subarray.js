export default {
  "id": 918,
  "name": "Maximum Sum Circular Subarray",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-sum-circular-subarray",
  "relativeDir": "M/Maximum Sum Circular Subarray",
  "slug": "0918-maximum-sum-circular-subarray",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 16,
    "java": 28,
    "python": 43,
    "javascript": 50
  },
  "languages": {
    "cpp": "// Runtime: 52 ms (Top 49.08%) | Memory: 40.20 MB (Top 68.84%)\r\n\r\nclass Solution {\r\npublic:\r\n    int maxSubarraySumCircular(vector<int>& nums) {\r\n        int totalSum = 0, maxSum = INT_MIN, curMax = 0, minSum = INT_MAX, curMin = 0;\r\n    for (int x : nums) {\r\n        curMax = max(x, curMax + x);  //update the current max subarray sum\r\n        maxSum = max(maxSum, curMax); //update the overall max subarray sum\r\n        curMin = min(x, curMin + x);  //update the current min subarray sum\r\n        minSum = min(minSum, curMin); //update the overall min subarray sum\r\n        totalSum += x;\r\n    }\r\n    return maxSum > 0 ? max(maxSum, totalSum - minSum) : maxSum;\r\n    }\r\n};",
    "python": "# Runtime: 729 ms (Top 66.43%) | Memory: 18.9 MB (Top 76.46%)\r\nclass Solution:\r\n\r\n    def kadanes(self,nums):\r\n\r\n        #kadanes algo\r\n\r\n        max_till_now = nums[0]\r\n        curr_max = nums[0]\r\n\r\n        for i in range(1,len(nums)):\r\n            curr_max = max(curr_max+nums[i],nums[i])\r\n            max_till_now = max(max_till_now,curr_max)\r\n\r\n        return max_till_now\r\n\r\n    def maxSubarraySumCircular(self, nums: List[int]) -> int:\r\n\r\n        #there will be 2 case\r\n        #case 1 : our max subarray is not wrapping i.e not circular\r\n        #case 2: our max subarray is wrapping i.e circular\r\n\r\n        # case 1 is easy to find\r\n        # to find case 2 what we can do is if we multiply each nums element by -1 and\r\n        # on that find kadanes then we will get sum of elements which is not part of maxsubarray in case2 (not part because we negate)\r\n        # now subtract this newmax in case 2 from total nums sum, we get wrapping sum\r\n        # max of case1 and case is our ans\r\n\r\n        total = sum(nums)\r\n\r\n        nonwrappingsum = self.kadanes(nums)\r\n\r\n        # edge case when all elements are -ve then return max negative\r\n        if nonwrappingsum<0:\r\n            return nonwrappingsum\r\n\r\n        #negate\r\n        for i in range(len(nums)):\r\n            nums[i]*=-1\r\n\r\n        wrappingsum = total-(-self.kadanes(nums)) #-ve because originally it was negated\r\n\r\n        return max(nonwrappingsum,wrappingsum)",
    "java": "// Runtime: 3 ms (Top 96.02%) | Memory: 64.4 MB (Top 41.15%)\r\nclass Solution {\r\n    public int maxSubarraySumCircular(int[] nums) {\r\n        int ans = kadane(nums);\r\n        int sum = 0;\r\n        for (int i = 0; i < nums.length; i++) {\r\n            sum += nums[i];\r\n            nums[i] = -nums[i];\r\n        }\r\n        int kadane_sum = kadane(nums) + sum;\r\n        if (kadane_sum == 0) {\r\n            return ans;\r\n        }\r\n        return Math.max(ans, kadane_sum);\r\n    }\r\n    public int kadane(int[] nums) {\r\n        int sum = 0;\r\n        int ans = Integer.MIN_VALUE;\r\n        for (int i : nums) {\r\n            sum += i;\r\n            ans = Math.max(ans, sum);\r\n            if (sum < 0) {\r\n                sum = 0;\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n}",
    "javascript": "// Runtime: 82 ms (Top 95.60%) | Memory: 50 MB (Top 44.03%)\r\n/**\r\n * @param {number[]} nums\r\n * @return {number}\r\n */\r\nvar maxSubarraySumCircular = function(nums) {\r\n    let n = nums.length;\r\n\r\n    // Kadane for single interval\r\n    let curr = nums[0]; // dp[j] Maximum sum subbarray till j\r\n    let ans = nums[0]; // Maximum of all dps till j i.e. max(dp[0], dp[1], ... dp[i], ...dp[j]);\r\n\r\n    for(let i = 1; i < n; i++) {\r\n        curr = nums[i] + Math.max(0, curr);\r\n        ans = Math.max(ans, curr);\r\n    }\r\n\r\n    /**\r\n    * If we don't find answer using kadane using above logic then that means only one thing\r\n    * some answer is present in 1st half and second in other half (since it is circular array)\r\n    **/\r\n\r\n    let rightSum = new Array(n); // Sum from Right, used to represent 2nd half of the solution\r\n\r\n    rightSum[n - 1] = nums[n - 1];\r\n\r\n    for(let i = n - 2; i >= 0; i--) {\r\n        rightSum[i] = rightSum[i + 1] + nums[i];\r\n    }\r\n\r\n    let maxRightSum = new Array(n); // Used to fast fetch max right sum till given point\r\n    maxRightSum[n - 1] = rightSum[n - 1];\r\n\r\n    for(let i = n - 2; i >= 0; i--) {\r\n        maxRightSum[i] = Math.max(maxRightSum[i + 1], rightSum[i]);\r\n    }\r\n\r\n    /**\r\n    * Now solution is max of:\r\n    * [Sum of [A0 --- Ai] + Maximum [Ai+2 --- An]]\r\n    * Considering i + 1 will be equivalent to kadane which we already discussed above.\r\n    **/\r\n    let leftSum = 0;\r\n    for(let i = 0; i < n - 2; i++) {\r\n        leftSum += nums[i];\r\n        ans = Math.max(ans, leftSum + maxRightSum[i + 2]);\r\n    }\r\n    return ans;\r\n\r\n};"
  }
}
