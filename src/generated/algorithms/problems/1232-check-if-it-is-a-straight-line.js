export default {
  "id": 1232,
  "name": "Check If It Is a Straight Line",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/check-if-it-is-a-straight-line",
  "relativeDir": "C/Check If It Is a Straight Line",
  "slug": "1232-check-if-it-is-a-straight-line",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 15,
    "java": 39,
    "python": 17,
    "javascript": 13
  },
  "languages": {
    "cpp": "// Runtime: 4 ms (Top 82.49%) | Memory: 13.10 MB (Top 6.08%)\r\n\r\nclass Solution {\r\npublic:\r\n    bool checkStraightLine(vector<vector<int>>& coordinates) {\r\n        int dx = (coordinates[1][1] - coordinates[0][1]);\r\n        int dy = (coordinates[1][0] - coordinates[0][0]);\r\n        for(int i=2; i<coordinates.size(); i++)\r\n        {\r\n            if(dx*(coordinates[i][0] - coordinates[1][0]) != dy*(coordinates[i][1] - coordinates[1][1]))\r\n                return false;\r\n        }\r\n        return true;\r\n    }\r\n};",
    "python": "class Solution(object):\r\n    def checkStraightLine(self, coordinates):\r\n        \"\"\"\r\n        :type coordinates: List[List[int]]\r\n        :rtype: bool\r\n        \"\"\"\r\n        if len(coordinates) == 2:\r\n            return True\r\n        \r\n        num = coordinates[1][1] - coordinates[0][1]\r\n        den = coordinates[1][0] - coordinates[0][0]\r\n        \r\n        for i in range(2, len(coordinates)):\r\n            if num * (coordinates[i][0] - coordinates[0][0]) != den * (coordinates[i][1] - coordinates[0][1]):\r\n                return False\r\n        \r\n        return True",
    "java": "class Solution {\r\n    public boolean checkStraightLine(int[][] coordinates) {\r\n        int x1=coordinates[0][0];\r\n        int y1=coordinates[0][1];\r\n        \r\n        int x2=coordinates[1][0];\r\n        int y2=coordinates[1][1];\r\n        \r\n        float slope;\r\n        if(x2-x1 == 0)\r\n        {\r\n            slope=Integer.MAX_VALUE;\r\n        }\r\n        else\r\n        {\r\n            slope=(y2-y1)/(float)(x2-x1);\r\n        }\r\n        for(int i=0;i<coordinates.length;i++)\r\n        {\r\n            for(int j=0;j<2;j++)\r\n            {\r\n                if(slope==Integer.MAX_VALUE)\r\n                {\r\n                    if(coordinates[i][0]!=x1)\r\n                        return false;\r\n                }\r\n                else\r\n                {\r\n                    int y=coordinates[i][1];\r\n                    int x=coordinates[i][0];\r\n                    if((float)(y-y1) != slope*(x-x1))\r\n                        return false;\r\n                }\r\n                    \r\n            }\r\n        }\r\n        return true;\r\n    }\r\n}",
    "javascript": "var checkStraightLine = function(coordinates) {\r\n    coordinates.sort((a, b) => a[1] - b[1])\r\n    \r\n    let slopeToCheck = (coordinates[1][1] - coordinates[0][1]) / (coordinates[1][0] - coordinates[0][0])\r\n    \r\n    for (let i = 2; i < coordinates.length; i++) {\r\n        let currSlope = (coordinates[i][1] - coordinates[i - 1][1]) / (coordinates[i][0] - coordinates[i - 1][0]);\r\n        \r\n        if (currSlope !== slopeToCheck) return false;\r\n    }\r\n    \r\n    return true;\r\n};"
  }
}
