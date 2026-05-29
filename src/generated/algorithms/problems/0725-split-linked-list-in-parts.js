export default {
  "id": 725,
  "name": "Split Linked List in Parts",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/split-linked-list-in-parts",
  "relativeDir": "S/Split Linked List in Parts",
  "slug": "0725-split-linked-list-in-parts",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 37,
    "java": 41,
    "python": 36,
    "javascript": 40
  },
  "languages": {
    "cpp": "// Runtime: 15 ms (Top 36.14%) | Memory: 8.9 MB (Top 57.65%)\r\nclass Solution {\r\npublic:\r\n    vector<ListNode*> splitListToParts(ListNode* head, int k)\r\n    {\r\n       vector<ListNode*>ans;\r\n       int len=0;\r\n        ListNode*temp=head;\r\n       while(temp!=NULL)\r\n           len++,temp=temp->next;\r\n\r\n       int y=len/k , z=len%k;\r\n\r\n       while(head !=NULL)\r\n       {\r\n           ans.push_back(head);\r\n           int count=1;\r\n           while(head!=NULL && count<y)\r\n                 head=head->next,count++;\r\n\r\n           if(z && y)\r\n           {\r\n               head=head->next;z--;\r\n           }\r\n           if(head==NULL) continue;\r\n           ListNode*temp=head->next;\r\n           head->next=NULL;\r\n           head=temp;\r\n       }\r\n       while(ans.size()<k)\r\n       {\r\n           ans.push_back(NULL);\r\n       }\r\n\r\n       return ans;\r\n    }\r\n};",
    "python": "# Runtime: 50 ms (Top 81.38%) | Memory: 14.5 MB (Top 12.03%)\r\n# Definition for singly-linked list.\r\n# class ListNode:\r\n# def __init__(self, val=0, next=None):\r\n# self.val = val\r\n# self.next = next\r\nclass Solution:\r\n    def splitListToParts(self, head: Optional[ListNode], k: int) -> List[Optional[ListNode]]:\r\n        length = 0\r\n        cur = head\r\n        while cur:\r\n            length += 1\r\n            cur = cur.next\r\n        # DON'T do following since this makes head become null\r\n        # while head:\r\n        # length += 1\r\n        # head = head.next\r\n\r\n        # calculate the base size and the number of parts contain extra number\r\n        size, extra = length // k, length % k\r\n\r\n        # create empty list to store split parts\r\n        res = [[] for _ in range(k)]\r\n\r\n        # use two ptrs to split parts\r\n        prev, cur = None, head\r\n\r\n        for i in range(k):\r\n            res[i] = cur\r\n            # if this part contains extra number, it has (size+1) number\r\n            for j in range(size + (1 if extra > 0 else 0)):\r\n                prev, cur = cur, cur.next\r\n            if prev: prev.next = None\r\n            extra -= 1\r\n\r\n        return res",
    "java": "// Runtime: 1 ms (Top 69.17%) | Memory: 43.9 MB (Top 66.95%)\r\nclass Solution {\r\n    public ListNode[] splitListToParts(ListNode head, int k) {\r\n        ListNode[] arr=new ListNode[k];\r\n\r\n        if(k<2 || head==null || head.next==null){\r\n            arr[0]=head;\r\n            return arr;\r\n        }\r\n\r\n        ListNode temp=head;\r\n        int len=1;\r\n        while(temp.next!=null){\r\n            len++;\r\n            temp=temp.next;\r\n        }\r\n\r\n        int partition= len/k; //no of part 3\r\n        int extra=len%k; //extra node 1 0\r\n\r\n        ListNode curr=head;\r\n        ListNode prev=null;\r\n        int index=0;\r\n        while(head!=null){\r\n            arr[index++]=curr;\r\n            for(int i=0; i<partition && curr!=null ; i++){\r\n                prev=curr;\r\n                curr=curr.next;\r\n            }\r\n            if(extra>0){\r\n                prev=curr;\r\n                curr=curr.next;\r\n                extra--;\r\n            }\r\n            head=curr;\r\n            prev.next=null;\r\n\r\n        }\r\n     return arr;\r\n    }\r\n}",
    "javascript": "// Runtime: 72 ms (Top 6.17%) | Memory: 45.00 MB (Top 9.88%)\r\n\r\nvar splitListToParts = function(head, k) {\r\n    let length = 0, current = head, parts = [];\r\n\r\n    while (current) {\r\n        length++;\r\n        current = current.next;\r\n    }\r\n\r\n    let base_size = Math.floor(length / k), extra = length % k;\r\n    current = head;\r\n\r\n    for (let i = 0; i < k; i++) {\r\n        let part_size = base_size + (extra > 0 ? 1 : 0);\r\n        let part_head = null, part_tail = null;\r\n\r\n        for (let j = 0; j < part_size; j++) {\r\n            if (!part_head) {\r\n                part_head = part_tail = current;\r\n            } else {\r\n                part_tail.next = current;\r\n                part_tail = part_tail.next;\r\n            }\r\n\r\n            if (current) {\r\n                current = current.next;\r\n            }\r\n        }\r\n\r\n        if (part_tail) {\r\n            part_tail.next = null;\r\n        }\r\n\r\n        parts.push(part_head);\r\n        extra = Math.max(extra - 1, 0);\r\n    }\r\n\r\n    return parts;\r\n};"
  }
}
