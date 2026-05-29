export default {
  "id": 452,
  "name": "Minimum Number of Arrows to Burst Balloons",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons",
  "relativeDir": "M/Minimum Number of Arrows to Burst Balloons",
  "slug": "0452-minimum-number-of-arrows-to-burst-balloons",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 25,
    "java": 69,
    "python": 11,
    "javascript": 25
  },
  "languages": {
    "cpp": "// Runtime: 920 ms (Top 16.77%) | Memory: 89.8 MB (Top 27.22%)\r\n\r\nclass Solution {\r\npublic:\r\n    static bool cmp(vector<int>&a,vector<int>&b)\r\n    {\r\n        return a[1]<b[1];\r\n    }\r\n    int findMinArrowShots(vector<vector<int>>& points) {\r\n        sort(points.begin(),points.end(),cmp);\r\n        //burst the first ballon at least\r\n        int arrow=1;\r\n        int end=points[0][1];\r\n        for(int i=1;i<points.size();i++)\r\n        {\r\n            //start time of other interval is greater than current end time means we need one more arrow for bursting it\r\n            if(points[i][0]>end)\r\n            {\r\n                arrow++;\r\n                end=points[i][1];\r\n            }\r\n        }\r\n        return arrow;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def findMinArrowShots(self, points: List[List[int]]) -> int:\r\n        points.sort()\r\n        \r\n        ans=[points[0]]\r\n        for i in points[1:]:\r\n            if(i[0]<=ans[-1][1]):\r\n                ans[-1]=[ans[-1][0],min(ans[-1][1],i[1])]\r\n            else:\r\n                ans.append(i)\r\n        return len(ans)",
    "java": "// Runtime: 56 ms (Top 51.6%) | Memory: 74.38 MB (Top 92.9%)\r\n\r\nclass Solution {\r\n    public int findMinArrowShots(int[][] points) {\r\n        \r\n        int minNumArrows = 1;\r\n        Arrays.sort(points, new Comparator<int[]>(){\r\n            @Override\r\n            public int compare(int[] i1, int[] i2)\r\n            {\r\n                if(i1[0] < i2[0])\r\n                    return -1;\r\n                else if (i1[0] > i2[0])\r\n                    return 1;\r\n                return 0;\r\n            }\r\n        });\r\n            \r\n        // This is where they will trip you up ( at the merge stage )\r\n        // Wait ... do we actually have to merge here? The intervals have been sorted already\r\n        // No you must merge\r\n        // See if they can be merged\r\n        // If mergeable - overwrite OR write into a new subintervals code ( new ArrayList ) \r\n        // Ok ... so first we compare (a1,a2) and then next step compare (a2,a3)\r\n        // Now if (a1,a2) had an overlap -> why not make the next a2 = merged(a1,a2)? \r\n        // That would do a carry over effect then\r\n        int n = points.length;\r\n        int[] candid = new int[2];  // always first interval anyways\r\n        candid[0] = points[0][0];\r\n        candid[1] = points[0][1];\r\n        for(int i = 1; i < n; i++)\r\n        {\r\n            // System.out.printf(\"Current set = (%d,%d)\\n\", candid[0], candid[1]);\r\n            int[] next = points[i];\r\n            if(hasOverlap(candid,next))\r\n            {\r\n                int[] merged = mergeInterval(candid,next);\r\n                candid[0] = merged[0];\r\n                candid[1] = merged[1];\r\n            }\r\n            else\r\n            {\r\n                candid[0] = next[0];\r\n                candid[1] = next[1];                \r\n                minNumArrows++;\r\n            }\r\n        }\r\n         \r\n        return minNumArrows;\r\n    }\r\n    \r\n    public boolean hasOverlap(int[] i1, int[] i2)\r\n    {\r\n        boolean hasOverlap = false;\r\n        if(i1[0] <= i2[0] && i2[0] <= i1[1])\r\n            hasOverlap = true;\r\n        if(i2[0] <= i1[0] && i1[0] <= i2[1])\r\n            hasOverlap = true;\r\n        return hasOverlap;\r\n    }\r\n    \r\n    public int[] mergeInterval(int[] i1, int[] i2)\r\n    {\r\n        int[] merged = new int[2];\r\n        merged[0] = Math.max(i1[0],i2[0]);\r\n        merged[1] = Math.min(i1[1],i2[1]);\r\n        return merged;\r\n    }\r\n}",
    "javascript": "// Runtime: 472 ms (Top 21.43%) | Memory: 73.8 MB (Top 80.95%)\r\nvar findMinArrowShots = function(points) {\r\n    points.sort((a, b) => a[0] - b[0])\r\n\r\n    let merged = [points[0]];\r\n\r\n    let earliestEnd = points[0][1];\r\n\r\n    for (let i = 1; i < points.length; i++) {\r\n        let lastEnd = merged[merged.length - 1][1];\r\n        let currStart = points[i][0];\r\n        let currEnd = points[i][1];\r\n\r\n        if (lastEnd >= currStart && currStart <= earliestEnd) {\r\n            merged[merged.length - 1][1] = Math.max(lastEnd, currEnd)\r\n            earliestEnd = Math.min(earliestEnd, points[i][1]);\r\n        }\r\n        else {\r\n            merged.push(points[i])\r\n            earliestEnd = points[i][1]\r\n        }\r\n    }\r\n\r\n    return merged.length\r\n};"
  }
}
