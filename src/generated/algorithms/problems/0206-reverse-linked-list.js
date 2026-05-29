export default {
  "id": 206,
  "name": "Reverse Linked List",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/reverse-linked-list",
  "relativeDir": "R/Reverse Linked List",
  "slug": "0206-reverse-linked-list",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 25,
    "java": 36,
    "python": 17,
    "javascript": 12
  },
  "languages": {
    "cpp": "/**\r\n * Definition for singly-linked list.\r\n * struct ListNode {\r\n *     int val;\r\n *     ListNode *next;\r\n *     ListNode() : val(0), next(nullptr) {}\r\n *     ListNode(int x) : val(x), next(nullptr) {}\r\n *     ListNode(int x, ListNode *next) : val(x), next(next) {}\r\n * };\r\n */\r\nclass Solution {\r\npublic:\r\n    ListNode* reverseList(ListNode* head) {\r\n        if(head==NULL||head->next==NULL)\r\n        {\r\n            return head;\r\n        }\r\n        ListNode *s=reverseList(head->next);\r\n        ListNode *t=head->next;\r\n            t->next=head;\r\n        head->next=NULL;\r\n        return s;\r\n        \r\n    }\r\n};",
    "python": "# Runtime: 71 ms (Top 18.71%) | Memory: 15.5 MB (Top 28.33%)\r\n# Definition for singly-linked list.\r\n# class ListNode:\r\n# def __init__(self, val=0, next=None):\r\n# self.val = val\r\n# self.next = next\r\nclass Solution:\r\n    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:\r\n        if head==None or head.next==None:\r\n            return head\r\n        p = None\r\n        while(head != None):\r\n            temp = head.next\r\n            head.next = p\r\n            p = head\r\n            head = temp\r\n        return p",
    "java": "// Runtime: 0 ms (Top 100.00%) | Memory: 41.5 MB (Top 99.13%)\r\n/**\r\n * Definition for singly-linked list.\r\n * public class ListNode {\r\n * int val;\r\n * ListNode next;\r\n * ListNode() {}\r\n * ListNode(int val) { this.val = val; }\r\n * ListNode(int val, ListNode next) { this.val = val; this.next = next; }\r\n * }\r\n */\r\nclass Solution {\r\n    public ListNode reverseList(ListNode head) {\r\n\r\n        if(head == null || head.next == null) return head;\r\n\r\n        ListNode curr = head;\r\n        ListNode temp = null, next = curr.next;\r\n        curr.next = null;\r\n\r\n        while(curr !=null && next !=null)\r\n        {\r\n            // before cutting off link between next & its next, save next.next\r\n            temp = next.next;\r\n            // let next point to curr\r\n            next.next = curr;\r\n\r\n            curr = next;\r\n            next = temp;\r\n\r\n        }\r\n\r\n        return curr;\r\n\r\n    }\r\n}",
    "javascript": "var reverseList = function(head) {\r\n    \r\n    //  Iteratively\r\n    [cur, rev, tmp] = [head, null, null]\r\n    while(cur){\r\n        tmp = cur.next;\r\n        cur.next = rev;\r\n        rev = cur;\r\n        cur = tmp;\r\n        //[current.next, prev, current] = [prev, current, current.next]\r\n    }\r\n}"
  }
}
