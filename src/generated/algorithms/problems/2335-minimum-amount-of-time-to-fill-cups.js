export default {
  "id": 2335,
  "name": "Minimum Amount of Time to Fill Cups",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-amount-of-time-to-fill-cups",
  "relativeDir": "M/Minimum Amount of Time to Fill Cups",
  "slug": "2335-minimum-amount-of-time-to-fill-cups",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 14,
    "java": 13,
    "python": 12,
    "javascript": 15
  },
  "languages": {
    "cpp": "// Runtime: 3 ms (Top 79.17%) | Memory: 11.7 MB (Top 92.01%)\r\nclass Solution {\r\npublic:\r\n    int fillCups(vector<int>& amount) {\r\n      sort(amount.begin(),amount.end());\r\n      int x=amount[0];\r\n      int y=amount[1];\r\n      int z=amount[2];\r\n      int sum=x+y+z;\r\n      if(x+y>z) return sum/2+sum%2;\r\n      if(x==0 && y==0) return z;\r\n      else return z;\r\n    }\r\n};",
    "python": "# Runtime: 42 ms (Top 62.11%) | Memory: 13.9 MB (Top 56.09%)\r\nclass Solution:\r\n    def fillCups(self, amount: List[int]) -> int:\r\n\r\n        count = 0\r\n        amount = sorted(amount, reverse=True)\r\n        while amount[0] > 0:\r\n            amount[0] -= 1\r\n            amount[1] -= 1\r\n            count += 1\r\n            amount = sorted(amount, reverse=True)\r\n        return count",
    "java": "// Runtime: 2 ms (Top 59.66%) | Memory: 41.5 MB (Top 48.39%)\r\nclass Solution {\r\n    public int fillCups(int[] amount) {\r\n         Arrays.sort(amount);\r\n        int x=amount[0];\r\n         int y=amount[1];\r\n         int z=amount[2];\r\n        int sum=x+y+z;\r\n        if(x+y>z){return sum/2 +sum%2;}\r\n        if(x==0&&y==0){return z;}\r\n        else{return z;}\r\n    }\r\n}",
    "javascript": "var fillCups = function(amount) {\r\n    var count = 0\r\n    var a = amount\r\n    while (eval(a.join(\"+\")) > 0) {\r\n        var max = Math.max(...a)\r\n        a.splice(a.indexOf(max), 1)\r\n        var max2 = Math.max(...a)\r\n        a.splice(a.indexOf(max2), 1)\r\n        count++\r\n        if(max == 0) a.push(0)\r\n        else a.push(max - 1)\r\n        if (max2==0) a.push(0)\r\n        else a.push(max2 - 1)\r\n    } return count\r\n}"
  }
}
