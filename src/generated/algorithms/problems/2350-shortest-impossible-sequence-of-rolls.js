export default {
  "id": 2350,
  "name": "Shortest Impossible Sequence of Rolls",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/shortest-impossible-sequence-of-rolls",
  "relativeDir": "S/Shortest Impossible Sequence of Rolls",
  "slug": "2350-shortest-impossible-sequence-of-rolls",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 18,
    "java": 16,
    "python": 14,
    "javascript": 17
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int shortestSequence(vector<int>& rolls, int k) {\r\n        int len = 1;\r\n        set<int> data ;\r\n        \r\n        for (int i = 0; i < rolls.size(); i++) {\r\n            data.insert(rolls[i]);\r\n            \r\n            if (data.size() == k) {\r\n                len++;\r\n                data = set<int>();\r\n            }\r\n        }\r\n        \r\n        return len;\r\n    }\r\n};",
    "python": "# Runtime: 966 ms (Top 94.20%) | Memory: 28.2 MB (Top 71.33%)\r\nclass Solution:\r\n    def shortestSequence(self, rolls: List[int], k: int) -> int:\r\n        ans = 1\r\n        data = set()\r\n\r\n        for roll in rolls:\r\n            data.add(roll)\r\n\r\n            if len(data) == k:\r\n                ans += 1\r\n                data.clear()\r\n\r\n        return ans",
    "java": "class Solution {\r\n    public int shortestSequence(int[] rolls, int k) {\r\n        int len = 0;\r\n        Set<Integer> set = new HashSet<>();\r\n        for(int i:rolls)\r\n        {\r\n            set.add(i);\r\n            if(set.size()==k)\r\n            {\r\n                set = new HashSet<>();\r\n                len++;\r\n            }\r\n        }\r\n        return len+1;\r\n    }\r\n}",
    "javascript": "// Runtime: 217 ms (Top 10.77%) | Memory: 58.9 MB (Top 49.23%)\r\nvar shortestSequence = function(rolls, k)\r\n{\r\n    let ans=1;\r\n    let sett=new Set();\r\n\r\n    for(let i of rolls)\r\n        {\r\n            sett.add(i);\r\n            if(sett.size===k)\r\n                {\r\n                    ans++;\r\n                    sett=new Set();\r\n                }\r\n        }\r\n    return ans;\r\n};"
  }
}
