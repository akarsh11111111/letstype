export default {
  "id": 1806,
  "name": "Minimum Number of Operations to Reinitialize a Permutation",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-number-of-operations-to-reinitialize-a-permutation",
  "relativeDir": "M/Minimum Number of Operations to Reinitialize a Permutation",
  "slug": "1806-minimum-number-of-operations-to-reinitialize-a-permutation",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 36,
    "java": 16,
    "python": 10,
    "javascript": 15
  },
  "languages": {
    "cpp": "// Runtime: 55 ms (Top 25.45%) | Memory: 44.9 MB (Top 5.73%)\r\nclass Solution {\r\npublic:\r\n    vector<int> change(vector<int>arr,vector<int>v){\r\n        int n=v.size();\r\n         for(int i=0;i<n;i++){\r\n            if(i%2==0){\r\n                arr[i]=v[i/2];\r\n            }\r\n            else{\r\n                arr[i]=v[(n/2) + ((i-1)/2) ];\r\n            }\r\n        }\r\n        return arr;\r\n    }\r\n    int reinitializePermutation(int n) {\r\n        vector<int>v(n);\r\n        for(int i=0;i<n;i++){\r\n            v[i]=i;\r\n        }\r\n        vector<int>arr(n);\r\n\r\n        arr=change(arr,v);\r\n        if(arr==v){return 1;}\r\n\r\n        int cnt=1;\r\n\r\n        while(arr!=v){\r\n            arr=change(arr,arr);\r\n            cnt++;\r\n            if(arr==v){return cnt;}\r\n\r\n        }\r\n        return cnt;\r\n    }\r\n};",
    "python": "// Runtime: 341 ms (Top 53.7%) | Memory: 16.20 MB (Top 72.22%)\r\n\r\nclass Solution:\r\n    def reinitializePermutation(self, n: int) -> int:\r\n        ans = 0\r\n        perm = list(range(n))\r\n        while True: \r\n            ans += 1\r\n            perm = [perm[n//2+(i-1)//2] if i&1 else perm[i//2] for i in range(n)]\r\n            if all(perm[i] == i for i in range(n)): return ans",
    "java": "class Solution {\r\n    public int reinitializePermutation(int n) {\r\n        int ans = 1;\r\n        int num = 2;\r\n        if(n == 2) return 1;\r\n        while(true){\r\n            if(num % (n-1) == 1)break; \r\n            else {\r\n                ans++;\r\n                num = (num * 2) % (n-1);\r\n            }\r\n        }\r\n        return ans;\r\n        \r\n    }\r\n}",
    "javascript": "// Runtime: 57 ms (Top 54.55%) | Memory: 41.60 MB (Top 90.91%)\r\n\r\nvar reinitializePermutation = function(n) {\r\n    const BASE_INDEX = 1;\r\n    let result = 1;\r\n    let index = n / 2 + (BASE_INDEX - 1) / 2;\r\n\r\n    while (index !== BASE_INDEX) {\r\n        index = index % 2\r\n            ? n / 2 + (index - 1) / 2\r\n            : index / 2;\r\n        result += 1;\r\n    }\r\n    return result;\r\n};"
  }
}
