export default {
  "id": 390,
  "name": "Elimination Game",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/elimination-game",
  "relativeDir": "E/Elimination Game",
  "slug": "0390-elimination-game",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 16,
    "java": 18,
    "python": 15,
    "javascript": 9
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int lastRemaining(int n) {\r\n        bool left=true;\r\n        int head=1,step=1;//step is the difference between adjacent elements.\r\n        while(n>1){\r\n            if(left || (n&1)){//(n&1)->odd\r\n                head=head+step;\r\n            }\r\n            step=step*2;\r\n            n=n/2;\r\n            left=!left;\r\n        }\r\n        return head;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def lastRemaining(self, n: int) -> int:\r\n        beg = 1\r\n        len = n\r\n        d = 1\r\n        fromleft = True\r\n\r\n        while len > 1:\r\n            if(fromleft or len%2 == 1):\r\n                beg += d\r\n            d <<= 1\r\n            len >>= 1\r\n            fromleft = not fromleft\r\n        \r\n        return beg",
    "java": "class Solution {\r\n    public int lastRemaining(int n) {\r\n        int head = 1;\r\n        int remain = n;\r\n        boolean left = true;\r\n        int step =1;\r\n        \r\n        while(remain > 1){\r\n            if(left || remain%2==1){\r\n                head = head + step;\r\n            }\r\n            remain /= 2;\r\n            step *= 2;\r\n            left = !left;\r\n        }\r\n        return head;\r\n    }\r\n}",
    "javascript": "var lastRemaining = function(n) {\r\n    let sum=1;  let num=1;  let bool=true;\r\n    while(n>1){       \r\n        if(bool){sum+=num; bool=false;}\r\n        else{if(n%2){sum+=num;} bool=true;}\r\n        num*=2; n=Math.floor(n/2);\r\n    }\r\n    return sum;\r\n};"
  }
}
