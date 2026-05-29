export default {
  "id": 1732,
  "name": "Find the Highest Altitude",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-the-highest-altitude",
  "relativeDir": "F/Find the Highest Altitude",
  "slug": "1732-find-the-highest-altitude",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 16,
    "java": 14,
    "python": 5,
    "javascript": 13
  },
  "languages": {
    "cpp": "// Runtime: 4 ms (Top 37.21%) | Memory: 8.30 MB (Top 69.02%)\r\n\r\nclass Solution {\r\npublic:\r\n    int largestAltitude(vector<int>& gain) {\r\n        int maxAltitude = 0;\r\n        int currentAltitude = 0;\r\n        \r\n        for (int i = 0; i < gain.size(); i++) {\r\n            currentAltitude += gain[i];\r\n            maxAltitude = max(maxAltitude, currentAltitude);\r\n        }\r\n        \r\n        return maxAltitude;\r\n    }\r\n};",
    "python": "# Runtime: 50 ms (Top 25.7%) | Memory: 16.17 MB (Top 90.4%)\r\n\r\nclass Solution:\r\n    def largestAltitude(self, gain: List[int]) -> int:\r\n        return max(accumulate([0]+gain))",
    "java": "// Runtime: 0 ms (Top 100.00%) | Memory: 39.7 MB (Top 97.89%)\r\nclass Solution {\r\n    public int largestAltitude(int[] gain) {\r\n         int max_alt=0;\r\n        int curr_alt=0;\r\n        for(int i=0;i<gain.length;i++){\r\n            curr_alt+=gain[i];\r\n            max_alt=Math.max(curr_alt, max_alt);\r\n        }\r\n        return max_alt;\r\n    }\r\n}\r\n\r\n//TC: O(n), SC: O(1)",
    "javascript": "// Runtime: 93 ms (Top 44.76%) | Memory: 41.9 MB (Top 75.92%)\r\nvar largestAltitude = function(gain) {\r\n    let points = [0]\r\n    let highest = 0\r\n\r\n    for (let i = 0; i < gain.length; i++) {\r\n        let point = points[i] + gain[i]\r\n        points.push(point)\r\n        if (point > highest) highest = point\r\n    }\r\n\r\n    return highest\r\n};"
  }
}
