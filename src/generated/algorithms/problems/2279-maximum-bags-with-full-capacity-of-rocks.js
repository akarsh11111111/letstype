export default {
  "id": 2279,
  "name": "Maximum Bags With Full Capacity of Rocks",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks",
  "relativeDir": "M/Maximum Bags With Full Capacity of Rocks",
  "slug": "2279-maximum-bags-with-full-capacity-of-rocks",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 19,
    "python": 16,
    "javascript": 23
  },
  "languages": {
    "cpp": "// Runtime: 147 ms (Top 48.01%) | Memory: 85.00 MB (Top 91.71%)\r\n\r\nclass Solution {\r\npublic:\r\n    int maximumBags(vector<int>& capacity, vector<int>& rocks, int additionalRocks) {\r\n        int n=capacity.size();\r\n        int cnt=0;\r\n        for(int i=0;i<n;i++){\r\n            capacity[i]=capacity[i]-rocks[i];\r\n        }\r\n        sort(capacity.begin(),capacity.end());\r\n        for(int i=0;i<n;i++){\r\n            if(additionalRocks<capacity[i]) break;\r\n                cnt++;\r\n            additionalRocks=additionalRocks-capacity[i];\r\n        }\r\n        return cnt;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def maximumBags(self, capacity: List[int], rocks: List[int], additionalRocks: int) -> int:\r\n       v, c, l = [], 0, len(rocks)\r\n        for i in range(l):\r\n            p = capacity[i]-rocks[i]\r\n            if(p>0):\r\n                v.append(p)\r\n            else: c += 1\r\n        v.sort()\r\n        k=0\r\n        while(additionalRocks>0 and k<len(v)):\r\n            if(v[k]<=additionalRocks):\r\n                c += 1\r\n                additionalRocks -= v[k]\r\n            k += 1\r\n        return c",
    "javascript": "// Runtime: 1161 ms (Top 6.67%) | Memory: 64.8 MB (Top 17.78%)\r\nvar maximumBags = function(capacity, rocks, additionalRocks) {\r\n    var differences = []\r\n    var count = 0\r\n    for (let i in rocks) {\r\n        if ((capacity[i] - rocks[i]) > 0) { // check if rocks[i] is less than capacity[i]\r\n            differences.push(capacity[i] - rocks[i]) // add the difference\r\n        } else {\r\n            count++ // rocks[i] is at full capacity, so the result goes up by 1\r\n        }\r\n    }\r\n    differences.sort((a, b) => a-b) // sort the differences\r\n    var r = additionalRocks\r\n    while (r != 0 && differences.length > 0) { // loop through differences until there is no more rocks or all of the bags of rocks are at full capacity\r\n        if (differences[0] <= r) {\r\n            r -= differences[0] // minus the difference of the rocks\r\n            count++ // add to result because another bag of rocks is at full capacity\r\n        } else {\r\n            break // rocks can not make any other bags at full capacity, so stop right here\r\n        }\r\n        differences.shift() // remove the first difference\r\n    } return count\r\n}"
  }
}
