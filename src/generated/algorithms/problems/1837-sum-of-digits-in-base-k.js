export default {
  "id": 1837,
  "name": "Sum of Digits in Base K",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/sum-of-digits-in-base-k",
  "relativeDir": "S/Sum of Digits in Base K",
  "slug": "1837-sum-of-digits-in-base-k",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 9,
    "java": 9,
    "python": 9,
    "javascript": 9
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.00%) | Memory: 5.8 MB (Top 72.89%)\r\nclass Solution {\r\npublic:\r\n    int sumBase(int n, int k) {\r\n        int sum=0;\r\n        while(n!=0) sum+=n%k,n=n/k;\r\n        return sum;\r\n    }\r\n};",
    "python": "# Runtime: 40 ms (Top 73.88%) | Memory: 13.8 MB (Top 97.86%)\r\nclass Solution:\r\n    def sumBase(self, n: int, k: int) -> int:\r\n        cnt = 0\r\n        while n:\r\n            cnt += (n % k)\r\n            n //= k\r\n        print(cnt)\r\n        return cnt",
    "java": "// Runtime: 0 ms (Top 100.00%) | Memory: 41.2 MB (Top 20.16%)\r\nclass Solution {\r\n    public int sumBase(int n, int k) {\r\n        int res = 0;\r\n        for (; n > 0; n /= k)\r\n            res += n % k;\r\n        return res;\r\n    }\r\n}",
    "javascript": "// Runtime: 88 ms (Top 54.97%) | Memory: 42.1 MB (Top 16.56%)\r\n/**\r\n * @param {number} n\r\n * @param {number} k\r\n * @return {number}\r\n */\r\nvar sumBase = function(n, k) {\r\n    return n.toString(k).split(\"\").reduce((acc, cur) => +acc + +cur)\r\n};"
  }
}
