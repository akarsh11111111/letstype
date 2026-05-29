export default {
  "id": 19,
  "name": "Remove Nth Node From End of List",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/remove-nth-node-from-end-of-list",
  "relativeDir": "R/Remove Nth Node From End of List",
  "slug": "0019-remove-nth-node-from-end-of-list",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 36,
    "java": 38,
    "python": 21,
    "javascript": 20
  },
  "languages": {
    "cpp": " * Definition for singly-linked list.\r\n * struct ListNode {\r\n *     int val;\r\n *     ListNode *next;\r\n *     ListNode() : val(0), next(nullptr) {}\r\n *     ListNode(int x) : val(x), next(nullptr) {}\r\n *     ListNode(int x, ListNode *next) : val(x), next(next) {}\r\n * };\r\n */\r\nclass Solution {\r\npublic:\r\n    ListNode* removeNthFromEnd(ListNode* head, int n) {\r\n        ListNode* n1 = new ListNode();\r\n         ListNode *temp=head;\r\n         ListNode *p=head;\r\n        ListNode *q=n1;\r\n        n1->next=head;\r\n        int count;\r\n        while(temp)\r\n        { \r\n         \r\n            if(n>0){\r\n                n--;\r\n            }\r\n            else if(n==0){\r\n            cout<val;\r\n            p=p->next;\r\n            q=q->next;\r\n            }\r\n               temp=temp->next;\r\n        }\r\n        q->next=p->next;\r\n        delete p;\r\n    return n1->next;\r\n    }\r\n};",
    "python": "# Runtime: 65 ms (Top 20.14%) | Memory: 13.9 MB (Top 70.35%)\r\n# Definition for singly-linked list.\r\n# class ListNode:\r\n# def __init__(self, val=0, next=None):\r\n# self.val = val\r\n# self.next = next\r\nclass Solution:\r\n    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:\r\n        if head == None:\r\n            return None\r\n        slow = head\r\n        fast = head\r\n        for i in range(n):\r\n            fast = fast.next\r\n        if fast == None:\r\n            return head.next\r\n        while fast != None and fast.next != None:\r\n            slow = slow.next\r\n            fast = fast.next\r\n        slow.next = slow.next.next\r\n        return head",
    "java": "// Runtime: 1 ms (Top 72.17%) | Memory: 42.2 MB (Top 52.18%)\r\nclass Solution {\r\n    public ListNode removeNthFromEnd(ListNode head, int n) {\r\n        ListNode temp = head;\r\n        int len=0;\r\n\r\n        if(head==null || head.next==null)\r\n            return null;\r\n\r\n        while(temp!=null){\r\n            temp=temp.next;\r\n            len++;\r\n        }\r\n\r\n        if(len==n)\r\n            return head.next;\r\n\r\n        int frontlen = len-n-1;\r\n\r\n        ListNode first=head.next;\r\n        ListNode second = head;\r\n\r\n        int count=0;\r\n\r\n        while(first!=null){\r\n            if(count==frontlen){\r\n                second.next=first.next;\r\n                break;\r\n            }else{\r\n                first=first.next;\r\n                second=second.next;\r\n                count++;\r\n            }\r\n        }\r\n\r\n        return head;\r\n    }\r\n}",
    "javascript": "// Runtime: 72 ms (Top 85.21%) | Memory: 42.2 MB (Top 92.21%)\r\n\r\nvar removeNthFromEnd = function(head, n) {\r\n    let start = new ListNode(0, head);\r\n    let slow = start, fast = start;\r\n\r\n    for (let i =1; i <= n; i++) {\r\n        fast = fast.next;\r\n    }\r\n\r\n    while(fast && fast.next) {\r\n        slow = slow.next;\r\n        fast = fast.next;\r\n    }\r\n\r\n    let nthNode = slow.next\r\n    slow.next = nthNode.next;\r\n\r\n    return start.next;\r\n};"
  }
}
