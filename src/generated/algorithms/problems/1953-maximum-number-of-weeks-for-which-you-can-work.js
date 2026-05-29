export default {
  "id": 1953,
  "name": "Maximum Number of Weeks for Which You Can Work",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-number-of-weeks-for-which-you-can-work",
  "relativeDir": "M/Maximum Number of Weeks for Which You Can Work",
  "slug": "1953-maximum-number-of-weeks-for-which-you-can-work",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 12,
    "java": 16,
    "python": 4,
    "javascript": 17
  },
  "languages": {
    "cpp": "// Runtime: 96 ms (Top 94.56%) | Memory: 75.80 MB (Top 59.86%)\r\n\r\nclass Solution {\r\npublic:\r\n    long long numberOfWeeks(vector<int>& milestones) {\r\n        long long unsigned int maxel = *max_element(milestones.begin(), milestones.end());\r\n        long long unsigned int sum = 0;\r\n        for (auto& m : milestones) sum += m;\r\n        if (sum - maxel >= maxel) return sum;\r\n        return (sum - maxel) * 2 + 1;\r\n    }\r\n};",
    "python": "# Runtime: 1032 ms (Top 59.60%) | Memory: 25.7 MB (Top 80.23%)\r\nclass Solution:\r\n    def numberOfWeeks(self, m: List[int]) -> int:\r\n        return min(sum(m), 2 * (sum(m) - max(m)) + 1)",
    "java": "// Runtime: 3 ms (Top 73.74%) | Memory: 55.50 MB (Top 96.97%)\r\n\r\nclass Solution {\r\n    public long numberOfWeeks(int[] milestones) {\r\n        long sum = 0;\r\n        int max = Integer.MIN_VALUE;\r\n        for(int milestone: milestones) {\r\n            sum += milestone;\r\n            max = Math.max(milestone, max);\r\n        }\r\n        if((sum - max) < max)\r\n            return ((sum - max) * 2) + 1;\r\n        else\r\n            return sum;\r\n    }\r\n}",
    "javascript": "// Runtime: 192 ms (Top 23.33%) | Memory: 55.3 MB (Top 40.00%)\r\n\r\nvar numberOfWeeks = function(milestones) {\r\n    let maxElement = 0,arraySum = 0;\r\n\r\n    for(let milestone of milestones){\r\n        arraySum += milestone;\r\n        maxElement = Math.max(maxElement,milestone);\r\n    }\r\n\r\n    let rest = arraySum - maxElement;\r\n    let difference = maxElement - rest;\r\n\r\n    if(difference <= 1) return arraySum;\r\n\r\n    return (arraySum - difference) + 1;\r\n};"
  }
}
