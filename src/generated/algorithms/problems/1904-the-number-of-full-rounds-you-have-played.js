export default {
  "id": 1904,
  "name": "The Number of Full Rounds You Have Played",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/the-number-of-full-rounds-you-have-played",
  "relativeDir": "T/The Number of Full Rounds You Have Played",
  "slug": "1904-the-number-of-full-rounds-you-have-played",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 18,
    "java": 15,
    "python": 10,
    "javascript": 27
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int solve(string s)\r\n    {\r\n        int hour=stoi(s.substr(0,2));\r\n        int min=stoi(s.substr(3,5));\r\n        return hour*60+min;\r\n    }\r\n    int numberOfRounds(string loginTime, string logoutTime) {\r\n        int st=solve(loginTime);\r\n        int et=solve(logoutTime);\r\n        int ans=0;\r\n        if(st>et) et=et+1440;\r\n        if(st%15!=0) st=st+(15-st%15);\r\n        ans=(et-st)/15;\r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 41 ms (Top 45.3%) | Memory: 16.25 MB (Top 71.7%)\r\n\r\nclass Solution:\r\n    def numberOfRounds(self, startTime: str, finishTime: str) -> int:\r\n        hs, ms = (int(x) for x in startTime.split(\":\"))\r\n        ts = 60 * hs + ms\r\n        hf, mf = (int(x) for x in finishTime.split(\":\"))\r\n        tf = 60 * hf + mf\r\n        if 0 <= tf - ts < 15: return 0 # edge case \r\n        return tf//15 - (ts+14)//15 + (ts>tf)*96",
    "java": "// Runtime: 1 ms (Top 91.49%) | Memory: 42.3 MB (Top 21.28%)\r\nclass Solution {\r\n    public int numberOfRounds(String loginTime, String logoutTime) {\r\n        String[] arr1 = loginTime.split(\":\");\r\n        String[] arr2 = logoutTime.split(\":\");\r\n\r\n        int time1 = Integer.parseInt(arr1[0])*60 + Integer.parseInt(arr1[1]);\r\n        int time2 = Integer.parseInt(arr2[0])*60 + Integer.parseInt(arr2[1]);\r\n\r\n        if(time1 > time2) time2 = time2 + 24*60;\r\n        if(time1%15 != 0) time1 = time1 + 15-time1%15;\r\n\r\n        return (time2 - time1)/15;\r\n    }\r\n}",
    "javascript": "// Runtime: 108 ms (Top 35.29%) | Memory: 42.1 MB (Top 52.94%)\r\nvar numberOfRounds = function(loginTime, logoutTime) {\r\n    const start = toMins(loginTime);\r\n    const end = toMins(logoutTime);\r\n\r\n    let roundStart = Math.ceil(start / 15);\r\n    let roundEnd = Math.floor(end / 15);\r\n\r\n    if (start < end) {\r\n        return Math.max(0, roundEnd - roundStart);\r\n    }\r\n    else {\r\n        roundEnd += 96;\r\n        return roundEnd - roundStart;\r\n    }\r\n\r\n    function toMins(timeStr) {\r\n        const [hh, mm] = timeStr.split(\":\");\r\n\r\n        let totMins = 0;\r\n\r\n        totMins += parseInt(hh) * 60;\r\n        totMins += parseInt(mm);\r\n\r\n        return totMins;\r\n    }\r\n};"
  }
}
