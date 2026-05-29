export default {
  "id": 203,
  "name": "Remove Linked List Elements",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/remove-linked-list-elements",
  "relativeDir": "R/Remove Linked List Elements",
  "slug": "0203-remove-linked-list-elements",
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
    "python": 21,
    "javascript": 35
  },
  "languages": {
    "cpp": "// Runtime: 27 ms (Top 83.86%) | Memory: 15.3 MB (Top 20.54%)\r\nclass Solution {\r\npublic:\r\n    ListNode* removeElements(ListNode* head, int val) {\r\n        ListNode *prv,*cur,*temp;\r\n        while(head && head->val==val){\r\n            cur=head;\r\n            head=head->next;\r\n            delete(cur);\r\n        }\r\n       if(head==NULL) return head;\r\n        prv=head;\r\n        cur=head->next;\r\n        while(cur){\r\n            if(cur->val==val){\r\n                temp=cur;\r\n                prv->next=cur->next;\r\n                cur=cur->next;\r\n                delete(temp);\r\n            }\r\n            else{\r\n                prv=cur;\r\n                cur=cur->next;\r\n            }\r\n        }\r\n        return head;\r\n\r\n    }\r\n};",
    "python": "# Runtime: 151 ms (Top 10.13%) | Memory: 17.7 MB (Top 81.63%)\r\n# Definition for singly-linked list.\r\n# class ListNode:\r\n# def __init__(self, val=0, next=None):\r\n# self.val = val\r\n# self.next = next\r\nclass Solution:\r\n    def removeElements(self, head: Optional[ListNode], val: int) -> Optional[ListNode]:\r\n        prev=head\r\n        cur=head\r\n        while cur is not None:\r\n            if cur.val==val:\r\n                if cur==head:\r\n                    head=head.next\r\n                    prev=head\r\n                else:\r\n                    prev.next=cur.next\r\n            else:\r\n                prev=cur\r\n            cur=cur.next\r\n        return head",
    "java": "class Solution {\r\n    public ListNode removeElements(ListNode head, int val) {\r\n        if (head == null) {\r\n            return head;\r\n        }\r\n        ListNode result = head;\r\n        while (head.next != null) {\r\n            if (head.next.val == val) {\r\n                head.next = head.next.next;\r\n            } else {\r\n                head = head.next;\r\n            }\r\n        }\r\n        if (result.val == val) {\r\n            result = result.next;\r\n        }\r\n        return result;\r\n    }\r\n}",
    "javascript": "/**\r\n * Definition for singly-linked list.\r\n * function ListNode(val, next) {\r\n *     this.val = (val===undefined ? 0 : val)\r\n *     this.next = (next===undefined ? null : next)\r\n * }\r\n */\r\n/**\r\n * @param {ListNode} head\r\n * @param {number} val\r\n * @return {ListNode}\r\n */\r\nvar removeElements = function(head, val) {\r\n    \r\n    if(!head)return null\r\n    \r\n    //if the val is on the beginning  delete it \r\n    while( head && head.val===val)head=head.next\r\n\r\n    \r\n    let current=head;\r\n    let next=head.next;\r\n    //travers the liste and delete any node has this val    \r\n   while(next){        \r\n        if(next.val===val){\r\n        current.next=next.next\r\n        }\r\n        else current=next\r\n            \r\n        next=next.next\r\n        \r\n    }\r\n    \r\n    return head\r\n};"
  }
}
