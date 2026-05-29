export default {
  "id": 1769,
  "name": "Minimum Number of Operations to Move All Balls to Each Box",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box",
  "relativeDir": "M/Minimum Number of Operations to Move All Balls to Each Box",
  "slug": "1769-minimum-number-of-operations-to-move-all-balls-to-each-box",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 21,
    "java": 17,
    "python": 14,
    "javascript": 21
  },
  "languages": {
    "cpp": "// Runtime: 287 ms (Top 34.81%) | Memory: 9.4 MB (Top 44.61%)\r\nclass Solution {\r\npublic:\r\n    vector<int> minOperations(string boxes) {\r\n        int n = boxes.size();\r\n        vector<int> ans;\r\n        for(int i = 0; i < n; i++)\r\n        {\r\n            int res = 0;\r\n            for(int j = 0; j < n; j++)\r\n            {\r\n                if(boxes[j] == '1')\r\n                {\r\n                    res += abs(i-j);\r\n                }\r\n            }\r\n            ans.push_back(res);\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 68 ms (Top 97.39%) | Memory: 14.2 MB (Top 53.70%)\r\nclass Solution:\r\n    def minOperations(self, boxes: str) -> List[int]:\r\n        ans = [0]*len(boxes)\r\n        leftCount, leftCost, rightCount, rightCost, n = 0, 0, 0, 0, len(boxes)\r\n        for i in range(1, n):\r\n            if boxes[i-1] == '1': leftCount += 1\r\n            leftCost += leftCount # each step move to right, the cost increases by # of 1s on the left\r\n            ans[i] = leftCost\r\n        for i in range(n-2, -1, -1):\r\n            if boxes[i+1] == '1': rightCount += 1\r\n            rightCost += rightCount\r\n            ans[i] += rightCost\r\n        return ans",
    "java": "// Runtime: 135 ms (Top 50.7%) | Memory: 44.02 MB (Top 24.4%)\r\n\r\nclass Solution{\r\n    public int[] minOperations(String boxes){\r\n        int n = boxes.length();\r\n        int[] ans = new int[n];\r\n        for(int i=0; i<n; i++){\r\n            int t = 0;\r\n            for(int j=0; j<n; j++){\r\n                char c = boxes.charAt(j);\r\n                if(c=='1') t += Math.abs(i-j);\r\n            }\r\n            ans[i] = t;\r\n        }\r\n        return ans;\r\n    }\r\n}",
    "javascript": " var minOperations = function(boxes) {\r\n    \r\n    const ans = new Array(boxes.length).fill(0);\r\n\r\n    let ballsLeft = 0, ballsRight = 0;\r\n    let movesLeft = 0, movesRight = 0;\r\n\r\n    const len = boxes.length - 1;\r\n    \r\n    for(let i = 0; i <= len; i++) {\r\n       \r\n       movesLeft += ballsLeft;\r\n       movesRight += ballsRight;\r\n       ans[i] += movesLeft;\r\n       ans[len - i] += movesRight;\r\n       ballsLeft += +boxes[i];\r\n       ballsRight += +boxes[len - i];\r\n    }\r\n\r\n    return ans;\r\n};"
  }
}
