export default {
  "id": 2095,
  "name": "Delete the Middle Node of a Linked List",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list",
  "relativeDir": "D/Delete the Middle Node of a Linked List",
  "slug": "2095-delete-the-middle-node-of-a-linked-list",
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
    "python": 20,
    "javascript": 33
  },
  "languages": {
    "cpp": "**Intution**- we know that we can find middle node using two pointer fast and slow. \r\n After we iterate through linkedlist slow pointer is our middle node and since we need to delete it\r\n we only need pointer to its previous node and then just simply put next to next node in previous node.\r\n Woahh ! you are done with deleting middle NODE;\r\n\r\nclass Solution {\r\npublic:\r\n\tListNode* deleteMiddle(ListNode* head) {\r\n\t\t   if(head->next==nullptr) return nullptr;\r\n\t\t   ListNode *f=head;\r\n\t\t   ListNode *s=head,*prev;\r\n\t\t  while(f!=nullptr && f->next!=nullptr){\r\n\t\t\t  f=f->next->next;\r\n\t\t\t  prev=s;\r\n\t\t\t  s=s->next;\r\n\t\t  }\r\n\t\tprev->next=prev->next->next;\r\n\t\treturn head;\r\n\t}\r\n};",
    "python": "# Runtime: 2948 ms (Top 45.50%) | Memory: 60.7 MB (Top 40.45%)\r\n# Definition for singly-linked list.\r\n# class ListNode:\r\n# def __init__(self, val=0, next=None):\r\n# self.val = val\r\n# self.next = next\r\nclass Solution:\r\n  def deleteMiddle(self, head: Optional[ListNode]) -> Optional[ListNode]:\r\n    if not head: return head\r\n    if head and not head.next: return None\r\n\r\n    prev = ListNode(0, head)\r\n    slow = fast = head\r\n    while fast and fast.next:\r\n      prev = slow\r\n      slow = slow.next\r\n      fast = fast.next.next\r\n\r\n    prev.next = slow.next\r\n    return head",
    "java": "// Runtime: 7 ms (Top 31.33%) | Memory: 218.3 MB (Top 51.88%)\r\nclass Solution {\r\n    public ListNode deleteMiddle(ListNode head) {\r\n        // Base Condition\r\n        if(head == null || head.next == null) return null;\r\n        // Pointers Created\r\n        ListNode fast = head;\r\n        ListNode slow = head;\r\n        ListNode prev = head;\r\n\r\n        while(fast != null && fast.next != null){\r\n            prev = slow;\r\n            slow = slow.next;\r\n            fast = fast.next.next;\r\n        }\r\n        prev.next = slow.next;\r\n        return head;\r\n    }\r\n}",
    "javascript": "// Runtime: 1265 ms (Top 18.42%) | Memory: 126.5 MB (Top 69.59%)\r\n/**\r\n * Definition for singly-linked list.\r\n * function ListNode(val, next) {\r\n * this.val = (val===undefined ? 0 : val)\r\n * this.next = (next===undefined ? null : next)\r\n * }\r\n */\r\n/**\r\n * @param {ListNode} head\r\n * @return {ListNode}\r\n */\r\n// Two Pointer: Fast & Slow | O(N) | O(1)\r\nvar deleteMiddle = function(head) {\r\n  if (!head.next) return null;\r\n\r\n  let prev = head;\r\n  let slow = head;\r\n  let fast = head.next;\r\n  let size = 2;\r\n\r\n  while (fast && fast.next) {\r\n    prev = slow;\r\n    slow = slow.next;\r\n    fast = fast.next.next;\r\n    size += fast ? 2 : 1;\r\n  }\r\n\r\n  if (size % 2 === 0) slow.next = slow.next.next;\r\n  else prev.next = slow.next;\r\n\r\n  return head;\r\n};"
  }
}
