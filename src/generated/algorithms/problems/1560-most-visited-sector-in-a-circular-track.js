export default {
  "id": 1560,
  "name": "Most Visited Sector in  a Circular Track",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/most-visited-sector-in-a-circular-track",
  "relativeDir": "M/Most Visited Sector in  a Circular Track",
  "slug": "1560-most-visited-sector-in-a-circular-track",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 27,
    "java": 16,
    "python": 48,
    "javascript": 15
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.0%) | Memory: 11.40 MB (Top 65.78%)\r\n\r\nclass Solution {\r\npublic:\r\n    vector<int> mostVisited(int n, vector<int>& rounds) {\r\n        vector <int> ans;\r\n        int size = rounds.size();\r\n        \r\n        if(rounds[0] <= rounds[size-1]) {\r\n            for(int i=rounds[0]; i<= rounds[size-1]; i++) {\r\n                ans.push_back(i);\r\n            }\r\n            return ans;\r\n        }\r\n        else {\r\n            for(int i=1; i<= rounds[size-1]; i++) {\r\n                ans.push_back(i);\r\n            }   \r\n            \r\n            for(int i=rounds[0]; i<=n; i++) {\r\n                ans.push_back(i);\r\n            }\r\n        }\r\n        \r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def mostVisited(self, n: int, rounds: List[int]) -> List[int]:\r\n        hash_map = {}\r\n        for i in range(0 , len(rounds)-1):\r\n            if i == 0:\r\n                start = rounds[i]\r\n            elif rounds[i] == n:\r\n                start = 1\r\n            else:\r\n                start = rounds[i] + 1\r\n            end = rounds[i+1]\r\n            if start <= end:\r\n                for i in range(start , end + 1):\r\n                    if i in hash_map:\r\n                        hash_map[i] += 1\r\n                    else:\r\n                        hash_map[i] = 1\r\n            else:\r\n                for i in range(start , n + 1):\r\n                    if i in hash_map:\r\n                        hash_map[i] += 1\r\n                    else:\r\n                        hash_map[i] = 1\r\n                for i in range(1 , end + 1):\r\n                    if i in hash_map:\r\n                        hash_map[i] += 1\r\n                    else:\r\n                        hash_map[i] = 1\r\n        k = list(hash_map.keys())\r\n        v = list(hash_map.values())\r\n        ans = []\r\n        m = -1\r\n        i = 0\r\n        j = 0\r\n        while i < len(k) and j < len(v):\r\n            if len(ans) == 0:\r\n                ans.append(k[i])\r\n                m = v[j]\r\n            elif m < v[j]:\r\n                ans = []\r\n                ans.append(k[i])\r\n                m = v[j]\r\n            elif m == v[j]:\r\n                ans.append(k[i])\r\n            i += 1\r\n            j += 1\r\n        ans = sorted(ans)\r\n        return ans",
    "java": "// Runtime: 0 ms (Top 100.0%) | Memory: 43.10 MB (Top 12.5%)\r\n\r\nclass Solution {\r\n    public List<Integer> mostVisited(int n, int[] rounds) {\r\n        var start = rounds[0];\r\n        var end = rounds[rounds.length - 1];   \r\n        var res = new ArrayList<Integer>();\r\n        if (start <= end) {\r\n            for (int i = start; i <= end; i++) res.add(i);\r\n        } else {\r\n            for (int i = 1; i <= end; i++) res.add(i);\r\n            for (int i = start; i <= n; i++) res.add(i);\r\n        }\r\n        return res;\r\n    }\r\n}",
    "javascript": "var mostVisited = function(n, rounds) {\r\n    const first = rounds[0];\r\n    const last = rounds[rounds.length - 1];\r\n   \r\n    const result = [];\r\n   \r\n    if (first <= last) {\r\n        for (let i = last; i >= first; i--) result.unshift(i)\r\n    } else {\r\n        for (let i = 1; i <= last; i++) result.push(i);\r\n        for (let i = first; i <= n; i++) result.push(i);\r\n    }\r\n   \r\n    return result;\r\n};"
  }
}
