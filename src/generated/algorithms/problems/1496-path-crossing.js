export default {
  "id": 1496,
  "name": "Path Crossing",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/path-crossing",
  "relativeDir": "P/Path Crossing",
  "slug": "1496-path-crossing",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 39,
    "java": 19,
    "python": 20,
    "javascript": 20
  },
  "languages": {
    "cpp": "// Runtime: 3 ms (Top 74.64%) | Memory: 6.9 MB (Top 45.17%)\r\nclass Solution {\r\npublic:\r\n    bool isPathCrossing(string path) {\r\n\r\n        set<pair<int, int>>st;\r\n\r\n        int x=0,y=0;\r\n\r\n        st.insert({0, 0});\r\n\r\n        for(int i=0;i<path.length();i++){\r\n\r\n            if(path[i]=='N'){\r\n                x++;\r\n            }\r\n\r\n            else if(path[i]=='S'){\r\n                x--;\r\n            }\r\n\r\n            else if(path[i]=='E'){\r\n                y++;\r\n            }\r\n\r\n            else{\r\n                y--;\r\n            }\r\n\r\n            //if pair find at any point, return true\r\n            if(st.find({x,y}) != st.end()){\r\n                return 1;\r\n            }\r\n            //insert the pair\r\n            st.insert({x, y});\r\n        }\r\n        return 0;\r\n    }\r\n};",
    "python": "# Runtime: 55 ms (Top 32.81%) | Memory: 14.1 MB (Top 28.49%)\r\nclass Solution:\r\n    def isPathCrossing(self, path: str) -> bool:\r\n        c = set()\r\n        x,y = 0,0\r\n        c.add((x,y))\r\n        for i in path:\r\n            if i == 'N':\r\n                y+=1\r\n            elif i == 'E':\r\n                x+=1\r\n            elif i == 'W':\r\n                x-=1\r\n            else:\r\n                y-=1\r\n            if (x,y) in c:\r\n                return True\r\n            else:\r\n                c.add((x,y))\r\n        return False",
    "java": "// Path crossing\r\n// Leetcode\r\n\r\nclass Solution {\r\n    public boolean isPathCrossing(String path) {\r\n        Set<String> visited = new HashSet<>();\r\n        int x = 0, y = 0;\r\n        visited.add(x + \",\" + y);\r\n        for (char c : path.toCharArray()) {\r\n            if (c == 'N') y++;\r\n            else if (c == 'S') y--;\r\n            else if (c == 'E') x++;\r\n            else x--;\r\n            if (visited.contains(x + \",\" + y)) return true;\r\n            visited.add(x + \",\" + y);\r\n        }\r\n        return false;       \r\n    }\r\n}",
    "javascript": "var isPathCrossing = function(path) {\r\n    let set = new Set();\r\n    let curr = [0, 0]\r\n    \r\n    let start = `${curr[0]}, ${curr[1]}`\r\n    set.add(start)\r\n    \r\n    for (let el of path) {\r\n        if (el === 'N') curr[1]++;\r\n        else if (el === 'S') curr[1]--;\r\n        else if (el === 'E') curr[0]++;\r\n        else curr[0]--;\r\n        \r\n        let key = `${curr[0]}, ${curr[1]}`\r\n        if (set.has(key)) return true;\r\n        set.add(key)\r\n    }\r\n    \r\n    return false;\r\n};"
  }
}
