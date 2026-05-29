export default {
  "id": 1654,
  "name": "Minimum Jumps to Reach Home",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-jumps-to-reach-home",
  "relativeDir": "M/Minimum Jumps to Reach Home",
  "slug": "1654-minimum-jumps-to-reach-home",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 41,
    "java": 50,
    "python": 15,
    "javascript": 27
  },
  "languages": {
    "cpp": "class Solution\r\n{\r\npublic:\r\n    typedef pair<int, bool> pi;\r\n    int minimumJumps(vector<int> &forbidden, int a, int b, int x)\r\n    {\r\n        set<int> st(forbidden.begin(), forbidden.end());\r\n        vector<vector<int>> vis(2, vector<int>(10000, 0));\r\n        vis[0][0] = 1;\r\n        vis[1][0] = 1;\r\n        queue<pi> q;\r\n        q.push({0, true});\r\n        int ans = 0;\r\n        while (!q.empty())\r\n        {\r\n            int n = q.size();\r\n            for (int i = 0; i < n; i++)\r\n            {\r\n                int curr = q.front().first;\r\n                bool canJumpBackward = q.front().second;\r\n                q.pop();\r\n                if (curr == x)\r\n                    return ans;\r\n                int p1 = curr + a;\r\n                int p2 = curr - b;\r\n                if (p1 < 10000 && vis[0][p1] == 0 && st.find(p1) == st.end())\r\n                {\r\n                    q.push({p1, true});\r\n                    vis[0][p1] = 1;\r\n                }\r\n                if (p2 >= 0 && vis[1][p2] == 0 && st.find(p2) == st.end() && canJumpBackward == true)\r\n                {\r\n                    q.push({p2, false});\r\n                    vis[1][p2] = 1;\r\n                }\r\n            }\r\n            ans++;\r\n        }\r\n        return -1;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def minimumJumps(self, fb: List[int], a: int, b: int, x: int) -> int:\r\n        fb = set(fb)\r\n        q = deque([[0,0,True]])\r\n        while(q):\r\n            n,l,isf = q.popleft()\r\n            if(n<0 or n in fb or n>2000+2*b):\r\n                continue\r\n            fb.add(n)\r\n            if(n==x):\r\n                return l\r\n            if isf and n-b>0:\r\n                q.append([n-b,l+1,False])                \r\n            q.append([n+a,l+1,True])\r\n        return -1",
    "java": "class Solution {\r\n    public int minimumJumps(int[] forbidden, int a, int b, int x) {\r\n        \r\n        // Visited Set\r\n        Set<Integer> visited = new HashSet<Integer>();\r\n        \r\n        // Add forbidden coordinates to visited\r\n        for (int i = 0; i < forbidden.length; i++) {\r\n            visited.add(forbidden[i]);\r\n        }\r\n        \r\n        // Distance/ Jumps map\r\n        Map<Integer, Integer> jumps = new HashMap<>();\r\n        jumps.put(0, 0);\r\n        \r\n        // BFS Queue\r\n        Queue<Integer[]> q = new LinkedList<>();\r\n        q.add(new Integer[] {0, 1});\r\n        \r\n        // BFS \r\n        while (q.size() != 0) {\r\n            \r\n            Integer[] ud = q.poll();\r\n            \r\n            int u = ud[0], d = ud[1];\r\n            \r\n            // x found\r\n            if (u == x) {\r\n                return jumps.get(u);\r\n            }\r\n            \r\n            // jump right\r\n            if (u + a < 6001 && !visited.contains(u+a)) {\r\n                q.add(new Integer[] {u+a, 1});\r\n                visited.add(u+a);\r\n                jumps.put(u+a, jumps.get(u) + 1);\r\n            }\r\n            \r\n            // jump left\r\n            if (d != -1 && u - b > -1 && !visited.contains(u-b)) {\r\n                q.add(new Integer[] {u-b, -1});\r\n                jumps.put(u-b, jumps.get(u) + 1);\r\n            }\r\n            \r\n        }\r\n        \r\n        return -1;\r\n        \r\n    }\r\n}",
    "javascript": "var minimumJumps = function(forbidden, a, b, x) {\r\n    let f = new Set(forbidden);\r\n    let m = 2000 + 2 * b;\r\n    let memo = {};\r\n    let visited = new Set();\r\n    let res = dfs(0, true);\r\n    return res === Infinity ? -1 : res;\r\n    \r\n    function dfs(i,canJumpBack) {\r\n        if (i === x) return 0;\r\n        let key = `${i},${canJumpBack}`;\r\n        visited.add(i);\r\n        if (memo[key] !== undefined) return memo[key];\r\n        if (i > m || i < 0) return Infinity;\r\n        let min = Infinity;\r\n        if (canJumpBack && !f.has(i - b) && !visited.has(i-b)) {\r\n            min = Math.min(min, 1 + dfs(i - b, false));\r\n        }\r\n        \r\n        if (!f.has(i + a) && !visited.has(i+a)) {\r\n            min = Math.min(min, 1 + dfs(i + a, true));\r\n        }\r\n        \r\n        visited.delete(i);\r\n        return memo[key] = min;\r\n    }\r\n};"
  }
}
