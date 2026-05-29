export default {
  "id": 473,
  "name": "Matchsticks to Square",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/matchsticks-to-square",
  "relativeDir": "M/Matchsticks to Square",
  "slug": "0473-matchsticks-to-square",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 44,
    "java": 36,
    "python": 20,
    "javascript": 27
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool makesquare(vector<int>& matchsticks) {\r\n        int goal = 0, totalSum = 0;\r\n        for (int i : matchsticks) {\r\n            totalSum += i;\r\n        }\r\n        goal = totalSum / 4;\r\n        sort(matchsticks.begin(), matchsticks.end(), [](auto left, auto right) {\r\n            return left > right;\r\n        });\r\n        int b = 0;\r\n        if (totalSum % 4) {\r\n            return false;\r\n        }\r\n        return backtrack(0, b, 0, goal, 4, matchsticks);\r\n    }\r\n    \r\n    bool backtrack(int start, int &b, int sum, int &goal, int groups, vector<int>& matchsticks) {\r\n        if (sum == goal) {\r\n            //set sum to 0, groups--\r\n            return backtrack(0, b, 0, goal, groups-1, matchsticks);\r\n        }\r\n        if (groups == 1) {\r\n            return true;\r\n        }\r\n        for (int i = start; i < matchsticks.size(); i++) {\r\n            if ((i > 0) && (!(b & (1 << (i - 1)))) && (matchsticks[i] == matchsticks[i-1])) {\r\n                continue;\r\n            }\r\n            //if element not used and element value doesnt go over group sum\r\n            if (((b & (1 << i)) == 0) && (sum + matchsticks[i] <= goal)) {\r\n                //set element to used, recursion\r\n                b ^= (1 << i); \r\n                if (backtrack(i + 1, b, sum + matchsticks[i], goal, groups, matchsticks)) {\r\n                    return true;\r\n                }\r\n                //if here, received a false, set element to unused again\r\n                b ^= (1 << i);\r\n            }\r\n        }\r\n        return false;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def makesquare(self, matchsticks: List[int]) -> bool:\r\n        target,m=divmod(sum(matchsticks),4)\r\n        if m:return False\r\n        targetLst=[0]*4\r\n        length=len(matchsticks)\r\n        matchsticks.sort(reverse=True)\r\n        def bt(i):\r\n            if i==length:\r\n                return len(set(targetLst))==1\r\n            for j in range(4):\r\n                if matchsticks[i]+targetLst[j]>target:\r\n                    continue\r\n                targetLst[j]+=matchsticks[i]\r\n                if bt(i+1):\r\n                    return True\r\n                targetLst[j]-=matchsticks[i]\r\n                if not targetLst[j]:break\r\n            return False\r\n        return matchsticks[0]<=target and bt(0)",
    "java": "// Runtime: 1 ms (Top 100.0%) | Memory: 41.50 MB (Top 26.55%)\r\n\r\nclass Solution {\r\n    public boolean makesquare(int[] M) {\r\n        Arrays.sort(M);\r\n        int total = 0;\r\n        for (int i = 0; i < M.length; i++)\r\n            total += M[i];\r\n        side = total / 4;\r\n        if ((float)total / 4 > side || M[M.length-1] > side)\r\n            return false;\r\n        return btrack(M.length-1, side, 0, M);\r\n    }\r\n    private int side;\r\n    private boolean btrack(int i, int space, int done, int[] M) {\r\n        if (done == 3)\r\n            return true;\r\n        for (; i >= 0; i--) {\r\n            int num = M[i];\r\n            boolean res;\r\n            if (num > space)\r\n                continue;\r\n            M[i] = side + 1;\r\n            if (num == space)\r\n                res = btrack(M.length-2, side, done+1, M);\r\n            else\r\n                res = btrack(i-1, space-num, done, M);\r\n            if (res)\r\n                return true;\r\n            M[i] = num;\r\n            while (i > 0 && M[i-1] == num)\r\n                i--;\r\n        }\r\n        return false;\r\n    }\r\n}",
    "javascript": "var makesquare = function(matchsticks) {\r\n    const perimeter = matchsticks.reduce((a, b) => a + b, 0);\r\n    if(perimeter % 4 != 0 || matchsticks.length < 4) return false;\r\n    \r\n    const sideLen = perimeter / 4;\r\n    // find a way to divide the array in 4 group of sum side length\r\n    const sides = new Array(4).fill(0);\r\n    const len = matchsticks.length;\r\n    matchsticks.sort((a, b) => b - a);\r\n    \r\n    const solve = (x = 0) => {\r\n        if(x == len) {\r\n            return sides.every(side => side == sideLen);\r\n        }\r\n        \r\n        for(let i = 0; i < 4; i++) {\r\n            if(sides[i] + matchsticks[x] > sideLen) {\r\n                continue;\r\n            }\r\n            sides[i] += matchsticks[x];\r\n            if(solve(x + 1)) return true;\r\n            sides[i] -= matchsticks[x];\r\n        }\r\n        return false;\r\n    }\r\n    return solve();\r\n};"
  }
}
