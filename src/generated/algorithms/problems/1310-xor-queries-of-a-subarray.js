export default {
  "id": 1310,
  "name": "XOR Queries of a Subarray",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/xor-queries-of-a-subarray",
  "relativeDir": "X/XOR Queries of a Subarray",
  "slug": "1310-xor-queries-of-a-subarray",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 25,
    "java": 31,
    "python": 31,
    "javascript": 58
  },
  "languages": {
    "cpp": "// Runtime: 51 ms (Top 98.57%) | Memory: 38.10 MB (Top 95.53%)\r\n\r\nclass Solution {\r\npublic:\r\n    vector<int> xorQueries(vector<int>& arr, vector<vector<int>>& queries) {\r\n        int n = arr.size();\r\n        int q = queries.size();\r\n        vector<int> answer(q, 0);\r\n        vector<int> prefXor(n, 0);\r\n\r\n        prefXor[0] = arr[0];\r\n        for(int i = 1; i < n; i++) {\r\n            prefXor[i] = prefXor[i - 1] ^ arr[i];\r\n        }\r\n\r\n        for(int i = 0; i < q; i++) {\r\n            int left = queries[i][0];\r\n            int right = queries[i][1];\r\n            if(left == 0) answer[i] = prefXor[right];\r\n            else answer[i] = prefXor[right] ^ prefXor[left - 1];\r\n        }\r\n\r\n        return answer;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def xorQueries(self, arr: List[int], queries: List[List[int]]) -> List[int]:\r\n\r\n\r\n       \"\"\"\r\n\r\n       arr = [1,3,4,8], queries = [[0,1],[1,2],[0,3],[3,3]]\r\n\r\n       find pref xor of arr\r\n\r\n       pref = [x,x,x,x]\r\n\r\n       for each query find the left and right indices\r\n       the xor for range (l, r) would be pref[r] xor pref[l-1]\r\n       \r\n       \"\"\"     \r\n       n, m = len(queries), len(arr)\r\n\r\n       answer = [1]*n\r\n\r\n       pref = [1]*m\r\n       pref[0] = arr[0]\r\n       if m > 1:\r\n           for i in range(1,m):\r\n               pref[i] = pref[i-1] ^ arr[i]\r\n\r\n       for (i, (l,r)) in enumerate(queries):\r\n           if l == 0: answer[i] = pref[r]          \r\n           else: answer[i] = pref[r] ^ pref[l-1]\r\n\r\n       return answer",
    "java": "// Runtime: 748 ms (Top 12.05%) | Memory: 68.5 MB (Top 10.97%)\r\nclass Solution\r\n{\r\n    public int[] xorQueries(int[] arr, int[][] queries)\r\n    {\r\n        int[] ans = new int[queries.length];\r\n        int[] xor = new int[arr.length];\r\n        xor[0] = arr[0];\r\n        // computing prefix XOR of arr\r\n        for(int i = 1; i < arr.length; i++)\r\n        {\r\n            xor[i] = arr[i] ^ xor[i-1];\r\n        }\r\n        for(int i = 0; i < queries.length; i++)\r\n        {\r\n            // if query starts from something other than 0 (say i), then we XOR all values from arr[0] to arr[i-1]\r\n            if(queries[i][0] != 0)\r\n            {\r\n                ans[i] = xor[queries[i][1]];\r\n                for(int j = 0; j < queries[i][0]; j++)\r\n                {\r\n                    ans[i] = arr[j] ^ ans[i];\r\n                }\r\n            }\r\n            // if start of query is 0, then we striaght up use the prefix XOR till ith element\r\n            else\r\n                ans[i] = xor[queries[i][1]];\r\n        }\r\n        return ans;\r\n    }\r\n}",
    "javascript": "var xorQueries = function(arr, queries) {\r\n    let n = arr.length;\r\n    \r\n    while ((n & (n - 1)) != 0) {\r\n        n++;\r\n    }\r\n    \r\n    const len = n;\r\n    const tree = new Array(len * 2).fill(0);\r\n  \r\n    build(tree, 1, 0, len - 1);\r\n    \r\n    const res = [];\r\n    \r\n    for (let i = 0; i < queries.length; i++) {\r\n        const [start, end] = queries[i];\r\n        \r\n        const xor = query(tree, 1, 0, len - 1, start, end);\r\n        \r\n        res.push(xor);\r\n    }\r\n    \r\n    \r\n    return res;\r\n    \r\n   \r\n    function build(tree, segmentIdx, segmentStart, segmentEnd) {\r\n        if (segmentStart === segmentEnd) {\r\n            tree[segmentIdx] = arr[segmentStart];\r\n            return;\r\n        }\r\n        \r\n        const mid = (segmentStart + segmentEnd) >> 1;\r\n        build(tree, segmentIdx * 2, segmentStart, mid);\r\n        build(tree, segmentIdx * 2 + 1, mid + 1, segmentEnd);\r\n        \r\n        tree[segmentIdx] = tree[segmentIdx * 2] ^ tree[segmentIdx * 2 + 1];\r\n\t\treturn;\r\n    } \r\n    \r\n    \r\n    function query(tree, node, nodeStart, nodeEnd, queryStart, queryEnd) {\r\n        if (queryStart <= nodeStart && nodeEnd <= queryEnd) {\r\n            return tree[node];\r\n        }    \r\n        if (nodeEnd < queryStart || queryEnd < nodeStart) {\r\n            return 0;\r\n        }\r\n        \r\n        const mid = (nodeStart + nodeEnd) >> 1;\r\n        \r\n        const leftXor = query(tree, node * 2, nodeStart, mid, queryStart, queryEnd);\r\n        const rightXor = query(tree, node * 2 + 1, mid + 1, nodeEnd, queryStart, queryEnd);\r\n        \r\n        return leftXor ^ rightXor;\r\n    }\r\n};\r\n``"
  }
}
