export default {
  "id": 2001,
  "name": "Number of Pairs of Interchangeable Rectangles",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/number-of-pairs-of-interchangeable-rectangles",
  "relativeDir": "N/Number of Pairs of Interchangeable Rectangles",
  "slug": "2001-number-of-pairs-of-interchangeable-rectangles",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 20,
    "java": 24,
    "python": 9,
    "javascript": 30
  },
  "languages": {
    "cpp": "// Runtime: 610 ms (Top 86.39%) | Memory: 140.5 MB (Top 68.04%)\r\nclass Solution {\r\npublic:\r\n    long long interchangeableRectangles(vector<vector<int>>& rectangles) {\r\n        int n = rectangles.size();\r\n        unordered_map<double,int> mp;\r\n        for(int i = 0;i<n;i++){\r\n            double ratio = rectangles[i][0]/(double)rectangles[i][1];\r\n            mp[ratio]++;\r\n        }\r\n        long long count = 0;\r\n\r\n        for(auto i: mp){\r\n            long long x = i.second;\r\n            x = (x * (x-1))/2.0;\r\n            count += x;\r\n        }\r\n        return count;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def interchangeableRectangles(self, rectangles: List[List[int]]) -> int:\r\n        ratios = defaultdict(int)\r\n        for x, y in rectangles:\r\n            ratios[x/y] += 1\r\n        res = 0\r\n        for val in ratios.values():\r\n            res += (val*(val-1)//2)\r\n        return res",
    "java": "// Runtime: 42 ms (Top 81.13%) | Memory: 99.50 MB (Top 16.9%)\r\n\r\nclass Solution {\r\n    \r\n    public long interchangeableRectangles(int[][] rectangles) {\r\n        Map <Double, Long> hash = new HashMap<>();\r\n        \r\n        for (int i = 0; i < rectangles.length; i++) {\r\n            Double tmp = (double) (rectangles[i][0] / (double) rectangles[i][1]);\r\n            \r\n            hash.put(tmp, hash.getOrDefault(tmp, 0L) + 1);\r\n        }\r\n        \r\n        long ans = 0;\r\n        for (Map.Entry<Double,Long> entry : hash.entrySet()) {\r\n            if (entry.getValue() > 1) {\r\n                Long n = entry.getValue();\r\n                ans += (n * (n - 1)) / 2;\r\n            }\r\n        }\r\n        \r\n        return ans;\r\n    }\r\n}",
    "javascript": "// Runtime: 165 ms (Top 91.97%) | Memory: 93.10 MB (Top 71.53%)\r\n\r\n/**\r\n * @param {number[][]} rectangles\r\n * @return {number}\r\n */\r\nvar interchangeableRectangles = function(rectangles) {\r\n    let m = new Map();\r\n    for (let i = 0; i < rectangles.length; i++) {\r\n        let width = rectangles[i][0];\r\n        let height = rectangles[i][1];\r\n        let aspectRatio = width / height;\r\n        \r\n        if (!m.has(aspectRatio)) {\r\n            m.set(aspectRatio, 1);\r\n        } else {\r\n            m.set(aspectRatio, m.get(aspectRatio) + 1);\r\n        }\r\n    }\r\n    \r\n    let ans = 0;\r\n    m.forEach((value) => {\r\n        if (value > 1) {\r\n            let n = value - 1;\r\n            ans += (n * (n + 1)) / 2;\r\n        }\r\n    });\r\n    \r\n    return ans;\r\n};"
  }
}
