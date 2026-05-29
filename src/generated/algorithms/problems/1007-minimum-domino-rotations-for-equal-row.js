export default {
  "id": 1007,
  "name": "Minimum Domino Rotations For Equal Row",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-domino-rotations-for-equal-row",
  "relativeDir": "M/Minimum Domino Rotations For Equal Row",
  "slug": "1007-minimum-domino-rotations-for-equal-row",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 46,
    "java": 34,
    "python": 13,
    "javascript": 25
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int minDominoRotations(vector<int>& tops, vector<int>& bottoms) {\r\n        vector<int> freq(7, 0);\r\n        \r\n        int n = tops.size();\r\n        int tile = -1\r\n\t\t// there has to be particular tile number which is present in every column to be able to arrange same tile in top or bottom by rotating\r\n        // check which tile is present in every column\r\n        for(int i=0; i<n; ++i){\r\n            int top = tops[i];\r\n            int bottom = bottoms[i];\r\n            \r\n            freq[top]++;\r\n            if(top != bottom){\r\n                freq[bottom]++;\r\n            }\r\n            //  check for potential tile number\r\n            if(freq[top] == n){\r\n                tile = top;\r\n            }\r\n            if(freq[bottom] == n){\r\n                tile = bottom;\r\n            }\r\n        }\r\n        \r\n        if(tile == -1){ // rearrangement not possible\r\n            return -1;\r\n        }\r\n        \r\n        int tilesTop = 0;\r\n        int tilesBottom = 0;\r\n        for(int i=0; i<n; ++i){\r\n            if(tops[i] == bottoms[i])continue;\r\n            \r\n            if(tops[i] == tile){\r\n                tilesTop++;\r\n            }\r\n            if(bottoms[i] == tile){\r\n                tilesBottom++;\r\n            }\r\n        }\r\n        \r\n      return tilesTop < tilesBottom ? tilesTop : tilesBottom;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def minDominoRotations(self, tops: List[int], bottoms: List[int]) -> int:\r\n        sames = [tops[i] for i in range(len(tops)) if tops[i] == bottoms[i]]\r\n\t\t\r\n        same_count = collections.Counter(sames)\r\n        bottom_count = collections.Counter(bottoms)\r\n        top_count = collections.Counter(tops)\r\n        \r\n        for n in range(1,7):\r\n            if bottom_count[n] + top_count[n] - same_count[n] == len(tops):\r\n                return min(bottom_count[n], top_count[n]) - same_count[n]\r\n            \r\n        return -1",
    "java": "// Runtime: 9 ms (Top 32.99%) | Memory: 94.3 MB (Top 24.39%)\r\nclass Solution {\r\n    public int minDominoRotations(int[] tops, int[] bottoms) {\r\n\r\n        int[][] c = new int[6][2];\r\n\r\n        for (int i : tops) {\r\n            c[i - 1][0]++;\r\n        }\r\n        for (int i : bottoms) {\r\n            c[i - 1][1]++;\r\n        }\r\n        int[] common = new int[6];\r\n        for (int i = 0; i < tops.length; i++) {\r\n            if (tops[i] == bottoms[i]) {\r\n                common[tops[i] - 1]++;\r\n            }\r\n        }\r\n        int min = Integer.MAX_VALUE;\r\n        for (int i = 1; i <= 6; i++) {\r\n            if (c[i - 1][0] + c[i - 1][1] >= tops.length) {\r\n                if (c[i - 1][0] >= c[i - 1][1] && c[i - 1][1] - common[i - 1] + c[i - 1][0] == tops.length) {\r\n                    min = Math.min(min, c[i - 1][1] - common[i - 1]);\r\n                }\r\n                else if (c[i - 1][1] >= c[i - 1][0] && c[i - 1][0] - common[i - 1] + c[i - 1][1] == tops.length) {\r\n                    int left = c[i - 1][0] - common[i - 1];\r\n                    min = Math.min(min, c[i - 1][0] - common[i - 1]);\r\n                }\r\n            }\r\n        }\r\n\r\n        return min == Integer.MAX_VALUE ? -1 : min;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number[]} tops\r\n * @param {number[]} bottoms\r\n * @return {number}\r\n */\r\nvar minDominoRotations = function(tops, bottoms) {\r\n    const swaps = Math.min(\r\n        minimum(tops[0], tops, bottoms),\r\n        minimum(tops[0], bottoms, tops),\r\n        minimum(bottoms[0], tops, bottoms),\r\n        minimum(bottoms[0], bottoms, tops)\r\n    );\r\n\r\n    return swaps === Infinity ? -1 : swaps;\r\n\r\n    function minimum(target, x, y, count = 0) {\r\n        for(let i = 0; i < x.length; i++) {\r\n            if(target !== x[i]) {\r\n                if (target !== y[i]) return Infinity\r\n                count++;\r\n            }\r\n        }\r\n        return count;\r\n    }\r\n};"
  }
}
