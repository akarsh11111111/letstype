export default {
  "id": 1465,
  "name": "Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts",
  "relativeDir": "M/Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts",
  "slug": "1465-maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 29,
    "java": 21,
    "python": 20,
    "javascript": 13
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int maxArea(int h, int w, vector<int>& horizontalCuts, vector<int>& verticalCuts) {\r\n        int mod = 1e9 + 7;\r\n        sort(horizontalCuts.begin(), horizontalCuts.end());\r\n        sort(verticalCuts.begin(), verticalCuts.end());\r\n        // cout << 1;\r\n        horizontalCuts.push_back(h);\r\n        verticalCuts.push_back(w);\r\n        // cout << 1;\r\n        int prev = 0;\r\n        int vert = INT_MIN, hori = INT_MIN;\r\n        for(int i = 0; i < verticalCuts.size(); i++)\r\n        {\r\n            if(vert < verticalCuts[i]-prev)\r\n                vert = verticalCuts[i]-prev;\r\n            prev = verticalCuts[i];\r\n        }\r\n        //cout << 1;\r\n        prev = 0;\r\n        for(int i = 0; i < horizontalCuts.size(); i++)\r\n        {\r\n            if(hori < horizontalCuts[i]-prev)\r\n                hori = horizontalCuts[i]-prev;\r\n            prev = horizontalCuts[i];\r\n        }\r\n        return ((long long)vert*hori) % mod;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def maxArea(self, h: int, w: int, horizontalCuts: List[int], verticalCuts: List[int]) -> int:\r\n        horizontalCuts.sort()\r\n        verticalCuts.sort()\r\n        \r\n        mxHr = 0\r\n        prev = 0\r\n        for i in horizontalCuts:\r\n            mxHr = max(mxHr, i-prev)\r\n            prev = i\r\n        mxHr = max(mxHr, h-horizontalCuts[-1])\r\n        \r\n        mxVr = 0\r\n        prev = 0\r\n        for i in verticalCuts:\r\n            mxVr = max(mxVr, i-prev)\r\n            prev = i\r\n        mxVr = max(mxVr, w-verticalCuts[-1])\r\n        \r\n        return (mxHr * mxVr) % ((10 ** 9) + 7)",
    "java": "import java.math.BigInteger;\r\nclass Solution {\r\n    public int maxArea(int h, int w, int[] horizontalCuts, int[] verticalCuts) {\r\n        Arrays.sort(horizontalCuts);\r\n        Arrays.sort(verticalCuts);\r\n        int i;\r\n        int hMax=horizontalCuts[0];\r\n        for(i=1;i<horizontalCuts.length;i++)\r\n            // if(hMax < horizontalCuts[i]-horizontalCuts[i-1])\r\n                hMax=Math.max(hMax,horizontalCuts[i]-horizontalCuts[i-1]);\r\n        if(h-horizontalCuts[horizontalCuts.length-1] > hMax)\r\n            hMax= h-horizontalCuts[horizontalCuts.length-1];\r\n        int vMax=verticalCuts[0];\r\n        for(i=1;i<verticalCuts.length;i++)\r\n            // if(vMax < verticalCuts[i]-verticalCuts[i-1])\r\n                vMax=Math.max(vMax,verticalCuts[i]-verticalCuts[i-1]);\r\n        if(w-verticalCuts[verticalCuts.length-1] > vMax)\r\n            vMax= w-verticalCuts[verticalCuts.length-1];\r\n        return (int)((long)hMax*vMax%1000000007);\r\n    }\r\n}",
    "javascript": "var maxArea = function(h, w, horizontalCuts, verticalCuts) {\r\n    horizontalCuts.sort((a,b) => a-b)\r\n    verticalCuts.sort((a,b) => a-b)\r\n    let max_hor_dis = Math.max(horizontalCuts[0], h - horizontalCuts[horizontalCuts.length-1])\r\n    let max_ver_dis = Math.max(verticalCuts[0], w - verticalCuts[verticalCuts.length-1])\r\n    for(let i=1; i<horizontalCuts.length; i++){\r\n        max_hor_dis = Math.max(max_hor_dis, horizontalCuts[i] - horizontalCuts[i-1])\r\n    }\r\n    for(let i=1; i<verticalCuts.length; i++){\r\n        max_ver_dis = Math.max(max_ver_dis, verticalCuts[i] - verticalCuts[i-1])\r\n    }\r\n    return BigInt(max_hor_dis) * BigInt(max_ver_dis) % BigInt(1e9+7)\r\n};"
  }
}
