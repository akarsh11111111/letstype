export default {
  "id": 430,
  "name": "Flatten a Multilevel Doubly Linked List",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list",
  "relativeDir": "F/Flatten a Multilevel Doubly Linked List",
  "slug": "0430-flatten-a-multilevel-doubly-linked-list",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 35,
    "java": 32,
    "python": 30,
    "javascript": 34
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    Node* flatten(Node* head)\r\n    {\r\n        if(head==NULL) return head;\r\n       Node *temp=head;\r\n       stack<Node*> stk;\r\n       while(temp->next!=NULL || temp->child!=NULL  || stk.size()!=0)\r\n       {\r\n           if(temp->next==NULL && temp->child==NULL && stk.size())\r\n           {\r\n               Node *a=stk.top();\r\n               stk.pop();\r\n               temp->next=a;\r\n               a->prev=temp;\r\n           }\r\n           if(temp->child!=NULL)\r\n           {\r\n               if(temp->next!=NULL)\r\n               {\r\n               Node* a=temp->next;\r\n               a->prev=NULL;\r\n               stk.push(a);\r\n               }\r\n               temp->next=temp->child;\r\n               temp->next->prev=temp;\r\n               temp->child=NULL;\r\n               \r\n           }\r\n           temp=temp->next;\r\n       }\r\n        return head;\r\n    }\r\n};\r\nFeel free to ask in doubt in comment section",
    "python": "\"\"\"\r\n# Definition for a Node.\r\nclass Node:\r\n    def __init__(self, val, prev, next, child):\r\n        self.val = val\r\n        self.prev = prev\r\n        self.next = next\r\n        self.child = child\r\n\"\"\"\r\n\r\nclass Solution:\r\n    def flatten(self, head: 'Optional[Node]') -> 'Optional[Node]':    \r\n        node = head\r\n        while node:\r\n            if node.child: # If there is a child travel to last node of the child\r\n                child = node.child\r\n                while child.next:\r\n                    child = child.next\r\n                child.next = node.next # Update the next of child to the the next of the current node\r\n                if node.next: # update the prev of the next node to chile to make it valid doubly linked list\r\n                    node.next.prev = child\r\n                node.next = node.child # Update the child to become the next of the current\r\n                node.next.prev = node # update the prev of the next node to chile to make it valid doubly linked list\r\n                node.child = None # Make the child of the current node None to fulfill the requirements\r\n            node = node.next\r\n        return head\r\n\r\n# time and space complexity\r\n# time: O(n)\r\n# space: O(1)",
    "java": "// Runtime: 0 ms (Top 100.00%) | Memory: 40.2 MB (Top 95.78%)\r\nclass Solution {\r\n    public Node flatten(Node head) {\r\n        Node curr = head ; // for traversal\r\n        Node tail = head; // for keeping the track of previous node\r\n        Stack<Node> stack = new Stack<>(); // for storing the reference of next node when child node encounters\r\n        while(curr != null){\r\n            if(curr.child != null){ // if there is a child\r\n                Node child = curr.child; // creating a node for child\r\n                if(curr.next != null){ // if there is list after we find child a child\r\n                    stack.push(curr.next); // pushing the list to the stack\r\n                    curr.next.prev = null; // pointing its previous to null\r\n                }\r\n                curr.next = child; // pointing the current's reference to child\r\n                child.prev = curr; // pointing child's previous reference to current.\r\n                curr.child = null; // pointing the current's child pointer to null\r\n            }\r\n            tail = curr ; // for keeping track of previous nodes\r\n            curr= curr.next; // traversing\r\n        }\r\n        while(!stack.isEmpty()){ // checking if the stack has still nodes in it.\r\n            curr = stack.pop(); // getting the last node of the list pushed into the stack\r\n            tail.next = curr; // pointing the previos node to the last node\r\n            curr.prev = tail; // pointing previos pointer of the last node to the previos node.\r\n            while( curr != null){ // traversing the last node's popped out of stack\r\n                tail = curr;\r\n                curr = curr.next ;\r\n            }\r\n        }\r\n        return head;\r\n    }\r\n}",
    "javascript": "var flatten = function(head) {\r\n    var arr = [];\r\n    var temp = head;\r\n    var prev= null;\r\n    while(temp)\r\n        {\r\n            if(temp.child!= null)\r\n                {\r\n                    arr.push(temp.next);\r\n                    temp.next = temp.child;\r\n                    temp.child.prev = temp;\r\n                    temp.child = null;\r\n                }\r\n            prev = temp;\r\n            temp = temp.next\r\n        }\r\n    for(var j=arr.length-1; j>=0; j--)\r\n        {\r\n            if(arr[j] != null)\r\n                mergeOtherLists(arr[j]);\r\n        }\r\n    return head;\r\n\t\r\n\tfunction mergeOtherLists(root)\r\n\t\t{\r\n\t\t\tprev.next=root;\r\n\t\t\troot.prev=prev;\r\n\t\t   while(root)\r\n\t\t\t   {\r\n\t\t\t\t  prev = root;\r\n\t\t\t\t   root = root.next;\r\n\t\t\t   }\r\n\t\t}\r\n};"
  }
}
