export default {
  "id": 492,
  "name": "Construct the Rectangle",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/construct-the-rectangle",
  "relativeDir": "C/Construct the Rectangle",
  "slug": "0492-construct-the-rectangle",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 16,
    "java": 20,
    "python": 20,
    "javascript": 9
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.00%) | Memory: 6.1 MB (Top 33.37%)\r\nclass Solution\r\n{\r\npublic:\r\n    vector<int> constructRectangle(int area)\r\n    {\r\n        int sq = sqrt(area);\r\n        while (sq > 1)\r\n        {\r\n            if (area % sq == 0)\r\n                break;\r\n            sq--;\r\n        }\r\n        return {area / sq, sq};\r\n    }\r\n};",
    "python": "# Runtime: 39 ms (Top 86.68%) | Memory: 13.9 MB (Top 58.98%)\r\nclass Solution:\r\n    def constructRectangle(self, area: int):\r\n        y = Solution.mySqrt(area)\r\n        for i in range(y, 0, -1):\r\n            if not area%i:\r\n                return [int(area/i), i]\r\n\r\n    def mySqrt(x):\r\n        if x == 0:\r\n            return 0\r\n        n = x\r\n        count = 0\r\n        while True:\r\n            count += 1\r\n            root = 0.5 * (n + (x / n))\r\n            if abs(root - n) < 0.9:\r\n                break\r\n            n = root\r\n        return int(root)",
    "java": "class Solution {\r\n    public int[] constructRectangle(int area) {\r\n        int minDiff = Integer.MAX_VALUE;\r\n        int[] result = new int[2];\r\n        \r\n        for (int w = 1; w*w <= area; w++) {\r\n            if (area % w == 0) {\r\n                int l = area / w;\r\n                int diff = l - w;\r\n                if (diff < minDiff) {\r\n                    result[0] = l;\r\n                    result[1] = w;\r\n                    minDiff = diff;\r\n                }\r\n            }\r\n        }\r\n        \r\n        return result;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number} area\r\n * @return {number[]}\r\n */\r\nvar constructRectangle = function(area) {\r\n    let w = Math.floor(Math.sqrt(area))\r\n    while(area % w != 0)    w--\r\n    return [area/w, w]\r\n};"
  }
}
