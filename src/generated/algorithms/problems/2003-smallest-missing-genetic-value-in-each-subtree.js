export default {
  "id": 2003,
  "name": "Smallest Missing Genetic Value in Each Subtree",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/smallest-missing-genetic-value-in-each-subtree",
  "relativeDir": "S/Smallest Missing Genetic Value in Each Subtree",
  "slug": "2003-smallest-missing-genetic-value-in-each-subtree",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 44,
    "java": 54,
    "python": 26,
    "javascript": 22
  },
  "languages": {
    "cpp": "// Runtime: 896 ms (Top 26.83%) | Memory: 168.9 MB (Top 55.75%)\r\n\r\nclass Solution {\r\npublic:\r\n    unordered_set<int> visited;\r\n    vector<int> nums ;\r\n    vector<vector<int>> adj;\r\n\r\n    void dfs(int node){\r\n        for(auto child:adj[node]){\r\n            if(!visited.count(nums[child])){\r\n                visited.insert(nums[child]);\r\n                dfs(child);\r\n            }\r\n        }\r\n    }\r\n\r\n    vector<int> smallestMissingValueSubtree(vector<int>& parents, vector<int>& nums) {\r\n        int n = parents.size(), missing = 1;\r\n        adj.resize(n);\r\n        vector<int> res;\r\n        this->nums = nums;\r\n        res.resize(n,1);\r\n\r\n        for(int i=1; i<n; i++) adj[parents[i]].push_back(i);\r\n\r\n        int node = -1;\r\n        for(int i=0; i<n; i++){\r\n            if(nums[i] == 1) {\r\n                node = i;\r\n                break ;\r\n            }\r\n        }\r\n        if(node == -1) return res;\r\n        while(node != -1) {\r\n            visited.insert(nums[node]);\r\n            dfs(node);\r\n            while(visited.count(missing)) missing++;\r\n            res[node] = missing;\r\n            node = parents[node];\r\n        }\r\n        return res;\r\n    }\r\n};",
    "python": "# Runtime: 3421 ms (Top 39.22%) | Memory: 51.8 MB (Top 96.08%)\r\nclass Solution:\r\n    def smallestMissingValueSubtree(self, parents: List[int], nums: List[int]) -> List[int]:\r\n        ans = [1] * len(parents)\r\n        if 1 in nums:\r\n            tree = {}\r\n            for i, x in enumerate(parents):\r\n                tree.setdefault(x, []).append(i)\r\n\r\n            k = nums.index(1)\r\n            val = 1\r\n            seen = set()\r\n\r\n            while k != -1:\r\n                stack = [k]\r\n                while stack:\r\n                    x = stack.pop()\r\n                    seen.add(nums[x])\r\n                    for xx in tree.get(x, []):\r\n                        if nums[xx] not in seen:\r\n                            stack.append(xx)\r\n                            seen.add(nums[xx])\r\n                while val in seen: val += 1\r\n                ans[k] = val\r\n                k = parents[k]\r\n        return ans",
    "java": "class Solution {\r\n    public int[] smallestMissingValueSubtree(int[] parents, int[] nums) {\r\n        int n = parents.length;\r\n        int[] res = new int[n];\r\n        for (int i = 0; i < n; i++) {\r\n            res[i] = 1;\r\n        }\r\n        \r\n        int oneIndex = -1;\r\n        for (int i = 0; i < n; i++) {\r\n            if (nums[i] == 1) {\r\n                oneIndex = i;\r\n                break;\r\n            }\r\n        }\r\n        \r\n        // 1 not found\r\n        if (oneIndex == -1) {\r\n            return res;\r\n        }\r\n        \r\n        Map<Integer, Set<Integer>> graph = new HashMap<>();\r\n        for (int i = 1; i < n; i++) {\r\n            Set<Integer> children = graph.getOrDefault(parents[i], new HashSet<Integer>());\r\n            children.add(i);\r\n            graph.put(parents[i], children);\r\n        }\r\n        \r\n        Set<Integer> visited = new HashSet<Integer>();\r\n        \r\n        int parentIter = oneIndex;\r\n        int miss = 1;\r\n        while (parentIter >= 0) {\r\n            dfs(parentIter, graph, visited, nums);\r\n            while (visited.contains(miss)) {\r\n                miss++;\r\n            }\r\n            res[parentIter] = miss;\r\n            parentIter = parents[parentIter];\r\n        }\r\n        return res;\r\n    }\r\n    \r\n    public void dfs(int ind, Map<Integer, Set<Integer>> graph, Set<Integer> visited, int []nums) {\r\n        if (!visited.contains(nums[ind])) {\r\n            Set <Integer> children = graph.getOrDefault(ind, new HashSet<Integer>());\r\n        \r\n            for (int p : children) {\r\n                dfs(p, graph, visited, nums);\r\n            }\r\n            visited.add(nums[ind]);\r\n        }\r\n    }\r\n}",
    "javascript": "// Runtime: 689 ms (Top 100.00%) | Memory: 160 MB (Top 83.33%)\r\nvar smallestMissingValueSubtree = function(parents, nums) {\r\n    let n=parents.length,next=[...Array(n)].map(d=>[]),used={}\r\n    for(let i=1;i<n;i++)\r\n        next[parents[i]].push(i)\r\n    let dfs=(node)=>{\r\n        if(used[nums[node]])\r\n            return\r\n        used[nums[node]]=true\r\n        for(let child of next[node])\r\n            dfs(child)\r\n    }\r\n    let cur=nums.indexOf(1),leftAt=1,res=[...Array(n)].map(d=>1)\r\n    while(cur!==-1){\r\n        dfs(cur)\r\n        while(used[leftAt])\r\n            leftAt++\r\n        res[cur]=leftAt\r\n        cur=parents[cur]\r\n    }\r\n    return res\r\n};"
  }
}
