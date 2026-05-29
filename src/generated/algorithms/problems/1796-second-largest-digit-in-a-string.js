export default {
  "id": 1796,
  "name": "Second Largest Digit in a String",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/second-largest-digit-in-a-string",
  "relativeDir": "S/Second Largest Digit in a String",
  "slug": "1796-second-largest-digit-in-a-string",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 22,
    "java": 21,
    "python": 11,
    "javascript": 22
  },
  "languages": {
    "cpp": "// Runtime: 9 ms (Top 31.49%) | Memory: 6.6 MB (Top 98.16%)\r\nclass Solution {\r\npublic:\r\n    int secondHighest(string s) {\r\n        // support variables\r\n        int res[2] = {-1, -1};\r\n        // parsing s\r\n        for (char c: s) {\r\n            // considering only numerical characters\r\n            if (c >= '0' && c <= '9') {\r\n                // normalising c\r\n                c -= '0';\r\n                // updating res\r\n                if (c > res[0]) {\r\n                    res[1] = res[0];\r\n                    res[0] = c;\r\n                } else if (c != res[0] && c > res[1]) res[1] = c;\r\n            }\r\n        }\r\n        return res[1];\r\n    }\r\n};",
    "python": "# Runtime: 80 ms (Top 5.3%) | Memory: 16.30 MB (Top 72.1%)\r\n\r\nclass Solution:\r\n    def secondHighest(self, s: str) -> int:\r\n        nums = []\r\n        for char in s:\r\n            if char.isdigit():\r\n                nums.append(int(char))\r\n        nums = [num for num in nums if num != max(nums)]\r\n        if len(nums) >= 1: return max(nums)\r\n        else: return -1",
    "java": "// Runtime: 3 ms (Top 72.70%) | Memory: 42.6 MB (Top 56.41%)\r\nclass Solution {\r\n    public int secondHighest(String s) {\r\n        int[] arr = new int[10];\r\n        for(int i = 0;i<s.length();i++){\r\n            if(s.charAt(i) - '0' <=9 & s.charAt(i)-'0' >=0){\r\n                arr[s.charAt(i)-'0']++;\r\n            }\r\n        }\r\n        boolean first = false;\r\n        for(int i = 9;i>=0;i--){\r\n            if(arr[i] !=0){\r\n                if(first)\r\n                    return i;\r\n                else first = true;\r\n            }\r\n        }\r\n\r\n        return -1;\r\n    }\r\n}",
    "javascript": "// Runtime: 116 ms (Top 36.48%) | Memory: 43.8 MB (Top 80.69%)\r\n/**\r\n * @param {string} s\r\n * @return {number}\r\n */\r\nvar secondHighest = function(s) {\r\n    //let's start by getting rid of all the non-digits\r\n    let myRegex = /\\D/g\r\n    s = s.replace(myRegex,'')\r\n    var digits = s.split('')\r\n    //at this point, digits is an array of all the digit characters that were originally in s\r\n    digits.sort(function(a, b){return b - a}) //sort the array into descending order\r\n    var res = new Set(digits) //turn the array into a set, to remove duplicates\r\n    if(res.size <=1){\r\n        //if the set is sized 1, then there is no second largest digit\r\n        return -1\r\n    }\r\n    else{\r\n        //otherwise, the second largest digit would be at index 1 (because we sorted the array into descending order)\r\n        return [...res][1]\r\n    }\r\n};"
  }
}
