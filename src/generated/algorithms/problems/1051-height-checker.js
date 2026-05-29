export default {
  "id": 1051,
  "name": "Height Checker",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/height-checker",
  "relativeDir": "H/Height Checker",
  "slug": "1051-height-checker",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 13,
    "java": 21,
    "python": 6,
    "javascript": 10
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int heightChecker(vector<int>& heights) {\r\n        vector<int> expected=heights;\r\n        int count=0;\r\n        sort(expected.begin(),expected.end());\r\n        for(int i=0;i<heights.size();i++){\r\n            if(heights[i]!=expected[i])\r\n            count++;\r\n        }\r\n        return count;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def heightChecker(self, heights: List[int]) -> int:\r\n        heightssort = sorted(heights)\r\n        import numpy as np\r\n        diff = list(np.array(heightssort) - np.array(heights))\r\n        return (len(diff) - diff.count(0))",
    "java": "// Runtime: 2 ms (Top 77.11%) | Memory: 42.1 MB (Top 31.42%)\r\nclass Solution {\r\n    public int heightChecker(int[] heights) {\r\n\r\n      int[] dupheights = Arrays.copyOfRange(heights , 0 ,heights.length);\r\n\r\n      Arrays.sort(dupheights);\r\n      int count = 0;\r\n\r\n      for(int i=0 ; i< heights.length ; i++){\r\n\r\n        if(heights[i] != dupheights[i]){\r\n          count++;\r\n        }\r\n\r\n      }\r\n\r\n      return count;\r\n\r\n    }\r\n}",
    "javascript": "var heightChecker = function(heights) {\r\n  let count = 0;\r\n  const orderedHeights = [...heights].sort((a, b) => a-b)\r\n\r\n  for (let i = 0; i < heights.length; i++) {\r\n    heights[i] !== orderedHeights[i] ? count++ : null\r\n  }\r\n\r\n  return count\r\n};"
  }
}
