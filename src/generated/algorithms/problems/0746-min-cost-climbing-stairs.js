export default {
  "id": 746,
  "name": "Min Cost Climbing Stairs",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/min-cost-climbing-stairs",
  "relativeDir": "M/Min Cost Climbing Stairs",
  "slug": "0746-min-cost-climbing-stairs",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 17,
    "java": 13,
    "python": 15,
    "javascript": 17
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int minCostClimbingStairs(vector<int>& cost) {\r\n        /* Minimize cost of steps, where you can take one or two steps.\r\n           \r\n           At each step, store the minimum of the current step plus the step previous\r\n           or the step two previous. At the last step we can either take the last\r\n           element or leave it off.\r\n        */\r\n        int n = cost.size();\r\n        for(int i = 2; i < n; i++) {\r\n            cost[i] = min(cost[i] + cost[i-2], cost[i] + cost[i-1]);    \r\n        }\r\n        \r\n        return min(cost[n-1], cost[n-2]);\r\n    }\r\n};",
    "python": "// Runtime: 52 ms (Top 87.09%) | Memory: 16.80 MB (Top 65.44%)\r\n\r\nclass Solution:\r\n\tdef minCostClimbingStairs(self, cost: List[int]) -> int:\r\n\t\tcur = 0 \r\n\t\tdp0 = cost[0]\r\n\t\tif len(cost) >= 2:\r\n\t\t\tdp1 = cost[1]\r\n\r\n\t\tfor i in range(2, len(cost)):\r\n\t\t\tcur = cost[i] + min(dp0, dp1)\r\n\t\t\tdp0 = dp1\r\n\t\t\tdp1 = cur\r\n\r\n\t\treturn min(dp0, dp1)",
    "java": "class Solution {\r\n    public int minCostClimbingStairs(int[] cost) {\r\n        int a[] = new int[cost.length+1];\r\n        a[0]=0;\r\n        a[1]=0;\r\n        \r\n        for(int i=2;i<=cost.length;i++)\r\n        {\r\n            a[i]= Math.min(cost[i-1]+a[i-1], cost[i-2]+a[i-2]);\r\n        }\r\n        return a[cost.length];\r\n    }\r\n}",
    "javascript": "var minCostClimbingStairs = function(cost) {\r\n    //this array will be populated with the minimum cost of each step starting from the top\r\n    let minCostArray = [];\r\n    //append a 0 at end to represent reaching the 'top'\r\n    minCostArray[cost.length] = 0;\r\n    //append the last stair to the end of the array\r\n    minCostArray[cost.length - 1] = cost[cost.length - 1];\r\n    \r\n    //starts at -2 the length since we already have two elements in our array\r\n    for (let i = cost.length - 2; i > -1; i--) {\r\n        //checks which minimum cost is lower and assigns the value at that index accordingly\r\n        if (minCostArray[i + 1] < minCostArray[i + 2]) minCostArray[i] = cost[i] + minCostArray[i + 1];\r\n        else minCostArray[i] = cost[i] + minCostArray[i + 2];\r\n    }\r\n    //checks which of the first two options is the lowest cost\r\n    return minCostArray[0] > minCostArray[1] ? minCostArray[1] : minCostArray[0];\r\n};"
  }
}
