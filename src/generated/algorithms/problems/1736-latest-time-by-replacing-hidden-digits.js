export default {
  "id": 1736,
  "name": "Latest Time by Replacing Hidden Digits",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/latest-time-by-replacing-hidden-digits",
  "relativeDir": "L/Latest Time by Replacing Hidden Digits",
  "slug": "1736-latest-time-by-replacing-hidden-digits",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 22,
    "java": 22,
    "python": 33,
    "javascript": 9
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    string maximumTime(string time) {\r\n        //for time[0]\r\n        //if both characters of hour is ?, then hour is 23 then time[0] should be '2'(\"??:3?)\".\r\n        //if 2nd character of hour is <= 3, then hour can be in 20s  then time[0] should be '2'.\r\n        //if 2nd character of hour is >3, then hour can only be in 10s  then time[0] should be '1'.\r\n        if(time[0]=='?')\r\n            time[0]= (time[1]<='3' || time[1]=='?') ? '2' : '1';\r\n        //if 1st character of hour is 0 or 1, then hour can be 09 or 19 then time[1] should be '9'.\r\n        //if 1st character of hour is 2, then hour can be 23 then time[1] should be '3'.\r\n        if(time[1]=='?')\r\n            time[1]= time[0]=='2' ? '3' : '9';\r\n        //if both characters of minute is ? then minute is 59, or only 4th character is ? then 5_ so time[3] is always '5'.\r\n        if(time[3]=='?')\r\n            time[3]='5';\r\n        //if 2nd character of minute is ?, then time[4] is '9'.\r\n        if(time[4]=='?')\r\n            time[4]='9';\r\n        return time;\r\n    }\r\n};",
    "python": "class Solution:\r\ndef maximumTime(self, time: str) -> str:\r\n    memo = {\"0\":\"9\",\r\n            \"1\":\"9\",\r\n            \"?\":\"3\", \r\n            \"2\":\"3\"}\r\n    \r\n    answer = \"\"\r\n    for idx, val in enumerate(time):\r\n        if val == \"?\":\r\n            if idx == 0:\r\n                if time[idx+1] == \"?\":\r\n                    answer += \"2\"\r\n                    \r\n                else:\r\n                    if int(time[idx+1]) >= 4:\r\n                        answer += \"1\"\r\n                \r\n                    else: answer += \"2\"\r\n                \r\n            if idx == 1:\r\n                answer += memo[time[idx-1]]\r\n            \r\n            if idx == 3:\r\n                answer += \"5\"   \r\n                \r\n            if idx == 4:\r\n                answer += \"9\"\r\n        \r\n        else:\r\n            answer += val\r\n    \r\n    return answer",
    "java": "class Solution {\r\n    public String maximumTime(String time) {\r\n        char[] times = time.toCharArray();\r\n        //for times[0]\r\n        //if both characters of hour is ?, then hour is 23 then times[0] should be '2'(\"??:3?)\".\r\n        //if 2nd character of hour is <= 3, then hour can be in 20s  then times[0] should be '2'.\r\n        //if 2nd character of hour is >3, then hour can only be in 10s  then times[0] should be '1'.\r\n        if(times[0]=='?')\r\n            times[0]= (times[1]<='3' || times[1]=='?') ? '2' : '1';\r\n        //if 1st character of hour is 0 or 1, then hour can be 09 or 19 then times[1] should be '9'.\r\n        //if 1st character of hour is 2, then hour can be 23 then times[1] should be '3'.\r\n        if(times[1]=='?')\r\n            times[1]= times[0]=='2' ? '3' : '9';\r\n        //if both characters of minute is ? then minute is 59, or only 4th character is ? then 5_ so times[3] is always '5'.\r\n        if(times[3]=='?')\r\n            times[3]='5';\r\n        //if 2nd character of minute is ?, then times[4] is '9'.\r\n        if(times[4]=='?')\r\n            times[4]='9';\r\n        return new String(times);\r\n    }\r\n}",
    "javascript": "// Runtime: 97 ms (Top 33.68%) | Memory: 42.5 MB (Top 7.37%)\r\nvar maximumTime = function(time) {\r\n    time = time.split('')\r\n    if (time[0] === \"?\") time[0] = time[1] > 3 ? \"1\" : \"2\"\r\n    if (time[1] === \"?\") time[1] = time[0] > 1 ? \"3\" : \"9\"\r\n    if (time[3] === \"?\") time[3] = \"5\"\r\n    if (time[4] === \"?\") time[4] = \"9\"\r\n    return time.join('')\r\n};"
  }
}
