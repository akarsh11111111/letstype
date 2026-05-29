export default {
  "id": 2079,
  "name": "Watering Plants",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/watering-plants",
  "relativeDir": "W/Watering Plants",
  "slug": "2079-watering-plants",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 19,
    "java": 17,
    "python": 16,
    "javascript": 14
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n\tint wateringPlants(vector<int>& plants, int capacity) {\r\n\t\tint result = 0;\r\n\t\tint curCap = capacity;\r\n\r\n\t\tfor (int i=0; i < plants.size(); i++){\r\n\t\t\tif (curCap >= plants[i]){\r\n\t\t\t\tcurCap -= plants[i];\r\n\t\t\t\tresult++;    \r\n\t\t\t}\r\n\t\t\telse{\r\n\t\t\t\tresult += i * 2 + 1;\r\n\t\t\t\tcurCap = capacity - plants[i];\r\n\t\t\t}\r\n\t\t}\r\n\t\treturn result;\r\n\t}\r\n};",
    "python": "# Runtime: 93 ms (Top 33.43%) | Memory: 14.1 MB (Top 44.38%)\r\nclass Solution:\r\n    def wateringPlants(self, plants: List[int], capacity: int) -> int:\r\n        result = 0\r\n        curCap = capacity\r\n\r\n        for i in range(len(plants)):\r\n            if curCap >= plants[i]:\r\n                curCap -= plants[i]\r\n                result += 1\r\n\r\n            else:\r\n                result += i * 2 + 1\r\n                curCap = capacity - plants[i]\r\n\r\n        return result",
    "java": "class Solution {\r\n    public int wateringPlants(int[] plants, int capacity) {\r\n        int count=0,c=capacity;\r\n        for(int i=0;i<plants.length;i++){\r\n            if(c>=plants[i]){\r\n                c-=plants[i];\r\n                count++;\r\n            }\r\n            else {\r\n                c=capacity;\r\n                count=count+i+(i+1);\r\n                c-=plants[i];\r\n            }\r\n        }\r\n        return count;\r\n    }\r\n}",
    "javascript": "var wateringPlants = function(plants, capacity) {\r\n    var cap = capacity;\r\n    var steps = 0;\r\n    for(let i = 0; i < plants.length;i++){\r\n        if(cap >= plants[i]){\r\n            steps = steps + 1;\r\n        }else{\r\n            cap = capacity;\r\n            steps = steps + (2 *i + 1);\r\n        }\r\n        cap = cap - plants[i];\r\n    }\r\n    return steps;\r\n};"
  }
}
