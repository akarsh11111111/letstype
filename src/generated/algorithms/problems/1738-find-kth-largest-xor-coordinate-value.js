export default {
  "id": 1738,
  "name": "Find Kth Largest XOR Coordinate Value",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-kth-largest-xor-coordinate-value",
  "relativeDir": "F/Find Kth Largest XOR Coordinate Value",
  "slug": "1738-find-kth-largest-xor-coordinate-value",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 34,
    "java": 63,
    "python": 31,
    "javascript": 14
  },
  "languages": {
    "cpp": "// Runtime: 1065 ms (Top 34.96%) | Memory: 112.1 MB (Top 53.20%)\r\nclass Solution {\r\npublic:\r\n    int kthLargestValue(vector<vector<int>>& matrix, int k) {\r\n        int m = matrix.size(), n = matrix[0].size();\r\n\r\n        vector<int> coordinates;\r\n        vector<vector<int>> prefixXOR(m, vector<int>(n, 0));\r\n\r\n        for (int i = 0; i < m; i++) {\r\n            for (int j = 0; j < n; j++) {\r\n                if (i == 0 && j == 0) prefixXOR[i][j] = matrix[0][0];\r\n                else if (i == 0 && j != 0) prefixXOR[i][j] = prefixXOR[i][j-1] ^ matrix[i][j];\r\n                else if (i != 0 && j == 0) prefixXOR[i][j] = prefixXOR[i-1][j] ^ matrix[i][j];\r\n                else prefixXOR[i][j] = prefixXOR[i-1][j] ^ prefixXOR[i][j-1] ^ prefixXOR[i-1][j-1] ^ matrix[i][j];\r\n            }\r\n        }\r\n\r\n        priority_queue<int, vector<int>, greater<int>> heap;\r\n\r\n        for (int i = 0; i < m; i++) {\r\n            for (int j = 0; j < n; j++) {\r\n                if (heap.size() == k) {\r\n                    if (prefixXOR[i][j] > heap.top()) {\r\n                        heap.pop();\r\n                        heap.push(prefixXOR[i][j]);\r\n                    }\r\n                }\r\n                else heap.push(prefixXOR[i][j]);\r\n            }\r\n        }\r\n        return heap.top();\r\n    }\r\n};",
    "python": "class Solution:\r\n    def kthLargestValue(self, matrix: List[List[int]], k: int) -> int:\r\n        temp=0\r\n        pq= []\r\n        n = len(matrix)\r\n        m = len(matrix[0])\r\n        \r\n        prefix= [  [0]*m for i in range(n) ]\r\n        \r\n        \r\n        for i in range(n):\r\n            for j in range(m):\r\n                if i==0 or j==0:\r\n                    if i==0 and j==0:\r\n                        prefix[i][j] = matrix[i][j]\r\n                    elif i==0 and j!=0:\r\n                        prefix[i][j] ^= prefix[i][j-1]^ matrix[i][j]\r\n                    else:\r\n                        prefix[i][j]^=prefix[i-1][j]^ matrix[i][j]\r\n                else:\r\n                    \r\n                    prefix[i][j] ^= prefix[i-1][j] ^ prefix[i][j-1]^matrix[i][j]^prefix[i-1][j-1]\r\n                if len(pq)<k:\r\n                    heappush(pq,prefix[i][j])    \r\n                else:\r\n                    heappush(pq, prefix[i][j])\r\n                    heappop(pq)\r\n                \r\n\r\n                  \r\n        return heappop(pq)",
    "java": "// Runtime: 56 ms (Top 96.62%) | Memory: 250.3 MB (Top 62.84%)\r\nclass Solution {\r\n\r\n    private static final Random RAND = new Random(0);\r\n\r\n    public int kthLargestValue(int[][] matrix, int k) {\r\n        var xor = convertToXorArray(matrix);\r\n        var targetIdx = xor.length - k;\r\n        sortPartially(xor, targetIdx, 0, xor.length);\r\n        return xor[targetIdx];\r\n    }\r\n\r\n    void sortPartially(int[] nums, int targetIdx, int origLo, int origHi) {\r\n        if (origHi - origLo < 2)\r\n            return;\r\n\r\n        var pivotIdx = RAND.nextInt(origHi - origLo) + origLo;\r\n        var pivot = nums[pivotIdx];\r\n        swap(nums, origLo, pivotIdx);\r\n\r\n        var lo = origLo;\r\n        var mid = lo + 1;\r\n        var hi = origHi;\r\n        while (mid < hi) {\r\n            if (pivot < nums[mid])\r\n                swap(nums, mid, --hi);\r\n            else if (pivot > nums[mid])\r\n                swap(nums, mid++, lo++);\r\n            else\r\n                mid++;\r\n        }\r\n\r\n        if (targetIdx < lo)\r\n            sortPartially(nums, targetIdx, origLo, lo);\r\n\r\n        sortPartially(nums, targetIdx, mid, origHi);\r\n    }\r\n\r\n    void swap(int[] n, int p, int q) {\r\n        var tmp = n[p];\r\n        n[p] = n[q];\r\n        n[q] = tmp;\r\n    }\r\n\r\n    int[] convertToXorArray(int[][] matrix) {\r\n        var rows = matrix.length;\r\n        var cols = matrix[0].length;\r\n        var xor = new int[rows * cols];\r\n        for (int r = 0; r < rows; r++) {\r\n            for (int c = 0; c < cols; c++) {\r\n                var xIdx = r * cols + c;\r\n                xor[xIdx] = matrix[r][c];\r\n                if (c > 0)\r\n                    xor[xIdx] ^= xor[xIdx - 1];\r\n            }\r\n        }\r\n\r\n        for (int i = cols; i < xor.length; i++)\r\n            xor[i] ^= xor[i - cols];\r\n\r\n        return xor;\r\n    }\r\n}",
    "javascript": "// Runtime: 251 ms (Top 90.91%) | Memory: 64.00 MB (Top 100.0%)\r\n\r\nvar kthLargestValue = function(M, K) {\r\n    let y = M.length, x = M[0].length, ans = new Uint32Array(x*y), h = 0\r\n    for (let i = 0; i < y; i++)\r\n        for (let j = 0; j < x; j++) {\r\n            let cell = M[i][j]\r\n            if (i > 0) cell ^= M[i-1][j]\r\n            if (j > 0) cell ^= M[i][j-1]\r\n            if (i > 0 && j > 0) cell ^= M[i-1][j-1]\r\n            ans[h++] = M[i][j] = cell\r\n        }\r\n    return ans.sort()[x*y-K]\r\n};"
  }
}
