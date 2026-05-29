export default {
  "id": 1599,
  "name": "Maximum Profit of Operating a Centennial Wheel",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-profit-of-operating-a-centennial-wheel",
  "relativeDir": "M/Maximum Profit of Operating a Centennial Wheel",
  "slug": "1599-maximum-profit-of-operating-a-centennial-wheel",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 26,
    "java": 52,
    "python": 35
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int minOperationsMaxProfit(vector<int>& customers, int boardingCost, int runningCost) {\r\n        int rotate = 0, total = 0, money = 0, num = 0, i;\r\n\t\tint maxx = INT_MIN, ans = rotate;\r\n        for(i = 0; i< customers.size(); i++){\r\n            total += customers[i];\r\n            rotate = i+1;\r\n            if(total >= 4) {num += 4; total -= 4;}\r\n            else { num += total; total = 0;}\r\n            money = num * boardingCost - rotate * runningCost;\r\n            if(maxx < money) {maxx = money; ans = rotate;}\r\n        }\r\n        while(total > 0){\r\n            rotate = i+1;\r\n            if(total >= 4) {num += 4; total -= 4;}\r\n            else { num += total; total = 0;}\r\n            money = num * boardingCost - rotate * runningCost;\r\n            if(maxx < money) {maxx = money; ans = rotate;}\r\n            i++;\r\n\r\n        }\r\n        if(maxx < 0) return -1;\r\n        return ans;\r\n    }\r\n};",
    "python": "import sys\r\nMIN_INT = -sys.maxsize-1\r\nclass Solution:\r\n    def minOperationsMaxProfit(self, customers: List[int], boardingCost: int, runningCost: int) -> int:\r\n        maxx = MIN_INT\r\n        rotate = total =  ans = money = num = i = 0\r\n        for i in range(len(customers)):\r\n            total += customers[i]\r\n            rotate = i+1\r\n            if total >= 4:\r\n                num += 4\r\n                total -= 4\r\n            else: \r\n                num += total\r\n                total = 0\r\n            money = num * boardingCost - rotate * runningCost\r\n            if maxx < money:\r\n                maxx = money\r\n                ans = rotate\r\n        i+=1\r\n        while(total > 0):\r\n            rotate = i+1\r\n            if total >= 4:\r\n                num += 4\r\n                total -= 4\r\n            else: \r\n                num += total\r\n                total = 0\r\n            money = num * boardingCost - rotate * runningCost\r\n            if maxx < money:\r\n                maxx = money\r\n                ans = rotate\r\n            i+=1\r\n        if maxx < 0: return -1\r\n        return ans",
    "java": "// Runtime: 9 ms (Top 80.7%) | Memory: 55.64 MB (Top 69.2%)\r\n\r\nclass Solution {\r\n    public int minOperationsMaxProfit(int[] customers, int boardingCost, int runningCost) {\r\n        int rotatn = 0;\r\n        int cust = 0;\r\n        int profit = Integer.MIN_VALUE;\r\n        int prRotn = 0;\r\n        int cSit = 0;\r\n\r\n        for(int i = 0 ; i < customers.length ; i++){\r\n            cust += customers[i];\r\n            rotatn++;\r\n\r\n            int prof = 0;\r\n            if(cust >= 4){\r\n                \r\n                cust = cust - 4;\r\n                cSit += 4;\r\n            }else{\r\n                cSit += cust;\r\n                cust = 0;\r\n            }\r\n            prof = cSit*boardingCost - rotatn*runningCost ;\r\n            if(prof > profit){\r\n                profit = prof;\r\n                prRotn = rotatn;\r\n            }  \r\n        }\r\n        while(cust > 0){\r\n            rotatn++;\r\n\r\n            int prof = 0;\r\n            if(cust >= 4){\r\n                cust = cust - 4;\r\n                cSit += 4;\r\n            }else{\r\n                cSit += cust;\r\n                cust = 0;\r\n            }\r\n            prof = cSit*boardingCost - rotatn*runningCost ;\r\n\r\n            if(prof > profit){\r\n                profit = prof;\r\n\r\n                prRotn = rotatn;\r\n            } \r\n        }\r\n        if(profit > 0) return prRotn;\r\n        return -1;\r\n    }\r\n}"
  }
}
