export default {
  "id": 502,
  "name": "IPO",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/ipo",
  "relativeDir": "I/IPO",
  "slug": "0502-ipo",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 32,
    "java": 26,
    "python": 20,
    "javascript": 16
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int findMaximizedCapital(int k, int w, vector<int>& profits, vector<int>& capital) {\r\n        priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pqsg;\r\n        priority_queue<pair<int, int>> pqgs;\r\n        int n = capital.size();\r\n        for(int i = 0; i < n; i++)\r\n        {\r\n            //int val = profit[i]-capital[i];\r\n            if(capital[i] <= w)\r\n            {\r\n                pqgs.push({profits[i],capital[i]});\r\n            }\r\n            else if(capital[i] > w)\r\n            {\r\n                pqsg.push({capital[i],profits[i]});\r\n            }\r\n        }\r\n        while(k-- && !pqgs.empty())\r\n        {\r\n            pair<int, int> tmp = pqgs.top();\r\n            w += tmp.first;\r\n            pqgs.pop();\r\n            while(!pqsg.empty() && pqsg.top().first <= w)\r\n            {\r\n                pqgs.push({pqsg.top().second,pqsg.top().first});\r\n                pqsg.pop();\r\n            }\r\n        }\r\n        return w;\r\n    }\r\n};",
    "python": "from heapq import heappush, heappop, nlargest\r\nclass Solution:\r\n    def findMaximizedCapital(self, k: int, w: int, profits: List[int], capital: List[int]) -> int:\r\n        if w >= max(capital):\r\n            return w + sum(nlargest(k, profits))\r\n        \r\n        projects = [[capital[i],profits[i]] for i in range(len(profits))]\r\n        projects.sort(key=lambda x: x[0])\r\n        \r\n        heap = []\r\n        \r\n        for i in range(k):\r\n            while projects and projects[0][0] <= w:\r\n                heappush(heap, -1*projects.pop(0)[1])\r\n            \r\n            if not heap:\r\n                break\r\n            p = -heappop(heap)\r\n            w += p\r\n        return w",
    "java": "class Solution {\r\n\tstatic int[][] dp;\r\n\r\n\tpublic int findMaximizedCapital(int k, int w, int[] profits, int[] capital) {\r\n\t\tdp = new int[k + 1][profits.length + 1];\r\n\t\tfor (int[] row : dp) {\r\n\t\t\tArrays.fill(row, -1);\r\n\t\t}\r\n\t\treturn w + help(k, w, 0, profits, capital);\r\n\t}\r\n\r\n\tpublic int help(int k, int w, int i, int[] profits, int[] capital) {\r\n\t\tif (k == 0 || i >= profits.length)\r\n\t\t\treturn 0;\r\n\t\tif (dp[k][i] != -1)\r\n\t\t\treturn dp[k][i];\r\n\t\tint res = Integer.MIN_VALUE;\r\n\t\tif (capital[i] <= w) {\r\n\t\t\tres = Math.max(res, Math.max(profits[i] + help(k - 1, w + profits[i], i + 1, profits, capital),\r\n\t\t\t\t\thelp(k, w, i + 1, profits, capital)));\r\n\t\t} else {\r\n\t\t\tres = Math.max(res, help(k, w, i + 1, profits, capital));\r\n\t\t}\r\n\t\treturn dp[k][i] = res;\r\n\t}\r\n}",
    "javascript": "var findMaximizedCapital = function(k, w, profits, capital) {\r\n    let capitals_asc_queue = new MinPriorityQueue();\r\n    let profits_desc_queue = new MaxPriorityQueue();\r\n    for (let i = 0; i < capital.length; i++)\r\n        capitals_asc_queue.enqueue([capital[i], profits[i]], capital[i]);\r\n   \r\n\tfor (let i = 0; i < k; i++)    {\r\n        while (!capitals_asc_queue.isEmpty() && capitals_asc_queue.front().element[0] <=w ) {\r\n            let el = capitals_asc_queue.dequeue().element;\r\n            profits_desc_queue.enqueue(el, el[1]);\r\n        }\r\n        if (profits_desc_queue.isEmpty()) return w;\r\n        w += profits_desc_queue.dequeue().element[1];\r\n    }\r\n    return w;\r\n}"
  }
}
