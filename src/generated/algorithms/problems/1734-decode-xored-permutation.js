export default {
  "id": 1734,
  "name": "Decode XORed Permutation",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/decode-xored-permutation",
  "relativeDir": "D/Decode XORed Permutation",
  "slug": "1734-decode-xored-permutation",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 20,
    "java": 28,
    "python": 15,
    "javascript": 9
  },
  "languages": {
    "cpp": "// Runtime: 326 ms (Top 27.47%) | Memory: 102.4 MB (Top 18.31%)\r\nclass Solution {\r\npublic:\r\n    vector<int> decode(vector<int>& encoded) {\r\n        int n = encoded.size(), x = 0;\r\n        // XOR of the permutation\r\n        for(int i = 1; i<=n+1; i++) x ^= i;\r\n\r\n        // Xoring X with all the odd positioned elements to find first number\r\n        for(int i = 1; i<n; i+=2) x ^= encoded[i];\r\n\r\n        vector <int> res;\r\n        res.push_back(x);\r\n        for(int i = 0; i<n; i++){\r\n            x ^= encoded[i];\r\n            res.push_back(x);\r\n        }\r\n        return res;\r\n    }\r\n};",
    "python": "# Runtime: 1921 ms (Top 32.18%) | Memory: 33.8 MB (Top 16.09%)\r\n\r\nfrom functools import reduce\r\nfrom operator import xor\r\n\r\nclass Solution:\r\n\r\n    def decode(self, encoded: List[int]) -> List[int]:\r\n        n = len(encoded) + 1\r\n        a = reduce(xor, range(1, n+1))\r\n        b = reduce(xor, encoded[1::2])\r\n        result = [a ^ b]\r\n        for y in encoded:\r\n            result.append(result[-1] ^ y)\r\n        return result",
    "java": "class Solution {\r\n    public int[] decode(int[] encoded) {\r\n        int n = encoded.length+1, all = 0;\r\n        for(int i = 1; i <= n; ++i){//a^b^c^d^e^f^g^h^i\r\n            all ^= i;\r\n        }\r\n        int x = 0;\r\n        for(int v : encoded){//a^b  b^c  c^d  d^e e^f f^g g^h h^i = a^i\r\n            x ^= v;\r\n        }\r\n        int mid = all^x; //a^b^c^d^e^f^g^h^i ^ a^i = b^c^d^e^f^g^h\r\n        for(int i = 1, j = encoded.length-2; i < j;i += 2, j -= 2){\r\n        //(b^c^d^e^f^g^h) ^ (b^c ^ g^h ^ d^e ^ e^f) = e\r\n            mid ^= encoded[i]^encoded[j];\r\n        }\r\n        int[] ans = new int[n];\r\n        ans[n/2] = mid;\r\n        //a    b    c    d   e   f   g   h   i\r\n        //a^b  b^c  c^d  d^e e^f f^g g^h h^i\r\n        for(int i = n/2+1; i < n; ++i){\r\n            ans[i] = encoded[i-1]^ans[i-1];\r\n        }\r\n        for(int i = n/2-1; i >= 0; --i){\r\n            ans[i] = encoded[i]^ans[i+1];\r\n        }\r\n        return ans;\r\n    }\r\n}",
    "javascript": "// Runtime: 587 ms (Top 22.22%) | Memory: 84.3 MB (Top 44.44%)\r\nvar decode = function(encoded) {\r\n  const n = encoded.length + 1;\r\n  const perm = Array(n);\r\n  for (let i = 1; i <= n; i++) { perm[0] ^= i }\r\n  for (let i = 1; i < n - 1; i += 2) { perm[0] ^= encoded[i] }\r\n  for (let i = 1; i < n; i++) { perm[i] = perm[i - 1] ^ encoded[i - 1] }\r\n  return perm;\r\n};"
  }
}
