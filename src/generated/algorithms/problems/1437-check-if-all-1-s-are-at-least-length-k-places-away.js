export default {
  "id": 1437,
  "name": "Check If All 1's Are at Least Length K Places Away",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away",
  "relativeDir": "C/Check If All 1's Are at Least Length K Places Away",
  "slug": "1437-check-if-all-1-s-are-at-least-length-k-places-away",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 21,
    "python": 10,
    "javascript": 14
  },
  "languages": {
    "cpp": "// Runtime: 146 ms (Top 9.14%) | Memory: 57.5 MB (Top 92.55%)\r\nclass Solution {\r\npublic:\r\n    bool kLengthApart(vector<int>& nums, int k) {\r\n        bool once = true ;\r\n        int x = 0 ;\r\n        int diff = 0 ;\r\n        for ( int i = 0 ; i < nums.size() ; i++ ) {\r\n            if ( nums[i] == 1 and once ) {\r\n                x = i ;\r\n                once = false ;\r\n            }\r\n            else if ( nums[i] == 1 ) {\r\n                diff = i-x ;\r\n                if ( diff-1 < k ) return false ;\r\n                x = i ;\r\n            }\r\n        }\r\n        return true ;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def kLengthApart(self, nums: List[int], k: int) -> bool:\r\n        pre = -k - 1\r\n        for i, v in enumerate(nums):\r\n            if v:\r\n                if i - pre < k + 1:\r\n                    return False\r\n                else:\r\n                    pre = i\r\n        return True",
    "javascript": "var kLengthApart = function(nums, k) {\r\n\tlet arr = [] ;\r\n\r\n\tfor(let i = 0 ; i < nums.length ; i++){\r\n\t\tif(nums[i] === 1)\r\n\t\t\tarr.push(i)\r\n\t}\r\n\tfor(let i = arr.length -1  ; i >= 0 ; i--){\r\n\t   if(arr[i] - arr[i - 1] -1 < k )\r\n\t\t   return false\r\n\t}\r\n\treturn true\r\n\r\n};"
  }
}
