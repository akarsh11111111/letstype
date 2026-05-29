export default {
  "id": 1629,
  "name": "Slowest Key",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/slowest-key",
  "relativeDir": "S/Slowest Key",
  "slug": "1629-slowest-key",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 20,
    "java": 17,
    "python": 14,
    "javascript": 11
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    char slowestKey(vector<int>& releaseTimes, string keysPressed) {\r\n        int time = releaseTimes[0], new_time = 0;\r\n        char key = keysPressed[0];\r\n        \r\n        for (int i = 1; i < releaseTimes.size(); i++) {\r\n            new_time = releaseTimes[i] - releaseTimes[i-1];\r\n            \r\n            if (new_time == time) \r\n                key = keysPressed[i] > key ? keysPressed[i] : key;\r\n            \r\n            else if (new_time > time) {\r\n                time = new_time;\r\n                key = keysPressed[i];\r\n            }\r\n        }\r\n        return key;\r\n    }\r\n};",
    "python": "# Runtime: 111 ms (Top 25.49%) | Memory: 14.1 MB (Top 45.43%)\r\nclass Solution:\r\n    def slowestKey(self, releaseTimes: List[int], keysPressed: str) -> str:\r\n        max_dur = releaseTimes[0]\r\n        max_key = keysPressed[0]\r\n\r\n        for i in range(1, len(releaseTimes)):\r\n            if releaseTimes[i] - releaseTimes[i-1] > max_dur:\r\n                max_dur = releaseTimes[i] - releaseTimes[i-1]\r\n                max_key = keysPressed[i]\r\n            elif releaseTimes[i] - releaseTimes[i-1] == max_dur and max_key < keysPressed[i]:\r\n                 max_key = keysPressed[i]\r\n\r\n        return max_key",
    "java": "class Solution {\r\n    public char slowestKey(int[] releaseTimes, String keysPressed) {\r\n        int max = releaseTimes[0];\r\n        char ch = keysPressed.charAt(0);\r\n        for(int i=1;i<releaseTimes.length;i++){\r\n            int diff = releaseTimes[i]-releaseTimes[i-1];\r\n            if( diff >= max){\r\n                if(diff>max)\r\n                    ch = keysPressed.charAt(i);\r\n                else if(diff== max)\r\n                    ch = (char)Math.max((int) ch, (int) keysPressed.charAt(i));\r\n                max = diff;\r\n            }   \r\n        }\r\n        return ch;      \r\n    }    \r\n}",
    "javascript": "var slowestKey = function(releaseTimes, keysPressed) {\r\nlet maxDuration = releaseTimes[0], char=keysPressed[0];\r\nfor (let i = 1; i < releaseTimes.length; i++) {\r\n    if (releaseTimes[i]-releaseTimes[i-1]==maxDuration && keysPressed[i]>char) char=keysPressed[i]\r\n    else if (releaseTimes[i]-releaseTimes[i-1]>maxDuration) {\r\n        char=keysPressed[i];\r\n        maxDuration=releaseTimes[i]-releaseTimes[i-1];\r\n    }\r\n}\r\nreturn char;    \r\n};"
  }
}
