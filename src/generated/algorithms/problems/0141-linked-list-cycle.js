export default {
  "id": 141,
  "name": "Linked List Cycle",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/linked-list-cycle",
  "relativeDir": "L/Linked List Cycle",
  "slug": "0141-linked-list-cycle",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 30,
    "java": 16,
    "python": 7,
    "javascript": 28
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool hasCycle(ListNode *head) {\r\n\t\r\n\t\t// if head is NULL then return false;\r\n        if(head == NULL)\r\n            return false;\r\n        \r\n\t\t// making two pointers fast and slow and assignning them to head\r\n        ListNode *fast = head;\r\n        ListNode *slow = head;\r\n        \r\n\t\t// till fast and fast-> next not reaches NULL\r\n\t\t// we will increment fast by 2 step and slow by 1 step\r\n        while(fast != NULL && fast ->next != NULL)\r\n        {\r\n            fast = fast->next->next;\r\n            slow = slow->next;\r\n            \r\n\t\t\t\r\n\t\t\t// At the point if fast and slow are at same address\r\n\t\t\t// this means linked list has a cycle in it.\r\n            if(fast == slow)\r\n                return true;\r\n        }\r\n        \r\n\t\t// if traversal reaches to NULL this means no cycle.\r\n        return false;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def hasCycle(self, head: Optional[ListNode]) -> bool:\r\n        for i in range(0, 10001):\r\n            if head == None: return False\r\n            head = head.next\r\n        \r\n        return True",
    "java": "public class Solution {\r\n    public boolean hasCycle(ListNode head) {\r\n        ListNode fast = head;\r\n        ListNode slow = head;\r\n        boolean result = false;\r\n        while(fast!=null && fast.next!=null){\r\n            fast = fast.next.next;\r\n            slow = slow.next;\r\n                if(fast == slow){\r\n                    result =  true;\r\n                    break;\r\n                }\r\n        }\r\n        return result;\r\n    }\r\n}",
    "javascript": "/**\r\n * Definition for singly-linked list.\r\n * function ListNode(val) {\r\n *     this.val = val;\r\n *     this.next = null;\r\n * }\r\n */\r\n\r\n/**\r\n * @param {ListNode} head\r\n * @return {boolean}\r\n */\r\nfunction hasCycle(head){\r\n    \r\n  let fast = head;\r\n  while (fast && fast.next) {\r\n    head = head.next;\r\n    fast = fast.next.next;\r\n    if (head === fast) return true;\r\n  }\r\n   //head and first pointers value in \r\n  //each iteration with head=[3,2,0,-4], pos = 1\r\n  //1st iteration: 3 3\r\n  //2nd iteration: 2 0\r\n  //3rd iteration: 0 2\r\n  //final iteration: -4 -4\r\n  return false;\r\n};"
  }
}
