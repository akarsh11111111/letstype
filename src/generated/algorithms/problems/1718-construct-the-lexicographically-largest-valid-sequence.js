export default {
  "id": 1718,
  "name": "Construct the Lexicographically Largest Valid Sequence",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/construct-the-lexicographically-largest-valid-sequence",
  "relativeDir": "C/Construct the Lexicographically Largest Valid Sequence",
  "slug": "1718-construct-the-lexicographically-largest-valid-sequence",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 42,
    "java": 36,
    "python": 38
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.0%) | Memory: 6.80 MB (Top 20.69%)\r\n\r\nclass Solution {\r\npublic:\r\n    \r\n    int SIZE, N;\r\n\r\n    bool fillIndex(vector<int> &a, vector<bool> &used, int idx) {\r\n        if(idx == SIZE) return true; \r\n        if(a[idx]) return fillIndex(a,used,idx+1);\r\n        \r\n        for(int num = N-1 ; num >= 1 ; num--) {\r\n            if(used[num]) continue;\r\n            if(num != 1 and (idx + num >= SIZE or a[idx + num] != 0)) continue;\r\n            a[idx] = num;\r\n            if(num != 1) a[idx+num] = num;\r\n            used[num] = true;\r\n            if(fillIndex(a,used,idx+1)) return true;\r\n            a[idx] = 0 ;\r\n            if(num != 1) a[idx + num] = 0;\r\n            used[num] = false;\r\n        }\r\n        \r\n        return false;\r\n    }\r\n    \r\n    vector<int> constructDistancedSequence(int n) {\r\n        SIZE = 1 + (n-1)*2, N = n;\r\n        vector<int> a(SIZE,0);\r\n        vector<bool> used(n,false);\r\n        \r\n        if(n==1) {\r\n            a[0] = 1;\r\n        } else {\r\n            a[0] = a[n] = n;\r\n            used[n] = true;\r\n            fillIndex(a,used,1);\r\n        }\r\n        \r\n        return a;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def constructDistancedSequence(self, n: int) -> List[int]:\r\n        self.ans = None\r\n        def dfs(path, used, i):\r\n            self.steps += 1\r\n            if i == len(path):\r\n                self.ans = path[:]\r\n                return True\r\n            if path[i] != 0:\r\n                return dfs(path, used, i + 1)\r\n            my_ans = [0]\r\n            for x in range(n, 0, -1):\r\n                if x in used:\r\n                    continue\r\n                if x == 1:\r\n                    path[i] = x\r\n                    used.add(1)\r\n                    \r\n                    if dfs(path, used, i + 1):\r\n                        return True\r\n                    \r\n                    path[i] = 0\r\n                    used.remove(1)\r\n                if i + x < len(path) and path[i + x] == 0:\r\n                    path[i + x] = path[i] = x\r\n                    used.add(x)\r\n                    \r\n                    if dfs(path, used, i + 1):\r\n                        return True\r\n                    \r\n                    path[i + x] = path[i] = 0\r\n                    used.remove(x)\r\n\r\n            return False\r\n\r\n        dfs([0] * (1 + 2 * (n - 1)), set(), 0)\r\n        \r\n        return self.ans",
    "java": "// Runtime: 1 ms (Top 81.69%) | Memory: 42.2 MB (Top 11.27%)\r\nclass Solution {\r\n\r\n        public int[] constructDistancedSequence(int n) {\r\n            int[] ans = new int[n * 2 - 1];\r\n            boolean[] visited = new boolean[n + 1];\r\n            calc(0, ans, visited, n);\r\n            return ans;\r\n        }\r\n\r\n        private boolean calc(int index, int[] ans, boolean[] visited, int n) {\r\n            if (index == ans.length) {\r\n                return true;\r\n            }\r\n            if (ans[index] != 0) return calc(index + 1, ans, visited, n); // value already assigned in this position. So go ahead with the next index.\r\n            else {\r\n                // we start from n to 1 since we need to find out the lexicographically largest sequence.\r\n                for (int i = n; i >= 1; i--) {\r\n                    if (visited[i]) continue;\r\n                    visited[i] = true;\r\n                    ans[index] = i;\r\n                    if (i == 1) {\r\n                        if (calc(index + 1, ans, visited, n)) return true;\r\n                    } else if (index + i < ans.length && ans[index + i] == 0) {\r\n                        ans[i + index] = i; // assigning the second occurence of i in the desired position i.e, (current index + i )\r\n                        if (calc(index + 1, ans, visited, n)) return true; // largest possible sequence satisfying the given conditions found.\r\n                        ans[index + i] = 0;\r\n                    }\r\n                    ans[index] = 0;\r\n                    visited[i] = false;\r\n                }\r\n\r\n            }\r\n            return false;\r\n        }\r\n    }"
  }
}
