export default {
  "id": 1646,
  "name": "Get Maximum in Generated Array",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/get-maximum-in-generated-array",
  "relativeDir": "G/Get Maximum in Generated Array",
  "slug": "1646-get-maximum-in-generated-array",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 18,
    "java": 23,
    "python": 18,
    "javascript": 17
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int getMaximumGenerated(int n) {\r\n        // base cases\r\n        if (n < 2) return n;\r\n        // support variables\r\n        int arr[n + 1], m;\r\n        arr[0] = 0, arr[1] = 1;\r\n        // building arr\r\n        for (int i = 2; i <= n; i++) {\r\n            if (i % 2) arr[i] = arr[i / 2] + arr[i / 2 + 1];\r\n            else arr[i] = arr[i / 2];\r\n            // updating m\r\n            m = max(arr[i], m);\r\n        }\r\n        return m;\r\n    }\r\n};",
    "python": "// Runtime: 34 ms (Top 84.4%) | Memory: 17.50 MB (Top 12.64%)\r\n\r\nfrom queue import deque\r\n\r\nclass Solution:\r\n    def getMaximumGenerated(self, n: int) -> int:\r\n        \r\n        def arrgen(n):\r\n            yield 0\r\n            q = deque([1])\r\n            while True:\r\n                yield q[0]\r\n                q.append(q[0])\r\n                q.append(q[0]+q[1])\r\n                q.popleft()\r\n                \r\n        g = arrgen(n)\r\n        return max(next(g) for _ in range(n+1))",
    "java": "// Runtime: 1 ms (Top 71.82%) | Memory: 41.2 MB (Top 34.16%)\r\nclass Solution {\r\n    public int getMaximumGenerated(int n) {\r\n        if(n==0 || n==1) return n;\r\n\r\n        int nums[]=new int [n+1];\r\n\r\n        nums[0]=0;\r\n        nums[1]=1;\r\n        int max=Integer.MIN_VALUE;\r\n\r\n        for(int i=2;i<=n;i++){\r\n            if(i%2==0){\r\n                nums[i]=nums[i/2];\r\n            }\r\n            else{\r\n                nums[i]=nums[i/2]+nums[i/2 + 1];\r\n            }\r\n            max=Math.max(max,nums[i]);\r\n        }\r\n        return max;\r\n    }\r\n}",
    "javascript": "var getMaximumGenerated = function(n) {\r\n    if (n === 0) return 0;\r\n    if (n === 1) return 1;\r\n    let arr = [0, 1];\r\n    let max = 0;\r\n    for (let i = 0; i < n; i++) {\r\n        if (2 <= 2 * i && 2 * i <= n) {\r\n            arr[2 * i] = arr[i]\r\n            if (arr[i] > max) max = arr[i];\r\n        }\r\n        if (2 <= 2 * i && 2 * i + 1 <= n) {\r\n            arr[2 * i + 1] = arr[i] + arr[i + 1]\r\n            if (arr[i] + arr[i + 1] > max) max = arr[i] + arr[i + 1];\r\n        };\r\n    }\r\n    return max;\r\n};"
  }
}
