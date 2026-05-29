export default {
  "id": 313,
  "name": "Super Ugly Number",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/super-ugly-number",
  "relativeDir": "S/Super Ugly Number",
  "slug": "0313-super-ugly-number",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 40,
    "java": 83,
    "python": 12,
    "javascript": 16
  },
  "languages": {
    "cpp": "// Runtime: 180 ms (Top 85.31%) | Memory: 8.80 MB (Top 96.24%)\r\n\r\n// Finds the nth super ugly number given a list of prime numbers.\r\n\r\nclass Solution {\r\npublic:\r\n    int nthSuperUglyNumber(int n, vector<int>& primes) {\r\n        if (n == 1)\r\n            return 1;\r\n\r\n        int numPrimes = primes.size();  // Number of prime numbers\r\n        vector<int> primeIndices(numPrimes, 0);  // Indices to track prime number multiples\r\n\r\n        int superUgly[n];  // Array to store super ugly numbers\r\n        // memset(superUgly, 0, sizeof(superUgly));  // Initialize the array (commented out since it's unnecessary)\r\n        superUgly[0] = 1;  // First super ugly number is always 1\r\n\r\n        for (int i = 1; i < n; i++) {\r\n            long minVal = INT_MAX;  // Minimum value among the prime number multiples\r\n\r\n            // Find the minimum value among the prime number multiples\r\n            for (int j = 0; j < numPrimes; j++) {\r\n                minVal = min(minVal, (long)primes[j] * superUgly[primeIndices[j]]);\r\n            }\r\n\r\n            superUgly[i] = (int)minVal;  // Store the minimum value as the next super ugly number\r\n\r\n            // Increment the indices for prime number multiples that contribute to the minimum value\r\n            for (int j = 0; j < numPrimes; j++) {\r\n                if (minVal == (long)primes[j] * superUgly[primeIndices[j]]) {\r\n                    primeIndices[j]++;\r\n                }\r\n            }\r\n\r\n            // cout<<superUgly[i]<<\",\";  // Print the current super ugly number (commented out for clarity)\r\n        }\r\n\r\n        return superUgly[n - 1];  // Return the nth super ugly number\r\n    }\r\n};",
    "python": "class Solution:\r\ndef nthSuperUglyNumber(self, n: int, primes: List[int]) -> int:\r\n    prime_nums = len(primes)\r\n    index = [1]*prime_nums\r\n    ret = [1]*(n+1)\r\n    for i in range(2,n+1):\r\n        ret[i] = min(primes[j]*ret[index[j]] for j in range(prime_nums))\r\n        for k in range(prime_nums):\r\n            if ret[i] == primes[k]*ret[index[k]]:\r\n                index[k]+= 1\r\n    \r\n    return ret[-1]",
    "java": "//---------------------O(nlogk)-------------------------\r\n\r\nclass Solution {\r\n    public int nthSuperUglyNumber(int n, int[] primes) {\r\n        int []dp=new int[n+1];\r\n        dp[1]=1;\r\n        \r\n        PriorityQueue<Pair> pq=new PriorityQueue<>();\r\n        \r\n        for(int i=0;i<primes.length;i++){\r\n            pq.add(new Pair(primes[i],1,primes[i]));\r\n        }\r\n        \r\n        for(int i=2;i<=n;){\r\n            Pair curr=pq.remove();\r\n            \r\n            if(curr.val!=dp[i-1]){\r\n                dp[i]=curr.val;\r\n                i++;\r\n            }\r\n            \r\n            int newval=curr.prime*dp[curr.ptr+1];\r\n            if(newval>0){\r\n                pq.add(new Pair(curr.prime, curr.ptr+1,newval));\r\n            }\r\n        }\r\n        \r\n        return dp[n];\r\n    }\r\n}\r\n\r\nclass Pair implements Comparable<Pair>{\r\n    int prime;\r\n    int ptr;\r\n    int val;\r\n    \r\n    public Pair(int prime, int ptr, int val){\r\n        this.prime=prime;\r\n        this.ptr=ptr;\r\n        this.val=val;\r\n    }\r\n    \r\n    public int compareTo(Pair o){\r\n        return this.val-o.val;\r\n    }\r\n}\r\n\r\n//-----------------------O(nk)---------------------------\r\n\r\n// class Solution {\r\n//     public int nthSuperUglyNumber(int n, int[] primes) {\r\n//         int []dp=new int[n+1];\r\n//         dp[1]=1;\r\n        \r\n//         int []ptr=new int[primes.length];\r\n        \r\n//         Arrays.fill(ptr,1);\r\n        \r\n//         for(int i=2;i<=n;i++){\r\n            \r\n//             int min=Integer.MAX_VALUE;\r\n            \r\n//             for(int j=0;j<ptr.length;j++){\r\n//                 int val=dp[ptr[j]]*primes[j];\r\n//                 if(val>0){\r\n//                     min=Math.min(min,val);\r\n//                 }\r\n                \r\n//             }\r\n            \r\n//             dp[i]=min;\r\n            \r\n//             for(int j=0;j<ptr.length;j++){\r\n//                 int val=dp[ptr[j]]*primes[j];\r\n//                 if(val>0 && min==val){\r\n//                     ptr[j]++;\r\n//                 }\r\n//             }\r\n//         }\r\n        \r\n//         return dp[n];\r\n//     }\r\n// }",
    "javascript": "var nthSuperUglyNumber = function(n, primes) {\r\n    const table = Array(primes.length).fill(0);\r\n    const res = Array(n);\r\n    res[0] = 1;\r\n    for(let j=1;j<n;j++){\r\n        let curr = Infinity;\r\n        for (let i=0;i< table.length; i++) {\r\n            curr = Math.min(curr, res[table[i]]*primes[i]);\r\n        }\r\n        for (let i=0;i< table.length; i++) {\r\n            if (curr === res[table[i]]*primes[i]) table[i]++;\r\n        }\r\n        res[j] = curr;\r\n    }\r\n    return res[n-1];\r\n};"
  }
}
