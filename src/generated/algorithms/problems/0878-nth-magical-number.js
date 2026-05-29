export default {
  "id": 878,
  "name": "Nth Magical Number",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/nth-magical-number",
  "relativeDir": "N/Nth Magical Number",
  "slug": "0878-nth-magical-number",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 71,
    "java": 47,
    "python": 16,
    "javascript": 40
  },
  "languages": {
    "cpp": "class Solution \r\n{\r\npublic:\r\n    \r\n    int lcm(int a, int b)                   // Finding the LCM of a and b\r\n    {\r\n        if(a==b)\r\n            return a;\r\n        if(a > b)\r\n        {\r\n            int count = 1;\r\n            while(true)\r\n            {\r\n                if((a*count)%b==0)\r\n                    return a*count;\r\n                count++;\r\n            }\r\n        }\r\n        int count = 1;\r\n        while(true)\r\n        {\r\n            if((b*count)%a==0)\r\n                return b*count;\r\n            count++;\r\n        }\r\n        return -1;      // garbage value--ignore.\r\n    }\r\n    \r\n    int nthMagicalNumber(int n, int a, int b) \r\n    {\r\n        long long int comm = lcm(a,b);                       //common element\r\n        long long int first = (((comm*2) - comm) / a) - 1;   //no. of elements appearing before the comm multiples (a).\r\n        long long int second = (((comm*2) - comm) / b) - 1;  //no. of elements appearing before the comm multiples(b).\r\n    \r\n        long long int landmark = (n / (first + second + 1)) * comm; // last common element before nth number.\r\n        long long int offset = n % (first + second + 1);            // how many numbers to consider after last common\r\n        \r\n        long long int p = landmark, q = landmark;   // initialisations to find the offset from the landmarked element\r\n        long long int ans = landmark;\r\n        for(int i=1;i<=offset;i++)  // forwarding offset number of times.\r\n        {\r\n            if(p+a < q+b)           //this logic easily takes care of which elements to be considered for the current iteration. \r\n            {\r\n                ans = p+a;\r\n                p = p+a;\r\n            }\r\n            else\r\n            {\r\n                ans = q+b;\r\n                q = q+b;\r\n            }\r\n        }\r\n        \r\n        return (ans%1000000007);    //returning the answer.\r\n    }\r\n};\r\n\r\n/*\r\n    a and b\r\n    1st step would be to find the LCM of the two numbers --> Multiples of LCM would be the common numbers in the sequential pattern.\r\n    The next step would be to find the numbers of a and numbers of b appearing between the common number.\r\n    \r\n\tDRY : \r\n\t\r\n    4 and 6\r\n    4 -> 4 8 12 16 20 24 28 32 36 40   -->  \r\n    6 -> 6 12 18 24 30 36 42 48 54 60  -->\r\n    \r\n    4 6 8    12     16 18 20        24 --> n/(f + s) --->  23/4 = 5 and 3\r\n    5th -----> (comm * 5 = 60) ------>\r\n*/",
    "python": "# Runtime: 24 ms (Top 100.0%) | Memory: 16.28 MB (Top 81.4%)\r\n\r\nclass Solution:\r\n    def nthMagicalNumber(self, N: int, A: int, B: int) -> int:\r\n        import math\r\n        lcm= A*B // math.gcd(A,B)\r\n        l,r=2,10**14\r\n        while l<=r:\r\n            mid=(l+r)//2\r\n            n = mid//A+mid//B-mid//lcm\r\n            if n>=N:\r\n                r=mid-1\r\n           \r\n            else:\r\n                l=mid+1\r\n        return l%(10**9+7)",
    "java": "// Runtime: 1 ms (Top 60.59%) | Memory: 40.8 MB (Top 59.85%)\r\nclass Solution {\r\npublic int nthMagicalNumber(int n, int a, int b) {\r\n    long N=(long)n;\r\n    long A=(long)a;\r\n    long B=(long)b;\r\n    long mod=1000000007;\r\n    long min=Math.min(A,B);\r\n    long low=min;\r\n    long high=min*N;\r\n    long ans=0;\r\n    while(low<=high)\r\n    {\r\n        long mid=(high-low)/2+low;\r\n        long x=mid/A+mid/B-mid/lcm(A,B);\r\n        if(x>=N)\r\n        {\r\n            ans=mid;\r\n            high=mid-1;\r\n        }\r\n        else if(x<N)\r\n        {\r\n            low=mid+1;\r\n        }\r\n        else{\r\n            high=mid-1;\r\n        }\r\n    }\r\n\r\n    ans=ans%mod;\r\n    return (int)ans;\r\n}\r\n\r\nlong lcm(long a,long b)\r\n{\r\n    long tmpA=a;\r\n    long tmpB=b;\r\n    while(a>0)\r\n    {\r\n        long temp=a;\r\n        a=b%a;\r\n        b=temp;\r\n    }\r\n\r\n    return tmpA*tmpB/b;\r\n}\r\n}",
    "javascript": "// Runtime: 46 ms (Top 97.37%) | Memory: 42.00 MB (Top 86.84%)\r\n\r\n/**\r\n * @param {number} N\r\n * @param {number} A\r\n * @param {number} B\r\n * @return {number}\r\n */\r\nvar nthMagicalNumber = function(N, A, B) {\r\n    var temp;\r\n    if(B > A){\r\n        temp = A;\r\n        A = B;\r\n        B = temp;\r\n    }\r\n    //A is bigger\r\n    \r\n    var shareFreq = ((A+B)/GCD(A,B))-1;\r\n    var numShares = Math.floor(N/shareFreq);\r\n    var superN = N + numShares;\r\n    \r\n    //X+Y = superN\r\n    \r\n    var X = Math.ceil(superN*B/(A+B));\r\n    var Y = Math.ceil(superN-(superN*B/(A+B)));\r\n    \r\n    var mod = (10**9)+7;\r\n    \r\n    if(X*A <= Y*B)return (X*A)%mod;\r\n    else return (Y*B)%mod;\r\n};\r\n\r\nvar GCD = function(x,y){\r\n    while(y!=0){\r\n        var t = y;\r\n        y = x % y;\r\n        x = t;\r\n    }\r\n    return x;\r\n}"
  }
}
