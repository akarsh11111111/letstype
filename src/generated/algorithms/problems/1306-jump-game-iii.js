export default {
  "id": 1306,
  "name": "Jump Game III",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/jump-game-iii",
  "relativeDir": "J/Jump Game III",
  "slug": "1306-jump-game-iii",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 17,
    "java": 24,
    "python": 16,
    "javascript": 23
  },
  "languages": {
    "cpp": "// Runtime: 26 ms (Top 94.29%) | Memory: 47.00 MB (Top 27.2%)\r\n\r\nclass Solution {\r\npublic:\r\n    \r\n    bool ff(vector<int>& arr, vector<bool>& visited, int i) {\r\n        if (i < 0 || i >= arr.size() || visited[i]) return false;\r\n        if (arr[i] == 0) return true;\r\n        visited[i] = true;\r\n        return ff(arr, visited, i + arr[i]) || ff(arr, visited, i - arr[i]);\r\n    }\r\n    \r\n    bool canReach(vector<int>& arr, int start) {\r\n        vector<bool> visited(arr.size(), false);\r\n        return ff(arr, visited, start);\r\n    }\r\n};",
    "python": "class Solution:\r\n    def canReach(self, arr: List[int], start: int) -> bool:\r\n        vis = [0]*len(arr)\r\n        q = deque() \r\n        q.append(start) \r\n        while q:\r\n            cur = q.popleft() \r\n            print(cur)\r\n            vis[cur] = 1\r\n            if arr[cur] == 0:\r\n                return True\r\n            if cur+arr[cur]<len(arr) and vis[cur+arr[cur]] == 0:\r\n                q.append(cur+arr[cur]) \r\n            if cur-arr[cur]>=0 and vis[cur-arr[cur]] == 0: \r\n                q.append(cur-arr[cur])  \r\n        return False",
    "java": "class Solution {\r\n    public boolean canReach(int[] arr, int start) {\r\n        int n = arr.length;\r\n        boolean[] vis = new boolean[n];\r\n        Queue<Integer> q = new LinkedList<>();\r\n        q.add(start);\r\n        while(!q.isEmpty()){\r\n            int size = q.size();\r\n            while(size-- > 0){\r\n                int curr = q.poll();\r\n                if(vis[curr])\r\n                    continue;\r\n                if(arr[curr] == 0)\r\n                    return true;\r\n                if(curr+arr[curr] < n)\r\n                    q.add(curr+arr[curr]);\r\n                if(curr-arr[curr] >= 0)\r\n                    q.add(curr-arr[curr]);\r\n                vis[curr] = true;\r\n            }\r\n        }\r\n        return false;\r\n    }\r\n}",
    "javascript": "// Runtime: 57 ms (Top 89.2%) | Memory: 51.60 MB (Top 47.16%)\r\n\r\n// Recursion, Backtracking\r\nvar canReach = function(arr, start) {\r\n    if (arr === null || arr.length === 0) {\r\n        return false;\r\n    }\r\n    return dfs(arr, start);\r\n    // T.C: O(N)\r\n    // S.C: O(N)\r\n};\r\n\r\nconst dfs = (arr, idx) => {\r\n    if (arr[idx] === 0) {\r\n        return true;\r\n    }\r\n    if (idx < 0 || idx > arr.length-1 || arr[idx] < 0) {\r\n        return false;\r\n    }\r\n    let jump = arr[idx];\r\n    arr[idx] = -1; // marking this index as visited\r\n    return dfs(arr, idx-jump) || dfs(arr, idx+jump);\r\n}"
  }
}
