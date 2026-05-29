export default {
  "id": 1982,
  "name": "Find Array Given Subset Sums",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-array-given-subset-sums",
  "relativeDir": "F/Find Array Given Subset Sums",
  "slug": "1982-find-array-given-subset-sums",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 32,
    "java": 28,
    "python": 28,
    "javascript": 45
  },
  "languages": {
    "cpp": "// Runtime: 694 ms (Top 46.21%) | Memory: 141.7 MB (Top 30.30%)\r\nclass Solution {\r\npublic:\r\n    vector<int> recoverArray(int n, vector<int>& sums) {\r\n        sort(sums.begin(), sums.end());\r\n\r\n        vector<int> ans;\r\n        while (n--) {\r\n            int diff = sums[1] - sums[0];\r\n            unordered_map<int, int> freq;\r\n            vector<int> ss0, ss1;\r\n            bool on = false;\r\n            for (auto& x : sums)\r\n                if (!freq[x]) {\r\n                    ss0.push_back(x);\r\n                    freq[x+diff]++;\r\n                    if (x == 0) on = true;\r\n                } else {\r\n                    ss1.push_back(x);\r\n                    freq[x]--;\r\n                }\r\n            if (on) {\r\n                ans.push_back(diff);\r\n                sums = ss0;\r\n            } else {\r\n                ans.push_back(-diff);\r\n                sums = ss1;\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 4011 ms (Top 18.39%) | Memory: 19.7 MB (Top 40.23%)\r\nclass Solution:\r\n    def recoverArray(self, n: int, sums: List[int]) -> List[int]:\r\n        res = [] # Result set\r\n        sums.sort()\r\n\r\n        while len(sums) > 1:\r\n            num = sums[-1] - sums[-2] # max - secondMax\r\n            countMap = Counter(sums) # Get count of each elements\r\n            excluding = [] # Subset sums that do NOT contain num\r\n            including = [] # Subset sums that contain num\r\n\r\n            for x in sums:\r\n                if countMap.get(x) > 0:\r\n                    excluding.append(x)\r\n                    including.append(x+num)\r\n                    countMap[x] -= 1\r\n                    countMap[x+num] -= 1\r\n\r\n            # Check validity of excluding set\r\n            if 0 in excluding:\r\n                sums = excluding\r\n                res.append(num)\r\n            else:\r\n                sums = including\r\n                res.append(-1*num)\r\n\r\n        return res",
    "java": "// Runtime: 73 ms (Top 62.96%) | Memory: 85.2 MB (Top 70.37%)\r\nclass Solution {\r\n    public int[] recoverArray(int n, int[] sums) {\r\n        Arrays.sort(sums);\r\n        int m = sums.length;\r\n        int[] res = new int[n], left = new int[m / 2], right = new int[m / 2];\r\n        for (int i = 0; i < n; ++i) {\r\n            int diff = sums[1] - sums[0], hasZero = 0, p = -1, q = -1, k = 0;\r\n            for (int j = 0; j < m; ++j) {\r\n                if (k <= q && right[k] == sums[j]) k++;\r\n                else {\r\n                    if (0 == sums[j]) hasZero = 1;\r\n                    left[++p] = sums[j];\r\n                    right[++q] = sums[j] + diff;\r\n                }\r\n            }\r\n            if (1 == hasZero) {\r\n                res[i] = diff;\r\n                sums = left;\r\n            } else {\r\n                res[i] = -diff;\r\n                sums = right;\r\n            }\r\n            m /= 2;\r\n        }\r\n        return res;\r\n    }\r\n}",
    "javascript": "// Runtime: 330 ms (Top 100.0%) | Memory: 69.50 MB (Top 100.0%)\r\n\r\n/**\r\n * @param {number} n\r\n * @param {number[]} sums\r\n * @return {number[]}\r\n */\r\nvar recoverArray = function(n, sums) {\r\n    sums.sort((a, b) => a - b);\r\n    let result = [];\r\n    \r\n    while (sums.length > 1) {\r\n        let num = sums[sums.length - 1] - sums[sums.length - 2],\r\n            excluding = [],\r\n            including = [],\r\n            counter = new Map();\r\n        for (let item of sums) {\r\n            let count = counter.get(item);\r\n            if (count) {\r\n                counter.set(item, count + 1);\r\n            } else {\r\n                counter.set(item, 1);\r\n            }\r\n        }\r\n        \r\n        for (let item of sums) {\r\n            if (counter.get(item) > 0) {\r\n                excluding.push(item);\r\n                including.push(item + num);\r\n                counter.set(item, counter.get(item) - 1);\r\n                counter.set(item + num, counter.get(item + num) - 1);\r\n            }\r\n        }\r\n        \r\n        if (excluding.indexOf(0) !== -1) {\r\n            sums = excluding;\r\n            result.push(num);\r\n        } else {\r\n            sums = including;\r\n            result.push(-1 * num);\r\n        }\r\n    }\r\n    \r\n    return result;\r\n};"
  }
}
