export default {
  "id": 2087,
  "name": "Minimum Cost Homecoming of a Robot in a Grid",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-cost-homecoming-of-a-robot-in-a-grid",
  "relativeDir": "M/Minimum Cost Homecoming of a Robot in a Grid",
  "slug": "2087-minimum-cost-homecoming-of-a-robot-in-a-grid",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 26,
    "java": 43,
    "python": 12,
    "javascript": 22
  },
  "languages": {
    "cpp": "// Runtime: 127 ms (Top 95.56%) | Memory: 150.10 MB (Top 97.22%)\r\n\r\nclass Solution {\r\npublic:\r\n    int minCost(vector<int>& start, vector<int>& end, vector<int>& costR, vector<int>& costC) {\r\n        int ans = 0;\r\n        int i = start[0], j = start[1];\r\n        int x = end[0], y = end[1];\r\n        int changeI = i < x ? 1 : -1;\r\n        int changeJ = j < y ? 1 : -1;\r\n\r\n        while(i != x) {\r\n            i += changeI;\r\n            ans += costR[i];\r\n        }\r\n\r\n        while(j != y) {\r\n            j += changeJ;\r\n            ans += costC[j];\r\n        }\r\n\r\n        return ans;\r\n\r\n\r\n    }\r\n};",
    "python": "class Solution:\r\n    def minCost(self, startPos: List[int], homePos: List[int], rowCosts: List[int], colCosts: List[int]) -> int:\r\n        def getRange(left, right, array):\r\n            if left > right:\r\n                right, left = left, right\r\n            return sum((array[i] for i in range(left,right+1)))\r\n        \r\n        totalRowCost = getRange(startPos[0], homePos[0], rowCosts)\r\n        totalColCost = getRange(startPos[1], homePos[1], colCosts)\r\n        \r\n        #Don't pay for the position you start out on\r\n        return totalRowCost + totalColCost - rowCosts[startPos[0]] - colCosts[startPos[1]]",
    "java": "class Solution {\r\n    public int minCost(int[] startPos, int[] homePos, int[] rowCosts, int[] colCosts) {\r\n        int total = 0;\r\n        \r\n        // if home is to the down of start move, down till there\r\n        if(homePos[0]>startPos[0]){\r\n            int i = startPos[0]+1;\r\n            while(i<=homePos[0]){\r\n                total += rowCosts[i]; // adding cost while moving corresponding to the cell\r\n                i++;\r\n            }\r\n        }\r\n        \r\n        // else if home is up from the start, move up till there\r\n        else if(homePos[0]<startPos[0]){\r\n            int i = startPos[0]-1;\r\n            while(i>=homePos[0]){\r\n                total += rowCosts[i]; // adding cost while moving corresponding to the cell\r\n                i--;\r\n            }\r\n        }\r\n        \r\n        // if home is right to the start, move right till there\r\n        if(homePos[1]>startPos[1]){\r\n            int i = startPos[1]+1;\r\n            while(i<=homePos[1]){\r\n                total += colCosts[i];  // adding cost while moving corresponding to the cell\r\n                i++;\r\n            }\r\n        }\r\n        \r\n        // else if home is left to the start, move left till there\r\n        else if(homePos[1]<startPos[1]){\r\n            int i = startPos[1]-1;\r\n            while(i>=homePos[1]){\r\n                total += colCosts[i];  // adding cost while moving corresponding to the cell\r\n                i--;\r\n            }\r\n        }\r\n        \r\n        return total;\r\n    }\r\n}",
    "javascript": "var minCost = function(startPos, homePos, rowCosts, colCosts) {\r\n    let totCosts = 0;\r\n\r\n    let rowDir = startPos[0] <= homePos[0] ? 1 : -1;\r\n    let colDir = startPos[1] <= homePos[1] ? 1 : -1;\r\n    \r\n    let row = startPos[0];\r\n\r\n    while (row != homePos[0]) {\r\n        row += rowDir;\r\n        totCosts += rowCosts[row];\r\n    }\r\n\r\n    let col = startPos[1];\r\n\r\n    while (col != homePos[1]) {\r\n        col += colDir;\r\n        totCosts += colCosts[col];\r\n    }\r\n\r\n    return totCosts;\r\n};"
  }
}
