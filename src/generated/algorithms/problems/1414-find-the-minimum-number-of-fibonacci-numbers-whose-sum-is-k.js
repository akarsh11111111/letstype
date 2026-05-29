export default {
  "id": 1414,
  "name": "Find the Minimum Number of Fibonacci Numbers Whose Sum Is K",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-the-minimum-number-of-fibonacci-numbers-whose-sum-is-k",
  "relativeDir": "F/Find the Minimum Number of Fibonacci Numbers Whose Sum Is K",
  "slug": "1414-find-the-minimum-number-of-fibonacci-numbers-whose-sum-is-k",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 36,
    "java": 20,
    "python": 11,
    "javascript": 18
  },
  "languages": {
    "cpp": "// Runtime: 3 ms (Top 73.58%) | Memory: 6.4 MB (Top 65.21%)\r\nclass Solution\r\n{\r\npublic:\r\n    int findMinFibonacciNumbers(int k)\r\n    {\r\n        vector<int> fibb;\r\n        int a = 1;\r\n        int b = 1;\r\n        fibb.push_back(a);\r\n        fibb.push_back(b);\r\n        int next = a + b;\r\n\r\n        while (next <= k)\r\n        {\r\n            fibb.push_back(next);\r\n            a = b;\r\n            b = next;\r\n            next = a + b;\r\n        }\r\n\r\n        int res = 0;\r\n        int j = fibb.size() - 1;\r\n        while (j >= 0 and k > 0)\r\n        {\r\n            if (fibb[j] <= k)\r\n            {\r\n                k -= fibb[j];\r\n                res++;\r\n            }\r\n            j--;\r\n        }\r\n\r\n        return res;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def findMinFibonacciNumbers(self, k: int) -> int:\r\n        fib_sq = [1, 1]\r\n        while fib_sq[-1] + fib_sq[-2] <= k:\r\n            fib_sq.append(fib_sq[-1]+fib_sq[-2])\r\n        counter = 0\r\n        for i in range(len(fib_sq)-1, -1, -1):\r\n            if fib_sq[i] <= k:\r\n                counter += 1\r\n                k -= fib_sq[i]\r\n        return counter",
    "java": "class Solution {\r\n    public int findMinFibonacciNumbers(int k) {\r\n        int ans = 0;\r\n\r\n        while (k > 0) {\r\n\t\t\t// Run until solution is reached\r\n            int fib2prev = 1;\r\n            int fib1prev = 1;\r\n            while (fib1prev <= k) {\r\n\t\t\t\t// Generate Fib values, stop when fib1prev is > k, we have the fib number we want stored in fib2prev\r\n                int temp = fib2prev + fib1prev;\r\n                fib2prev = fib1prev;\r\n                fib1prev = temp;\r\n            }\r\n            k -= fib2prev;\r\n            ans += 1;\r\n        }\r\n        return ans;\r\n    }\r\n}",
    "javascript": "// Runtime: 85 ms (Top 83.78%) | Memory: 42.8 MB (Top 62.16%)\r\nvar findMinFibonacciNumbers = function(k) {\r\n    let sequence = [1, 1], sum = sequence[0] + sequence[1];\r\n    let i = 2;\r\n    while (sum <= k) {\r\n        sequence.push(sum);\r\n        i++;\r\n        sum = sequence[i-1]+sequence[i-2];\r\n    }\r\n    let j = sequence.length-1, res = 0;\r\n    while (k) {\r\n        if (k >= sequence[j]) k -= sequence[j], res++;\r\n        j--;\r\n    }\r\n    return res;\r\n    // Time Complexity: O(n)\r\n    // Space Complexity: O(n)\r\n};"
  }
}
