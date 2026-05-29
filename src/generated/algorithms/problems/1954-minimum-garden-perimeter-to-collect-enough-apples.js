export default {
  "id": 1954,
  "name": "Minimum Garden Perimeter to Collect Enough Apples",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-garden-perimeter-to-collect-enough-apples",
  "relativeDir": "M/Minimum Garden Perimeter to Collect Enough Apples",
  "slug": "1954-minimum-garden-perimeter-to-collect-enough-apples",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 13,
    "java": 11,
    "python": 28,
    "javascript": 28
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    long long minimumPerimeter(long long neededApples) {\r\n        long long i = 0;\r\n        long long x = 0;\r\n \r\n        while(x < neededApples){   \r\n            x += (long long) 12*pow(i,2); \r\n            ++i;\r\n        }\r\n        return (long long) (i-1)*8;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def minimumPerimeter(self, nap: int) -> int:\r\n        \r\n        \r\n#         here for n = 2 , there are two series :  \r\n#         (1) Diagnal points for n=3 , diagnal apples = 2*n = 6\r\n#         (2) there is series =   2,3,3 =  2+ (sigma(3)-sigma(2))*2\r\n        \r\n#         how to solve:\r\n            \r\n#             here 3  =  sigma(n+(n-1))-sigma(n) = sigma(2*n-1)-sigma(n) =  0.5*2n*(2n-1)-0.5*n*n-1\r\n#         (3) so our final 2,3,3 =   3*2+2 =   (0.5*2n*(2n-1)-0.5*n*n-1)*2+n\r\n#         (4) so final 2,3,3 =  3*n*n - 2*n\r\n#         (5) we have 4 times repitation of (2,3,3)  = 4*(2,3,3)  =   4*(3*n*n - 2*n)   =  12*n*n - 8*n\r\n#         (6) we have 4 diagnal points so their sum(4 diagnal)  = 4*(2*n)\r\n#         (7)  so final sum(total) = 4 diagnal sum + 4(2,3,3)    =   4(2*n)   + 12*n*n - 8*n    =  12*n*n\r\n        \r\n#         so at nth distance we have total  12*n*n  apples at the circumfrance\r\n        \r\n#         so net sum =  sigma(12*n*n)  = 2*n*(n+1)*(2*n+1)\r\n        \r\n        \r\n        n=1\r\n        val=2*n*(n+1)*(2*n+1)\r\n        while(val<nap):\r\n            n+=1\r\n            val=val=2*n*(n+1)*(2*n+1)\r\n        return n*8",
    "java": "class Solution {\r\n    public long minimumPerimeter(long neededApples) {\r\n        long n = 0;\r\n        long count = 0;\r\n        while(count < neededApples) {\r\n            n++;\r\n            count += (12 * n * n);\r\n        }\r\n        return n * 8;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number} neededApples\r\n * @return {number}\r\n */\r\nvar minimumPerimeter = function(neededApples) {\r\n    \r\n    \r\n    let start = 2, n = 1, dp = [0];\r\n    \r\n    while(true){\r\n        let cur = start, res = dp[n-1];\r\n\t\t\r\n\t\t//Add the X and Y axis apples multiplied with 4 \r\n        res += (cur + cur - n)*4;\r\n        \r\n\t\t// Add the interior apples using and AP formula of  ( n - 1 ) / 2 * (2a + ( n-1 ) * d ) & multiplying it by 8 as count is 8  \r\n        res += ( ((n-1)/2) *  ( ( 2 * (cur - 1) ) + ( (n-2) * -1 ) )  ) * 8\r\n        \r\n\t\t//Setting the result to DP\r\n        dp[n] = res;\r\n\t\t\r\n\t\t//If current state is greater than or equal to needed then return the perimeter\r\n        if(neededApples <= res) return 8*n;\r\n        n++;\r\n        start +=2;\r\n        \r\n    }\r\n};"
  }
}
