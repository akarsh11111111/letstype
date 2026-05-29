export default {
  "id": 991,
  "name": "Broken Calculator",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/broken-calculator",
  "relativeDir": "B/Broken Calculator",
  "slug": "0991-broken-calculator",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 17,
    "java": 10,
    "python": 15,
    "javascript": 24
  },
  "languages": {
    "cpp": "// Runtime: 5 ms (Top 18.81%) | Memory: 5.9 MB (Top 70.20%)\r\nclass Solution {\r\npublic:\r\n    int brokenCalc(int startValue, int target) {\r\n        int result=0;\r\n        while(target>startValue)\r\n        {\r\n            result++;\r\n            if(target%2==0)\r\n                target=target/2;\r\n            else\r\n                target+=1;\r\n        }\r\n        result=result+(startValue-target);\r\n        return result;\r\n    }\r\n};",
    "python": "class Solution(object):\r\n    def brokenCalc(self, startValue, target):\r\n        \"\"\"\r\n        :type startValue: int\r\n        :type target: int\r\n        :rtype: int\r\n        \"\"\"\r\n        res = 0\r\n        while target > startValue:\r\n            res += 1\r\n            if target % 2:\r\n                target += 1\r\n            else:\r\n                target //= 2\r\n        return res + startValue - target",
    "java": "// Runtime: 0 ms (Top 100.00%) | Memory: 40.5 MB (Top 78.77%)\r\nclass Solution {\r\n    public int brokenCalc(int startValue, int target) {\r\n        if(startValue >= target) return startValue - target;\r\n        if(target % 2 == 0){\r\n            return 1 + brokenCalc(startValue, target / 2);\r\n        }\r\n        return 1 + brokenCalc(startValue, target + 1);\r\n    }\r\n}",
    "javascript": "// Runtime: 76 ms (Top 75.00%) | Memory: 41.8 MB (Top 89.58%)\r\n/**\r\n * @param {number} startValue\r\n * @param {number} target\r\n * @return {number}\r\n */\r\nvar brokenCalc = function(startValue, target) {\r\n    let steps = 0;\r\n\r\n    while(target !== startValue){\r\n\r\n        if(startValue > target){\r\n            return steps + startValue - target;\r\n        }\r\n        if(target %2 === 0){\r\n            target /= 2;\r\n        }else {\r\n            target += 1;\r\n\r\n        }\r\n        steps++;\r\n    }\r\n    return steps\r\n};"
  }
}
