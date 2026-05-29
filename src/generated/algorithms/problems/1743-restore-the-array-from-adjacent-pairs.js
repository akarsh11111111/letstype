export default {
  "id": 1743,
  "name": "Restore the Array From Adjacent Pairs",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/restore-the-array-from-adjacent-pairs",
  "relativeDir": "R/Restore the Array From Adjacent Pairs",
  "slug": "1743-restore-the-array-from-adjacent-pairs",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 36,
    "java": 36,
    "python": 27
  },
  "languages": {
    "cpp": "// Runtime: 327 ms (Top 69.44%) | Memory: 106.00 MB (Top 74.11%)\r\n\r\nclass Solution {\r\npublic:\r\n    std::vector<int> restoreArray(std::vector<std::vector<int>>& vals) {\r\n        std::unordered_map<int, std::vector<int>> pairs;\r\n        \r\n        for (const std::vector<int>& val : vals) {\r\n            pairs[val[0]].push_back(val[1]);\r\n            pairs[val[1]].push_back(val[0]);\r\n        }\r\n        \r\n        std::vector<int> result;\r\n        int start = -1000000;\r\n        \r\n        for (const auto& entry : pairs) {\r\n            if (entry.second.size() == 1) {\r\n                start = entry.first;\r\n                break;\r\n            }\r\n        }\r\n        \r\n        int left = -1000000;\r\n        result.push_back(start);\r\n        \r\n        for (int i = 1; i < vals.size() + 1; ++i) {\r\n            const std::vector<int>& val = pairs[start];\r\n            int newval = (val[0] == left) ? val[1] : val[0];\r\n            result.push_back(newval);\r\n            left = start;\r\n            start = newval;\r\n        }\r\n        \r\n        return result;\r\n    }\r\n};",
    "python": "// Runtime: 2248 ms (Top 15.65%) | Memory: 166 MB (Top 35.87%)\r\nclass Solution:\r\n    def restoreArray(self, adjacentPairs: List[List[int]]) -> List[int]:\r\n        # create the map\r\n        adj = collections.defaultdict(list)\r\n        for a, b in adjacentPairs:\r\n            adj[a].append(b)\r\n            adj[b].append(a)\r\n\r\n        # find the start num\r\n        start = adjacentPairs[0][0]\r\n        for k, v in adj.items():\r\n            if len(v) ==1:\r\n                start = k\r\n                break\r\n\r\n        # dfs to connect the graph\r\n        nums=[]\r\n        seen = set()\r\n        def dfs(num):\r\n            seen.add(num)\r\n            for next_num in adj[num]:\r\n                if next_num in seen: continue\r\n                dfs(next_num)\r\n            nums.append(num)\r\n        dfs(start)\r\n        return nums",
    "java": "// Runtime: 122 ms (Top 96.49%) | Memory: 87.3 MB (Top 95.99%)\r\n\r\nclass Solution {\r\n    public int[] restoreArray(int[][] adjacentPairs) {\r\n        // Build an adjacency list graph.\r\n        Map<Integer, Queue<Integer>> iToPairs = new HashMap<>();\r\n        for (int[] pair : adjacentPairs) {\r\n            iToPairs.computeIfAbsent(pair[0], k -> new ArrayDeque<>()).add(pair[1]);\r\n            iToPairs.computeIfAbsent(pair[1], k -> new ArrayDeque<>()).add(pair[0]);\r\n        }\r\n\r\n        // Find an item that has only one neighbour.\r\n        int start = -1;\r\n        for (int i : iToPairs.keySet()) {\r\n            if (iToPairs.get(i).size() == 1) {\r\n                start = i;\r\n                break;\r\n            }\r\n        }\r\n\r\n        // Traverse the graph in a linked-list fashion.\r\n        int n = iToPairs.size();\r\n        int writeIdx = 0;\r\n        int[] restored = new int[n];\r\n        restored[writeIdx++] = start;\r\n        while (writeIdx < n) {\r\n            int next = iToPairs.get(start).remove();\r\n            iToPairs.remove(start);\r\n            iToPairs.get(next).remove(start); // Remove the loop back to the current start.\r\n            restored[writeIdx++] = next;\r\n            start = next;\r\n        }\r\n\r\n        return restored;\r\n    }\r\n}"
  }
}
