export default {
  "id": 113,
  "name": "Path Sum II",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/path-sum-ii",
  "relativeDir": "P/Path Sum II",
  "slug": "0113-path-sum-ii",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 41,
    "java": 26,
    "python": 15,
    "javascript": 17
  },
  "languages": {
    "cpp": "// Runtime: 24 ms (Top 43.53%) | Memory: 20 MB (Top 62.29%)\r\n\r\n/**\r\n * Definition for a binary tree node.\r\n * struct TreeNode {\r\n * int val;\r\n * TreeNode *left;\r\n * TreeNode *right;\r\n * TreeNode() : val(0), left(nullptr), right(nullptr) {}\r\n * TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\r\n * TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\r\n * };\r\n */\r\nclass Solution {\r\npublic:\r\n    vector<vector<int>> v;\r\n    void helper(vector<int>& t, int target, TreeNode* root){\r\n        if(root==NULL){\r\n            return;\r\n        }\r\n        if(root->left==NULL&&root->right==NULL&&target==root->val){\r\n            t.push_back(root->val);\r\n            v.push_back(t);\r\n            t.pop_back();\r\n            return;\r\n        }\r\n        target=target-root->val;\r\n        t.push_back(root->val);\r\n        helper(t,target,root->left);\r\n        helper(t,target,root->right);\r\n        t.pop_back();\r\n\r\n        //cout<<root->val<<\" \"<<target<<endl;\r\n        return;\r\n    }\r\n    vector<vector<int>> pathSum(TreeNode* root, int targetSum) {\r\n        vector<int> t;\r\n        helper(t,targetSum,root);\r\n        return v;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> List[List[int]]:\r\n        res = []\r\n        def dfs(v, path, pathsum):\r\n            if not v:\r\n                return\r\n            path.append(v.val)\r\n            pathsum += v.val\r\n            if not v.left and not v.right and pathsum == targetSum:\r\n                res.append(path[:])\r\n            dfs(v.left, path, pathsum)\r\n            dfs(v.right, path, pathsum)\r\n            path.pop()\r\n        dfs(root, [], 0)\r\n        return res",
    "java": "class Solution \r\n{\r\n    public List<List<Integer>> pathSum(TreeNode root, int targetSum) \r\n    {\r\n        List<List<Integer>> ans = new ArrayList<>();\r\n        pathSum(root, targetSum, new ArrayList<>(), ans);\r\n        return ans;\r\n    }\r\n    \r\n    public void pathSum(TreeNode root, int targetSum, List<Integer> path, List<List<Integer>> ans)\r\n    {\r\n        if(root == null)\r\n            return;\r\n        path.add(root.val);\r\n        if(root.left == null && root.right == null && targetSum == root.val)//leaf node that completes path\r\n        {\r\n            ans.add(new ArrayList(path));// we use new ArrayList because if we don't the originaly List is added which is mutable, if we add a copy that's not mutable.\r\n        }\r\n        else\r\n        {\r\n            pathSum(root.left, targetSum-root.val, path, ans);\r\n            pathSum(root.right, targetSum-root.val, path, ans);\r\n        }\r\n        path.remove(path.size()-1); //removal of redundant nodes\r\n    }\r\n}",
    "javascript": "// Runtime: 173 ms (Top 6.43%) | Memory: 52.7 MB (Top 31.75%)\r\nvar pathSum = function(root, targetSum) {\r\n  const paths = [];\r\n\r\n  function dfs(root, sum, curr = []) {\r\n    if (!root) return;\r\n\r\n    const newCurr = [...curr, root.val];\r\n    if (!root.left && !root.right && sum === root.val) return paths.push(newCurr);\r\n\r\n    dfs(root.left, sum - root.val, newCurr);\r\n    dfs(root.right, sum - root.val, newCurr);\r\n  }\r\n\r\n  dfs(root, targetSum);\r\n  return paths;\r\n};"
  }
}
