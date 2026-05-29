export default {
  "id": 964,
  "name": "Least Operators to Express Number",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/least-operators-to-express-number",
  "relativeDir": "L/Least Operators to Express Number",
  "slug": "0964-least-operators-to-express-number",
  "availableLanguages": [
    "cpp",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 40,
    "python": 26
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int leastOpsExpressTarget(int x, int target) {\r\n        // base case:\r\n        // if target is less then x then we can only have values like either\r\n        // x - (x/x)-(x/x).... or (x/x)+(x/x)+(x/x)...\r\n        if(target<x){\r\n            return min((x-target)*2, target*2-1);\r\n        }\r\n        \r\n        if(x==target) return 0;\r\n        \r\n        long long int sum=x;\r\n        int ans=0;\r\n        \r\n        //greedly get to the closest number such that x>target and then perform either (x/x)+(x/x)+...+(x/x) or\r\n        // x-(x/x)-(x/x)... etc\r\n        \r\n        while(sum<target){\r\n             ans++;\r\n            sum =sum*x;\r\n           \r\n        }\r\n        \r\n        // at this point sum is either greater than target or equal to target\r\n        if(sum==target)\r\n            return ans;\r\n        \r\n        // Now we have two choice to reduce the number either we make new number\r\n        // ---> target = sum-target (but this can only work if target>sum-target)\r\n        // ---> target-sum/x\r\n        int op1 = INT_MAX, op2 = INT_MAX;\r\n        if(sum-target<target){\r\n            op1 = leastOpsExpressTarget(x, sum-target) + ans;\r\n        }\r\n        op2 = leastOpsExpressTarget(x, target-sum/x) + ans-1;\r\n        \r\n        return min(op1,op2)+1;\r\n    }\r\n};",
    "python": "# Runtime: 3027 ms (Top 7.32%) | Memory: 13.9 MB (Top 97.56%)\r\nclass Solution(object):\r\n    def leastOpsExpressTarget(self, x, target):\r\n        return self.cost(x, target)\r\n\r\n    def cost(self, x, val):\r\n        if val == x:\r\n            return 0\r\n        elif val < x:\r\n            # two possible states\r\n            # either val > x / 2: we substract 1s\r\n            state_1 = 2 * (x - val)\r\n            # or val < x / 2: we divide once to 1 and we add enough 1s\r\n            state_2 = 2*val - 1\r\n            return min(state_1, state_2)\r\n        else:\r\n            # there is a maximum power of x that we can add\r\n            p = int(log(val) // log(x))\r\n            # and either x^p or x^(p+1) is the closest\r\n            a = x**p\r\n            b = a*x\r\n            if b < 2*val:\r\n                # x**(p+1) - val < val - x**p\r\n                return min(p + self.cost(x, val - a), p + 1 + self.cost(x, b - val))\r\n            else:\r\n                return p + self.cost(x, val - a)"
  }
}
