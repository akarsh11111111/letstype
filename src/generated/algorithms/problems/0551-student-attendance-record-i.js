export default {
  "id": 551,
  "name": "Student Attendance Record I",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/student-attendance-record-i",
  "relativeDir": "S/Student Attendance Record I",
  "slug": "0551-student-attendance-record-i",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 26,
    "java": 10,
    "python": 17,
    "javascript": 17
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool checkRecord(string s);\r\n};\r\n/*********************************************************/\r\nbool Solution::checkRecord(string s) {\r\n    int i, size = s.size(), maxL=0, countA=0, countL=0;\r\n    for (i = 0; i < size; ++i) {\r\n        if (s[i] == 'L') {\r\n            ++countL;\r\n        } else {\r\n            countL = 0;\r\n        }\r\n        if (s[i] == 'A') {\r\n            ++countA;\r\n        }\r\n        if (maxL < countL) {\r\n            maxL = countL;\r\n        }\r\n        if( countA >= 2 || maxL >= 3) {\r\n            return false;\r\n        }\r\n    }\r\n    return true;\r\n}\r\n/*********************************************************/",
    "python": "# Runtime: 76 ms (Top 5.14%) | Memory: 13.9 MB (Top 11.51%)\r\nclass Solution:\r\n    def checkRecord(self, s: str) -> bool:\r\n        eligible = True\r\n\r\n        for i in range(0, len(s)-2):\r\n            if s[i:i+3] == \"LLL\":\r\n                eligible = False\r\n        absent = 0\r\n        for i in range(len(s)):\r\n            if s[i] == \"A\":\r\n                absent +=1\r\n\r\n        if absent>=2:\r\n            eligible = False\r\n\r\n        return(eligible)",
    "java": "class Solution {\r\n    public boolean checkRecord(String s) {\r\n\r\n    int size=s.length();\r\n    if(s.replace(\"A\",\"\").length()<=size-2||s.indexOf(\"LLL\")!=-1)return false;\r\n\r\n    return true;\r\n\r\n    }\r\n}",
    "javascript": "var checkRecord = function(s) {\r\n    let absent = 0;\r\n    let lates = 0;\r\n    for (let i = 0; i < s.length; i++) {\r\n        if(s[i] === 'L') {\r\n            lates++;\r\n            if(lates > 2) return false;\r\n        } else {\r\n            lates = 0;\r\n            if(s[i] === 'A') {\r\n                absent++;\r\n                if(absent > 1) return false; \r\n            }\r\n        }\r\n    }\r\n    return true;\r\n};"
  }
}
