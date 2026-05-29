export default {
  "id": 2363,
  "name": "Merge Similar Items",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/merge-similar-items",
  "relativeDir": "M/Merge Similar Items",
  "slug": "2363-merge-similar-items",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 15,
    "python": 19,
    "javascript": 15
  },
  "languages": {
    "cpp": "// Runtime: 72 ms (Top 16.98%) | Memory: 17.6 MB (Top 40.12%)\r\nclass Solution {\r\npublic:\r\n    vector<vector<int>> mergeSimilarItems(vector<vector<int>>& items1, vector<vector<int>>& items2) {\r\n        map<int, int> m;\r\n\r\n        for(auto v : items1) m[v[0]] += v[1];\r\n        for(auto v : items2) m[v[0]] += v[1];\r\n\r\n        vector<vector<int>> ans;\r\n        for(auto i : m) ans.push_back({i.first, i.second});\r\n\r\n        return ans;\r\n    }\r\n};",
    "python": "// Runtime: 118 ms (Top 72.74%) | Memory: 18.10 MB (Top 7.4%)\r\n\r\nclass Solution:\r\n\tdef mergeSimilarItems(self, items1: List[List[int]], items2: List[List[int]]) -> List[List[int]]:\r\n\r\n\t\tmerge_item = items1 + items2\r\n\r\n\t\td = defaultdict(int)\r\n\r\n\t\tfor i in merge_item:\r\n\t\t\tvalue,weight = i\r\n\t\t\td[value] = d[value] + weight\r\n\r\n\t\tresult = []\r\n\r\n\t\tfor j in sorted(d):\r\n\t\t\tresult.append([j,d[j]])\r\n\r\n\t\treturn result",
    "javascript": "// Runtime: 98 ms (Top 95.92%) | Memory: 49.7 MB (Top 53.22%)\r\n/**\r\n * @param {number[][]} items1\r\n * @param {number[][]} items2\r\n * @return {number[][]}\r\n */\r\nvar mergeSimilarItems = function(items1, items2) {\r\n    let map = new Map();\r\n    items1.reduce((map,curr)=>map.set(curr[0],map.get(curr[0])+curr[1]||curr[1]),map);\r\n    items2.reduce((map,curr)=>map.set(curr[0],map.get(curr[0])+curr[1]||curr[1]),map);\r\n\r\n    return [...map].sort((a,b)=>{\r\n        return a[0] - b[0];\r\n    })\r\n};"
  }
}
