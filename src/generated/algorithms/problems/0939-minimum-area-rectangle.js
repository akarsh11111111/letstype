export default {
  "id": 939,
  "name": "Minimum Area Rectangle",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-area-rectangle",
  "relativeDir": "M/Minimum Area Rectangle",
  "slug": "0939-minimum-area-rectangle",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 31,
    "java": 34,
    "python": 21,
    "javascript": 36
  },
  "languages": {
    "cpp": "// Runtime: 2865 ms (Top 5.1%) | Memory: 612.86 MB (Top 5.1%)\r\n\r\nclass Solution {\r\npublic:\r\n    int minAreaRect(vector<vector<int>>& points) {\r\n        unordered_map<int, unordered_set<int>> pts;\r\n        for(auto p : points)\r\n        {\r\n            pts[p[0]].insert(p[1]);\r\n        }\r\n        \r\n        int minArea = INT_MAX;\r\n        int n = points.size();\r\n        for(int i=0; i<n; i++)\r\n        {\r\n            for(int j=i+1; j<n; j++)\r\n            {\r\n                auto p1 = points[i];\r\n                auto p2 = points[j];\r\n                if(pts[p1[0]].size()<2 || pts[p2[0]].size()<2) continue; // added to avoid extra loop\r\n                if(p1[0]!=p2[0] && p1[1]!=p2[1]){\r\n                    if(pts[p1[0]].count(p2[1])>0 && pts[p2[0]].count(p1[1])>0) {\r\n                        minArea = min(minArea, (abs(p1[0]-p2[0]) * abs(p1[1]-p2[1])) );\r\n                    }\r\n                }\r\n                \r\n            }\r\n        }\r\n        return minArea == INT_MAX ? 0 : minArea;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def minAreaRect(self, points: List[List[int]]) -> int:\r\n        points = sorted(points, key=lambda item: (item[0], item[1]))\r\n        cols = defaultdict(list)\r\n        \r\n        for x,y in points:\r\n            cols[x].append(y)\r\n        \r\n        lastx = {}\r\n        ans = float('inf')\r\n        \r\n        for x in cols:\r\n            col = cols[x]\r\n            for i, y1 in enumerate(col):\r\n                for j in range(i):\r\n                    y2 = col[j]\r\n                    if (y2,y1) in lastx:\r\n                        ans = min(ans, abs((x-lastx[y2,y1])*(y2-y1)))\r\n                    lastx[y2,y1] = x\r\n            \r\n        return 0 if ans==float('inf') else ans",
    "java": "// Runtime: 35 ms (Top 98.98%) | Memory: 45.00 MB (Top 39.53%)\r\n\r\nclass Solution {\r\n    public int minAreaRect(int[][] points) {\r\n        HashMap<Integer,Set<Integer>> hm = new HashMap<>();\r\n        int area=Integer.MAX_VALUE;\r\n        \r\n        for(int[] point: points)\r\n        {            \r\n            if(!hm.containsKey(point[0]))\r\n                hm.put(point[0],new HashSet());        \r\n            hm.get(point[0]).add(point[1]); // x-coordinate already exits, just add the y-coordinate to the set\r\n        }\r\n        \r\n        for(int i=0;i<points.length-1;i++)\r\n        {\r\n            for(int j=i+1;j<points.length;j++)\r\n            {\r\n                int x1=points[i][0],x2=points[j][0],y1=points[i][1],y2=points[j][1]; // this step reduced the time from 368ms to 186ms\r\n                if(x1!=x2 && y1!=y2) //diagonal is not parallel to x or y axis\r\n                {\r\n                    if(area>Math.abs((x2-x1) * (y2-y1))) //pre-calulate the area to avoid unecessary lookup. This step reduced the time from 186ms to 57ms.\r\n                    {\r\n                        if(hm.get(x1).contains(y2) && hm.get(x2).contains(y1)) // learnt from other leetcoders. Thank you.\r\n                             area=Math.abs((x2-x1) * (y2-y1)); \r\n                    }\r\n                }\r\n                \r\n            }\r\n        }\r\n        \r\n        return area<Integer.MAX_VALUE? area:0;\r\n    }\r\n}",
    "javascript": "var minAreaRect = function(points) {\r\n    const mapOfPoints = new Map();\r\n    let minArea = Infinity;\r\n    for(const [x,y] of points) {\r\n        let keyString = `${x}:${y}`\r\n        mapOfPoints.set(keyString, [x, y]);\r\n    }\r\n    for(const [xLeftBottom, yLeftBottom] of points) {\r\n        for(const [xRightTop, yRightTop] of points) {\r\n            if(!foundDiagonal(xLeftBottom, yLeftBottom, xRightTop, yRightTop)) continue;\r\n            let leftTopCorner = `${xLeftBottom}:${yRightTop}`;\r\n            let rightBottomCorner = `${xRightTop}:${yLeftBottom}`;\r\n            \r\n            if(mapOfPoints.has(leftTopCorner) && mapOfPoints.has(rightBottomCorner)) {\r\n                const x2 = mapOfPoints.get(rightBottomCorner)[0];\r\n                const x1 = xLeftBottom;\r\n                const y1 = yLeftBottom;\r\n                const y2 =  mapOfPoints.get(leftTopCorner)[1]\r\n                const area = calculateArea(x1, x2, y1, y2);\r\n                \r\n                minArea = Math.min(minArea,area);\r\n            }\r\n        }\r\n        \r\n    }\r\n    return minArea === Infinity ? 0 : minArea;\r\n};\r\n\r\n\r\nfunction calculateArea(x1, x2, y1, y2) {\r\n    return ((x2-x1) * (y2-y1))\r\n}\r\n\r\nfunction foundDiagonal(xLeftBottom, yLeftBottom, xRightTop, yRightTop) {\r\n    return (xRightTop > xLeftBottom && yRightTop > yLeftBottom);\r\n}"
  }
}
