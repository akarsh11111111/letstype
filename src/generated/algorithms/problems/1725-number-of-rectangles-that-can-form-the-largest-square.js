export default {
  "id": 1725,
  "name": "Number Of Rectangles That Can Form The Largest Square",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square",
  "relativeDir": "N/Number Of Rectangles That Can Form The Largest Square",
  "slug": "1725-number-of-rectangles-that-can-form-the-largest-square",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 22,
    "java": 23,
    "python": 23,
    "javascript": 17
  },
  "languages": {
    "cpp": "// Runtime: 36 ms (Top 59.51%) | Memory: 18.70 MB (Top 69.73%)\r\n\r\nclass Solution {\r\npublic:\r\n    int countGoodRectangles(const vector<vector<int>>& rectangles) {\r\n        \r\n        int side=0, maxLen=0, count=0;\r\n        \r\n        for(const auto& i:rectangles) {\r\n            \r\n            side=min(i[0],i[1]);\r\n            \r\n            if(maxLen<side) {\r\n                maxLen=side;\r\n                count=1;\r\n            }\r\n            else if(maxLen==side) ++count;\r\n        }\r\n        \r\n        return count;\r\n    }\r\n};",
    "python": "# Runtime: 239 ms (Top 76.52%) | Memory: 14.6 MB (Top 25.99%)\r\n\r\nclass Solution:\r\n    def countGoodRectangles(self, rectangles: List[List[int]]) -> int:\r\n\r\n        #Runtime: 184 ms, faster than 65.71% of Python3 online submissions\r\n        #Memory Usage: 14.9 MB, less than 39.90% of Python3 online submissions\r\n\r\n        res = []\r\n\r\n        minSide = 0\r\n        maxLen = 0\r\n\r\n        for l, w in rectangles:\r\n\r\n            minSide = min(l, w) #Gets minSide of each rectangle\r\n\r\n            if minSide > maxLen: #Checks if rectangle holds new maxLen\r\n                maxLen = minSide #Tracks the current maxLen\r\n\r\n            res.append(minSide) #Holds each rectangles minSIde\r\n\r\n        return res.count(maxLen)#Returns the count of rectangles whos minSide is equal to maxLen",
    "java": "class Solution {\r\n    public int countGoodRectangles(int[][] rectangles) {\r\n        List<Integer> list=new LinkedList<Integer>();\r\n        int max=0,count=0;\r\n        for(int i = 0 ; i < rectangles.length ; i++){\r\n            if(rectangles[i][0]>rectangles[i][1]){\r\n                list.add(rectangles[i][1]);\r\n                if(max<rectangles[i][1])\r\n                max=rectangles[i][1];\r\n            }\r\n            else{\r\n                list.add(rectangles[i][0]);\r\n                if(max<rectangles[i][0])\r\n                max=rectangles[i][0];\r\n            }\r\n        }\r\n        for(Integer i:list){\r\n            if(i==max)\r\n            count++;\r\n        }\r\n        return count;\r\n    }\r\n}",
    "javascript": "// Runtime: 58 ms (Top 76.51%) | Memory: 44.80 MB (Top 75.3%)\r\n\r\nvar countGoodRectangles = function(rectangles) {\r\n    let count = 0\r\n    let max = 0\r\n    \r\n    for(let i of rectangles){\r\n        let side = Math.min(i[0], i[1])\r\n        if(side > max){\r\n            max = side\r\n            count = 1\r\n        } else if(side == max) {\r\n            count++\r\n        }\r\n    }\r\n    return count\r\n};"
  }
}
