export default {
  "id": 808,
  "name": "Soup Servings",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/soup-servings",
  "relativeDir": "S/Soup Servings",
  "slug": "0808-soup-servings",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 33,
    "java": 18,
    "python": 22
  },
  "languages": {
    "cpp": "// Runtime: 4 ms (Top 79.58%) | Memory: 10.8 MB (Top 38.33%)\r\n[[nodiscard]] double step(\r\n    int const A, int const B, std::unordered_map<int, std::unordered_map<int, double>> & Memo )\r\n{\r\n    if( A <= 0 ) return B <= 0 ? 0.5 : 1.0;\r\n    if( B <= 0 ) return 0.0;\r\n\r\n    auto const AIt{ Memo.find(A) };\r\n\r\n    if( Memo.cend() != AIt )\r\n    {\r\n        auto const BIt{ AIt->second.find(B) };\r\n        if( AIt->second.cend() != BIt ) return BIt->second;\r\n    }\r\n\r\n    double M{ step( A-100, B, Memo ) };\r\n    M += step( A-75, B-25, Memo );\r\n    M += step( A-50, B-50, Memo );\r\n    M += step( A-25, B-75, Memo );\r\n    return Memo[A][B] = 0.25 * M;\r\n}\r\n\r\nclass Solution\r\n{\r\npublic:\r\n    double soupServings(int n)\r\n    {\r\n        if( n > 4750 ) return 1;\r\n\r\n        std::unordered_map<int, std::unordered_map<int, double>> Memo{};\r\n        return step( n, n, Memo );\r\n    }\r\n};",
    "python": "# Runtime: 62 ms (Top 34.5%) | Memory: 18.09 MB (Top 39.7%)\r\n\r\nclass Solution:\r\n    def soupServings(self, n: int) -> float:\r\n        if n > 4451: \r\n            return 1.0\r\n        n = (n + 24) // 25\r\n        memo = dict()\r\n        \r\n        def dp(i, j):\r\n            if (i, j) in memo:\r\n                return memo[(i, j)]\r\n            if i <= 0 and j <= 0: \r\n                return 0.5\r\n            if i <= 0: \r\n                return 1.0\r\n            if j <= 0: \r\n                return 0.0\r\n            memo[(i, j)] = 0.25 * (dp(i - 4, j) + dp(i - 3, j - 1) + dp(i - 2, j - 2) + dp(i - 1, j - 3))\r\n            return memo[(i, j)]\r\n        \r\n        return dp(n, n)",
    "java": "// Runtime: 1 ms (Top 90.5%) | Memory: 39.56 MB (Top 93.7%)\r\n\r\nclass Solution {\r\n    public double soupServings(int n) {\r\n        if(n>4800) return 1;\r\n         n=(int)Math.ceil(n*1.0/25);\r\n        double dp[][]= new double[n+1][n+1];\r\n        return helper(n,n,dp);\r\n    }\r\n    double helper(int a,int b,double dp[][]){\r\n        if(a<=0 && b<=0) return 0.5;\r\n        if(b<=0) return 0;\r\n        if(a<=0) return 1;\r\n        if(dp[a][b]>0) return dp[a][b];\r\n        return dp[a][b]=0.25*(helper(a-4,b,dp)+helper(a-3,b-1,dp)+helper(a-2,b-2,dp)+helper(a-1,b-3,dp));\r\n    }\r\n}\r\n// Upvote please !!"
  }
}
