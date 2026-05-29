export default {
  "id": 56,
  "name": "Merge Intervals",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/merge-intervals",
  "relativeDir": "M/Merge Intervals",
  "slug": "0056-merge-intervals",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 21,
    "java": 31,
    "python": 12,
    "javascript": 28
  },
  "languages": {
    "cpp": "// Runtime: 48 ms (Top 77.18%) | Memory: 19 MB (Top 66.50%)\r\n\r\nclass Solution {\r\npublic:\r\n    vector<vector<int>> merge(vector<vector<int>>& intervals) {\r\n        sort(intervals.begin(), intervals.end());\r\n        vector<vector<int>> res;\r\n        int i=0;\r\n        while(i<=intervals.size()-1){\r\n            int start=intervals[i][0];\r\n            int end=intervals[i][1];\r\n            while(i<intervals.size()-1 && end>=intervals[i+1][0]){\r\n                i++;\r\n                if(end<intervals[i][1]) end=intervals[i][1];\r\n            }\r\n            i++;\r\n            res.push_back({start, end});\r\n        }\r\n        return res;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def merge(self, A: List[List[int]]) -> List[List[int]]:\r\n\t#sort array wrt its 0'th index\r\n        A.sort(key=lambda x:x[0])\r\n        i=0\r\n        while i<(len(A)-1):\r\n            if A[i][1]>=A[i+1][0]:\r\n                A[i][1]=max(A[i+1][1],A[i][1])\r\n                A.pop(i+1)\r\n            else:\r\n                i+=1\r\n        return(A)",
    "java": "// Runtime: 12 ms (Top 74.73%) | Memory: 55.4 MB (Top 43.78%)\r\nclass Solution {\r\n    public int[][] merge(int[][] intervals) {\r\n        // sort\r\n        // unknown size of ans = use ArrayList\r\n        // insert from back\r\n            // case 1 : Merging\r\n                // start of new interval is less that end of old interval\r\n                // new end = Math.max(new intervals end, old intervals end)\r\n            // case 2 : Non-merging\r\n                // seperate interval\r\n        // convert ArrayList to array and return\r\n\r\n        Arrays.sort(intervals, (a,b) -> a[0]-b[0]);\r\n        ArrayList<int[]> list = new ArrayList<>();\r\n        for(int i = 0; i < intervals.length; i++) {\r\n            if(i == 0) {\r\n                list.add(intervals[i]);\r\n            } else {\r\n                int[] prev = list.get(list.size()-1);\r\n                int[] curr = intervals[i];\r\n                if(curr[0] <= prev[1]) {\r\n                    prev[1] = Math.max(curr[1], prev[1]);\r\n                }else {\r\n                    list.add(curr);\r\n                }\r\n            }\r\n        }\r\n        return list.toArray(new int[list.size()][2]);\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number[][]} intervals\r\n * @return {number[][]}\r\n */\r\n\r\nvar merge = function(intervals) {\r\n    // sorting the intervals array first is a general good first step\r\n    intervals.sort((a,b) => a[0] - b[0]);\r\n    const result = [];\r\n    // i am using the result array as a way to compare previous and next intervals\r\n    result.push(intervals[0])\r\n    for (let i=1; i<intervals.length; i++) {\r\n        const prevInterval = result[result.length-1]\r\n        const interval = intervals[i]\r\n        \r\n        if (prevInterval[1] >= interval[0]) {\r\n            // overlap detected\r\n            const [ l, r ] = result.pop();\r\n            // if overlap, merge intervals by taking min/max of both boundaries\r\n            const newL = Math.min(l, interval[0])\r\n            const newR = Math.max(r, interval[1])\r\n            result.push([newL, newR])\r\n        } else {\r\n            result.push(intervals[i])\r\n        }\r\n    }\r\n    return result\r\n};"
  }
}
