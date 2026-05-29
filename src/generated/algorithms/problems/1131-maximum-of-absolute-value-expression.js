export default {
  "id": 1131,
  "name": "Maximum of Absolute Value Expression",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-of-absolute-value-expression",
  "relativeDir": "M/Maximum of Absolute Value Expression",
  "slug": "1131-maximum-of-absolute-value-expression",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 24,
    "java": 41,
    "python": 23,
    "javascript": 19
  },
  "languages": {
    "cpp": "// Runtime: 125 ms (Top 8.84%) | Memory: 29.3 MB (Top 14.63%)\r\nclass Solution {\r\npublic:\r\n    int maxAbsValExpr(vector<int>& arr1, vector<int>& arr2) {\r\n        int res=0;\r\n        int n = arr1.size();\r\n        vector<int>v1;\r\n        vector<int>v2;\r\n        vector<int>v3;\r\n        vector<int>v4;\r\n        for(int i=0;i<n;i++)\r\n        {\r\n            v1.push_back(i+arr1[i]+arr2[i]);\r\n            v2.push_back(i+arr1[i]-arr2[i]);\r\n            v3.push_back(i-arr1[i]+arr2[i]);\r\n            v4.push_back(i-arr1[i]-arr2[i]);\r\n        }\r\n        res = max(res,*max_element(v1.begin(),v1.end())-*min_element(v1.begin(),v1.end()));\r\n        res = max(res,*max_element(v2.begin(),v2.end())-*min_element(v2.begin(),v2.end()));\r\n        res = max(res,*max_element(v3.begin(),v3.end())-*min_element(v3.begin(),v3.end()));\r\n        res = max(res,*max_element(v4.begin(),v4.end())-*min_element(v4.begin(),v4.end()));\r\n        return res;\r\n    }\r\n};",
    "python": "class Solution(object):\r\n    def maxAbsValExpr(self, arr1, arr2):\r\n        \"\"\"\r\n        :type arr1: List[int]\r\n        :type arr2: List[int]\r\n        :rtype: int\r\n        \"\"\"\r\n        max_ppp,max_ppm,max_pmp,max_pmm=float('-inf'),float('-inf'),float('-inf'),float('-inf')\r\n        min_ppp,min_ppm,min_pmp,min_pmm=float('inf'),float('inf'),float('inf'),float('inf')\r\n        for i,(a,b) in enumerate(zip(arr1,arr2)):\r\n            ppp=a+b+i\r\n            if ppp>max_ppp:max_ppp=ppp\r\n            if ppp<min_ppp:min_ppp=ppp\r\n            ppm=a+b-i\r\n            if ppm>max_ppm:max_ppm=ppm\r\n            if ppm<min_ppm:min_ppm=ppm\r\n            pmp=a-b+i\r\n            if pmp>max_pmp:max_pmp=pmp\r\n            if pmp<min_pmp:min_pmp=pmp\r\n            pmm=a-b-i\r\n            if pmm>max_pmm:max_pmm=pmm\r\n            if pmm<min_pmm:min_pmm=pmm\r\n        return max(max_ppp-min_ppp,max_ppm-min_ppm,max_pmp-min_pmp,max_pmm-min_pmm)",
    "java": "// Runtime: 15 ms (Top 33.52%) | Memory: 58.1 MB (Top 8.52%)\r\nclass Solution {\r\n    public int maxAbsValExpr(int[] arr1, int[] arr2) {\r\n\r\n        //1. remove the modulas -\r\n        //i & j are interchangable because they are inside the modulas\r\n        // A[i] - A[j] + B[i] -B[j] + i-j\r\n        // A[i] + B[i] + i - B[j] - A[j] - j\r\n        // (A[i] + B[i] + i) ->X\r\n        // (B[j] - A[j] - j) -> y\r\n        // X - Y;\r\n        //to get max value X should be max & Y should min\r\n\r\n        // Possible cases (Since both arrays have same number of indexes, we can use single for loop & i as index)\r\n        //A[i] + B[i] + i ->1\r\n        //A[i] - B[i] + i ->2\r\n        //A[i] + B[i] - i ->3\r\n        //A[i] - B[i] - i ->4\r\n\r\n        // Find out max of all response\r\n\r\n        int arrayLength =arr1.length;\r\n        int v1[] = new int [arrayLength];\r\n        int v2[] = new int [arrayLength] ;\r\n        int v3[] = new int [arrayLength] ;\r\n        int v4[] = new int [arrayLength] ;\r\n        int res = 0;\r\n        for(int i = 0 ; i< arrayLength; i++)\r\n        {\r\n            v1[i] = i + arr1[i] + arr2[i];\r\n            v2[i] = i + arr1[i] - arr2[i];\r\n            v3[i] = i - arr1[i] + arr2[i];\r\n            v4[i] = i - arr1[i] - arr2[i];\r\n        }\r\nres = Math.max(res,Arrays.stream(v1).max().getAsInt()-Arrays.stream(v1).min().getAsInt());\r\n                res = Math.max(res,Arrays.stream(v2).max().getAsInt()-Arrays.stream(v2).min().getAsInt());\r\n                res = Math.max(res,Arrays.stream(v3).max().getAsInt()-Arrays.stream(v3).min().getAsInt());\r\n                res = Math.max(res,Arrays.stream(v4).max().getAsInt()-Arrays.stream(v4).min().getAsInt());\r\n    return res;\r\n    }\r\n}",
    "javascript": "// Runtime: 82 ms (Top 57.1%) | Memory: 55.85 MB (Top 7.1%)\r\n\r\nvar maxAbsValExpr = function(arr1, arr2) {\r\n    const l1 = [], l2 = [], l3 = [], l4 = [], res = [];\r\n    \r\n    for (let i = 0; i < arr1.length; i++) {\r\n        l1.push(arr1[i] + arr2[i] + i)\r\n        l2.push(arr1[i] - arr2[i] + i)\r\n        l3.push(-arr1[i] + arr2[i] + i)\r\n        l4.push(-arr1[i] - arr2[i] + i)\r\n    }\r\n    \r\n    res.push(Math.max(...l1) - Math.min(...l1))\r\n    res.push(Math.max(...l2) - Math.min(...l2))\r\n    res.push(Math.max(...l3) - Math.min(...l3))\r\n    res.push(Math.max(...l4) - Math.min(...l4))\r\n    \r\n    return Math.max(...res);\r\n};"
  }
}
