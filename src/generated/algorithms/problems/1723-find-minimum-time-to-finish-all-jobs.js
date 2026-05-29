export default {
  "id": 1723,
  "name": "Find Minimum Time to Finish All Jobs",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-minimum-time-to-finish-all-jobs",
  "relativeDir": "F/Find Minimum Time to Finish All Jobs",
  "slug": "1723-find-minimum-time-to-finish-all-jobs",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 37,
    "java": 31,
    "python": 36,
    "javascript": 15
  },
  "languages": {
    "cpp": "// Runtime: 3 ms (Top 94.98%) | Memory: 7.5 MB (Top 61.16%)\r\nclass Solution {\r\npublic:\r\n    int minimumTimeRequired(vector<int>& jobs, int k) {\r\n        int sum = 0;\r\n        for(int j:jobs)\r\n            sum += j;\r\n        sort(jobs.begin(),jobs.end(),greater<int>());\r\n        int l = jobs[0], r = sum;\r\n        while(l<r){\r\n            int mid = (l+r)>>1;\r\n            vector<int> worker(k,0);\r\n            if(dfs(jobs,worker,0,mid))\r\n                r = mid;\r\n            else\r\n                l = mid + 1;\r\n        }\r\n        return l;\r\n    }\r\n    bool dfs(vector<int>& jobs, vector<int>& worker, int step, int target){\r\n        if(step>=jobs.size())\r\n            return true;\r\n        int cur = jobs[step];\r\n        // assign cur to worker i\r\n        for(int i=0;i<worker.size();i++){\r\n            if(worker[i] + cur <= target){\r\n                worker[i] += cur;\r\n                if(dfs(jobs,worker,step+1,target))\r\n                    return true;\r\n                worker[i] -= cur;\r\n            }\r\n            if(worker[i]==0)\r\n                break;\r\n        }\r\n        return false;\r\n    }\r\n};",
    "python": "// Runtime: 30 ms (Top 99.44%) | Memory: 16.50 MB (Top 63.13%)\r\n\r\nclass Solution:\r\n    def minimumTimeRequired(self, jobs: List[int], k: int) -> int:\r\n        def branchAndBound(i: int):\r\n            nonlocal r\r\n            if i == n:\r\n                r = min(r, max(a))\r\n                return\r\n            visited = set()\r\n            for j in range(k):\r\n                if a[j] in visited:\r\n                    continue\r\n                visited.add(a[j])\r\n                if a[j] + jobs[i] >= r:\r\n                    continue\r\n                a[j] += jobs[i]\r\n                branchAndBound(i+1)\r\n                a[j] -= jobs[i]\r\n\r\n        n = len(jobs)\r\n        if n <= k:\r\n            return max(jobs)\r\n\r\n        # use greed algorithm to get upper bound\r\n        jobs.sort(reverse=True)\r\n        a = list(jobs[:k])\r\n        for job in jobs[k:]:\r\n            m0 = min(a)\r\n            i = a.index(m0)\r\n            a[i] += job\r\n        r = max(a)\r\n\r\n        a = [0] * k\r\n        branchAndBound(0)\r\n        return r",
    "java": "class Solution {\r\n    int result = Integer.MAX_VALUE;\r\n    public int minimumTimeRequired(int[] jobs, int k) {\r\n        int length = jobs.length;\r\n        Arrays.sort(jobs);\r\n        backtrack(jobs, length - 1, new int [k]);\r\n        return result;\r\n    }\r\n    \r\n    public void backtrack(int [] jobs, int current, int [] workers) {\r\n        if (current < 0) {\r\n            result = Math.min(result, Arrays.stream(workers).max().getAsInt());\r\n            return;\r\n        }\r\n        \r\n        if (Arrays.stream(workers).max().getAsInt() >=  result)\r\n            return;\r\n        for (int i=0; i<workers.length; i++) {\r\n            if (i > 0 && workers[i] == workers[i-1])\r\n                continue;\r\n            // make choice\r\n            workers[i] += jobs[current];\r\n            // backtrack\r\n            backtrack(jobs, current-1, workers);\r\n            // undo the choice\r\n            workers[i] -= jobs[current];\r\n        }\r\n    }\r\n    \r\n    \r\n}",
    "javascript": "// Runtime: 7724 ms (Top 6.25%) | Memory: 48.8 MB (Top 25.00%)\r\nvar minimumTimeRequired = function(jobs, k) {\r\n    let n=jobs.length, maskSum=[...Array(1<<n)].map(d=>0)\r\n    for(let mask=0;mask<(1<<n);mask++) //pre-store the sums of every mask\r\n        for(let i=0;i<n;i++)\r\n            maskSum[mask]+=Number(((1<<i) & mask)!=0)*jobs[i]\r\n    let dp=[...Array(k+1)].map(d=>[...Array(1<<n)].map(d=>Infinity))\r\n    dp[0][0]=0\r\n    for(let i=1;i<=k;i++) //for each new person\r\n        for(let curmask=0;curmask<(1<<n);curmask++) //guess what his mask can be, what items can he select\r\n            for(let prevmask=0;prevmask<(1<<n);prevmask++) // but also, guess what the previous i-1 persons took already\r\n                if((curmask&prevmask)===0) //obviously, 2 people can't take the same job\r\n                    dp[i][curmask|prevmask]=Math.min(dp[i][curmask|prevmask],Math.max(dp[i-1][prevmask],maskSum[curmask]))\r\n    return dp[k][(1<<n) -1]\r\n};"
  }
}
