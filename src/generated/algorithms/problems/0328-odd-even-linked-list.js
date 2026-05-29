export default {
  "id": 328,
  "name": "Odd Even Linked List",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/odd-even-linked-list",
  "relativeDir": "O/Odd Even Linked List",
  "slug": "0328-odd-even-linked-list",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 29,
    "java": 19,
    "python": 15,
    "javascript": 28
  },
  "languages": {
    "cpp": "// Runtime: 19 ms (Top 54.79%) | Memory: 10.4 MB (Top 74.28%)\r\nclass Solution {\r\npublic:\r\n    ListNode* oddEvenList(ListNode* head) {\r\n        if(head == NULL || head->next == NULL || head->next->next == NULL){\r\n            return head;\r\n        }\r\n        ListNode *first = head;\r\n        ListNode *second = head->next;\r\n        ListNode *last = head;\r\n        int count = 1;\r\n        while(last->next != NULL){\r\n            last = last->next;\r\n            count++;\r\n        }\r\n\r\n        int n = count/2;\r\n        while(n != 0){\r\n            first->next = second->next;\r\n            last->next = second;\r\n            second->next = NULL;\r\n            first = first->next;\r\n            last = second;\r\n            second = first->next;\r\n            n--;\r\n        }\r\n        return head;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def oddEvenList(self, head: Optional[ListNode]) -> Optional[ListNode]:\r\n        if head is None:\r\n            return \r\n        odd, even_start, even = head, head.next, head.next\r\n        while odd is not None and even is not None:\r\n            odd.next = even.next\r\n            if odd.next is not None:\r\n                odd = odd.next\r\n                even.next = odd.next\r\n                even = even.next\r\n            else:\r\n                break\r\n        odd.next = even_start\r\n        return head",
    "java": "// Runtime: 0 ms (Top 100.00%) | Memory: 44.6 MB (Top 61.89%)\r\nclass Solution {\r\n    public ListNode oddEvenList(ListNode head) {\r\n        if(head == null) {\r\n            return head;\r\n        }\r\n        ListNode result = head, evenHalf = new ListNode(0), evenHalfPtr = evenHalf;\r\n        for(; head.next != null; head = head.next) {\r\n            evenHalfPtr = evenHalfPtr.next = head.next;\r\n            head.next = head.next.next;\r\n            evenHalfPtr.next = null;\r\n            if(head.next == null) {\r\n                break;\r\n            }\r\n        }\r\n        head.next = evenHalf.next;\r\n        return result;\r\n    }\r\n}",
    "javascript": "// Runtime: 57 ms (Top 84.32%) | Memory: 44.70 MB (Top 40.04%)\r\n\r\n/**\r\n * Definition for singly-linked list.\r\n * function ListNode(val, next) {\r\n *     this.val = (val===undefined ? 0 : val)\r\n *     this.next = (next===undefined ? null : next)\r\n * }\r\n */\r\n/**\r\n * @param {ListNode} head\r\n * @return {ListNode}\r\n */\r\nvar oddEvenList = function(head) {\r\n    \r\n  if (!head || !head.next) return head;\r\n\r\n  let odd = head, even = head.next, firstEven = even;\r\n  while (even && even.next) {\r\n    odd.next = even.next;\r\n    odd = odd.next;\r\n    even.next = odd.next;\r\n    even = even.next;\r\n  }\r\n  odd.next = firstEven;\r\n  return head;\r\n\r\n};"
  }
}
