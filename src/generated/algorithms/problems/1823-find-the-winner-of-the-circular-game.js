export default {
  "id": 1823,
  "name": "Find the Winner of the Circular Game",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-the-winner-of-the-circular-game",
  "relativeDir": "F/Find the Winner of the Circular Game",
  "slug": "1823-find-the-winner-of-the-circular-game",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 19,
    "java": 22,
    "python": 9,
    "javascript": 15
  },
  "languages": {
    "cpp": "// Runtime: 5 ms (Top 46.5%) | Memory: 6.40 MB (Top 33.1%)\r\n\r\nclass Solution {\r\npublic:\r\n    int findTheWinner(int n, int k) {\r\n        vector<int>temp;\r\n\r\n        for(int i=1;i<=n;i++) temp.push_back(i);\r\n\r\n        int i=0;\r\n\r\n        while(temp.size()>1){\r\n            int t=temp.size();\r\n            i=(i+k-1)%t;\r\n            temp.erase(temp.begin()+i);\r\n        }\r\n        return *temp.begin();\r\n    }\r\n};",
    "python": "class Solution:\r\ndef findTheWinner(self, n: int, k: int) -> int:\r\n    ls=list(range(1,n+1))\r\n    while len(ls)>1:\r\n        i=(k-1)%len(ls)\r\n        ls.pop(i)\r\n        ls=ls[i:]+ls[:i]\r\n    \r\n    return ls[0]",
    "java": "// Runtime: 43 ms (Top 26.7%) | Memory: 43.29 MB (Top 18.2%)\r\n\r\nclass Solution {\r\n    public int findTheWinner(int n, int k) {\r\n\t    // Initialisation of the LinkedList\r\n        LinkedList<Integer> participants = new LinkedList<>();\r\n        for (int i = 1; i <= n; i++) {\r\n\t\t    participants.add(i);\r\n\t\t}\r\n\t\t\r\n\t\tint lastKilled = 0;\r\n\t\t// Run the game\r\n        for (int i = 0; i < n; i++) {\r\n            for (int j = 0; j < k-1; j++) {\r\n\t\t\t    participants.add(participants.poll());\r\n\t\t\t}\r\n            lastKilled = participants.poll();\r\n        }\r\n        // Return the last one killed\r\n        return lastKilled;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number} n\r\n * @param {number} k\r\n * @return {number}\r\n */\r\nvar findTheWinner = function(n, k) {\r\n    let friends = Array.from({length: n}, (_, index) => index + 1)\r\n    let start = 0;\r\n    while(friends.length != 1){\r\n        start += (k - 1)\r\n        start = start % friends.length\r\n        friends.splice(start,1)\r\n    }\r\n    return friends[0]\r\n};"
  }
}
