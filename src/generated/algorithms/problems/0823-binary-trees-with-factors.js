export default {
  "id": 823,
  "name": "Binary Trees With Factors",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/binary-trees-with-factors",
  "relativeDir": "B/Binary Trees With Factors",
  "slug": "0823-binary-trees-with-factors",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 28,
    "java": 44,
    "python": 15,
    "javascript": 61
  },
  "languages": {
    "cpp": "// Runtime: 122 ms (Top 49.07%) | Memory: 8.4 MB (Top 98.09%)\r\nclass Solution {\r\npublic:\r\n    const int mod=1e9+7;\r\n    int numFactoredBinaryTrees(vector<int>& arr) {\r\n\r\n        sort(arr.begin(),arr.end());\r\n        int n=arr.size();\r\n\r\n        vector<int> dp(n,1);\r\n\r\n        for(int i=1;i<n;i++){\r\n            int l=0,r=i-1;\r\n            while(l<=r){\r\n                if(arr[l]*1LL*arr[r]==arr[i]*1LL){\r\n                    if(l!=r) dp[i]=(dp[i]+(dp[l]*1LL*dp[r]%mod*2LL%mod))%mod;\r\n                    else dp[i]=(dp[i]+(dp[l]*1LL*dp[r]%mod))%mod;\r\n                    l++,r--;\r\n                } else if(arr[l]*1LL*arr[r]>arr[i]*1LL) r--;\r\n                else l++;\r\n            }\r\n        }\r\n\r\n        int ans=0;\r\n        for(auto i:dp) ans=(ans+i)%mod;\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def numFactoredBinaryTrees(self, nums: List[int]) -> int:\r\n        nums = set(nums)\r\n        n = len(nums)\r\n        \r\n        @lru_cache(None)\r\n        def helper(num):\r\n            trees = 1\r\n            for factor in nums:\r\n                if not num % factor and num // factor in nums:\r\n                    trees += helper(factor) * helper(num // factor)\r\n\r\n            return trees\r\n        \r\n        return sum(helper(num) for num in nums) % (10 ** 9 + 7)",
    "java": "class Solution {\r\n    int mod = 1000000007;\r\n    HashMap<Integer, Long> dp;\r\n    HashSet<Integer> set;\r\n    \r\n    public int numFactoredBinaryTrees(int[] arr) {\r\n        long ans = 0;\r\n        dp = new HashMap<>();\r\n        set = new HashSet<>();\r\n        \r\n        for(int val : arr) set.add(val);\r\n        \r\n        for(int val : arr) {\r\n\t\t\t//giving each unique value a chance to be root node of the tree\r\n            ans += solve(val, arr);\r\n            ans %= mod;\r\n        }\r\n        \r\n        return (int)ans;\r\n    }\r\n    \r\n    public long solve(int val, int[] nums) {\r\n        \r\n        if(dp.containsKey(val)) {\r\n            return dp.get(val);\r\n        }\r\n        \r\n        long ans = 1;\r\n        \r\n        for(int i = 0; i < nums.length; i++) {\r\n            if(val % nums[i] == 0 && set.contains(val / nums[i])) {\r\n                long left = solve(nums[i], nums);\r\n                long right = solve(val / nums[i], nums);\r\n                \r\n                ans += ((left * right) % mod);\r\n                ans %= mod;\r\n            }\r\n        }\r\n        \r\n        dp.put(val, ans);\r\n        \r\n        return ans;\r\n    }\r\n}",
    "javascript": "/** https://leetcode.com/problems/binary-trees-with-factors/\r\n * @param {number[]} arr\r\n * @return {number}\r\n */\r\nvar numFactoredBinaryTrees = function(arr) {\r\n  // Memo\r\n  this.memo = new Map();\r\n  \r\n  // Sort the `arr`\r\n  arr.sort((a, b) => a - b);\r\n  \r\n  // Create hashmap so we can easily find the index of the value\r\n  let map = new Map();\r\n  arr.forEach((val, idx) => map.set(val, idx));\r\n  \r\n  // We are going to calculate total numbers of binary trees by assigning each `arr[i]` as the root of the tree\r\n  let count = 0;\r\n  for (let i = arr.length - 1; i >= 0; i--) {\r\n    count += dp(arr, map, i);\r\n  }\r\n  \r\n  // Perform mod on the final result\r\n  let mod = (10 ** 9) + 7;\r\n  return count % mod;\r\n};\r\n\r\nvar dp = function(arr, map, currIdx) {\r\n  // Return from memo\r\n  if (this.memo.has(currIdx) === true) {\r\n    return this.memo.get(currIdx);\r\n  }\r\n  \r\n  // Start the count as 1 to include the current node\r\n  let count = 1;\r\n  \r\n  // Loop through all number before `arr[currIdx]`\r\n  for (let i = currIdx - 1; i >= 0; i--) {\r\n    // The `left` and `right` node of the root\r\n    // The `right` node is basically the root divided by the `left` since the rule stated that the root is product of its children\r\n    let left = arr[i];\r\n    let right = arr[currIdx] / left;\r\n    \r\n    // Ignore if the root is not a product of its children\r\n    if (arr[currIdx] % left !== 0 ||\r\n       map.has(right) === false) {\r\n      continue;\r\n    }\r\n    \r\n    // Get the count for `left` node and `right` node\r\n    let leftCount = dp(arr, map, i);\r\n    let rightCount = dp(arr, map, map.get(right));\r\n    \r\n    // Total count is multiplication of `left` and `right` count because each combination of is unique\r\n    count += leftCount * rightCount;\r\n  }\r\n  \r\n  // Set memo\r\n  this.memo.set(currIdx, count);\r\n  \r\n  return count;\r\n};"
  }
}
