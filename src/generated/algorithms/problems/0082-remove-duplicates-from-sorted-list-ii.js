export default {
  "id": 82,
  "name": "Remove Duplicates from Sorted List II",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii",
  "relativeDir": "R/Remove Duplicates from Sorted List II",
  "slug": "0082-remove-duplicates-from-sorted-list-ii",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 27,
    "java": 38,
    "python": 28,
    "javascript": 19
  },
  "languages": {
    "cpp": "// Runtime: 3 ms (Top 99.02%) | Memory: 11.4 MB (Top 15.63%)\r\nclass Solution {\r\npublic:\r\n    ListNode* deleteDuplicates(ListNode* head) {\r\n        ListNode* k=new ListNode();\r\n        ListNode *root=k,*cur=head;\r\n        while(cur!=NULL)\r\n        {\r\n            ListNode *t=cur;\r\n            while(t->next!=NULL && t->next->val==t->val)\r\n                t=t->next;\r\n            if(t==cur)\r\n            {\r\n            if(root==NULL)\r\n                root->val=t->val;\r\n            else\r\n            {\r\n                ListNode* p=new ListNode(t->val);\r\n                root->next=p;\r\n                root=root->next;\r\n            }\r\n            }\r\n            cur=t->next;\r\n        }\r\n        return k->next;\r\n    }\r\n};",
    "python": "# Definition for singly-linked list.\r\n# class ListNode:\r\n#     def __init__(self, val=0, next=None):\r\n#         self.val = val\r\n#         self.next = next\r\nclass Solution:\r\n    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:\r\n        if (not head):\r\n            return None\r\n\r\n        result = tail = ListNode(-1)\r\n\r\n        while(head):\r\n            curr = head\r\n            head = head.next\r\n            hasDup = False\r\n            while(head) and (curr.val == head.val):\r\n                hasDup = True\r\n                headNext = head.next\r\n                head = None\r\n                head = headNext\r\n\r\n            if (hasDup == False):\r\n                tail.next = curr\r\n                tail = tail.next\r\n                tail.next = None\r\n\r\n        return result.next",
    "java": "// Runtime: 3 ms (Top 8.62%) | Memory: 43.1 MB (Top 83.93%)\r\nclass Solution {\r\n    public ListNode deleteDuplicates(ListNode head) {\r\n        if (head == null) return head;\r\n        ListNode temp = head;\r\n        int last = -1;\r\n        int[]array = new int[201];\r\n        // zero == index 100\r\n        // one == index 101;\r\n        // -100 == index 0;\r\n\r\n        while (temp != null){\r\n            array[temp.val + 100]++;\r\n            temp = temp.next;\r\n        }\r\n        for (int i = 0; i < 201; i++){\r\n            if (array[i] == 1){\r\n                last = i;\r\n            }\r\n        }\r\n        if (last == -1) return null;\r\n        temp = head;\r\n\r\n        for (int i = 0; i < 201; i++){\r\n            if (array[i] == 1){\r\n                temp.val = i - 100;\r\n                if (i == last){\r\n                    temp.next = null;\r\n                    break;\r\n                }\r\n                temp=temp.next;\r\n            }\r\n        }\r\n        temp.next = null;\r\n\r\n        return head;\r\n    }\r\n}```",
    "javascript": "// Runtime: 52 ms (Top 88.07%) | Memory: 45.00 MB (Top 7.49%)\r\n\r\nvar deleteDuplicates = function(head) {\r\n    const dummy = new ListNode();\r\n    dummy.next = head;\r\n    let node = dummy;                                                  // the last known distinct node\r\n    while (node.next) {\r\n        if (node.next.next && node.next.val === node.next.next.val) {  // if the next two nodes are equal...\r\n            let nonValNode = node.next.next.next;\r\n            while (nonValNode && nonValNode.val === node.next.val) {   // ...find the first one that isn't...\r\n                nonValNode = nonValNode.next;\r\n            }\r\n            node.next = nonValNode;                                    // ...and glue it to the last known distinct node;...\r\n        } else {\r\n            node = node.next;                                          // ...otherwise the next node is distinct\r\n        }\r\n    }\r\n    return dummy.next;\r\n};"
  }
}
