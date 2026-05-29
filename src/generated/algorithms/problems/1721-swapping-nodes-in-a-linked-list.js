export default {
  "id": 1721,
  "name": "Swapping Nodes in a Linked List",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/swapping-nodes-in-a-linked-list",
  "relativeDir": "S/Swapping Nodes in a Linked List",
  "slug": "1721-swapping-nodes-in-a-linked-list",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 55,
    "java": 33,
    "python": 22,
    "javascript": 8
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    ListNode* swapNodes(ListNode* head, int k) {\r\n        \r\n        // declare a dummy node\r\n        \r\n        ListNode* dummy = new ListNode(0);\r\n        \r\n        // point dummy -> next to head\r\n        \r\n        dummy -> next = head;\r\n        \r\n        // declare a tail pointer and point to dummy\r\n        \r\n        ListNode* tail = dummy;\r\n        \r\n        // move the curr pointer (k - 1) times\r\n        \r\n        // this will maintain a gap of (k - 1) between curr and tail pointer\r\n        \r\n        ListNode* curr = head;\r\n        \r\n        while(k > 1)\r\n        {\r\n            curr = curr -> next;\r\n            \r\n            k--;\r\n        }\r\n        \r\n        // store the address in start pointer\r\n        \r\n        ListNode* start = curr;\r\n        \r\n        // maintaing a gap of (k - 1) between curr and tail, move both pointer\r\n        \r\n        while(curr)\r\n        {\r\n            tail = tail -> next;\r\n            \r\n            curr = curr -> next;\r\n        }\r\n        \r\n        // store the address of kth node from end\r\n        \r\n        ListNode* end = tail;\r\n        \r\n        // swap the values\r\n        \r\n        swap(start -> val, end -> val);\r\n        \r\n        // dummy -> next will be head\r\n        \r\n        return dummy -> next;\r\n    }\r\n};",
    "python": "# Runtime: 784 ms (Top 40.9%) | Memory: 50.79 MB (Top 42.2%)\r\n\r\nclass Solution:\r\n    def swapNodes(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:\r\n        tot = 0 # initialise total\r\n        Head = head\r\n        while Head: # count total nodes\r\n            Head = Head.next # move forward\r\n            tot += 1 # incerse count by one for each node\r\n        one, two = None, None # two pointers of one and two\r\n        count = 1 # we're initialising to one because we have one based index for swapping\r\n        Head = head # regain original head to traverse\r\n        while Head:\r\n            if one and two: break # if we have both one and two then break loop to save time\r\n            if count == k: # if from forward we reach at node k then it's our first node\r\n                one = Head\r\n            if count == (tot-k+1): # if from backward we reach to node k then save it\r\n                two = Head\r\n            Head = Head.next # move further\r\n            count += 1 # increse count\r\n        one.val, two.val = two.val, one.val # now swap values\r\n        return head # return head",
    "java": "// Runtime: 2 ms (Top 100.00%) | Memory: 56.9 MB (Top 96.11%)\r\nclass Solution {\r\n    public ListNode swapNodes(ListNode head, int k) {\r\n        ListNode fast = head;\r\n        ListNode slow = head;\r\n        ListNode first = head, second = head;\r\n\r\n        // Put fast (k-1) nodes after slow\r\n        for(int i = 0; i < k - 1; ++i)\r\n            fast = fast.next;\r\n\r\n        // Save the node for swapping\r\n        first = fast;\r\n\r\n        // Move until the end of the list\r\n        while(fast.next != null) {\r\n            slow = slow.next;\r\n            fast = fast.next;\r\n        }\r\n\r\n        // Save the second node for swapping\r\n        // Note that the pointer second isn't necessary: we could use slow for swapping as well\r\n        // However, having second improves readability\r\n        second = slow;\r\n\r\n        // Swap values\r\n        int temp = first.val;\r\n        first.val = second.val;\r\n        second.val = temp;\r\n\r\n        return head;\r\n    }\r\n}",
    "javascript": "var swapNodes = function(head, k) {\r\n    let A = head, B = head, K, temp\r\n    for (let i = 1; i < k; i++) A = A.next\r\n    K = A, A = A.next\r\n    while (A) A = A.next, B = B.next\r\n    temp = K.val, K.val = B.val, B.val = temp\r\n    return head\r\n};"
  }
}
