export default {
  "id": 1589,
  "name": "Maximum Sum Obtained of Any Permutation",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-sum-obtained-of-any-permutation",
  "relativeDir": "M/Maximum Sum Obtained of Any Permutation",
  "slug": "1589-maximum-sum-obtained-of-any-permutation",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 32,
    "java": 22,
    "python": 14,
    "javascript": 22
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int MOD = 1e9 + 7 ;\r\n    vector<int> createPermutation(vector<int>&nums , vector<vector<int>> &requests){\r\n        sort(begin(nums),end(nums)) ;\r\n        \r\n        vector<int>sweep(nums.size() + 1) ;\r\n        for(auto &x : requests) ++sweep[x[0]] , --sweep[x[1] + 1] ;\r\n        for(int i = 1 ; i < sweep.size() ; ++i ) sweep[i] += sweep[i-1] ;\r\n        \r\n        vector<int> aux(nums.size()) ;\r\n        set<pair<int,int>> st ;\r\n        for(int i = 0 ; i < nums.size() ; ++i ) st.insert({sweep[i],i}) ;\r\n        \r\n        int i = 0 ;\r\n        while(st.size()){\r\n            auto[freq,idx] = *begin(st) ;\r\n            st.erase(begin(st)) ;\r\n            aux[idx] = nums[i++] ;\r\n        }\r\n        return aux ;\r\n    }\r\n    \r\n    int maxSumRangeQuery(vector<int>& nums, vector<vector<int>>& requests) {\r\n        vector<int> aux = createPermutation(nums,requests);\r\n        vector<int>pref ;\r\n        for(auto &x : aux) pref.push_back(pref.empty() ? x : x + pref.back()) ;\r\n        int ans = 0 ;\r\n        for(auto &x : requests) ans = (ans + (pref[x[1]] - (x[0]-1 >= 0 ? pref[x[0] - 1] : 0) + MOD) % MOD) % MOD;\r\n        return ans ;\r\n    }\r\n};",
    "python": "# Runtime: 1436 ms (Top 61.0%) | Memory: 50.25 MB (Top 70.4%)\r\n\r\nclass Solution:\r\n    def maxSumRangeQuery(self, nums: List[int], requests: List[List[int]]) -> int:\r\n        count = [0] * len(nums)\r\n        for i, j in requests:\r\n            count[i] += 1\r\n            if j + 1 < len(count):\r\n                count[j+1] -= 1\r\n        cur = 0\r\n        for i in range(len(count)):\r\n            count[i] += cur\r\n            cur = count[i]\r\n        return sum(n * c for n, c in zip(sorted(nums, reverse=True), sorted(count, reverse=True))) % (10 ** 9 + 7)",
    "java": "// Runtime: 87 ms (Top 13.18%) | Memory: 134 MB (Top 44.96%)\r\nclass Solution {\r\n    public int maxSumRangeQuery(int[] nums, int[][] requests) {\r\n        int n = nums.length;\r\n        int[] pref = new int[n];\r\n        for(int i=0;i<requests.length;i++){\r\n            pref[requests[i][0]]++;\r\n            if(requests[i][1]+1<n)pref[requests[i][1]+1]--;\r\n        }\r\n        for(int i=1;i<n;i++){\r\n            pref[i]+= pref[i-1];\r\n        }\r\n        Arrays.sort(nums);\r\n        Arrays.sort(pref);\r\n        long res = 0;\r\n        for(int i=0;i<n;i++){\r\n            res+=((long)pref[i]*nums[i]);\r\n            res%=1000000007;\r\n        }\r\n        return (int)res%1000000007;\r\n    }\r\n}",
    "javascript": "// Runtime: 10496 ms (Top 8.00%) | Memory: 79.4 MB (Top 56.00%)\r\n/**\r\n * @param {number[]} nums\r\n * @param {number[][]} requests\r\n * @return {number}\r\n */\r\nvar maxSumRangeQuery = function(nums, requests) {\r\n    let frequency = new Array(nums.length).fill(0)\r\n    for(let req of requests){\r\n        for(let i=req[0];i<=req[1];i++){\r\n            frequency[i]++\r\n        }\r\n    }\r\n    nums = nums.sort((a,b)=>a-b)\r\n    let freqArr = frequency.sort((a,b)=>b-a)\r\n    let sum =0\r\n    for(let freq of freqArr){\r\n        sum += (freq * nums.pop())\r\n    }\r\n    const mod = (10 ** 9) + 7;\r\n    return sum%mod\r\n};"
  }
}
