export default {
  "id": 1753,
  "name": "Maximum Score From Removing Stones",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-score-from-removing-stones",
  "relativeDir": "M/Maximum Score From Removing Stones",
  "slug": "1753-maximum-score-from-removing-stones",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 6,
    "java": 15,
    "python": 10,
    "javascript": 39
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int maximumScore(int a, int b, int c) {\r\n        return min((a + b + c) / 2, a + b + c - max({a, b, c}));\r\n    }\r\n};",
    "python": "class Solution:\r\n    def maximumScore(self, a: int, b: int, c: int) -> int:\r\n        a, b, c = sorted([a, b, c], reverse=True)\r\n        ans = 0\r\n        while a > 0 and b > 0:\r\n            a -= 1\r\n            b -= 1\r\n            ans += 1\r\n            a, b, c = sorted([a, b, c], reverse=True)\r\n        return ans",
    "java": "// Runtime: 0 ms (Top 100.0%) | Memory: 40.30 MB (Top 77.67%)\r\n\r\nclass Solution {\r\n    public int maximumScore(int a, int b, int c) {\r\n        // Make sure a <= b <= c\r\n        if (a>b) return maximumScore(b,a,c);\r\n        if (b>c) return maximumScore(a,c,b);\r\n        \r\n        // if sum of smallest numbers [a+b] is less than c, then we can a + b pairs with the c\r\n        if (a+b<=c) return a+b;\r\n        \r\n        // if sum of smallest numbers is greater than c, then we can (a+b)/2 pairs after making c empty\r\n        return c+(a+b-c)/2;\r\n    }\r\n}",
    "javascript": "// Runtime: 78 ms (Top 90.91%) | Memory: 42.4 MB (Top 65.91%)\r\n/**\r\n * @param {number} a\r\n * @param {number} b\r\n * @param {number} c\r\n * @return {number}\r\n */\r\nvar maximumScore = function(a, b, c) {\r\n    let resultArray = [];\r\n    resultArray.push(a);\r\n    resultArray.push(b);\r\n    resultArray.push(c);\r\n    resultArray.sort((a,b)=>a-b);\r\n    let counter=0;\r\n    while(resultArray[0]>0||resultArray[1]>0||resultArray[2]>0){\r\n        if(resultArray[0]===0&&resultArray[1]===0){\r\n            break;\r\n        }\r\n        resultArray[1]--;\r\n        resultArray[2]--;\r\n        counter++\r\n        if(resultArray[1]<resultArray[0]){\r\n            exchange(resultArray,1,0);\r\n        }\r\n        if(resultArray[2]<resultArray[0]){\r\n            exchange(resultArray,2,0);\r\n        }\r\n    }\r\n    if(resultArray[0]+resultArray[1]+resultArray[2]===0) return counter;\r\n    if(resultArray[0]<0||resultArray[1]<0||resultArray[2]<0) counter--;\r\n    return counter;\r\n\r\n    function exchange(array, indexa,indexb){\r\n        let temp = array[indexa];\r\n        array[indexa] = array[indexb];\r\n        array[indexb] = temp;\r\n    }\r\n\r\n};"
  }
}
