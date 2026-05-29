export default {
  "id": 941,
  "name": "Valid Mountain Array",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/valid-mountain-array",
  "relativeDir": "V/Valid Mountain Array",
  "slug": "0941-valid-mountain-array",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 22,
    "java": 20,
    "python": 13,
    "javascript": 12
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool validMountainArray(vector<int>& arr) {\r\n        int flag = 1;\r\n        if((arr.size()<=2) || (arr[1] <= arr[0])) return false;\r\n        for(int i=1; i<arr.size(); i++){\r\n            if(flag){\r\n                if(arr[i] > arr[i-1]) continue;\r\n                i--;\r\n                flag = 0;\r\n            }\r\n            else{\r\n                if(arr[i] < arr[i-1]) continue;\r\n                return false;\r\n            }\r\n        }\r\n\r\n        if(flag) return false;\r\n        return true;\r\n        \r\n    }\r\n};****",
    "python": "// Runtime: 153 ms (Top 95.7%) | Memory: 18.70 MB (Top 43.81%)\r\n\r\nclass Solution:\r\n    def validMountainArray(self, arr: List[int]) -> bool:\r\n        if len(arr)<=2 or max(arr)==arr[0] or max(arr)==arr[len(arr)-1]:\r\n            return False\r\n        f=True\r\n        for i in range(len(arr)-1):\r\n            if f and arr[i]>=arr[i+1]:\r\n                f=False\r\n            if not f and arr[i]<=arr[i+1]:\r\n                return False\r\n        return True",
    "java": "// Runtime: 2 ms (Top 77.02%) | Memory: 54.3 MB (Top 41.77%)\r\nclass Solution {\r\n    public boolean validMountainArray(int[] arr) {\r\n        // edge case\r\n        if(arr.length < 3) return false;\r\n        // keep 2 pointers\r\n        int i=0;\r\n        int j=arr.length-1;\r\n        // use i pointer to iterate through steep increase from LHS\r\n        while(i<j && arr[i]<arr[i+1]) {\r\n            i++;\r\n        }\r\n        // use j pointer to iterate steep increase from RHS\r\n        while(j>i && arr[j]<arr[j-1]) {\r\n            j--;\r\n        }\r\n        // both should meet at same place and it be neither start or end.\r\n        return i==j && i<arr.length-1 && j>0;\r\n    }\r\n}",
    "javascript": "var validMountainArray = function(arr) {\r\n  let index = 0, length = arr.length;\r\n  //find the peak\r\n    while(index < length && arr[index] < arr[index + 1])index++\r\n  //edge cases\r\n    if(index === 0 || index === length - 1) return false;\r\n  //check if starting from peak to end of arr is descending order\r\n    \r\n    while(index < length && arr[index] > arr[index + 1])index++\r\n    \r\n    return index === length - 1;\r\n};"
  }
}
