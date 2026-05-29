export default {
  "id": 762,
  "name": "Prime Number of Set Bits in Binary Representation",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation",
  "relativeDir": "P/Prime Number of Set Bits in Binary Representation",
  "slug": "0762-prime-number-of-set-bits-in-binary-representation",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 58,
    "java": 31,
    "python": 4,
    "javascript": 17
  },
  "languages": {
    "cpp": "// Runtime: 3 ms (Top 91.95%) | Memory: 6.60 MB (Top 11.85%)\r\n\r\n/*\r\nThere is a combinatorial formula for computing \r\n#{x <N| x is natural number with bitcount(x)=k} =\r\n\\sum_{i=0}^k C(p[i], k-i)\r\nwhere p[i]=position for i-th 1 in N's binary expression.\r\n*/\r\n\r\nint prime[] = {2, 3, 5, 7, 11, 13, 17, 19};\r\nint C[21][21] = {0};\r\n\r\nclass Solution {\r\npublic:\r\n    void PascalTriangle(int n) {\r\n        for (int i = 0; i <= n; i++) {\r\n            fill(C[i], C[i] + (i + 1), 1);\r\n            for (int j = 1; j <= i / 2; j++) {\r\n                C[i][i-j] = C[i][j] = C[i-1][j-1] + C[i-1][j];\r\n            }\r\n        }\r\n    }\r\n\r\n    vector<int> N2p(int N) {\r\n        bitset<21> bN(N);\r\n        vector<int> p;\r\n        for (int i=20; i >= 0; i--) {\r\n            if (bN[i]) p.push_back(i);\r\n        }\r\n        return p;\r\n    }\r\n\r\n    int nums_bitcount(vector<int>& p, int k) {\r\n        int sum = 0;\r\n        for (int i = 0; i < p.size(); i++) {\r\n            int maxIndex = min(p[i], k-i);\r\n            if (maxIndex >= 0) {\r\n                sum += C[p[i]][k-i];\r\n            }\r\n        }\r\n        return sum;\r\n    }\r\n\r\n    int nums_bitcount_isPrime(int N) {\r\n        vector<int> p = N2p(N);\r\n        int sum = 0;\r\n        for (int k : prime) {\r\n            sum += nums_bitcount(p, k);\r\n        }\r\n        return sum;\r\n    }\r\n\r\n    int countPrimeSetBits(int left, int right) {\r\n        int L = log2(right+1) + 1;\r\n        PascalTriangle(L);\r\n        return nums_bitcount_isPrime(right+1)-nums_bitcount_isPrime(left);\r\n    }\r\n};",
    "python": "class Solution:\r\n    def countPrimeSetBits(self, left: int, right: int) -> int:\r\n        primes = {2, 3, 5, 7, 11, 13, 17, 19}\r\n        return sum(bin(n).count('1') in primes for n in range(left, right + 1))",
    "java": "// Runtime: 161 ms (Top 18.27%) | Memory: 63.5 MB (Top 16.98%)\r\nclass Solution {\r\n     public int calculateSetBits(String s){\r\n        int count=0;\r\n        for (int i = 0; i < s.length(); i++) {\r\n            if(s.charAt(i)=='1') count++;\r\n        }\r\n        return count;\r\n    }\r\n\r\n    public boolean isPrime(int n){\r\n        if (n==0 || n==1) return false;\r\n        for (int i = 2; i <= n/2; i++) {\r\n            if(n%i ==0 ) return false;\r\n        }\r\n// System.out.println(n+\" - \");\r\n        return true;\r\n    }\r\n\r\n    public int countPrimeSetBits(int left, int right) {\r\n        int count=0;\r\n        for(int i=left;i<=right;i++){\r\n            String b= Integer.toBinaryString(i);\r\n\r\n            int n=calculateSetBits(b);\r\n\r\n            if(isPrime(n)) count++;\r\n        }\r\n        return count;\r\n    }\r\n}",
    "javascript": "// Runtime: 312 ms (Top 24.6%) | Memory: 47.93 MB (Top 40.7%)\r\n\r\n/**\r\n * @param {number} L\r\n * @param {number} R\r\n * @return {number}\r\n */\r\nvar countPrimeSetBits = function(L, R) {\r\n  let set = new Set([2, 3, 5, 7, 11, 13, 17, 19]);\r\n  let countPrime = 0;\r\n  \r\n  for (let i = L; i <= R; i++) {\r\n    if (set.has(i.toString(2).replace(/0/g, '').length)) countPrime++;\r\n  }\r\n\r\n  return countPrime;\r\n};"
  }
}
