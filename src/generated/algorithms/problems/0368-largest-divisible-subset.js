export default {
  "id": 368,
  "name": "Largest Divisible Subset",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/largest-divisible-subset",
  "relativeDir": "L/Largest Divisible Subset",
  "slug": "0368-largest-divisible-subset",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 44,
    "java": 35,
    "python": 29,
    "javascript": 57
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<int> largestDivisibleSubset(vector<int>& nums) {\r\n        \r\n        int n = nums.size();\r\n        sort(nums.begin(), nums.end());\r\n        \r\n        vector<int> ans;        \r\n        for(int i = 0; i < n; i++)\r\n        {                \r\n            vector<int> tmp;\r\n            tmp.push_back(nums[i]);\r\n            \r\n            // Checking the prev one\r\n            int j = i - 1;\r\n            while(j >= 0)\r\n            {\r\n                if(tmp.back() % nums[j] == 0)\r\n                    tmp.push_back(nums[j]);\r\n                    \r\n                j--;\r\n            }\r\n            \r\n            // Reversing the order to make it in increasing order\r\n            reverse(tmp.begin(), tmp.end());\r\n            \r\n            // Checking the forward one\r\n            j = i + 1;\r\n            while(j < n)\r\n            {\r\n                if(nums[j] % tmp.back() == 0)\r\n                    tmp.push_back(nums[j]);\r\n                \r\n                j++;\r\n            }\r\n            \r\n            // updating the ans\r\n            if(ans.size() < tmp.size())\r\n                ans = tmp;\r\n        }\r\n        \r\n        return ans;        \r\n    }\r\n};",
    "python": "class Solution:\r\n    def largestDivisibleSubset(self, nums: List[int]) -> List[int]:\r\n        nums.sort()\r\n        n = len(nums)\r\n        dp = [1 for i in range(n)]\r\n        hashh = [i for i in range(n)]\r\n        ans_ind = 0\r\n        \r\n        for i in range(1, n):\r\n            for j in range(0,i):\r\n                if nums[i]%nums[j] == 0 and dp[j]+1 > dp[i]:            \r\n                    dp[i] = dp[j]+1\r\n                    hashh[i] = j\r\n                    \r\n                    # print(dp)\r\n                    # print(hashh)\r\n        out = []\r\n        maxi = dp[0]\r\n        \r\n        for i in range(len(nums)):\r\n            if dp[i] > maxi:\r\n                ans_ind = i\r\n                maxi = dp[i]\r\n        \r\n        while(hashh[ans_ind]!=ans_ind):\r\n            out.append(nums[ans_ind])\r\n            ans_ind = hashh[ans_ind]\r\n        out.append(nums[ans_ind])\r\n        return(out)",
    "java": "// Runtime: 34 ms (Top 44.53%) | Memory: 44.1 MB (Top 26.48%)\r\nclass Solution {\r\n    public List<Integer> largestDivisibleSubset(int[] nums) {\r\n        Arrays.sort(nums);\r\n        int N = nums.length;\r\n        List<Integer> ans =new ArrayList<Integer>();\r\n        int []dp =new int[N];\r\n        Arrays.fill(dp,1);\r\n        int []hash =new int[N];\r\n        for(int i=0;i<N;i++){\r\n            hash[i]=i;\r\n        }\r\n        int lastindex=0;\r\n        int maxi =1;\r\n        for(int i=0;i<N;i++){\r\n            for(int j=0;j<i;j++){\r\n                if(nums[i]%nums[j] == 0 && dp[j]+1 >dp[i]){\r\n                    dp[i] = dp[j]+1;\r\n                    hash[i] = j;\r\n                }\r\n                if(dp[i] > maxi){\r\n                    maxi = dp[i];\r\n                    lastindex = i;\r\n                }\r\n            }\r\n        }//for ends\r\n        ans.add(nums[lastindex]);\r\n        while(hash[lastindex] != lastindex){\r\n            lastindex = hash[lastindex];\r\n            ans.add(nums[lastindex]);\r\n        }\r\n        return ans;\r\n    }\r\n\r\n}",
    "javascript": "/** https://leetcode.com/problems/largest-divisible-subset/\r\n * @param {number[]} nums\r\n * @return {number[]}\r\n */\r\nvar largestDivisibleSubset = function(nums) {\r\n  // Memo\r\n  this.memo = new Map();\r\n  \r\n  // Sort the array so we can do dynamic programming from last number\r\n  // We want to start from last number because it will be the largest number, the largest number will yield the largest subset because it can be divided many times\r\n  nums.sort((a, b) => a - b);\r\n  \r\n  let out = [];\r\n  \r\n  // Perform dynamic programming on every numbers start from the last number\r\n  for (let i = nums.length - 1; i >= 0; i--) {\r\n    let curr = dp(nums, i);\r\n    \r\n    // Update the subset output if the current subset is larger\r\n    if (curr.length > out.length) {\r\n      out = curr;\r\n    }\r\n  }\r\n  \r\n  return out;\r\n};\r\n\r\nvar dp = function(nums, currIdx) {\r\n  // Return from memo\r\n  if (this.memo.has(currIdx) === true) {\r\n    return this.memo.get(currIdx);\r\n  }\r\n  \r\n  let currSubset = [];\r\n  \r\n  // Look up all numbers before `currIdx`\r\n  for (let i = currIdx - 1; i >= 0; i--) {\r\n    // Check if the number at `currIdx` can be divided by number at `i`\r\n    if (nums[currIdx] % nums[i] === 0) {\r\n      // If they can be divided, perform dynamic programming on `i` to get the subset at `i`\r\n      let prevSubset = dp(nums, i);\r\n      \r\n      // If the subset at `i` is longer than current subset, update current subset\r\n      if (prevSubset.length > currSubset.length) {\r\n        currSubset = prevSubset;\r\n      }\r\n    }\r\n  }\r\n  \r\n  // Create the output which include number at `currIdx`\r\n  let out = [...currSubset, nums[currIdx]];\r\n  \r\n  // Set memo\r\n  this.memo.set(currIdx, out);\r\n  \r\n  return out;\r\n};"
  }
}
