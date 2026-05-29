export default {
  "id": 1326,
  "name": "Minimum Number of Taps to Open to Water a Garden",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden",
  "relativeDir": "M/Minimum Number of Taps to Open to Water a Garden",
  "slug": "1326-minimum-number-of-taps-to-open-to-water-a-garden",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 43,
    "java": 19,
    "python": 20,
    "javascript": 51
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int minTaps(int n, vector<int>& ranges) {\r\n        vector<pair<int,int>> v;\r\n        for(int i=0;i<ranges.size();i++){\r\n            // making ranges\r\n            v.push_back({i-ranges[i],i+ranges[i]});\r\n        }\r\n        // sorting the intervals\r\n        sort(v.begin(),v.end());\r\n        \r\n        // to keep track from where we need to cover\r\n        int uncovered = 0;\r\n        int idx = 0;\r\n        // number of ranges used\r\n        int cnt = 0;\r\n        \r\n        // to check if its possible\r\n        bool ok = true;\r\n        \r\n        // as long as we have not covered the garden\r\n        while(uncovered<n){\r\n            // we will try to cover the uncovered such that new uncovered is maximum possible\r\n            int new_uncovered = uncovered;\r\n            while(idx<n+1 && v[idx].first<=uncovered){\r\n                new_uncovered = max(new_uncovered,v[idx].second);\r\n                idx++;\r\n            }\r\n            // we have used one range\r\n            cnt++;\r\n            \r\n            // it means we were not able to cover with ranges so not possible\r\n            if(new_uncovered == uncovered){\r\n                ok = false;\r\n                break;\r\n            }\r\n            // updating uncovered for next iteration\r\n            uncovered = new_uncovered;\r\n        }\r\n        if(ok) return cnt;\r\n        return -1;\r\n    }\r\n};",
    "python": "// Runtime: 110 ms (Top 96.18%) | Memory: 17.60 MB (Top 51.23%)\r\n\r\nclass Solution:\r\n    def minTaps(self, n: int, ranges: List[int]) -> int:\r\n        max_range = [0] * (n + 1)\r\n        \r\n        for i, r in enumerate(ranges):\r\n            left, right = max(0, i - r), min(n, i + r)\r\n            max_range[left] = max(max_range[left], right - left)\r\n        \r\n\t\t# it's a jump game now\r\n        start = end = step = 0\r\n        \r\n        while end < n:\r\n            step += 1\r\n            start, end = end, max(i + max_range[i] for i in range(start, end + 1))\r\n            if start == end:\r\n                return -1\r\n            \r\n        return step",
    "java": "// Runtime: 26 ms (Top 14.75%) | Memory: 49.6 MB (Top 26.03%)\r\nclass Solution {\r\n    public int minTaps(int n, int[] ranges) {\r\n        Integer[] idx = IntStream.range(0, ranges.length).boxed().toArray(Integer[]::new);\r\n        Arrays.sort(idx, Comparator.comparingInt(o -> o-ranges[o]));\r\n        int ans = 1, cur = 0, end = 0;\r\n        for (int i = 0;i<ranges.length&&end<n;i++){\r\n            int j = idx[i];\r\n            if (j-ranges[j]>cur){\r\n                cur=end;\r\n                ans++;\r\n            }\r\n            if (j-ranges[j]<=cur){\r\n                end=Math.max(end, j+ranges[j]);\r\n            }\r\n        }\r\n        return end<n?-1:ans;\r\n    }\r\n}",
    "javascript": "// Runtime: 150 ms (Top 11.76%) | Memory: 49.1 MB (Top 5.88%)\r\nvar minTaps = function(n, ranges) {\r\n    let intervals = [];\r\n    for (let i = 0; i < ranges.length; i++) {\r\n        let l = i - ranges[i];\r\n        let r = i + ranges[i];\r\n        intervals.push([l, r]);\r\n    }\r\n\r\n    intervals.sort((a, b) => {\r\n        if (a[0] === b[0]) return b[1] - a[1];\r\n        return a[0] - b[0];\r\n    })\r\n\r\n    // Find the starting idx\r\n    let startIdx;\r\n    for (let i = 0; i < intervals.length; i++) {\r\n        let [s, e] = intervals[i];\r\n        if (s <= 0) {\r\n            if (startIdx === undefined) startIdx = i;\r\n            else if (intervals[startIdx][1] < e) startIdx = i;\r\n        } else break;\r\n    }\r\n    if (startIdx === undefined) return -1;\r\n\r\n    let q = [startIdx], openedTaps = 1;\r\n    while (q.length) {\r\n        let max;\r\n        while (q.length) {\r\n            let idx = q.pop();\r\n            let [start, end] = intervals[idx];\r\n            if (end >= n) return openedTaps;\r\n            for (let i = idx + 1; i < intervals.length; i++) {\r\n                let [nextStart, nextEnd] = intervals[i];\r\n                // If next interval's start is less than the current interval's end\r\n                if (nextStart <= end) {\r\n                    if (!max && nextEnd > end) max = {i, end: nextEnd};\r\n                    // If the next interval's end is greater than the current interval's end\r\n                    else if (max && nextEnd > max.end) max = {i, end: nextEnd};\r\n                }\r\n                else break;\r\n            }\r\n        }\r\n        if (max) {\r\n            q.push(max.i);\r\n            openedTaps++;\r\n        }\r\n    }\r\n\r\n    return -1;\r\n};"
  }
}
