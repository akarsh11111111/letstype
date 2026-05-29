export default {
  "id": 1906,
  "name": "Minimum Absolute Difference Queries",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-absolute-difference-queries",
  "relativeDir": "M/Minimum Absolute Difference Queries",
  "slug": "1906-minimum-absolute-difference-queries",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 64,
    "java": 38,
    "python": 23,
    "javascript": 33
  },
  "languages": {
    "cpp": "// Runtime: 390 ms (Top 96.30%) | Memory: 112.1 MB (Top 64.81%)\r\nclass Solution {\r\npublic:\r\n    vector<bitset<101>> tree;\r\n    vector<int> minDifference(vector<int>& nums, vector<vector<int>>& queries) {\r\n        int n = nums.size();\r\n\r\n        tree = vector<bitset<101>>(4*(n+1) + 1);\r\n        buildtree(1, 0, n-1, nums);\r\n\r\n        vector<int> ans;\r\n        for(auto &e: queries){\r\n            auto finalOnesRepresentations = query(1, 0, n-1, e[0], e[1]);\r\n\r\n            // find the first 1\r\n            int i = 0;\r\n            while(i < 101 and finalOnesRepresentations[i] != 1){\r\n                i++;\r\n            }\r\n\r\n            int gap = INT_MAX;\r\n            int prev = i;\r\n            i++;\r\n            // find the minimum gap\r\n            for(; i < 101; i++){\r\n                if(finalOnesRepresentations[i] == 1){\r\n                    gap = min(gap, i - prev);\r\n                    prev = i;\r\n                }\r\n            }\r\n            ans.push_back(gap == INT_MAX ? -1 : gap);\r\n        }\r\n        return ans;\r\n    }\r\n\r\n    bitset<101> query(int index, int s, int e, int qs, int qe){\r\n\r\n        if(s > e) return bitset<101>();\r\n        if(e < qs || s > qe) return bitset<101>();\r\n        if(qs <= s and e <= qe) return tree[index];\r\n\r\n        int mid = (s+e)/2;\r\n        auto left = query(index*2, s, mid, qs, qe);\r\n        auto right = query(index*2+1, mid+1, e, qs , qe);\r\n        return left | right;\r\n    }\r\n\r\n    void buildtree(int index, int s, int e, vector<int>& a){\r\n\r\n        if(s > e)return;\r\n\r\n        if(s==e){\r\n            bitset<101> b;\r\n            b[a[s]] = 1;\r\n            tree[index] = b;\r\n            return;\r\n        }\r\n\r\n        int mid = (s+e)/2;\r\n        buildtree(index*2, s, mid, a);\r\n        buildtree(index*2+1, mid+1, e, a);\r\n        tree[index] = tree[index*2] | tree[index*2+1];\r\n    }\r\n};",
    "python": "class Solution:\r\n    def minDifference(self, nums: List[int], queries: List[List[int]]) -> List[int]:\r\n        # location of number\r\n        loc = defaultdict(list)\r\n        for i, num in enumerate(nums):\r\n            loc[num].append(i)\r\n        \r\n        # start from sorted key thus keep tracking minimum difference\r\n        k = sorted(loc)\r\n        \r\n        res = []\r\n        for a, b in queries:\r\n            cands = []\r\n            ans = float('inf')\r\n            for c in k:\r\n                # left and right range overlap means no available locations in range\r\n                if bisect.bisect_left(loc[c], a) == bisect.bisect(loc[c], b): continue\r\n                if cands: \r\n\t\t\t\t\tans = min(ans, c - cands[-1])\r\n                cands.append(c)\r\n            if ans == float('inf'): ans = -1\r\n            res.append(ans)\r\n        return res",
    "java": "// Runtime: 152 ms (Top 66.6%) | Memory: 154.57 MB (Top 22.2%)\r\n\r\nclass Solution {\r\n    public int[] minDifference(int[] nums, int[][] queries) {\r\n        int n = nums.length;\r\n        int[][] count = new int[n + 1][100];\r\n        int q = queries.length;\r\n        int ans[] = new int[q];\r\n        \r\n        for(int i = 0; i < n; ++i) {\r\n            for(int j = 0; j < 100; ++j)\r\n                count[i + 1][j] = count[i][j];\r\n            \r\n            ++count[i + 1][nums[i] - 1];\r\n        }\r\n        \r\n        for(int i = 0; i < q; ++i) {\r\n            int low = queries[i][0];\r\n            int high = queries[i][1] + 1;\r\n            List<Integer> present = new ArrayList<>();\r\n            int min = 100;\r\n            \r\n            for(int j = 0; j < 100; ++j)\r\n                if(count[high][j] - count[low][j] != 0)\r\n                    present.add(j);\r\n            \r\n            for(int j = 1; j < present.size(); ++j)\r\n                min = Math.min(min, present.get(j) - present.get(j - 1));\r\n            \r\n            if(present.size() == 1)\r\n                min = -1;\r\n            \r\n            ans[i] = min;\r\n        }\r\n        \r\n        return ans;\r\n    }\r\n}",
    "javascript": "var minDifference = function(nums, queries) {\r\n    const qlen   = queries.length, len = nums.length;\r\n    const res    = new Array(qlen).fill(-1);\r\n    const prefix = [];\r\n    \r\n    for(let i = 0; i <= len; i++) {\r\n        if(i == 0) prefix[i] = new Array(101).fill(0);\r\n        else {\r\n            prefix[i] = Array.from(prefix[i-1]);\r\n            prefix[i][nums[i-1]]++;   \r\n        }\r\n    }\r\n    \r\n    for(let k = 0; k < qlen; k++) {\r\n        const [l, r] = queries[k];\r\n        const left = prefix[l], right = prefix[r + 1];\r\n        let prev = -1, ans = Infinity;\r\n        for(let i = 1; i <= 100; i++) {\r\n            const diff = right[i] - left[i];\r\n            if(diff == 0) continue;\r\n            \r\n            if(prev != -1) {\r\n                ans = Math.min(ans, i - prev);\r\n            }\r\n            prev = i;\r\n        }\r\n        if(ans != Infinity) {\r\n            res[k] = ans;\r\n        }\r\n    }\r\n    \r\n    return res;\r\n};"
  }
}
