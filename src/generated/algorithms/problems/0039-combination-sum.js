export default {
  "id": 39,
  "name": "Combination Sum",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/combination-sum",
  "relativeDir": "C/Combination Sum",
  "slug": "0039-combination-sum",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 26,
    "java": 24,
    "python": 20,
    "javascript": 27
  },
  "languages": {
    "cpp": "// Runtime: 101 ms (Top 24.96%) | Memory: 22 MB (Top 28.36%)\r\nclass Solution {\r\n    void combination(vector<int>& candidates, int target, vector<int> currComb, int currSum, int currIndex, vector<vector<int>>& ans){\r\n        if(currSum>target) return; //backtrack\r\n        if(currSum==target){\r\n            ans.push_back(currComb); //store the solution and backtrack\r\n            return;\r\n        }\r\n\r\n        for(int i=currIndex; i<candidates.size(); i++){ //try all possible options for the next level\r\n            currComb.push_back(candidates[i]); //put 1 option into the combination\r\n            currSum+=candidates[i];\r\n            combination(candidates, target, currComb, currSum, i, ans); //try with this combination, whether it gives a solution or not.\r\n            currComb.pop_back(); //when this option backtrack to here, remove this and go on to the next option.\r\n            currSum-=candidates[i];\r\n        }\r\n\r\n    }\r\npublic:\r\n    vector<vector<int>> combinationSum(vector<int>& candidates, int target) {\r\n        vector<vector<int>> ans;\r\n        vector<int> currComb;\r\n        combination(candidates, target, currComb, 0, 0, ans);\r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 95 ms (Top 82.54%) | Memory: 14.1 MB (Top 72.96%)\r\nclass Solution:\r\n    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:\r\n\r\n        path = []\r\n        answer = []\r\n        def dp(idx, total):\r\n            if total == target:\r\n                answer.append(path[:])\r\n                return\r\n            if total > target:\r\n                return\r\n\r\n            for i in range(idx, len(candidates)):\r\n                path.append(candidates[i])\r\n                dp(i, total + candidates[i])\r\n                path.pop()\r\n\r\n        dp(0, 0)\r\n        return answer",
    "java": "// Runtime: 5 ms (Top 69.68%) | Memory: 45.9 MB (Top 24.67%)\r\nclass Solution {\r\n    public List<List<Integer>> combinationSum(int[] candidates, int target) {\r\n        List<Integer> cur = new ArrayList<>();\r\n        List<List<Integer>> result = new ArrayList<>();\r\n        Arrays.sort(candidates);\r\n        dfs(0, candidates, target, 0, cur, result);\r\n        return result;\r\n    }\r\n    public void dfs(int start, int[] candidates, int target, int sum, List<Integer> cur, List<List<Integer>> result){\r\n        if(sum == target){\r\n            result.add(new ArrayList<>(cur));\r\n            return;\r\n        }\r\n        for(int i = start; i < candidates.length; i++) {\r\n            if(sum + candidates[i] <= target) {\r\n              cur.add(candidates[i]);\r\n              dfs(i, candidates, target, sum + candidates[i], cur, result);\r\n              cur.remove((cur.size()- 1));\r\n            }\r\n        }\r\n        return;\r\n    }\r\n}",
    "javascript": "// Runtime: 113 ms (Top 76.66%) | Memory: 45.7 MB (Top 51.16%)\r\nfunction recursion(index, list, target, res, arr){\r\n    if(index == arr.length){\r\n        if(target == 0){\r\n            res.push([...list]);\r\n        }\r\n        return;\r\n    }\r\n\r\n    if(arr[index] <= target){\r\n\r\n         list.push(arr[index]);\r\n\r\n         recursion(index, list, target - arr[index], res, arr);\r\n\r\n         list.pop();\r\n\r\n    }\r\n\r\n    recursion(index + 1, list, target, res, arr);\r\n\r\n}\r\nvar combinationSum = function(candidates, target) {\r\n    let res = [];\r\n    recursion(0, [], target, res, candidates);\r\n    return res;\r\n};"
  }
}
