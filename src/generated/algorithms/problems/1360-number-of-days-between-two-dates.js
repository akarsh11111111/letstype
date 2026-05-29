export default {
  "id": 1360,
  "name": "Number of Days Between Two Dates",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/number-of-days-between-two-dates",
  "relativeDir": "N/Number of Days Between Two Dates",
  "slug": "1360-number-of-days-between-two-dates",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 25,
    "java": 49,
    "python": 5,
    "javascript": 6
  },
  "languages": {
    "cpp": "class Solution\r\n{\r\npublic:\r\n    int days[12] = {31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};\r\n    bool isLeap(int y)\r\n    {\r\n        return (y % 4 == 0 && (y % 100 != 0 || y % 400 == 0));\r\n    }\r\n    int calc(string s)\r\n    {\r\n        int y = stoi(s.substr(0, 4));\r\n        int m = stoi(s.substr(5, 2));\r\n        int d = stoi(s.substr(8));\r\n        for (int i = 1971; i < y; i++)\r\n            d += isLeap(i) ? 366 : 365;\r\n        d += accumulate(begin(days), begin(days) + m - 1, 0);\r\n        d += (m > 2 && isLeap(y)) ? 1 : 0;\r\n        return d;\r\n    }\r\n    int daysBetweenDates(string date1, string date2)\r\n    {\r\n        int ans = abs(calc(date2) - calc(date1));\r\n        return ans;\r\n    }\r\n};",
    "python": "from datetime import date\r\n\r\nclass Solution:\r\n    def daysBetweenDates(self, date1: str, date2: str) -> int:\r\n        return abs((date.fromisoformat(date2) - date.fromisoformat(date1)).days)",
    "java": "class Solution {\r\n    public int daysBetweenDates(String date1, String date2) {\r\n        String[] d1 = date1.split(\"-\");\r\n        String[] d2 = date2.split(\"-\");\r\n        return (int)Math.abs(\r\n            daysFrom1971(Integer.parseInt(d1[0]), Integer.parseInt(d1[1]), Integer.parseInt(d1[2]))\r\n            - daysFrom1971(Integer.parseInt(d2[0]), Integer.parseInt(d2[1]), Integer.parseInt(d2[2])));\r\n    }\r\n    private int daysFrom1971(int year, int month, int day) {\r\n        int total = 0;\r\n\t\t// count years first\r\n        total += (year - 1971) * 365;\r\n        for (int i = 1972; i < year; i += 4) {\r\n            if (isLeapYear(i)) total++;\r\n        }        \r\n        int feb = isLeapYear(year) ? 29 : 28;\r\n\t\t// sum months and days\r\n        switch (month) {\r\n            case 12: \r\n                total += 30; // 11\r\n            case 11:\r\n                total += 31; // 10\r\n            case 10: \r\n                total += 30; // 9\r\n            case 9:\r\n                total += 31; // 8\r\n            case 8:\r\n                total += 31; // 7\r\n            case 7: \r\n                total += 30; // 6\r\n            case 6:\r\n                total += 31; // 5\r\n            case 5:\r\n                total += 30; // 4\r\n            case 4: \r\n                total += 31; // 3\r\n            case 3: \r\n                total += feb; // 2\r\n            case 2:\r\n                total += 31;\r\n            case 1:\r\n                total += day;                \r\n        }\r\n        return total;\r\n    }\r\n    private boolean isLeapYear(int i) {\r\n        return (i % 4 == 0) && ((i % 100 == 0 && i % 400 == 0) || i % 100 != 0);\r\n    }\r\n}",
    "javascript": "// Runtime: 94 ms (Top 40.52%) | Memory: 41.3 MB (Top 100.00%)\r\nvar daysBetweenDates = function(date1, date2) {\r\n     let miliSecondInaDay = 24*60*60*1000;\r\n     if(date1>date2) return (new Date(date1) - new Date(date2)) / miliSecondInaDay\r\n     else return (new Date(date2) - new Date(date1)) / miliSecondInaDay\r\n};"
  }
}
