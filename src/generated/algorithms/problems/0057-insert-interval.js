export default {
  "id": 57,
  "name": "Insert Interval",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/insert-interval",
  "relativeDir": "I/Insert Interval",
  "slug": "0057-insert-interval",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 29,
    "java": 26,
    "python": 15,
    "javascript": 32
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<vector<int>> insert(vector<vector<int>>& intervals, vector<int>& newInterval) {\r\n        vector<vector<int>> output;\r\n        int n = intervals.size();\r\n        int i = 0;\r\n        while(i < n){\r\n            if(newInterval[1] < intervals[i][0]){\r\n                output.push_back(newInterval);\r\n                while(i < n){\r\n                    output.push_back(intervals[i]);\r\n                    i++;\r\n                }\r\n                return output;\r\n            }\r\n            else if(newInterval[0] > intervals[i][1]){\r\n                output.push_back(intervals[i]);\r\n                i++;\r\n            }\r\n            else{\r\n                newInterval[0] = min(newInterval[0], intervals[i][0]);\r\n                newInterval[1] = max(newInterval[1], intervals[i][1]);\r\n                i++;\r\n            }\r\n        }\r\n        output.push_back(newInterval);//think about it\r\n        return output;\r\n    }\r\n};",
    "python": "# Runtime: 202 ms (Top 7.96%) | Memory: 17.3 MB (Top 91.79%)\r\nclass Solution:\r\n    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:\r\n\r\n        intervals.append(newInterval)\r\n        intervals.sort(key=lambda x: x[0])\r\n\r\n        result = []\r\n        for interval in intervals:\r\n            if not result or result[-1][1] < interval[0]:\r\n                result.append(interval)\r\n            else:\r\n                result[-1][1] = max(result[-1][1],interval[1])\r\n\r\n        return result",
    "java": "class Solution {\r\n    public int[][] insert(int[][] intervals, int[] newInterval) {\r\n        if (newInterval == null || newInterval.length == 0) return intervals;\r\n        \r\n        List<int[]> merged = new LinkedList<>();\r\n        int i = 0;\r\n        // add not overlapping\r\n        while (i < intervals.length && intervals[i][1] < newInterval[0]) {\r\n            merged.add(intervals[i]);\r\n            i++;\r\n        }\r\n        // add overlapping\r\n        while (i < intervals.length && intervals[i][0] <= newInterval[1]) {\r\n            newInterval[0] = Math.min(intervals[i][0], newInterval[0]);\r\n            newInterval[1] = Math.max(intervals[i][1], newInterval[1]);\r\n            i++;\r\n        }\r\n        merged.add(newInterval);\r\n        // add rest\r\n        while (i < intervals.length) {\r\n            merged.add(intervals[i]);\r\n            i++;\r\n        }\r\n        return merged.toArray(new int[merged.size()][]);\r\n    }\r\n}",
    "javascript": "var insert = function(intervals, newInterval) {\r\n    //Edge case\r\n    if (intervals.length === 0) {\r\n        return [newInterval];\r\n    }\r\n\t//Find the index to insert newIntervals\r\n    let current = 0;\r\n    while (current < intervals.length && intervals[current][0] < newInterval[0]) {\r\n        current++;\r\n    }\r\n    intervals.splice(current, 0, newInterval);\r\n\t//If newInterval is not the last index, check the element behigh newInterval to see if merge is needed\r\n    if (current !== intervals.length -1) {\r\n        let pointer = current + 1;\r\n        if (intervals[pointer][0] <= newInterval[1]) {\r\n            while (pointer < intervals.length && intervals[pointer][0] <= newInterval[1]) {\r\n                pointer++;\r\n            }\r\n            newInterval[1] = Math.max(newInterval[1], intervals[pointer - 1][1]);\r\n            intervals.splice(current + 1, pointer - (current + 1));\r\n        }\r\n    }\r\n\t//If newInterval is not the first index, check the element berfore newInterval to see if merge is needed\r\n    if (current !== 0) {\r\n        if (intervals[current - 1][1] >= newInterval[0]) {\r\n            newInterval[0] = intervals[current - 1][0];\r\n            newInterval[1] = Math.max(newInterval[1], intervals[current - 1][1]);\r\n            intervals.splice(current - 1, 1);\r\n        }\r\n    }\r\n    return intervals;\r\n};"
  }
}
