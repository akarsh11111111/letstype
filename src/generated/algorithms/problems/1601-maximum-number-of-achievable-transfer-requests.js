export default {
  "id": 1601,
  "name": "Maximum Number of Achievable Transfer Requests",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-number-of-achievable-transfer-requests",
  "relativeDir": "M/Maximum Number of Achievable Transfer Requests",
  "slug": "1601-maximum-number-of-achievable-transfer-requests",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 32,
    "java": 30,
    "python": 23,
    "javascript": 30
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    \r\n    void fun(vector < vector < int > > & rq , vector < int > & cap , int ind , int req , int& maxRequests){ \r\n    \r\n        if(ind >= rq.size()){ \r\n           \r\n            for(auto a : cap){ \r\n              if( a != 0) return; \r\n            }\r\n            maxRequests = max(maxRequests , req); \r\n            return; \r\n        }\r\n        \r\n        \r\n        fun(rq , cap , ind+1 , req , maxRequests); \r\n        \r\n        cap[rq[ind][0]]--; cap[rq[ind][1]]++; \r\n        \r\n      fun(rq , cap , ind+1 , req+1 , maxRequests); \r\n        \r\n         cap[rq[ind][0]]++; cap[rq[ind][1]]--; \r\n    \r\n    }\r\n    \r\n    int maximumRequests(int n, vector<vector<int>>& requests) {\r\n       int maxRequests = 0 ; \r\n        vector < int > capacity(n , 0); \r\n        fun(requests , capacity , 0 , 0 , maxRequests); \r\n        return maxRequests; \r\n    }\r\n};",
    "python": "# Runtime: 4533 ms (Top 17.14%) | Memory: 13.9 MB (Top 48.57%)\r\nclass Solution:\r\n    def maximumRequests(self, n: int, r: List[List[int]]) -> int:\r\n        k=len(r)\r\n        deg=[0 for i in range(n)]\r\n\r\n        def check(i,res,s):\r\n            if i==k:\r\n                #print(deg,s)\r\n                if max(deg)==min(deg)==0:\r\n                    res[0]=max(res[0],s)\r\n                return\r\n\r\n            u,v=r[i]\r\n            deg[u]-=1\r\n            deg[v]+=1\r\n            check(i+1,res,s+1)\r\n            deg[u]+=1\r\n            deg[v]-=1\r\n            check(i+1,res,s)\r\n        res=[0]\r\n        check(0,res,0)\r\n        return res[0]",
    "java": "// Runtime: 35 ms (Top 65.52%) | Memory: 42.2 MB (Top 56.90%)\r\nclass Solution {\r\n    int max = 0;\r\n    public int maximumRequests(int n, int[][] requests) {\r\n        helper(requests, 0, new int[n], 0);\r\n        return max;\r\n    }\r\n\r\n    private void helper(int[][] requests, int index, int[] count, int num) {\r\n        // Traverse all n buildings to see if they are all 0. (means balanced)\r\n        if (index == requests.length) {\r\n            for (int i : count) {\r\n                if (0 != i) {\r\n                    return;\r\n                }\r\n            }\r\n            max = Math.max(max, num);\r\n            return;\r\n        }\r\n        // Choose this request\r\n        count[requests[index][0]]++;\r\n        count[requests[index][1]]--;\r\n        helper(requests, index + 1, count, num + 1);\r\n        count[requests[index][0]]--;\r\n        count[requests[index][1]]++;\r\n\r\n        // Not Choose the request\r\n        helper(requests, index + 1, count, num);\r\n    }\r\n}",
    "javascript": "// Runtime: 101 ms (Top 75.0%) | Memory: 44.20 MB (Top 75.0%)\r\n\r\n/**\r\n * @param {number} n\r\n * @param {number[][]} requests\r\n * @return {number}\r\n */\r\nvar maximumRequests = function(n, requests) {\r\n    const transfers = Array(n).fill(0)\r\n\r\n    const backtrack = (curr, count, transfers) => {\r\n        if(curr === requests.length){\r\n            if(transfers.every(t => t === 0)) return count\r\n            else return 0\r\n        }\r\n\r\n        transfers[requests[curr][0]] -= 1\r\n        transfers[requests[curr][1]] += 1\r\n\r\n        const countIncluded = backtrack(curr + 1, count + 1, transfers)\r\n\r\n        transfers[requests[curr][0]] += 1\r\n        transfers[requests[curr][1]] -= 1\r\n\r\n        const countExcluded = backtrack(curr + 1, count , transfers)\r\n\r\n        return Math.max(countIncluded, countExcluded)         \r\n    }\r\n    return backtrack(0,0, transfers)\r\n};"
  }
}
