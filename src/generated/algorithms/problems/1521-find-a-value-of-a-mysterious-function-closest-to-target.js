export default {
  "id": 1521,
  "name": "Find a Value of a Mysterious Function Closest to Target",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-a-value-of-a-mysterious-function-closest-to-target",
  "relativeDir": "F/Find a Value of a Mysterious Function Closest to Target",
  "slug": "1521-find-a-value-of-a-mysterious-function-closest-to-target",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 16,
    "java": 34,
    "python": 9
  },
  "languages": {
    "cpp": "// Runtime: 195 ms (Top 98.04%) | Memory: 62.7 MB (Top 95.42%)\r\nclass Solution {\r\npublic:\r\n    int closestToTarget(vector<int>& arr, int target) {\r\n        vector<int> q;\r\n        q.reserve(32);\r\n        int best = 1'000'000'000;\r\n        for (size_t i = 0; i < arr.size(); i++) {\r\n            for (auto& x : q) x &= arr[i];\r\n            q.push_back(arr[i]);\r\n            q.erase(unique(begin(q), end(q)), end(q));\r\n            for (auto x : q) best = min(best, abs(target-x));\r\n        }\r\n        return best;\r\n    }\r\n};",
    "python": "# Runtime: 1091 ms (Top 49.0%) | Memory: 27.44 MB (Top 83.6%)\r\n\r\nclass Solution:\r\n    def closestToTarget(self, arr: List[int], target: int) -> int:\r\n        ans, seen = inf, set()\r\n        for x in arr: \r\n            seen = {ss & x for ss in seen} | {x}\r\n            ans = min(ans, min(abs(ss - target) for ss in seen))\r\n        return ans",
    "java": "class Solution {\r\n    int[] tree;\r\n    int[] arr;\r\n    int target;\r\n    int min;\r\n    \r\n    public int closestToTarget(int[] arr, int target) {\r\n        int n = arr.length;\r\n        this.arr = arr;\r\n        this.target = target;\r\n        tree = new int[n << 2];\r\n        Arrays.fill(tree, (1 << 31) - 1);               // initialize\r\n        min = Integer.MAX_VALUE;\r\n        for (int i = 0; i < n; i++) {\r\n            add(i, 0, n, 0);\r\n        }\r\n        return min;\r\n    }\r\n    private void add(int x, int l, int r, int n) {\r\n        if (l == r) {\r\n            tree[n] = arr[x];\r\n            min = Math.min(min, Math.abs(tree[n] - target));\r\n            return;\r\n        }\r\n        int mid = l + (r - l) / 2;\r\n        if (x <= mid) {\r\n            add(x, l, mid, 2 * n + 1);\r\n        } else {\r\n            add(x, mid + 1, r, 2 * n + 2);\r\n        }\r\n        tree[n] = (tree[2 * n + 1] & tree[2 * n + 2]);  // & two subtrees\r\n        min = Math.min(min, Math.abs(tree[n] - target));\r\n    }\r\n}"
  }
}
