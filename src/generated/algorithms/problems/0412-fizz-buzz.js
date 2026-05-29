export default {
  "id": 412,
  "name": "Fizz Buzz",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/fizz-buzz",
  "relativeDir": "F/Fizz Buzz",
  "slug": "0412-fizz-buzz",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 17,
    "java": 22,
    "python": 13,
    "javascript": 19
  },
  "languages": {
    "cpp": "// Runtime: 8 ms (Top 29.27%) | Memory: 8 MB (Top 33.77%)\r\nclass Solution {\r\npublic:\r\n    vector<string> fizzBuzz(int n) {\r\n        vector<string> ans;\r\n        string hehe;\r\n        for (int i = 1; i <= n; i++) {\r\n            if (i % 3 == 0 and i % 5 == 0) hehe += \"FizzBuzz\";\r\n            else if (i % 3 == 0) hehe += \"Fizz\";\r\n            else if (i % 5 == 0) hehe += \"Buzz\";\r\n            else hehe = to_string(i);\r\n            ans.push_back(hehe);\r\n            hehe = \"\";\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def fizzBuzz(self, n: int) -> List[str]:\r\n        result = []\r\n        for i in range(1, n+1):\r\n            if i % 3 == 0 and i % 5 == 0:\r\n                result.append('FizzBuzz')\r\n            elif i % 3 == 0:\r\n                result.append('Fizz')\r\n            elif i % 5 == 0:\r\n                result.append('Buzz')\r\n            else:\r\n                result.append(str(i))\r\n        return result",
    "java": "// Runtime: 1 ms (Top 99.61%) | Memory: 45.20 MB (Top 33.59%)\r\n\r\nclass Solution {\r\n    public List<String> fizzBuzz(int n) {\r\n        List<String> ans = new ArrayList<>();\r\n        for (int i = 1; i <= n; i++) {\r\n            if (i % 15 == 0) {\r\n                ans.add(\"FizzBuzz\");\r\n            } else if (i % 3 == 0) {\r\n                ans.add(\"Fizz\");\r\n            } else if (i % 5 == 0) {\r\n                ans.add(\"Buzz\");\r\n            } else {\r\n                ans.add(String.valueOf(i));\r\n            }\r\n        }\r\n                         \r\n        return ans;                 \r\n    }\r\n}\r\n\r\n// TC: O(n), SC: O(n)",
    "javascript": "\t/**\r\n * @param {number} n\r\n * @return {string[]}\r\n */\r\nvar fizzBuzz = function(n) {\r\n\t let arr = []\r\n\tfor (let i = 1; i <= n; i++){\r\n\t\tif(i % 3 == 0 && i % 5 == 0){\r\n\t\t\tarr[i-1] = \"FizzBuzz\"\r\n\t\t}else if(i % 3 == 0 && i % 5 != 0){\r\n\t\t\tarr[i-1] = \"Fizz\"\r\n\t\t}else if(i % 3 != 0 && i % 5 == 0){\r\n\t\t\tarr[i-1] = \"Buzz\"\r\n\t\t}else{\r\n\t\t\tarr[i-1] = String(i)\r\n\t\t}\r\n\t}\r\n\treturn arr  \r\n};"
  }
}
