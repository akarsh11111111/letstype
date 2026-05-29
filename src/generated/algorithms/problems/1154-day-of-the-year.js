export default {
  "id": 1154,
  "name": "Day of the Year",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/day-of-the-year",
  "relativeDir": "D/Day of the Year",
  "slug": "1154-day-of-the-year",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 39,
    "java": 38,
    "python": 17,
    "javascript": 7
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool leapyear(int year){\r\n        return (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));\r\n    }\r\n        \r\n    int dayOfYear(string date) {\r\n        vector<int> v;\r\n        int ans = 0;\r\n        int n = date.length();\r\n        for (int i = 0; i < n; i++) {\r\n            if (date[i] >= '0' && date[i] <= '9') {\r\n                ans = ans * 10 + (date[i] - '0'); // subtract '0' to get the integer value\r\n            } else {\r\n                v.push_back(ans);\r\n                ans = 0;\r\n            }\r\n        }\r\n        v.push_back(ans); // add the last value to the vector\r\n        if (v.size() != 3) return -1; // error handling for invalid input\r\n        int year = v[0];\r\n        int month = v[1];\r\n        int day = v[2];\r\n        if (month == 1) return day;\r\n        if (month == 2) return 31 + day;\r\n       \r\n        if (month == 3) return leapyear(year) ? 60 + day : 59 + day;\r\n         if (month == 4) return leapyear(year) ? 91 + day : 90 + day;\r\n         if (month == 5) return leapyear(year) ? 121 + day : 120 + day;\r\n         if (month == 6) return leapyear(year) ? 152 + day : 151 + day;\r\n         if (month == 7) return leapyear(year) ? 182 + day : 181 + day;\r\n         if (month == 8) return leapyear(year) ? 213 + day : 212 + day;\r\n         if (month == 9) return leapyear(year) ? 244 + day : 243 + day;\r\n         if (month == 10) return leapyear(year) ? 274+ day : 273 + day;\r\n         if (month == 11) return leapyear(year) ? 305 + day : 304 + day;\r\n         if (month == 12) return leapyear(year) ? 335 + day : 334 + day;\r\n        return -1;\r\n    }\r\n};",
    "python": "// Runtime: 123 ms (Top 44.98%) | Memory: 14 MB (Top 32.35%)\r\nclass Solution:\r\n    def dayOfYear(self, date: str) -> int:\r\n        d={1:31,2:28,3:31,4:30,5:31,6:30,7:31,8:31,9:30,10:31,11:30,12:31}\r\n        year=int(date[:4])\r\n        if year%4==0:\r\n            if year%100==0:\r\n                if year%400==0:\r\n                    d[2]=29\r\n            else:\r\n                d[2]=29\r\n        month=int(date[5:7])\r\n        day=int(date[8:])\r\n        ans=0\r\n        for i in range(1,month+1):\r\n            ans+=d[i]\r\n        return ans-(d[month]-day)",
    "java": "// Runtime: 14 ms (Top 18.15%) | Memory: 44.20 MB (Top 65.48%)\r\n\r\nclass Solution {\r\n    public int dayOfYear(String date) {\r\n        int days = 0;\r\n        int[] arr = {31,28,31,30,31,30,31,31,30,31,30,31};\r\n        String[] year = date.split(\"-\");\r\n        int y = Integer.valueOf(year[0]);\r\n        int month = Integer.valueOf(year[1]);\r\n        int day = Integer.valueOf(year[2]);\r\n        boolean leap = false;\r\n        for(int i = 0; i < month-1; i++){\r\n            days = days+arr[i];\r\n        }\r\n        days = days+day;\r\n        if(y%4==0){\r\n            if(y%100==0){\r\n                if(y%400==0){\r\n                    leap = true;\r\n                }\r\n                else{\r\n                    leap = false;\r\n                }\r\n            }\r\n            else{\r\n                leap = true;\r\n            }\r\n        }\r\n        else{\r\n            leap = false;\r\n        }\r\n        if(leap==true && month>2){\r\n            System.out.println(\"Leap Year\");\r\n            days = days+1;\r\n        }\r\n        return days;\r\n    }\r\n}",
    "javascript": "// Runtime: 398 ms (Top 16.77%) | Memory: 51.3 MB (Top 62.28%)\r\nvar dayOfYear = function(date) {\r\n    let dat2 = new Date(date)\r\n    let dat1 = new Date(dat2.getFullYear(),00,00)\r\n    let totalTime = dat2 - dat1\r\n    return Math.floor(totalTime/1000/60/60/24)\r\n};"
  }
}
