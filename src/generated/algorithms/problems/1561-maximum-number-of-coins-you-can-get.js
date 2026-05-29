export default {
  "id": 1561,
  "name": "Maximum Number of Coins You Can Get",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-number-of-coins-you-can-get",
  "relativeDir": "M/Maximum Number of Coins You Can Get",
  "slug": "1561-maximum-number-of-coins-you-can-get",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 19,
    "java": 10,
    "python": 12,
    "javascript": 13
  },
  "languages": {
    "cpp": "// Runtime: 294 ms (Top 6.88%) | Memory: 53.5 MB (Top 9.97%)\r\nclass Solution {\r\npublic:\r\n    int maxCoins(vector<int>& piles) {\r\n        sort(piles.begin(),piles.end(),greater<int>());\r\n        int myPilesCount=0;\r\n        int myPilesSum=0;\r\n        int PilesSize=piles.size();\r\n        int i=1;\r\n        while(myPilesCount<(PilesSize/3))\r\n        {\r\n\r\n            myPilesSum+=piles[i];\r\n            myPilesCount++;\r\n            i+=2;\r\n        }\r\n        return myPilesSum;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def maxCoins(self, piles: List[int]) -> int:\r\n        piles.sort()\r\n        n = len(piles)\r\n        k = n // 3\r\n        i, j = 0, 2\r\n        ans = 0\r\n        while i < k:\r\n            ans += piles[n-j]\r\n            j += 2\r\n            i +=1\r\n        return ans",
    "java": "// Runtime: 43 ms (Top 37.50%) | Memory: 77.8 MB (Top 8.89%)\r\nclass Solution {\r\n    public int maxCoins(int[] piles) {\r\n        Arrays.sort(piles);\r\n        int s=0,n=piles.length;\r\n        for(int i=n/3;i<n;i+=2)\r\n            s+=piles[i];\r\n        return s;\r\n    }\r\n}",
    "javascript": "// Runtime: 217 ms (Top 98.62%) | Memory: 52.7 MB (Top 26.90%)\r\nvar maxCoins = function(piles) {\r\n    let count = 0, i = 0, j = piles.length - 1;\r\n    piles.sort((a, b) => b - a);\r\n\r\n    while(i < j) {\r\n        count += piles[i + 1];\r\n        i += 2;\r\n        j--;\r\n    }\r\n\r\n    return count;\r\n};"
  }
}
