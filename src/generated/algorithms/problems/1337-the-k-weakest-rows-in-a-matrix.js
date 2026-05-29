export default {
  "id": 1337,
  "name": "The K Weakest Rows in a Matrix",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix",
  "relativeDir": "T/The K Weakest Rows in a Matrix",
  "slug": "1337-the-k-weakest-rows-in-a-matrix",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 24,
    "java": 35,
    "python": 11,
    "javascript": 29
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<int> kWeakestRows(vector<vector<int>>& mat, int k) {\r\n        // <idx, count>\r\n        vector<pair<int,int>> freqMapper;\r\n        int civilian = 0;\r\n        for(int i=0; i<mat.size(); ++i) {\r\n            int degree = count(mat[i].begin(), mat[i].end(), civilian);\r\n            freqMapper.push_back({i, degree});\r\n        }\r\n        sort(freqMapper.begin(), freqMapper.end(), [](pair<int,int> pair1, pair<int,int> pair2) {\r\n        if (pair1.second > pair2.second) {\r\n            return true;\r\n        } else if (pair1.second == pair2.second) {\r\n            return pair1.first < pair2.first;\r\n        }\r\n        return pair1.second > pair2.second;\r\n    });\r\n        vector<int> kWeakest;\r\n        for(int i=0; i<k; i++) kWeakest.push_back(freqMapper[i].first);\r\n        return kWeakest;\r\n    }\r\n    \r\n};",
    "python": "class Solution:\r\n    def kWeakestRows(self, mat: List[List[int]], k: int) -> List[int]:\r\n\r\n        row = []\r\n        for i in range(len(mat)):\r\n            row.append((sum(mat[i]), i))\r\n\r\n        row.sort()\r\n        ans = [idx for (val, idx) in row[:k]]\r\n\r\n        return ans",
    "java": "// Runtime: 7 ms (Top 17.72%) | Memory: 48.7 MB (Top 54.45%)\r\nclass Solution {\r\n    public int[] kWeakestRows(int[][] mat, int k) {\r\n        Map<Integer, Integer> map = new HashMap<>();\r\n        List<Integer> list = new ArrayList<>();\r\n        int[] arr = new int[k];\r\n        for (int i = 0; i < mat.length; i++){\r\n            int n = getBits(mat[i]);\r\n            map.put(i, n);\r\n            list.add(n);\r\n        }\r\n        Collections.sort(list);\r\n        int z = 0;\r\n        for (int i = 0; i < k; i++){\r\n            for (Map.Entry<Integer, Integer> m : map.entrySet()){\r\n                if (list.get(i).equals(m.getValue())){\r\n                    arr[z++] = m.getKey();\r\n                    map.remove(m.getKey(), m.getValue());\r\n                    break;\r\n                }\r\n            }\r\n        }\r\n\r\n        return arr;\r\n    }\r\n\r\n    private static Integer getBits(int[] arr) {\r\n        int count = 0;\r\n        for (int i = 0; i < arr.length; i++) {\r\n            if (arr[i] == 1) count++;\r\n        }\r\n\r\n        return count;\r\n    }\r\n}",
    "javascript": "// Runtime: 84 ms (Top 72.55%) | Memory: 43.7 MB (Top 93.76%)\r\n/**\r\n * @param {number[][]} mat\r\n * @param {number} k\r\n * @return {number[]}\r\n\r\n * S: O(N)\r\n * T: O(N*logN)\r\n */\r\nvar kWeakestRows = function(mat, k) {\r\n    return mat.reduce((acc, row, index) => {\r\n        let left = 0;\r\n        let right = row.length - 1;\r\n\r\n        while(left <= right) {\r\n            let mid = Math.floor( (left + right) / 2);\r\n\r\n            if(row[mid]) {\r\n                left = mid + 1;\r\n            } else {\r\n                right = mid - 1;\r\n            }\r\n        }\r\n\r\n        acc.push({ index, value: left });\r\n\r\n        return acc;\r\n    }, []).sort((a, b) => a.value - b.value).splice(0, k).map(item => item.index);\r\n};"
  }
}
