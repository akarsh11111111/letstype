export default {
  "id": 1450,
  "name": "Number of Students Doing Homework at a Given Time",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time",
  "relativeDir": "N/Number of Students Doing Homework at a Given Time",
  "slug": "1450-number-of-students-doing-homework-at-a-given-time",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 10,
    "java": 9,
    "python": 10,
    "javascript": 10
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int busyStudent(vector<int>& startTime, vector<int>& endTime, int queryTime) {\r\n        int ans = 0 ;\r\n        for(int i = 0 ; i < size(startTime); ++i )\r\n            if(queryTime >= startTime[i] and queryTime <= endTime[i]) ++ans ;\r\n        \r\n        return ans ;\r\n    }\r\n};",
    "python": "# Runtime: 67 ms (Top 36.82%) | Memory: 13.9 MB (Top 71.93%)\r\nclass Solution(object):\r\n    def busyStudent(self, startTime, endTime, queryTime):\r\n        res = 0\r\n        for i in range(len(startTime)):\r\n            if startTime[i] <= queryTime <= endTime[i]:\r\n                res += 1\r\n            else:\r\n                pass\r\n        return res",
    "java": "class Solution {\r\n    public int busyStudent(int[] startTime, int[] endTime, int queryTime) {\r\n        int count = 0;\r\n        for (int i = 0; i < startTime.length; ++i) {\r\n            if (queryTime>=startTime[i] && queryTime<=endTime[i]) ++count;\r\n        }\r\n        return count;\r\n    }\r\n}",
    "javascript": "// Runtime: 83 ms (Top 59.55%) | Memory: 41.9 MB (Top 67.73%)\r\nvar busyStudent = function(startTime, endTime, queryTime) {\r\n    let res = 0;\r\n\r\n    for (let i = 0; i < startTime.length; i++) {\r\n        if (startTime[i] <= queryTime && endTime[i] >= queryTime) res++;\r\n    }\r\n\r\n    return res;\r\n};"
  }
}
