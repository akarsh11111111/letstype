export default {
  "id": 1299,
  "name": "Replace Elements with Greatest Element on Right Side",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side",
  "relativeDir": "R/Replace Elements with Greatest Element on Right Side",
  "slug": "1299-replace-elements-with-greatest-element-on-right-side",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 26,
    "java": 12,
    "python": 11,
    "javascript": 15
  },
  "languages": {
    "cpp": "// Runtime: 25 ms (Top 60.54%) | Memory: 14.6 MB (Top 67.48%)\r\nclass Solution {\r\npublic:\r\n    vector<int> replaceElements(vector<int>& arr) {\r\n        int n=arr.size();\r\n\r\n        //taking last index as greatest for now\r\n        int g=arr[n-1];\r\n        //setting last index as -1\r\n        arr[n-1]=-1;\r\n        for(int i=n-2;i>=0;i--)\r\n        {\r\n        //storing last index value to be changed to comapare with the greatest value till now\r\n            int h=arr[i];\r\n            //assigning greatest till now from right\r\n            arr[i]=g;\r\n            //checking if current is greater than the previous indices\r\n            if(h>g)\r\n            {\r\n                g=h;\r\n            }\r\n        }\r\n                     //returning the value\r\n     return arr;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def replaceElements(self, arr: List[int]) -> List[int]:\r\n        maxright = arr[-1]\r\n        for i in range(len(arr) -1,-1,-1):\r\n            temp = arr[i]\r\n            arr[i] = maxright\r\n            if temp > maxright:\r\n                maxright = temp\r\n        arr[-1] = -1\r\n        \r\n        return arr",
    "java": "// Runtime: 2 ms (Top 67.33%) | Memory: 55.1 MB (Top 5.58%)\r\nclass Solution {\r\n    public int[] replaceElements(int[] arr) {\r\n      int greatElement = -1;\r\n        for(int i = arr.length-1; i >= 0; i--) {\r\n            int temp = arr[i];\r\n            arr[i] = greatElement;\r\n            greatElement = Math.max(temp, greatElement);\r\n        }\r\n        return arr;\r\n    }\r\n}",
    "javascript": " * @param {number[]} arr\r\n * @return {number[]}\r\n */\r\nvar replaceElements = function(arr) {\r\n    let max = arr[arr.length -1]\r\n    \r\n     for(let j=arr.length - 2; j>=0; --j){\r\n         let curr = arr[j];\r\n         arr[j] = max\r\n         max = Math.max(max,curr)\r\n     }\r\n    \r\n    arr[arr.length -1] = -1;\r\n    return arr;\r\n};"
  }
}
