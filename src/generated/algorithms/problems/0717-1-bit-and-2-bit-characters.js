export default {
  "id": 717,
  "name": "1-bit and 2-bit Characters",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/1-bit-and-2-bit-characters",
  "relativeDir": "0-9/1-bit and 2-bit Characters",
  "slug": "0717-1-bit-and-2-bit-characters",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 23,
    "java": 11,
    "python": 30,
    "javascript": 13
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool isOneBitCharacter(vector<int>& bits) \r\n    {\r\n        int n = bits.size();\r\n        if(n == 1)\r\n            return true;\r\n       \r\n        int i = 0;\r\n        while(i <= n - 2)\r\n        {\r\n            if(bits[i] == 0)\r\n                i++;\r\n            else \r\n                i = i + 2;\r\n        }\r\n        if(i <= n-1)\r\n            return true;\r\n        else \r\n            return false;\r\n        \r\n    }\r\n};",
    "python": "# Dev: Chumicat\r\n# Date: 2019/11/30\r\n# Submission: https://leetcode.com/submissions/detail/282638543/\r\n# (Time, Space) Complexity : O(n), O(1)\r\n\r\nclass Solution:\r\n    def isOneBitCharacter(self, bits: List[int]) -> bool:\r\n        \"\"\"\r\n        :type bits: List[int]\r\n        :rtype: bool\r\n        \"\"\"\r\n        # Important Rules:\r\n        # 1. If bit n is 0, bit n+1 must be a new char\r\n        # 2. If bits end with 1, last bit must be a two bit char\r\n        #    However, this case had been rejected by question\r\n        # 3. If 1s in row and end with 0, \r\n        #    we can use count or 1s to check last char\r\n        #    If count is even, last char is \"0\"\r\n        #    If count is odd,  last char is \"10\"\r\n        # Strategy:\r\n        # 1. We don't care last element, since it must be 0.\r\n        # 2. We check from reversed, and count 1s in a row\r\n        # 3. Once 0 occur or list end, We stop counting\r\n        # 4. We use count to determin result\r\n        # 5. Since we will mod count by 2, we simplify it to bool\r\n        ret = True\r\n        for bit in bits[-2::-1]:\r\n            if bit: ret = not ret\r\n            else: break\r\n        return ret",
    "java": "class Solution {\r\n    public boolean isOneBitCharacter(int[] bits) {\r\n        int ones = 0;\r\n        //Starting from one but last, as last one is always 0.\r\n        for (int i = bits.length - 2; i >= 0 && bits[i] != 0 ; i--) { \r\n            ones++;\r\n        }\r\n        if (ones % 2 > 0) return false; \r\n        return true;\r\n    }\r\n}",
    "javascript": "// Runtime: 101 ms (Top 27.55%) | Memory: 42.2 MB (Top 67.35%)\r\n/**\r\n * @param {number[]} bits\r\n * @return {boolean}\r\n */\r\nvar isOneBitCharacter = function(bits) {\r\n  let i = 0;\r\n  while (i < bits.length - 1) {\r\n    if (bits[i] === 1) i++;\r\n    i++;\r\n  }\r\n  return bits[i] === 0;\r\n};"
  }
}
