export default {
  "id": 667,
  "name": "Beautiful Arrangement II",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/beautiful-arrangement-ii",
  "relativeDir": "B/Beautiful Arrangement II",
  "slug": "0667-beautiful-arrangement-ii",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 35,
    "java": 17,
    "python": 12,
    "javascript": 18
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.0%) | Memory: 7.80 MB (Top 40.6%)\r\n\r\nclass Solution {\r\npublic:\r\n    vector<int> constructArray(int n, int k) {\r\n        int diff = n - k;\r\n        int lo = 1;\r\n        int hi = n;\r\n        vector<int> out;\r\n        int i = 0; \r\n\t\t// we generate a difference of 1 between subsequent elements for the first n-k times.\r\n        while(i < diff){\r\n            out.push_back(lo);\r\n            lo++;\r\n            i++;\r\n        }\r\n        bool flag = true;\r\n\t\t//Now we go zig zag to generate k unique differences, the last one will be automatically taken care\r\n\t\t//as the difference between last two elements will be one which we have already generated above.\r\n        for(int i = out.size()   ; i < n ; i++){\r\n           //flag to alternatively zig zag\r\n\t\t   if(flag){\r\n                out.push_back(hi);\r\n                hi--;\r\n                flag = false;\r\n            }\r\n            else{\r\n                out.push_back(lo);\r\n                lo++;\r\n                flag = true;\r\n            }\r\n        }\r\n        return out;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def constructArray(self, n: int, k: int) -> List[int]:\r\n        # n = 8, k = 5\r\n        # 1 2 3 8 4 7 5 6\r\n        # 1 1 5 4 3 2 1\r\n        res = list(range(1,n-k+1))\r\n        sign, val = 1, k\r\n        for i in range(k):\r\n            res.append(res[-1]+sign*val)\r\n            sign *= -1\r\n            val -= 1\r\n        return res",
    "java": "class Solution {\r\n    public int[] constructArray(int n, int k) {\r\n        int [] result = new int[n];\r\n        result[0] = 1;\r\n        int sign = 1;\r\n        for(int i = 1 ; i < n; i++, k--){\r\n            if(k > 0){\r\n                result[i] = result[i-1] + k * sign;\r\n                sign *= -1;\r\n            }\r\n            else{\r\n                result[i] = i+1;\r\n            }\r\n        }\r\n        return result;\r\n    }\r\n}",
    "javascript": "// Runtime: 74 ms (Top 97.37%) | Memory: 44.7 MB (Top 10.53%)\r\nvar constructArray = function(n, k) {\r\n    const result = [];\r\n    let left = 1;\r\n    let right = n;\r\n\r\n    for (let index = 0; index < n; index++) {\r\n        if (k === 1) {\r\n            result.push(left++);\r\n            continue;\r\n        }\r\n        const num = k & 1 ? left++ : right--;\r\n        result.push(num);\r\n        k -= 1;\r\n    }\r\n\r\n    return result;\r\n};"
  }
}
