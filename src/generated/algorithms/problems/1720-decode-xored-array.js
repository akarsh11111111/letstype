export default {
  "id": 1720,
  "name": "Decode XORed Array",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/decode-xored-array",
  "relativeDir": "D/Decode XORed Array",
  "slug": "1720-decode-xored-array",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 10,
    "java": 11,
    "python": 3,
    "javascript": 3
  },
  "languages": {
    "cpp": "// Runtime: 56 ms (Top 34.77%) | Memory: 26 MB (Top 35.19%)\r\nclass Solution {\r\npublic:\r\n    vector<int> decode(vector<int>& encoded, int first) {\r\n        vector<int> ans{first};\r\n        for(int x: encoded)\r\n            ans.push_back(first^=x);\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def decode(self, encoded: List[int], first: int) -> List[int]:\r\n        return [first] + [first:= first ^ x for x in encoded]",
    "java": "// Runtime: 2 ms (Top 83.89%) | Memory: 55.1 MB (Top 84.00%)\r\nclass Solution {\r\n    public int[] decode(int[] encoded, int first) {\r\n        int[] ans = new int[encoded.length + 1];\r\n        ans[0] = first;\r\n        for (int i = 0; i < encoded.length; i++) {\r\n            ans[i + 1] = ans[i] ^ encoded[i];\r\n        }\r\n        return ans;\r\n    }\r\n}",
    "javascript": "var decode = function(encoded, first) {\r\n    return [first].concat(encoded).map((x,i,a)=>{return i===0? x : a[i] ^= a[i-1]});\r\n};"
  }
}
