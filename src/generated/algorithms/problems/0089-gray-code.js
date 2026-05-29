export default {
  "id": 89,
  "name": "Gray Code",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/gray-code",
  "relativeDir": "G/Gray Code",
  "slug": "0089-gray-code",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 17,
    "java": 9,
    "python": 12,
    "javascript": 32
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<int> grayCode(int n) {\r\n        vector<int> dp = {0,1};\r\n        int cnt = 1;\r\n        for(int i = 2; i < n+1; i++) {\r\n            int mod = pow(2, cnt);\r\n            int index = dp.size()-1;\r\n            while(index >= 0) {\r\n                dp.push_back(dp[index] + mod);\r\n                index--;\r\n            }\r\n            cnt++;\r\n        }\r\n        return dp;\r\n    }\r\n};",
    "python": "import math\r\nclass Solution(object):\r\n    def grayCode(self, n):\r\n        \"\"\"\r\n        :type n: int\r\n        :rtype: List[int]\r\n        \"\"\"\r\n        allowedDiffs = [int(1*math.pow(2,i)) for i in range(0,n)]\r\n        grayCodes = [0]\r\n        for diff in allowedDiffs:\r\n            grayCodes += [code + diff for code in reversed(grayCodes)]\r\n        return grayCodes",
    "java": "class Solution {\r\n    public List<Integer> grayCode(int n) {\r\n      ArrayList list=new ArrayList();\r\n       for(int i=0;i<(1<<n);i++){\r\n         list.add(i^(i>>1));\r\n       }\r\n         return list;\r\n    }\r\n}",
    "javascript": "// Runtime: 267 ms (Top 20.55%) | Memory: 67.5 MB (Top 7.22%)\r\n/**\r\n * @param {number} n\r\n * @return {number[]}\r\n */\r\nvar grayCode = function(n) {\r\n    return binaryToInt(dfs(n, ['0', '1']))\r\n};\r\n\r\nconst dfs = (n, arr) => {\r\n    if (n === 1) return arr\r\n\r\n    const revArr = [...arr].reverse()\r\n\r\n    addOneBefore('0', arr)\r\n    addOneBefore('1', revArr)\r\n\r\n    return dfs(n - 1, [...arr, ...revArr])\r\n}\r\n\r\nconst addOneBefore = (e, arr) => {\r\n    for (let i = 0; i < arr.length; i++) {\r\n        arr[i] = e + arr[i]\r\n    }\r\n}\r\n\r\nconst binaryToInt = (arr) => {\r\n    for (let i = 0; i < arr.length; i++){\r\n        arr[i] = parseInt(arr[i], 2)\r\n    }\r\n    return arr\r\n}"
  }
}
