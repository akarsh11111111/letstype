export default {
  "id": 757,
  "name": "Set Intersection Size At Least Two",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/set-intersection-size-at-least-two",
  "relativeDir": "S/Set Intersection Size At Least Two",
  "slug": "0757-set-intersection-size-at-least-two",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 53,
    "java": 47,
    "python": 8,
    "javascript": 30
  },
  "languages": {
    "cpp": "// Runtime: 56 ms (Top 88.46%) | Memory: 17.8 MB (Top 31.41%)\r\nclass Solution {\r\npublic:\r\n\r\n    // sort wrt. end value\r\n\r\n    static bool compare(vector<int>& a, vector<int>& b)\r\n    {\r\n        if(a[1] == b[1])\r\n            return a[0] < b[0];\r\n        else\r\n            return a[1] < b[1];\r\n    }\r\n\r\n    int intersectionSizeTwo(vector<vector<int>>& intervals) {\r\n\r\n        int n = intervals.size();\r\n\r\n        // sort the array\r\n\r\n        sort(intervals.begin(), intervals.end(), compare);\r\n\r\n        vector<int> res;\r\n\r\n        res.push_back(intervals[0][1] - 1);\r\n\r\n        res.push_back(intervals[0][1]);\r\n\r\n        for(int i = 1; i < n; i++)\r\n        {\r\n            int start = intervals[i][0];\r\n\r\n            int end = intervals[i][1];\r\n\r\n            if(start > res.back())\r\n            {\r\n                res.push_back(end - 1);\r\n\r\n                res.push_back(end);\r\n            }\r\n            else if(start == res.back())\r\n            {\r\n                res.push_back(end);\r\n            }\r\n            else if(start > res[res.size() - 2])\r\n            {\r\n                res.push_back(end);\r\n            }\r\n        }\r\n\r\n        return res.size();\r\n    }\r\n};",
    "python": "class Solution:\r\n    def intersectionSizeTwo(self, intervals: List[List[int]]) -> int:\r\n        ans = []\r\n        for x, y in sorted(intervals, key=lambda x: (x[1], -x[0])): \r\n            if not ans or ans[-2] < x: \r\n                if ans and x <= ans[-1]: ans.append(y)\r\n                else: ans.extend([y-1, y])\r\n        return len(ans)",
    "java": "// Runtime: 17 ms (Top 28.66%) | Memory: 53.2 MB (Top 21.64%)\r\n//Time Complexity O(Nlog(N)) - N is the number of intervals\r\n//Space Complexity O(N) - N is the number of intervals, can be reduced to O(1) if needed\r\nclass Solution {\r\n    public int intersectionSizeTwo(int[][] intervals) {\r\n        //corner case: can intervals be null or empty? No\r\n\r\n        //First, sort the intervals by end, then by reverse order start\r\n        Arrays.sort(intervals, new Comparator<int[]>() {\r\n            @Override\r\n            public int compare(int[] a, int[] b) {\r\n                if (a[1] == b[1]) {\r\n                    return b[0] - a[0];\r\n                }\r\n                return a[1] - b[1];\r\n            }\r\n        });\r\n\r\n        //Second, for each two intervals, greedily find if the previous interval would satisfy next interval's request\r\n        List<Integer> list = new ArrayList<>(); //basically the ending set S, btw, we actually do not need this but I use it here for better intuition\r\n\r\n        //add last two nums within the range\r\n        list.add(intervals[0][1] - 1);\r\n        list.add(intervals[0][1]);\r\n\r\n        for (int i = 1; i < intervals.length; i++) {\r\n            int lastOne = list.get(list.size() - 1);\r\n            int lastTwo = list.get(list.size() - 2);\r\n\r\n            int[] interval = intervals[i];\r\n            int start = interval[0];\r\n            int end = interval[1];\r\n\r\n            //if overlaps at least 2\r\n            if (lastOne >= start && lastTwo >= start) {\r\n                continue;\r\n            } else if (lastOne >= start) { //if overlaps 1\r\n                list.add(end);\r\n            } else { //if not overlapping\r\n                list.add(end - 1);\r\n                list.add(end);\r\n            }\r\n        }\r\n\r\n        return list.size();\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number[][]} intervals\r\n * @return {number}\r\n */\r\nvar intersectionSizeTwo = function(intervals) {\r\n    const sortedIntervals = intervals.sort(sortEndsThenStarts)\r\n    let currentTail = []\r\n    let answer = 0\r\n    sortedIntervals.forEach(interval => {\r\n        const start = interval[0]\r\n        const end = interval[1]\r\n        const startPoint = currentTail[0]\r\n        const lastPoint = currentTail[1]\r\n        \r\n        if (!currentTail.length || lastPoint < start){\r\n            currentTail = [end -1, end]\r\n            answer += 2\r\n        } else if ( startPoint < start){\r\n            currentTail = [currentTail[1], end]\r\n            answer += 1\r\n        }\r\n\r\n    })\r\n    return answer\r\n\r\n};\r\n\r\nfunction sortEndsThenStarts(intervalA, intervalB){\r\n    return intervalA[1] < intervalB[1] ? -1 : 1\r\n}"
  }
}
