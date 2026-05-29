export default {
  "id": 2194,
  "name": "Cells in a Range on an Excel Sheet",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet",
  "relativeDir": "C/Cells in a Range on an Excel Sheet",
  "slug": "2194-cells-in-a-range-on-an-excel-sheet",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 21,
    "java": 15,
    "python": 14,
    "javascript": 11
  },
  "languages": {
    "cpp": "// Runtime: 3 ms (Top 82.44%) | Memory: 7.8 MB (Top 19.11%)\r\nclass Solution {\r\npublic:\r\n    vector<string> cellsInRange(string s) {\r\n\r\n        vector<string>ans;\r\n\r\n        for(char ch=s[0];ch<=s[3];ch++)\r\n        {\r\n            for(int i=s[1]-'0';i<=s[4]-'0';i++)\r\n            {\r\n                string res=\"\";\r\n                res+=ch;\r\n                res+=to_string(i);\r\n                ans.push_back(res);\r\n\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 52 ms (Top 33.3%) | Memory: 16.43 MB (Top 7.2%)\r\n\r\nclass Solution:\r\n    def cellsInRange(self, s: str) -> List[str]:\r\n        start, end = s.split(':')\r\n        start_letter, start_num = start[0], int(start[-1])\r\n        end_letter, end_num = end[0], int(end[1])\r\n        alphabet = list('ABCDEFGHIJKLMNOPQRSTUVWXYZ')\r\n        alphabet_slice = \\\r\n            alphabet[alphabet.index(start_letter):alphabet.index(end_letter) + 1]\r\n        res = list()\r\n        for el in alphabet_slice:\r\n            res += [el + str(num) for num in range(start_num, end_num + 1)]\r\n        return res",
    "java": "class Solution {\r\n    public List<String> cellsInRange(String s) {\r\n        char sc = s.charAt(0), ec = s.charAt(3);\r\n        char sr = s.charAt(1), er = s.charAt(4);\r\n        List<String> res = new ArrayList<>();\r\n        \r\n        for (char i = sc; i <= ec; ++i){\r\n            for (char j = sr; j <= er; ++j){\r\n                res.add(new String(new char[]{i, j}));\r\n            }\r\n        }\r\n        \r\n        return res;\r\n    }\r\n}",
    "javascript": "const toCharCode = (char) => char.charCodeAt()\r\n\r\nvar cellsInRange = function(s) {\r\n    const result = []\r\n    for(let i = toCharCode(s[0]) ; i <= toCharCode(s[3]) ; i++){\r\n        for(let j = s[1] ; j <= s[4] ; j++){\r\n            result.push(String.fromCharCode(i) +j)\r\n        }\r\n    }\r\n    return result\r\n};"
  }
}
