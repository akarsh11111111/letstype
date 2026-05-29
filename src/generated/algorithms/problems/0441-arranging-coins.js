export default {
  "id": 441,
  "name": "Arranging Coins",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/arranging-coins",
  "relativeDir": "A/Arranging Coins",
  "slug": "0441-arranging-coins",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 23,
    "java": 16,
    "python": 11,
    "javascript": 8
  },
  "languages": {
    "cpp": "// Runtime: 19 ms (Top 17.89%) | Memory: 5.9 MB (Top 24.93%)\r\nclass Solution {\r\npublic:\r\n    int arrangeCoins(int n) {\r\n\r\n         int count=0;\r\n         while(n>0)\r\n         {\r\n             count++;\r\n             n=n-count;\r\n         }\r\n         if(n==0) //all the coins are used to make complete rows so n if fully uitlized till 0\r\n         {\r\n             return count;\r\n         }\r\n         else if(n<0) //if the last row has not been created fully then n will go negative\r\n         {\r\n             return count-1;\r\n         }\r\n         return -1; //this will never get encountered\r\n\r\n    }\r\n};",
    "python": "# Runtime: 6683 ms (Top 5.01%) | Memory: 13.8 MB (Top 57.45%)\r\nclass Solution:\r\n    def arrangeCoins(self, n: int) -> int:\r\n        for i in range(1,2**31):\r\n            val=i*(i+1)//2\r\n            if val>n:\r\n                a=i\r\n                break\r\n            elif val==n:\r\n                return i\r\n        return a-1",
    "java": "// Runtime: 5 ms (Top 44.14%) | Memory: 40.7 MB (Top 83.77%)\r\nclass Solution {\r\n    public int arrangeCoins(int n) {\r\n        long s =0; long e = n;\r\n        while (s <= e) {\r\n         long mid = s +(e-s)/2;\r\n            long coin = mid *( mid +1)/2;\r\n            if(coin > n){\r\n                 e = mid -1;\r\n            } else if (coin < n){\r\n                s = mid +1;\r\n            } else return (int) mid;\r\n        }\r\n        return (int)e;\r\n    }\r\n}",
    "javascript": "var arrangeCoins = function(n) {\r\n    if(n===1) return n\r\n    for(let i=1; i<=n; i++){\r\n        if(n<Math.floor((i*(i+1))/2)){\r\n            return i-1\r\n        }\r\n    }\r\n};"
  }
}
