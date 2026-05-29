export default {
  "id": 1191,
  "name": "K-Concatenation Maximum Sum",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/k-concatenation-maximum-sum",
  "relativeDir": "K/K-Concatenation Maximum Sum",
  "slug": "1191-k-concatenation-maximum-sum",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 51,
    "java": 40,
    "python": 24,
    "javascript": 12
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n\r\n    // Compute max score across all cases\r\n    //  1. (arr_sum * k) [array sum is positive]\r\n    //  2. (subarray_sum) [k == 1]\r\n    //  3. if k > 1:\r\n    //          if k == 2: lm + rm\r\n    //          else: lm + (arr_sum * (k-2)) + rm\r\n\r\n    // For case:3, instead of running over the entire modified array,\r\n    //  we can just add (arr_sum * (k-2)) to the 's' instead.\r\n\r\n    int kConcatenationMaxSum(vector<int>& arr, int k) {\r\n        \r\n        const int n = arr.size();\r\n        int64_t s{}, min_s{}, max_score{INT_MIN};\r\n        \r\n        // This loop computes the answer for case:2\r\n        for(int i=0; i<n; i++){\r\n            s += arr[i];\r\n            max_score = max(max_score, s - min_s);\r\n            min_s = min(min_s, s);\r\n        }\r\n        \r\n        if(k > 1){\r\n            // Condition for case:3 part:2\r\n            // At this point, 's' holds the sum of all numbers in 'arr'\r\n            if(k > 2) s = max(s, s + s * (k - 2));\r\n            // Base logic for case:3 part:1\r\n            for(int i=0; i<n; i++){\r\n                s += arr[i];\r\n                max_score = max(max_score, s - min_s);\r\n                min_s = min(min_s, s);\r\n            }\r\n        }\r\n\r\n        // If all numbers are positive, case:1 is automatically computed with\r\n        //  the method given above.\r\n        //  Because (for an array with all positive elements):\r\n        //      (max_score [after first loop]) == (arr_sum)\r\n        //      s is updated to (s + s * (k - 2))\r\n        //      Finally, s (and subsequently max_score) is also updated to (arr_sum * k)\r\n\r\n        // Apply modulo on answer and convert to int\r\n        int ans = static_cast<int>(max_score % (1000000000 + 7));\r\n        // Subarray can have length == 0 (and sum == 0)\r\n        if(ans < 0) return 0;\r\n        else return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def kConcatenationMaxSum(self, arr: List[int], k: int) -> int:\r\n        \r\n        dp = [0] * len(arr) # sum of the best subarry ends at i\r\n        dp[0] = arr[0]\r\n        total = arr[0] # total sum \r\n        right = arr[0] # sum of the best subarray starts at 0\r\n        \r\n        p = 1 \r\n        while p < len(arr):\r\n            dp[p] = max(arr[p], dp[p-1] + arr[p])\r\n            total += arr[p] \r\n            right = max(right, total)\r\n            \r\n            p += 1\r\n        \r\n        isolated = max(dp + [0]) # max sum\r\n        left = dp[-1] # sum of the best subarray ends at n-1\r\n        \r\n        if k == 1:\r\n            \r\n            return isolated  % (10**9 + 7)\r\n        \r\n        return max(left + right + max(0,(k-2) * total), isolated) % (10**9 + 7)",
    "java": "class Solution {\r\n    int mod = 1000000007;\r\n    \r\n    public int kadane(int[] a ){\r\n        int curr = 0;\r\n        int max = Integer.MIN_VALUE;\r\n        for(int i: a )\r\n        {\r\n            curr+=i;\r\n            if(curr<0 )\r\n                curr =0;\r\n            max = Math.max(max,curr );\r\n            \r\n        }\r\n        \r\n        return max%mod ;\r\n    }\r\n    public int kConcatenationMaxSum(int[] arr, int k) {\r\n        \r\n        int n = arr.length;\r\n        if(k==1 ) \r\n            return kadane(arr);\r\n        int[] temp = new int[2*n]; \r\n        for(int i=0;i<n;i++){\r\n            temp[i]=arr[i];\r\n            temp[n+i] =arr[i];\r\n        }\r\n        if(k==2 )\r\n            return kadane(temp)%mod;\r\n        \r\n        long sum = 0;\r\n        for(int i: arr) \r\n            sum+=i;\r\n        \r\n        if(sum>=0 )\r\n            return (int)( (kadane(temp)%mod)+ ((sum%mod) * (k-2)%mod) %mod);\r\n        else\r\n            return (kadane(temp)%mod );\r\n    }\r\n}",
    "javascript": "// Runtime: 134 ms (Top 27.59%) | Memory: 52.2 MB (Top 31.03%)\r\nvar kConcatenationMaxSum = function(arr, k) {\r\n    var MOD = 1000000007;\r\n    let sum = arr.reduce((a,b)=>a+b);\r\n    if(k>1) arr.push(...arr);\r\n    let temp = 0, result = 0;\r\n     for(i=0;i<arr.length;i++){\r\n          temp = Math.max(arr[i],arr[i]+temp);\r\n          if(temp>result) result = temp;\r\n        }\r\n    return (sum>0&&k>2) ? (result+sum*(k-2))%MOD : result%MOD;\r\n};"
  }
}
