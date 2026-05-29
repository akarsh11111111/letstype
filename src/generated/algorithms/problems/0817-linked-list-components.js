export default {
  "id": 817,
  "name": "Linked List Components",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/linked-list-components",
  "relativeDir": "L/Linked List Components",
  "slug": "0817-linked-list-components",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 22,
    "java": 28,
    "python": 16,
    "javascript": 19
  },
  "languages": {
    "cpp": "// Runtime: 91 ms (Top 25.69%) | Memory: 21.6 MB (Top 53.31%)\r\nclass Solution {\r\npublic:\r\n    int numComponents(ListNode* head, vector<int>& nums)\r\n    {\r\n        unordered_set<int> s;\r\n        for(auto &x:nums)\r\n            s.insert(x);\r\n        int count=0;\r\n        while(head!=NULL)\r\n        {\r\n            if(s.find(head->val)!=s.end()) count++;\r\n            while(head!=NULL && s.find(head->val)!=s.end())\r\n            {\r\n                head=head->next;\r\n            }\r\n            if(head!=NULL)\r\n            head=head->next;\r\n        }\r\n        return count;\r\n    }\r\n};",
    "python": "# Runtime: 171 ms (Top 62.36%) | Memory: 19.1 MB (Top 64.07%)\r\nclass Solution:\r\n    def numComponents(self, head: Optional[ListNode], nums: List[int]) -> int:\r\n        d,count={},0\r\n        for num in nums:\r\n            d[num] = 0\r\n\r\n        while head:\r\n            if head.val in d:\r\n                head = head.next\r\n                while head and head.val in d:\r\n                    head = head.next\r\n                count += 1\r\n            else:\r\n                head = head.next\r\n        return count",
    "java": "class Solution {\r\n    public int numComponents(ListNode head, int[] nums) {\r\n        int count=0;\r\n        HashSet<Integer> set=new HashSet();\r\n        for(int i=0;i<nums.length;i++)\r\n        {\r\n            set.add(nums[i]);\r\n        }\r\n        while(head!=null)\r\n        {  \r\n            if(set.contains(head.val))\r\n            {\r\n                while(head.next!=null&&set.contains(head.next.val))\r\n                {\r\n                    head=head.next;\r\n\r\n                }\r\n                count++;\r\n            }\r\n            \r\n           \r\n                head=head.next;\r\n            \r\n            \r\n        }\r\n        return count;\r\n    }\r\n}",
    "javascript": "var numComponents = function(head, nums) {\r\n    let broken = true, count = 0;\r\n\r\n    while (head) {\r\n        if (nums.includes(head.val) && broken) {\r\n            count++;\r\n            broken = false;\r\n        }\r\n        else if (!nums.includes(head.val)) {\r\n            broken = true;\r\n        }\r\n\r\n        // reset head as next\r\n        head = head.next\r\n    }\r\n\r\n    // result\r\n    return count;\r\n};"
  }
}
