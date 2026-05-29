export default {
  "id": 990,
  "name": "Satisfiability of Equality Equations",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/satisfiability-of-equality-equations",
  "relativeDir": "S/Satisfiability of Equality Equations",
  "slug": "0990-satisfiability-of-equality-equations",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 19,
    "java": 53,
    "python": 30,
    "javascript": 29
  },
  "languages": {
    "cpp": "// Runtime: 3 ms (Top 84.03%) | Memory: 11.60 MB (Top 79.72%)\r\n\r\nclass Solution {\r\n    int uf[26];\r\n    int find(int x) {\r\n        return uf[x] == x ? x : (uf[x] = find(uf[x]));\r\n    }\r\npublic:\r\n    bool equationsPossible(vector<string>& equations) {\r\n        for (int i = 0; i < 26; ++i) uf[i] = i;\r\n        for (auto e : equations) {\r\n            if (e[1] == '=') uf[find(e[0] - 'a')] = find(e[3] - 'a'); \r\n        }\r\n        for (auto e : equations) {\r\n            if (e[1] == '!' && find(e[0] - 'a') == find(e[3] - 'a')) return false;\r\n        }\r\n        return true;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def equationsPossible(self, equations: List[str]) -> bool:\r\n        from collections import defaultdict\r\n        g = defaultdict(list)\r\n        for e in equations:\r\n            if e[1] == '=':\r\n                x = e[0]\r\n                y = e[3]\r\n                g[x].append(y)\r\n                g[y].append(x)\r\n        \r\n        # marked the connected components as 0,1,2,...,25\r\n        ccs = defaultdict(lambda: -1) # -1 means unmarked or unseen\r\n\r\n        def dfs(node, cc):\r\n            if node not in ccs:\r\n                ccs[node] = cc\r\n                for neighbour in g[node]:\r\n                    dfs(neighbour, cc)\r\n        \r\n        for i in range(26):\r\n            dfs(chr(i+97), i)\r\n        \r\n        for e in equations:\r\n            if e[1] == '!':\r\n                x = e[0]\r\n                y = e[3]\r\n                if ccs[x] == ccs[y]:\r\n                    return False\r\n        return True",
    "java": "// Runtime: 1 ms (Top 98.0%) | Memory: 40.98 MB (Top 47.4%)\r\n\r\nclass Solution {\r\n    static int par[];\r\n\r\n    public static int findPar(int u) {\r\n        return par[u] == u ? u : (par[u] = findPar(par[u]));\r\n    }\r\n\r\n    public boolean equationsPossible(String[] equations) {\r\n        par = new int[26];\r\n        for (int i = 0; i < 26; i++) {\r\n            par[i] = i;\r\n        }\r\n\r\n        /*First perform all the merging operation*/\r\n        for (String s : equations) {\r\n            int c1 = s.charAt(0) - 'a';\r\n            int c2 = s.charAt(3) - 'a';\r\n            char sign = s.charAt(1);\r\n\r\n            int p1 = findPar(c1);\r\n            int p2 = findPar(c2);\r\n\r\n            if (sign == '=') {\r\n                if (p1 != p2) {\r\n                    if (p1 < p2) {\r\n                        par[p2] = p1;\r\n                    } else {\r\n                        par[p1] = p2;\r\n                    }\r\n                }\r\n            } \r\n        }\r\n\r\n        /*Now traverse on the whole string and search for any != operation and check if there parents are same*/\r\n        for (String s : equations) {\r\n            int c1 = s.charAt(0) - 'a';\r\n            int c2 = s.charAt(3) - 'a';\r\n            char sign = s.charAt(1);\r\n\r\n            int p1 = findPar(c1);\r\n            int p2 = findPar(c2);\r\n\r\n            if (sign == '!') {\r\n                if (p1 == p2) {\r\n                    return false;\r\n                }\r\n            }\r\n        }\r\n        return true;\r\n    }\r\n}",
    "javascript": "// Runtime: 65 ms (Top 68.33%) | Memory: 45.30 MB (Top 86.67%)\r\n\r\nvar equationsPossible = function(equations) {\r\n    const A = 'a'.charCodeAt(0);\r\n    const n = equations.length;\r\n    const parent = new Array(26).fill(0).map((_, i) => i++);\r\n    \r\n    const find = (x) => {\r\n        if (parent[x] === x) {\r\n            return x;\r\n        } else {\r\n            return parent[x] = find(parent[x]);\r\n        }\r\n    }\r\n    \r\n    for (const eq of equations) {\r\n        if (eq.charAt(1) === \"=\") {\r\n            parent[find(eq.charCodeAt(0) - A)] = find(eq.charCodeAt(3) - A); \r\n        }\r\n    }\r\n    \r\n    for (const eq of equations) {\r\n        if (eq.charAt(1) === \"!\" && find(eq.charCodeAt(0) - A) === find(eq.charCodeAt(3) - A)) {\r\n            return false;\r\n        }\r\n    }\r\n    \r\n    return true;\r\n};"
  }
}
