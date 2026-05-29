export default {
  "id": 378,
  "name": "Kth Smallest Element in a Sorted Matrix",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix",
  "relativeDir": "K/Kth Smallest Element in a Sorted Matrix",
  "slug": "0378-kth-smallest-element-in-a-sorted-matrix",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 21,
    "java": 48,
    "python": 21,
    "javascript": 6
  },
  "languages": {
    "cpp": "// Runtime: 2780 ms (Top 5.12%) | Memory: 20.00 MB (Top 7.4%)\r\n\r\nclass Solution {\r\npublic:\r\n    int kthSmallest(vector<vector<int>>& matrix, int k) {\r\n        int n = matrix.size(), start = matrix[0][0], end = matrix[n-1][n-1];\r\n        unordered_map<int, int>mp;\r\n        for(int i = 0; i < n; i++)\r\n            for(int j = 0; j < n; j++)\r\n                mp[matrix[i][j]]++;\r\n        \r\n        for(int i = start; i <= end; i++)\r\n            if(mp.find(i) != mp.end()){\r\n                for(int j = 0; j < mp[i]; j++){\r\n                    k--;\r\n                    if(k == 0) return i;\r\n                }\r\n            }\r\n          return -1;  \r\n    }\r\n};",
    "python": "// Runtime: 281 ms (Top 5.06%) | Memory: 22.00 MB (Top 9.58%)\r\n\r\nclass Solution:\r\n    def kthSmallest(self, matrix, k):\r\n        n, beg, end = len(matrix), matrix[0][0], matrix[-1][-1]\r\n        \r\n        def check(m):\r\n            i, j, cnt = 0, n-1, 0\r\n            for i in range(n):\r\n                while j >= 0 and matrix[i][j] > m: j -= 1\r\n                cnt += (j + 1)\r\n            return cnt\r\n         \r\n        while beg < end:\r\n            mid = (beg + end)//2\r\n            if check(mid) < k:\r\n                beg = mid + 1\r\n            else:\r\n                end = mid\r\n                \r\n        return beg",
    "java": "/**\r\n * Using PriorityQueue\r\n *\r\n * Time Complexity:\r\n *      O(min(N,K)*log(min(N,K))) -> To add initial min(N,K) elements, as we are adding the elements individually.\r\n *                                   If we were adding all elements in one go, then the complexity would be O(min(N,K))\r\n *                                   Refer: https://stackoverflow.com/a/34697891\r\n *      O(2*(K-1)*log(min(N,K)) -> To poll K-1 elements and add next K-1 elements.\r\n * Total Time Complexity: O((min(N,K) + 2*(K-1)) * log(min(N,K)) = O(K * log(min(N,K))\r\n *\r\n * Space Complexity: O(min(N, K))\r\n *\r\n * N = Length of one side of the matrix. K = input value k.\r\n */\r\nclass Solution {\r\n    public int kthSmallest(int[][] matrix, int k) {\r\n        if (matrix == null || k <= 0) {\r\n            throw new IllegalArgumentException(\"Input is invalid\");\r\n        }\r\n\r\n        int n = matrix.length;\r\n        if (k > n * n) {\r\n            throw new NoSuchElementException(\"k is greater than number of elements in matrix\");\r\n        }\r\n        if (k == 1) {\r\n            return matrix[0][0];\r\n        }\r\n        if (k == n * n) {\r\n            return matrix[n - 1][n - 1];\r\n        }\r\n\r\n        PriorityQueue<int[]> queue = new PriorityQueue<>((a, b) -> (matrix[a[0]][a[1]] - matrix[b[0]][b[1]]));\r\n\r\n        for (int i = 0; i < Math.min(n, k); i++) {\r\n            queue.offer(new int[] { i, 0 });\r\n        }\r\n        while (k > 1) {\r\n            int[] cur = queue.poll();\r\n            if (cur[1] < n - 1) {\r\n                cur[1]++;\r\n                queue.offer(cur);\r\n            }\r\n            k--;\r\n        }\r\n\r\n        return matrix[queue.peek()[0]][queue.peek()[1]];\r\n    }\r\n}",
    "javascript": "// Runtime: 148 ms (Top 40.32%) | Memory: 48.3 MB (Top 41.17%)\r\nvar kthSmallest = function(matrix, k) {\r\n    let arr = matrix.flat()\r\n    arr.sort((a,b)=>a-b)\r\n    return arr[k-1]\r\n};"
  }
}
