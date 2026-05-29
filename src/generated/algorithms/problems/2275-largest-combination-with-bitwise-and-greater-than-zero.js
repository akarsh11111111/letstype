export default {
  "id": 2275,
  "name": "Largest Combination With Bitwise AND Greater Than Zero",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/largest-combination-with-bitwise-and-greater-than-zero",
  "relativeDir": "L/Largest Combination With Bitwise AND Greater Than Zero",
  "slug": "2275-largest-combination-with-bitwise-and-greater-than-zero",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 21,
    "java": 20,
    "python": 4,
    "javascript": 15
  },
  "languages": {
    "cpp": "// Runtime: 308 ms (Top 28.18%) | Memory: 57.4 MB (Top 84.43%)\r\nclass Solution {\r\npublic:\r\n    int largestCombination(vector<int>& candidates) {\r\n        vector<int> bits(32);\r\n        for(int i = 0; i < candidates.size(); i++){\r\n            int temp = 31;\r\n            while(candidates[i] > 0){\r\n                bits[temp] += candidates[i] % 2;\r\n                candidates[i] = candidates[i] / 2;\r\n                temp--;\r\n            }\r\n        }\r\n        int ans = 0;\r\n        for(int i = 0; i < 32; i++){\r\n            //cout<<bits[i]<<\" \";\r\n            ans = max(ans, bits[i]);\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 2282 ms (Top 70.42%) | Memory: 24.8 MB (Top 77.26%)\r\nclass Solution:\r\n    def largestCombination(self, candidates: List[int]) -> int:\r\n        return max(sum(n & (1 << i) > 0 for n in candidates) for i in range(0, 24))",
    "java": "// Runtime: 42 ms (Top 19.3%) | Memory: 56.45 MB (Top 7.1%)\r\n\r\nclass Solution {\r\n  public static int largestCombination(int[] candidates) {\r\n\t\tint arr[] = new int[32];\r\n\t\tfor (int i = 0; i < candidates.length; i++) {\r\n\t\t\tString temp = Integer.toBinaryString(candidates[i]);\r\n\t\t\tint n = temp.length();\r\n\t\t\tint index = 0;\r\n\t\t\twhile (n-- > 0) {\r\n\t\t\t\tarr[index++] += temp.charAt(n) - '0';\r\n\t\t\t}\r\n\t\t}\r\n\t\tint res = Integer.MIN_VALUE;\r\n\t\tfor (int i = 0; i < 32; i++) {\r\n\t\t\tres = Math.max(res, arr[i]);\r\n\t\t}\r\n\t\treturn res;\r\n\t}\r\n}",
    "javascript": "// Runtime: 174 ms (Top 64.29%) | Memory: 51.5 MB (Top 53.57%)\r\nvar largestCombination = function(candidates) {\r\n  const indexArr=Array(24).fill(0)\r\n\r\n  for(let candidate of candidates){\r\n      let index =0\r\n      while(candidate>0){\r\n          if((candidate&1)===1)indexArr[index]+=1\r\n          candidate>>>=1\r\n          index++\r\n      }\r\n  }\r\n\r\n  return Math.max(...indexArr)\r\n};"
  }
}
