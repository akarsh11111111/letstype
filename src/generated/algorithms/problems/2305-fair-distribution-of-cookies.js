export default {
  "id": 2305,
  "name": "Fair Distribution of Cookies",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/fair-distribution-of-cookies",
  "relativeDir": "F/Fair Distribution of Cookies",
  "slug": "2305-fair-distribution-of-cookies",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 28,
    "java": 34,
    "python": 18,
    "javascript": 25
  },
  "languages": {
    "cpp": "// Runtime: 1339 ms (Top 11.66%) | Memory: 7.20 MB (Top 82.43%)\r\n\r\nclass Solution {\r\npublic:\r\n    int ans = INT_MAX;\r\n    void solve(int start, vector<int>& nums, vector<int>& v, int k){\r\n        if(start==nums.size()){\r\n            int maxm = INT_MIN;\r\n            for(int i=0;i<k;i++){\r\n                maxm = max(maxm,v[i]);\r\n            }\r\n            ans = min(ans,maxm);\r\n            return;\r\n        }\r\n        for(int i=0;i<k;i++){\r\n            v[i] += nums[start];\r\n            solve(start+1,nums,v,k);\r\n            v[i] -= nums[start];\r\n        }\r\n    }\r\n    \r\n    int distributeCookies(vector<int>& nums, int k) { // nums is the cookies vector\r\n        int n = nums.size();\r\n        vector<int> v(k,0); // v is to store each sum of the k subsets\r\n        solve(0,nums,v,k);\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def distributeCookies(self, cookies: List[int], k: int) -> int:\r\n        ans = float('inf')\r\n        fair = [0]*k\r\n        def rec(i):\r\n            nonlocal ans,fair\r\n            if i == len(cookies):\r\n                ans = min(ans,max(fair))\r\n                return\r\n\t\t\t# Bounding condition to stop a branch if unfairness already exceeds current optimal soltution\r\n\t\t\tif ans <= max(fair):\r\n                return\r\n            for j in range(k):\r\n                fair[j] += cookies[i]\r\n                rec(i+1)\r\n                fair[j] -= cookies[i]\r\n        rec(0)\r\n        return ans",
    "java": "// Runtime: 0 ms (Top 100.0%) | Memory: 39.28 MB (Top 98.3%)\r\n\r\nclass Solution {\r\n    int ans;\r\n    int count[];\r\n    public int distributeCookies(int[] cookies, int k) {\r\n        ans= Integer.MAX_VALUE;\r\n        count= new int[k];\r\n\r\n        backtrack(0,cookies, k);\r\n        return ans;\r\n    }\r\n    public void backtrack(int cookieNumber, int[] cookies, int k)\r\n    {\r\n        if(cookieNumber==cookies.length)\r\n        {\r\n            int max= 0;\r\n            for(int i=0; i<k; i++)\r\n            {\r\n                max=Math.max(max, count[i]);\r\n\r\n            }\r\n            ans = Math.min(ans, max);\r\n            return;\r\n        }\r\n        for(int i=0;i<k; i++)\r\n        {\r\n            count[i]+=cookies[cookieNumber];\r\n            backtrack(cookieNumber+1, cookies, k);\r\n            count[i]-=cookies[cookieNumber];\r\n            if(count[i]==0) break;\r\n        }\r\n    }\r\n}",
    "javascript": "var distributeCookies = function(cookies, k) {\r\n    cookies.sort((a, b) => b - a);\r\n    if(k === cookies.length) return cookies[0];\r\n    \r\n    const arr = new Array(k).fill(0);\r\n    let res = Infinity;\r\n    \r\n    function helper(arr, cookies, level) {\r\n        if(level === cookies.length) {\r\n            const max = Math.max(...arr);\r\n            res = Math.min(res, max);\r\n            return;\r\n        }\r\n        const cookie = cookies[level];\r\n        for(let i = 0; i < arr.length; i++) {\r\n            arr[i] += cookie;\r\n            helper(arr, cookies, level + 1);\r\n            arr[i] -= cookie;\r\n        }\r\n    }\r\n    \r\n    helper(arr, cookies, 0);\r\n    \r\n    return res;\r\n};"
  }
}
