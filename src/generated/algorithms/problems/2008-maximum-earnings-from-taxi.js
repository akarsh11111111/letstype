export default {
  "id": 2008,
  "name": "Maximum Earnings From Taxi",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-earnings-from-taxi",
  "relativeDir": "M/Maximum Earnings From Taxi",
  "slug": "2008-maximum-earnings-from-taxi",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 39,
    "java": 50,
    "python": 18,
    "javascript": 48
  },
  "languages": {
    "cpp": "// Runtime: 631 ms (Top 89.55%) | Memory: 99.6 MB (Top 81.24%)\r\n\r\nclass Solution {\r\n    long long dp[100005];\r\n    // Searching for next passenger who can sit in the car\r\n    int binarySearch(vector<vector<int>>& rides,int val){\r\n        int s=0,e=rides.size()-1;\r\n        int ans=rides.size();\r\n        while(s<=e){\r\n            int mid = s + (e-s)/2;\r\n            if(rides[mid][0]>=val){\r\n                ans=mid;\r\n                e=mid-1;\r\n            }\r\n            else{\r\n                s=mid+1;\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n\r\n    long long helper(int i,vector<vector<int>>& rides){\r\n        if(i==rides.size()){\r\n            return 0;\r\n        }\r\n        if(dp[i]!=-1) return dp[i];\r\n        long long op1 = helper(i+1,rides); // We didn't pick this ith passenger\r\n        int idx = binarySearch(rides,rides[i][1]);\r\n        long long op2 = rides[i][1]-rides[i][0] + rides[i][2] + helper(idx,rides); // We pick this ith passenger\r\n        return dp[i]=max(op1,op2);\r\n    }\r\n\r\npublic:\r\n    long long maxTaxiEarnings(int n, vector<vector<int>>& rides) {\r\n        memset(dp,-1,sizeof dp);\r\n        sort(rides.begin(),rides.end());\r\n        return helper(0,rides);\r\n    }\r\n};",
    "python": "class Solution:\r\n    def maxTaxiEarnings(self, n: int, rides: List[List[int]]) -> int:        \r\n        rides.sort()\r\n        for job in rides:\r\n            job[2]+=job[1]-job[0]\r\n        \r\n        heap=[]\r\n        cur=ans=0\r\n        for start,e,p in rides:\r\n            \r\n            while heap and heap[0][0]<=start: \r\n                _,val=heappop(heap)\r\n                cur=max(cur,val)\r\n            heappush(heap,(e,cur+p))\r\n           \r\n            ans=max(ans,cur+p)\r\n            \r\n        return ans",
    "java": "// Runtime: 78 ms (Top 72.84%) | Memory: 71.20 MB (Top 35.03%)\r\n\r\nclass Solution {\r\n    private static class Job {\r\n\t\tprivate int start;\r\n\t\tprivate int end;\r\n\t\tprivate int profit;\r\n\r\n\t\tpublic Job(int start, int end, int profit) {\r\n\t\t\tthis.start = start;\r\n\t\t\tthis.end = end;\r\n\t\t\tthis.profit = profit;\r\n\t\t}\r\n\t}\r\n    \r\n    private int binarySearch(Job jobs[], int index) {\r\n\t\tint low = 0;\r\n\t\tint high = index - 1;\r\n\t\tint ans = -1;\r\n\t\twhile (low <= high) {\r\n\t\t\tint mid = low + (high - low) / 2;\r\n\t\t\tif (jobs[mid].end <= jobs[index].start) {\r\n\t\t\t\tans = mid;\r\n\t\t\t\tlow = mid + 1;\r\n\t\t\t} else {\r\n\t\t\t\thigh = mid - 1;\r\n\t\t\t}\r\n\t\t}\r\n\t\treturn ans;\r\n\t}\r\n    \r\n    public long maxTaxiEarnings(int n, int[][] rides) {\r\n\t\tJob jobs[] = new Job[rides.length];\r\n\t\tfor (int i = 0; i < rides.length; i++) {\r\n\t\t\tjobs[i] = new Job(rides[i][0], rides[i][1], rides[i][1] - rides[i][0] + rides[i][2]);\r\n\t\t}\r\n\t\tArrays.sort(jobs, (j1, j2) -> (j1.end - j2.end));\r\n\t\tlong[] dp = new long[rides.length];\r\n\t\tdp[0] = jobs[0].profit;\r\n\t\tfor (int i = 1; i < jobs.length; i++) {\r\n\t\t\tlong include = jobs[i].profit;\r\n\t\t\tint index = binarySearch(jobs, i);\r\n\t\t\tif (index != -1) {\r\n\t\t\t\tinclude += dp[index];\r\n\t\t\t}\r\n\t\t\tdp[i] = Math.max(include, dp[i - 1]);\r\n\t\t}\r\n\t\treturn dp[rides.length - 1];\r\n    }\r\n}",
    "javascript": "// Runtime: 397 ms (Top 81.82%) | Memory: 68.1 MB (Top 93.94%)\r\n\r\n// Same as https://leetcode.com/problems/maximum-profit-in-job-scheduling/\r\n// Time -> O(nlogn), where n = length of rides array\r\n// Space -> O(n), where n = length of rides array\r\n\r\n/**\r\n * @param {number} n\r\n * @param {number[][]} rides\r\n * @return {number}\r\n */\r\nvar maxTaxiEarnings = function(n, rides) {\r\n\r\n    const len = rides.length\r\n\r\n    rides.sort((a,b) => {\r\n        return a[1] - b[1]\r\n    })\r\n\r\n    // Binary search\r\n    function binarySearch(idx) {\r\n        let low = 0, high = idx\r\n\r\n        while(low < high) {\r\n            let mid = Math.trunc((low+high)/2)\r\n\r\n            if(rides[mid][1] <= rides[idx][0]) low = mid+1\r\n            else high = mid\r\n        }\r\n\r\n        return high === 0 ? -1 : high-1\r\n    }\r\n\r\n    let dp = new Array(len).fill(0)\r\n    dp[0] = rides[0][2] + (rides[0][1] - rides[0][0])\r\n\r\n    for(let i=1; i<len; i++) {\r\n        dp[i] = rides[i][2] + (rides[i][1] - rides[i][0])\r\n        let j = binarySearch(i)\r\n\r\n        if(j !== -1)\r\n            dp[i] += dp[j]\r\n\r\n        dp[i] = Math.max(dp[i], dp[i-1])\r\n    }\r\n\r\n    return dp[len-1]\r\n};"
  }
}
