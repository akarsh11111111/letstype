export default {
  "id": 1583,
  "name": "Count Unhappy Friends",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/count-unhappy-friends",
  "relativeDir": "C/Count Unhappy Friends",
  "slug": "1583-count-unhappy-friends",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 33,
    "java": 36,
    "python": 17,
    "javascript": 22
  },
  "languages": {
    "cpp": "// Runtime: 38 ms (Top 95.74%) | Memory: 23.70 MB (Top 98.58%)\r\n\r\nclass Solution {\r\npublic:\r\n    int unhappyFriends(int n, vector<vector<int>>& preferences, vector<vector<int>>& pairs) {\r\n        int unhappy = 0;\r\n        int v[n];\r\n        for(int i = 0 ; i < n/2; i++){\r\n            v[pairs[i][0]] = pairs[i][1];\r\n            v[pairs[i][1]] = pairs[i][0];\r\n        }\r\n        for(int i = 0 ; i<n; i++){\r\n            int j=0;\r\n            int pf = preferences[i][j];\r\n            while(pf!=v[i]){\r\n                int z = 0;\r\n                bool f = false;\r\n                while(preferences[pf][z] != v[pf]){\r\n                    if(preferences[pf][z] == i){\r\n                        unhappy++;\r\n                        f=true;\r\n                        break;\r\n                    }\r\n                    z++;\r\n                }\r\n                if(f)\r\n                    break;\r\n                pf = preferences[i][++j];\r\n            }\r\n        }\r\n        return unhappy;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def unhappyFriends(self, n: int, preferences: List[List[int]], pairs: List[List[int]]) -> int:\r\n        dd = {}\r\n        \r\n        for i,x in pairs:\r\n            dd[i] = preferences[i][:preferences[i].index(x)]\r\n            dd[x] = preferences[x][:preferences[x].index(i)]\r\n        \r\n        ans = 0\r\n            \r\n        for i in dd:\r\n            for x in dd[i]:\r\n                if i in dd[x]:\r\n                    ans += 1\r\n                    break\r\n        \r\n        return ans",
    "java": "// Runtime: 3 ms (Top 94.12%) | Memory: 64.00 MB (Top 67.65%)\r\n\r\nclass Solution {\r\n  public int unhappyFriends(int n, int[][] preferences, int[][] pairs) {\r\n    int[][] rankings = new int[n][n]; // smaller the value, higher the preference\r\n    int[] pairedWith = new int[n];\r\n    for (int i = 0; i < n; i++) {\r\n      for (int rank = 0; rank < n - 1; rank++) {\r\n        int j = preferences[i][rank];\r\n        rankings[i][j] = rank; // person \"i\" views person \"j\" with rank\r\n      }\r\n    }\r\n    int unhappy = 0;\r\n    for (int[] pair : pairs) {\r\n      int a = pair[0], b = pair[1];\r\n      pairedWith[a] = b;\r\n      pairedWith[b] = a;\r\n    }\r\n    for (int a = 0; a < n; a++) {\r\n      // \"a\" prefers someone else\r\n      if (rankings[a][pairedWith[a]] != 0) {\r\n        for (int b = 0; b < n; b++) {\r\n          // \"b\" prefers to be with \"a\" over their current partner\r\n          // \"a\" prefers to be with \"b\" over their current partner\r\n          if (b != a\r\n              && rankings[b][a] < rankings[b][pairedWith[b]]\r\n              && rankings[a][b] < rankings[a][pairedWith[a]]) {\r\n            unhappy++;\r\n            break;\r\n          }\r\n        }\r\n      }\r\n    }\r\n    return unhappy;\r\n  }\r\n}",
    "javascript": "// Runtime: 60 ms (Top 83.3%) | Memory: 46.06 MB (Top 50.0%)\r\n\r\nvar unhappyFriends = function(n, preferences, pairs) {\r\n    let happyMap = new Array(n);\r\n    for (let [i, j] of pairs) {\r\n        happyMap[i] = preferences[i].indexOf(j);\r\n        happyMap[j] = preferences[j].indexOf(i);\r\n    }\r\n    \r\n    let unhappy = 0;\r\n    for (let i = 0; i < n; i++) {\r\n        for (let j = 0; j < happyMap[i]; j++) {\r\n            let partner = preferences[i][j];\r\n            if (preferences[partner].indexOf(i) < happyMap[partner]) {\r\n                unhappy++;\r\n                break;\r\n            }\r\n        }\r\n    }\r\n    \r\n    return unhappy;\r\n};"
  }
}
