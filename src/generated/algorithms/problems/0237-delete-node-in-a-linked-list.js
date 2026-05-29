export default {
  "id": 237,
  "name": "Delete Node in a Linked List",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/delete-node-in-a-linked-list",
  "relativeDir": "D/Delete Node in a Linked List",
  "slug": "0237-delete-node-in-a-linked-list",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 20,
    "java": 19,
    "python": 12,
    "javascript": 5
  },
  "languages": {
    "cpp": "/**\r\n * Definition for singly-linked list.\r\n * struct ListNode {\r\n *     int val;\r\n *     ListNode *next;\r\n *     ListNode(int x) : val(x), next(NULL) {}\r\n * };\r\n */\r\nclass Solution {\r\npublic:\r\n    void deleteNode(ListNode* node) {\r\n        int temp = node->val;\r\n        node->val = node->next->val;\r\n        node->next->val = temp;\r\n        \r\n        ListNode* delNode = node->next;\r\n        node->next = node->next->next;\r\n        delete delNode;\r\n    }\r\n};",
    "python": "// Runtime: 39 ms (Top 87.58%) | Memory: 17.70 MB (Top 6.02%)\r\n\r\n# Definition for singly-linked list.\r\n# class ListNode:\r\n#     def __init__(self, x):\r\n#         self.val = x\r\n#         self.next = None\r\n\r\nclass Solution:\r\n    def deleteNode(self, node):\r\n        node.val = node.next.val\r\n        node.next = node.next.next",
    "java": "// Runtime: 0 ms (Top 100.00%) | Memory: 44.5 MB (Top 10.41%)\r\nclass Solution {\r\n    public void deleteNode(ListNode node) {\r\n\r\n        // 4 5 1 9 : Node = 5\r\n\r\n        node.val = node.next.val;\r\n\r\n        //Copy next node val to current node.\r\n        //4 1 1 9\r\n        // ------------\r\n\r\n        //Point node.next = node.next.next\r\n        // 4 -----> 1 ----> 9\r\n\r\n        node.next = node.next.next;\r\n        // 4 1 9\r\n    }\r\n}",
    "javascript": "var deleteNode = function(node) {\r\n    let nextNode = node.next;\r\n    node.val = nextNode.val;\r\n    node.next = nextNode.next;\r\n};"
  }
}
