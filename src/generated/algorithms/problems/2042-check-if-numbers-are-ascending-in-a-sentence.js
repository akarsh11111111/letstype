export default {
  "id": 2042,
  "name": "Check if Numbers Are Ascending in a Sentence",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence",
  "relativeDir": "C/Check if Numbers Are Ascending in a Sentence",
  "slug": "2042-check-if-numbers-are-ascending-in-a-sentence",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 23,
    "java": 20,
    "python": 5,
    "javascript": 13
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool areNumbersAscending(string s) {\r\n        s.push_back(' '); // for last number calculation\r\n        int prev = -1;\r\n        string num;\r\n        \r\n        for(int i = 0 ; i < s.size() ; ++i)\r\n        {\r\n            char ch = s[i];\r\n            if(isdigit(ch))\r\n                num += ch;\r\n            else if(ch == ' ' and isdigit(s[i - 1]))\r\n            {\r\n                if(stoi(num) <= prev) // number is not strictly increasing\r\n                    return false;\r\n                prev = stoi(num);\r\n                num = \"\";\r\n            }\r\n        }\r\n        return true;\r\n    }\r\n};",
    "python": "# Runtime: 52 ms (Top 38.18%) | Memory: 13.8 MB (Top 55.89%)\r\nclass Solution:\r\n    def areNumbersAscending(self, s):\r\n        nums = re.findall(r'\\d+', s)\r\n        return nums == sorted(set(nums), key=int)",
    "java": "// Runtime: 7 ms (Top 29.63%) | Memory: 43.3 MB (Top 11.10%)\r\n// Space Complexity: O(1)\r\n// Time Complexity: O(n)\r\nclass Solution {\r\n    public boolean areNumbersAscending(String s) {\r\n        int prev = 0;\r\n\r\n        for(String token: s.split(\" \")) {\r\n            try {\r\n                int number = Integer.parseInt(token);\r\n                if(number <= prev)\r\n                    return false;\r\n                prev = number;\r\n            }\r\n            catch(Exception e) {}\r\n        }\r\n\r\n        return true;\r\n    }\r\n}",
    "javascript": "var areNumbersAscending = function(s) {\r\n    const numbers = [];\r\n    const arr = s.split(\" \");\r\n    for(let i of arr) {\r\n        if(isFinite(i)) {\r\n            if(numbers.length > 0 && numbers[numbers.length - 1] >= i) {\r\n                return false;\r\n            }\r\n            numbers.push(+i);\r\n        }\r\n    }\r\n    return true\r\n};"
  }
}
