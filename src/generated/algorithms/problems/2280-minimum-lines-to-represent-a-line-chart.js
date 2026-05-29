export default {
  "id": 2280,
  "name": "Minimum Lines to Represent a Line Chart",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-lines-to-represent-a-line-chart",
  "relativeDir": "M/Minimum Lines to Represent a Line Chart",
  "slug": "2280-minimum-lines-to-represent-a-line-chart",
  "availableLanguages": [
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "java",
  "lineCounts": {
    "java": 20,
    "python": 70,
    "javascript": 15
  },
  "languages": {
    "python": "from fractions import Fraction\r\nfrom itertools import pairwise\r\nfrom math import inf\r\nfrom operator import itemgetter\r\n\r\nPoint = tuple[int, int]\r\n\r\n\r\nclass Solution:\r\n    def minimumLines(self, prices: list[Point]) -> int:\r\n        if len(prices) == 1:\r\n            return 0\r\n        else:\r\n            prices.sort(key=itemgetter(0))\r\n\r\n            return self.using_slope(prices)\r\n            # return self.using_cross_product(prices)\r\n\r\n    @staticmethod\r\n    def using_slope(prices: list[Point]) -> int:\r\n        output, slope = 1, Solution.dy_by_dx\r\n\r\n        ab = next(pairs := pairwise(prices))\r\n\r\n        for bc in pairs:\r\n            if slope(ab) != slope(bc):\r\n                output += 1\r\n\r\n            ab = bc\r\n\r\n        return output\r\n\r\n    @staticmethod\r\n    def dy_by_dx(ab: tuple[Point, Point]) -> float | Fraction:\r\n        (x1, y1), (x2, y2) = ab\r\n\r\n        dx, dy = x2 - x1, y2 - y1\r\n\r\n        if dx == 0:\r\n            # 1. dx is 0, it means we have a vertical line going from (x1, y1). So whether dy is positive or\r\n            #    negative, it does not matter\r\n            # 2. infinity can not be represented by fraction module so returning it directly from math module\r\n            return inf\r\n        else:\r\n            # To avoid floating point error, we use fraction module.\r\n\r\n            # (Simple divisions can give same results for example (apparently one of the test cases),\r\n            # 499999998/499999999 and 499999999/500000000 gives same result, and that is where Fraction\r\n            # class shines)\r\n            return Fraction(dy, dx)\r\n\r\n    @staticmethod\r\n    def using_cross_product(prices: list[Point]) -> int:\r\n        output, on_line = 1, Solution.lie_on_same_line\r\n\r\n        a = next(itr := iter(prices))\r\n\r\n        for b, c in pairwise(itr):\r\n            if not on_line(a, b, c):\r\n                output += 1\r\n\r\n            a = b\r\n\r\n        return output\r\n\r\n    @staticmethod\r\n    def lie_on_same_line(a: Point, b: Point, c: Point) -> bool:\r\n        (x1, y1), (x2, y2), (x3, y3) = a, b, c\r\n\r\n        return (y2 - y1) * (x3 - x2) == (x2 - x1) * (y3 - y2)",
    "java": "// Runtime: 57 ms (Top 71.43%) | Memory: 109.9 MB (Top 23.21%)\r\nclass Solution {\r\n    public int minimumLines(int[][] stockPrices) {\r\n        if(stockPrices.length == 1) return 0;\r\n        int count = 1;\r\n        Arrays.sort(stockPrices,(o1,o2)->o1[0]-o2[0]);\r\n        for(int i=1;i<stockPrices.length-1;i++){\r\n            int x1 = stockPrices[i-1][0];\r\n            int y1 = stockPrices[i-1][1];\r\n            int x2 = stockPrices[i][0];\r\n            int y2 = stockPrices[i][1];\r\n            int x3 = stockPrices[i+1][0];\r\n            int y3 = stockPrices[i+1][1];\r\n            if(((x3-x2)*(y2-y1))==((y3-y2)*(x2-x1))) continue;\r\n\r\n            count++;\r\n        }\r\n        return count;\r\n    }\r\n}",
    "javascript": "var minimumLines = function(stockPrices) {\r\n   if(stockPrices.length<=1) return 0;\r\n    stockPrices.sort((a,b)=>a[0]-b[0])\r\n    var dates = stockPrices.map(el=>el[0]);\r\n    var price = stockPrices.map(el=>el[1]);  \r\n    var count = 0\r\n    for(var i=0;i<dates.length-2;i++){\r\n       var area1 = BigInt(price[i+1]-price[i]) * BigInt(dates[i+2]-dates[i+1]);\r\n       var area2 = BigInt(dates[i+1]-dates[i])* BigInt(price[i+2]-price[i+1]);\r\n        if(area1!==area2 ) {\r\n            count++;\r\n        } \r\n    }   \r\n    return count+1;\r\n};"
  }
}
