export default {
  "id": 142,
  "name": "Linked List Cycle II",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/linked-list-cycle-ii",
  "relativeDir": "L/Linked List Cycle II",
  "slug": "0142-linked-list-cycle-ii",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 17,
    "java": 19,
    "python": 22,
    "javascript": 24
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    ListNode *detectCycle(ListNode *head) {\r\n        map<ListNode*, int> m;\r\n        int index = 0;\r\n        while (head)\r\n        {\r\n            if (m.find(head) == m.end())\r\n                m[head] = index;\r\n            else \r\n                return (head);\r\n            head = head->next;\r\n            index++;       \r\n        }\r\n        return (NULL);\r\n    }\r\n};",
    "python": "# Definition for singly-linked list.\r\n# class ListNode:\r\n#     def __init__(self, x):\r\n#         self.val = x\r\n#         self.next = None\r\n\r\nclass Solution:\r\n    def detectCycle(self, head: Optional[ListNode]) -> Optional[ListNode]:\r\n        if not head or not head.next:\r\n            return None\r\n        slow = fast = entry = head\r\n        \r\n        while fast and fast.next:\r\n            slow = slow.next\r\n            fast = fast.next.next\r\n            \r\n            if slow == fast:\r\n                while slow != entry:\r\n                    slow = slow.next\r\n                    entry = entry.next\r\n                return entry\r\n        return None",
    "java": "public class Solution {\r\n    public ListNode detectCycle(ListNode head) {\r\n        if (head == null) return null;\r\n        ListNode tortoise = head;\r\n        ListNode hare = new ListNode();\r\n        hare.next = head.next;\r\n        while (hare != null && hare.next != null && hare != tortoise) {\r\n            tortoise = tortoise.next;\r\n            hare = hare.next.next;\r\n        }\r\n        if (hare == null || hare.next == null) return null;\r\n        tortoise = head;\r\n        while (tortoise != hare) {\r\n            tortoise = tortoise.next;\r\n            hare = hare.next;\r\n        }\r\n        return hare;\r\n    }\r\n}",
    "javascript": "// Runtime: 94 ms (Top 78.70%) | Memory: 44.9 MB (Top 73.58%)\r\nvar detectCycle = function(head) {\r\n    let slowRunner = head\r\n    let fastRunner = head\r\n\r\n    while(fastRunner) {\r\n        fastRunner = fastRunner.next?.next\r\n        slowRunner = slowRunner.next\r\n\r\n        if (fastRunner === slowRunner) {\r\n            fastRunner = slowRunner\r\n            slowRunner = head\r\n\r\n            while (slowRunner !== fastRunner) {\r\n                slowRunner = slowRunner.next\r\n                fastRunner = fastRunner.next\r\n            }\r\n\r\n            return slowRunner\r\n        }\r\n    }\r\n\r\n    return null\r\n};"
  }
}
