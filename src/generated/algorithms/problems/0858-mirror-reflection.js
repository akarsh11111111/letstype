export default {
  "id": 858,
  "name": "Mirror Reflection",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/mirror-reflection",
  "relativeDir": "M/Mirror Reflection",
  "slug": "0858-mirror-reflection",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 11,
    "java": 8,
    "python": 9,
    "javascript": 17
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.00%) | Memory: 5.8 MB (Top 70.14%)\r\nclass Solution {\r\npublic:\r\n    int mirrorReflection(int p, int q) {\r\n        while (p % 2 == 0 && q % 2 == 0){\r\n            p/=2;\r\n            q/=2;\r\n        }\r\n        return 1 - p % 2 + q % 2;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def mirrorReflection(self, p: int, q: int) -> int:\r\n\r\n        L = lcm(p,q)\r\n\r\n        if (L//q)%2 == 0:\r\n            return 2\r\n\r\n        return (L//p)%2",
    "java": " class Solution {\r\n    public int mirrorReflection(int p, int q) {\r\n        while (p % 2 == 0 && q % 2 == 0){\r\n            p >>= 1; q >>= 1;\r\n        }\r\n        return 1 - p % 2 + q % 2;\r\n    }\r\n};",
    "javascript": "// Time complexity: O(log (min(p,q))\r\n// Space complexity: O(1)\r\n\r\nvar mirrorReflection = function(p, q) {\r\n\tlet ext = q, ref = p;\r\n\t\r\n\twhile (ext % 2 == 0 && ref % 2 == 0) {\r\n\t\text /= 2;\r\n\t\tref /= 2;\r\n\t}\r\n\t\r\n\tif (ext % 2 == 0 && ref % 2 == 1) return 0;\r\n\tif (ext % 2 == 1 && ref % 2 == 1) return 1;\r\n\tif (ext % 2 == 1 && ref % 2 == 0) return 2;\r\n\t\r\n\treturn -1;\r\n};"
  }
}
