export default {
  "id": 1637,
  "name": "Widest Vertical Area Between Two Points Containing No Points",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points",
  "relativeDir": "W/Widest Vertical Area Between Two Points Containing No Points",
  "slug": "1637-widest-vertical-area-between-two-points-containing-no-points",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 12,
    "java": 21,
    "python": 12,
    "javascript": 11
  },
  "languages": {
    "cpp": "// Runtime: 304 ms (Top 89.53%) | Memory: 66.3 MB (Top 79.15%)\r\nclass Solution {\r\npublic:\r\n    int maxWidthOfVerticalArea(vector<vector<int>>& points) {\r\n        sort(begin(points),end(points));\r\n        int n=points.size();\r\n        int m=0;\r\n        for(int i=0;i<n-1;i++)\r\n            m=max(points[i+1][0]-points[i][0],m);\r\n        return m;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def maxWidthOfVerticalArea(self, points: List[List[int]]) -> int:\r\n        # only taking x-axis point as it's relevant\r\n        arr = [i[0] for i in points]\r\n        \r\n        arr.sort()\r\n        \r\n        diff = -1\r\n        for i in range(1, len(arr)):\r\n            diff = max(diff, arr[i] - arr[i - 1])\r\n        \r\n        return diff",
    "java": "// Runtime: 13 ms (Top 100.00%) | Memory: 70.5 MB (Top 87.78%)\r\nclass Solution {\r\n    public int maxWidthOfVerticalArea(int[][] points) {\r\n        int L = points.length;\r\n        // y-coordinate of a point does not matter in width\r\n        int arr[] = new int[L];\r\n        for(int i=0;i<L;i++){\r\n            arr[i]=points[i][0];\r\n        }\r\n        Arrays.sort(arr);\r\n\r\n        int diff = Integer.MIN_VALUE;\r\n\r\n        for(int i=1;i<L;i++){\r\n            if((arr[i]-arr[i-1])>diff){\r\n                diff=arr[i]-arr[i-1];\r\n            }\r\n        }\r\n        return diff;\r\n    }\r\n}",
    "javascript": "var maxWidthOfVerticalArea = function(points) {\r\n    let ans = 0;\r\n    points = points.map(item => item[0]).sort((a, b) => a - b);\r\n    \r\n    for(let i = 1; i < points.length; i++){\r\n        \r\n        ans = Math.max(ans, points[i] - points[i-1]);\r\n    }\r\n        \r\n    return ans;\r\n};"
  }
}
