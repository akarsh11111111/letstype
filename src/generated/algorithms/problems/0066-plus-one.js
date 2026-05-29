export default {
  "id": 66,
  "name": "Plus One",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/plus-one",
  "relativeDir": "P/Plus One",
  "slug": "0066-plus-one",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 26,
    "java": 33,
    "python": 12,
    "javascript": 12
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<int> plusOne(vector<int>& digits) {\r\n        int len = digits.size(), carry = 0, temp = 0;\r\n        \r\n        vector<int> arr;\r\n        \r\n        for(int i=len-1; i>=0; i--) { // traverse from back to front\r\n            temp = digits[i] + carry;\r\n            \r\n            if(i == len-1) {\r\n                temp++;\r\n            }\r\n            \r\n            arr.push_back(temp % 10);\r\n            carry = temp/10;\r\n        }\r\n        \r\n        if(carry) {\r\n            arr.push_back(carry);\r\n        }\r\n        \r\n        reverse(arr.begin(), arr.end());\r\n        return arr;\r\n    }\r\n};",
    "python": "// Runtime: 33 ms (Top 85.76%) | Memory: 16.50 MB (Top 60.81%)\r\n\r\nclass Solution:\r\n    def plusOne(self, digits: List[int]) -> List[int]:\r\n\r\n        for i in range(len(digits)-1, -1, -1):\r\n            if digits[i] == 9:\r\n                digits[i] = 0\r\n            else:\r\n                digits[i] = digits[i] + 1\r\n                return digits\r\n        return [1] + digits",
    "java": "// Runtime: 0 ms (Top 100.00%) | Memory: 40.5 MB (Top 96.61%)\r\nclass Solution {\r\n    public int[] plusOne(int[] digits) {\r\n\r\n        int len = digits.length;\r\n\r\n        //last digit not a 9, just add 1 to it\r\n        if(digits[len - 1] != 9){\r\n            digits[len - 1] = digits[len - 1] + 1;\r\n            return digits;\r\n        }\r\n\r\n        //last digit is a 9, find the closest digit that is not a 9\r\n        else{\r\n            int i = len - 1;\r\n            while(i >= 0 && digits[i] == 9){\r\n                digits[i] = 0;\r\n                i--;\r\n            }\r\n            if(i == -1){\r\n                int[] ret = new int[len + 1];\r\n                for(int j = 0; j < len; j++){\r\n                    ret[j+1] = digits[j];\r\n                }\r\n                ret[0] = 1;\r\n                return ret;\r\n            }\r\n            digits[i] = digits[i] + 1;\r\n        }\r\n\r\n        return digits;\r\n    }\r\n}",
    "javascript": "var plusOne = function(digits) {\r\n    for(let i=digits.length-1; i>=0; i--){\r\n        if(digits[i] === 9){\r\n            digits[i] = 0\r\n        }else{\r\n            digits[i] += 1\r\n            return digits\r\n        }\r\n    }\r\n    digits.unshift(1)\r\n    return digits\r\n};"
  }
}
