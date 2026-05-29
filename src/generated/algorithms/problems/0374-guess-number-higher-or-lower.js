export default {
  "id": 374,
  "name": "Guess Number Higher or Lower",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/guess-number-higher-or-lower",
  "relativeDir": "G/Guess Number Higher or Lower",
  "slug": "0374-guess-number-higher-or-lower",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 25,
    "java": 27,
    "python": 13,
    "javascript": 31
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int guessNumber(int n) {\r\n        int s = 1, e = n;\r\n        int mid = s + (e - s)/2;\r\n        \r\n        while (s <= e){\r\n            if (guess(mid) == 0){   \r\n                return mid;\r\n            }\r\n            \r\n            else if (guess(mid) == -1){\r\n                e = mid - 1;\r\n            }\r\n            \r\n            else if (guess(mid) == 1){\r\n                s = mid +1;\r\n            }\r\n            \r\n            mid = s + (e - s)/2;\r\n        }\r\n        \r\n        return mid;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def guessNumber(self, n: int) -> int:\r\n        l=1\r\n        h=n\r\n        while l<=h:\r\n            mid=(l+h)//2\r\n            x =guess(mid)\r\n            if(x==0):\r\n                return mid\r\n            elif(x==1):\r\n                l = mid+1\r\n            else:\r\n                h = mid-1",
    "java": "/** \r\n * Forward declaration of guess API.\r\n * @param  num   your guess\r\n * @return \t     -1 if num is higher than the picked number\r\n *\t\t\t      1 if num is lower than the picked number\r\n *               otherwise return 0\r\n * int guess(int num);\r\n */\r\n\r\npublic class Solution extends GuessGame {\r\n    public int guessNumber(int n) {\r\n        int left = 1;\r\n        int right = n;\r\n        \r\n        while(left < right){\r\n            int mid = ((right - left) / 2) + left;\r\n            if(guess(mid) == 0)\r\n                return mid;\r\n            else if(guess(mid) < 0)\r\n                right = mid - 1;\r\n            else\r\n                left = mid + 1;\r\n        }\r\n        \r\n        return left;\r\n    }\r\n}",
    "javascript": "/** \r\n * Forward declaration of guess API.\r\n * @param {number} num   your guess\r\n * @return \t     -1 if num is higher than the picked number\r\n *\t\t\t      1 if num is lower than the picked number\r\n *               otherwise return 0\r\n * var guess = function(num) {}\r\n */\r\n\r\n/**\r\n * @param {number} n\r\n * @return {number}\r\n */\r\nvar guessNumber = function(n) {\r\n    let lower=1;\r\n    let higher=n;\r\n    while(lower<=higher){\r\n        let mid=Math.floor((lower+higher)/2);\r\n        if(guess(mid)==0){\r\n            return mid;            \r\n        }\r\n        else if(guess(mid)==-1){\r\n            higher=mid-1;\r\n        }\r\n        else{\r\n            lower=mid+1;\r\n        }\r\n    }\r\n    return 0;\r\n    \r\n};"
  }
}
