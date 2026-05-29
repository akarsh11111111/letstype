export default {
  "id": 2259,
  "name": "Remove Digit From Number to Maximize Result",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/remove-digit-from-number-to-maximize-result",
  "relativeDir": "R/Remove Digit From Number to Maximize Result",
  "slug": "2259-remove-digit-from-number-to-maximize-result",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 13,
    "java": 14,
    "python": 23,
    "javascript": 20
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    string removeDigit(string number, char digit) {\r\n        string res = \"\";\r\n        for(int i=0; i<number.size(); i++){\r\n            if(number[i] == digit){\r\n                string temp = number.substr(0, i) + number.substr(i+1);\r\n                res = max(res, temp);\r\n            }\r\n        }\r\n        return res;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def removeDigit(self, number: str, digit: str) -> str:\r\n        \r\n        # Initializing the last index as zero\r\n        last_index = 0\r\n        \r\n        #iterating each number to find the occurences, \\\r\n        # and to find if the number is greater than the next element \\ \r\n\r\n        for num in range(1, len(number)):\r\n            \r\n            # Handling [case 1] and [case 2]\r\n            if number[num-1] == digit:\r\n                if int(number[num]) > int(number[num-1]):\r\n                    return number[:num-1] + number[num:]\r\n                else:\r\n                    last_index = num - 1\r\n        \r\n        # If digit is the last number (last occurence) in the string [case 3]\r\n        if number[-1] == digit:\r\n            last_index = len(number) - 1\r\n\r\n        return number[:last_index] + number[last_index + 1:]",
    "java": "// Runtime: 4 ms (Top 37.58%) | Memory: 43 MB (Top 24.40%)\r\nclass Solution {\r\n    public String removeDigit(String number, char digit) {\r\n        List<String> digits = new ArrayList<>();\r\n        for (int i = 0; i < number.length(); i++) {\r\n            if (number.charAt(i) == digit) {\r\n                String stringWithoutDigit = number.substring(0, i) + number.substring(i + 1);\r\n                digits.add(stringWithoutDigit);\r\n            }\r\n        }\r\n        Collections.sort(digits);\r\n        return digits.get(digits.size() - 1);\r\n    }\r\n}",
    "javascript": "// Runtime: 115 ms (Top 13.51%) | Memory: 41.8 MB (Top 91.22%)\r\n/**\r\n * @param {string} number\r\n * @param {character} digit\r\n * @return {string}\r\n */\r\nvar removeDigit = function(number, digit) {\r\n\r\n    let str = [];\r\n    let flag = 0;\r\n    for (let i = 0; i < number.length; i++) {\r\n        if (number[i] == digit ) {\r\n            let temp = number.substring(0, i) + number.substring(i+1);\r\n            str.push(temp);\r\n        }\r\n    }\r\n\r\n    str.sort();\r\n    return str[str.length-1];\r\n};"
  }
}
