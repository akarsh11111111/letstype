export default {
  "id": 1502,
  "name": "Can Make Arithmetic Progression From Sequence",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence",
  "relativeDir": "C/Can Make Arithmetic Progression From Sequence",
  "slug": "1502-can-make-arithmetic-progression-from-sequence",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 14,
    "java": 15,
    "python": 8,
    "javascript": 11
  },
  "languages": {
    "cpp": "// Runtime: 4 ms (Top 74.38%) | Memory: 9.1 MB (Top 32.76%)\r\nclass Solution {\r\npublic:\r\n    bool canMakeArithmeticProgression(vector<int>& arr) {\r\n        sort(arr.begin() , arr.end());\r\n        int diff = arr[1] - arr[0];\r\n        for(int i=1;i<arr.size();i++){\r\n            if(diff != arr[i] - arr[i-1]){\r\n                return false;\r\n            }\r\n        }\r\n        return true;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def canMakeArithmeticProgression(self, arr: List[int]) -> bool:\r\n        arr.sort()\r\n        check = arr[0] - arr[1]\r\n        for i in range(len(arr)-1):\r\n            if arr[i] - arr[i+1] != check:\r\n                return False\r\n        return True",
    "java": "// Runtime: 2 ms (Top 91.15%) | Memory: 43.1 MB (Top 10.07%)\r\nclass Solution {\r\n    public boolean canMakeArithmeticProgression(int[] arr) {\r\n        if(arr.length < 1)\r\n            return false;\r\n        Arrays.sort(arr);\r\n        int diff = arr[1]-arr[0];\r\n        for(int i=1;i<arr.length-1;i++){\r\n            if(arr[i+1]-arr[i]!=diff){\r\n                return false;\r\n            }\r\n        }\r\n        return true;\r\n    }\r\n}",
    "javascript": "// Runtime: 117 ms (Top 17.41%) | Memory: 42.3 MB (Top 65.96%)\r\nvar canMakeArithmeticProgression = function(arr) {\r\n    arr.sort(function(a,b){return a-b});\r\n    var dif = arr[1] - arr[0];\r\n    for(var i=2;i<arr.length;i++){\r\n        if(arr[i]-arr[i-1] !== dif){\r\n            return false;\r\n        }\r\n    }\r\n    return true;\r\n};"
  }
}
