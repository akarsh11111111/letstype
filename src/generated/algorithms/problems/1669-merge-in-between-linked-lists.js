export default {
  "id": 1669,
  "name": "Merge In Between Linked Lists",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/merge-in-between-linked-lists",
  "relativeDir": "M/Merge In Between Linked Lists",
  "slug": "1669-merge-in-between-linked-lists",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 32,
    "java": 18,
    "python": 16,
    "javascript": 21
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    ListNode* mergeInBetween(ListNode* list1, int a, int b, ListNode* list2) {\r\n        \r\n        int jump1 = 1;\r\n        ListNode *temp1 = list1;\r\n        while (jump1 < a){\r\n            temp1 = temp1->next;\r\n            jump1++;\r\n        }                                //Gets the pointer to a\r\n        \r\n\t\tint jump2 = 1;\r\n        ListNode *temp2 = list1;\r\n        while(jump2 <= b){\r\n            temp2 = temp2->next;\r\n            jump2++;\r\n        }                                //Gets the pointer to b\r\n        \r\n\t\tListNode *temp3=list2;\r\n        while(temp3->next != NULL){\r\n            temp3=temp3->next;\r\n        }                               //Gets the pointer to the tail of list2\r\n        \r\n\t\t\r\n\t\ttemp1->next=list2;              //set the next pointer of a to the head of list2\r\n        \r\n\t\ttemp3->next = temp2->next;      //set next of tail of list2 to the pointer to b\r\n        \r\n\t\treturn list1;                   //return the original list i.e. list1\r\n        \r\n    }\r\n};",
    "python": "// Runtime: 324 ms (Top 44.4%) | Memory: 22.60 MB (Top 86.42%)\r\n\r\nclass Solution:\r\n    def mergeInBetween(self, list1: ListNode, a: int, b: int, list2: ListNode) -> ListNode:\r\n        head = list1\r\n        for _ in range(a-1):\r\n            head = head.next\r\n        cur = head.next\r\n        for _ in range(b-a):\r\n            cur = cur.next\r\n        head.next = list2\r\n        while head.next:\r\n            head = head.next\r\n        if cur.next:\r\n            head.next = cur.next\r\n        return list1",
    "java": "class Solution {\r\n    public ListNode mergeInBetween(ListNode list1, int a, int b, ListNode list2) {\r\n        ListNode left = list1;\r\n        for (int i = 1; i < a; i++)\r\n            left = left.next;\r\n        \r\n        ListNode middle = left;\r\n        for (int i = a; i <= b; i++)\r\n            middle = middle.next;\r\n        \r\n\t\tleft.next = list2;\r\n        while (list2.next != null)\r\n            list2 = list2.next;\r\n        \r\n        list2.next = middle.next;\r\n        return list1;\r\n    }\r\n}",
    "javascript": "// Runtime: 358 ms (Top 28.85%) | Memory: 62.9 MB (Top 16.92%)\r\nvar mergeInBetween = function(list1, a, b, list2) {\r\n    let start = list1;\r\n    let end = list1;\r\n\r\n    for (let i = 0; i <= b && start != null && end != null; i++) {\r\n        if (i < a - 1) start = start.next;\r\n        if (i <= b) end = end.next;\r\n    }\r\n\r\n    let tail = list2;\r\n\r\n    while (tail.next != null) {\r\n        tail = tail.next;\r\n    }\r\n\r\n    start.next = list2;\r\n    tail.next = end;\r\n\r\n    return list1;\r\n};"
  }
}
