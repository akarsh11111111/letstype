export default {
  "id": 21,
  "name": "Merge Two Sorted Lists",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/merge-two-sorted-lists",
  "relativeDir": "M/Merge Two Sorted Lists",
  "slug": "0021-merge-two-sorted-lists",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 23,
    "java": 36,
    "python": 17,
    "javascript": 53
  },
  "languages": {
    "cpp": "// Runtime: 8 ms (Top 15.6%) | Memory: 15.10 MB (Top 46.21%)\r\n\r\nclass Solution {\r\npublic:\r\n    ListNode *mergeTwoLists(ListNode *l1, ListNode *l2) {\r\n        ListNode dummy(INT_MIN);\r\n        ListNode *tail = &dummy;\r\n        \r\n        while (l1 && l2) {\r\n            if (l1->val < l2->val) {\r\n                tail->next = l1;\r\n                l1 = l1->next;\r\n            } else {\r\n                tail->next = l2;\r\n                l2 = l2->next;\r\n            }\r\n            tail = tail->next;\r\n        }\r\n\r\n        tail->next = l1 ? l1 : l2;\r\n        return dummy.next;\r\n    }\r\n};",
    "python": "# Runtime: 43 ms (Top 67.2%) | Memory: 16.18 MB (Top 97.5%)\r\n\r\nclass Solution:\r\n    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:\r\n        cur = dummy = ListNode()\r\n        while list1 and list2:               \r\n            if list1.val < list2.val:\r\n                cur.next = list1\r\n                list1, cur = list1.next, list1\r\n            else:\r\n                cur.next = list2\r\n                list2, cur = list2.next, list2\r\n                \r\n        if list1 or list2:\r\n            cur.next = list1 if list1 else list2\r\n            \r\n        return dummy.next",
    "java": "// Runtime: 1 ms (Top 80.18%) | Memory: 43.5 MB (Top 22.48%)\r\nclass Solution {\r\n    public ListNode mergeTwoLists(ListNode list1, ListNode list2)\r\n    {\r\n        if(list1==null && list2==null)\r\n            return null;\r\n        if(list1 == null)\r\n            return list2;\r\n        if(list2 == null)\r\n            return list1;\r\n\r\n        ListNode newHead = new ListNode();\r\n        ListNode newNode = newHead;\r\n\r\n        while(list1!=null && list2!=null)\r\n        {\r\n            //ListNode newNode = new ListNode();\r\n            if(list1.val <= list2.val)\r\n            {\r\n                newNode.next = list1;\r\n                list1 = list1.next;\r\n            }\r\n            else if(list1.val >= list2.val)\r\n            {\r\n                newNode.next = list2;\r\n                list2 = list2.next;\r\n            }\r\n            newNode = newNode.next;\r\n        }\r\n        if(list1!=null)\r\n            newNode.next = list1;\r\n        else if(list2!=null)\r\n            newNode.next = list2;\r\n        return newHead.next;\r\n    }\r\n}",
    "javascript": "// Runtime: 127 ms (Top 16.18%) | Memory: 43.7 MB (Top 91.75%)\r\n/**\r\n * Definition for singly-linked list.\r\n * function ListNode(val, next) {\r\n * this.val = (val===undefined ? 0 : val)\r\n * this.next = (next===undefined ? null : next)\r\n * }\r\n */\r\n/**\r\n * @param {ListNode} list1\r\n * @param {ListNode} list2\r\n * @return {ListNode}\r\n */\r\nvar mergeTwoLists = function(list1, list2) {\r\n\r\n    if(!list1) return list2\r\n    if(!list2) return list1\r\n\r\n    let mergedList = new ListNode(0);\r\n    let ptr = mergedList;\r\n    let curr1 = list1;\r\n    let curr2 = list2;\r\n\r\n    while(curr1 && curr2){\r\n\r\n        let newNode = new ListNode();\r\n        if(!curr2 || curr1.val < curr2.val){\r\n            newNode.val = curr1.val;\r\n            newNode.next = null;\r\n            ptr.next = newNode\r\n            curr1 =curr1.next;\r\n        } else{\r\n            newNode.val = curr2.val;\r\n            newNode.next = null;\r\n            ptr.next = newNode\r\n            curr2 =curr2.next;\r\n        }\r\n\r\n        ptr = ptr.next\r\n    }\r\n\r\n    if(curr1 !== null){\r\n        ptr.next = curr1;\r\n        curr1 = curr1.next;\r\n    }\r\n\r\n    if(curr2 !== null){\r\n        ptr.next = curr2;\r\n        curr2 = curr2.next;\r\n    }\r\n\r\n    return mergedList.next\r\n};"
  }
}
