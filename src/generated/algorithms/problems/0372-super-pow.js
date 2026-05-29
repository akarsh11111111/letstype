export default {
  "id": 372,
  "name": "Super Pow",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/super-pow",
  "relativeDir": "S/Super Pow",
  "slug": "0372-super-pow",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 24,
    "java": 12,
    "python": 10,
    "javascript": 19
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int binaryExp(int a, int b, int M)\r\n    {\r\n        int ans = 1;\r\n        a %= M;\r\n        while(b)\r\n        {\r\n            if(b&1) ans = (ans * a)%M;\r\n            a = (a*a)%M, b = b>>1;\r\n        }\r\n        return ans;\r\n    }\r\n    \r\n    int superPow(int a, vector<int>& b) {\r\n        int bmod = 0;\r\n        for(auto it : b)\r\n        {\r\n            bmod = (bmod * 10 + it)%1140;\r\n        }\r\n        \r\n        return binaryExp(a, bmod, 1337);\r\n    }\r\n};",
    "python": "# Runtime: 260 ms (Top 32.64%) | Memory: 13.9 MB (Top 58.72%)\r\nclass Solution:\r\n    def superPow(self, a: int, b: List[int]) -> int:\r\n        mod = 1337\r\n        ans = 1\r\n\r\n        for power in b:\r\n            ans = ((pow(ans,10)%mod)*(pow(a,power)%mod))%mod\r\n\r\n        return ans",
    "java": "import java.math.BigInteger;\r\nclass Solution {\r\n    public int superPow(int a, int[] b) {\r\n        StringBuilder bigNum = new StringBuilder();\r\n        Arrays.stream(b).forEach(i -> bigNum.append(i));\r\n        \r\n        return \r\n            BigInteger.valueOf(a)\r\n            .modPow(new BigInteger(bigNum.toString()), BigInteger.valueOf(1337))\r\n            .intValue();\r\n    }\r\n}",
    "javascript": "// Runtime: 100 ms (Top 64.52%) | Memory: 42.9 MB (Top 64.52%)\r\nvar superPow = function(a, b) {\r\n    const MOD = 1337;\r\n    const pow = (num, n) => {\r\n        let result = 1;\r\n        for (let index = 0; index < n; index++) {\r\n            result = result * num % MOD;\r\n        }\r\n        return result;\r\n    };\r\n\r\n    return b.reduceRight((result, n) => {\r\n        a %= MOD;\r\n        const powNum = result * pow(a, n) % MOD;\r\n\r\n        a = pow(a, 10);\r\n        return powNum;\r\n    }, 1);\r\n};"
  }
}
