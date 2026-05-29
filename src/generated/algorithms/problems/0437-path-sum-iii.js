export default {
  "id": 437,
  "name": "Path Sum III",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/path-sum-iii",
  "relativeDir": "P/Path Sum III",
  "slug": "0437-path-sum-iii",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 34,
    "java": 41,
    "python": 15,
    "javascript": 11
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int ans = 0,t;\r\n    \r\n    void dfs(unordered_map<long long,int> &curr,TreeNode* node,long long sm){\r\n        \r\n        if(!node){\r\n            return;\r\n        }\r\n                \r\n        sm += (long long) node->val;\r\n        ans += curr[sm-t];\r\n        curr[sm]++;\r\n                \r\n        dfs(curr,node->left,sm);\r\n        dfs(curr,node->right,sm);\r\n        \r\n        curr[sm]--;\r\n    }\r\n    int pathSum(TreeNode* root, int targetSum) {\r\n        if(!root){\r\n            return 0;\r\n        }\r\n        \r\n        t = targetSum;\r\n        unordered_map<long long,int> curr;\r\n        curr[0] = 1;\r\n        long long sm = 0;\r\n        \r\n        dfs(curr,root,sm);\r\n\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> int:\r\n        def util(node: TreeNode, sum_array) -> int:\r\n            t = [e - node.val for e in sum_array]\r\n            zeroes = t.count(0)\r\n            if node.left is None and node.right is None:\r\n                return zeroes\r\n            ansl, ansr = 0, 0\r\n            if node.left:\r\n                ansl = util(node.left, t + [targetSum])\r\n            if node.right:\r\n                ansr = util(node.right, t + [targetSum])\r\n            return ansl + ansr + zeroes\r\n\r\n        return util(root, [targetSum]) if root is not None else 0",
    "java": "// Runtime: 7 ms (Top 66.25%) | Memory: 45 MB (Top 29.77%)\r\nclass Solution {\r\n    public int pathSum(TreeNode root, int targetSum) {\r\n        HashMap<Long, Integer> hm = new HashMap<>();\r\n        //hm.put(0L,1); ---> can use this to handle initial condition if c_sum == target sum\r\n\r\n        int res = solve(hm, root, targetSum, 0);\r\n\r\n        return res;\r\n    }\r\n\r\n    public int solve(HashMap<Long, Integer> hm, TreeNode node, long tgt, long c_sum) {\r\n\r\n        if(node == null)\r\n            return 0;\r\n\r\n        c_sum += node.val;\r\n\r\n        int res = 0;\r\n\r\n        if(c_sum == tgt) //--> either this condition or the above commented condition.\r\n            res++;\r\n\r\n        if(hm.containsKey(c_sum-tgt)){\r\n            res += hm.get(c_sum-tgt);\r\n        }\r\n\r\n        hm.put(c_sum, hm.getOrDefault(c_sum,0)+1);\r\n\r\n        int left = solve(hm, node.left, tgt, c_sum);\r\n        int right = solve(hm, node.right, tgt, c_sum);\r\n\r\n        res += (left+right);\r\n\r\n        hm.put(c_sum, hm.getOrDefault(c_sum,0)-1); //remove the calculated cumulative sum\r\n\r\n        return res;\r\n\r\n    }\r\n\r\n}",
    "javascript": "// Runtime: 70 ms (Top 80.89%) | Memory: 47.60 MB (Top 75.77%)\r\n\r\nvar pathSum = function(root, sum, presums = { '0': 1 }, prev = 0) {\r\n    if (!root) return 0;\r\n    let curr = prev + root.val;\r\n    presums[curr] = (presums[curr] || 0) + 1;\r\n    let res = (presums[curr - sum] || 0) - !sum;\r\n    res += pathSum(root.left, sum, presums, curr) + pathSum(root.right, sum, presums, curr);\r\n    presums[curr]--;\r\n    return res;\r\n};"
  }
}
