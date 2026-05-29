export default {
  "id": 435,
  "name": "Non-overlapping Intervals",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/non-overlapping-intervals",
  "relativeDir": "N/Non-overlapping Intervals",
  "slug": "0435-non-overlapping-intervals",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 27,
    "java": 32,
    "python": 16,
    "javascript": 17
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int eraseOverlapIntervals(vector<vector<int>>& intervals) {\r\n        sort(intervals.begin(), intervals.end());\r\n        priority_queue<pair<int, int> > pq;\r\n        int ans = 0;\r\n        //maxheap by ending time\r\n        pq.push({intervals[0][1], intervals[0][0]});\r\n        for(int i=1;i<intervals.size();i++){\r\n            //if start of this interval is overlapping with max end time of some prev interval\r\n            if(pq.top().first > intervals[i][0]){\r\n                //remove one with max ending time\r\n                if(pq.top().first > intervals[i][1]){\r\n                    pq.pop();\r\n                    pq.push({intervals[i][1], intervals[i][0]});\r\n                }\r\n                //update ans\r\n                ans++;\r\n            }\r\n            else{\r\n                //push current interval.\r\n                pq.push({intervals[i][1], intervals[i][0]});\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 3035 ms (Top 7.53%) | Memory: 52.8 MB (Top 61.18%)\r\n\r\nclass Solution:\r\n    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int: # Time: O(nlogn) and Space: O(1)\r\n        intervals.sort()\r\n        res = 0\r\n        prevEnd = intervals[0][1]\r\n\r\n        for start, end in intervals[1:]: # we will start from 1 as we already had taken 0 as a base value\r\n            if start >= prevEnd: # Non overlapping when new interval starts after or from the previous one\r\n                prevEnd = end # prev = [2, prevEnd=3] & new = [start=3, end=4], we have a new end now after checking the new non overlapping interval\r\n            else: # Overlapping when new interval starts in between or from the previous one\r\n                res += 1 # prev = [1, prevEnd=2] & new = [start=1, end=3] --> we will delete new=[1, 3] & set prev = [1, prevEnd=2]\r\n                prevEnd = min(end, prevEnd) # we will delete on the interval on the basis of whose interval ends last\r\n\r\n        return res",
    "java": "// |-------|\r\n//   |--|\r\n\r\n// |-------|\r\n//.   |-------|\r\n\r\n// |-------|\r\n//.           |-------|\r\n\r\nclass Solution {\r\n    public int eraseOverlapIntervals(int[][] intervals) {\r\n        Arrays.sort(intervals, (a,b) -> a[0] - b[0]);\r\n        \r\n        int start = intervals[0][0];\r\n        int end = intervals[0][1];\r\n        int res = 0;\r\n        \r\n        for (int i = 1; i < intervals.length; i++){\r\n            int[] interval = intervals[i];\r\n            \r\n            if(interval[0] >= start && interval[0] < end){\r\n                res++;\r\n                if (interval[1] >= end)\r\n                    continue;\r\n            }\r\n            start = interval[0];\r\n            end = interval[1];\r\n    }\r\n        \r\n        return res;\r\n    }\r\n}",
    "javascript": "var eraseOverlapIntervals = function(intervals) {\r\n    // sort by end's small to big\r\n    intervals.sort((a, b) => a[1] - b[1]);\r\n    \r\n    let total = 1;\r\n    let maxEnd = intervals[0][1];\r\n    \r\n    for (let i = 1; i < intervals.length; i++) {\r\n        let [start, end] = intervals[i];\r\n        if (start >= maxEnd) {\r\n            total++;\r\n            maxEnd = end\r\n        }\r\n    }\r\n    \r\n    return intervals.length - total;\r\n};"
  }
}
