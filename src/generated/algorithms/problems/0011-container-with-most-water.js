export default {
  "id": 11,
  "name": "Container With Most Water",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/container-with-most-water",
  "relativeDir": "C/Container With Most Water",
  "slug": "0011-container-with-most-water",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 29,
    "python": 13,
    "javascript": 25
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int maxArea(vector<int>& height) {\r\n        int frontHeight, rareHeight, minHeight, area, distance;\r\n        \r\n        int front = 0;\r\n        int rare = height.size() - 1;\r\n        int maxArea = 0;\r\n        \r\n        while(front < rare)\r\n        {\r\n            frontHeight = height[front];\r\n            rareHeight = height[rare];\r\n                        \r\n            if(frontHeight<rareHeight) minHeight = frontHeight;\r\n            else minHeight = rareHeight;\r\n            \r\n            distance = rare - front;\r\n            area = minHeight * distance;\r\n                \r\n            if(area > maxArea) maxArea = area;\r\n            \r\n            if(frontHeight > rareHeight) rare--;\r\n            else front++;\r\n        }\r\n        \r\n        return maxArea;\r\n    }\r\n};",
    "python": "\r\nclass Solution:\r\n    def maxArea(self, H: List[int]) -> int:\r\n        ans, i, j = 0, 0, len(H)-1\r\n        while (i < j):\r\n            if H[i] <= H[j]:\r\n                res = H[i] * (j - i)\r\n                i += 1\r\n            else:\r\n                res = H[j] * (j - i)\r\n                j -= 1\r\n            if res > ans: ans = res\r\n        return ans",
    "javascript": "/**\r\n * @param {number[]} height\r\n * @return {number}\r\n */\r\nvar maxArea = function(height) {\r\n    let max = -1;\r\n    \r\n    /*===========BRUTE FORCE========== */\r\n    for(let i=0;i<height.length - 1;i++){\r\n         let currMax = -1;\r\n         for(let j=i+1;j<height.length;j++){\r\n             let min = Math.min(height[i], height[j]);\r\n             let length = j-i;\r\n             let filled = min * length;\r\n             if(filled>currMax){\r\n                 currMax = filled;\r\n             }\r\n         }\r\n         if(currMax > max){\r\n             max = currMax;\r\n         }\r\n     }\r\n    \r\n    return max;\r\n};"
  }
}
