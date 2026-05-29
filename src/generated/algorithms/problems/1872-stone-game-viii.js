export default {
  "id": 1872,
  "name": "Stone Game VIII",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/stone-game-viii",
  "relativeDir": "S/Stone Game VIII",
  "slug": "1872-stone-game-viii",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 15,
    "python": 5,
    "javascript": 13
  },
  "languages": {
    "cpp": "// Runtime: 281 ms (Top 46.37%) | Memory: 83.5 MB (Top 84.08%)\r\nclass Solution {\r\npublic:\r\n    int stoneGameVIII(vector<int>& stones) {\r\n        int prefix = 0;\r\n        for (auto& x : stones) prefix += x;\r\n\r\n        int ans = prefix;\r\n        for (int i = size(stones)-2; i >= 1; --i) {\r\n            prefix -= stones[i+1];\r\n            ans = max(ans, prefix - ans);\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "# OJ: https://leetcode.com/problems/stone-game-viii/\r\n# Author: github.com/lzl124631x\r\nclass Solution:\r\n    def stoneGameVIII(self, A: List[int]) -> int:\r\n        return reduce(lambda memo, cur : max(memo, cur - memo), list(accumulate(A))[::-1][:-1])",
    "javascript": "// Runtime: 186 ms (Top 100.0%) | Memory: 63.30 MB (Top 50.0%)\r\n\r\nvar stoneGameVIII = function(S) {  \r\n    let n=S.length, prefix=[0],dp=[...Array(n)]\r\n    for(let i=0;i<n;i++)\r\n        prefix.push(prefix[prefix.length-1]+S[i])\r\n    let bestRight=prefix[n],bestCurrent\r\n    for(let i=n-2;i>=0;i--)\r\n        bestCurrent=bestRight,\r\n\t\t//update what you re going to use in the future\r\n        bestRight=Math.max(bestRight,prefix[i+1]-bestCurrent) \r\n    return bestCurrent\r\n};"
  }
}
