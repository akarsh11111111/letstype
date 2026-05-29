export default {
  "id": 495,
  "name": "Teemo Attacking",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/teemo-attacking",
  "relativeDir": "T/Teemo Attacking",
  "slug": "0495-teemo-attacking",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 17,
    "java": 16,
    "python": 24,
    "javascript": 11
  },
  "languages": {
    "cpp": "// Runtime: 26 ms (Top 90.8%) | Memory: 26.10 MB (Top 93.66%)\r\n\r\nclass Solution {\r\npublic:\r\n    int findPoisonedDuration(vector<int>& timeSeries, int duration) {\r\n        if (timeSeries.size() == 0)\r\n            return 0;\r\n        int res = 0;\r\n        for(int i=0; i<timeSeries.size()-1; i++) {\r\n            if (timeSeries[i+1] - timeSeries[i] < duration)\r\n                res += timeSeries[i+1] - timeSeries[i];\r\n            else\r\n                res += duration;\r\n        }\r\n        return res+duration;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def findPoisonedDuration(self, timeSeries: List[int], duration: int) -> int:\r\n        \r\n        \"\"\"\r\n        timeDur = (timeSeries[0], timeSeries[0] + duration - 1)\r\n        i = 1\r\n        total = 0\r\n        while i < len(timeSeries):\r\n            if timeSeries[i] > timeDur[1]:\r\n                total += (timeDur[1] - timeDur[0] + 1)\r\n            else:\r\n                total += (timeSeries[i] - timeDur[0])\r\n            timeDur = (timeSeries[i], timeSeries[i] + duration - 1)\r\n            i += 1\r\n        total += (timeDur[1] - timeDur[0] + 1)\r\n        return total\r\n        \r\n        \"\"\"\r\n        # Between two interval, Ashe can be poisoned only for max duration time,\r\n        # if time differece is less than duranton, then we that value\r\n        total = 0\r\n        for i in range(len(timeSeries)-1):\r\n            total += min(duration, timeSeries[i+1] - timeSeries[i])\r\n        return total + duration",
    "java": "// Teemo Attacking\r\n// https://leetcode.com/problems/teemo-attacking/\r\n\r\nclass Solution {\r\n    public int findPoisonedDuration(int[] timeSeries, int duration) {\r\n        int sum = 0;\r\n        for (int i = 0; i < timeSeries.length; i++) {\r\n            if (i == 0) {\r\n                sum += duration;\r\n            } else {\r\n                sum += Math.min(duration, timeSeries[i] - timeSeries[i - 1]);\r\n            }\r\n        }\r\n        return sum;       \r\n    }\r\n}",
    "javascript": "// Runtime: 100 ms (Top 50.69%) | Memory: 45.4 MB (Top 78.13%)\r\nvar findPoisonedDuration = function(timeSeries, duration) {\r\n    let totalTime=duration\r\n\r\n    for(let i=0;i+1<timeSeries.length;i++){\r\n        let diff=timeSeries[i+1]-timeSeries[i]\r\n        totalTime+= diff>duration ? duration : diff\r\n    }\r\n    return totalTime\r\n\r\n};"
  }
}
