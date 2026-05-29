export default {
  "id": 1751,
  "name": "Maximum Number of Events That Can Be Attended II",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii",
  "relativeDir": "M/Maximum Number of Events That Can Be Attended II",
  "slug": "1751-maximum-number-of-events-that-can-be-attended-ii",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 41,
    "java": 28,
    "python": 30,
    "javascript": 30
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n     \r\n    int ans;    \r\n    unordered_map<int,unordered_map<int,unordered_map<int,int>>> dp;\r\n    \r\n    int Solve(vector<vector<int>>& events, int start, int n, int k, int endtime){\r\n        if(k == 0 || start == n){\r\n            return 0;\r\n        }\r\n        \r\n        if(dp.find(start) != dp.end() && dp[start].find(k) != dp[start].end() && dp[start][k].find(endtime) != dp[start][k].end()){\r\n        \r\n            return dp[start][k][endtime];\r\n        }\r\n        int t1 = 0;\r\n        if(events[start][0] > endtime){\r\n            t1 = events[start][2] + Solve(events, start+1, n, k-1, events[start][1]);\r\n        }\r\n        \r\n        int t2 = Solve(events,start+1,n,k,endtime);\r\n        \r\n        dp[start][k][endtime] = max(t1,t2);\r\n       // cout<< dp[start][k][endtime]<<endl;\r\n     \r\n        return dp[start][k][endtime];\r\n        \r\n    }\r\n    int maxValue(vector<vector<int>>& events, int k) {\r\n        \r\n        dp.clear();\r\n     \r\n        // sort according to start time\r\n        sort(events.begin(), events.end(),[](vector<int> &a,vector<int> &b){\r\n            return a[0] < b[0];\r\n        });\r\n        \r\n    return Solve(events,0,events.size(),k,0);\r\n    \r\n    }\r\n};",
    "python": "import bisect\r\nfrom functools import lru_cache\r\n\r\nclass Solution:\r\n    def maxValue(self, events: List[List[int]], k: int) -> int:\r\n        if k == 1: # optimization for TLE test case 57/67\r\n            return max([event[2] for event in events])\r\n        \r\n        events.sort()\r\n        event_starts = [event[0] for event in events] # enables binary search\r\n        \r\n        @lru_cache(None)\r\n        def dp(i, j):\r\n            if j == 0: # out of turns\r\n                return 0\r\n            if i >= len(events): # end of events array\r\n                return 0\r\n            max_score = events[i][2]\r\n            \r\n            # get minimum index where start day is greater than current end day\r\n            next_index_minimum = bisect.bisect_left(event_starts, events[i][1] + 1)\r\n            \r\n            # check each possibility from the minimum next index until end of the array\r\n            for k in range(next_index_minimum, len(events)):\r\n                max_score = max(max_score, events[i][2] + dp(k, j - 1))\r\n            \r\n            # check if we can get a better score if we skip this index altogether\r\n            max_score = max(max_score, dp(i + 1, j))\r\n            return max_score\r\n        return dp(0, k)",
    "java": "// Runtime: 99 ms (Top 53.72%) | Memory: 100.9 MB (Top 52.07%)\r\nclass Solution {\r\n    public int maxValue(int[][] events, int k) {\r\n        Arrays.sort(events, (e1, e2) -> (e1[0] == e2[0] ? e1[1]-e2[1] : e1[0]-e2[0]));\r\n        return maxValue(events, 0, k, 0, new int[k+1][events.length]);\r\n    }\r\n\r\n    private int maxValue(int[][] events, int index, int remainingEvents, int lastEventEndDay, int[][] dp) {\r\n        // Return 0 if no events are left or maximum choice is reached\r\n        if (index >= events.length || remainingEvents == 0)\r\n            return 0;\r\n\r\n        // An Event cannot be picked if the previous event has not completed before current event\r\n        if (lastEventEndDay >= events[index][0])\r\n            return maxValue(events, index+1, remainingEvents, lastEventEndDay, dp);\r\n\r\n        // Return the value if the solution is already available\r\n        if (dp[remainingEvents][index] != 0)\r\n            return dp[remainingEvents][index];\r\n\r\n        // There are 2 choices that we can make,\r\n            // SKIP this meeting or PICK this meeting\r\n        return dp[remainingEvents][index] = Math.max(\r\n            maxValue(events, index+1, remainingEvents, lastEventEndDay, dp), // skip\r\n            maxValue(events, index+1, remainingEvents-1, events[index][1], dp) + events[index][2] // pick\r\n        );\r\n    }\r\n}",
    "javascript": "// Runtime: 217 ms (Top 82.22%) | Memory: 125.90 MB (Top 26.67%)\r\n\r\n/**\r\n * @param {number[][]} events\r\n * @param {number} k\r\n * @return {number}\r\n */\r\n\r\nvar f = function(ind,k,events,dp){\r\n    if(ind == events.length || k == 0) return 0;\r\n    \r\n    if(dp[ind][k] != -1) return dp[ind][k];\r\n    let take = events[ind][2];\r\n    for(let i = ind+1; i < events.length; ++i){\r\n        if(events[ind][1] < events[i][0]){\r\n            take += f(i,k-1,events,dp);\r\n            break;\r\n        }\r\n    }\r\n    let notTake = f(ind+1,k,events,dp);\r\n    return dp[ind][k] = Math.max(take,notTake);\r\n}\r\nvar maxValue = function(events, k) {\r\n    const dp = [];\r\n    events.sort((a,b)=>a[0]===b[0]?a[1]-b[1]:a[0]-b[0])\r\n    for(let i = 0; i < events.length; ++i){\r\n        dp[i] = new Array(k+1).fill(-1);\r\n    }\r\n    return f(0,k,events,dp);\r\n};"
  }
}
