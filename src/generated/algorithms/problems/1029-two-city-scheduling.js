export default {
  "id": 1029,
  "name": "Two City Scheduling",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/two-city-scheduling",
  "relativeDir": "T/Two City Scheduling",
  "slug": "1029-two-city-scheduling",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 23,
    "java": 16,
    "python": 31,
    "javascript": 38
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int twoCitySchedCost(vector<vector<int>>& costs) {\r\n        sort(costs.begin(), costs.end(), [](const vector<int> &curr, const vector<int> &next){ // CUSTOM COMPARATOR\r\n            return (curr[0]-curr[1]) < (next[0]-next[1]);   // (comparing cost of sending to A - cost to B)\r\n        });\r\n        // original:   [[10,20],[30,200],[400,50],[30,20]] \r\n        // after sort: [[30,200],[10,20],[30,20],[400,50]]\r\n        // to do:         a       a          b         b\r\n        \r\n        int sum = 0;\r\n        for(int i=0; i<costs.size()/2; i++){\r\n            sum+=costs[i][0];\r\n            // cout<<costs[i][0]<<\" \"; // 30 10\r\n        }\r\n        for(int i=costs.size()/2; i<costs.size(); i++){\r\n            sum+=costs[i][1];\r\n            // cout<<costs[i][1]<<\" \"; // 20 50\r\n        }\r\n        \r\n        return sum;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def twoCitySchedCost(self, costs: List[List[int]]) -> int:\r\n        n = len(costs)\r\n        m = n // 2\r\n        \r\n        @lru_cache(None)\r\n        def dfs(cur, a):\r\n\t\t\t# cur is the current user index\r\n\t\t\t# `a` is the number of people travel to city `a`\r\n\t\t\t\r\n            if cur == n:\r\n                return 0\r\n            \r\n\t\t\t# people to b city\r\n            b = cur - a\r\n            ans = float('inf')\r\n            \r\n\t\t\t# the number of people to `a` city number did not reach to limit, \r\n\t\t\t# then current user can trval to city `a`\r\n\t\t\t\r\n            if a < m:\r\n                ans = min(dfs(cur+1, a+1)+costs[cur][0], ans)\r\n            \r\n\t\t\t# the number of people to `b` city number did not reach to limit\r\n\t\t\t# then current user can trval to city `b`\r\n            if b < m:\r\n                ans = min(dfs(cur+1, a)+costs[cur][1], ans)\r\n                \r\n            return ans\r\n        \r\n        return dfs(0, 0)",
    "java": "// costs = [[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]]\r\n//  The difference between them would be like this [511,  -394, -259, -45, -722, -108]  this will give us the differnce c[1] - c[0]\r\n// Now after sorting them from highest to smallest would be [511, -45, -108, -259, -394,-722] from high to low c2[1] - c2[0], c1[1] - c1[0]  if we want low to high then it would be like this c1[1] - c1[0], c2[1] - c2[0]\r\n// \r\n\r\nclass Solution {\r\n    public int twoCitySchedCost(int[][] costs) {\r\n       Arrays.sort(costs, (c1, c2) -> Integer.compare(c2[1] - c2[0], c1[1] - c1[0]));// biggest to smallest\r\n        int minCost = 0;               \r\n        int n = costs.length;\r\n        for (int i = 0; i < n; i++) {\r\n            minCost += i < n/2? costs[i][0] : costs[i][1];//First half -> A; Last half -> B  259 + 184 + 577 + 54 + 667 + 118\r\n        }\r\n        return minCost;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number[][]} costs\r\n * @return {number}\r\n */\r\nvar twoCitySchedCost = function(costs) {\r\n    // TC: O(nlogn) and O(1) extra space\r\n    let n=costs.length;\r\n    let countA=0,countB=0,minCost=0;\r\n    \r\n    // sorted in descending order by their absolute diff\r\n    costs=costs.sort((a,b)=>{\r\n        let diffA=Math.abs(a[0] - a[1]);\r\n        let diffB=Math.abs(b[0] - b[1]);\r\n        return diffB-diffA;\r\n    });\r\n    \r\n    for(let i=0;i<n;i++){\r\n        let [a,b]=costs[i];\r\n        if(a<b){\r\n            if(countA<n/2){\r\n                minCost+=a;\r\n                countA++;\r\n            }else{\r\n                minCost+=b;\r\n                countB++;\r\n            }\r\n        }else{\r\n            if(countB<n/2){\r\n                minCost+=b;\r\n                countB++;\r\n            }else{\r\n                minCost+=a;\r\n                countA++;\r\n            }\r\n        }\r\n    }\r\n    return minCost;\r\n};"
  }
}
