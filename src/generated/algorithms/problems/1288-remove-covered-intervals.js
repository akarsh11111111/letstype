export default {
  "id": 1288,
  "name": "Remove Covered Intervals",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/remove-covered-intervals",
  "relativeDir": "R/Remove Covered Intervals",
  "slug": "1288-remove-covered-intervals",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 21,
    "java": 17,
    "python": 16,
    "javascript": 13
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int removeCoveredIntervals(vector<vector<int>>& intervals) \r\n    {\r\n        int cnt = 0, last = INT_MIN;\r\n        sort(intervals.begin(), intervals.end(), \r\n             [] (const vector<int>& v1, const vector<int>& v2) { \r\n                 if(v1[0] != v2[0]) return v1[0] < v2[0];\r\n                 else return v1[1] > v2[1];\r\n        });\r\n\r\n        for(int i=0; i<intervals.size(); i++)\r\n        {\r\n            if(intervals[i][1] <= last) ++cnt;\r\n            \r\n            if(intervals[i][1] > last) last = intervals[i][1];\r\n        }\r\n        \r\n        return intervals.size()-cnt;\r\n    }\r\n};",
    "python": "# Runtime: 159 ms (Top 46.41%) | Memory: 14.4 MB (Top 92.31%)\r\nclass Solution:\r\n    def removeCoveredIntervals(self, intervals: List[List[int]]) -> int:\r\n\r\n        intervals.sort(key = lambda x: (x[0], -x[1]))\r\n        current, count = intervals[0], 1\r\n        for i in range(1, len(intervals)):\r\n            if current[0] <= intervals[i][0] and intervals[i][1] <= current[1]:\r\n                continue\r\n            current = intervals[i]\r\n            count += 1\r\n        return count\r\n\r\n# time and space complexity\r\n# time: O(nlog(n))\r\n# space: O(1)",
    "java": "class Solution {\r\n    public int removeCoveredIntervals(int[][] intervals) {\r\n        if(intervals == null || intervals.length == 0) return 0;\r\n        Arrays.sort(intervals, (i1,i2) -> (i1[0]==i2[0]?i2[1]-i1[1]:i1[0]-i2[0]));\r\n        int c = intervals[0][0], d = intervals[0][1];\r\n        int ans = intervals.length;\r\n        for(int i=1;i<intervals.length;i++){\r\n            int a = intervals[i][0], b = intervals[i][1];\r\n            if(c<=a && b<=d) ans--; \r\n            else {\r\n                c = a;\r\n                d = b;\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n}",
    "javascript": "// Runtime: 144 ms (Top 6.56%) | Memory: 44.10 MB (Top 88.52%)\r\n\r\nvar removeCoveredIntervals = function(intervals) {\r\n    intervals.sort((a, b) => (a[0] == b[0] ? b[1] - a[1] : a[0] - b[0]))\r\n    let count = 0, cur = 0\r\n    for(let interval of intervals){\r\n        if(cur < interval[1]){\r\n            cur = interval[1]\r\n            count++\r\n        }\r\n    }\r\n    return count\r\n};"
  }
}
