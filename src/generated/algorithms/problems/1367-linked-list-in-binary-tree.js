export default {
  "id": 1367,
  "name": "Linked List in Binary Tree",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/linked-list-in-binary-tree",
  "relativeDir": "L/Linked List in Binary Tree",
  "slug": "1367-linked-list-in-binary-tree",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 14,
    "java": 14,
    "python": 17,
    "javascript": 12
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool func(ListNode *head,TreeNode *root){\r\n        if(!head) return true;\r\n        if(!root) return false;\r\n        if(head->val == root->val) return func(head->next,root->left) or func(head->next,root->right);\r\n        return false;\r\n    }\r\n    bool isSubPath(ListNode* head, TreeNode* root) {\r\n        if(!root) return false;\r\n        if(func(head,root)) return true;\r\n        return isSubPath(head,root->left) or isSubPath(head,root->right); \r\n    }\r\n};",
    "python": "# Runtime: 139 ms (Top 73.10%) | Memory: 16.3 MB (Top 54.16%)\r\n\r\nclass Solution(object):\r\n    def isSubPath(self, head, root):\r\n        if not root:\r\n            return False\r\n        if self.issame(head, root):\r\n            return True\r\n        return self.isSubPath(head, root.left) or self.isSubPath(head, root.right)\r\n    def issame(self, head, root):\r\n        if not head:\r\n            return True\r\n        if not root:\r\n            return False\r\n        if head.val != root.val:\r\n            return False\r\n        return self.issame(head.next, root.left) or self.issame(head.next, root.right)",
    "java": "// Runtime: 2 ms (Top 72.52%) | Memory: 49.5 MB (Top 46.71%)\r\nclass Solution {\r\n    public boolean isSubPath(ListNode head, TreeNode root) {\r\n        if(root == null) return false;\r\n        if(issame(head, root)) return true;\r\n        return isSubPath(head, root.left) || isSubPath(head, root.right);\r\n    }\r\n    private boolean issame(ListNode head, TreeNode root) {\r\n        if(head == null) return true;\r\n        if(root == null) return false;\r\n        if(head.val != root.val) return false;\r\n        return issame(head.next, root.left) || issame(head.next, root.right);\r\n    }\r\n}",
    "javascript": "var isSubPath = function(head, root) {\r\n    if(!root)    return false\r\n    if(issame(head, root))  return true\r\n    return isSubPath(head, root.left) || isSubPath(head, root.right)\r\n};\r\n\r\nfunction issame(head, root){\r\n    if(!head)   return true\r\n    if(!root)   return false\r\n    if(head.val != root.val)    return false\r\n    return issame(head.next, root.left) || issame(head.next, root.right)\r\n};"
  }
}
