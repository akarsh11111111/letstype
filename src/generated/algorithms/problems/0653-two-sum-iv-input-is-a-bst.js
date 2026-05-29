export default {
  "id": 653,
  "name": "Two Sum IV - Input is a BST",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/two-sum-iv-input-is-a-bst",
  "relativeDir": "T/Two Sum IV - Input is a BST",
  "slug": "0653-two-sum-iv-input-is-a-bst",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 67,
    "java": 13,
    "python": 25,
    "javascript": 14
  },
  "languages": {
    "cpp": "// Runtime: 41 ms (Top 92.71%) | Memory: 36.9 MB (Top 41.87%)\r\n\r\nclass Solution {\r\npublic:\r\n    int countNodes(TreeNode *root) {\r\n        if (root == NULL) {\r\n            return 0;\r\n        }\r\n        return countNodes(root->left) + countNodes(root->right) + 1;\r\n    }\r\n\r\n    bool findTarget(TreeNode* root, int k) {\r\n        int totalCount = countNodes(root);\r\n        int count = 0;\r\n        stack<TreeNode*> inorder;\r\n        stack<TreeNode*> revInorder;\r\n\r\n        TreeNode* currNode = root;\r\n        while(currNode != NULL){\r\n            inorder.push(currNode); //Store all elements in left of tree\r\n            currNode = currNode->left;\r\n        }\r\n\r\n        currNode = root;\r\n        while(currNode != NULL){\r\n            revInorder.push(currNode); //Store all elements in right of tree\r\n            currNode = currNode->right;\r\n        }\r\n\r\n        while(count < totalCount-1){\r\n            TreeNode* inordertop = inorder.top();\r\n            TreeNode* revinordertop = revInorder.top();\r\n            if(inordertop->val + revinordertop->val == k){ // If inordertop + revinordertop is equal to k, we have found a pair, so return true\r\n                return true;\r\n            }\r\n            else if(inordertop->val + revinordertop->val > k){ //If they are greater than k, we have to found a value\r\n            //which is just smaller than revinordertop, which means we have to find predecessor of revinordertop, as\r\n            //we have to reduce the sum to make it equal to k\r\n                TreeNode* currtop = revinordertop;\r\n                count++;\r\n                revInorder.pop();\r\n                if(currtop->left){\r\n                    currtop = currtop->left;\r\n                    while(currtop){\r\n                        revInorder.push(currtop);\r\n                        currtop = currtop->right;\r\n                    }\r\n                }\r\n            }\r\n            else{\r\n            //If they are smaller than k, we have to found a value which is just larger than inordertop, which means\r\n            //we have to find successor of revinordertop, as we have to increase the sum to make it equal to k\r\n                TreeNode* currtop = inordertop;\r\n                count++;\r\n                inorder.pop();\r\n                if(currtop->right){\r\n                    currtop = currtop->right;\r\n                    while(currtop){\r\n                        inorder.push(currtop);\r\n                        currtop = currtop->left;\r\n                    }\r\n                }\r\n            }\r\n        }\r\n        return false;\r\n    }\r\n};",
    "python": "# Definition for a binary tree node.\r\n# class TreeNode:\r\n#     def __init__(self, val=0, left=None, right=None):\r\n#         self.val = val\r\n#         self.left = left\r\n#         self.right = right\r\nclass Solution:\r\n    def findTarget(self, root: Optional[TreeNode], k: int) -> bool:\r\n        def inorder(root,l):\r\n            if root:\r\n                inorder(root.left,l)\r\n                l.append(root.val)\r\n                inorder(root.right,l)\r\n        l = []\r\n        inorder(root,l)\r\n        left,right=0,len(l)-1\r\n        while left!=right:\r\n            sum = l[left] + l[right]\r\n            if sum > k :\r\n                right -=1\r\n            elif sum <k:\r\n                left +=1\r\n            else:\r\n                return 1\r\n        return 0",
    "java": "class Solution {\r\n    Set<Integer> set = new HashSet<>();\r\n    public boolean findTarget(TreeNode root, int k) {\r\n        if(root == null){\r\n            return false;\r\n        }\r\n        if(set.contains(k-root.val)){\r\n            return true;\r\n        }\r\n        set.add(root.val);\r\n        return findTarget(root.left,k) || findTarget(root.right,k);\r\n    }\r\n}",
    "javascript": "// Runtime: 97 ms (Top 93.88%) | Memory: 51.4 MB (Top 81.78%)\r\nvar findTarget = function(root, k) {\r\n\r\n    const set = new Set();\r\n\r\n    const search = (root, k) => {\r\n        if (!root) return false;\r\n        if (set.has(k - root.val)) return true;\r\n        set.add(root.val);\r\n        return search(root.left, k) || search(root.right, k);\r\n    }\r\n\r\n    return search(root,k);\r\n};"
  }
}
