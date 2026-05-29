export default {
  "id": 1937,
  "name": "Maximum Number of Points with Cost",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-number-of-points-with-cost",
  "relativeDir": "M/Maximum Number of Points with Cost",
  "slug": "1937-maximum-number-of-points-with-cost",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 25,
    "java": 52,
    "python": 15,
    "javascript": 24
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    long long maxPoints(vector<vector<int>>& points) {\r\n        vector<vector<long long>> dp(points.size(), vector<long long>(points[0].size(), -1));\r\n        \r\n        for (int i = 0; i < points[0].size(); ++i) {\r\n            dp[0][i] = points[0][i];\r\n        }\r\n        \r\n        for (int i = 1; i < points.size(); ++i) {\r\n            for (int j = 0; j < points[i].size(); ++j) {\r\n                for (int k = 0; k < points[i].size(); ++k) {\r\n                    dp[i][j] = max(dp[i][j], dp[i - 1][k] - abs(k - j) + points[i][j]);\r\n                }\r\n            }\r\n        }\r\n        \r\n        long long max_ans = -1;\r\n        for (const auto v : dp.back()) {\r\n            max_ans = max(max_ans, v);\r\n        }\r\n        \r\n        return max_ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def maxPoints(self, points: List[List[int]]) -> int:\r\n        m, n = len(points), len(points[0])\r\n        \r\n        for i in range(m - 1):\r\n            for j in range(1, n):\r\n                points[i][j] = max(points[i][j], points[i][j - 1] - 1)\r\n            \r\n            for j in range(n - 2, -1, -1):\r\n                points[i][j] = max(points[i][j], points[i][j + 1] - 1)\r\n            \r\n            for j in range(n):\r\n                points[i + 1][j] += points[i][j]\r\n        \r\n        return max(points[m - 1])",
    "java": "/* \r\n   -> take a frame same width as points,this frame will contains most effective(which provide maximum sum)values which will later get \r\n\tadded to next values from next row.\r\n\r\n   -> conditions to update values in frame \r\n\t\t* we will keep only those values which will contribute maximum in next row addition\r\n\r\n\te.g-->\r\n\t\tpoints --->[[1,2,3]\r\n\t\t\t\t\t[1,5,1]\r\n\t\t\t\t\t[3,1,1]]\r\n\r\n\t\tfor 1st iteration frame <--- [1,2,3] rest of two loops will not affect frame so in \r\n\t\t2nd itreration frame <--------[2,7,4] <-------- [1,2,3] + [1,5,1]\r\n\t\tnow we have to update frame so it can give max values for next row addition\r\n\t\t 0 1 2   \r\n\t\t[2,7,4] \r\n\t\t  \\ \r\n\t\t[2,7,4]  check left to right--> just check value at index 0 can contribute more than curr_sum at index 1 but to do so it has to give up (1-0) a penalty,here 7 can contribute more than 2-1=1 in next sum.\r\n\t\t2 7 4        now check for index 2,where (7-1)>4\r\n\t\t   \\\r\n\t\t2 7 6\r\n\t\t\t\t\tnow do in reverse,can 6 contribute more than 7 no ( 7 >(6-1) )  \r\n\t\t\t\t\tcan 7 contibute more than 2 yes (2<(7-1)),so now  frame will be\r\n\t\t6 7 6       now we can cal optimal-frame for rest of the matrix.\r\n\t+   3 1 1\r\n ------------------- \r\n\t\t9 8 7  check left to right--> can 9 can contibute 8>(9-1) no; can 8 can contibute for index 2 no simlier for right to left\r\n*/\r\n\r\nclass Solution {\r\n\tpublic long maxPoints(int[][] points) {\r\n\t\tlong[] frame = new long[points[0].length];\r\n\r\n\t\tfor (int i = 0; i < points.length; i++) {\r\n\t\t\tfor (int j = 0; j <frame.length; j ++) frame[j] += points[i][j];\r\n\r\n\t\t\tfor (int j = 1; j < frame.length; j ++) frame[j] = Math.max(frame[j], frame[j - 1] - 1);\r\n\r\n\t\t\tfor (int j=frame.length-2;j>=0;j--) frame[j] = Math.max(frame[j], frame[j + 1] - 1);\r\n\r\n\t\t\tfor(long k:frame) System.out.println(k);\r\n\t\t}\r\n\r\n\r\n\t\tlong ans = 0;\r\n\t\tfor (int i = 0; i < frame.length; i ++) {\r\n\t\t\tans = Math.max(ans, frame[i]);\r\n\t\t}\r\n\t\treturn ans;\r\n\t}\r\n}",
    "javascript": "// Runtime: 293 ms (Top 52.15%) | Memory: 77.7 MB (Top 55.38%)\r\nvar maxPoints = function(points) {\r\n    let prev = points[0];\r\n    let curr = Array(points[0].length);\r\n\r\n    for(let i = 1; i<points.length; i++){\r\n\r\n        // from left to right;\r\n        for(let j = 0, maxAdd=0; j<points[0].length;j++){\r\n            maxAdd = Math.max(maxAdd-1, prev[j]);\r\n            curr[j] = points[i][j] + maxAdd;\r\n        }\r\n\r\n        for(let j = points[0].length-1, maxAdd = 0; j>=0; j--){\r\n            maxAdd = Math.max(maxAdd-1, prev[j]);\r\n            curr[j] = Math.max(curr[j], points[i][j] + maxAdd)\r\n        }\r\n\r\n        prev = curr;\r\n        curr = Array(points[0].length)\r\n\r\n    }\r\n    return Math.max(...prev)\r\n};"
  }
}
