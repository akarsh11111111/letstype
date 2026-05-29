export default {
  "id": 1518,
  "name": "Water Bottles",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/water-bottles",
  "relativeDir": "W/Water Bottles",
  "slug": "1518-water-bottles",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 23,
    "java": 18,
    "python": 13,
    "javascript": 13
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.0%) | Memory: 6.40 MB (Top 36.84%)\r\n\r\nclass Solution {\r\npublic:\r\n    pair<int, int> divmod(int dividend, int divisor) {\r\n        int quotient = dividend / divisor;\r\n        int remainder = dividend % divisor;\r\n        return make_pair(quotient, remainder);\r\n    }\r\n    int numWaterBottles(int numBottles, int numExchange) {\r\n        int result = numBottles;\r\n        pair<int, int> div = divmod(numBottles, numExchange);\r\n        int drunk = div.first;\r\n        int empty = div.second;\r\n        while(drunk) {\r\n            result += drunk;\r\n            div = divmod(drunk + empty, numExchange);\r\n            drunk = div.first;\r\n            empty = div.second;\r\n        }\r\n        return result;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def numWaterBottles(self, a: int, b: int) -> int:\r\n        \r\n        def sol(a,b,e,res):\r\n            if a!=0: res += a\r\n            if (a+e)<b: return res \r\n            a += e\r\n            new=a//b\r\n            e = a-(new*b)\r\n            a=new\r\n            return sol(a,b,e,res)\r\n        \r\n        return sol(a,b,0,0)",
    "java": "// Runtime: 0 ms (Top 100.00%) | Memory: 41.6 MB (Top 8.35%)\r\nclass Solution {\r\n    public int numWaterBottles(int numBottles, int numExchange) {\r\n        int drinkedBottles = numBottles;\r\n        int emptyBottles = numBottles;\r\n\r\n        while(emptyBottles >= numExchange){\r\n            int gainedBottles = emptyBottles / numExchange;\r\n\r\n            drinkedBottles += gainedBottles;\r\n\r\n            int unusedEmptyBottles = emptyBottles % numExchange;\r\n\r\n            emptyBottles = gainedBottles + unusedEmptyBottles;\r\n        }\r\n        return drinkedBottles;\r\n    }\r\n}",
    "javascript": "var numWaterBottles = function(numBottles, numExchange) {\r\n    let count = 0;\r\n    let emptyBottles = 0;\r\n    while (numBottles > 0) {\r\n        count += numBottles;\r\n        emptyBottles += numBottles;\r\n        numBottles = Math.floor(emptyBottles / numExchange);\r\n        emptyBottles -= numBottles  * numExchange;\r\n    }\r\n    \r\n    \r\n    return count;\r\n};"
  }
}
