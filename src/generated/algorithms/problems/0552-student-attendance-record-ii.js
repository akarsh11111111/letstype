export default {
  "id": 552,
  "name": "Student Attendance Record II",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/student-attendance-record-ii",
  "relativeDir": "S/Student Attendance Record II",
  "slug": "0552-student-attendance-record-ii",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 52,
    "java": 29,
    "python": 36,
    "javascript": 27
  },
  "languages": {
    "cpp": "// Runtime: 71 ms (Top 84.38%) | Memory: 24.60 MB (Top 56.83%)\r\n\r\nclass Solution {\r\npublic:\r\n    const int mod = 1e9 + 7;\r\n    \r\n    int add(int a, int b){\r\n        return (a%mod + b%mod)%mod;\r\n    }\r\n    \r\n    int sub(int a, int b){\r\n        return (a%mod - b%mod + mod)%mod;\r\n    }\r\n    \r\n    int mul(int a, int b){\r\n        return (a%mod * 1ll * b%mod)%mod;\r\n    }\r\n    \r\n    int checkRecord(int n) {\r\n        if(n == 1) return 3;\r\n     \r\n        vector<int>PorL(n + 1); /*for strings ending with 'P' or 'L' and no 'A' is present*/\r\n        vector<int>P(n + 1); /* for strings ending with 'P' and no 'A' is present */\r\n\r\n        // for 0 length strings only 1 option can be there (base case)\r\n        P[0] = 1, PorL[0] = 1;\r\n        \r\n        /*for 1 length strings*/\r\n        P[1] = 1; /*can end with 'P' only */\r\n        PorL[1] = 2; /*can end with either 'P' or 'L' */\r\n\r\n        /*for 2 length strings*/\r\n        P[2] = PorL[1]; /*ending with 'P' so the previous string can end with 'P' or 'L' */\r\n        PorL[2] = P[2] + P[1] + P[0]; /*either current char can be 'P' or 'L' or last 2 chars can be 'L' i.e \"LL\" */\r\n        \r\n        for(int i = 3;i<=n;i++){\r\n            P[i] = PorL[i - 1] % mod;\r\n            PorL[i] = add(P[i], add(P[i - 1], P[i - 2]));\r\n        }\r\n        \r\n        int ans = PorL[n]; /*if we have no 'A'*/\r\n        /*since we can have only 1 'A' lets try to insert at each position */\r\n        for(int i = 1;i<=n;i++){\r\n            /*if we insert 'A' at ith position */\r\n            int leftLength = i - 1; /*the length of the string to the left of i*/\r\n            int rightLength = n - i; /*the length of the string to the right of i*/\r\n            ans = add(ans, mul(PorL[leftLength], PorL[rightLength]));\r\n        }\r\n        return ans;\r\n        \r\n    }\r\n};",
    "python": "// Runtime: 228 ms (Top 90.78%) | Memory: 35.80 MB (Top 36.89%)\r\n\r\nimport numpy as np\r\n\r\nclass Solution:\r\n    \r\n    def checkRecord(self, n: int) -> int:\r\n        MODULUS = 10**9 + 7\r\n\r\n        initial_counts = np.array(\r\n            [1, 0, 0, 0, 0, 0], \r\n            dtype=np.int64\r\n        )\r\n\r\n        adjacency_matrix = np.array([\r\n            [1, 1, 1, 0, 0, 0],\r\n            [1, 0, 0, 0, 0, 0],\r\n            [0, 1, 0, 0, 0, 0],\r\n            [1, 1, 1, 1, 1, 1],\r\n            [0, 0, 0, 1, 0, 0],\r\n            [0, 0, 0, 0, 1, 0],\r\n        ], dtype=np.int64)\r\n\r\n        def power(A, exp):\r\n            B = np.identity(len(A), dtype=np.int64)\r\n            for bit in reversed(bin(exp)[2:]):\r\n                if bit == '1':\r\n                    B = B @ A\r\n                    B %= MODULUS\r\n                A = A @ A\r\n                A %= MODULUS\r\n            return B\r\n\r\n        final_counts = power(adjacency_matrix, n) @ initial_counts\r\n\r\n        return sum(final_counts) % MODULUS",
    "java": "// Runtime: 343 ms (Top 29.4%) | Memory: 78.58 MB (Top 12.2%)\r\n\r\nclass Solution {\r\n    int mod=1000000000+7;\r\n    public int checkRecord(int n) {\r\n        int[][][] cache=new int[n+1][2][3];\r\n        for(int i=0; i<=n; i++){\r\n            for(int j=0; j<2; j++){\r\n                for(int k=0; k<3; k++)cache[i][j][k]=-1;\r\n            }\r\n        }\r\n        return populate(n, 0, 1, 2, cache);\r\n    }\r\n    public int populate(int n, int ptr, int aCount, int lCount, int[][][] cache){\r\n        if(ptr>=n)return 1;\r\n        if(cache[ptr][aCount][lCount]!=-1)return cache[ptr][aCount][lCount];\r\n        long count=0;\r\n        // Late\r\n        if(lCount>0){\r\n            count=populate(n, ptr+1, aCount, lCount-1, cache)%mod;\r\n        }\r\n        // Present\r\n        count=(count+populate(n, ptr+1, aCount, 2, cache))%mod;\r\n        // Absent\r\n        if(aCount==1)count=(count+populate(n, ptr+1, aCount-1, 2, cache))%mod;\r\n        cache[ptr][aCount][lCount]=(int)(count%mod);\r\n        return cache[ptr][aCount][lCount];\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number} n\r\n * @return {number}\r\n */\r\nvar checkRecord = function(n) {\r\n  /**\r\n   * P(n) = A(n - 1) + P(n - 1) + L(n - 1), n ≥ 2.\r\n   * L(n) = A(n - 1) + P(n - 1) + A(n - 2) + P(n - 2), n ≥ 3.\r\n   * A(n) = A(n - 1) + A(n - 2) + A(n - 3), n ≥ 4.\r\n   */\r\n  const m = 1000000007;\r\n  const P = Array(n);\r\n  const A = Array(n);\r\n  const L = Array(n);\r\n  A[0] = 1;\r\n  L[0] = 1;\r\n  P[0] = 1;\r\n  A[1] = 2;\r\n  A[2] = 4;\r\n  L[1] = 3;\r\n  for (let i = 1; i < n; i++) {\r\n    P[i] = (A[i - 1] + L[i - 1] + P[i - 1]) % m;\r\n    if (i >= 3) A[i] = (A[i - 1] + A[i - 2] + A[i - 3]) % m;\r\n    if (i >= 2) L[i] = (A[i - 1] + P[i - 1] + A[i - 2] + P[i - 2]) % m;\r\n  }\r\n  return (P[n - 1] + A[n - 1] + L[n - 1]) % m;\r\n};"
  }
}
