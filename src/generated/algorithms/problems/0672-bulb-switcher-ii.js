export default {
  "id": 672,
  "name": "Bulb Switcher II",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/bulb-switcher-ii",
  "relativeDir": "B/Bulb Switcher II",
  "slug": "0672-bulb-switcher-ii",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 13,
    "java": 13,
    "python": 18
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.0%) | Memory: 5.94 MB (Top 62.6%)\r\n\r\nclass Solution {\r\npublic:\r\n    int flipLights(int n, int k) {\r\n        if(k == 0) return 1;\r\n        if(n == 1) return 2;\r\n        if(n == 2 && k == 1) return 3;\r\n        if(n == 2 || k == 1) return 4;\r\n        if(k == 2) return 7;\r\n        return 8;\r\n    }\r\n};",
    "python": "# Runtime: 30 ms (Top 97.1%) | Memory: 16.43 MB (Top 14.4%)\r\n\r\nclass Solution:\r\n    def flipLights(self, n: int, m: int) -> int:\r\n        # Reduce n to at most 3, since any action performed more than 3 times\r\n        # will result in a pattern that has already been counted\r\n        n = min(n, 3)\r\n        if m == 0:\r\n            return 1\r\n        elif m == 1:\r\n            # For m=1, there are only 2 outcomes for n=1, 3 outcomes for n=2, and 4 outcomes for n=3\r\n            return [2, 3, 4][n - 1]\r\n        elif m == 2:\r\n            # For m=2, there are only 2 outcomes for n=1, 4 outcomes for n=2, and 7 outcomes for n=3\r\n            return [2, 4, 7][n - 1]\r\n        else:\r\n            # For m>=3, there are only 2 outcomes for n=1, 4 outcomes for n=2, and 8 outcomes for n=3\r\n            return [2, 4, 8][n - 1]",
    "java": "class Solution {\r\n    public int flipLights(int n, int presses) {\r\n        //1, 2 -> 3\r\n        //1, 3 -> 2\r\n        //2, 3 -> 1\r\n        //all on, all off, even on, odd on, 3k+1 on, 3k+0+2 on, 3k+1 w/ 2, 3k+1 w/ 3\r\n        if (n == 2 && presses == 1) return 3;\r\n        if (presses == 1) return Math.min(1 << Math.min(4, n), 4); //i chose 4 arbitarily, just has to be big enough to cover small number and less than 31\r\n        if (presses == 2) return Math.min(1 << Math.min(4, n), 7);\r\n        if (presses >= 3) return Math.min(1 << Math.min(4, n), 8);\r\n        return 1;\r\n    }\r\n}"
  }
}
