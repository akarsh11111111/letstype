export default {
  "id": 2124,
  "name": "Check if All A's Appears Before All B's",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/check-if-all-as-appears-before-all-bs",
  "relativeDir": "C/Check if All A's Appears Before All B's",
  "slug": "2124-check-if-all-a-s-appears-before-all-b-s",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 11,
    "java": 14,
    "python": 6,
    "javascript": 7
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n\tbool checkString(string s) {\r\n\t\tfor(int i = 1; i < s.size(); i++){\r\n\t\t\tif(s[i - 1] == 'b' && s[i] == 'a'){\r\n\t\t\t\treturn false;\r\n\t\t\t}\r\n\t\t}\r\n\t\treturn true;\r\n\t}\r\n};",
    "python": "class Solution:\r\n    def checkString(self, s: str) -> bool:\r\n        if \"ba\" in s:\r\n            return False\r\n        else:\r\n            return True",
    "java": "class Solution {\r\n    public boolean checkString(String s) {\r\n        for(int i = 0; i < s.length(); i++){\r\n            if(s.charAt(i) == 'b'){\r\n                for(int j = i+1; j < s.length(); j++){\r\n                    if(s.charAt(j) == 'a'){\r\n                        return false;\r\n                    }\r\n                }\r\n            }\r\n        }\r\n        return true;\r\n    }\r\n}",
    "javascript": "var checkString = function(s) {\r\n    \r\n    // a cannot come after b\r\n    let violation = \"ba\";\r\n    \r\n    return s.indexOf(violation, 0) == -1;\r\n};"
  }
}
