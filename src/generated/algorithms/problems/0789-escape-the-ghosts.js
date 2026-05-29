export default {
  "id": 789,
  "name": "Escape The Ghosts",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/escape-the-ghosts",
  "relativeDir": "E/Escape The Ghosts",
  "slug": "0789-escape-the-ghosts",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 14,
    "java": 15,
    "python": 8,
    "javascript": 16
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    \r\n    bool escapeGhosts(vector<vector<int>>& ghosts, vector<int>& target) {\r\n        int minimumstepsreqbyplayer = abs(target[0]) + abs(target[1]);\r\n        int minimumstepsreqbyanyghost = INT_MAX;\r\n        \r\n        for(auto x: ghosts){\r\n            minimumstepsreqbyanyghost = min(minimumstepsreqbyanyghost, abs(x[0]-target[0]) + abs(x[1]-target[1]));\r\n        }\r\n        \r\n        return minimumstepsreqbyplayer<minimumstepsreqbyanyghost;\r\n    }\r\n};",
    "python": "// Runtime: 62 ms (Top 9.13%) | Memory: 17.50 MB (Top 9.13%)\r\n\r\nclass Solution:\r\n    def escapeGhosts(self, ghosts: List[List[int]], target: List[int]) -> bool:\r\n        \r\n        dist = lambda x : abs(x[0] - target[0]) + abs(x[1] - target[1])\r\n\r\n        return dist((0,0)) < min(dist(g) for g in ghosts)",
    "java": "// Runtime: 0 ms (Top 100.00%) | Memory: 41.8 MB (Top 88.81%)\r\n// Escape The Ghosts\r\n// Leetcode: https://leetcode.com/problems/escape-the-ghosts/\r\n\r\nclass Solution {\r\n    public boolean escapeGhosts(int[][] ghosts, int[] target) {\r\n        int dist = Math.abs(target[0]) + Math.abs(target[1]);\r\n        for (int[] ghost : ghosts) {\r\n            if (Math.abs(ghost[0] - target[0]) + Math.abs(ghost[1] - target[1]) <= dist) {\r\n                return false;\r\n            }\r\n        }\r\n        return true;\r\n    }\r\n}",
    "javascript": "// Runtime: 119 ms (Top 5.56%) | Memory: 42.6 MB (Top 69.44%)\r\nvar escapeGhosts = function(ghosts, target) {\r\n    const getDistance = (target, source = [0, 0]) => {\r\n        return (\r\n            Math.abs(target[0] - source[0])\r\n            +\r\n            Math.abs(target[1] - source[1])\r\n        );\r\n    }\r\n    const timeTakenByMe = getDistance(target);\r\n    let timeTakenByGhosts = Infinity;\r\n    for(let ghost of ghosts) {\r\n        timeTakenByGhosts = Math.min(timeTakenByGhosts, getDistance(target, ghost));\r\n    }\r\n    return timeTakenByGhosts > timeTakenByMe;\r\n};"
  }
}
