export default {
  "id": 1137,
  "name": "N-th Tribonacci Number",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/n-th-tribonacci-number",
  "relativeDir": "N/N-th Tribonacci Number",
  "slug": "1137-n-th-tribonacci-number",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 21,
    "java": 23,
    "python": 9,
    "javascript": 28
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int tribonacci(int n) {\r\n        if(n<2)\r\n            return n;\r\n        \r\n        int prev3 = 0;\r\n        int prev2 = 1;\r\n        int prev1 = 1;\r\n        \r\n        for(int i = 3; i<= n ; i++)\r\n        {\r\n            int ans  = prev1+ prev2+prev3;\r\n            prev3 = prev2;\r\n            prev2 = prev1;\r\n            prev1 = ans;\r\n        }\r\n        \r\n        return prev1;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def tribonacci(self, n: int, q={}) -> int:\r\n        if n<3:\r\n            q[0]=0 #Initialize first 3 values \r\n            q[1]=1\r\n            q[2]=1\r\n        if n not in q:  #Have faith that last 3 calls will give the answer :)\r\n            q[n]=self.tribonacci(n-1,q)+self.tribonacci(n-2,q)+self.tribonacci(n-3,q)\r\n        return q[n]",
    "java": "// Runtime: 0 ms (Top 100.00%) | Memory: 40.8 MB (Top 58.23%)\r\nclass Solution {\r\n    public int tribonacci(int n) {\r\n        if(n==0)\r\n            return 0;\r\n        if(n==1)\r\n            return 1;\r\n        if(n==2)\r\n            return 1;\r\n        int p1=1;\r\n        int p2=1;\r\n        int p3=0;\r\n        int cur=0;\r\n        for(int i=3;i<=n;i++)\r\n        {\r\n            cur=p1+p2+p3;\r\n            p3=p2;\r\n            p2=p1;\r\n            p1=cur;\r\n        }\r\n        return cur;\r\n    }\r\n}",
    "javascript": "// Recursive and Memoiztion approach\r\nvar tribonacci = function(n, cache = {}) {\r\n    if(n in cache) return cache[n]\r\n\r\n    //Start of Base Cases\r\n    if(n == 0) return 0\r\n    if (n == 1 || n == 2) return 1;\r\n    // End Of Base Cases\r\n    \r\n    // Caching the result\r\n    cache[n] = tribonacci(n - 1, cache) + tribonacci(n - 2, cache) + tribonacci(n - 3, cache);\r\n    \r\n    return cache[n]; \r\n};\r\n\r\n// Tabulation Approach\r\nvar tribonacci = function(n) {\r\n    // Create the Table;\r\n    const table = Array(n + 1).fill(0);\r\n    table[1] = 1;\r\n    for(let i =0;i<=n;i++){\r\n        //Iterate over the table and increase the values respectively\r\n        table[i+1] += table[i]\r\n        table[i+2] += table[i]\r\n        table[i+3] += table[i]\r\n    }\r\n    return table[n]\r\n};"
  }
}
