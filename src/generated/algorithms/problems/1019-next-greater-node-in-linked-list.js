export default {
  "id": 1019,
  "name": "Next Greater Node In Linked List",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/next-greater-node-in-linked-list",
  "relativeDir": "N/Next Greater Node In Linked List",
  "slug": "1019-next-greater-node-in-linked-list",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 28,
    "java": 36,
    "python": 18,
    "javascript": 28
  },
  "languages": {
    "cpp": "// Runtime: 1392 ms (Top 16.70%) | Memory: 41.2 MB (Top 71.62%)\r\nclass Solution {\r\npublic:\r\n    vector<int> nextLargerNodes(ListNode* head) {\r\n        vector<int> ans;\r\n        ListNode* curr = head;\r\n        if(head->next == NULL){\r\n            ans.push_back(0);\r\n            return ans;\r\n        }\r\n\r\n        while(curr != NULL){\r\n            ListNode* next = curr->next;\r\n            while(next != NULL){\r\n                if(next->val > curr->val){\r\n                    ans.push_back(next->val);\r\n                    break;\r\n                }\r\n                next = next->next;\r\n            }\r\n            if(next == NULL){\r\n                ans.push_back(0);\r\n            }\r\n            curr = curr->next;\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def nextLargerNodes(self, head: Optional[ListNode]) -> List[int]:\r\n        stack = []\r\n        ans = []\r\n        node = head\r\n        \r\n        i = 0\r\n        while node is not None:\r\n            while stack and stack[-1][0] < node.val:\r\n                ans[stack[-1][1]] = node.val\r\n                stack.pop()\r\n            \r\n            stack.append((node.val, i))\r\n            ans.append(0)\r\n            i += 1\r\n            node = node.next\r\n            \r\n        return ans",
    "java": "// Runtime: 721 ms (Top 25.59%) | Memory: 45.5 MB (Top 95.29%)\r\nclass Solution {\r\n    public int[] nextLargerNodes(ListNode head) {\r\n        ListNode length=head;\r\n        int l=0;\r\n        while(length!=null)\r\n        {\r\n            length=length.next;\r\n            l++;\r\n        }\r\n        int[] res=new int[l];\r\n        int i=0;\r\n        ListNode temp=head;\r\n\r\n        while(temp!=null)\r\n        {\r\n            ListNode temp1=temp.next;\r\n            int max=temp.val;\r\n\r\n            while(temp1!=null)\r\n            {\r\n                if(temp1.val>max)\r\n                {\r\n                    max=temp1.val;\r\n                    res[i]=max;\r\n                    break;\r\n                }\r\n\r\n                temp1=temp1.next;\r\n            }\r\n            temp=temp.next;\r\n            i++;\r\n        }\r\n        return res;\r\n    }\r\n}",
    "javascript": "var nextLargerNodes = function(head) {\r\n    let arr = [];\r\n    while(head){\r\n        arr.push(head.val);\r\n        head = head.next\r\n    }\r\n    return nextGreaterElement(arr)\r\n    \r\n};\r\n\r\nfunction nextGreaterElement(arr){\r\n    let temp = [];\r\n    let n = arr.length;\r\n    let stack = [];\r\n    for(let i=n-1; i>=0; i--){\r\n        while(stack.length != 0 && arr[stack[stack.length-1]] <= arr[i]){\r\n            stack.pop()\r\n        }\r\n        \r\n        if(stack.length == 0){\r\n            temp[i] = 0\r\n        }else{\r\n            temp[i] = arr[stack[stack.length-1]]\r\n        }\r\n        stack.push(i)\r\n    }\r\n    return temp\r\n}"
  }
}
