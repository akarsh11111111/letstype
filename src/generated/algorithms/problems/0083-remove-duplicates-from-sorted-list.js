export default {
  "id": 83,
  "name": "Remove Duplicates from Sorted List",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/remove-duplicates-from-sorted-list",
  "relativeDir": "R/Remove Duplicates from Sorted List",
  "slug": "0083-remove-duplicates-from-sorted-list",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 46,
    "java": 25,
    "python": 18,
    "javascript": 24
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    // Recursive Approach\r\n    ListNode* deleteDuplicates(ListNode* head){\r\n        // base case\r\n        if(head==NULL || head->next==NULL)\r\n            return head;\r\n        // 1-1-2-3-3\r\n        //we are giving next pointer to recursion and telling it to get it done for me\r\n        ListNode* newNode=deleteDuplicates(head->next); // 1-2-3-3\r\n        // after recursion we will get-- 1-2-3\r\n        \r\n        //now we will compare the head node with the newNode \r\n        // if both are same then return the newNode\r\n        //else return the current head\r\n        if(head->val==newNode->val) \r\n            return newNode;\r\n        else{\r\n            head->next=newNode;\r\n            return head;\r\n        } \r\n    }\r\n};\r\n\r\n\r\nclass Solution {\r\npublic:\r\n    // Iterative Approach\r\n    ListNode* deleteDuplicates(ListNode* head){\r\n        if(head==NULL || head->next==NULL) return head;\r\n        \r\n        ListNode* temp =head;\r\n        while(temp->next!=NULL){\r\n            // if the 2 consecutive nodes are equal then just delete the in between\r\n            if(temp->val==temp->next->val){\r\n                temp->next=temp->next->next;\r\n                //dont need to update the temp variable as there can be more than 2 duplicates\r\n                // 1-1-1-1-2-3-4-4-NULL\r\n            }\r\n            else{\r\n                temp=temp->next; //update the temp variable\r\n            }\r\n        }\r\n        return head;\r\n    }\r\n};",
    "python": "# Definition for singly-linked list.\r\n# class ListNode:\r\n#     def __init__(self, val=0, next=None):\r\n#         self.val = val\r\n#         self.next = next\r\nclass Solution:\r\n    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:\r\n        if head is None:\r\n            return head\r\n        cur=head.next\r\n        prev=head\r\n        while cur is not None:\r\n            if cur.val==prev.val:\r\n                prev.next=cur.next\r\n            else:\r\n                prev=cur\r\n            cur=cur.next\r\n        return head",
    "java": "// Runtime: 0 ms (Top 100.00%) | Memory: 41.5 MB (Top 99.82%)\r\nclass Solution {\r\n    public ListNode deleteDuplicates(ListNode head) {\r\n\r\n        if (head == null) {\r\n            return head;\r\n        }\r\n\r\n        ListNode result = head;\r\n\r\n        while (result != null) {\r\n            if (result.next == null) {\r\n                break;\r\n            }\r\n\r\n            if (result.val == result.next.val) {\r\n                result.next = result.next.next;\r\n            } else {\r\n                result = result.next;\r\n            }\r\n        }\r\n\r\n        return head;\r\n    }\r\n}",
    "javascript": "// Runtime: 61 ms (Top 64.8%) | Memory: 44.06 MB (Top 61.3%)\r\n\r\nvar deleteDuplicates = function(head) {\r\n    // Special case...\r\n    if(head == null || head.next == null)\r\n        return head;\r\n    // Initialize a pointer curr with the address of head node...\r\n    let curr = head;\r\n    // Traverse all element through a while loop if curr node and the next node of curr node are present...\r\n    while( curr != null && curr.next != null){\r\n        // If the value of curr is equal to the value of prev...\r\n        // It means the value is present in the linked list...\r\n        if(curr.val == curr.next.val){\r\n            // Hence we do not need to include curr again in the linked list...\r\n            // So we increment the value of curr...\r\n            curr.next = curr.next.next;\r\n        }\r\n        // Otherwise, we increment the curr pointer...\r\n        else{\r\n            curr = curr.next; \r\n        }\r\n    }\r\n    return head;        // Return the sorted linked list without any duplicate element...\r\n};"
  }
}
