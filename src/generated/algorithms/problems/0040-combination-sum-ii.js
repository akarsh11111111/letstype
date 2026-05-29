export default {
  "id": 40,
  "name": "Combination Sum II",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/combination-sum-ii",
  "relativeDir": "C/Combination Sum II",
  "slug": "0040-combination-sum-ii",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 26,
    "java": 40,
    "python": 15,
    "javascript": 28
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<vector<int>> ans;vector<int> temp;\r\n    void f(vector<int>& nums,int target,int i){\r\n        if(target==0){\r\n            ans.push_back(temp);\r\n            return;\r\n        }\r\n        if(i>=nums.size())\r\n            return;\r\n        if(nums[i]<=target){\r\n            temp.push_back(nums[i]);\r\n            f(nums,target-nums[i],i+1);\r\n            temp.pop_back();\r\n            while(i<nums.size()-1 && nums[i]==nums[i+1]) i++;\r\n            f(nums,target,i+1);\r\n        }\r\n        else\r\n            f(nums,target,i+1);\r\n    }\r\n    vector<vector<int>> combinationSum2(vector<int>& candidates, int target) {\r\n        sort(candidates.begin(),candidates.end());\r\n        f(candidates,target,0);\r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 204 ms (Top 15.17%) | Memory: 14.1 MB (Top 23.77%)\r\nclass Solution(object):\r\n    def combinationSum2(self, candidates, target):\r\n        res = []\r\n        def dfs(nums,summ,curr):\r\n            if summ>=target:\r\n                if summ == target:\r\n                    res.append(curr)\r\n                return\r\n            for i in range(len(nums)):\r\n                if i !=0 and nums[i]==nums[i-1]:\r\n                    continue\r\n                dfs(nums[i+1:],summ+nums[i],curr+[nums[i]])\r\n        dfs(sorted(candidates),0,[])\r\n        return res",
    "java": "// Runtime: 12 ms (Top 12.41%) | Memory: 43.5 MB (Top 81.01%)\r\nclass Solution {\r\n    public List<List<Integer>> combinationSum2(int[] candidates, int target) {\r\n        List<List<Integer>> res = new ArrayList<>();\r\n        List<Integer> path = new ArrayList<>();\r\n        // O(nlogn)\r\n        Arrays.sort(candidates);\r\n        boolean[] visited = new boolean[candidates.length];\r\n        helper(res, path, candidates, visited, target, 0);\r\n        return res;\r\n    }\r\n    private void helper(List<List<Integer>> res,\r\n                  List<Integer> path, int[] candidates,\r\n                  boolean[] visited, int remain, int currIndex\r\n                 ){\r\n        if (remain == 0){\r\n            res.add(new ArrayList<>(path));\r\n            return;\r\n        }\r\n        if (remain < 0){\r\n            return;\r\n        }\r\n\r\n        for(int i = currIndex; i < candidates.length; i++){\r\n            if (visited[i]){\r\n                continue;\r\n            }\r\n            if (i > 0 && candidates[i] == candidates[i - 1] && !visited[i - 1]){\r\n                continue;\r\n            }\r\n            int curr = candidates[i];\r\n            path.add(curr);\r\n            visited[i] = true;\r\n            helper(res, path, candidates, visited, remain - curr, i + 1);\r\n            path.remove(path.size() - 1);\r\n\r\n            visited[i] = false;\r\n        }\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number[]} candidates\r\n * @param {number} target\r\n * @return {number[][]}\r\n */\r\nvar combinationSum2 = function(candidates, target) {\r\n    candidates.sort((a, b) => a - b);\r\n    \r\n    const ans = [];\r\n    \r\n    function dfs(idx, t, st) {\r\n        if (t === 0) {\r\n            ans.push(Array.from(st));\r\n            return;\r\n        }\r\n        for (let i = idx; i < candidates.length; i++) {\r\n            if (i > idx && candidates[i - 1] === candidates[i]) continue;\r\n            if (candidates[i] > t) break;\r\n            st.push(candidates[i]);\r\n            dfs(i + 1, t - candidates[i], st);\r\n            st.pop();\r\n        }\r\n    }\r\n    \r\n    dfs(0, target, []);\r\n    \r\n    return ans;\r\n};"
  }
}
