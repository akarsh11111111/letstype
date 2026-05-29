export default {
  "id": 1701,
  "name": "Average Waiting Time",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/average-waiting-time",
  "relativeDir": "A/Average Waiting Time",
  "slug": "1701-average-waiting-time",
  "availableLanguages": [
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "java",
  "lineCounts": {
    "java": 15,
    "python": 14,
    "javascript": 18
  },
  "languages": {
    "python": "class Solution:\r\n    def averageWaitingTime(self, customers: List[List[int]]) -> float:\r\n        start = customers[0][0]\r\n        end = start + customers[0][1]\r\n        total_wait = end - start\r\n        for c in customers[1:]:\r\n            start = c[0]\r\n            if start <= end:\r\n                end += c[1]\r\n                total_wait = total_wait + end - start\r\n            else:\r\n                end = c[0]+c[1]\r\n                total_wait += c[1]\r\n        return total_wait/len(customers)",
    "java": "// Runtime: 16 ms (Top 7.49%) | Memory: 101.1 MB (Top 30.84%)\r\nclass Solution {\r\n    public double averageWaitingTime(int[][] customers) {\r\n        double time = 0;\r\n        double waitingTime = 0;\r\n\r\n        for(int[] cust : customers){\r\n            time = Math.max(cust[0],time);\r\n            time = time + cust[1];\r\n            waitingTime += (time - cust[0]);\r\n        }\r\n\r\n        return waitingTime/customers.length;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number[][]} customers\r\n * @return {number}\r\n */\r\nvar averageWaitingTime = function(customers) {\r\n    let n = customers.length\r\n    let starts = Array(n).fill(0)\r\n    // the first customer do not have to wait for the prev customer so his start time == arrival time\r\n    starts[0] = customers[0][0]\r\n    let totalWait = customers[0][1]\r\n    for (let i = 1; i < n; i++) {\r\n        // The start of the current customer is  the max of (start + time of prev customer) or the arrival time of existing customer\r\n        starts[i] = Math.max(starts[i-1] + customers[i-1][1], customers[i][0])\r\n        totalWait +=  starts[i] - customers[i][0] + customers[i][1]\r\n    }\r\n    \r\n    return totalWait/n\r\n};"
  }
}
