export default {
  "id": 447,
  "name": "Number of Boomerangs",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/number-of-boomerangs",
  "relativeDir": "N/Number of Boomerangs",
  "slug": "0447-number-of-boomerangs",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 30,
    "java": 42,
    "python": 19,
    "javascript": 21
  },
  "languages": {
    "cpp": "// Runtime: 1329 ms (Top 16.64%) | Memory: 146.4 MB (Top 41.21%)\r\nclass Solution {\r\npublic:\r\n    int numberOfBoomerangs(vector<vector<int>>& points) {\r\n\r\n        int cnt = 0, n = points.size();\r\n        for(int i = 0; i < n; i++)\r\n        {\r\n            map<int, int> mp;\r\n            for(int j = 0; j < n; j++)\r\n            {\r\n                if(i == j)\r\n                    continue;\r\n\r\n                int tmp = findDistance(points[i], points[j]);\r\n                if(mp.find(tmp) != mp.end())\r\n                    cnt += mp[tmp] * 2; // 2 is multiplied bcoz the order of j & k can be k & j also\r\n\r\n                mp[tmp]++;\r\n            }\r\n        }\r\n\r\n        return cnt;\r\n    }\r\n\r\n    int findDistance(vector<int> &p1, vector<int> &p2)\r\n    {\r\n        return (p1[0] - p2[0]) * (p1[0] - p2[0]) + (p1[1] - p2[1]) * (p1[1] - p2[1]);\r\n    }\r\n};",
    "python": "class Solution:\r\n    def numberOfBoomerangs(self, points: List[List[int]]) -> int:\r\n        def sq(a):\r\n            return a * a\r\n\r\n        def euclid(a, b, c, d):\r\n            dist = sq(a - c) + sq(b - d)\r\n            return sq(dist)\r\n\r\n        n = len(points)\r\n        res = 0\r\n        for i in range(n):\r\n            count = defaultdict(lambda : 0)\r\n            for j in range(n):\r\n                d = euclid(points[i][0], points[i][1], points[j][0], points[j][1])\r\n                res += count[d] * 2\r\n                count[d] += 1\r\n\r\n        return res",
    "java": "class Solution {\r\n    public int numberOfBoomerangs(int[][] points) {\r\n        \r\n        int answer = 0;\r\n        \r\n        for (int p=0; p<points.length;p++) {\r\n            \r\n            int[] i = points[p];\r\n            \r\n            HashMap<Double, Integer> hm = new HashMap<Double, Integer>();\r\n            \r\n            for (int q=0;q<points.length;q++) {\r\n                \r\n                if (q==p) {\r\n                    continue;\r\n                }\r\n                \r\n                int[] j = points[q];\r\n                \r\n                double distance = Math.sqrt(Math.pow(j[0]-i[0], 2) + Math.pow(j[1]-i[1], 2));\r\n                \r\n                if (distance > 0) {\r\n                    if (hm.containsKey(distance)) {\r\n                        hm.put(distance, hm.get(distance) + 1);\r\n                    } else {\r\n                        hm.put(distance, 1);\r\n                    }\r\n                }\r\n                \r\n            }\r\n            \r\n            for (Double dist : hm.keySet()) {\r\n                int occ = hm.get(dist);\r\n                if (occ > 1) {\r\n                    answer = answer + ((occ) * (occ - 1));\r\n                }\r\n            }\r\n        }\r\n        \r\n        return answer;\r\n    }\r\n}",
    "javascript": "var numberOfBoomerangs = function(points) {\r\n\tconst POINTS_LEN = points.length;\r\n\tlet result = 0;\r\n\r\n\tfor (let i = 0; i < POINTS_LEN; i++) {\r\n\t\tconst hash = new Map();\r\n\r\n\t\tfor (let j = 0; j < POINTS_LEN; j++) {\r\n\t\t\tif (i === j) continue;\r\n\t\t\tconst [x1, y1] = points[i];\r\n\t\t\tconst [x2, y2] = points[j];\r\n\t\t\tconst dis = Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2);\r\n\t\t\tconst value = hash.get(dis) ?? 0;\r\n\r\n\t\t\tif (value > 0) result += value * 2;\r\n\t\t\thash.set(dis, value + 1);\r\n\t\t}\r\n\t}\r\n\r\n\treturn result;\r\n};"
  }
}
