export default {
  "id": 876,
  "name": "Middle of the Linked List",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/middle-of-the-linked-list",
  "relativeDir": "M/Middle of the Linked List",
  "slug": "0876-middle-of-the-linked-list",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 23,
    "java": 19,
    "python": 10,
    "javascript": 10
  },
  "languages": {
    "cpp": "// Runtime: 6 ms (Top 19.66%) | Memory: 7 MB (Top 71.58%)\r\n/**\r\n * Definition for singly-linked list.\r\n * struct ListNode {\r\n * int val;\r\n * ListNode *next;\r\n * ListNode() : val(0), next(nullptr) {}\r\n * ListNode(int x) : val(x), next(nullptr) {}\r\n * ListNode(int x, ListNode *next) : val(x), next(next) {}\r\n * };\r\n */\r\nclass Solution {\r\npublic:\r\n    ListNode* middleNode(ListNode* head) {\r\n         ListNode * slow=head;\r\n        ListNode * fast=head;\r\n        while(fast!=NULL && fast->next!=NULL){\r\n            slow=slow->next;\r\n            fast=fast->next->next;\r\n        }\r\n        return slow;\r\n    }\r\n};",
    "python": "// Runtime: 45 ms (Top 13.51%) | Memory: 17.40 MB (Top 21.17%)\r\n\r\nclass Solution:\r\n    def middleNode(self, head):\r\n        Iter, N = head, 0\r\n        while Iter:\r\n            Iter, N = Iter.next, N + 1\r\n        for i in range(N//2):\r\n            head = head.next\r\n        return head",
    "java": "class Solution {\r\n    public ListNode middleNode(ListNode head) {\r\n        \r\n        ListNode temp = head;\r\n        int size = 0;\r\n        while(temp!=null){\r\n            size++;\r\n            temp = temp.next;\r\n        }\r\n        int mid = size/2;\r\n        temp = head;\r\n        for(int i=0;i<mid;i++){\r\n            temp = temp.next;\r\n        }\r\n        \r\n        return temp;\r\n        \r\n    }\r\n}",
    "javascript": "// Runtime: 74 ms (Top 75.46%) | Memory: 41.3 MB (Top 98.90%)\r\nvar middleNode = function(head) {\r\n    var runner1 = head\r\n    var runner2 = head?.next\r\n    while(runner1 && runner2) {\r\n        runner1 = runner1?.next\r\n        runner2 = (runner2?.next)?.next\r\n    }\r\n    return runner1\r\n};"
  }
}
