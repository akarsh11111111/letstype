export default {
  "id": 668,
  "name": "Kth Smallest Number in Multiplication Table",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/kth-smallest-number-in-multiplication-table",
  "relativeDir": "K/Kth Smallest Number in Multiplication Table",
  "slug": "0668-kth-smallest-number-in-multiplication-table",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 31,
    "java": 25,
    "python": 15,
    "javascript": 42
  },
  "languages": {
    "cpp": "// Runtime: 27 ms (Top 26.50%) | Memory: 6 MB (Top 28.37%)\r\nclass Solution {\r\npublic:\r\n\r\n    int findKthNumber(int m, int n, int k) {\r\n        int high=m*n ,low=1;\r\n\r\n        int mid=0, ans=1e9;\r\n        while(low<=high)\r\n        {\r\n            mid=low+(high-low)/2;\r\n            int temp=0;\r\n\r\n            // for each i find the max value ,less than or equal to n , such that\r\n            // i*j<=mid\r\n            // add j to answer\r\n           for(int i=1;i<=m;i++)\r\n            temp+=min(mid/i,n);\r\n\r\n            if(temp>=k)\r\n            {\r\n                ans=min(ans,mid);\r\n                high=mid-1;\r\n            }\r\n            else\r\n                low=mid+1;\r\n\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "// Runtime: 593 ms (Top 63.06%) | Memory: 17.30 MB (Top 29.73%)\r\n\r\nclass Solution:\r\n    def findKthNumber(self, m, n, k):\r\n        def count(x):\r\n            return sum(min(x//i, n) for i in range(1,m+1))\r\n\t\t\t\r\n        L, R, mid, ans = 0, m*n, 0, 0\r\n        while L <= R:\r\n            mid = (L + R) >> 1\r\n            if count(mid) < k:\r\n                L = mid + 1\r\n            else:\r\n                R, ans = mid - 1, mid\r\n        return ans",
    "java": "class Solution {\r\n    public int findKthNumber(int m, int n, int k) {\r\n        int lo = 1;\r\n        int hi = m * n;\r\n        \r\n        while(lo < hi){\r\n            int mid = lo + (hi - lo) / 2;\r\n            \r\n            if(count(mid, m, n) < k){\r\n                lo = mid + 1;\r\n            } else if(count(mid, m, n) >= k){\r\n                hi = mid;\r\n            }\r\n        }\r\n        return lo;\r\n    }\r\n    private int count(int mid, int m, int n){\r\n        int ans = 0;\r\n        for(int i = 1; i <= m; i++){\r\n            int res = Math.min(mid / i, n);\r\n            ans += res;\r\n        }\r\n        return ans;\r\n    }\r\n}",
    "javascript": "// Runtime: 130 ms (Top 39.13%) | Memory: 42.1 MB (Top 82.61%)\r\n/**\r\n * @param {number} m\r\n * @param {number} n\r\n * @param {number} k\r\n * @return {number}\r\n */\r\nvar findKthNumber = function(m, n, k) {\r\n  // lo always points to a value which is\r\n  // not going to be our answer\r\n  let lo = 0;\r\n  let hi = m * n;\r\n\r\n  // the loop stops when lo and hi point to two adjascent numbers\r\n  // because lo is always incorrect, hi will contain our final answer\r\n  while (lo + 1 < hi) {\r\n\r\n    // As a general practice don't do a (lo + hi) / 2 because that\r\n    // might cause integer overflow\r\n    const mid = lo + Math.floor((hi - lo) / 2);\r\n    const count = countLessThanEqual(mid, m, n);\r\n\r\n    // Find the minimum mid, such that count >= k\r\n    if (count >= k) {\r\n      hi = mid;\r\n    } else {\r\n      lo = mid;\r\n    }\r\n  }\r\n  return hi;\r\n};\r\n\r\nfunction countLessThanEqual(target, rows, cols) {\r\n  let count = 0;\r\n  // we move row by row in the multiplication table\r\n  // Each row contains at max (target / rowIndex) elements less than\r\n  // or equal to target. The number of cols would limit it though.\r\n  for (let i = 1; i <= rows; i++) {\r\n    count += Math.min(Math.floor(target / i), cols);\r\n  }\r\n  return count;\r\n}"
  }
}
