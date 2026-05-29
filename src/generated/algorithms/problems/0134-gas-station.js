export default {
  "id": 134,
  "name": "Gas Station",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/gas-station",
  "relativeDir": "G/Gas Station",
  "slug": "0134-gas-station",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 23,
    "java": 31,
    "python": 19,
    "javascript": 32
  },
  "languages": {
    "cpp": "// Runtime: 110 ms (Top 71.82%) | Memory: 69.4 MB (Top 89.07%)\r\nclass Solution {\r\npublic:\r\n    int canCompleteCircuit(vector<int>& gas, vector<int>& cost) {\r\n        int n = gas.size();\r\n        int start = -1;\r\n\r\n        int sum = 0 , gastillnow = 0;\r\n        for(int i = 0 ; i < 2*n ; i++){\r\n            if(start == i%n){\r\n                return i%n;\r\n            }\r\n            if(gas[i%n] + gastillnow >= cost[i%n]){ // we can start from this index\r\n                if(start==-1) start = i;\r\n                gastillnow += gas[i%n]-cost[i%n];\r\n            }else if(gastillnow + gas[i%n] < cost[i%n]){ // previous start index was wrong we have to start from another\r\n                start = -1;\r\n                gastillnow = 0;\r\n            }\r\n        }\r\n        return -1;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:\r\n        deltas = [x-y for x, y in zip(gas, cost)]\r\n        n = len(deltas)\r\n        deltas = deltas + deltas\r\n        cursum, curi = 0, 0\r\n        maxsum, maxi = 0, 0\r\n        for i, delta in enumerate(deltas):\r\n            cursum = max(0, cursum + delta)\r\n            if cursum == 0:\r\n                curi = i+1\r\n            if cursum > maxsum:\r\n                maxi = curi\r\n                maxsum = cursum\r\n        cursum = 0\r\n        for i in range(n):\r\n            cursum += deltas[(maxi+i)%n]\r\n            if cursum < 0: return -1\r\n        return maxi",
    "java": "// Runtime: 1 ms (Top 100.00%) | Memory: 62.5 MB (Top 91.09%)\r\nclass Solution {\r\n    public int canCompleteCircuit(int[] gas, int[] cost) {\r\n       // *Upvote will be appreciated*\r\n        int totalFuel = 0;\r\n        int totalCost = 0;\r\n        int n = gas.length;\r\n        for(int i = 0; i < n; i++) {\r\n            totalFuel += gas[i];\r\n        }\r\n        for(int i = 0; i < n; i++) {\r\n            totalCost += cost[i];\r\n        }\r\n        // if totalfuel < totalCost then It is not possible to tavel\r\n        if(totalFuel < totalCost) {\r\n            return -1;\r\n        }\r\n\r\n        // It is greather then There may be an Answer\r\n        int start = 0;\r\n        int currFuel = 0;\r\n        for(int i = 0; i < n; i++) {\r\n            currFuel += (gas[i]-cost[i]);\r\n            if(currFuel < 0) { // It Current Fuel is less than 0 mean we can't star from that index\r\n                start = i+1; // so we start from next index\r\n                currFuel = 0;\r\n            }\r\n        }\r\n        return start;\r\n    }\r\n}",
    "javascript": "// Runtime: 2034 ms (Top 8.12%) | Memory: 50.3 MB (Top 81.93%)\r\nvar canCompleteCircuit = function(gas, cost) {\r\n    const len = gas.length;\r\n    // scan forward from the current index\r\n    const scan = (i) => {\r\n        let numTries = 0;\r\n        let tank = 0;\r\n        let c = 0;\r\n        while (numTries <= len) {\r\n            tank -= c;\r\n            if (tank < 0) return -1;\r\n            // if we made it back around, and we have gas, return the index, we made it!\r\n            if (numTries === len && tank >= 0) {\r\n                return i;\r\n            }\r\n            tank += gas[i];\r\n            c = cost[i];\r\n            i++;\r\n            if (i === len) i = 0; // if we hit the end, bounce back to zero\r\n            numTries++;\r\n        }\r\n        return -1;\r\n    }\r\n\r\n    for (let i = 0; i < len; i++) {\r\n        if (!gas[i]) continue; // no gas / zero gas so let's just move on\r\n        let index = scan(i);\r\n        if (~index) return index; // if it's not -1, return it\r\n    }\r\n\r\n    return -1;\r\n};"
  }
}
