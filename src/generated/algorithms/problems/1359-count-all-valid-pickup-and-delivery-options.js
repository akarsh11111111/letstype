export default {
  "id": 1359,
  "name": "Count All Valid Pickup and Delivery Options",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/count-all-valid-pickup-and-delivery-options",
  "relativeDir": "C/Count All Valid Pickup and Delivery Options",
  "slug": "1359-count-all-valid-pickup-and-delivery-options",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 15,
    "java": 12,
    "python": 8,
    "javascript": 9
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.00%) | Memory: 6 MB (Top 50.88%)\r\n\r\nclass Solution {\r\npublic:\r\n    int countOrders(int n) {\r\n        int mod = 1e9+7;\r\n        long long ans = 1;\r\n        for(int i=1;i<=n;i++){\r\n            int m = 2*i-1;\r\n            int p = (m*(m+1))/2;\r\n            ans=(ans*p)%mod;\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def countOrders(self, n: int) -> int:\r\n        total = 1\r\n        mod = 10 ** 9 + 7\r\n        for k in reversed(range(2, n + 1)):\r\n            total = total * ((2 * k - 1) * (2 * k - 2) // 2 + 2 * k - 1)\r\n            total = total % mod\r\n        return total",
    "java": "// Runtime: 0 ms (Top 100.0%) | Memory: 39.05 MB (Top 80.3%)\r\n\r\nclass Solution {\r\n    public int countOrders(int n) {\r\n        long res = 1;\r\n        long mod = 1000000007;\r\n        for (int i = 1; i <= n; i++) {\r\n            res = res * (2 * i - 1) * i % mod;\r\n        }\r\n        return (int)res;\r\n    }\r\n}",
    "javascript": "var countOrders = function(n) {\r\n    let ans = 1; //for n=1, there will only be one valid pickup and delivery\r\n    for(let i = 2; i<=n; i++){\r\n        let validSlots = 2 * i -1; //calculating number of valid slots of new pickup in (n-1)th order\r\n        validSlots =  (validSlots * (validSlots+1))/2; \r\n        ans = (ans * validSlots)%1000000007; //multiplying the ans of (n-1)th order to current order's valid slots\r\n    }\r\n    return ans;\r\n};"
  }
}
