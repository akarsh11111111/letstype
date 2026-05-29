export default {
  "id": 1436,
  "name": "Destination City",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/destination-city",
  "relativeDir": "D/Destination City",
  "slug": "1436-destination-city",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 16,
    "java": 14,
    "python": 10,
    "javascript": 15
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    string destCity(vector<vector<string>>& paths) {\r\n        string ans;\r\n        unordered_map<string, int> m;\r\n        for(int i=0; i<paths.size(); i++){\r\n            m[paths[i][0]]++;\r\n            m[paths[i][1]]--;\r\n        }\r\n        for(auto city : m){\r\n            if(city.second == -1) ans = city.first;\r\n        }\r\n\r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 101 ms (Top 25.06%) | Memory: 13.8 MB (Top 81.64%)\r\nfrom collections import defaultdict\r\nclass Solution:\r\n    def destCity(self, paths: List[List[str]]) -> str:\r\n        deg = defaultdict(int)\r\n        for v, w in paths:\r\n            deg[v] += 1\r\n            deg[w]\r\n        for v in deg:\r\n            if not deg[v]: return v",
    "java": "// Runtime: 4 ms (Top 58.98%) | Memory: 44 MB (Top 40.73%)\r\nclass Solution {\r\n    public String destCity(List<List<String>> paths) {\r\n        HashSet<String> set1 = new HashSet<>();\r\n\r\n        for (int i = 0; i < paths.size(); ++i) {\r\n            set1.add(paths.get(i).get(0));\r\n        }\r\n        for (int i = 0; i < paths.size(); ++i) {\r\n            if (!set1.contains(paths.get(i).get(1))) return paths.get(i).get(1);\r\n        }\r\n        return \"placeholder\";\r\n    }\r\n}",
    "javascript": " * @param {string[][]} paths\r\n * @return {string}\r\n */\r\nvar destCity = function(paths) {\r\n    \r\n    \r\n    let map={}\r\n    \r\n    for(let city of paths){\r\n        map[city[0]]=map[city[0]]?map[city[0]]+1:1\r\n    }\r\n    for(let city of paths){\r\n        if(!map[city[1]]) return city[1]\r\n    }\r\n};```"
  }
}
