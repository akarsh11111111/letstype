export default {
  "id": 1402,
  "name": "Reducing Dishes",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/reducing-dishes",
  "relativeDir": "R/Reducing Dishes",
  "slug": "1402-reducing-dishes",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 20,
    "java": 23,
    "python": 12
  },
  "languages": {
    "cpp": "// Runtime: 10 ms (Top 77.23%) | Memory: 8.1 MB (Top 73.16%)\r\nclass Solution {\r\npublic:\r\n    int maxSatisfaction(vector<int>& satisfaction) {\r\n        sort(satisfaction.begin(), satisfaction.end(), greater <int> () );\r\n        if (satisfaction[0] <= 0) return 0;\r\n        int ans = 0;\r\n        int total = 0;\r\n        for (int i = 0; i < satisfaction.size(); i++) {\r\n            if (total + ans + satisfaction[i] > total) {\r\n                ans = ans + satisfaction[i];\r\n                total = total + ans;\r\n                continue;\r\n\r\n            }\r\n            return total;\r\n        }\r\n        return total;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def maxSatisfaction(self, satisfaction: List[int]) -> int:\r\n        satisfaction.sort(reverse=True)\r\n        maxSatisfaction = dishSum = 0\r\n\r\n        for dish in satisfaction:\r\n            dishSum += dish\r\n            if dishSum <= 0:\r\n                break\r\n            maxSatisfaction += dishSum\r\n        \r\n        return maxSatisfaction",
    "java": "// Runtime: 3 ms (Top 80.60%) | Memory: 41.7 MB (Top 87.57%)\r\nclass Solution {\r\n    public int maxSatisfaction(int[] satisfaction) {\r\n        Arrays.sort(satisfaction);\r\n        if(satisfaction[satisfaction.length-1] <= 0){\r\n            return 0;\r\n        }\r\n\r\n        int res = 0;\r\n        int beforeSum = 0;\r\n        for(int i = satisfaction.length-1; i>=0; i--){\r\n            int currNum = satisfaction[i];\r\n            beforeSum += currNum;\r\n            if(beforeSum >= 0){\r\n                res += beforeSum;\r\n            }else{\r\n                return res;\r\n            }\r\n        }\r\n\r\n        return res;\r\n    }\r\n}"
  }
}
