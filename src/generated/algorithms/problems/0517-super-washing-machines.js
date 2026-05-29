export default {
  "id": 517,
  "name": "Super Washing Machines",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/super-washing-machines",
  "relativeDir": "S/Super Washing Machines",
  "slug": "0517-super-washing-machines",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 15,
    "java": 24,
    "python": 16,
    "javascript": 22
  },
  "languages": {
    "cpp": "// Runtime: 18 ms (Top 41.09%) | Memory: 13 MB (Top 43.64%)\r\nclass Solution {\r\npublic:\r\n    int findMinMoves(vector<int>& machines) {\r\n        int total = accumulate(machines.begin(), machines.end(), 0);\r\n        if (total % machines.size()) return -1; // impossible\r\n\r\n        int avg = total / machines.size(), ans = 0, prefix = 0;\r\n        for (auto& x : machines) {\r\n            ans = max({ans, abs(prefix), x - avg});\r\n            prefix += x - avg;\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 170 ms (Top 20.15%) | Memory: 15 MB (Top 44.78%)\r\nfrom itertools import accumulate\r\nclass Solution:\r\n    def findMinMoves(self, machines: List[int]) -> int:\r\n        n = len(machines)\r\n        summation = sum(machines)\r\n        if summation%n:\r\n            return -1\r\n        avg = summation//n\r\n        left = list(accumulate(machines))\r\n        result = 0\r\n        for i in range(n):\r\n            move_to_right = max(left[i] - (i+1)*avg, 0)\r\n            move_to_left = max(left[-1]-(left[i-1] if i!=0 else 0) - (n-i)*avg, 0)\r\n            result = max(result, move_to_right + move_to_left)\r\n        return result",
    "java": "// Runtime: 0 ms (Top 100.0%) | Memory: 44.60 MB (Top 13.21%)\r\n\r\nclass Solution {\r\n    public int findMinMoves(int[] machines) {\r\n        int avg = 0;\r\n\r\n        for(int i = 0; i < machines.length; i++){\r\n            avg += machines[i];\r\n            \r\n        }\r\n\r\n        if(avg % machines.length != 0){\r\n            return -1;\r\n        }\r\n\r\n        int res = 0, cnt = 0;\r\n        avg = avg / machines.length;\r\n        for (int m : machines) {\r\n            cnt += m - avg;\r\n            res = Math.max(res, Math.max(Math.abs(cnt), m - avg));\r\n        }\r\n        return res;\r\n    }\r\n}",
    "javascript": "// Runtime: 60 ms (Top 37.5%) | Memory: 42.30 MB (Top 100.0%)\r\n\r\n/**\r\n * @param {number[]} machines\r\n * @return {number}\r\n */\r\nvar findMinMoves = function(machines) {\r\n    const totalDresses = machines.reduce((acc, dresses) => acc + dresses, 0);\r\n    const numMachines = machines.length;\r\n    if (totalDresses % numMachines !== 0) {\r\n        return -1; // Cannot distribute dresses equally\r\n    }\r\n    const targetDresses = totalDresses / numMachines;\r\n    let balance = 0;\r\n    let maxImbalance = 0;\r\n    for (let i = 0; i < numMachines; i++) {\r\n        const imbalance = machines[i] - targetDresses;\r\n        balance += imbalance;\r\n        maxImbalance = Math.max(maxImbalance, Math.abs(balance), imbalance);\r\n    }\r\n    return maxImbalance;\r\n};"
  }
}
