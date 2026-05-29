export default {
  "id": 1344,
  "name": "Angle Between Hands of a Clock",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/angle-between-hands-of-a-clock",
  "relativeDir": "A/Angle Between Hands of a Clock",
  "slug": "1344-angle-between-hands-of-a-clock",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 13,
    "java": 15,
    "python": 5,
    "javascript": 4
  },
  "languages": {
    "cpp": "// Runtime: 3 ms (Top 36.61%) | Memory: 5.9 MB (Top 34.68%)\r\nclass Solution {\r\npublic:\r\n    double angleClock(int hour, int minutes) {\r\n\r\n        double hourAngle = 30*(double(hour) + double(minutes/60.0));\r\n\r\n        double minuteAngle = 6 * (double)minutes;\r\n\r\n        return 180 - abs(180 - abs(minuteAngle - hourAngle));\r\n\r\n    }\r\n};",
    "python": "class Solution:\r\n    def angleClock(self, hour: int, minutes: int) -> float:\r\n        \r\n        x = abs(minutes * 6 -(hour * 30 + minutes/2))\r\n        return min(360-x , x)",
    "java": "// Runtime: 0 ms (Top 100.00%) | Memory: 41.2 MB (Top 38.02%)\r\nclass Solution {\r\n    public double angleClock(int hour, int minutes) {\r\n        // Position of hour hand in a circle of 0 - 59\r\n        double hrPos = 5 * (hour % 12);\r\n\r\n        // Adjust hour hand position according to minute hand\r\n        hrPos += (5 * minutes/60.0);\r\n\r\n        double units = Math.abs(minutes - hrPos);\r\n\r\n        // Take the min of distance between minute & hour hand and hour & minute hand\r\n        return Math.min(units, 60-units) * 6;\r\n    }\r\n}",
    "javascript": "var angleClock = function(hour, minutes) {\r\n    const angle = Math.abs((hour * 30) - 5.5 * minutes)\r\n    return angle > 180 ? 360 - angle : angle\r\n};"
  }
}
