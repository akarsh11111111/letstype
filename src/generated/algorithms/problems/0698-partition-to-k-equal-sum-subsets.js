export default {
  "id": 698,
  "name": "Partition to K Equal Sum Subsets",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/partition-to-k-equal-sum-subsets",
  "relativeDir": "P/Partition to K Equal Sum Subsets",
  "slug": "0698-partition-to-k-equal-sum-subsets",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 29,
    "java": 40,
    "python": 36,
    "javascript": 26
  },
  "languages": {
    "cpp": "// Runtime: 2009 ms (Top 12.75%) | Memory: 101 MB (Top 5.10%)\r\nclass Solution {\r\npublic:\r\n    unordered_map<string, int> dp;\r\n    int solve(vector<int>& nums, int target, int remain, int i, int vis, int k){\r\n        if( k == 1) return 1;\r\n\r\n        //memorization addition\r\n        string t = to_string(i)+\"_\"+to_string(remain)+\"_\"+to_string(k)+\"_\"+to_string(vis);\r\n        if(dp.find(t) != dp.end()) return dp[t];\r\n\r\n        if(remain == 0){\r\n            return dp[t] = solve(nums, target, target, nums.size()-1, vis, k - 1);\r\n        }\r\n        for(int j = i; j >= 0; --j){\r\n            if(((vis>>j)& 1) || remain - nums[j] < 0) continue;\r\n            vis = vis | (1 << j );\r\n            if(solve(nums, target, remain - nums[j], j - 1, vis, k) ) return dp[t] = 1;\r\n            vis = vis & ~(1<<j);\r\n        }\r\n        return dp[t] = 0;\r\n    }\r\n    bool canPartitionKSubsets(vector<int>& nums, int k) {\r\n        int sum = accumulate(nums.begin(), nums.end(), 0);\r\n        if(sum%k != 0) return false;\r\n        int vis = 0;\r\n        return solve(nums, sum/k, sum/k, nums.size()-1, vis, k);\r\n    }\r\n};",
    "python": "# Runtime: 165 ms (Top 74.37%) | Memory: 13.8 MB (Top 95.72%)\r\nclass Solution:\r\n    def canPartitionKSubsets(self, nums: List[int], k: int) -> bool:\r\n        def dfs(idx,curr,cnt,limit):\r\n            if cnt == k:\r\n                return True\r\n            if curr ==limit:\r\n                return dfs(0,0,cnt+1,limit)\r\n\r\n            i = idx\r\n            while i < len(nums):\r\n                if visited[i] or nums[i]+curr > limit:\r\n                    i += 1\r\n                    continue\r\n                visited[i] = True\r\n                if dfs(i+1,curr+nums[i],cnt,limit):\r\n                    return True\r\n                visited[i] = False\r\n\r\n                while i+1 < len(nums) and nums[i] == nums[i+1]: #pruning1\r\n                    i += 1\r\n                if curr == 0 or curr + nums[i] == limit: #pruning2\r\n                    return False\r\n                i += 1\r\n            return False\r\n\r\n        if len(nums) < k or sum(nums) % k:\r\n            return False\r\n        numSum = sum(nums)\r\n\r\n        for i in range(len(nums)):\r\n            if nums[i] > numSum//k:\r\n                return False\r\n\r\n        visited = [False]*len(nums)\r\n        return dfs(0,0,0,numSum//k)",
    "java": "// Runtime: 277 ms (Top 51.4%) | Memory: 43.53 MB (Top 23.8%)\r\n\r\nclass Solution {\r\n    private final List<Set<Integer>> allSubsets = new ArrayList<>();\r\n    public boolean canPartitionKSubsets(int[] nums, int k) {\r\n        int sum = Arrays.stream(nums).sum();\r\n        if(sum % k != 0) return false;\r\n        getAllSubsets(nums.length, sum / k, new HashSet<>(), nums, false);\r\n        return allSubsets.size() >= k && canPartition(allSubsets.size(), k, nums.length, new HashSet<>());\r\n    }\r\n\r\n    private boolean canPartition(int n, int k, int size, Set<Integer> current) {\r\n        if(k == 0 && current.size() == size) return true;\r\n        if(n == 0 || k < 0) return false;\r\n        boolean addSet = false;\r\n        if(allUnique(current, allSubsets.get(n-1))) {\r\n            current.addAll(allSubsets.get(n - 1));\r\n            addSet = canPartition(n - 1, k - 1, size, current);\r\n            current.removeAll(allSubsets.get(n - 1));\r\n        }\r\n        return addSet || canPartition(n - 1, k, size, current);\r\n    }\r\n\r\n    private void getAllSubsets(int n, int targetSum, Set<Integer> subsets, int[] nums, boolean lol) {\r\n        if(targetSum == 0) {\r\n            allSubsets.add(new HashSet<>(subsets));\r\n            return;\r\n        }\r\n        if (n == 0 || targetSum < 0) return;\r\n        subsets.add(n-1);\r\n        getAllSubsets(n-1, targetSum - nums[n-1], subsets, nums, true);\r\n        subsets.remove(n-1);\r\n        getAllSubsets(n-1, targetSum, subsets, nums, false);\r\n    }\r\n    \r\n    private boolean allUnique(Set<Integer> set1, Set<Integer> set2) {\r\n        for (Integer num: set1) if(set2.contains(num)) return false;\r\n        return true;\r\n    }\r\n}",
    "javascript": "// Runtime: 74 ms (Top 96.55%) | Memory: 44.5 MB (Top 25.86%)\r\nvar canPartitionKSubsets = function(nums, k) {\r\n    const sum = nums.reduce((sum, num) => sum + num);\r\n    const divide = sum / k;\r\n    if (!Number.isInteger(divide)) return false;\r\n    const subsets = Array(k).fill(0);\r\n    const dfs = (index = 0) => {\r\n        if (index >= nums.length) return true;\r\n        const visited = new Set();\r\n        const num = nums[index];\r\n\r\n        for (let sub = 0; sub < k; sub++) {\r\n            const subset = subsets[sub];\r\n            if (visited.has(subset) || subset + num > divide) continue;\r\n\r\n            visited.add(subset);\r\n            subsets[sub] += num;\r\n            if (dfs(index + 1)) return true;\r\n            subsets[sub] -= num;\r\n        }\r\n        return false;\r\n    };\r\n\r\n    nums.sort((a, b) => b - a);\r\n    return dfs();\r\n};"
  }
}
