export default {
  "id": 2078,
  "name": "Two Furthest Houses With Different Colors",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/two-furthest-houses-with-different-colors",
  "relativeDir": "T/Two Furthest Houses With Different Colors",
  "slug": "2078-two-furthest-houses-with-different-colors",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 19,
    "java": 9,
    "python": 25,
    "javascript": 38
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int maxDistance(vector<int>& colors) {\r\n        int Max = INT_MIN;\r\n        int N = colors.size();\r\n        \r\n        // find the first house from the end which does not match the color of house at front\r\n        int j=N;\r\n        while(--j>=0 && colors[0]==colors[j]) { }   // worst-case O(n)\r\n        Max = abs(j-0);\r\n        \r\n        // find the first house from the front which does not match the color of house at back\r\n        j=-1;\r\n        while(++j<N && colors[N-1]==colors[j]) { }  // worst-case O(n)\r\n        Max = max(Max, abs(j-(N-1)));\r\n        \r\n        return Max;\r\n    }\r\n};",
    "python": "// Runtime: 33 ms (Top 98.18%) | Memory: 17.40 MB (Top 5.01%)\r\n\r\nclass Solution:\r\n    def maxDistance(self, colors: List[int]) -> int:\r\n\t\t#first pass\r\n        l, r = 0, len(colors)-1\r\n        dist = 0\r\n        \r\n        while r > l:\r\n            if colors[r] != colors[l]:\r\n                dist = r-l\r\n\t\t\t\t#slight performance increase, break out if you find it \r\n\t\t\t\t#because it can't get bigger than this\r\n                break \r\n            r -= 1\r\n\t\t\t\r\n        #second pass, backwards\r\n        l, r = 0, len(colors)-1\r\n        while r > l:\r\n            if colors[r] != colors[l]:\r\n                dist = max(dist, r-l)\r\n                break\r\n            l += 1\r\n        \r\n        return dist",
    "java": "// Runtime: 0 ms (Top 100.00%) | Memory: 42.7 MB (Top 13.21%)\r\nclass Solution {\r\n    public int maxDistance(int[] colors) {\r\n        int l = 0, r = colors.length-1;\r\n        while(colors[colors.length-1] == colors[l]) l++;\r\n        while(colors[0] == colors[r]) r--;\r\n        return Math.max(r, colors.length - 1 - l);\r\n    }\r\n}",
    "javascript": "var maxDistance = function(colors) {\r\n    // using two pointers from start and end\r\n    // Time complexity O(n)\r\n    // Space complexity O(1)\r\n    \r\n    const start = 0;\r\n    const end = colors.length - 1;\r\n\r\n    // maximum distance possible is length of arr, so start with two pointer\r\n\t// one at the start and one at the end\r\n    const startColor = colors[start];\r\n    const endColor = colors[end];\r\n    \r\n\t// base condition, to check if they are not already equal\r\n    if (startColor !== endColor) {\r\n        return end;\r\n    }\r\n    \r\n\t// move the forward pointer till we find the differend color\r\n    let forwardPtr = start;\r\n    while (startColor === colors[forwardPtr]) {\r\n        ++forwardPtr;\r\n    }\r\n    \r\n    // move the backward pointer till we find the differend color\r\n    let backwardPtr = end;\r\n    while(endColor === colors[backwardPtr]) {\r\n        --backwardPtr;\r\n    }\r\n    \r\n    // Till here, We already know that startColor === endColor\r\n    // hence we did two things,\r\n \t// 1. we kept startColor fixed and moved backwardPtr till we find different color\r\n    // 2. similarly, we kept endColor fixed and moved the forwardPtr till we find the different color.\r\n   // we will return the max different out of two now.\r\n    return Math.max(Math.abs(start - backwardPtr), Math.abs(end - forwardPtr));\r\n    \r\n};"
  }
}
