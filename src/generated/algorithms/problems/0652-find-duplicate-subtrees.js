export default {
  "id": 652,
  "name": "Find Duplicate Subtrees",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-duplicate-subtrees",
  "relativeDir": "F/Find Duplicate Subtrees",
  "slug": "0652-find-duplicate-subtrees",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 24,
    "java": 85,
    "python": 23,
    "javascript": 17
  },
  "languages": {
    "cpp": "// Runtime: 41 ms (Top 93.16%) | Memory: 44.5 MB (Top 70.83%)\r\nclass Solution {\r\npublic:\r\n    unordered_map<string,int> dp ;\r\n    vector<TreeNode*> ans ;\r\n\r\n    string solve(TreeNode * root){\r\n        if(!root) return \"\" ;\r\n\r\n        string left = solve(root->left) ;\r\n        string right = solve(root->right) ;\r\n\r\n        string code = to_string(root->val) + \" \" + left + \" \" + right ;\r\n        if(dp[code] == 1) ans.push_back(root) ;\r\n        dp[code]++ ;\r\n\r\n        return code ;\r\n    }\r\n\r\n    vector<TreeNode*> findDuplicateSubtrees(TreeNode* root) {\r\n        string dummy = solve(root) ;\r\n        return ans ;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def findDuplicateSubtrees(self, root: Optional[TreeNode]) -> List[Optional[TreeNode]]:\r\n        ans = []\r\n        path_map = {}\r\n        \r\n        def dfs(node):\r\n            if not node:\r\n                return \"#\"\r\n            \r\n            path = \",\".join([str(node.val), dfs(node.left), dfs(node.right)])\r\n            \r\n            if path in path_map:\r\n                path_map[path] += 1\r\n                if  path_map[path] == 2:\r\n                    ans.append(node)\r\n            else:\r\n                path_map[path] = 1\r\n                \r\n            return path\r\n        \r\n        \r\n        dfs(root)\r\n        return ans",
    "java": "// Runtime: 1783 ms (Top 5.02%) | Memory: 64.5 MB (Top 11.80%)\r\n/**\r\n * Definition for a binary tree node.\r\n * public class TreeNode {\r\n * int val;\r\n * TreeNode left;\r\n * TreeNode right;\r\n * TreeNode() {}\r\n * TreeNode(int val) { this.val = val; }\r\n * TreeNode(int val, TreeNode left, TreeNode right) {\r\n * this.val = val;\r\n * this.left = left;\r\n * this.right = right;\r\n * }\r\n * }\r\n */\r\nclass Solution {\r\n    public List<TreeNode> findDuplicateSubtrees(TreeNode root) {\r\n        List<TreeNode> list = new ArrayList<TreeNode>();\r\n        HashSet<String> hashes = new HashSet<String>();\r\n        HashSet<String> added = new HashSet<String>();\r\n\r\n        // for each node, perform a dfs traversal and generate a hash\r\n        // check if the hash already exists in a set,\r\n        // if it does, get the treenode and add it to the list\r\n        Stack<TreeNode> s = new Stack<TreeNode>();\r\n\r\n        s.add(root);\r\n        while(!s.isEmpty()){\r\n            TreeNode tmp = s.pop();\r\n            dfs(tmp, \"\", tmp, list, hashes, added);\r\n\r\n            if(tmp.left != null){\r\n                s.add(tmp.left);\r\n            }\r\n            if(tmp.right != null){\r\n                s.add(tmp.right);\r\n            }\r\n        }\r\n\r\n        return list;\r\n\r\n    }\r\n\r\n    public void dfs(TreeNode parent, String hash, TreeNode root, List<TreeNode> list, HashSet<String> set, HashSet<String> added){\r\n\r\n        Stack<TreeNode> stack = new Stack<TreeNode>();\r\n\r\n        stack.add(root);\r\n        //String hash = \"\";\r\n        hash += root.val + \"ROOT,\";\r\n        while(!stack.isEmpty()){\r\n            TreeNode tmp = stack.pop();\r\n            //hash += tmp.val + \",\";\r\n\r\n            if(tmp.left != null){\r\n                hash += tmp.left.val + \"L,\";\r\n                stack.add(tmp.left);\r\n            }\r\n            else{\r\n                hash+= \"NULLL,\";\r\n            }\r\n            if(tmp.right != null){\r\n                hash += tmp.right.val + \"R,\";\r\n                stack.add(tmp.right);\r\n            }\r\n            else{\r\n                hash+=\"NULLR,\";\r\n            }\r\n            if(tmp.left == null && tmp.right == null && stack.isEmpty()){\r\n                if(set.contains(hash)){\r\n                    if(!added.contains(hash)){\r\n                        list.add(parent);\r\n                        added.add(hash);\r\n                    }\r\n                }\r\n                else{\r\n                    set.add(hash);\r\n                }\r\n                return;\r\n            }\r\n\r\n        }\r\n    }\r\n}",
    "javascript": "// Runtime: 83 ms (Top 91.06%) | Memory: 47.80 MB (Top 54.47%)\r\n\r\nvar findDuplicateSubtrees = function(root) {\r\n  const map = new Map(), res = []\r\n  dfs(root, map, res)\r\n  return res\r\n};\r\n\r\nfunction dfs(root, map, res){\r\n  if(!root) return '#'\r\n  const subtree = `${root.val}.${dfs(root.left,map,res)}.${dfs(root.right, map,res)}`\r\n  map.set(subtree,(map.get(subtree)||0) + 1)\r\n  if(map.get(subtree) === 2){\r\n    res.push(root)\r\n  }\r\n  return subtree\r\n}"
  }
}
