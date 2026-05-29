export default {
  "id": 514,
  "name": "Freedom Trail",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/freedom-trail",
  "relativeDir": "F/Freedom Trail",
  "slug": "0514-freedom-trail",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 22,
    "java": 34,
    "python": 19
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int n,m;\r\n    vector<int> pos[26];\r\n    int findRotateSteps(string ring, string key) {\r\n        n = ring.size(), m = key.size();\r\n        for(int i = 0; i < n; i++)\r\n            pos[ring[i] - 'a'].push_back(i);\r\n        vector<vector<int>> memo(n, vector<int>(m, INT_MAX));\r\n        return helper(0, 0, memo, ring, key);\r\n    }\r\n    int helper(int i, int j, vector<vector<int>>& memo, string &ring, string &key){\r\n        if(j == m) return 0;\r\n        if(memo[i][j] != INT_MAX) return memo[i][j];\r\n        int best = INT_MAX;\r\n        for(int &next: pos[key[j] - 'a']){\r\n            int diff = abs(i - next);\r\n            best = min(best, min(diff, n - diff) + helper(next, j + 1, memo, ring, key));\r\n        }\r\n        return memo[i][j] = best + 1;\r\n    }\r\n};",
    "python": "// Runtime: 85 ms (Top 95.51%) | Memory: 18.10 MB (Top 37.18%)\r\n\r\nclass Solution:\r\n    def findRotateSteps(self, ring: str, key: str) -> int:\r\n        locs = {}\r\n        for i, ch in enumerate(ring): locs.setdefault(ch, []).append(i)\r\n            \r\n        @cache \r\n        def fn(i, j): \r\n            \"\"\"Return turns to finish key[j:] startin from ith position on ring.\"\"\"\r\n            if j == len(key): return 0 \r\n            loc = locs[key[j]]\r\n            k = bisect_left(loc, i) % len(loc)\r\n            ans = min(abs(i-loc[k]), len(ring) - abs(i-loc[k])) + fn(loc[k], j+1)\r\n            k = (k-1) % len(loc)\r\n            ans = min(ans, min(abs(i-loc[k]), len(ring) - abs(i-loc[k])) + fn(loc[k], j+1))\r\n            return ans \r\n        \r\n        return fn(0, 0) + len(key)",
    "java": "// Runtime: 28 ms (Top 46.01%) | Memory: 46.5 MB (Top 66.67%)\r\nclass Solution {\r\n    public int findRotateSteps(String ring, String key) {\r\n        Map<Character, TreeSet<Integer>> locMap = new HashMap<>();\r\n        for (int i = 0; i < ring.length(); i++){\r\n            locMap.computeIfAbsent(ring.charAt(i), o->new TreeSet<>()).add(i);\r\n        }\r\n        return dfs(0, 0, locMap, key, new int[key.length()][ring.length()]);\r\n    }\r\n\r\n    private int dfs(int cur, int where, Map<Character, TreeSet<Integer>> locMap, String key, int[][] memo){\r\n        if (cur==key.length()){ // the end\r\n            return 0;\r\n        }\r\n        if (memo[cur][where]>0){ // have computed [cur, end) already.\r\n            return memo[cur][where];\r\n        }\r\n        TreeSet<Integer> idx = locMap.get(key.charAt(cur));\r\n        if (idx.contains(where)){ // greedily take this if it is already matched\r\n            return memo[cur][where]=dfs(cur+1, where, locMap, key, memo)+1;\r\n        }\r\n        Integer hi = idx.higher(where); // otherwise, we can take the higher key\r\n        Integer lo = idx.lower(where); // or, the lower key\r\n        if (hi == null){ // if no higher key, it becomes the lowest key.\r\n            hi = idx.first();\r\n        }\r\n        if (lo == null){ // if no lower key, it becomes the highest key.\r\n            lo = idx.last();\r\n        }\r\n        int hcost = dfs(cur+1, hi, locMap, key, memo) + (hi>where? hi-where:memo[0].length-where+hi);\r\n        int lcost = dfs(cur+1, lo, locMap, key, memo) + (lo<where? where-lo:where+memo[0].length-lo);\r\n        return memo[cur][where]=Math.min(hcost, lcost)+1;\r\n    }\r\n}"
  }
}
