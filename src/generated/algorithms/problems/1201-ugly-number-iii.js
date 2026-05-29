export default {
  "id": 1201,
  "name": "Ugly Number III",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/ugly-number-iii",
  "relativeDir": "U/Ugly Number III",
  "slug": "1201-ugly-number-iii",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 67,
    "java": 29,
    "python": 11
  },
  "languages": {
    "cpp": "// Runtime: 5 ms (Top 15.48%) | Memory: 5.9 MB (Top 26.64%)\r\n// This is a typical Binary Search Problem Here I did Binary Search and Optimized my lcm function a lot.\r\n// Here Number of Ugly numbers for any number is\r\n// that number/a + that number/b + that number/c + that number/lcm(a,b,c) - that number/lcm(a,b) - that number/lcm(b,c) - that number/(a,c) and howzz that??\r\n// See Lets suppose that number is 17 for which you are checking values and a = 2 , b=3 and c= 4 now figure out\r\n// all the possible values for a = 2,4,6,8,10,12,14,16\r\n// b = 3,6,9,12,15\r\n// c = 4,8,12,16\r\n// Now if we add them all we can see 4,6,8,16 are coming twice and 12 is coming thrice so we do lcm(2,3) = 6\r\n// then we are basically multiple occurance of numbers divisible by 6 simlarly for lcm(2,4) & lcm(3,4)\r\n// but any number which is divisble by all three of them we have deleted it 3 times we need at least so we are adding numbers which are divisble by lcm(2,3,4) which is 12 here So if suppose we are countering more numbers than n then h = mid-1 we need to move backward else we need to forward.\r\nclass Solution {\r\npublic:\r\n    #define ll long long\r\n     ll gcd(ll a, ll b)\r\n     {\r\n       if (b == 0)\r\n        return a;\r\n      return gcd(b, a % b);\r\n      }\r\n      ll lcm(ll a, ll b)\r\n     {\r\n         return (a / gcd(a, b)) * b;\r\n     }\r\n    bool check(ll mid , int a , int b , int c, int n)\r\n    {\r\n        ll j1 = lcm(a,b);\r\n        ll j2 = lcm(a,c);\r\n        ll j3 = lcm(b,c);\r\n        ll j4 = lcm(j1,c);\r\n        ll k = mid/a + mid/b + mid/c + mid/j4 - (mid/j1 + mid/j2 + mid/j3);\r\n        return k==n;\r\n    }\r\n    bool check1(ll mid , int a , int b , int c, int n)\r\n    {\r\n        ll j1 = lcm(a,b);\r\n        ll j2 = lcm(a,c);\r\n        ll j3 = lcm(b,c);\r\n        ll j4 = lcm(j1,c);\r\n        ll k = mid/a + mid/b + mid/c + mid/j4 - (mid/j1 + mid/j2 + mid/j3);\r\n        return k>=n;\r\n    }\r\n    int nthUglyNumber(int n, int a, int b, int c) {\r\n        ll l = min(a,min(b,c));\r\n        ll h = INT_MAX;\r\n        while(l<=h)\r\n        {\r\n             ll mid = l + (h-l)/2;\r\n             if(check(mid,a,b,c,n) && (mid%a==0 || mid%b==0 || mid%c==0))\r\n             {\r\n                 return mid;\r\n             }\r\n             else\r\n             {\r\n                 if(check1(mid,a,b,c,n))\r\n                 {\r\n                     h = mid-1;\r\n                 }\r\n                 else\r\n                 {\r\n                     l = mid+1;\r\n                 }\r\n             }\r\n        }\r\n        return 1;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def nthUglyNumber(self, n: int, a: int, b: int, c: int) -> int:\r\n        times = [1,1,1]\r\n        smallest = inf\r\n        while n != 0:\r\n            smallest = min ( times[0]*a,times[1]*b,times[2]*c)\r\n            if times[0]*a == smallest: times[0] += 1\r\n            if times[1]*b == smallest: times[1] += 1\r\n            if times[2]*c == smallest: times[2] += 1\r\n            n -= 1\r\n        return smallest",
    "java": "// Runtime: 0 ms (Top 100.0%) | Memory: 40.60 MB (Top 12.2%)\r\n\r\nclass Solution {\r\n    public int nthUglyNumber(int n, int a, int b, int c) {\r\n        int left = 1;\r\n        int right = Integer.MAX_VALUE;\r\n        int count = 0;\r\n        while (left < right) {\r\n            int middle = left + (right - left) / 2;\r\n            if (isUgly(middle, a, b, c, n)) {\r\n                right = middle;\r\n            }\r\n            else\r\n                left = middle + 1;\r\n        }\r\n        return left;\r\n    }\r\n    public boolean isUgly(long middle, long a, long b, long c, long n) {\r\n        return (int) (middle/a + middle/b + middle/c - middle/lcm(a, b) - middle/lcm(b, c) - middle/lcm(c, a) + middle/lcm(a, lcm(b, c))) >= n;\r\n    }\r\n    public long gcd(long a, long b) {\r\n        if (a == 0)\r\n            return b;\r\n        else return gcd(b%a, a);\r\n    }\r\n    public long lcm(long a, long b) {\r\n        return a * b / (gcd(a, b)); \r\n    }\r\n}"
  }
}
