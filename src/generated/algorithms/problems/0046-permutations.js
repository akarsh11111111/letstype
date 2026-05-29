export default {
  "id": 46,
  "name": "Permutations",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/permutations",
  "relativeDir": "P/Permutations",
  "slug": "0046-permutations",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 23,
    "java": 28,
    "python": 3,
    "javascript": 20
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    void per(int ind, int n, vector<int>&nums, vector<vector<int>> &ans)\r\n    {\r\n        if(ind==n)\r\n        {\r\n            ans.push_back(nums);\r\n            return;\r\n        }\r\n        for(int i=ind;i<n;i++)\r\n        {\r\n            swap(nums[ind],nums[i]);\r\n            per(ind+1,n,nums,ans);\r\n            swap(nums[ind],nums[i]);\r\n        }\r\n    }\r\n    vector<vector<int>> permute(vector<int>& nums) {\r\n        vector<vector<int>> ans;\r\n        int n=nums.size();\r\n        per(0,n,nums,ans);\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def permute(self, nums: List[int]) -> List[List[int]]:\r\n        return list(permutations(nums))",
    "java": "// Runtime: 2 ms (Top 76.85%) | Memory: 44.7 MB (Top 48.41%)\r\nclass Solution {\r\n    List<List<Integer>> res = new LinkedList<>();\r\n\r\n    public List<List<Integer>> permute(int[] nums) {\r\n        ArrayList<Integer> list = new ArrayList<>();\r\n        boolean[] visited = new boolean[nums.length];\r\n\r\n        backTrack(nums, list, visited);\r\n        return res;\r\n    }\r\n\r\n    private void backTrack(int[] nums, ArrayList<Integer> list, boolean[] visited){\r\n        if(list.size() == nums.length){\r\n            res.add(new ArrayList(list));\r\n            return;\r\n        }\r\n        for(int i = 0; i < nums.length; i++){\r\n            if(!visited[i]){\r\n                visited[i] = true;\r\n                list.add(nums[i]);\r\n                backTrack(nums, list, visited);\r\n                visited[i] = false;\r\n                list.remove(list.size() - 1);\r\n            }\r\n        }\r\n    }\r\n}",
    "javascript": "// Runtime: 80 ms (Top 8.91%) | Memory: 44.70 MB (Top 69.1%)\r\n\r\n/**\r\n * @param {number[]} nums\r\n * @return {number[][]}\r\n */\r\nvar permute = function(nums) {\r\n    const result = [];\r\n    const backtrack = (nums, path) => {\r\n        if (nums.length === 0) {\r\n            result.push(path);\r\n            return;\r\n        }\r\n        for (let i = 0; i < nums.length; i++) {\r\n            backtrack([...nums.slice(0, i), ...nums.slice(i + 1)], [...path, nums[i]]);\r\n        }\r\n    };\r\n    backtrack(nums, []);\r\n    return result;\r\n};"
  }
}
