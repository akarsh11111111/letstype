export default {
  "id": 382,
  "name": "Linked List Random Node",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/linked-list-random-node",
  "relativeDir": "L/Linked List Random Node",
  "slug": "0382-linked-list-random-node",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 32,
    "java": 20,
    "python": 10,
    "javascript": 19
  },
  "languages": {
    "cpp": "// Runtime: 35 ms (Top 51.44%) | Memory: 16.6 MB (Top 55.42%)\r\n/**\r\n * Definition for singly-linked list.\r\n * struct ListNode {\r\n * int val;\r\n * ListNode *next;\r\n * ListNode() : val(0), next(nullptr) {}\r\n * ListNode(int x) : val(x), next(nullptr) {}\r\n * ListNode(int x, ListNode *next) : val(x), next(next) {}\r\n * };\r\n */\r\nclass Solution {\r\npublic:\r\n    vector<int>v;\r\n    Solution(ListNode* head) {\r\n        while(head!=NULL) {\r\n            v.push_back(head->val);\r\n            head=head->next;\r\n        }\r\n\r\n    }\r\n\r\n    int getRandom() {\r\n        return v[rand()%v.size()];\r\n    }\r\n};\r\n\r\n/**\r\n * Your Solution object will be instantiated and called as such:\r\n * Solution* obj = new Solution(head);\r\n * int param_1 = obj->getRandom();\r\n */",
    "python": "// Runtime: 53 ms (Top 95.6%) | Memory: 20.10 MB (Top 30.35%)\r\n\r\nclass Solution:\r\n    def __init__(self, head: Optional[ListNode]):\r\n        self.ll=[]\r\n        while head:\r\n            self.ll.append(head.val)\r\n            head=head.next\r\n    def getRandom(self) -> int:\r\n        return self.ll[randint(0, len(self.ll)-1)]",
    "java": "// Runtime: 12 ms (Top 57.7%) | Memory: 44.32 MB (Top 46.5%)\r\n\r\nclass Solution {\r\n    int N = 0;\r\n    ListNode head = null;\r\n    public Solution(ListNode head) {\r\n        this.head = head;\r\n    }\r\n    \r\n    public int getRandom() {\r\n        ListNode p = this.head;\r\n        int i = 1, ans = 0;\r\n        while (p != null) {\r\n            if (Math.random() * i < 1) ans = p.val; // replace ans with i-th node.val with probability 1/i\r\n            p = p.next;\r\n            i ++;\r\n        }\r\n        return ans;\r\n    }\r\n}",
    "javascript": "// Runtime: 198 ms (Top 8.55%) | Memory: 49.6 MB (Top 72.65%)\r\nvar Solution = function(head) {\r\n        this.res = [];\r\n        let curr = head;\r\n\r\n        while(curr !== null) {\r\n            this.res.push(curr)\r\n            curr = curr.next;\r\n        }\r\n        this.length = this.res.length;\r\n};\r\n\r\nSolution.prototype.getRandom = function() {\r\n    //Math.random() will generate a random number b/w 0 & 1.\r\n    //then multiply it with the array size, as i have all the value in the list, i know the size of the list\r\n    //take only the integer part which is a random index.\r\n    //return the element at that random index.\r\n    return this.res[Math.floor(Math.random() * this.length)].val\r\n};"
  }
}
