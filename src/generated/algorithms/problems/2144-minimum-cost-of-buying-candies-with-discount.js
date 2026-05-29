export default {
  "id": 2144,
  "name": "Minimum Cost of Buying Candies With Discount",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount",
  "relativeDir": "M/Minimum Cost of Buying Candies With Discount",
  "slug": "2144-minimum-cost-of-buying-candies-with-discount",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 26,
    "java": 25,
    "python": 9,
    "javascript": 21
  },
  "languages": {
    "cpp": "// Runtime: 17 ms (Top 6.16%) | Memory: 10.7 MB (Top 79.60%)\r\n//Solution 01:\r\nclass Solution {\r\npublic:\r\n    int minimumCost(vector<int>& cost) {\r\n        int n = cost.size();\r\n        int i = n-1, ans = 0;\r\n\r\n        if(n <= 2){\r\n            for(auto x: cost)\r\n                ans += x;\r\n            return ans;\r\n        }\r\n\r\n        sort(cost.begin(), cost.end());\r\n\r\n        while(i>=1){\r\n            ans += cost[i] + cost[i-1];\r\n            if(i-1 == 0 || i-1 == 1) return ans;\r\n            i = i-3;\r\n        }\r\n        ans += cost[0];\r\n\r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 72 ms (Top 49.84%) | Memory: 13.8 MB (Top 58.81%)\r\nclass Solution:\r\n    def minimumCost(self, cost: List[int]) -> int:\r\n        cost.sort(reverse=True)\r\n        res, i, N = 0, 0, len(cost)\r\n        while i < N:\r\n            res += sum(cost[i : i + 2])\r\n            i += 3\r\n        return res",
    "java": "// Runtime: 3 ms (Top 83.40%) | Memory: 42.5 MB (Top 73.57%)\r\nclass Solution {\r\n    /** Algorithm\r\n     * 1. Sort the cost array.\r\n     * 2. In a loop, start from the back and buy items n, n-1 to get n-2 for free.\r\n     * 3. Decrement the position by 3 and continue. stop when you reach 1.\r\n     * 4. From 1, add the remaining 1 or 2 items.\r\n     *\r\n     */\r\n    public int minimumCost(int[] cost) {\r\n        int minCost = 0;\r\n        int index = cost.length -1;\r\n        Arrays.sort(cost);\r\n        // add items in pairs of 2, the 3rd one getting it for free.\r\n        while (index > 1) {\r\n            minCost += cost[index] + cost[index -1];\r\n            index -= 3;\r\n        }\r\n        // add the remaining 1, 2 items, if any.\r\n        while(index >= 0) {\r\n            minCost += cost[index--];\r\n        }\r\n        return minCost;\r\n    }\r\n}",
    "javascript": "// Runtime: 85 ms (Top 68.97%) | Memory: 44.1 MB (Top 21.26%)\r\nvar minimumCost = function(cost) {\r\n    if (cost.length < 3) {\r\n        return cost.reduce((prev, cur) => prev + cur);\r\n    }\r\n\r\n    cost.sort((a, b) => b - a);\r\n    let count = 0;\r\n    let sum = 0;\r\n\r\n    for (const num of cost) {\r\n        if (count === 2) {\r\n            count = 0;\r\n            continue;\r\n        }\r\n        sum += num;\r\n        count++;\r\n    }\r\n\r\n    return sum;\r\n};"
  }
}
