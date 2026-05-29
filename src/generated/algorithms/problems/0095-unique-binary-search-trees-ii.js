export default {
  "id": 95,
  "name": "Unique Binary Search Trees II",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/unique-binary-search-trees-ii",
  "relativeDir": "U/Unique Binary Search Trees II",
  "slug": "0095-unique-binary-search-trees-ii",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 40,
    "java": 46,
    "python": 31,
    "javascript": 32
  },
  "languages": {
    "cpp": "class Solution \r\n{\r\n    public:\r\n    vector<TreeNode*> solve(int start, int end)\r\n    {\r\n        //base case\r\n        if(start>end){\r\n            return {NULL};\r\n        }\r\n        vector<TreeNode*> lChild, rChild, res;\r\n        //forming a tree, by keeping each node as root node\r\n        for(int i=start; i<=end; i++)\r\n        {\r\n            //don't create node here, bcz for each combination of subtree, node with new address has to be generated\r\n\r\n            //recursive call for left,right child, they will return vector of all possible subtrees\r\n            lChild = solve(start, i-1);\r\n            rChild = solve(i+1, end);\r\n            \r\n            //for each subtree returned by lChild, forming combination with each subtree returned by rChild\r\n            for(auto l: lChild)\r\n            {\r\n                for(auto r: rChild)\r\n                {\r\n                    //generating new node for each combination\r\n                    TreeNode* node = new TreeNode(i);\r\n                    //attaching left, right childs\r\n                    node->left = l;\r\n                    node->right = r;\r\n                    res.push_back(node);\r\n                }\r\n            }            \r\n        }\r\n        //returning all possible subtrees\r\n        return res;\r\n    }\r\n    vector<TreeNode*> generateTrees(int n) {\r\n        return solve(1, n);\r\n    }\r\n};",
    "python": "# Runtime: 73 ms (Top 74.11%) | Memory: 15.7 MB (Top 42.55%)\r\n# Definition for a binary tree node.\r\n# class TreeNode:\r\n# def __init__(self, val=0, left=None, right=None):\r\n# self.val = val\r\n# self.left = left\r\n# self.right = right\r\nclass Solution:\r\n\r\n    def generateTrees(self, n: int) -> List[Optional[TreeNode]]:\r\n        # define a sorted list of the numbers, for each num in that list , leftvalues\r\n# are left tree and right val are rightree, then for each number create a tree\r\n# assign the left and right to that root and append the root to the ans\r\n        nums = list(range(1,n+1))\r\n        def dfs(nums):\r\n            if not nums:\r\n                return [None]\r\n            ans = []\r\n            for i in range(len(nums)):\r\n                leftTrees = dfs(nums[:i])\r\n                rightTrees = dfs(nums[i+1:])\r\n\r\n                for l in leftTrees:\r\n                    for r in rightTrees:\r\n                        root = TreeNode(nums[i])\r\n                        root.left = l\r\n                        root.right = r\r\n                        ans.append(root)\r\n            return ans\r\n\r\n        return dfs(nums)",
    "java": "/**\r\n * Definition for a binary tree node.\r\n * public class TreeNode {\r\n *     int val;\r\n *     TreeNode left;\r\n *     TreeNode right;\r\n *     TreeNode() {}\r\n *     TreeNode(int val) { this.val = val; }\r\n *     TreeNode(int val, TreeNode left, TreeNode right) {\r\n *         this.val = val;\r\n *         this.left = left;\r\n *         this.right = right;\r\n *     }\r\n * }\r\n */\r\nclass Solution {\r\n    public List<TreeNode> generateTrees(int n) {\r\n        return helper(1,n);\r\n    }\r\n    \r\n    public List<TreeNode> helper(int lo, int hi){\r\n        List<TreeNode> res=new ArrayList<>();\r\n        if(lo>hi){\r\n            res.add(null);\r\n            return res;\r\n        }\r\n        \r\n        \r\n        for(int i=lo;i<=hi;i++){\r\n            List<TreeNode> left=helper(lo,i-1);\r\n            List<TreeNode> right=helper(i+1,hi);\r\n            \r\n            for(TreeNode l:left){\r\n                for(TreeNode r:right){\r\n                    TreeNode head=new TreeNode(i);\r\n                    head.left=l;\r\n                    head.right=r;\r\n                    \r\n                    res.add(head);\r\n                }\r\n            }\r\n        }\r\n        \r\n        return res;\r\n    }\r\n}",
    "javascript": "// Runtime: 81 ms (Top 98.19%) | Memory: 47.9 MB (Top 80.14%)\r\nvar generateTrees = function(n) {\r\n    if(n <= 0){\r\n        return [];\r\n    }\r\n    return generateRec(1, n);\r\n\r\n};\r\n\r\nfunction generateRec(start, end){\r\n    let result = [];\r\n\r\n    if(start > end){\r\n        result.push(null);\r\n        return result;\r\n    }\r\n\r\n    for(let i = start; i <end+1; i++){\r\n        let left = generateRec(start, i-1);\r\n        let right = generateRec(i+1, end);\r\n\r\n        for(let l = 0; l < left.length; l++){\r\n            for(let r = 0; r < right.length; r++){\r\n                let root = new TreeNode(i,left[l], right[r]);\r\n                result.push(root);\r\n            }\r\n        }\r\n\r\n    }\r\n    return result;\r\n\r\n}"
  }
}
