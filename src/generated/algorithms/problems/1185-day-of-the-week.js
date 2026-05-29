export default {
  "id": 1185,
  "name": "Day of the Week",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/day-of-the-week",
  "relativeDir": "D/Day of the Week",
  "slug": "1185-day-of-the-week",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 36,
    "java": 22,
    "python": 25,
    "javascript": 19
  },
  "languages": {
    "cpp": "// Runtime: 2 ms (Top 51.38%) | Memory: 6.50 MB (Top 21.72%)\r\n\r\nclass Solution {\r\npublic:\r\n    int daysOfMonth[2][12] = {\r\n        31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,\r\n        31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31\r\n    };\r\n    string weekName[7] = {\"Sunday\", \"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\", \"Saturday\"};\r\n    bool isleapyear(int year)\r\n    {\r\n        return ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0));\r\n    }\r\n    int daystill1971(int year, int month, int day)\r\n    {\r\n        int count = 0;\r\n        int year1 = 1970, month1 = 1, day1 = 1;\r\n        while (year1 != year)\r\n        {\r\n            bool b = isleapyear(year1);\r\n            if (b) count += 366;\r\n            else count += 365;\r\n            year1++;\r\n        }\r\n        int b = isleapyear(year1) ? 0 : 1;\r\n        for (int i = 0; i < month - 1; i++) count += daysOfMonth[b][i];\r\n        count += day - 1;\r\n        return count;\r\n    }\r\n    string dayOfTheWeek(int day, int month, int year) {\r\n        int days1 = daystill1971(2019, 9, 8);//today(2019,9,8) is Sunday\r\n        int days2 = daystill1971(year, month, day);\r\n        int days = (((days2 - days1) % 7) + 7) % 7;//Number of days off\r\n        return weekName[days];\r\n    }\r\n};",
    "python": "class Solution:\r\n    def dayOfTheWeek(self, day: int, month: int, year: int) -> str:\r\n        LOWEST_DAY, LOWEST_MONTH, LOWEST_YEAR, DAY = 1, 1, 1971, 5\r\n        DAYS = (\"Sunday\", \"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\", \"Saturday\")\r\n\r\n        difference = self.daysBetweenDates((LOWEST_DAY, LOWEST_MONTH, LOWEST_YEAR), (day, month, year))\r\n        return DAYS[(difference + DAY) % 7]\r\n\r\n    def daysBetweenDates(self, date1: tuple, date2: tuple) -> int:\r\n        LOWEST_YEAR = 1971\r\n\r\n        def daysSinceLowest(date: tuple) -> int:\r\n            day, month, year = date\r\n\r\n            isLeapYear = lambda x: 1 if (x % 4 == 0 and x % 100 != 0) or x % 400 == 0 else 0\r\n\r\n            days: int = 0\r\n            # days between the LOWEST_YEAR and year\r\n            days += 365 * (year - LOWEST_YEAR) + sum(map(isLeapYear, range(LOWEST_YEAR, year)))\r\n            # days between year and exact date\r\n            daysInMonth = (31, 28 + isLeapYear(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31)\r\n            days += sum(daysInMonth[:month - 1]) + day\r\n            return days\r\n\r\n        return abs(daysSinceLowest(date1) - daysSinceLowest(date2))",
    "java": "class Solution {\r\n    public String dayOfTheWeek(int day, int month, int year) {\r\n        String[] week = {\"Sunday\", \"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\", \"Saturday\"};\r\n        year--;\r\n        int total = (year/4)*366+(year-year/4)*365;\r\n        int[] months = {31,28,31,30,31,30,31,31,30,31,30,31};\r\n        year++;\r\n        if(year%4==0 && year!=2100){\r\n            months[1]++;\r\n        }\r\n        for(int i=0;i<month-1;i++){\r\n            total+= months[i];\r\n        }\r\n        total +=day;\r\n        // for(int i:months){\r\n        //     System.out.print(i+\" \");\r\n        // }\r\n        // System.out.println();\r\n        return week[(total-1)%7];\r\n        \r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number} day\r\n * @param {number} month\r\n * @param {number} year\r\n * @return {string}\r\n */\r\nvar dayOfTheWeek = function(day, month, year) {\r\n    var map = {\r\n        0: \"Sunday\",\r\n        1: \"Monday\",\r\n        2: \"Tuesday\",\r\n        3: \"Wednesday\",\r\n        4: \"Thursday\",\r\n        5: \"Friday\",\r\n        6: \"Saturday\"\r\n    };\r\n    var date = new Date(`${month}/${day}/${year}`);\r\n    return map[date.getDay()];\r\n};"
  }
}
