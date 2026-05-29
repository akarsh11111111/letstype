export default {
  "id": 860,
  "name": "Lemonade Change",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/lemonade-change",
  "relativeDir": "L/Lemonade Change",
  "slug": "0860-lemonade-change",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 48,
    "java": 35,
    "python": 19,
    "javascript": 32
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool lemonadeChange(vector<int>& bills) {\r\n        unordered_map<int, int> m;\r\n        \r\n        int change = 0;\r\n        for(int i = 0 ; i < bills.size(); i++)\r\n        {\r\n            m[bills[i]]++;\r\n            \r\n            if(bills[i] > 5)\r\n            {\r\n                change = bills[i] - 5;\r\n                \r\n                if(change == 5)\r\n                {\r\n                    if(m[5] > 0)\r\n                    {\r\n                        m[5]--;\r\n                    }\r\n                    else\r\n                    {\r\n                        return false;\r\n                    }\r\n                }\r\n                //change = 10\r\n                else\r\n                {\r\n                    if(m[10] > 0 and m[5] > 0)\r\n                    {\r\n                        m[10]--;\r\n                        m[5]--;\r\n                    }\r\n                    else if(m[5] >= 3)\r\n                    {\r\n                        m[5] -= 3;\r\n                    }\r\n                    else\r\n                    {\r\n                        return false;\r\n                    }\r\n                }\r\n            }\r\n        }\r\n        \r\n        return true;\r\n    }\r\n};",
    "python": "// Runtime: 670 ms (Top 99.03%) | Memory: 22.00 MB (Top 10.8%)\r\n\r\nclass Solution:\r\n    def lemonadeChange(self, bills):\r\n        five = ten = 0\r\n        for num in bills:\r\n            if num == 5:\r\n                five += 1\r\n            elif num == 10 and five:\r\n                ten += 1\r\n                five -= 1\r\n            elif num == 20 and five and ten:\r\n                five -= 1\r\n                ten -= 1\r\n            elif num == 20 and five >= 3:\r\n                five -= 3\r\n            else:\r\n                return False\r\n        return True",
    "java": "class Solution {\r\n    public boolean lemonadeChange(int[] bills) {\r\n        int count5 = 0, count10 = 0;\r\n        for(int p : bills){\r\n            if(p == 5){\r\n                count5++;\r\n            }\r\n            else if(p == 10){\r\n                if(count5 > 0){\r\n                    count5--;\r\n                    count10++;\r\n                }\r\n                else{\r\n                    return false;\r\n                }\r\n            }\r\n            else if(p == 20){\r\n                if(count5 > 0 && count10 > 0){\r\n                    count5--;\r\n                    count10--;\r\n                }\r\n                else if(count5 == 0){\r\n                    return false;\r\n                }\r\n                else if(count5<3){\r\n                    return false;\r\n                }\r\n                else{\r\n                    count5 -= 3;\r\n                }\r\n            }\r\n        }\r\n        return true;\r\n    }\r\n}",
    "javascript": " * @param {number[]} bills\r\n * @return {boolean}\r\n */\r\nvar lemonadeChange = function(bills) {\r\n   let cashLocker = {\r\n    \"5\": 0,\r\n    \"10\": 0,\r\n    \r\n  }\r\n  for (let i = 0; i < bills.length; i++) {\r\n    if (bills[i] === 5) {\r\n      cashLocker[\"5\"] += 1;\r\n    } else if (bills[i] === 10 && cashLocker[\"5\"] > 0) {\r\n      cashLocker[\"5\"] -= 1;\r\n      cashLocker[\"10\"] += 1;\r\n\r\n    } else if (bills[i] === 20 && cashLocker[\"5\"] >= 1 && cashLocker[\"10\"] >= 1) {\r\n      cashLocker[\"5\"] -= 1;\r\n      cashLocker[\"10\"] -= 1;\r\n     \r\n    } else if (bills[i] === 20 && cashLocker[\"5\"] >= 3) {\r\n\r\n      cashLocker[\"5\"] -= 3;\r\n     \r\n    } else {\r\n      return false;\r\n    }\r\n  }\r\n\r\n  return true;\r\n    \r\n};"
  }
}
