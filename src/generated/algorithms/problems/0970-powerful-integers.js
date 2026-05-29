export default {
  "id": 970,
  "name": "Powerful Integers",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/powerful-integers",
  "relativeDir": "P/Powerful Integers",
  "slug": "0970-powerful-integers",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 15,
    "java": 14,
    "python": 15,
    "javascript": 12
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<int> powerfulIntegers(int x, int y, int bound) {\r\n        unordered_set<int> s;\r\n       \r\n        for(int i=0; pow(x, i)<=bound; i++) {\r\n            for(int j=0; pow(x, i) + pow(y, j)<=bound; j++) {\r\n                s.insert(pow(x, i) + pow(y, j));\r\n                if(y == 1) break;\r\n            }\r\n            if(x == 1) break;\r\n        }\r\n        return vector<int> (s.begin(), s.end());\r\n    }\r\n};",
    "python": "from math import log\r\nclass Solution:\r\n    def powerfulIntegers(self, x: int, y: int, bound: int) -> List[int]:\r\n        if bound == 0:\r\n            return []\r\n        maxi = int(log(bound,max(x,2))) +1\r\n        maxj = int(log(bound,max(y,2))) +1\r\n        L = set()\r\n        for i in range(maxi):\r\n            for j in range(maxj):\r\n                if (t:=x**i +y**j) <= bound:\r\n                    L.add(t)\r\n                else:\r\n                    break\r\n        return list(L)",
    "java": "// Runtime: 3 ms (Top 39.15%) | Memory: 41.9 MB (Top 60.38%)\r\nclass Solution {\r\n    public List<Integer> powerfulIntegers(int x, int y, int bound) {\r\n        HashSet<Integer> set = new HashSet<>();\r\n        for(int i = 1; i<bound; i*=x){\r\n            for(int j = 1; i+j <= bound; j*=y){\r\n                set.add(i+j);\r\n                if(y==1) break;\r\n            }\r\n            if(x==1) break;\r\n        }\r\n        return new ArrayList<>(set);\r\n    }\r\n}",
    "javascript": "// Runtime: 114 ms (Top 36.00%) | Memory: 41.5 MB (Top 100.00%)\r\nvar powerfulIntegers = function(x, y, bound) {\r\n    let ans = new Set()\r\n    for (let xi = 1; xi < bound; xi *= x) {\r\n        for (let yj = 1; xi + yj <= bound; yj *= y) {\r\n            ans.add(xi + yj)\r\n            if (y === 1) break\r\n        }\r\n        if (x === 1) break\r\n    }\r\n    return Array.from(ans)\r\n}"
  }
}
