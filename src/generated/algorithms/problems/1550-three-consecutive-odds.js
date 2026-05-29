export default {
  "id": 1550,
  "name": "Three Consecutive Odds",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/three-consecutive-odds",
  "relativeDir": "T/Three Consecutive Odds",
  "slug": "1550-three-consecutive-odds",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 18,
    "java": 18,
    "python": 12,
    "javascript": 18
  },
  "languages": {
    "cpp": "// Runtime: 8 ms (Top 31.62%) | Memory: 8.2 MB (Top 80.71%)\r\nclass Solution {\r\npublic:\r\n    bool threeConsecutiveOdds(vector<int>& arr) {\r\n        int k = 0;\r\n        for(int i=0;i<arr.size();i++){\r\n            if(arr[i] % 2 != 0){\r\n                k++;\r\n                if(k == 3){\r\n                    return true;\r\n                }\r\n            }else{\r\n                k = 0;\r\n            }\r\n        }\r\n        return false;\r\n    }\r\n};",
    "python": "# Runtime: 106 ms (Top 5.05%) | Memory: 14 MB (Top 60.17%)\r\nclass Solution:\r\n    def threeConsecutiveOdds(self, arr: List[int]) -> bool:\r\n        c=0\r\n        for i in arr:\r\n            if i%2==0:\r\n                c=0\r\n            else:\r\n                c+=1\r\n                if c==3:\r\n                    return True\r\n        return False",
    "java": "class Solution {\r\n    public boolean threeConsecutiveOdds(int[] arr) {\r\n        int count = 0,n = arr.length;\r\n        for(int i=0;i<n;i++)\r\n        {\r\n            if((arr[i] & 1) > 0)\r\n            {\r\n                count++;\r\n                if(count == 3) return true;\r\n            }\r\n            else\r\n            {\r\n                count = 0;\r\n            }\r\n        }\r\n        return false;\r\n    }\r\n}",
    "javascript": "// Runtime: 82 ms (Top 63.89%) | Memory: 42.1 MB (Top 58.33%)\r\n\r\nvar threeConsecutiveOdds = function(arr) {\r\n    let c = 0;\r\n\r\n    for(let val of arr){\r\n        if(val % 2 === 1){\r\n            c++;\r\n            if(c === 3) {\r\n                return true;\r\n            }\r\n        } else {\r\n            c=0;\r\n        }\r\n    }\r\n\r\n    return false;\r\n};"
  }
}
