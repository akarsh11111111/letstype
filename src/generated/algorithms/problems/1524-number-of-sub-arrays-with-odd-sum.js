export default {
  "id": 1524,
  "name": "Number of Sub-arrays With Odd Sum",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/number-of-sub-arrays-with-odd-sum",
  "relativeDir": "N/Number of Sub-arrays With Odd Sum",
  "slug": "1524-number-of-sub-arrays-with-odd-sum",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 34,
    "java": 25,
    "python": 15,
    "javascript": 10
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int mod = 1e9 + 7;\r\n    int solve(int ind, int n, vector<int> &arr, int req, vector<vector<int>> &dp) {\r\n        \r\n        if(ind == n) return 0;\r\n        if(dp[ind][req] != -1) return dp[ind][req];\r\n        if(req == 1) {\r\n            if(arr[ind] % 2 == 0) {\r\n                return dp[ind][req] = solve(ind + 1, n, arr, req, dp);\r\n            }\r\n            else {\r\n                return dp[ind][req] = (1 + solve(ind + 1, n, arr, !req, dp)) %mod;\r\n            }\r\n        }\r\n        else {\r\n            if(arr[ind] % 2 == 0) {\r\n                return dp[ind][req] = (1 + solve(ind + 1, n, arr, req, dp)) %mod;\r\n            }\r\n            else {\r\n                return  dp[ind][req] = solve(ind + 1, n, arr, !req, dp);\r\n            }\r\n        }\r\n    }\r\n    int numOfSubarrays(vector<int>& arr) {\r\n        int n = arr.size();\r\n        vector<vector<int>> dp(n, vector<int> (2, -1));\r\n        int count = 0;\r\n        for(int i = 0; i < n; i++) {\r\n            count = (count +  solve(i, n, arr, 1, dp))% mod;\r\n        }\r\n        return count;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def numOfSubarrays(self, arr: List[int]) -> int:\r\n        ce, co = 0, 0\r\n        s = 0\r\n        for x in arr:\r\n            if x % 2 == 0:\r\n                ce += 1\r\n            else:\r\n                old_co = co\r\n                co = ce + 1\r\n                ce = old_co\r\n            \r\n            s += co\r\n            \r\n        return s % (10**9+7)",
    "java": "//odd-even=odd\r\n//even-odd=odd\r\nclass Solution {\r\n    public int numOfSubarrays(int[] arr) {\r\n        long ans=0;\r\n        int even=0;\r\n        int odd=0;\r\n        \r\n        long sum=0;\r\n        \r\n        for(int i=0;i<arr.length;i++){\r\n            sum+=arr[i];\r\n            \r\n            if(sum%2==0){\r\n                ans+=odd;\r\n                even++;\r\n            }else{\r\n                ans+=even+1;\r\n                odd++;\r\n            }\r\n        }\r\n        \r\n        return (int)(ans%(1000000007));\r\n    }\r\n}",
    "javascript": "var numOfSubarrays = function(arr) {\r\n    let mod=1e9+7,sum=0,odds=0,evens=0\r\n\t//Notice that I do not need to keep track of the prefixSums, I just need the total count of odd and even PrefixSums\r\n    for(let i=0;i<arr.length;i++){\r\n        sum+=arr[i]\r\n        odds+=Number(sum%2==1)\r\n        evens+=Number(sum%2==0)\r\n    }\r\n    return (odds*evens+odds)%mod\r\n};"
  }
}
