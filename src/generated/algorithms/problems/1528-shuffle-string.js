export default {
  "id": 1528,
  "name": "Shuffle String",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/shuffle-string",
  "relativeDir": "S/Shuffle String",
  "slug": "1528-shuffle-string",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 14,
    "java": 10,
    "python": 14,
    "javascript": 11
  },
  "languages": {
    "cpp": "// Runtime: 15 ms (Top 49.52%) | Memory: 15.2 MB (Top 43.21%)\r\nclass Solution {\r\npublic:\r\n    string restoreString(string s, vector<int>& indices) {\r\n\r\n        string ans = s;\r\n\r\n        for(int i=0 ; i<s.size() ; i++){\r\n            ans[indices[i]] = s[i];\r\n        }\r\n\r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 81 ms (Top 68.03%) | Memory: 13.9 MB (Top 63.45%)\r\nclass Solution:\r\n    def restoreString(self, s: str, indices: List[int]) -> str:\r\n        dec = {}\r\n        c = 0\r\n        res=''\r\n        for i in indices:\r\n            dec[i] = s[c]\r\n            c += 1\r\n        # dec = {\"4\":\"c\",\"5\":\"o\",\"6\":\"d\",\"7\":\"e\",\"0\":\"l\",\"2\":\"e\",\"1\":\"e\",\"3\":\"t\"}\r\n        for x in range(len(indices)):\r\n            res += dec[x]\r\n            # x in range 0, 1, 2,....... len *indices or s*\r\n        return res",
    "java": "// Runtime: 1 ms (Top 100.00%) | Memory: 42.6 MB (Top 92.75%)\r\nclass Solution {\r\n    public String restoreString(String s, int[] indices) {\r\n        char[] ch = new char[s.length()];\r\n        for(int i = 0 ; i< s.length() ; i ++){\r\n            ch[indices[i]]=s.charAt(i);\r\n        }\r\n        return new String (ch);\r\n    }\r\n}",
    "javascript": "var restoreString = function(s, indices) {\r\n    const result = []\r\n    \r\n    for(let i=0; i<s.length; i++) {\r\n        const letter = s[i]\r\n        const index = indices[i]\r\n        result[index] = letter\r\n    }\r\n    \r\n    return result.join('')\r\n};"
  }
}
