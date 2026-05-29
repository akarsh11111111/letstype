export default {
  "id": 234,
  "name": "Palindrome Linked List",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/palindrome-linked-list",
  "relativeDir": "P/Palindrome Linked List",
  "slug": "0234-palindrome-linked-list",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 39,
    "java": 49,
    "python": 22,
    "javascript": 46
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    ListNode* reverse(ListNode* head)\r\n    {\r\n        ListNode* prev=nullptr;\r\n        while(head)\r\n        {\r\n            ListNode* current=head->next;\r\n            head->next=prev;\r\n            prev=head;\r\n            head=current;\r\n        }\r\n        return prev;\r\n    }\r\n    bool isPalindrome(ListNode* head) {\r\n         if(!head || !head->next) return true;\r\n        ListNode* tort=head;\r\n        ListNode* hare=head;\r\n        while(hare->next && hare->next->next)\r\n        {\r\n            tort=tort->next;\r\n            hare=hare->next->next;\r\n        }\r\n        tort->next=reverse(tort->next);\r\n         tort=tort->next;\r\n        ListNode* dummy=head;\r\n        while(tort)\r\n        {\r\n            if(tort->val!=dummy->val)\r\n                return false;\r\n            tort=tort->next;\r\n            dummy=dummy->next;\r\n        }\r\n        return true;\r\n    }\r\n};\r\n\r\nTime Complexity: O(n/2)+O(n/2)+O(n/2)\r\nSpace Complexity: O(1)",
    "python": "class Solution:\r\n    def isPalindrome(self, head: \"Optional[ListNode]\") -> bool:\r\n        if head.next == None: return True #if only 1 element, it's always a palindrome\r\n        forward = head\r\n        first_half = []\r\n        fast = head\r\n\r\n        while (fast != None and fast.next != None):\r\n            first_half.append(forward.val)\r\n            forward = forward.next\r\n            fast = fast.next.next\r\n\r\n        # forward should now be through half the list\r\n        if fast != None : forward = forward.next  # if length isn't even, skip the middle number\r\n        \r\n        reverse = len(first_half)-1\r\n        while forward != None:\r\n            if forward.val != first_half[reverse]: return False\r\n            forward = forward.next\r\n            reverse -= 1\r\n\r\n        return True",
    "java": "class Solution {\r\n    public boolean isPalindrome(ListNode head) {\r\n        \r\n        ListNode mid = getMiddle(head);\r\n        ListNode headSecond = reverse(mid);\r\n        ListNode reverseHead = headSecond;\r\n        \r\n        while(head != null && headSecond != null){\r\n            if(head.val != headSecond.val){\r\n                break;\r\n            }\r\n            head = head.next;\r\n            headSecond = headSecond.next;\r\n        }\r\n        reverse(reverseHead);\r\n        \r\n        return head==null || headSecond == null;\r\n    }\r\n    \r\n    public ListNode reverse(ListNode head){\r\n        if(head==null) return head;\r\n        ListNode prev = null;\r\n        ListNode present = head;\r\n        ListNode next = head.next;\r\n        while(present != null){\r\n            present.next = prev;\r\n            prev = present;\r\n            present = next;\r\n            if(next!=null)\r\n            next = next.next;\r\n        }\r\n        return prev;\r\n    }\r\n    \r\n    public ListNode getMiddle(ListNode head){\r\n        ListNode temp = head;\r\n        int count = 0;\r\n        while(temp!=null){\r\n            temp = temp.next;\r\n            count++;\r\n        }\r\n        int mid = count/2;\r\n        temp = head;\r\n        for(int i=0; i<mid;i++){\r\n            temp = temp.next;\r\n        }\r\n        return temp;\r\n    }\r\n}",
    "javascript": "// Runtime: 157 ms (Top 94.07%) | Memory: 62.9 MB (Top 99.05%)\r\n/**\r\n * Definition for singly-linked list.\r\n * function ListNode(val, next) {\r\n * this.val = (val===undefined ? 0 : val)\r\n * this.next = (next===undefined ? null : next)\r\n * }\r\n */\r\n/**\r\n * @param {ListNode} head\r\n * @return {boolean}\r\n */\r\nvar isPalindrome = function(head) {\r\n    let slow = head;\r\n    let fast = head;\r\n    // Moving slow one step at a time while fast, two steps\r\n    while (fast && fast.next) {\r\n        slow = slow.next;\r\n        fast = fast.next.next;\r\n    }\r\n    // This way, slow will end up right after the middle node\r\n    // Reverse the list from that node\r\n    slow = reverse(slow);\r\n    fast = head;\r\n    // Now check for equality first half and second half of the list\r\n    while (slow) {\r\n        if (slow.val !== fast.val) {\r\n            return false;\r\n        }\r\n        slow = slow.next;\r\n        fast = fast.next;\r\n    }\r\n    return true;\r\n};\r\n\r\n// Function to reverse a LinkedList\r\nfunction reverse(head) {\r\n    let prev = null;\r\n    while (head) {\r\n        let nextNode = head.next;\r\n        head.next = prev;\r\n        prev = head;\r\n        head = nextNode;\r\n    }\r\n    return prev;\r\n}"
  }
}
