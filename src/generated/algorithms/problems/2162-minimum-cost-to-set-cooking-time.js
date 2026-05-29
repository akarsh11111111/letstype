export default {
  "id": 2162,
  "name": "Minimum Cost to Set Cooking Time",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-cost-to-set-cooking-time",
  "relativeDir": "M/Minimum Cost to Set Cooking Time",
  "slug": "2162-minimum-cost-to-set-cooking-time",
  "availableLanguages": [
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "java",
  "lineCounts": {
    "java": 25,
    "python": 37,
    "javascript": 52
  },
  "languages": {
    "python": "class Solution:\r\n    def minCostSetTime(self, startAt: int, moveCost: int, pushCost: int, targetSeconds: int) -> int:\r\n        poss = [(targetSeconds // 60, targetSeconds % 60)]  # store possibilities as (minutes, seconds)\r\n        \r\n        if poss[0][0] > 99:  # for when targetSeconds >= 6000\r\n            poss = [(99, poss[0][1]+60)]\r\n            \r\n        if poss[0][0] >= 1 and (poss[0][1]+60) <= 99:\r\n\t\t\t# adding a second possibility e.g. (01, 16) -> (0, 76)\r\n            poss.append((poss[0][0]-1, poss[0][1]+60))\r\n            \r\n        costs = list()\r\n        \r\n        for i in poss:\r\n            curr_start = startAt\r\n            curr_cost = 0\r\n            \r\n            minutes = str(i[0])\r\n            if i[0] != 0:  # 0s are prepended, so no need to push 0s\r\n                for j in minutes:\r\n                    if int(j) != curr_start:\r\n                        curr_cost += moveCost\r\n                        curr_start = int(j)\r\n                    curr_cost += pushCost\r\n                    \r\n            seconds = str(i[1])\r\n            if len(seconds) == 1 and i[0] != 0:  # seconds is a single digit, prepend a \"0\" to it\r\n                seconds = \"0\" + seconds\r\n            \r\n            for j in seconds:\r\n                if int(j) != curr_start:\r\n                    curr_cost += moveCost\r\n                    curr_start = int(j)\r\n                curr_cost += pushCost\r\n            costs.append(curr_cost)\r\n            \r\n        return min(costs)",
    "java": "// Runtime: 1 ms (Top 88.7%) | Memory: 39.44 MB (Top 55.0%)\r\n\r\nclass Solution {\r\n    public int minCostSetTime(int startAt, int moveCost, int pushCost, int tar) {\r\n     \r\n        int min=tar/60, sec=tar%60, minCost=(moveCost+pushCost)*4;\r\n        \r\n        if(min>99) { min--; sec+=60; } // this is required to do because if tar>=6000 then min is 100 which is not possible as it atmost can be 99mins\r\n        \r\n        while(min>=0&&sec<=99) { // this while loop will work for atmost 2 iterations\r\n            tar=min*100+sec;\r\n            char arr[]=(\"\"+tar).toCharArray();\r\n            int sameMove=0;\r\n            for(int i=0;i<arr.length-1;i++)\r\n                if(arr[i]==arr[i+1])\r\n                    sameMove++;\r\n            if(startAt==arr[0]-'0')\r\n                minCost=Math.min(minCost,pushCost*arr.length+moveCost*(arr.length-1-sameMove));\r\n            else\r\n                minCost=Math.min(minCost,pushCost*arr.length+moveCost*(arr.length-sameMove));\r\n            min--; sec+=60;\r\n        }\r\n        return minCost;\r\n    }\r\n}",
    "javascript": "// Runtime: 105 ms (Top 40.54%) | Memory: 42.2 MB (Top 81.08%)\r\n/**\r\n * @param {number} startAt\r\n * @param {number} moveCost\r\n * @param {number} pushCost\r\n * @param {number} targetSeconds\r\n * @return {number}\r\n */\r\nvar minCostSetTime = function(startAt, moveCost, pushCost, targetSeconds) {\r\n    let cost = Infinity;\r\n\r\n    let maxMinutes = Math.floor(targetSeconds / 60);\r\n\r\n    for(let min = 0; min <= maxMinutes; min++) {\r\n        let secs = targetSeconds - min * 60;\r\n\r\n        if (secs > 99 || min > 99) continue;\r\n\r\n        let buttons = String(100 * min + secs);\r\n        let prev = Number(buttons[0]);\r\n\r\n        let sum = 0;\r\n\r\n        //start index will vary according to startAt pointer\r\n        let start = 0;\r\n\r\n        //If startAt is equal to first button, we need to add pushCost fatigue\r\n        if(prev === startAt) {\r\n            sum += pushCost;\r\n            start = 1;\r\n         } else {\r\n            //Else we need to add moveCost fatigue\r\n            sum += moveCost;\r\n         }\r\n\r\n        for(let i = start; i < buttons.length; i++) {\r\n            let button = Number(buttons[i]);\r\n\r\n            if(button !== prev) {\r\n                sum += moveCost + pushCost;\r\n            } else {\r\n                sum += pushCost;\r\n            }\r\n\r\n            prev = button;\r\n        }\r\n\r\n        cost = Math.min(cost, sum)\r\n    }\r\n\r\n    return cost;\r\n};"
  }
}
