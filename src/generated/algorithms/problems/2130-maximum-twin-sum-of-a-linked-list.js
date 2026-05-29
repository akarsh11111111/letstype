export default {
  "id": 2130,
  "name": "Maximum Twin Sum of a Linked List",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list",
  "relativeDir": "M/Maximum Twin Sum of a Linked List",
  "slug": "2130-maximum-twin-sum-of-a-linked-list",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 43,
    "java": 50,
    "python": 14,
    "javascript": 16
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    ListNode* reverse(ListNode* head){\r\n        ListNode* prev=NULL,*curr=head,*nextstop;\r\n        while(curr){\r\n            nextstop=curr->next;\r\n            curr->next=prev;\r\n            prev=curr;\r\n            curr=nextstop;\r\n        }\r\n        return prev;\r\n    }\r\n    \r\n    ListNode* findMiddleNode(ListNode* head){\r\n        ListNode* slowptr=head,*fastptr=head->next;\r\n        while(fastptr&&fastptr->next){\r\n            slowptr=slowptr->next;\r\n            fastptr=fastptr->next->next;\r\n        }\r\n        return slowptr;\r\n    }\r\n    \r\n    int pairSum(ListNode* head) {\r\n        int ans=0;\r\n        \r\n        ListNode* midNode=findMiddleNode(head);\r\n        ListNode* head2=reverse(midNode->next);\r\n        \r\n        midNode->next=NULL;\r\n        \r\n        \r\n        ListNode* p1=head,*p2=head2;\r\n        while(p1&&p2){\r\n            ans=max(ans,p1->val+p2->val);\r\n            p1=p1->next;\r\n            p2=p2->next;\r\n        }\r\n        \r\n        midNode->next=reverse(head2);\r\n        \r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 2246 ms (Top 8.54%) | Memory: 54.1 MB (Top 58.68%)\r\nclass Solution:\r\n    def pairSum(self, head: Optional[ListNode]) -> int:\r\n        nums = []\r\n        curr = head\r\n        while curr:\r\n            nums.append(curr.val)\r\n            curr = curr.next\r\n\r\n        N = len(nums)\r\n        res = 0\r\n        for i in range(N // 2):\r\n            res = max(res, nums[i] + nums[N - i - 1])\r\n        return res",
    "java": "/**\r\n * Definition for singly-linked list.\r\n * public class ListNode {\r\n *     int val;\r\n *     ListNode next;\r\n *     ListNode() {}\r\n *     ListNode(int val) { this.val = val; }\r\n *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }\r\n * }\r\n */\r\nclass Solution {\r\n    public int pairSum(ListNode head) {\r\n        if (head == null) {\r\n            return 0;\r\n        }\r\n        if (head.next == null) {\r\n            return head.val;\r\n        }\r\n        ListNode slow = head;\r\n        ListNode fast = head;\r\n        while (fast != null && fast.next != null) {\r\n            slow = slow.next;\r\n            fast = fast.next.next;\r\n        }\r\n        slow = reverse(slow);\r\n        fast = head;\r\n        int sum = Integer.MIN_VALUE;\r\n        while (slow != null) {\r\n            sum = Math.max(slow.val + fast.val, sum);\r\n            slow = slow.next;\r\n            fast = fast.next;\r\n        }\r\n        return sum;\r\n    }\r\n    \r\n    public ListNode reverse(ListNode node) {\r\n        if (node == null) {\r\n            return null;\r\n        }\r\n        ListNode current = node;\r\n        ListNode previous = null;\r\n        while (current != null) {\r\n            ListNode next = current.next;\r\n            current.next = previous;\r\n            previous = current;\r\n            current = next;\r\n        }\r\n        return previous;\r\n    }\r\n}",
    "javascript": "var pairSum = function(head) {\r\n    const arr = [];\r\n    let max = 0;\r\n    \r\n    while (head) {\r\n        arr.push(head.val);\r\n        head = head.next;\r\n    }\r\n    \r\n    for (let i = 0; i < arr.length / 2; i++) {\r\n        const sum = arr[i] + arr[arr.length - 1 - i]\r\n        max = Math.max(max, sum);\r\n    }\r\n    \r\n    return max;\r\n};"
  }
}
