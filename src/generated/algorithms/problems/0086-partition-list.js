export default {
  "id": 86,
  "name": "Partition List",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/partition-list",
  "relativeDir": "P/Partition List",
  "slug": "0086-partition-list",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 27,
    "java": 26,
    "python": 33,
    "javascript": 27
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    ListNode* partition(ListNode* head, int x) {\r\n        ListNode *left = new ListNode(0);\r\n        ListNode *right = new ListNode(0);\r\n        \r\n        ListNode *leftTail = left;\r\n        ListNode *rightTail = right;\r\n        \r\n        while(head != NULL){\r\n            if(head->val < x){\r\n                leftTail->next = head;\r\n                leftTail = leftTail->next;\r\n            }\r\n            else{\r\n                rightTail->next = head;\r\n                rightTail = rightTail->next;\r\n            }\r\n            head = head->next;\r\n        }\r\n        \r\n        leftTail->next = right->next;\r\n        rightTail->next = NULL;\r\n        \r\n        return left->next;\r\n    }\r\n};",
    "python": "# Runtime: 53 ms (Top 53.47%) | Memory: 13.8 MB (Top 76.51%)\r\n# Definition for singly-linked list.\r\n# class ListNode(object):\r\n# def __init__(self, val=0, next=None):\r\n# self.val = val\r\n# self.next = next\r\nclass Solution(object):\r\n    def partition(self, head, x):\r\n        \"\"\"\r\n        :type head: ListNode\r\n        :type x: int\r\n        :rtype: ListNode\r\n        \"\"\"\r\n        lessthan = []\r\n        greateql = []\r\n\r\n        while head:\r\n            if head.val < x:\r\n                lessthan.append(head.val)\r\n            else:\r\n                greateql.append(head.val)\r\n            head = head.next\r\n\r\n        h = res = ListNode()\r\n\r\n        for i in range(len(lessthan)):\r\n            res.next = ListNode(lessthan[i])\r\n            res = res.next\r\n        for i in range(len(greateql)):\r\n            res.next = ListNode(greateql[i])\r\n            res = res.next\r\n\r\n        return h.next",
    "java": "class Solution {\r\n    public ListNode partition(ListNode head, int x) {\r\n        ListNode left = new ListNode(0);\r\n        ListNode right = new ListNode(0);\r\n        \r\n        ListNode leftTail = left;\r\n        ListNode rightTail = right;\r\n        \r\n        while(head != null){\r\n            if(head.val < x){\r\n                leftTail.next = head;\r\n                leftTail = leftTail.next;\r\n            }\r\n            else{\r\n                rightTail.next = head;\r\n                rightTail = rightTail.next;\r\n            }\r\n            head = head.next;\r\n        }\r\n        \r\n        leftTail.next = right.next;\r\n        rightTail.next = null;\r\n        \r\n        return left.next;\r\n    }\r\n}",
    "javascript": "var partition = function(head, x) {\r\n    if (!head) {\r\n        return head;\r\n    }\r\n    const less = [];\r\n    const greater = [];\r\n    let concat;\r\n    rec(head);\r\n    return head;\r\n    \r\n    \r\n    function rec(currentNode) {\r\n        if (currentNode.val < x) {\r\n            less.push(currentNode.val);\r\n        } else {\r\n            greater.push(currentNode.val);\r\n        }\r\n        if (!currentNode.next) {\r\n            concat = [...less, ...greater];\r\n            currentNode.val = concat.pop();       \r\n            return;\r\n        }\r\n        rec(currentNode.next);\r\n        currentNode.val = concat.pop();\r\n    }\r\n    \r\n};"
  }
}
