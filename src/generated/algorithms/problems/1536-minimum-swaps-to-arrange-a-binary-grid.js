export default {
  "id": 1536,
  "name": "Minimum Swaps to Arrange a Binary Grid",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-swaps-to-arrange-a-binary-grid",
  "relativeDir": "M/Minimum Swaps to Arrange a Binary Grid",
  "slug": "1536-minimum-swaps-to-arrange-a-binary-grid",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 35,
    "java": 25,
    "python": 27,
    "javascript": 32
  },
  "languages": {
    "cpp": "// Runtime: 84 ms (Top 67.40%) | Memory: 25.8 MB (Top 15.42%)\r\nclass Solution {\r\npublic:\r\n    int minSwaps(vector<vector<int>>& grid) {\r\n\r\n        int n = grid.size();\r\n        vector<int> mr(n,0);\r\n        vector<int> br(n,0);\r\n        for(int i=0;i<n;i++)\r\n        {\r\n            for(int j=0;j<n;j++)\r\n            {\r\n                if(grid[i][j]==1)\r\n                    mr[i] = j;\r\n            }\r\n        }\r\n        br = mr;\r\n        sort(mr.begin(),mr.end());\r\n        for(int i=0;i<n;i++)\r\n            if(mr[i]>i)\r\n                return -1;\r\n        int count = 0;\r\n        for(int i=0;i<n;i++)\r\n        {\r\n            for(int j=i+1;j<n;j++)\r\n            {\r\n                if(br[i]>i){\r\n                    swap(br[i],br[j]);\r\n                    count++;\r\n                }\r\n            }\r\n        }\r\n        return count;\r\n    }\r\n};",
    "python": "# Runtime: 1405 ms (Top 5.77%) | Memory: 15.2 MB (Top 23.08%)\r\nclass Solution:\r\n    def minSwaps(self, grid) -> int:\r\n        n = len(grid)\r\n        max_right = [-1] * n\r\n        for r, row in enumerate(grid):\r\n            for c in range(n - 1, -1, -1):\r\n                if row[c] == 1:\r\n                    max_right[r] = c\r\n                    break\r\n        if all(v <= i for i, v in enumerate(sorted(max_right))):\r\n            swaps = 0\r\n            i = 0\r\n            while i < n:\r\n                while i < n and max_right[i] <= i:\r\n                    i += 1\r\n                if i == n:\r\n                    break\r\n                j = i\r\n                while j < n and max_right[j] > i:\r\n                    j += 1\r\n                swaps += j - i\r\n                max_right[i], max_right[i + 1: j + 1] = (max_right[j],\r\n                                                         max_right[i: j])\r\n                i += 1\r\n            return swaps\r\n        return -1",
    "java": "class Solution {\r\n    public int minSwaps(int[][] grid) {\r\n        int n = grid.length, ans = 0, cur = 0;\r\n        for (int k = 0; k < n - 1; k++){ // looking for the fitting row for row k\r\n            for (int i = k; i < n; i++){ // start from row k looking downward\r\n                for (int j = k + 1; j < n; j++){ // all cell after and at k + 1 must be 0\r\n                    if (grid[i][j] == 1)\r\n                        break;\r\n                    if (j < n - 1)\r\n                        continue;\r\n                    for (int m = i; m > k; m--){ // j == n - 1 here, so we found a valid row\r\n                        int[] tmp = grid[m - 1];  // swap it into the correct row - row k\r\n                        grid[m - 1] = grid[m];\r\n                        grid[m] = tmp;\r\n                        ans++;\r\n                    }\r\n                    i = n;\r\n                }\r\n                if (i == n - 1) // i reaches the end and did not find a fitting row, return -1\r\n                    return -1;\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n}",
    "javascript": "// Runtime: 124 ms (Top 66.67%) | Memory: 48.7 MB (Top 33.33%)\r\nvar minSwaps = function(grid) {\r\n    const arr = [];\r\n    let count = 0;\r\n\r\n    for(let row of grid) {\r\n        arr.push(row.lastIndexOf(1));\r\n    }\r\n\r\n    function swap(i, j) {\r\n        [arr[i], arr[j]] = [arr[j], arr[i]];\r\n        count++;\r\n    }\r\n\r\n    for(let i = 0; i < arr.length; i++) {\r\n        // if num <= i pass b/c it's its correct spot\r\n        if(arr[i] <= i) continue;\r\n        let j = i;\r\n\r\n        // scan forward looking for a num <= i\r\n        while(arr[j] > i) {\r\n            j++;\r\n            if(j >= arr.length) return -1;\r\n        }\r\n\r\n        // swap as you move back to the right spot\r\n        for(let k = j; k > i; k--) {\r\n            swap(k, k-1);\r\n        }\r\n    }\r\n    return count;\r\n};"
  }
}
