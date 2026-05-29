export default {
  "id": 61,
  "name": "Rotate List",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/rotate-list",
  "relativeDir": "R/Rotate List",
  "slug": "0061-rotate-list",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 38,
    "java": 31,
    "python": 29,
    "javascript": 30
  },
  "languages": {
    "cpp": "/**\r\n * Definition for singly-linked list.\r\n * struct ListNode {\r\n *     int val;\r\n *     ListNode *next;\r\n *     ListNode() : val(0), next(nullptr) {}\r\n *     ListNode(int x) : val(x), next(nullptr) {}\r\n *     ListNode(int x, ListNode *next) : val(x), next(next) {}\r\n * };\r\n */\r\nclass Solution {\r\npublic:\r\n// like if it is useful to you\r\n    ListNode* rotateRight(ListNode* head, int k) {\r\n       if(head == NULL){\r\n           return head;\r\n       }\r\n       vector<int> nums;\r\n       ListNode *temp = head;\r\n       while(temp != NULL){\r\n           nums.push_back(temp->val);\r\n           temp = temp->next;\r\n       }\r\n// if k greater than size;\r\n        k = k%nums.size();\r\n// rotating vector\r\n     reverse(nums.begin(),nums.end());\r\n     reverse(nums.begin(),nums.begin()+k);\r\n     reverse(nums.begin()+k,nums.end());\r\n// replace value of list    \r\n temp = head;\r\n     for(int i = 0; i<nums.size();i++){\r\n         temp->val = nums[i];\r\n         temp = temp->next;\r\n     }\r\n     return head;\r\n    }\r\n};",
    "python": "# Definition for singly-linked list.\r\n# class ListNode:\r\n#     def __init__(self, val=0, next=None):\r\n#         self.val = val\r\n#         self.next = next\r\nclass Solution:\r\n    def rotateRight(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:\r\n        if k==0 or head is None or head.next is None:\r\n            return head\r\n        cur=head\r\n        n=0\r\n        while cur is not None:\r\n            cur=cur.next\r\n            n+=1\r\n        k=n-k%n\r\n        if k==n:\r\n            return head\r\n        cur=head\r\n        prev=None\r\n        while k>0 and cur is not None:\r\n            prev=cur\r\n            cur=cur.next\r\n            k-=1\r\n        prev.next=None\r\n        prev=cur\r\n        while cur.next is not None:\r\n            cur=cur.next\r\n        cur.next=head\r\n        return prev",
    "java": "class Solution {\r\n    public ListNode rotateRight(ListNode head, int k) {\r\n        if(k<=0 || head==null || head.next==null){\r\n            return head;\r\n        }\r\n        \r\n        int length=1;\r\n        ListNode first=head;\r\n        ListNode curr=head;\r\n        ListNode node=head;   \r\n        while(node.next!=null){\r\n            length++;\r\n            node=node.next;\r\n        }\r\n        \r\n        if(k==length){\r\n            return head;\r\n        }\r\n        \r\n        int n=length-(k%length);\r\n        for(int i=0; i<n-1;i++){\r\n            curr=curr.next;\r\n        }\r\n        \r\n        node.next=head;  //5-->1\r\n        head=curr.next;\r\n        curr.next=null;\r\n        \r\n        return head;\r\n    }\r\n}",
    "javascript": "// Runtime: 116 ms (Top 31.18%) | Memory: 43.8 MB (Top 89.57%)\r\nvar rotateRight = function(head, k) {\r\n    if(k === 0 || !head) return head;\r\n\r\n    let n = 0;\r\n    let end = null;\r\n\r\n    let iterator = head;\r\n    while(iterator) {\r\n        n += 1;\r\n        end = iterator;\r\n        iterator = iterator.next;\r\n    }\r\n\r\n    const nodesToRotate = k % n;\r\n    if(nodesToRotate === 0) return head;\r\n\r\n    let breakAt = n - nodesToRotate;\r\n    iterator = head;\r\n    while(breakAt - 1 > 0) {\r\n        iterator = iterator.next;\r\n        breakAt -= 1;\r\n    }\r\n\r\n    const newHead = iterator.next;\r\n    iterator.next = null;\r\n    end.next = head;\r\n\r\n    return newHead;\r\n};"
  }
}
