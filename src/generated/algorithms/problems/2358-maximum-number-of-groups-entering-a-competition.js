export default {
  "id": 2358,
  "name": "Maximum Number of Groups Entering a Competition",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-number-of-groups-entering-a-competition",
  "relativeDir": "M/Maximum Number of Groups Entering a Competition",
  "slug": "2358-maximum-number-of-groups-entering-a-competition",
  "availableLanguages": [
    "java",
    "javascript"
  ],
  "defaultLanguage": "java",
  "lineCounts": {
    "java": 9,
    "javascript": 7
  },
  "languages": {
    "java": "// Runtime: 0 ms (Top 100.0%) | Memory: 58.70 MB (Top 6.47%)\r\n\r\nclass Solution {\r\n    public int maximumGroups(int[] grades) {\r\n        int len = grades.length;\r\n        int groups = (int)(-1 + Math.sqrt(1 + 8*len))/2;\r\n        return groups;\r\n    }\r\n}",
    "javascript": "// Runtime: 65 ms (Top 58.3%) | Memory: 50.03 MB (Top 41.6%)\r\n\r\nvar maximumGroups = function(grades) {\r\n    var count=1, length=grades.length;\r\n    while(length-count > count) length-=count++;\r\n    return count;\r\n};"
  }
}
