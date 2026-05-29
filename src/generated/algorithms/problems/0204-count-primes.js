export default {
  "id": 204,
  "name": "Count Primes",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/count-primes",
  "relativeDir": "C/Count Primes",
  "slug": "0204-count-primes",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 20,
    "java": 14,
    "python": 18,
    "javascript": 29
  },
  "languages": {
    "cpp": "// Runtime: 258 ms (Top 70.76%) | Memory: 10.2 MB (Top 70.25%)\r\nclass Solution {\r\npublic:\r\n    int countPrimes(int n) {\r\n        if(n == 0 || n == 1) return 0;\r\n        vector<bool>prime(n,true);\r\n        for(int i = 2; i*i < n; i++){\r\n            if(prime[i]){\r\n                for(int j = i*i; j < n; j += i){\r\n                    prime[j] = false;\r\n                }\r\n            }\r\n        }\r\n        int cnt = 0;\r\n        for(int i = 2; i < n; i++){\r\n            if(prime[i]) cnt++;\r\n        }\r\n        return cnt;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def countPrimes(self, n: int) -> int:\r\n        # Prerequisite:\r\n        # What is prime number. What are they just the starting. \r\n        \r\n        truth = [True]*n # making a list of lenght n. And keep all the values as True.\r\n        if n<2: # as 0 & 1 are not prime numbers. \r\n            return 0\r\n        truth[0], truth[1] = False, False #as we added True in the truth list. So will make false for ) & 1 as they are not prime numbers.\r\n        \r\n        i=2 # As we know 0 & 1 are not prime.\r\n        while i*i<n: # why we are doing it as i*i here is bcz lets say 5*2 = 10 is divisble by 2 as well as 5 so if 10 is already removed why to traverse a value which is already travered once. so in case of n=5 - 5<5. CONCLUSION : i<sqrt(n)\r\n#why we are running the loop till n is bcz question says \" prime numbers that are strictly less than n\".\r\n            if truth[i] == True:\r\n                for j in range(i*i,n,i): # if we have mutiple of a number in the range of n, we have to remove them as they can be prime. i.e 2 is prime, but its multiple in n = 10 are 4,6,8 they cant be prime. So we will make them false(means not a prime).\r\n                    truth[j]=False\r\n            i += 1 # increasing our iterator.\r\n        return truth.count(True) # will count true value",
    "java": "class Solution {\r\n    public int countPrimes(int n) {\r\n      boolean check[]=new boolean[n];int count=0;\r\n        for(int i=2;i<n;i++){\r\n            if(check[i]==false){\r\n                count++;\r\n                for(int j=i;j<n;j+=i){\r\n                    check[j]=true;\r\n                }\r\n            }\r\n        }\r\n        return count;\r\n    }\r\n}",
    "javascript": "// Runtime: 439 ms (Top 90.04%) | Memory: 82.1 MB (Top 91.87%)\r\nfunction makeSieve(n) {\r\n    let arr = new Array(n+1)\r\n    arr[0] = false;\r\n    arr[1] = false;\r\n    arr.fill(true,2,arr.length);\r\n\r\n    for( let i = 2; i*i<n; i++) {\r\n        if(arr[i] === true) {\r\n            for( let j = i*i ; j<=n ;j+=i){\r\n                arr[j] = false;\r\n            }\r\n        }\r\n    }\r\n\r\n    let count = 0;\r\n\r\n    for(let i = 0; i<n;i++) {\r\n        if(arr[i] == true) {\r\n            count++;\r\n        }\r\n    }\r\n    return count;\r\n}\r\n\r\nvar countPrimes = function(n) {\r\n    let numberOfPrimes = makeSieve(n)\r\n    return numberOfPrimes;\r\n};"
  }
}
