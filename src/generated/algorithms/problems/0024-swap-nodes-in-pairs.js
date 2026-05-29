export default {
  "id": 24,
  "name": "Swap Nodes in Pairs",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/swap-nodes-in-pairs",
  "relativeDir": "S/Swap Nodes in Pairs",
  "slug": "0024-swap-nodes-in-pairs",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 19,
    "java": 16,
    "python": 20,
    "javascript": 9
  },
  "languages": {
    "cpp": "// Runtime: 11 ms (Top 6.33%) | Memory: 7.5 MB (Top 92.11%)\r\nclass Solution {\r\npublic:\r\n    ListNode* swapPairs(ListNode* head) {\r\n        // if head is NULL OR just having a single node, then no need to change anything\r\n        if(head == NULL || head -> next == NULL)\r\n        {\r\n            return head;\r\n        }\r\n\r\n        ListNode* temp; // temporary pointer to store head -> next\r\n        temp = head->next; // give temp what he want\r\n\r\n        head->next = swapPairs(head->next->next); // changing links\r\n        temp->next = head; // put temp -> next to head\r\n\r\n        return temp; // now after changing links, temp act as our head\r\n    }\r\n};",
    "python": "// Runtime: 41 ms (Top 43.62%) | Memory: 17.40 MB (Top 6.56%)\r\n\r\nclass Solution:\r\n    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:\r\n\r\n        if not head or not head.next: return head\r\n\r\n        dummy = ListNode(0)\r\n        dummy.next = head\r\n        curr = dummy\r\n\r\n        while curr.next and curr.next.next:\r\n            first = curr.next\r\n            second = curr.next.next\r\n            curr.next = second\r\n            first.next = second.next\r\n            second.next = first\r\n            curr = curr.next.next\r\n        \r\n        return dummy.next",
    "java": "// Runtime: 0 ms (Top 100.00%) | Memory: 41.8 MB (Top 55.04%)\r\n\r\nclass Solution {\r\n    public ListNode swapPairs(ListNode head) {\r\n        ListNode dummy = new ListNode(0) , prev = dummy , curr = head;\r\n        dummy.next = head;\r\n        while(curr != null && curr.next != null){\r\n            prev.next = curr.next;\r\n            curr.next = curr.next.next ;\r\n            prev.next.next = curr;\r\n           curr = curr.next ;\r\n            prev = prev.next.next;\r\n        }\r\n        return dummy.next;\r\n    }\r\n}",
    "javascript": "// Runtime: 44 ms (Top 91.62%) | Memory: 41.80 MB (Top 85.64%)\r\n\r\nvar swapPairs = function(head) {\r\n    if(!head || !head.next) return head;\r\n    var v1 = head, v2 = head.next, v3 = v2.next;\r\n    v2.next = v1;\r\n    v1.next = swapPairs(v3);\r\n    return v2;\r\n};"
  }
}
