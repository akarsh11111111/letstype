export default {
  "id": 1835,
  "name": "Find XOR Sum of All Pairs Bitwise AND",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-xor-sum-of-all-pairs-bitwise-and",
  "relativeDir": "F/Find XOR Sum of All Pairs Bitwise AND",
  "slug": "1835-find-xor-sum-of-all-pairs-bitwise-and",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 20,
    "java": 18,
    "python": 5,
    "javascript": 18
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    // this code is basically pure mathematics, mainly distributive property with AND and XOR\r\n    \r\n    int getXORSum(vector<int>& arr1, vector<int>& arr2) {\r\n        int m=arr1.size();\r\n        int n=arr2.size();\r\n        long int ans1=0,ans2=0;\r\n        for(int i=0;i<m;i++)  // this loop stores the XOR between every element of arr1\r\n        {\r\n            ans1=ans1 ^ arr1[i];\r\n        }\r\n        for(int j=0;j<n;j++)   // this loop stores the XOR between every element of arr2\r\n        {\r\n            ans2=ans2 ^ arr2[j];\r\n        }\r\n        return ans1 & ans2;  // AND operation of both XOR's is the answer.\r\n        \r\n    }\r\n};",
    "python": "# Runtime: 2209 ms (Top 51.91%) | Memory: 30.3 MB (Top 21.37%)\r\nclass Solution:\r\n    def getXORSum(self, arr1: List[int], arr2: List[int]) -> int:\r\n        def xor_lis(lis): return functools.reduce(lambda a,b : a^b,lis)\r\n        return xor_lis(arr1) & xor_lis(arr2)",
    "java": "// Runtime: 2 ms (Top 19.55%) | Memory: 56.30 MB (Top 85.71%)\r\n\r\nclass Solution {\r\n    public int getXORSum(int[] arr1, int[] arr2) {\r\n        \r\n        int xor1 = 0, xor2 = 0;\r\n        \r\n        for (int arr : arr1) {\r\n            xor1 ^= arr;\r\n        }\r\n        \r\n        for (int arr : arr2) {\r\n            xor2 ^= arr;\r\n        }\r\n        \r\n        return xor1 & xor2;\r\n    }\r\n}",
    "javascript": "// Runtime: 71 ms (Top 88.89%) | Memory: 59.70 MB (Top 11.11%)\r\n\r\nvar getXORSum = function(arr1, arr2) {\r\n    // (x & 2) xor (x & 3) =[ !(x&2) & (x&3) ] OR  [ (x&2) & !(x&3) ]\r\n\t// = [ (!x || !2 ) & (x&3) ] OR [ (x&2) & (!x || !3) ]\r\n    // = [ (!x || !2) & x & 3 ]   OR  [ x & 2 & (!x || !3) ]\r\n    // = (!2 & x & 3 ) || (x & 2 & !3)\r\n    // = x & [ (!2 & 3) || (!3 & 2) ]\r\n    // = x & (2 XOR 3)\r\n    // const ans = (2 XOR 3 XOR....) in arr2\r\n    // The same principle: x, y,z... in arr1\r\n    // res = (x & ans) XOR (y & ans) XOR .....\r\n    //  = ans & (x XOR y XOR z .......)\r\n    // Finally: res = (XOR: arr1) AND (XOR: arr2);\r\n    var xor1 = arr1.reduce((acc,cur)=>acc^cur);\r\n    var xor2 = arr2.reduce((acc,cur)=>acc^cur);\r\n    return xor1 & xor2;\r\n};"
  }
}
