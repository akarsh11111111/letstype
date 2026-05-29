export default {
  "id": 109,
  "name": "Convert Sorted List to Binary Search Tree",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree",
  "relativeDir": "C/Convert Sorted List to Binary Search Tree",
  "slug": "0109-convert-sorted-list-to-binary-search-tree",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 23,
    "java": 29,
    "python": 11,
    "javascript": 22
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    typedef vector<int>::iterator vecIt;\r\n    TreeNode* buildTree(vector<int>& listToVec, vecIt start, vecIt end)\r\n    {\r\n        if (start >= end)\r\n            return NULL;\r\n        vecIt midIt = start + (end - start) / 2;\r\n        TreeNode* newNode = new TreeNode(*midIt);\r\n        newNode->left = buildTree(listToVec, start, midIt);\r\n        newNode->right = buildTree(listToVec, midIt + 1, end);\r\n        return (newNode);\r\n    }\r\n    TreeNode* sortedListToBST(ListNode* head) {\r\n        vector<int> listToVec;\r\n        while (head)\r\n        {\r\n            listToVec.push_back(head->val);\r\n            head = head->next;\r\n        }\r\n        return (buildTree(listToVec, listToVec.begin(), listToVec.end()));\r\n    }\r\n};",
    "python": "class Solution:\r\n    def sortedListToBST(self, head: Optional[ListNode]) -> Optional[TreeNode]:\r\n        arr = []\r\n        while head:\r\n            arr.append(head.val)\r\n            head = head.next\r\n        def dfs(left, right):\r\n            if left > right: return\r\n            m = (left + right)//2\r\n            return TreeNode(arr[m], dfs(left, m-1), dfs(m+1, right))\r\n        return dfs(0, len(arr)-1)",
    "java": "class Solution {\r\n    \r\n        public TreeNode sortedListToBST(ListNode head) {\r\n            \r\n            ListNode tmp = head;\r\n            ArrayList<Integer> treelist = new ArrayList<>();\r\n            \r\n            while(tmp != null) {\r\n                treelist.add(tmp.val);\r\n                tmp = tmp.next;\r\n            }\r\n            \r\n            return createTree(treelist, 0, treelist.size()-1);\r\n        }\r\n    \r\n        public TreeNode createTree(ArrayList<Integer> treelist, int start, int end) {\r\n            \r\n            if(start > end)\r\n                return null;\r\n            \r\n            int mid = start + (end-start)/2;\r\n            \r\n            TreeNode node = new TreeNode(treelist.get(mid));//getNode(treelist.get(mid));\r\n            \r\n            node.left = createTree(treelist, start, mid-1);\r\n            node.right = createTree(treelist, mid+1, end);\r\n            return node;\r\n        }\r\n}",
    "javascript": "var sortedListToBST = function(head) {\r\n    if(!head) return null;\r\n    if(!head.next) return new TreeNode(head.val);\r\n    \r\n    let fast = head, slow = head, prev = head;\r\n    while(fast && fast.next) {\r\n        prev = slow;\r\n        slow = slow.next;\r\n        fast = fast.next.next;\r\n    }\r\n    \r\n    const root = new TreeNode(slow.val);\r\n    prev.next = null;\r\n    \r\n    const newHead = slow.next;\r\n    slow.next = null;\r\n    \r\n    root.left = sortedListToBST(head);\r\n    root.right = sortedListToBST(newHead);\r\n    \r\n    return root;\r\n};"
  }
}
