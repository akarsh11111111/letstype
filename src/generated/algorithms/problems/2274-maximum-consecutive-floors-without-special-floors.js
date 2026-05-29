export default {
  "id": 2274,
  "name": "Maximum Consecutive Floors Without Special Floors",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-consecutive-floors-without-special-floors",
  "relativeDir": "M/Maximum Consecutive Floors Without Special Floors",
  "slug": "2274-maximum-consecutive-floors-without-special-floors",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 15,
    "java": 21,
    "python": 10,
    "javascript": 18
  },
  "languages": {
    "cpp": "// Runtime: 381 ms (Top 5.26%) | Memory: 58.1 MB (Top 42.68%)\r\nclass Solution {\r\npublic:\r\n    int maxConsecutive(int bottom, int top, vector<int>& special) {\r\n\r\n        int res(0), n(size(special));\r\n        sort(begin(special), end(special));\r\n\r\n        for (int i=1; i<n; i++) {\r\n            res = max(res, special[i]-special[i-1]-1);\r\n        }\r\n\r\n        return max({res, special[0]-bottom, top-special[n-1]});\r\n    }\r\n};",
    "python": "class Solution:\r\n    def maxConsecutive(self, bottom: int, top: int, special: List[int]) -> int:\r\n        special.sort()\r\n        special.insert(0, bottom - 1)\r\n        special.append(top + 1)\r\n        \r\n        ans = 0\r\n        for i in range(len(special)-1):\r\n            ans = max(ans, special[i+1] - special[i] - 1)\r\n        return ans",
    "java": "// Runtime: 52 ms (Top 13.68%) | Memory: 77.1 MB (Top 37.46%)\r\nclass Solution {\r\n    public int maxConsecutive(int bottom, int top, int[] special) {\r\n        int max = Integer.MIN_VALUE;\r\n\r\n        Arrays.sort(special);\r\n\r\n        // from bottom to the first special floor\r\n        max = Math.max(max, special[0] - bottom);\r\n\r\n        // middle floors\r\n        for(int i = 1; i < special.length; i++) {\r\n            max = Math.max(max, special[i] - special[i - 1] - 1);\r\n        }\r\n\r\n        // from last special floor to the top\r\n        max = Math.max(max, top - special[special.length - 1]);\r\n\r\n        return max;\r\n    }\r\n}",
    "javascript": "// Runtime: 181 ms (Top 84.2%) | Memory: 56.68 MB (Top 15.7%)\r\n\r\n/**\r\n * @param {number} bottom\r\n * @param {number} top\r\n * @param {number[]} special\r\n * @return {number}\r\n */\r\nvar maxConsecutive = function(bottom, top, special) {\r\n    special.push(top+1);\r\n    special.push(bottom-1);\r\n    special.sort((a, b) => a - b);\r\n    let specialMax = 0;\r\n    for (let i = 1; i < special.length; i++){\r\n        specialMax = Math.max(specialMax, special[i] - special[i-1] - 1)\r\n    }\r\n    return specialMax;\r\n};"
  }
}
