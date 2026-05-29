export default {
  "id": 1290,
  "name": "Convert Binary Number in a Linked List to Integer",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer",
  "relativeDir": "C/Convert Binary Number in a Linked List to Integer",
  "slug": "1290-convert-binary-number-in-a-linked-list-to-integer",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 19,
    "java": 42,
    "python": 19,
    "javascript": 7
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int getDecimalValue(ListNode* head) {\r\n        ListNode* temp = head;\r\n        int count = 0;\r\n        while(temp->next != NULL){\r\n            count++;\r\n            temp = temp->next;\r\n        }\r\n        temp = head;\r\n        int ans = 0;\r\n        while(count != -1){\r\n            ans += temp->val * pow(2,count);\r\n            count--;\r\n            temp = temp->next;\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "# Definition for singly-linked list.\r\n# class ListNode:\r\n#     def __init__(self, val=0, next=None):\r\n#         self.val = val\r\n#         self.next = next\r\nclass Solution:\r\n    def getDecimalValue(self, head: ListNode) -> int:\r\n        res = 0\r\n        po = 0\r\n        stack = []\r\n        node = head\r\n        while node:\r\n            stack.append(node.val)\r\n            node = node.next\r\n        res = 0\r\n        for i in reversed(stack):\r\n            res += i*(2**po)\r\n            po += 1\r\n        return res",
    "java": "// Runtime: 0 ms (Top 100.00%) | Memory: 41.4 MB (Top 64.79%)\r\n/**\r\n * Definition for singly-linked list.\r\n * public class ListNode {\r\n * int val;\r\n * ListNode next;\r\n * ListNode() {}\r\n * ListNode(int val) { this.val = val; }\r\n * ListNode(int val, ListNode next) { this.val = val; this.next = next; }\r\n * }\r\n */\r\nclass Solution {\r\n    public int getDecimalValue(ListNode head) {\r\n        head = reverse(head);\r\n        int ans = 0;\r\n        int pow = 0;\r\n        ListNode temp = head;\r\n        while(temp != null){\r\n            ans = ans + temp.val * (int) Math.pow(2,pow++);\r\n            temp = temp.next;\r\n        }\r\n\r\n        return ans;\r\n    }\r\n    public ListNode reverse(ListNode head){\r\n        ListNode prev = null;\r\n        ListNode pres = head;\r\n        ListNode Next = pres.next;\r\n\r\n        while(pres != null){\r\n            pres.next = prev;\r\n            prev = pres;\r\n            pres = Next;\r\n            if(Next != null){\r\n                Next = Next.next;\r\n            }\r\n        }\r\n\r\n        head = prev;\r\n        return head;\r\n    }\r\n}",
    "javascript": "var getDecimalValue = function(head) {\r\n    let str = \"\"\r\n    while(head){\r\n        str += head.val\r\n        head = head.next\r\n    }\r\n    return parseInt(str,2)    //To convert binary into Integer"
  }
}
