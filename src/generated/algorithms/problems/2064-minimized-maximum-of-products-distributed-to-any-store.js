export default {
  "id": 2064,
  "name": "Minimized Maximum of Products Distributed to Any Store",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimized-maximum-of-products-distributed-to-any-store",
  "relativeDir": "M/Minimized Maximum of Products Distributed to Any Store",
  "slug": "2064-minimized-maximum-of-products-distributed-to-any-store",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 19,
    "java": 39,
    "python": 13,
    "javascript": 44
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n  bool func(int N, int n, vector<int>& quantities){\r\n    int temp = 0;\r\n    for(int id = 0; temp <= n && id != quantities.size(); id++)\r\n      temp += quantities[id] / N + (quantities[id] % N ? 1 : 0);\r\n    \r\n    return temp <= n;\r\n  }\r\n  \r\n  int minimizedMaximum(int n, vector<int>& quantities) {\r\n    int l = 1, r = *max_element(quantities.begin(), quantities.end());\r\n    \r\n    for(int m = (l + r)>>1; l <= r; m = (l + r)>>1) \r\n      func(m, n , quantities) ? r = m - 1 : l = m + 1; \r\n    \r\n    return l;\r\n  }\r\n};",
    "python": "class Solution:\r\n    def minimizedMaximum(self, n: int, quantities: List[int]) -> int:\r\n        def cond(m, n):\r\n            return sum([(q // m) + (q % m > 0) for q in quantities]) <= n\r\n        \r\n        l, r = 1, max(quantities)\r\n        while l < r:\r\n            m = (l + r) // 2\r\n            if cond(m, n):\r\n                r = m\r\n            else:\r\n                l = m + 1\r\n        return l",
    "java": "class Solution {\r\n    public int minimizedMaximum(int n, int[] quantities) {\r\n        \r\n        int lo = 1;\r\n        int hi = (int)1e5;\r\n        \r\n        int ans = -1;\r\n        \r\n        while(lo <= hi){\r\n            \r\n            int mid = (lo + hi)/2;\r\n            \r\n            if(isItPossible(mid, quantities, n)){\r\n                ans = mid;\r\n                hi = mid-1;\r\n            }else{\r\n                lo = mid+1;\r\n            }\r\n        }\r\n        \r\n        return ans;\r\n    }\r\n    \r\n    private boolean isItPossible(int x, int[] quantities, int n){\r\n        \r\n        // isItPossible to distribute <= x products to each of the n shops\r\n        for(int i=0; i<quantities.length; i++){\r\n            \r\n            int products = quantities[i];\r\n            \r\n            n -= Math.ceil(products/(x*1.0));\r\n            \r\n            if(n<0)     // means it requires more than n shops to distribute all products\r\n                return false; \r\n        }\r\n        \r\n        return true; // distributed all products to exactly n shops\r\n    }\r\n}",
    "javascript": "// Runtime: 865 ms (Top 8.70%) | Memory: 71.6 MB (Top 8.70%)\r\nvar minimizedMaximum = function(n, quantities) {\r\n    const MAX = Number.MAX_SAFE_INTEGER;\r\n    const m = quantities.length;\r\n\r\n    let left = 1;\r\n    let right = quantities.reduce((acc, num) => acc + num, 0);\r\n\r\n    let minRes = MAX;\r\n\r\n    while (left <= right) {\r\n        const mid = (left + right) >> 1;\r\n\r\n        if (canDistribute(mid)) {\r\n            minRes = Math.min(minRes, mid);\r\n            right = mid - 1;\r\n        }\r\n        else {\r\n            left = mid + 1;\r\n        }\r\n    }\r\n\r\n    return minRes;\r\n\r\n    function canDistribute(minGiven) {\r\n        const clonedQ = [...quantities];\r\n\r\n        let j = 0;\r\n        let i = 0;\r\n\r\n        for (; i < n && j < m; ++i) {\r\n            const remQ = clonedQ[j];\r\n\r\n            if (remQ > minGiven) {\r\n                clonedQ[j] -= minGiven;\r\n            }\r\n            else {\r\n                ++j;\r\n            }\r\n        }\r\n\r\n        return j === m;\r\n    }\r\n};"
  }
}
