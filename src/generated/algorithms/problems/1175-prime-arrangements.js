export default {
  "id": 1175,
  "name": "Prime Arrangements",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/prime-arrangements",
  "relativeDir": "P/Prime Arrangements",
  "slug": "1175-prime-arrangements",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 25,
    "java": 47,
    "python": 13,
    "javascript": 48
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool isPrime(int x) {\r\n        if(x <= 3) return x > 1;\r\n        if(x % 2 == 0) return false;\r\n        \r\n        for(int i = 3; i <= sqrt(x); i += 2) {\r\n            if(x % i == 0) return false;\r\n        }\r\n        return true;\r\n    }\r\n    \r\n    int fact(int x) {\r\n        if(x <= 1) return 1;\r\n        return ((long long)(x) * fact(x - 1)) % 1000000007;\r\n    }\r\n    \r\n    int numPrimeArrangements(int n) {\r\n        int c = 0;\r\n        for(int i = 1; i <= n; ++i) {\r\n            c += isPrime(i);\r\n        }\r\n        return ((long long)(fact(n - c)) * fact(c)) % 1000000007;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def numPrimeArrangements(self, n: int) -> int:\r\n        primes = set()\r\n        for i in range(2,n+1):\r\n            if all(i%p != 0 for p in primes):\r\n                primes.add(i)\r\n        M = 10**9 + 7\r\n        def fact(k):\r\n            res = 1\r\n            for i in range(2,k+1):\r\n                res = (res*i)%M\r\n            return res\r\n        return fact(len(primes))*fact(n-len(primes))%M",
    "java": "class Solution {\r\n     long mod = (long)(1e9+7);\r\n    public int numPrimeArrangements(int n) {\r\n        if(n==1){\r\n            return 1;\r\n        }\r\n     \r\n        boolean[] arr = new boolean[n+1];\r\n        Arrays.fill(arr,true);\r\n        arr[0]=false;\r\n        arr[1]=false;\r\n        \r\n        for(int i=2;i<=Math.sqrt(n);i++){\r\n            \r\n            for(int j=i*i;j<=n;j+=i){\r\n                if(arr[i]==false){\r\n                    continue;\r\n                }\r\n                arr[j]=false;\r\n            }\r\n            \r\n        }\r\n       long prime = 0;\r\n        long notPrime=0;\r\n        for(int k=1;k<arr.length;k++){\r\n            if(arr[k]==true){\r\n                prime++;\r\n            }\r\n            else{\r\n                notPrime++;\r\n            }\r\n        }\r\n\r\n       long x = factorial(prime)%mod;\r\n       long y = factorial(notPrime)%mod;\r\n       long t = (x*y)%mod;\r\n        return (int)t ;\r\n        \r\n    }\r\n \r\n    public long factorial(long i){\r\n        if(i<=1){\r\n            return i;\r\n        }\r\n        return (i*(factorial(i-1)%mod))%mod;\r\n    }\r\n}",
    "javascript": "// Runtime: 80 ms (Top 70.37%) | Memory: 46.7 MB (Top 14.81%)\r\n\r\n/**\r\n * @param {number} n\r\n * @return {number}\r\n */\r\n\r\nvar findNoOfPrimes = function(n){\r\n    let isPrime = new Array(n+1).fill(true);\r\n\r\n    let count =0;\r\n\r\n    for(let i=2; i<n;i++){\r\n        for(let j=i;j<=n;j++){\r\n            isPrime[j*i]= false;\r\n        }\r\n    }\r\n\r\n    isPrime.forEach(prime=> {\r\n        if(prime){\r\n            count++\r\n        }\r\n    })\r\n\r\n    return count-2;\r\n}\r\n\r\nvar factorial = function(num){\r\n    let modulo = Math.pow(10,9) +7;\r\n\r\n    if(num<=0)\r\n        return 1;\r\n\r\n    return (BigInt(num) * BigInt(factorial(num-1)))%BigInt(modulo) ;\r\n}\r\n\r\nvar numPrimeArrangements = function(n) {\r\n\r\n    let modulo = BigInt(Math.pow(10,9) +7);\r\n\r\n    let count = findNoOfPrimes(n);\r\n\r\n    let factorialPrime = factorial(count);\r\n\r\n    let factorialComposite = factorial(n-count);\r\n\r\n    return (BigInt(factorialPrime)*BigInt(factorialComposite))% (modulo);\r\n};"
  }
}
