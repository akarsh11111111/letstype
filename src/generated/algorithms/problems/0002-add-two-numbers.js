export default {
  "id": 2,
  "name": "Add Two Numbers",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/add-two-numbers",
  "relativeDir": "A/Add Two Numbers",
  "slug": "0002-add-two-numbers",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 28,
    "java": 27,
    "python": 26,
    "javascript": 44
  },
  "languages": {
    "cpp": "// Runtime: 20 ms (Top 71.39%) | Memory: 71.90 MB (Top 9.3%)\r\n\r\nclass Solution {\r\npublic:\r\n    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {\r\n        ListNode *dummy = new ListNode(0);\r\n        ListNode *curr = dummy;\r\n        int carry = 0;\r\n        \r\n        while(l1 != NULL || l2 != NULL || carry == 1){\r\n            int sum = 0;\r\n            if(l1 != NULL){\r\n                sum += l1->val;\r\n                l1 = l1->next;\r\n            }\r\n            if(l2 != NULL){\r\n                sum += l2->val;\r\n                l2 = l2->next;\r\n            }\r\n            sum += carry;\r\n            carry = sum/10;\r\n            ListNode *node = new ListNode(sum % 10);\r\n            curr->next = node;\r\n            curr = curr->next;\r\n        }\r\n        return dummy->next;\r\n    }\r\n};",
    "python": "// Runtime: 74 ms (Top 13.64%) | Memory: 16.40 MB (Top 51.59%)\r\n\r\nclass Solution:\r\n    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:\r\n        dummyHead = ListNode(0)\r\n        tail = dummyHead\r\n        carry = 0\r\n\r\n        while l1 is not None or l2 is not None or carry != 0:\r\n            digit1 = l1.val if l1 is not None else 0\r\n            digit2 = l2.val if l2 is not None else 0\r\n\r\n            sum = digit1 + digit2 + carry\r\n            digit = sum % 10\r\n            carry = sum // 10\r\n\r\n            newNode = ListNode(digit)\r\n            tail.next = newNode\r\n            tail = tail.next\r\n\r\n            l1 = l1.next if l1 is not None else None\r\n            l2 = l2.next if l2 is not None else None\r\n\r\n        result = dummyHead.next\r\n        dummyHead.next = None\r\n        return result",
    "java": "class Solution {\r\n    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {\r\n        if(l1 == null) return l2;\r\n        if(l2 == null) return l1;\r\n        \r\n        ListNode dummy = new ListNode(-1);\r\n        ListNode temp = dummy;\r\n        int carry = 0;\r\n        while(l1 != null || l2 != null || carry != 0){\r\n            int sum = 0;\r\n            if(l1 != null){\r\n                sum += l1.val;\r\n                l1 = l1.next;\r\n            }\r\n            if(l2 != null){\r\n                sum += l2.val;\r\n                l2 = l2.next;\r\n            } \r\n            sum += carry;\r\n            carry = sum / 10;\r\n            ListNode node = new ListNode(sum % 10);\r\n            temp.next = node;\r\n            temp = temp.next;\r\n        }\r\n        return dummy.next;\r\n    }\r\n}",
    "javascript": "\r\n/**\r\n * Definition for singly-linked list.\r\n * function ListNode(val) {\r\n *     this.val = val;\r\n *     this.next = null;\r\n * }\r\n */\r\n/**\r\n * @param {ListNode} l1\r\n * @param {ListNode} l2\r\n * @return {ListNode}\r\n */\r\nvar addTwoNumbers = function(l1, l2) {\r\n    var List = new ListNode(0);\r\n    var head = List;\r\n    var sum = 0;\r\n    var carry = 0;\r\n\r\n    while(l1!==null||l2!==null||sum>0){\r\n\r\n        if(l1!==null){\r\n            sum = sum + l1.val;\r\n            l1 = l1.next;\r\n        }\r\n        if(l2!==null){\r\n            sum = sum + l2.val;\r\n            l2 = l2.next;\r\n        }\r\n        if(sum>=10){\r\n            carry = 1;\r\n            sum = sum - 10;\r\n        }\r\n\r\n        head.next = new ListNode(sum);\r\n        head = head.next;\r\n\r\n        sum = carry;\r\n        carry = 0;\r\n\r\n    }\r\n\r\n    return List.next;\r\n};"
  }
}
