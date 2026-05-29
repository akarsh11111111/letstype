export default {
  "id": 1534,
  "name": "Count Good Triplets",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/count-good-triplets",
  "relativeDir": "C/Count Good Triplets",
  "slug": "1534-count-good-triplets",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 20,
    "java": 21,
    "python": 10,
    "javascript": 18
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int countGoodTriplets(vector<int>& arr, int a, int b, int c) {\r\n        int ct = 0;\r\n        for(int i = 0; i<arr.size()-2; i++)\r\n        {\r\n            for(int j = i+1; j<arr.size()-1; j++)\r\n            {\r\n                if(abs(arr[i]-arr[j])<=a)\r\n                    for(int k = j+1; k<arr.size(); k++)\r\n                    {\r\n                        if(abs(arr[j]-arr[k])<=b && abs(arr[i]-arr[k])<=c)\r\n                            ct++;\r\n                    }\r\n            }\r\n        }\r\n        return ct;\r\n        \r\n    }\r\n};",
    "python": "# Runtime: 1794 ms (Top 11.20%) | Memory: 13.8 MB (Top 87.90%)\r\nclass Solution:\r\n    def countGoodTriplets(self, arr: List[int], a: int, b: int, c: int) -> int:\r\n        count = 0\r\n        for i in range(len(arr)):\r\n            for j in range(i+1,len(arr)):\r\n                for k in range(j+1,len(arr)):\r\n                    if abs(arr[i]-arr[j])<=a and abs(arr[j]-arr[k])<=b and abs(arr[k]-arr[i])<=c:\r\n                        count+=1\r\n        return count",
    "java": "// Runtime: 26 ms (Top 25.39%) | Memory: 41.4 MB (Top 78.10%)\r\nclass Solution {\r\n    public int countGoodTriplets(int[] arr, int a, int b, int c) {\r\n        int total = 0;\r\n        for (int i = 0; i < arr.length - 2; i++){\r\n            for (int j = i+1; j < arr.length - 1; j++){\r\n                for (int k = j+1; k < arr.length; k++){\r\n                    if (helper(arr[i], arr[j]) <= a &&\r\n                            helper(arr[j], arr[k]) <= b &&\r\n                                helper(arr[k], arr[i]) <= c)\r\n                        total++;\r\n                }\r\n            }\r\n        }\r\n        return total;\r\n    }\r\n\r\n    private static int helper(int x, int y) {\r\n        return Math.abs(x - y);\r\n    }\r\n}",
    "javascript": "// Runtime: 104 ms (Top 57.56%) | Memory: 42 MB (Top 82.93%)\r\nvar countGoodTriplets = function(arr, a, b, c) {\r\n  let triplets = 0;\r\n\r\n  for (let i = 0; i < arr.length - 2; i++) {\r\n    for (let j = i + 1; j < arr.length - 1; j++) {\r\n      if (Math.abs(arr[i] - arr[j]) > a) continue;\r\n      for (let k = j + 1; k < arr.length; k++) {\r\n        if (Math.abs(arr[j] - arr[k]) > b || Math.abs(arr[i] - arr[k]) > c) {\r\n          continue;\r\n        }\r\n        triplets++;\r\n      }\r\n    }\r\n  }\r\n\r\n  return triplets;\r\n};"
  }
}
