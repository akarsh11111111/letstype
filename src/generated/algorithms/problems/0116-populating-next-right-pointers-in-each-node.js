export default {
  "id": 116,
  "name": "Populating Next Right Pointers in Each Node",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/populating-next-right-pointers-in-each-node",
  "relativeDir": "P/Populating Next Right Pointers in Each Node",
  "slug": "0116-populating-next-right-pointers-in-each-node",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 27,
    "python": 29,
    "javascript": 32
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    \r\n    // constant space\r\n    // we only need start node of each level if we have already populated the next\r\n    // right pointers in that level\r\n    // node->left->next = node->right\r\n    // if node->next != NULL , node->right->next = node->next=>left\r\n    \r\n    Node* connect(Node* root) {\r\n        Node* temp = root;\r\n        while(temp != NULL){\r\n            Node* start = temp;\r\n            temp = start->left;\r\n            if(temp!=NULL){\r\n                while(start != NULL){\r\n                    start->left->next = start->right;\r\n                    if(start->next != NULL){\r\n                        start->right->next = start->next->left;\r\n                    }\r\n                    start = start->next;\r\n                }\r\n            }\r\n        }\r\n        return root;\r\n    }\r\n};",
    "python": "\"\"\"\r\n# Definition for a Node.\r\nclass Node:\r\n    def __init__(self, val: int = 0, left: 'Node' = None, right: 'Node' = None, next: 'Node' = None):\r\n        self.val = val\r\n        self.left = left\r\n        self.right = right\r\n        self.next = next\r\n\"\"\"\r\n\r\nclass Solution:\r\n    def connect(self, root: 'Optional[Node]') -> 'Optional[Node]':\r\n        q=[]\r\n        q.append(root)\r\n        if not root:\r\n            return None\r\n        while q:\r\n            prev=None\r\n            for i in range(len(q)):\r\n                node=q.pop(0)\r\n                if prev:\r\n                    prev.next=node\r\n                prev=node\r\n                if node.left:\r\n                    q.append(node.left)\r\n                if node.right:\r\n                    q.append(node.right)\r\n            prev=None\r\n        return root",
    "javascript": " * // Definition for a Node.\r\n * function Node(val, left, right, next) {\r\n *    this.val = val === undefined ? null : val;\r\n *    this.left = left === undefined ? null : left;\r\n *    this.right = right === undefined ? null : right;\r\n *    this.next = next === undefined ? null : next;\r\n * };\r\n */\r\n\r\n/**\r\n * @param {Node} root\r\n * @return {Node}\r\n */\r\nvar connect = function(root) {\r\n    \r\n    if(!root || !root.left || !root.right){\r\n       return root;\r\n     }\r\n    \r\n     root.left.next = root.right;\r\n     if(root.next){\r\n         root.right.next = root.next.left;\r\n     } else{\r\n         root.right.next = null;\r\n     }\r\n\r\n    root.left = connect(root.left);\r\n    root.right = connect(root.right);\r\n    \r\n    return root;\r\n    \r\n};"
  }
}
