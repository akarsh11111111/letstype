export default {
  "id": 907,
  "name": "Sum of Subarray Minimums",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/sum-of-subarray-minimums",
  "relativeDir": "S/Sum of Subarray Minimums",
  "slug": "0907-sum-of-subarray-minimums",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 24,
    "java": 48,
    "python": 16,
    "javascript": 22
  },
  "languages": {
    "cpp": "// Runtime: 62 ms (Top 92.08%) | Memory: 43.30 MB (Top 49.95%)\r\n\r\nclass Solution \r\n{\r\npublic:\r\n    int sumSubarrayMins(vector<int>& n) \r\n    {\r\n        vector<long> s, sums(n.size(),0);\r\n        long j, res=0, mod = 1000000007;\r\n        for (int i = 0; i < n.size(); ++i)\r\n        {\r\n            while (!s.empty() && n[s.back()] > n[i])\r\n                s.pop_back();\r\n            j = !s.empty() ? s.back() : -1;\r\n            \r\n            sums[i] = ((j>=0?sums[j]:0) + (i-j)*n[i]) % mod;\r\n            s.push_back(i);\r\n        }\r\n\r\n        for (int i = 0; i < sums.size(); ++i)\r\n            res = (res + sums[i]) % mod;\r\n        return res;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def sumSubarrayMins(self, arr: List[int]) -> int:\r\n        n = len(arr)\r\n        small_before = [-1]*n\r\n        stack = []\r\n        for i in range(n):\r\n            while stack and arr[stack[-1]] >= arr[i]:\r\n                stack.pop()\r\n            if stack:small_before[i] = stack[-1]\r\n            stack.append(i)\r\n        best = [0]*(n+1)\r\n        ans = 0\r\n        for i in range(n):\r\n            best[i] = best[small_before[i]] + (i - small_before[i])*arr[i]\r\n            ans += best[i]\r\n        return ans%1000000007",
    "java": "class Solution {\r\n    public int sumSubarrayMins(int[] arr) {\r\n      int n = arr.length;\r\n      int ans1[] = nsl(arr);\r\n      int ans2[] = nsr(arr);\r\n      long sum=0;\r\n      for(int i=0;i<n;i++){\r\n        sum=(sum + (long)(arr[i]*(long)(ans1[i]*ans2[i])%1000000007)%1000000007)%1000000007;\r\n      }\r\n      return (int)sum;\r\n\t}\r\n    public static int[] nsl(int arr[]){\r\n      Stack<Integer> s = new Stack<>();\r\n      int ans[] = new int[arr.length];\r\n      for(int i=0;i<arr.length;i++){\r\n        while(!s.isEmpty() && arr[i]<arr[s.peek()]){\r\n          s.pop();\r\n        }\r\n        if(s.isEmpty()){\r\n          ans[i] = i-(-1);\r\n          s.push(i);\r\n        }\r\n        else{\r\n          ans[i] = i-s.peek();\r\n          s.push(i);\r\n        }\r\n      }\r\n      return ans;\r\n    }\r\n  public static int[] nsr(int arr[]){\r\n      Stack<Integer> s = new Stack<>();\r\n      int ans[] = new int[arr.length];\r\n      for(int i=arr.length-1;i>=0;i--){\r\n        while(!s.isEmpty() && arr[s.peek()]>=arr[i]){\r\n          s.pop();\r\n        }\r\n        if(s.isEmpty()){\r\n          ans[i] = arr.length-i;\r\n          s.push(i);\r\n        }\r\n        else{\r\n          ans[i] = s.peek()-i;\r\n          s.push(i);\r\n        }\r\n      }\r\n      return ans;\r\n    }\r\n}",
    "javascript": "// Runtime: 81 ms (Top 51.61%) | Memory: 52.50 MB (Top 9.68%)\r\n\r\nvar sumSubarrayMins = function(arr) {\r\n    \r\n    M = 10**9+7\r\n    stack = [-1]\r\n    res = 0\r\n    arr.push(0)\r\n    \r\n    for(let i2 = 0; i2 < arr.length; i2++){\r\n        while(arr[i2] < arr[stack[stack.length -1]]){\r\n            i = stack.pop()\r\n            i1 = stack[stack.length-1]\r\n            Left = i - i1\r\n            Right = i2 -i\r\n            res += (Left*Right*arr[i])\r\n        };\r\n        stack.push(i2)\r\n    };\r\n    \r\n    return res%M\r\n};"
  }
}
