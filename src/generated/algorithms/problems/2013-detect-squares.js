export default {
  "id": 2013,
  "name": "Detect Squares",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/detect-squares",
  "relativeDir": "D/Detect Squares",
  "slug": "2013-detect-squares",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 42,
    "java": 27,
    "python": 57
  },
  "languages": {
    "cpp": "// Runtime: 554 ms (Top 45.63%) | Memory: 94.8 MB (Top 47.30%)\r\nclass DetectSquares {\r\npublic:\r\n    vector<unordered_map<int, int>> x_axis;\r\n\r\n    DetectSquares() {\r\n        x_axis = vector<unordered_map<int, int>>(1005);\r\n    }\r\n\r\n    void add(vector<int> point) {\r\n        int x = point[0];\r\n        int y = point[1];\r\n        x_axis[x][y]++;\r\n    }\r\n\r\n    int count(vector<int> point) {\r\n        int x = point[0], y = point[1];\r\n        int res = 0;\r\n        for (auto& it : x_axis[x]) { // For all points lying on x_axis with value x_coordinate = x\r\n            int y_coord = it.first;\r\n            int countOcc = it.second;\r\n\r\n            if (y == y_coord) continue;\r\n            int sideLength = abs(y_coord - y);\r\n\r\n             // counting for p3' and p4'\r\n            if (x + sideLength <= 1000) // x_coordinate should be within range [0, 1000]\r\n            {\r\n                int newX = x + sideLength;\r\n                res += x_axis[x][y_coord] * x_axis[newX][y_coord] * x_axis[newX][y];\r\n            }\r\n\r\n            // counting for p3'' and p4''\r\n            if (x - sideLength >= 0) // x_coordinate should be within range [0, 1000]\r\n            {\r\n                int newX = x - sideLength;\r\n                res += x_axis[x][y_coord] * x_axis[newX][y_coord] * x_axis[newX][y];\r\n            }\r\n        }\r\n        return res;\r\n    }\r\n};",
    "python": "# Runtime: 658 ms (Top 42.61%) | Memory: 16 MB (Top 39.48%)\r\n\"\"\"\r\nStore every points and number of their appearance\r\nGroup the points by their x value\r\n\r\nGiven a point(x1,y1) to count, try to find p2(x1,y2),p3(x2,y2),p4(x2,y1)\r\nand add product of their appearances\r\n\r\nGo through every points that has same x1(except the point that is the same as (x1,y1), the length of the side of the square is decided by abd(y2-y1).\r\n\r\nUse the decided side length to calculate p3 and p4, see if they are in the dict. If do, add product of their appearances.\r\n\r\np3 p2 p3`\r\n\r\np4 p1 p4`\r\n\r\nNotice that p3 and p4 can be on both left side and right side of side (p2,p1)\r\n\r\n\"\"\"\r\nfrom collections import defaultdict\r\nclass DetectSquares:\r\n\r\n    def __init__(self):\r\n        self.pts=defaultdict(int)\r\n        self.by_x=defaultdict(set)\r\n\r\n    def add(self, point: List[int]) -> None:\r\n        self.pts[(point[0],point[1])]+=1\r\n        self.by_x[point[0]].add((point[0],point[1]))\r\n\r\n    def count(self, p1: List[int]) -> int:\r\n        res=0\r\n        x1,y1=p1[0],p1[1]\r\n        if x1 in self.by_x:\r\n            #p2:x1,y2\r\n            for p2 in self.by_x[x1]:\r\n                x2,y2=p2\r\n                if y1==y2:\r\n                    continue\r\n                #length of side of square\r\n                b=abs(y1-y2)\r\n                #left side\r\n                p3=(x1-b,y2)\r\n                p4=(x1-b,y1)\r\n                if p3 in self.pts and p4 in self.pts:\r\n                    res+=self.pts[p2]*self.pts[p3]*self.pts[p4]\r\n                #right side\r\n                p3=(x1+b,y2)\r\n                p4=(x1+b,y1)\r\n                if p3 in self.pts and p4 in self.pts:\r\n                    res+=self.pts[p2]*self.pts[p3]*self.pts[p4]\r\n        return res\r\n\r\n# Your DetectSquares object will be instantiated and called as such:\r\n# obj = DetectSquares()\r\n# obj.add(point)\r\n# param_2 = obj.count(point)",
    "java": "class DetectSquares {\r\n    List<int[]> coordinates;\r\n    Map<String, Integer> counts;\r\n    \r\n    public DetectSquares() {\r\n        coordinates = new ArrayList<>();\r\n        counts = new HashMap<>();\r\n    }\r\n    \r\n    public void add(int[] point) {\r\n        coordinates.add(point);\r\n        String key = point[0] + \"@\" + point[1];\r\n        counts.put(key, counts.getOrDefault(key, 0) + 1);\r\n    }\r\n    \r\n    public int count(int[] point) {\r\n        int sum = 0, px = point[0], py = point[1];\r\n        for (int[] coordinate : coordinates) {\r\n            int x = coordinate[0], y = coordinate[1];\r\n            if (px == x || py == y || (Math.abs(px - x) != Math.abs(py - y)))\r\n                continue;\r\n            sum += counts.getOrDefault(x + \"@\" + py, 0) * counts.getOrDefault(px + \"@\" + y, 0);\r\n        }\r\n        \r\n        return sum;\r\n    }\r\n}"
  }
}
