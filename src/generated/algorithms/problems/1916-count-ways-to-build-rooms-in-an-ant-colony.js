export default {
  "id": 1916,
  "name": "Count Ways to Build Rooms in an Ant Colony",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/count-ways-to-build-rooms-in-an-ant-colony",
  "relativeDir": "C/Count Ways to Build Rooms in an Ant Colony",
  "slug": "1916-count-ways-to-build-rooms-in-an-ant-colony",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 35,
    "java": 35,
    "python": 32
  },
  "languages": {
    "cpp": "// Runtime: 942 ms (Top 54.00%) | Memory: 221.2 MB (Top 27.50%)\r\nclass Solution {\r\npublic:\r\n    int waysToBuildRooms(vector<int>& prevRoom) {\r\n        int n = prevRoom.size();\r\n\r\n        vector<long> fact(n + 1, 1), inv_fact(n + 1, 1), inv(n+1, 1);\r\n        for (int i = 2; i <= n; ++i) {\r\n            inv[i] = mod - mod / i * inv[mod % i] % mod;\r\n            fact[i] = fact[i - 1] * i % mod;\r\n            inv_fact[i] = inv_fact[i-1] * inv[i] % mod;\r\n        }\r\n\r\n        vector<vector<int>> children(n);\r\n        for (int i = 1; i < n; ++i) {\r\n            children[prevRoom[i]].push_back(i);\r\n        }\r\n\r\n        return postorder(children, fact, inv_fact, 0).first;\r\n    }\r\nprivate:\r\n    long mod = 1e9 + 7;\r\n\r\n    pair<long, long> postorder(const vector<vector<int>>& children, const vector<long>& fact, const vector<long>& inv_fact, int curr) {\r\n        if(children[curr].size() == 0)\r\n            return {1,1};\r\n        long tot_ways = 1, my_size = 1;\r\n        for(int child : children[curr]) {\r\n            auto [ways, size_of] = postorder(children, fact, inv_fact, child);\r\n            tot_ways = ((tot_ways*ways)%mod) * inv_fact[size_of] % mod;\r\n            my_size += size_of;\r\n        }\r\n        return {(tot_ways*fact[my_size-1])%mod, my_size};\r\n    }\r\n};",
    "python": "# Runtime: 4732 ms (Top 93.33%) | Memory: 177.5 MB (Top 6.67%)\r\nclass Solution:\r\n    def waysToBuildRooms(self, prevRoom: List[int]) -> int:\r\n        mod = 10 ** 9 + 7\r\n        n = len(prevRoom)\r\n\r\n        mod_inverses = [1] * (n + 1)\r\n        factorials = [1] * (n + 1)\r\n        inverse_factorials = [1] * (n + 1)\r\n\r\n        for x in range(2, n + 1): # Precompute all factorials and inverse factorials needed in O(1) time each\r\n            mod_inverses[x] = mod - mod // x * mod_inverses[mod % x] % mod\r\n            factorials[x] = (x * factorials[x - 1]) % mod\r\n            inverse_factorials[x] = (mod_inverses[x] * inverse_factorials[x - 1]) % mod\r\n\r\n        children = collections.defaultdict(list) # Convert parent list to children lists\r\n        for i, x in enumerate(prevRoom[1:], 1):\r\n            children[x].append(i)\r\n\r\n        def postorder(curr: int) -> Tuple[int, int]:\r\n            if curr not in children: # Leaf has ways, size both 1\r\n                return 1, 1\r\n            tot_size = 1\r\n            tot_ways = 1\r\n            for child in children[curr]:\r\n                ways, size_of = postorder(child)\r\n                tot_ways *= ways * inverse_factorials[size_of]\r\n                tot_size += size_of\r\n            tot_ways *= factorials[tot_size-1]\r\n            return tot_ways % mod, tot_size\r\n\r\n        return postorder(0)[0]",
    "java": "class Solution {\r\n    int M = (int)1e9+7;\r\n    public int waysToBuildRooms(int[] prevRoom) {\r\n        int n = prevRoom.length;\r\n        long[] fact = new long[n];\r\n        long[] invFact = new long[n];\r\n        long[] inv = new long[n];\r\n        fact[1]=fact[0]=invFact[0]=invFact[1]=inv[1]=1;\r\n        for (int i = 2; i < n; i++){ // modInverse \r\n            fact[i] = fact[i-1]*i%M;\r\n            inv[i] = M-M/i*inv[M%i]%M;\r\n            invFact[i] = invFact[i-1]*inv[i]%M;\r\n        }\r\n\r\n        Map<Integer, List<Integer>> map = new HashMap<>();\r\n        for (int i = 0; i < n; i++){ // add an edge from parent to child\r\n            map.computeIfAbsent(prevRoom[i], o -> new ArrayList<>()).add(i);\r\n        }\r\n\r\n        long[] ans = new long[]{1};\r\n        solve(0, fact, invFact, map, ans);\r\n        return (int)ans[0];\r\n    }\r\n\r\n    private int solve(int i, long[] fact, long[] invFact, Map<Integer, List<Integer>> map, long[] ans){\r\n        int sum = 0;\r\n        for (int next : map.getOrDefault(i, List.of())){\r\n            int cur = solve(next, fact, invFact, map, ans);\r\n            ans[0] = ans[0] * invFact[cur] % M; // divide fact[cur] -> multiply invFact[cur]\r\n            sum += cur;\r\n        }\r\n        ans[0] = ans[0] * fact[sum] % M;\r\n        return sum+1;\r\n    }\r\n}"
  }
}
