export default {
  "id": 445,
  "name": "Add Two Numbers II",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/add-two-numbers-ii",
  "relativeDir": "A/Add Two Numbers II",
  "slug": "0445-add-two-numbers-ii",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 43,
    "java": 43,
    "python": 13,
    "javascript": 42
  },
  "languages": {
    "cpp": "/**\r\n * Definition for singly-linked list.\r\n * struct ListNode {\r\n *     int val;\r\n *     ListNode *next;\r\n *     ListNode() : val(0), next(nullptr) {}\r\n *     ListNode(int x) : val(x), next(nullptr) {}\r\n *     ListNode(int x, ListNode *next) : val(x), next(next) {}\r\n * };\r\n */\r\nclass Solution {\r\npublic:\r\n    ListNode* reverse(ListNode* l1){\r\n        if(l1==NULL||l1->next==NULL){\r\n            return l1;\r\n        }\r\n        ListNode* ans=reverse(l1->next);\r\n        l1->next->next=l1;\r\n        l1->next=NULL;\r\n        return ans;\r\n    }\r\n    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {\r\n       ListNode* l11= reverse(l1);\r\n       ListNode* l22= reverse(l2);\r\n        ListNode* dummy=new ListNode(0);\r\n        ListNode* curr=dummy;\r\n        int carry=0;\r\n        int sum=0;\r\n        while(l11||l22||carry!=0){\r\n            int x=l11?l11->val:0;\r\n            int y=l22?l22->val:0;\r\n            sum=x+y+carry;\r\n            carry=sum/10;\r\n            curr->next=new ListNode(sum%10);\r\n            curr=curr->next;\r\n            l11=l11?l11->next:nullptr;\r\n            l22=l22?l22->next:nullptr;\r\n        }\r\n        dummy=dummy->next;\r\n       dummy=reverse(dummy);\r\n        return dummy;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:\r\n        def number(head):\r\n            ans = ''\r\n            while head:\r\n                ans+=str(head.val)\r\n                head = head.next\r\n            return int(ans) \r\n        temp = dummy = ListNode(0)\r\n        for i in str(number(l1) + number(l2)):\r\n            temp.next = ListNode(i)\r\n            temp = temp.next\r\n        return dummy.next",
    "java": "class Solution {\r\n    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {\r\n        ListNode res=new ListNode(0);\r\n        ListNode curr=res;\r\n         l1=reverseLinkedList(l1);\r\n         l2=reverseLinkedList(l2);\r\n        int carry=0;\r\n        while(l1!=null||l2!=null||carry==1)\r\n        {\r\n            int sum=0;\r\n            if(l1!=null)\r\n            {\r\n                sum+=l1.val;\r\n                l1=l1.next;\r\n            }\r\n            if(l2!=null)\r\n            {\r\n                sum+=l2.val;\r\n                l2=l2.next;\r\n            }\r\n            sum+=carry;\r\n            carry = sum/10; \r\n            curr.next= new ListNode(sum % 10); \r\n            \r\n            curr = curr.next; \r\n        }\r\n        return reverseLinkedList(res.next);\r\n    }\r\n    public ListNode reverseLinkedList(ListNode head)\r\n    {\r\n        ListNode curr=head;\r\n        ListNode prev=null;\r\n        ListNode next;\r\n        while(curr!=null)\r\n        {\r\n            next=curr.next;\r\n            curr.next=prev;\r\n            prev=curr;\r\n            curr=next;\r\n        }\r\n        return prev;\r\n    }\r\n}",
    "javascript": "// Runtime: 160 ms (Top 61.52%) | Memory: 47.9 MB (Top 37.64%)\r\nvar addTwoNumbers = function(l1, l2) {\r\n    const reverse = head =>{\r\n        let prev = null\r\n        let dummy = head\r\n\r\n        while(dummy){\r\n            let temp = dummy.next\r\n            dummy.next = prev\r\n            prev = dummy\r\n            dummy = temp\r\n        }\r\n        return prev\r\n    }\r\n\r\n    let head1 = reverse(l1)\r\n    let head2 = reverse(l2)\r\n\r\n    // add\r\n    let sum = new ListNode()\r\n    let p = sum\r\n    let carry = 0\r\n\r\n    while((head1 && head2) || carry){\r\n        let v1 = head1?head1.val:0\r\n        let v2 = head2?head2.val:0\r\n        let v = v1+v2+carry\r\n\r\n        if(v>=10) carry = 1\r\n        else carry = 0\r\n\r\n        let node = new ListNode(v%10)\r\n\r\n        sum.next = node\r\n        sum = sum.next\r\n        head1 = head1&&head1.next\r\n        head2 = head2&&head2.next\r\n\r\n    }\r\n    sum.next = head1||head2\r\n    return reverse(p.next)\r\n};"
  }
}
