export default {
  "id": 1922,
  "name": "Count Good Numbers",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/count-good-numbers",
  "relativeDir": "C/Count Good Numbers",
  "slug": "1922-count-good-numbers",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 38,
    "java": 22,
    "python": 9,
    "javascript": 33
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.00%) | Memory: 5.9 MB (Top 86.69%)\r\n// Approach :-> This is question of combination\r\n// if n as large no....\r\n// 0 1 2 3 4 5 6 7 8 9 10 11 . . . . . n\r\n// 5 * 4 * 5 * 4 * 5 * 4 * 5 * 4 * 5 * 4 * 5 * 4 . . . . . n/4 times of 4 and n/4 times of 5;\r\n//so calculate 5*4 = 20 -------> 20 * 20 * 20 * . . . . .. n/2 times\r\n//so calcultae pow(20,n/2)\r\n// if n is even return pow(20,n/2)\r\n// if n is odd return 5*pow(20,n/2) beacause if n is odd then one 5 is left out\r\n// we can easily calculate pow(x,y) in log(y) times\r\n// durign calculation take care about mod\r\nclass Solution {\r\npublic:\r\n    int mod = 1000000007;\r\n    long long solve(long long val,long long pow){ // calculatin pow in log(n) time\r\n        if(pow==0) return 1;\r\n\r\n        if(pow%2==0){\r\n            return solve((val*val)%mod,pow/2)%mod;\r\n        }\r\n        else\r\n            return (val*solve((val*val)%mod,pow/2))%mod;\r\n\r\n    }\r\n    int countGoodNumbers(long long n) {\r\n        // even means 5 options\r\n        // odd means 4 option\r\n\r\n        long long pow = n/2; // calculate no of times 5*4 means 20 occurs\r\n\r\n        long long ans = solve(20,pow); // calculate power(20,pow)\r\n\r\n        if(n%2==0){ // if n is even then 5 and 4 occur same no of time n/2\r\n            return ans;\r\n        }\r\n        return ((5*ans) % mod); // if n is odd then 5 occurs n/2+1 times means one extra times so return ans*5 and don't forgot to mod\r\n    }\r\n};",
    "python": "class Solution:\r\n    def countGoodNumbers(self, n: int) -> int:\r\n        ans = 1\r\n        rem = n % 2\r\n        n -= rem\r\n        ans = pow(20, n//2, 10**9 + 7)\r\n        if rem == 1:\r\n            ans *= 5\r\n        return ans % (10**9 + 7)",
    "java": "class Solution {\r\n    int mod=(int)1e9+7;\r\n    public int countGoodNumbers(long n) {\r\n        long first=(n%2==0?(n/2):(n/2)+1);//deciding n/2 or n/2+1 depending on n is even or odd\r\n        long second=n/2;//second power would be n/2 only irrespective of even or odd\r\n        long mul1=power(5,first)%mod;//5 power n/2\r\n        long mul2=power(4,second)%mod;//4 power n/2\r\n        long ans=1;\r\n        ans=(ans*mul1)%mod;//computing total product\r\n        ans=(second!=0)?(ans*mul2)%mod:ans;//computing total product\r\n        return (int)(ans%mod);\r\n    }\r\n    public long power(long x,long y){// this method computes pow(x,y) in O(logn) using divide & conquer\r\n        long temp;\r\n        if(y==0) return 1;//base case (x power 0 = 1)\r\n        temp=power(x,y/2);//computing power for pow(x,y/2) -> divide & conquer step\r\n        if(y%2==0) return (temp*temp)%mod; //using that result of subproblem (2 power 2 = 2 power 1 * 2 power 1)\r\n        else return (x*temp*temp)%mod;//using that result of subproblem (2 power 3 = 2 power 1 * 2 power 1 * 2)\r\n\t\t// if y is odd, x power y = x power y/2 * x power y/2 * x\r\n\t\t// if y is even, x power y = x power y/2 * x power y/2\r\n    }\r\n}",
    "javascript": "// Runtime: 120 ms (Top 15.79%) | Memory: 44.1 MB (Top 31.58%)\r\n\r\nclass Math1 {\r\n\r\n    // https://en.wikipedia.org/wiki/Modular_exponentiation\r\n    static modular_pow(base, exponent, modulus) {\r\n        if (modulus === 1n)\r\n            return 0n\r\n        let result = 1n\r\n        base = base % modulus\r\n        while (exponent > 0n) {\r\n            if (exponent % 2n == 1n)\r\n                result = (result * base) % modulus\r\n            exponent = exponent >> 1n\r\n            base = (base * base) % modulus\r\n        }\r\n        return result\r\n    }\r\n\r\n}\r\n\r\nvar countGoodNumbers = function(n) {\r\n    // NOTE: 0n, 1n, 2n, 3n, 4n, 5n are numbers in BigInt\r\n\r\n    n = BigInt(n); // convert to BigInt, to avoid no rounding issues\r\n\r\n    const odds = n / 2n,\r\n        evens = n - odds,\r\n        MOD = BigInt(Math.pow(10, 9) + 7)\r\n\r\n    // from wikipedia\r\n    return (Math1.modular_pow(4n, odds, MOD) * Math1.modular_pow(5n, evens, MOD)) % MOD;\r\n};"
  }
}
