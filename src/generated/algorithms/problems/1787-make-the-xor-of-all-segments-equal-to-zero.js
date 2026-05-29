export default {
  "id": 1787,
  "name": "Make the XOR of All Segments Equal to Zero",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/make-the-xor-of-all-segments-equal-to-zero",
  "relativeDir": "M/Make the XOR of All Segments Equal to Zero",
  "slug": "1787-make-the-xor-of-all-segments-equal-to-zero",
  "availableLanguages": [
    "cpp",
    "java"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 43,
    "java": 42
  },
  "languages": {
    "cpp": "class Solution {\r\n   public:\r\n    int minChanges(vector<int>& nums, int k) {\r\n        const auto n = nums.size();\r\n        const int limit =\r\n            1 << static_cast<int>(\r\n                ceil(log2(*max_element(nums.cbegin(), nums.cend()) + 1)));\r\n\r\n        vector<unordered_map<int, int>> freq(k);\r\n        for (int i = 0; i != n; ++i) {\r\n            ++freq[i % k][nums[i]];\r\n        }\r\n\r\n        vector<int> dp(limit);\r\n        vector<int> tmpdp(limit);\r\n        int last_min = numeric_limits<int>::max();\r\n\r\n        for (int j = 0; j != limit; ++j) {\r\n            dp[j] = n / k + (n % k > 0) - freq[0][j];\r\n            last_min = min(last_min, dp[j]);\r\n        }\r\n\r\n        for (int i = 1; i != k; ++i) {\r\n            int cnt = n / k + (n % k > i);\r\n            int new_min = numeric_limits<int>::max();\r\n            for (int j = 0; j != limit; ++j) {\r\n                int mi = numeric_limits<int>::max();\r\n                for (auto& [v, f] : freq[i]) {\r\n                    mi = min(mi, dp[j ^ v] - f);\r\n                }\r\n                mi = min(mi, last_min);\r\n\r\n                mi += cnt;\r\n                new_min = min(new_min, mi);\r\n                tmpdp[j] = mi;\r\n            }\r\n            last_min = new_min;\r\n            swap(tmpdp, dp);\r\n        }\r\n\r\n        return dp[0];\r\n    }\r\n};",
    "java": "// Runtime: 31 ms (Top 100.0%) | Memory: 43.98 MB (Top 84.6%)\r\n\r\nclass Solution {\r\n    public int minChanges(int[] nums, int k) {\r\n        // solution (sequence) is uniquely defined by the first k elements, because a[i] == a[i+k] == a[i+2k] == ... for any offset i\r\n        int v = 1 << 10;\r\n        // best[pattern] is the highest number of relevant (ie. those with offsets between 0 and i) elements in nums\r\n        // that can be left unchanged to achieve a[0] ^ a[1] ^ ... ^ a[i] == pattern\r\n        int[] best = new int[v];\r\n        // iterate over over each offset i of the solution\r\n        for (int i = 0; i < k; i++) {\r\n            // find frequencies of distinct element values present in the subsequence with offset i\r\n            Map<Integer,Integer> n2c = new HashMap<Integer,Integer>();\r\n            for (int p = i; p < nums.length; p += k) {\r\n                n2c.put(nums[p],1+n2c.getOrDefault(nums[p],0));\r\n            }\r\n            // treat initial subsequence (i = 0) correctly\r\n            if (i == 0) {\r\n                for (int vv : n2c.keySet()) {\r\n                    best[vv] = n2c.get(vv);\r\n                }\r\n                continue;\r\n            }\r\n            int[] next = new int[v];\r\n            int max = 0;\r\n            for (int j : best) max = Math.max(max, j);\r\n            // elements previously unchanged (ie. from subsequences with offsets 0, 1, 2, .., i-1) can be carried to the current offset i\r\n            // max of all best[] is used\r\n            for (int j = 0; j < v; j++) next[j] = max;\r\n            // for elements present in the subsequnce with offset i next[] can be improved accordingly\r\n            for (int vv : n2c.keySet()) {\r\n                int cnt = n2c.get(vv);\r\n                for (int j = 0; j < v; j++) {\r\n                    next[j ^ vv] = Math.max(next[j ^ vv], best[j] + cnt);\r\n                }\r\n            }\r\n            best = next;\r\n        }\r\n        // solution is for pattern == 0, hence best[0]. Report minimum number of elements to change rather than maximum that can be left unchanged.\r\n        return nums.length - best[0];\r\n    }\r\n}"
  }
}
