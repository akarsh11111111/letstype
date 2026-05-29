export default {
  "id": 23,
  "name": "Merge k Sorted Lists",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/merge-k-sorted-lists",
  "relativeDir": "M/Merge k Sorted Lists",
  "slug": "0023-merge-k-sorted-lists",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 28,
    "java": 30,
    "python": 23,
    "javascript": 26
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    struct compare\r\n    {\r\n        bool operator()(ListNode* &a,ListNode* &b)\r\n        {\r\n            return a->val>b->val;\r\n        }\r\n    };\r\n    ListNode* mergeKLists(vector<ListNode*>& lists) {\r\n        priority_queue<ListNode*,vector<ListNode*>,compare>minh;\r\n        for(int i=0;i<lists.size();i++)\r\n        {\r\n           if(lists[i]!=NULL) minh.push(lists[i]);\r\n        }\r\n        ListNode* head=new ListNode(0);\r\n        ListNode* temp=head;\r\n        while(minh.size()>0)\r\n        {\r\n            ListNode* p=minh.top();\r\n            minh.pop();\r\n            temp->next=new ListNode(p->val);\r\n            temp=temp->next;\r\n            if(p->next!=NULL) minh.push(p->next);\r\n        }\r\n        return head->next;\r\n    }\r\n};",
    "python": "# Definition for singly-linked list.\r\n# class ListNode:\r\n#     def __init__(self, val=0, next=None):\r\n#         self.val = val\r\n#         self.next = next\r\nfrom heapq import heappush,heappop\r\nclass Solution:\r\n    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:\r\n        heap = []\r\n        heapq.heapify(heap)\r\n        start = end = ListNode(-1)\r\n        for i in lists:\r\n            if i:\r\n                heappush(heap,(i.val,id(i),i))\r\n        while heap:\r\n            val,iD,node = heappop(heap)\r\n            end.next = node\r\n            node = node.next\r\n            end = end.next\r\n            if node:\r\n                heappush(heap,(node.val,id(node),node))\r\n                \r\n        return start.next",
    "java": "// Runtime: 392 ms (Top 5.94%) | Memory: 46.8 MB (Top 77.33%)\r\nclass Solution {\r\npublic ListNode mergeKLists(ListNode[] lists) {\r\n    if(lists == null || lists.length < 1) return null;\r\n\r\n     //add the first chunk of linkedlist to res,\r\n     //so later we started from index 1\r\n    ListNode res = lists[0];\r\n\r\n    //traverse the lists and start merge by calling mergeTwo\r\n    for(int i = 1; i < lists.length; i++){\r\n        res = mergeTwo(res, lists[i]);\r\n    }\r\n\r\n    return res;\r\n}\r\n    //leetcode 21 technics\r\n    private ListNode mergeTwo(ListNode l1, ListNode l2){\r\n        if(l1 == null) return l2;\r\n        if(l2 == null) return l1;\r\n\r\n        if(l1.val < l2.val){\r\n            l1.next = mergeTwo(l1.next, l2);\r\n            return l1;\r\n        } else{\r\n            l2.next = mergeTwo(l2.next, l1);\r\n            return l2;\r\n        }\r\n    }\r\n}",
    "javascript": "var mergeKLists = function(lists) {    \r\n    // Use min heap to keep track of the smallest node in constant time.\r\n    // Enqueue and dequeue will be log(k) where k is the # of lists\r\n    // b/c we only need to keep track of the next node for each list\r\n    // at any given time.\r\n    const minHeap = new MinPriorityQueue({ priority: item => item.val });\r\n    \r\n    for (let head of lists) {\r\n        if (head) minHeap.enqueue(head);\r\n    }\r\n    \r\n    // Create tempHead that we initiate the new list with\r\n    // Final list will start at tempHead.next\r\n    const tempHead = new ListNode();\r\n    let curr = tempHead;\r\n    \r\n    while (!minHeap.isEmpty()) {\r\n        const { val, next } = minHeap.dequeue().element;\r\n        curr.next = new ListNode(val);\r\n        curr = curr.next;\r\n        \r\n        if (next) minHeap.enqueue(next);\r\n    }\r\n    \r\n    return tempHead.next;\r\n};"
  }
}
