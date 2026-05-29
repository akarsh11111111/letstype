export default {
  "id": 2211,
  "name": "Count Collisions on a Road",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/count-collisions-on-a-road",
  "relativeDir": "C/Count Collisions on a Road",
  "slug": "2211-count-collisions-on-a-road",
  "availableLanguages": [
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "java",
  "lineCounts": {
    "java": 31,
    "python": 3,
    "javascript": 47
  },
  "languages": {
    "python": "class Solution:\r\n    def countCollisions(self, directions: str) -> int:\r\n        return sum(d!='S' for d in directions.lstrip('L').rstrip('R'))",
    "java": "// Runtime: 22 ms (Top 59.94%) | Memory: 54.1 MB (Top 76.37%)\r\n/*\r\ncars on left side which are moving in left direction are never going to collide,\r\nSimilarly, cars on right side which are moving right side are never going to collide.\r\n\r\nIn between them every car is going to collide.\r\n*/\r\n\r\nclass Solution {\r\n    public int countCollisions(String directions) {\r\n        int left = 0, right = directions.length() - 1;\r\n\r\n        while (left < directions.length() && directions.charAt(left) == 'L') {\r\n            left++;\r\n        }\r\n\r\n        while (right >= 0 && directions.charAt(right) == 'R') {\r\n            right--;\r\n        }\r\n\r\n        int count = 0;\r\n        for (int i = left; i <= right; i++) {\r\n            if (directions.charAt(i) != 'S') {\r\n                count++;\r\n            }\r\n        }\r\n        //combining these three loops - TC : O(N).\r\n\r\n        return count;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {string} directions\r\n * @return {number}\r\n */\r\nvar countCollisions = function(directions) {\r\n            if(directions.length == 1){\r\n            return 0;\r\n        }\r\n        let count =0;\r\n        let couplet;\r\n        let retreivedWieght;\r\n        let convertedArr=[];\r\n        let rightMovingCount= 0;\r\n        let  weights= new Map();\r\n        weights.set(\"LR\",0);\r\n        weights.set(\"RL\",2);\r\n        weights.set(\"LS\",0);\r\n        weights.set(\"SL\",1);\r\n        weights.set(\"SR\",0);\r\n        weights.set(\"RS\",1);\r\n        weights.set(\"LL\",0);\r\n        weights.set(\"RR\",0);\r\n        weights.set(\"SS\",0);\r\n        \r\n        for(let i=0;i<directions.length;i++){\r\n            convertedArr[i]=directions[i];\r\n        }\r\n        \r\n        for(let i=1;i< convertedArr.length; i++){\r\n            couplet=convertedArr[i-1]+convertedArr[i];\r\n            retreivedWieght=weights.get(couplet);\r\n            count=count+retreivedWieght;\r\n            if(retreivedWieght>0){\r\n                convertedArr[i-1]=\"S\"; \r\n                convertedArr[i]=\"S\";\r\n                if(rightMovingCount>0){\r\n                    count=count+rightMovingCount;\r\n                    rightMovingCount=0;\r\n                }\r\n            }\r\n            if(couplet === \"RR\"){\r\n                rightMovingCount++;\r\n            }\r\n            \r\n        }\r\n        return count;\r\n};"
  }
}
