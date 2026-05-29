export default {
  "id": 143,
  "name": "Reorder List",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/reorder-list",
  "relativeDir": "R/Reorder List",
  "slug": "0143-reorder-list",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 24,
    "java": 40,
    "python": 34,
    "javascript": 74
  },
  "languages": {
    "cpp": "// Runtime: 76 ms (Top 37.42%) | Memory: 19.1 MB (Top 8.92%)\r\nclass Solution {\r\npublic:\r\n    ListNode* solve(ListNode* head,ListNode* temp){\r\n        if(temp==NULL)return head;\r\n        ListNode* curr=solve(head,temp->next);\r\n        if(!curr)return NULL;\r\n        if(curr==temp){\r\n            curr->next=NULL;\r\n            return nullptr;\r\n        }\r\n        if(curr->next==temp){\r\n            temp->next=nullptr;\r\n            return NULL;\r\n        }\r\n        temp->next=curr->next;\r\n        curr->next=temp;\r\n        curr=temp->next;\r\n        return curr;\r\n    }\r\n    void reorderList(ListNode* head) {\r\n        solve(head,head);\r\n    }\r\n};",
    "python": "class Solution:\r\n    def reverse(self , head):\r\n        prev = None\r\n        after = None\r\n        curr = head\r\n        while(curr):\r\n            after = curr.next\r\n            curr.next = prev\r\n            prev = curr\r\n            curr = after\r\n        return prev\r\n            \r\n    def find_middle(self , head):\r\n        slow = head\r\n        fast = head\r\n        while(fast and fast.next):\r\n            fast = fast.next.next\r\n            slow = slow.next\r\n        return slow\r\n        \r\n    def reorderList(self, head: Optional[ListNode]) -> None:\r\n        mid = self.find_middle(head)\r\n        rev = self.reverse(mid)\r\n        first = head\r\n        second = rev\r\n        \r\n        while(second.next):\r\n            temp = first.next\r\n            first.next = second\r\n            first = temp\r\n            \r\n            temp = second.next\r\n            second.next = first\r\n            second = temp",
    "java": "class Solution {\r\n    public void reorderList(ListNode head) {\r\n        if (head == null) return;\r\n\t\t\r\n\t\t// Find start of second list\r\n        ListNode slow = head, fast = head;\r\n        while (fast != null && fast.next != null) {\r\n            slow = slow.next;\r\n            fast = fast.next.next;\r\n        }\r\n\t\t\r\n        ListNode list1 = head;\r\n        ListNode list2 = reverseList(slow.next); // slow.next is start of list2\r\n        \r\n        // Break first list from second list!\r\n        slow.next = null; \r\n        \r\n\t\t// Merge list1 and list2\r\n        while (list2 != null) {\r\n            ListNode l1Next = list1.next;\r\n            ListNode l2Next = list2.next;\r\n            list2.next = list1.next;\r\n            list1.next = list2;\r\n            list1 = l1Next;\r\n            list2 = l2Next;\r\n        }\r\n    }\r\n    \r\n    private ListNode reverseList(ListNode node) {\r\n        if (node == null) return node;\r\n        ListNode newHead = null, currNode = node;\r\n        while (currNode != null) {\r\n            ListNode backup = currNode.next;\r\n            currNode.next = newHead;\r\n            newHead = currNode;\r\n            currNode = backup;\r\n        }\r\n        return newHead;\r\n    }\r\n}",
    "javascript": "// Runtime: 170 ms (Top 23.07%) | Memory: 50.4 MB (Top 34.29%)\r\nvar reorderList = function(head) {\r\n    const dummyL = new ListNode(-1);\r\n    const dummyR = new ListNode(-1);\r\n\r\n    let currL = dummyL;\r\n    let currR = dummyR;\r\n    let past = false;\r\n\r\n    let fast = head;\r\n    let slow = head;\r\n    while (slow) {\r\n        if (!fast?.next) {\r\n            past = true\r\n        }\r\n\r\n        if (past) {\r\n            currR.next = slow;\r\n            currR = slow;\r\n        } else {\r\n            currL.next = slow\r\n            currL = slow;\r\n        }\r\n\r\n        if (fast) {\r\n            fast = fast.next?.next || null;\r\n        }\r\n        slow = slow.next\r\n    }\r\n    currL.next = null;\r\n    currR.next = null;\r\n\r\n    dummyR.next = reverse(dummyR.next);\r\n    return merge(dummyL.next, dummyR.next);\r\n};\r\n\r\nconst merge = (l, r) => {\r\n    const dummy = new ListNode(-1);\r\n\r\n    let currL = l;\r\n    let currR = r;\r\n    let last = dummy;\r\n\r\n    let count = 0;\r\n    while (currL && currR) {\r\n        if (count % 2 === 0) {\r\n            last.next = currL;\r\n            last = currL;\r\n            currL = currL.next\r\n        } else {\r\n            last.next = currR;\r\n            last = currR;\r\n            currR = currR.next\r\n        }\r\n\r\n        count++\r\n    }\r\n\r\n    last.next = (currL || currR);\r\n    return dummy.next;\r\n}\r\n\r\nconst reverse = (head) => {\r\n    let prev = null;\r\n    let curr = head;\r\n    while (curr) {\r\n        const tempPrev = curr.next;\r\n        curr.next = prev;\r\n        prev = curr;\r\n        curr = tempPrev;\r\n    }\r\n\r\n    return prev;\r\n}"
  }
}
