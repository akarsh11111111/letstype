export default {
  "id": 2206,
  "name": "Divide Array Into Equal Pairs",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/divide-array-into-equal-pairs",
  "relativeDir": "D/Divide Array Into Equal Pairs",
  "slug": "2206-divide-array-into-equal-pairs",
  "availableLanguages": [
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "java",
  "lineCounts": {
    "java": 13,
    "python": 7,
    "javascript": 9
  },
  "languages": {
    "python": "# Runtime: 213 ms (Top 19.18%) | Memory: 14.1 MB (Top 63.60%)\r\nclass Solution:\r\n\r\n    def divideArray(self, nums: List[int]) -> bool:\r\n        lena = len(nums)\r\n        count = sum(num//2 for num in Counter(nums).values())\r\n        return (lena/2 == count)",
    "java": "// Runtime: 8 ms (Top 41.3%) | Memory: 44.12 MB (Top 6.5%)\r\n\r\nclass Solution {\r\n    public boolean divideArray(int[] arr) {\r\n        HashMap<Integer, Integer> map = new HashMap<>();\r\n\r\n        for (int i : arr) map.put(i, map.getOrDefault(i, 0) + 1);\r\n        for (int i : map.keySet()) {\r\n            if (map.get(i) % 2 != 0) return false;\r\n        }\r\n        return true;\r\n    }\r\n}",
    "javascript": "// Runtime: 54 ms (Top 87.13%) | Memory: 43.00 MB (Top 98.35%)\r\n\r\n/**\r\n * @param {number[]} nums\r\n * @return {boolean}\r\n */\r\nvar divideArray = function(nums) {\r\n  return !nums.reduce((acc, cur) => (acc[cur]++, acc), new Uint16Array(501)).some(n => n % 2);\r\n};"
  }
}
