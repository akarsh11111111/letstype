export default {
  "id": 2224,
  "name": "Minimum Number of Operations to Convert Time",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-number-of-operations-to-convert-time",
  "relativeDir": "M/Minimum Number of Operations to Convert Time",
  "slug": "2224-minimum-number-of-operations-to-convert-time",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 19,
    "java": 18,
    "python": 18,
    "javascript": 16
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int HHMMToMinutes(string s){\r\n        return stoi(s.substr(0,2))*60 + stoi(s.substr(3,2));\r\n    }\r\n    int convertTime(string current, string correct) {\r\n        int diff = - HHMMToMinutes(current) +  HHMMToMinutes(correct);\r\n        vector<int> order = {60,15,5,1};\r\n        int i = 0;\r\n        int ans = 0;\r\n        while(i < 4){\r\n            ans+=(diff/order[i]);\r\n            diff%=order[i];\r\n            i++;\r\n        }\r\n        \r\n        return ans;\r\n    }\r\n};",
    "python": "// Runtime: 34 ms (Top 83.44%) | Memory: 17.40 MB (Top 22.74%)\r\n\r\nclass Solution:\r\n    def convertTime(self, current: str, correct: str) -> int:\r\n        def get_time(t):\r\n            hh, mm = t.split(':')\r\n            return int(hh) * 60 + int(mm)\r\n        \r\n        current, correct = get_time(current), get_time(correct)\r\n        operations = 0\r\n        diff = correct - current\r\n        \r\n        for mins in [60, 15, 5, 1]:\r\n            quotient, remainder = divmod(diff, mins)\r\n            operations += quotient\r\n            diff = remainder\r\n                \r\n        return operations",
    "java": "// Runtime: 2 ms (Top 77.73%) | Memory: 42.8 MB (Top 23.55%)\r\nclass Solution {\r\n    public int HHMMToMinutes(String s){\r\n        return Integer.parseInt(s.substring(0,2))*60 + Integer.parseInt(s.substring(3,5)) ;\r\n    }\r\n    public int convertTime(String current, String correct) {\r\n        int diff = HHMMToMinutes(correct) - HHMMToMinutes(current);\r\n        int[] order = {60,15,5,1};\r\n        int i = 0;\r\n        int ops = 0;\r\n        while(i < 4){\r\n            ops+=(diff/order[i]);\r\n            diff%=order[i];\r\n            i++;\r\n        }\r\n        return ops;\r\n    }\r\n}",
    "javascript": "var getTime = function(time){\r\n    var [hrs,mins] = time.split(\":\");\r\n    return parseInt(hrs)*60 + parseInt(mins);\r\n}\r\n\r\n\r\nvar convertTime = function(current, correct) {\r\n    var diff = getTime(correct) - getTime(current);\r\n    var order = [60,15,5,1];\r\n    var ops = 0;\r\n    order.forEach(val =>{\r\n        ops+=Math.floor((diff/val));\r\n        diff%=val;\r\n    })\r\n    return ops;\r\n};"
  }
}
