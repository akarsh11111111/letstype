export default {
  "id": 822,
  "name": "Card Flipping Game",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/card-flipping-game",
  "relativeDir": "C/Card Flipping Game",
  "slug": "0822-card-flipping-game",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 22,
    "python": 4,
    "javascript": 28
  },
  "languages": {
    "cpp": "// Runtime: 58 ms (Top 13.90%) | Memory: 21.4 MB (Top 22.99%)\r\nclass Solution {\r\npublic:\r\n    int flipgame(vector<int>& fronts, vector<int>& backs) {\r\n        int n= fronts.size();\r\n        map<int,int>mp;\r\n        set<int>s;\r\n        for(int i=0;i<n;i++){\r\n            if(fronts[i] == backs[i]){\r\n                mp[fronts[i]]++;\r\n            }\r\n            s.insert(fronts[i]);\r\n            s.insert(backs[i]);\r\n        }\r\n        for(auto i:s){\r\n            if(mp[i] >= 1) continue;\r\n            return i;\r\n        }\r\n        return 0;\r\n\r\n    }\r\n};",
    "python": "# Runtime: 7624 ms (Top 5.13%) | Memory: 14.1 MB (Top 95.38%)\r\nclass Solution:\r\n    def flipgame(self, fronts: List[int], backs: List[int]) -> int:\r\n        return min([v for v in fronts + backs if v not in set([i for i, j in zip(fronts, backs) if i == j])] or [0])",
    "javascript": "var flipgame = function(fronts, backs) {\r\n    const MAX = Number.MAX_SAFE_INTEGER;\r\n    const n = fronts.length;\r\n    const set = new Set();\r\n\r\n    let min = MAX;\r\n    \r\n    for (let i = 0; i < n; i++) {\r\n        const front = fronts[i];\r\n        const back = backs[i];\r\n        \r\n        if (front === back) {\r\n            set.add(front);\r\n        }\r\n    }\r\n    \r\n    for (let i = 0; i < n; i++) {\r\n        const front = fronts[i];\r\n        const back = backs[i];\r\n        \r\n        if (front === back) continue;\r\n        \r\n        if (!set.has(front)) min = Math.min(front, min);\r\n        if (!set.has(back)) min = Math.min(back, min);\r\n    }\r\n    \r\n    return min === MAX ? 0 : min;\r\n};"
  }
}
