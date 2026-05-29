export default {
  "id": 1854,
  "name": "Maximum Population Year",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-population-year",
  "relativeDir": "M/Maximum Population Year",
  "slug": "1854-maximum-population-year",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 17,
    "java": 30,
    "python": 24,
    "javascript": 20
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int maximumPopulation(vector<vector<int>>& logs) {\r\n        int arr[101]={0};\r\n        for(vector<int> log : logs){\r\n            arr[log[0]-1950]++;\r\n            arr[log[1]-1950]--;\r\n        }\r\n        int max=0,year,cnt=0;\r\n        for(int i=0;i<101;i++){\r\n            cnt+=arr[i];\r\n            if(cnt>max)\r\n                max=cnt,year=i;\r\n        }\r\n        return year+1950;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def maximumPopulation(self, logs: List[List[int]]) -> int:\r\n        logs.sort(key=lambda x: x[0])\r\n        print(logs)\r\n        living = 0\r\n        max_living = 0\r\n        year = 0\r\n\r\n        for ind, (start, stop) in enumerate(logs):\r\n            born = ind+1\r\n            dead = 0\r\n            for i in range(ind):\r\n                if logs[i][1] <= start:\r\n                    dead += 1\r\n            \r\n            living = born - dead\r\n            # print(born, dead, living, max_living)\r\n            if living > max_living:\r\n                max_living = living\r\n                year = start\r\n\r\n        \r\n        \r\n        return year",
    "java": "// Runtime: 1 ms (Top 78.61%) | Memory: 42.6 MB (Top 29.91%)\r\nclass Solution {\r\n    public int maximumPopulation(int[][] logs) {\r\n\r\n        int[] year = new int[2051];\r\n\r\n        // O(n) -> n is log.length\r\n\r\n        for(int[] log : logs){\r\n\r\n            year[log[0]] += 1;\r\n            year[log[1]] -= 1;\r\n        }\r\n\r\n        int maxNum = year[1950], maxYear = 1950;\r\n\r\n        // O(100) -> 2050 - 1950 = 100\r\n\r\n        for(int i = 1951; i < year.length; i++){\r\n            year[i] += year[i - 1]; // Generating Prefix Sum\r\n\r\n            if(year[i] > maxNum){\r\n                maxNum = year[i];\r\n                maxYear = i;\r\n            }\r\n        }\r\n\r\n        return maxYear;\r\n    }\r\n}",
    "javascript": "// Runtime: 49 ms (Top 90.74%) | Memory: 44.20 MB (Top 33.33%)\r\n\r\nvar maximumPopulation = function(logs) {\r\n    const count = new Array(101).fill(0);\r\n    \r\n    for (const [birth, death] of logs) {\r\n        count[birth - 1950]++;\r\n        count[death - 1950]--;\r\n    }\r\n    \r\n    let max = 0;\r\n    \r\n    for (let i = 1; i < 101; i++) {\r\n        count[i] += count[i - 1];\r\n        \r\n        if (count[i] > count[max]) max = i;\r\n     }\r\n    \r\n     return 1950 + max;\r\n };"
  }
}
