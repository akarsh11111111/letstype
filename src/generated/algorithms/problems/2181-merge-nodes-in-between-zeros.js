export default {
  "id": 2181,
  "name": "Merge Nodes in Between Zeros",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/merge-nodes-in-between-zeros",
  "relativeDir": "M/Merge Nodes in Between Zeros",
  "slug": "2181-merge-nodes-in-between-zeros",
  "availableLanguages": [
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "java",
  "lineCounts": {
    "java": 34,
    "python": 16,
    "javascript": 21
  },
  "languages": {
    "python": "class Solution:\r\n    def mergeNodes(self, head: Optional[ListNode]) -> Optional[ListNode]:\r\n        d=ListNode(0)\r\n        t=0\r\n        r=ListNode(0,d)\r\n        while head:\r\n            if head.val!=0:\r\n                t+=head.val\r\n            else:\r\n                print(t)\r\n                if t!=0:\r\n                    d.next=ListNode(t)\r\n                    d=d.next\r\n                    t=0\r\n            head=head.next\r\n        return r.next.next",
    "java": "/**\r\n * Definition for singly-linked list.\r\n * public class ListNode {\r\n *     int val;\r\n *     ListNode next;\r\n *     ListNode() {}\r\n *     ListNode(int val) { this.val = val; }\r\n *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }\r\n * }\r\n */\r\nclass Solution {\r\n    public ListNode mergeNodes(ListNode head) {\r\n        ListNode newList=new ListNode(0);\r\n        ListNode newHead=newList;\r\n       ListNode newtemp= newList;\r\n/*---------------------------------------------------------------*/\r\n        ListNode temp=head.next;\r\n        int sum=0;\r\n        if(head==null && head.next==null) return head;\r\n/*---------------------------------------------------------------*/  \r\n        while(temp!=null){  //traverse linkelist\r\n            sum +=temp.val;  //sum elements until zero\r\n            if(temp.val==0){\r\n               ListNode node=new ListNode(sum); //create a new node; \r\n               newtemp.next=node; //connect with dummy node which is created initially\r\n                newtemp=newtemp.next; //shift pointer to newly created node\r\n                sum=0; //reset sum\r\n            }\r\n            temp=temp.next;\r\n        }\r\n/*---------------------------------------------------------------*/\r\n        return newHead.next; //skip dummy node which is created initially\r\n    }\r\n}",
    "javascript": "// Runtime: 405 ms (Top 56.3%) | Memory: 151.24 MB (Top 25.2%)\r\n\r\nvar mergeNodes = function(head) {\r\n    var res = new ListNode()\r\n    var ans = res ;\r\n    var current = head.next;\r\n    var sum = 0;\r\n    while(current){\r\n              \r\n            if(current.val != 0){\r\n                sum = sum + current.val;\r\n            }else{\r\n                res.next = new ListNode(sum);\r\n                sum = 0;\r\n                res = res.next;\r\n            }\r\n        current = current.next;\r\n            \r\n    }\r\n    return ans.next;\r\n};"
  }
}
