export default {
  "id": 1442,
  "name": "Count Triplets That Can Form Two Arrays of Equal XOR",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor",
  "relativeDir": "C/Count Triplets That Can Form Two Arrays of Equal XOR",
  "slug": "1442-count-triplets-that-can-form-two-arrays-of-equal-xor",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 50,
    "java": 16,
    "python": 21,
    "javascript": 17
  },
  "languages": {
    "cpp": "class TrieNode {\r\npublic:\r\n    int numOfIndex;\r\n    int sumOfIndex;\r\n    TrieNode* child[2];\r\n    \r\n    TrieNode() : numOfIndex(0), sumOfIndex(0) {\r\n        child[0] = NULL;\r\n        child[1] = NULL;\r\n    }\r\n};\r\nclass Solution {\r\npublic:\r\n    void addNumber(TrieNode* root, int num, int idx){\r\n        for( int i = 31; i >= 0; i--){\r\n       \r\n            int bit = 1 & (num >> i) ;\r\n        \r\n            if ( root->child[bit] == NULL){\r\n                root->child[bit] = new TrieNode();\r\n            }\r\n            root = root->child[bit];\r\n        }\r\n        root->sumOfIndex += idx;\r\n        root->numOfIndex++;\r\n    }\r\n    int calculateIndexPair(TrieNode* root, int num, int idx){\r\n        for( int i = 31; i >= 0; i--){\r\n            int bit = 1 & (num >> i);\r\n        \r\n            if (root->child[bit] == NULL){\r\n                return 0;\r\n            }\r\n            root = root->child[bit];\r\n        }\r\n        return (((root->numOfIndex) * idx) - (root->sumOfIndex));\r\n    }\r\n    int countTriplets(vector<int>& arr) {\r\n        long long ans=0;\r\n        int XOR = 0;\r\n        TrieNode* root = new TrieNode();\r\n    \r\n        for ( int i = 0 ; i < arr.size(); i++){\r\n            addNumber(root, XOR, i);\r\n            XOR ^= arr[i];\r\n            ans = (ans + calculateIndexPair(root, XOR, i)) % 1000000007;\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def countTriplets(self, arr: List[int]) -> int:\r\n        s = [0]\r\n        n = len(arr)\r\n        if n <= 1:\r\n            return 0 \r\n        for i in range(n):\r\n            s.append(s[-1]^arr[i])\r\n        # a = s[i] ^ s[j], b = s[j] ^ s[k+1]  \r\n        count = defaultdict(int)\r\n        # a = b <-> a ^ b == 0 <-> (s[i] ^ s[j]) ^ (s[j] ^ s[k+1]) == 0 \r\n        # <-> s[i] ^ (s[j] ^ m ) = 0 (where m = s[j] ^ s[k+1])\r\n        # <-> s[i] ^ s[k+1] == 0 <-> s[i] == s[k+1]\r\n      \r\n        res = 0 \r\n        # len(s) == n+1, 0<=i<=n-2, 1<=k<=n-1, i+1<=j<=k\r\n        for i in range(n-1):\r\n            for k in range(i+1, n):\r\n                if s[i] == s[k+1]:\r\n                    res += (k-i)\r\n        return res",
    "java": "// Runtime: 2 ms (Top 85.89%) | Memory: 41.5 MB (Top 67.63%)\r\nclass Solution {\r\n    public int countTriplets(int[] arr) {\r\n        int count=0;\r\n\r\n        for(int i=0;i<arr.length;i++){\r\n            int val=0;\r\n            val=val^arr[i];\r\n            for(int k=i+1;k<arr.length;k++){\r\n                val=val ^ arr[k];\r\n                if(val==0) count+=k-i;\r\n            }\r\n        }\r\n        return count;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number[]} arr\r\n * @return {number}\r\n */\r\nvar countTriplets = function(arr) {\r\n    let count = 0\r\n    for(let i=0;i<arr.length;i++){\r\n        let xor = arr[i]\r\n        for(let j=i+1;j<arr.length;j++){\r\n            xor ^= arr[j]\r\n            if(xor == 0){\r\n                count += (j-i)\r\n            }\r\n        }\r\n    }\r\n    return count\r\n};"
  }
}
