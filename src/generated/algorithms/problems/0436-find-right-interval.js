export default {
  "id": 436,
  "name": "Find Right Interval",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-right-interval",
  "relativeDir": "F/Find Right Interval",
  "slug": "0436-find-right-interval",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 21,
    "java": 43,
    "python": 13,
    "javascript": 28
  },
  "languages": {
    "cpp": "// Runtime: 175 ms (Top 20.59%) | Memory: 28.4 MB (Top 34.44%)\r\nclass Solution {\r\npublic:\r\n    vector<int> findRightInterval(vector<vector<int>>& intervals) {\r\n\r\n        map<int, int> mp;\r\n        int n = intervals.size();\r\n\r\n        for(int i = 0; i < n; i++)\r\n            mp[intervals[i][0]] = i;\r\n\r\n        vector<int> ans;\r\n        for(auto &i : intervals)\r\n        {\r\n            auto it = mp.lower_bound(i[1]);\r\n            ans.push_back(it == mp.end() ? -1 : it->second);\r\n        }\r\n\r\n        return ans;\r\n    }\r\n};",
    "python": "// Runtime: 229 ms (Top 99.26%) | Memory: 22.50 MB (Top 16.77%)\r\n\r\nclass Solution:\r\n    def findRightInterval(self, intervals):\r\n        ints = sorted([[j,k,i] for i,[j,k] in enumerate(intervals)])\r\n        begs = [i for i,_,_ in ints]\r\n        out = [-1]*len(begs)\r\n        for i,j,k in ints:\r\n            t = bisect.bisect_left(begs, j)\r\n            if t < len(begs):\r\n                out[k] = ints[t][2]\r\n        \r\n        return out",
    "java": "/*\r\n- Time: O(N*log(N))\r\nLoop through the array with n elements and run binary search with log(N) time for each of them.\r\n\r\n- Space: O(N)\r\nUsed a hashmap map of size N to store the original indeces of intervals\r\n */\r\nclass Solution {\r\n    public int[] findRightInterval(int[][] intervals) {\r\n        int n = intervals.length;\r\n        int[] res = new int[n];\r\n        Map<int[], Integer> map = new HashMap<>();\r\n        for (int i = 0; i < n; i++) {\r\n            map.put(intervals[i], i);\r\n        }\r\n\r\n        Arrays.sort(intervals, (a, b) -> a[0] - b[0]);\r\n        for (int i = 0; i < n; i++) {\r\n            int[] interval = binarySearch(intervals, intervals[i][1], i);\r\n            res[map.get(intervals[i])] = interval == null ? -1 : map.get(interval);\r\n        }\r\n        \r\n        return res;\r\n    }\r\n\r\n    private int[] binarySearch(int[][] intervals, int target, int start) {\r\n        int l = start, r = intervals.length - 1;\r\n        \r\n        while (l <= r) {\r\n            int m = l + (r - l) / 2;\r\n            if (intervals[m][0] >= target) {\r\n                // keep moving the right boundary to the left to get the first\r\n                // element bigger than target\r\n                r = m - 1;\r\n            } else {\r\n                // if the element we get is bigger than the target, we move the \r\n                // left boundary to look at right part of the array\r\n                l = m + 1;\r\n            }\r\n        }\r\n        return l == intervals.length ? null : intervals[l];\r\n    }\r\n}",
    "javascript": "var findRightInterval = function(intervals) {\r\n    const data = intervals\r\n        .map((interval, i) => ({ interval, i }))\r\n        .sort((a, b) => a.interval[0] - b.interval[0]);\r\n\r\n    const res = Array(intervals.length).fill(-1);\r\n\r\n    for (let pos = 0; pos < data.length; pos++) {\r\n        let left = pos;\r\n        let right = data.length - 1;\r\n\r\n        while (left <= right) {\r\n            const mid = Math.floor((left + right) / 2);\r\n\r\n            if (data[pos].interval[1] <= data[mid].interval[0]) {\r\n                right = mid - 1;\r\n            } else {\r\n                left = mid + 1;                    \r\n            }\r\n        }\r\n\r\n        if (left < data.length) {\r\n            res[data[pos].i] = data[left].i;\r\n        }\r\n    }\r\n    \r\n    return res;\r\n};"
  }
}
