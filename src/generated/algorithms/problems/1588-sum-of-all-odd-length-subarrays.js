export default {
  "id": 1588,
  "name": "Sum of All Odd Length Subarrays",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/sum-of-all-odd-length-subarrays",
  "relativeDir": "S/Sum of All Odd Length Subarrays",
  "slug": "1588-sum-of-all-odd-length-subarrays",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 21,
    "java": 19,
    "python": 11,
    "javascript": 23
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int sumOddLengthSubarrays(vector<int>& arr) {\r\n        int sum=0;\r\n        int sum1=0;\r\n        for(int i=0;i<arr.size();i++)\r\n        {\r\n            int count=0;\r\n            sum+=arr[i];\r\n            for(int j=i;j<arr.size();j++)\r\n            {\r\n                sum1+=arr[j];\r\n                count++;\r\n                if(count%2!=0 and count!=1)\r\n                    sum+=sum1;\r\n            }\r\n            sum1=0;\r\n        }\r\n        return sum;\r\n    }\r\n};",
    "python": "// Runtime: 33 ms (Top 98.51%) | Memory: 16.50 MB (Top 56.37%)\r\n\r\nclass Solution:\r\n    def sumOddLengthSubarrays(self, arr: List[int]) -> int:\r\n        \r\n        length = len(arr)\r\n        ans = 0\r\n        \r\n        for i in range(length) :\r\n            ans += ((i+1)*(length-i)+1)//2 * arr[i]\r\n        return ans;",
    "java": "class Solution {\r\n    public int sumOddLengthSubarrays(int[] arr) {\r\n        \r\n        // Using two loops in this question...\r\n        int sum = 0;\r\n        for(int i=0 ; i<arr.length ; i++){\r\n            int prevSum = 0;\r\n            for(int j=i ; j<arr.length ; j++){\r\n                prevSum+=arr[j];\r\n                if((j-i+1)%2==1){\r\n                    sum+=prevSum;\r\n                }\r\n            }\r\n        }\r\n        // Time Complexity : O(n-square)\r\n        // Space Complexity : O(1)\r\n        return sum;\r\n    }\r\n}",
    "javascript": "/*\r\nSuppose N is the length of given array.\r\nNumber of subarrays including element arr[i] is\r\ni * (N-i) + (N-i) because there are N-i subarrays with arr[i] as first element\r\nand i * (N-i) subarrays with arr[i] as a not-first element. arr[i] appears in \r\n(N-i) subarrays for each preceding element and therefore we have i*(N-i).\r\n\r\nSuppose i * (N-i) + (N-i) is `total`. Ceil(total / 2) is the number of odd-length subarrays and Floor(total / 2) is the number of even-length subarrays. \r\nWhen total is odd, there is one more odd-length subarray because of a single-element subarray.\r\n    \r\nFor each number, we multiply its value with the total number of subarrays it appears and\r\nadd it to a sum.\r\n*/\r\nvar sumOddLengthSubarrays = function(arr) {\r\n    let sum = 0, N = arr.length;\r\n    for (let i = 0; i < arr.length; i++) {\r\n        let total = i * (N-i) + (N-i);\r\n        sum += Math.ceil(total / 2) * arr[i];\r\n    }\r\n    return sum;\r\n    // T.C: O(N)\r\n    // S.C: O(1)\r\n};"
  }
}
