export default {
  "id": 1535,
  "name": "Find the Winner of an Array Game",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-the-winner-of-an-array-game",
  "relativeDir": "F/Find the Winner of an Array Game",
  "slug": "1535-find-the-winner-of-an-array-game",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 19,
    "java": 20,
    "python": 14,
    "javascript": 14
  },
  "languages": {
    "cpp": "// Runtime: 165 ms (Top 69.47%) | Memory: 62.9 MB (Top 100.00%)\r\nclass Solution {\r\npublic:\r\n    int getWinner(vector<int>& arr, int k) {\r\n        int winner = arr[0];\r\n        int wins = 0;\r\n        for (int i=1; i<arr.size();i++){\r\n            if(winner > arr[i])\r\n                wins+=1; //increment wins count\r\n            else{\r\n                wins = 1; //new winner\r\n                winner = arr[i];\r\n            }\r\n            if(wins == k)\r\n                break; //if wins count is k, then return winner\r\n        }\r\n        return winner;\r\n    }\r\n};",
    "python": "# Runtime: 506 ms (Top 96.6%) | Memory: 30.16 MB (Top 47.7%)\r\n\r\nclass Solution:\r\n    def getWinner(self, arr: List[int], k: int) -> int:\r\n        winner = arr[0]\r\n        wins = 0\r\n        for i in range(1,len(arr),1):\r\n            if(winner > arr[i]): wins+=1  # increment wins count   \r\n            else:\r\n                wins = 1    # new winner\r\n                winner = arr[i]\r\n            if(wins == k): break    # if wins count is k, then return winner\r\n                \r\n        return winner",
    "java": "class Solution {\r\n    public int getWinner(int[] arr, int k) {\r\n       \r\n       int winner =arr[0];\r\n        int count=0;\r\n        for(int i=1;i<arr.length;i++)\r\n        {\r\n                if(winner>arr[i])\r\n                    count++;\r\n                else\r\n                {\r\n                    winner=arr[i];\r\n                    count=1;\r\n                }\r\n            if(count==k)\r\n                return winner;\r\n        }\r\n        return winner;\r\n    }\r\n}",
    "javascript": "var getWinner = function(arr, k) {\r\n    let ws=0;\r\n    let currentWinner=0;\r\n    for(let i=1;i<arr.length;i++){\r\n        if(arr[currentWinner]>arr[i]){\r\n            ++ws\r\n        }else{\r\n            ws=1\r\n            currentWinner=i\r\n        }\r\n        if(ws===k)return arr[currentWinner]\r\n    }\r\n    return arr[currentWinner]\r\n};"
  }
}
