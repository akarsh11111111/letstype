export default {
  "id": 1553,
  "name": "Minimum Number of Days to Eat N Oranges",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-number-of-days-to-eat-n-oranges",
  "relativeDir": "M/Minimum Number of Days to Eat N Oranges",
  "slug": "1553-minimum-number-of-days-to-eat-n-oranges",
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
    "python": 15,
    "javascript": 22
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    // approach: BFS\r\n    int minDays(int n) {\r\n        int cnt=0;\r\n        queue<int>q;\r\n        q.push(n);\r\n        unordered_set<int>s;\r\n        s.insert(n);\r\n        while(!q.empty()){\r\n            int l=q.size();\r\n            while(l--){\r\n                int a=q.front();\r\n                q.pop();\r\n                if(a==0)\r\n                    break;\r\n                if(s.find(a-1)==s.end()){ \r\n                    q.push(a-1);\r\n                    s.insert(a-1);\r\n                }  \r\n                if(!(a&1) && s.find(a>>1)==s.end()){   // if divisible by 2 and a/2 not present in set\r\n                    q.push(a>>1);\r\n                    s.insert(a>>1);\r\n                }\r\n                if(a%3==0 && s.find(a/3)==s.end()){  // if divisible by 3 and a/3 not present in set\r\n                    q.push(a/3);\r\n                    s.insert(a/3);\r\n                }\r\n            }\r\n            cnt++;\r\n            if(s.find(0)!=s.end())\r\n                break;\r\n        }\r\n        return cnt;\r\n    }\r\n};",
    "python": "from collections import deque\r\nfrom math import log2, ceil\r\nclass Solution:\r\n    def minDays(self, n: int) -> int:\r\n        maxd = 2*ceil(log2(n))\r\n        que = deque([(1,1)])\r\n        seen = set()\r\n        while que:\r\n            v, d = que.popleft()\r\n            seen.add(v)\r\n            if v == n:\r\n                return d\r\n            for w in [v+1, 2*v, 3*v]:\r\n                if w not in seen and d <= maxd and w <= n:\r\n                    que.append((w,d+1))",
    "java": "// Runtime: 4 ms (Top 97.62%) | Memory: 41.6 MB (Top 89.76%)\r\nclass Solution {\r\n    HashMap<Integer,Integer>map;\r\n    public int minDays(int n) {\r\n        map = new HashMap<>();\r\n        map.put(0,0);\r\n        map.put(1,1);\r\n        return dp(n);\r\n    }\r\n    public int dp(int n){\r\n        if(map.get(n)!=null)\r\n            return map.get(n);\r\n         int one = 1+(n%2)+dp(n/2);\r\n         int two = 1+(n%3)+dp(n/3);\r\n        map.put(n,Math.min(one,two));\r\n        return map.get(n);\r\n}\r\n    }\r\n        // int one = 1+(n%2)+cache(n/2);\r\n        // int two = 1+(n%3)+cache(n/3);",
    "javascript": "var minDays = function(n) {\r\n    const queue = [ [n,0] ];\r\n    const visited = new Set();\r\n    \r\n    while (queue.length > 0) {\r\n        const [ orangesLeft, days ] = queue.shift();\r\n        \r\n        if (visited.has(orangesLeft)) continue;\r\n        if (orangesLeft === 0) return days;\r\n        \r\n        visited.add(orangesLeft);\r\n        queue.push([orangesLeft - 1, days + 1]);\r\n        \r\n        if (orangesLeft % 2 === 0) {\r\n            queue.push([orangesLeft - orangesLeft / 2, days + 1]);\r\n        }\r\n        \r\n        if (orangesLeft % 3 === 0) {\r\n            queue.push([orangesLeft - 2 * (orangesLeft / 3), days + 1])\r\n        }\r\n    }\r\n};"
  }
}
