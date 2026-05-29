export default {
  "id": 147,
  "name": "Insertion Sort List",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/insertion-sort-list",
  "relativeDir": "I/Insertion Sort List",
  "slug": "0147-insertion-sort-list",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 29,
    "java": 18,
    "python": 54,
    "javascript": 40
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    ListNode* insertionSortList(ListNode* head) {\r\n        ListNode *prev=head,*cur=head->next;\r\n        while(cur){\r\n            ListNode *tmp=head,*pt=NULL;\r\n            while(tmp!=cur and tmp->val < cur->val){\r\n                pt=tmp;\r\n                tmp=tmp->next;\r\n            }\r\n            if(tmp==cur){\r\n                prev=prev->next;\r\n                cur=cur->next;\r\n                continue;\r\n            }\r\n            prev->next=cur->next;\r\n            if(!pt){\r\n                cur->next=head;\r\n                head=cur;\r\n            }\r\n            else{\r\n                pt->next=cur;\r\n                cur->next=tmp;\r\n            }\r\n            cur=prev->next;\r\n        }\r\n        return head;\r\n    }\r\n};",
    "python": "/**\r\n * Definition for singly-linked list.\r\n * class ListNode {\r\n *     val: number\r\n *     next: ListNode | null\r\n *     constructor(val?: number, next?: ListNode | null) {\r\n *         this.val = (val===undefined ? 0 : val)\r\n *         this.next = (next===undefined ? null : next)\r\n *     }\r\n * }\r\n */\r\n\r\nfunction insertionSortList(head: ListNode | null): ListNode | null {\r\n  if (!head) return null\r\n  if (!head.next) return head\r\n\r\n  let output = head\r\n  let curr = head.next\r\n\r\n  head.next = null\r\n\r\n  while (curr) {\r\n    const next = curr.next\r\n    const insertion = curr\r\n\r\n    output = insert(output, insertion)\r\n    curr = next as ListNode\r\n  }\r\n\r\n  return output\r\n}\r\n\r\nfunction insert(head: ListNode, other: ListNode) {\r\n  let curr = head\r\n  const val = other.val\r\n\r\n  if (val <= head.val) {\r\n    other.next = head\r\n    return other\r\n  }\r\n\r\n  while (curr) {\r\n    if ((val > curr.val && curr.next && val <= curr.next.val) || !curr.next) {\r\n      other.next = curr.next\r\n      curr.next = other\r\n\r\n      return head\r\n    }\r\n\r\n    curr = curr.next as ListNode\r\n  }\r\n\r\n  return head\r\n}",
    "java": "class Solution {\r\n    public ListNode insertionSortList(ListNode head) {\r\n        ListNode cur = head;\r\n        ListNode temp = new ListNode(-5001);\r\n        ListNode prev = temp;\r\n        while(cur != null){\r\n            ListNode nxt = cur.next;\r\n            if(prev.val >= cur.val)\r\n                prev = temp;\r\n            while(prev.next != null && prev.next.val < cur.val)\r\n                prev = prev.next;\r\n            cur.next = prev.next;\r\n            prev.next = cur;\r\n            cur = nxt;\r\n        }\r\n        return temp.next;\r\n    }\r\n}",
    "javascript": "/**\r\n * Definition for singly-linked list.\r\n * function ListNode(val, next) {\r\n *     this.val = (val===undefined ? 0 : val)\r\n *     this.next = (next===undefined ? null : next)\r\n * }\r\n */\r\n/**\r\n * @param {ListNode} head\r\n * @return {ListNode}\r\n */\r\nvar insertionSortList = function(head) {\r\n    let ptr = head;\r\n    \r\n    while(ptr.next !== null){\r\n        if(ptr.val <= ptr.next.val)\r\n            ptr = ptr.next;\r\n        else{\r\n            let temp = ptr.next;\r\n            ptr.next = ptr.next.next;\r\n            \r\n            \r\n            if(temp.val < head.val)\r\n                {\r\n                    temp.next = head;\r\n                    head = temp;\r\n                }\r\n            \r\n            else{\r\n                let ptr2 = head;\r\n                while(ptr2.next != null  && temp.val >= ptr2.next.val){\r\n                    ptr2 = ptr2.next;\r\n                }\r\n                temp.next = ptr2.next;\r\n                ptr2.next = temp;\r\n            }\r\n        }\r\n    }\r\n    return head;\r\n};"
  }
}
