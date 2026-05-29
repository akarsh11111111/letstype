export default {
  "id": 78,
  "name": "Subsets",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/subsets",
  "relativeDir": "S/Subsets",
  "slug": "0078-subsets",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 28,
    "java": 29,
    "python": 13,
    "javascript": 29
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.0%) | Memory: 16.30 MB (Top 20.62%)\r\n\r\n// Recursive Solution\r\n// Time complexity : O(N*(2^N))\r\n// Space complexity : O(N*(2^N))\r\nclass Solution {\r\npublic:\r\n    vector<vector<int>> ans;\r\n    \r\n    void sub(vector<int> &nums, int i, vector<int> temp)\r\n    {\r\n        if(i==nums.size())\r\n        {\r\n            ans.push_back(temp);\r\n            return;\r\n        }\r\n        \r\n        sub(nums, i+1, temp);\r\n        temp.push_back(nums[i]);\r\n        sub(nums, i+1, temp);\r\n    }\r\n    \r\n    vector<vector<int>> subsets(vector<int>& nums) {\r\n        vector<int> temp;       \r\n        sub(nums, 0, temp); // or sub(nums, 0, vector<int> {});\r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 74 ms (Top 8.76%) | Memory: 14.1 MB (Top 82.26%)\r\nclass Solution:\r\n    def subsets(self, nums: List[int]) -> List[List[int]]:\r\n        self.final_list = []\r\n        def subset(final_list,curr_list,listt,i):\r\n            if i == len(listt):\r\n                final_list.append(curr_list)\r\n                return\r\n            else:\r\n                subset(final_list,curr_list,listt,i+1)\r\n                subset(final_list,curr_list+[listt[i]],listt,i+1)\r\n        subset(self.final_list,[],nums,0)\r\n        return self.final_list",
    "java": "class Solution {\r\n    \r\n    private static void solve(int[] nums, int i, List<Integer> temp, List<List<Integer>> subset){\r\n        \r\n        if(i == nums.length){\r\n            subset.add(new ArrayList(temp));\r\n            return;\r\n        }\r\n        \r\n        temp.add(nums[i]);\r\n        solve(nums, i + 1, temp, subset);\r\n        \r\n        temp.remove(temp.size() - 1);\r\n        solve(nums, i + 1, temp, subset);\r\n    }\r\n    \r\n    public List<List<Integer>> subsets(int[] nums) {\r\n        List<List<Integer>> subset = new ArrayList();\r\n        List<Integer> temp = new ArrayList<>();\r\n        \r\n        if(nums.length == 0) return subset;\r\n\r\n        int startInd = 0;\r\n        \r\n        solve(nums, startInd, temp, subset);\r\n            \r\n        return subset;\r\n    }\r\n}",
    "javascript": "var subsets = function(nums) {\r\n    \r\n    const res = [];\r\n    \r\n    const dfs = (i, slate) => {\r\n        \r\n        if(i == nums.length){\r\n            \r\n            res.push(slate.slice());\r\n            \r\n            return;\r\n            \r\n        }\r\n        \r\n\t\t// take the current number into the subset.\r\n        slate.push(nums[i]);\r\n        dfs(i + 1, slate);\r\n        slate.pop();\r\n        \r\n\t\t// ignore the current number.\r\n        dfs(i + 1, slate);  \r\n        \r\n    }\r\n    \r\n    dfs(0, []);\r\n    \r\n    return res;\r\n    \r\n};"
  }
}
