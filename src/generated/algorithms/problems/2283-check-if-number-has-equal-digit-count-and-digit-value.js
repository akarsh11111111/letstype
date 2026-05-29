export default {
  "id": 2283,
  "name": "Check if Number Has Equal Digit Count and Digit Value",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value",
  "relativeDir": "C/Check if Number Has Equal Digit Count and Digit Value",
  "slug": "2283-check-if-number-has-equal-digit-count-and-digit-value",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 17,
    "java": 21,
    "python": 9,
    "javascript": 10
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool digitCount(string num) {\r\n        unordered_map<int,int> mpp;\r\n        int n= num.length();\r\n        for(auto it:num){\r\n            int x = it - '0';\r\n            mpp[x]++; // Store the frequency of the char as a number\r\n        }\r\n        for(int i=0;i<n;i++){\r\n            int x = num[i] - '0'; // get the char as number\r\n &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;if(mpp[i] != x) // f the number is not equal to its frequency we return false\r\n                return false;\r\n        }\r\n        return true;\r\n    }\r\n};",
    "python": "from collections import Counter\r\n\r\nclass Solution:\r\n    def digitCount(self, num: str) -> bool:\r\n        d = Counter(num)\r\n        for i in range(len(num)):\r\n            if int(num[i])!=d.get(str(i), 0):\r\n                return False\r\n        return True",
    "java": "class Solution {\r\n    public boolean digitCount(String num) {\r\n        int[] freqArr = new int[10];  // n = 10 given in constraints;\r\n        \r\n        \r\n        for(char ch : num.toCharArray()){\r\n            freqArr[ch-'0']++;\r\n        }\r\n        \r\n        for(int i=0;i<num.length();i++){\r\n            int freq = num.charAt(i)-'0';  //freq of each indexValue;\r\n            freqArr[i] = freqArr[i] - freq; \r\n        }\r\n        for(int i=0;i<10;i++){\r\n            if(freqArr[i]!=0){\r\n                return false;\r\n            }\r\n        }\r\n        return true;\r\n    }\r\n}",
    "javascript": "var digitCount = function(num) {    \r\n    const res = [...num].filter((element, index) => {\r\n        const reg = new RegExp(index, \"g\");\r\n        const count = (num.match(reg) || []).length;\r\n        \r\n        return Number(element) === count\r\n    })\r\n    \r\n    return res.length === num.length    \r\n};"
  }
}
