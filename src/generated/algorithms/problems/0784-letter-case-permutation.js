export default {
  "id": 784,
  "name": "Letter Case Permutation",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/letter-case-permutation",
  "relativeDir": "L/Letter Case Permutation",
  "slug": "0784-letter-case-permutation",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 18,
    "python": 14,
    "javascript": 22
  },
  "languages": {
    "cpp": "class Solution {\r\n    vector<string>v;\r\npublic:\r\n    void solve(string s,int i){\r\n        while(i<s.size() && isdigit(s[i])) i++;\r\n        if(i==s.size()){\r\n            v.push_back(s);\r\n            return;\r\n        }\r\n        solve(s,i+1);\r\n        s[i]=(isupper(s[i]))?s[i]|' ':s[i]&'_';             //using bit manipulation to change into upper or lower case\r\n        solve(s,i+1);\r\n    }\r\n    vector<string> letterCasePermutation(string s) {\r\n        solve(s,0);\r\n        return v;\r\n    }\r\n};",
    "python": "class Solution(object):\r\n    def letterCasePermutation(self, s):\r\n        \r\n        if s==\"\":\r\n            return [\"\"]\r\n        t=s[0].lower()\r\n        li=[]\r\n        res=self.letterCasePermutation(s[1:])\r\n        for i in res:\r\n            li.append(t+i)\r\n        if t not in \"1234567890\":\r\n            for i in res:\r\n                li.append(t.upper()+i)\r\n        return li",
    "javascript": "// Runtime: 99 ms (Top 77.76%) | Memory: 45.1 MB (Top 64.02%)\r\nconst sliceRemaining = (s) => s.slice(1, s.length);\r\n\r\nvar letterCasePermutation = function(s) {\r\n    let output = [];\r\n\r\n    const backtracking = (current, remaining) => {\r\n        if (!remaining.length) return output.push(current);\r\n\r\n        if (/^[0-9]+$/i.test(remaining[0])) {\r\n            current += remaining[0];\r\n            backtracking(current, sliceRemaining(remaining));\r\n        } else {\r\n            backtracking(current + remaining[0].toLowerCase(), sliceRemaining(remaining));\r\n\r\n            backtracking(current + remaining[0].toUpperCase(), sliceRemaining(remaining));\r\n        }\r\n    }\r\n    backtracking('', s);\r\n\r\n    return output;\r\n};"
  }
}
