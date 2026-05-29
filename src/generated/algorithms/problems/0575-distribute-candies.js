export default {
  "id": 575,
  "name": "Distribute Candies",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/distribute-candies",
  "relativeDir": "D/Distribute Candies",
  "slug": "0575-distribute-candies",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 11,
    "java": 7,
    "python": 4,
    "javascript": 12
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int distributeCandies(vector<int>& candyType) \r\n    {\r\n        unordered_set<int> s(candyType.begin(),candyType.end());\r\n        return min(candyType.size()/2,s.size());\r\n            \r\n        \r\n    }\r\n};\r\n//if you like the solution plz upvote.",
    "python": "# Runtime: 1728 ms (Top 12.88%) | Memory: 16.4 MB (Top 8.29%)\r\nclass Solution:\r\n    def distributeCandies(self, candyType: List[int]) -> int:\r\n        return min(len(set(candyType)), (len(candyType)//2))",
    "java": "class Solution {\r\n    public int distributeCandies(int[] candyType) {\r\n        Set<Integer> set = new HashSet<>();\r\n        for (int type : candyType) set.add(type);\r\n        return Math.min(set.size(), candyType.length / 2);\r\n    }\r\n}",
    "javascript": "// Runtime: 222 ms (Top 37.27%) | Memory: 56.5 MB (Top 32.38%)\r\n/**\r\n * @param {number[]} candyType\r\n * @return {number}\r\n */\r\nvar distributeCandies = function(candyType) {\r\n\r\n    const set = new Set();\r\n    candyType.map(e => set.add(e));\r\n    return candyType.length/2 > set.size ? set.size : candyType.length/2\r\n\r\n};"
  }
}
