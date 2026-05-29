export default {
  "id": 942,
  "name": "DI String Match",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/di-string-match",
  "relativeDir": "D/DI String Match",
  "slug": "0942-di-string-match",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 13,
    "java": 17,
    "python": 14,
    "javascript": 10
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<int> diStringMatch(string s) {\r\n        int p=0, j=s.size();\r\n        vector<int>v;\r\n        for(int i=0; i<=s.size(); i++)\r\n        {\r\n            if(s[i]=='I')v.push_back(p++);\r\n            else v.push_back(j--);\r\n        }\r\n        return v;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def diStringMatch(self, s: str) -> List[int]:\r\n        result = []\r\n        min_ = 0\r\n        max_ = len(s)\r\n        for x in s:\r\n            if x==\"I\":\r\n                result.append(min_)\r\n                min_ += 1\r\n            elif x==\"D\":\r\n                result.append(max_)\r\n                max_ -= 1\r\n        result.append(min_)\r\n        return result",
    "java": "// Runtime: 10 ms (Top 7.32%) | Memory: 48.4 MB (Top 38.52%)\r\nclass Solution {\r\n    public int[] diStringMatch(String s) {\r\n        int low = 0;\r\n        int high = s.length();\r\n        int[] ans = new int[s.length() + 1];\r\n        for(int i = 0; i < s.length(); i++){\r\n            if(s.charAt(i) == 'I'){\r\n                ans[i] = low++;\r\n            } else{\r\n                ans[i] = high--;\r\n            }\r\n        }\r\n        ans[s.length()] = high;\r\n        return ans;\r\n    }\r\n}",
    "javascript": "var diStringMatch = function(s) {\r\n    let i = 0, d = s.length, arr = [];\r\n    \r\n    for(let j = 0; j <= s.length; j += 1) {\r\n        if(s[j] === 'I') arr.push(i++);\r\n        else arr.push(d--);\r\n    }\r\n    \r\n    return arr;\r\n};"
  }
}
