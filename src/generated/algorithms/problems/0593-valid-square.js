export default {
  "id": 593,
  "name": "Valid Square",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/valid-square",
  "relativeDir": "V/Valid Square",
  "slug": "0593-valid-square",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 18,
    "java": 24,
    "python": 11,
    "javascript": 19
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool validSquare(vector<int>& p1, vector<int>& p2, vector<int>& p3, vector<int>& p4) {\r\n        vector<vector<int>> p{p1, p2, p3, p4};\r\n        unsigned short ans{0};\r\n        double scal;\r\n        vector<double> bar(2);\r\n        /* compute the barycenter */ \r\n        bar[0] = (p1[0] + p2[0] + p3[0] + p4[0]) / 4.;\r\n        bar[1] = (p1[1] + p2[1] + p3[1] + p4[1]) / 4.;\r\n        const double length = pow(p1[0]-bar[0],2) + pow(p1[1] - bar[1],2);\r\n        for (size_t i=0; i<4; i++) {if ((pow(p[i][0]-bar[0], 2) + pow(p[i][1] - bar[1], 2)) != length) return false; \r\n            for (size_t j=i+1; j<4;j++){\r\n                scal = (bar[0] - p[i][0])*(bar[0] - p[j][0]) + (bar[1] - p[i][1])*(bar[1]- p[j][1]);\r\n                ans += (scal==0.)?1:0;}}\r\n        return  ans==4;\r\n    }\r\n};",
    "python": "# Runtime: 65 ms (Top 24.05%) | Memory: 13.9 MB (Top 50.57%)\r\nclass Solution:\r\n    def validSquare(self, p1, p2, p3, p4):\r\n\r\n        def cal(A, B):\r\n            return abs(A[0] - B[0]) + abs(A[1] - B[1])\r\n\r\n        d = [cal(p1, p2), cal(p1, p3), cal(p1, p4), cal(p2, p3), cal(p2, p4), cal(p3, p4)]\r\n        d.sort()\r\n\r\n        return 0 < d[0] == d[1] == d[2] == d[3] and d[4] == d[5]",
    "java": "// Runtime: 1 ms (Top 81.1%) | Memory: 40.42 MB (Top 51.8%)\r\n\r\nclass Solution {\r\n    // This method returns true if the given 4 points form a square, false otherwise\r\n    public boolean validSquare(int[] p1, int[] p2, int[] p3, int[] p4) {\r\n        // We use a set to store the distances between the points\r\n        Set<Integer> set = new HashSet();\r\n        // Calculate the distances between all pairs of points and add them to the set\r\n        set.add(distanceSquare(p1,p2));\r\n        set.add(distanceSquare(p1,p3));\r\n        set.add(distanceSquare(p1,p4));\r\n        set.add(distanceSquare(p2,p3));\r\n        set.add(distanceSquare(p2,p4));\r\n        set.add(distanceSquare(p3,p4));\r\n        // A square must have 4 equal sides, so the set must contain 2 different values (the lengths of the sides and the diagonals)\r\n        // The set should not contain 0, as that would mean that two points have the same coordinates\r\n        return !set.contains(0) && set.size() == 2;\r\n    }\r\n    // This method calculates the distance between two points and returns its square\r\n    private int distanceSquare(int[] a, int[] b){\r\n        // We use the Pythagorean theorem to calculate the distance between the points\r\n        return (a[0]-b[0])*(a[0]-b[0]) + (a[1]-b[1])*(a[1]-b[1]);\r\n    }\r\n}",
    "javascript": "// Runtime: 83 ms (Top 69.32%) | Memory: 42.8 MB (Top 62.50%)\r\nvar validSquare = function(p1, p2, p3, p4) {\r\n    const distance = (a, b) => {\r\n        const [aX, aY] = a;\r\n        const [bX, bY] = b;\r\n        return (aX - bX) ** 2 + (aY - bY) ** 2;\r\n    };\r\n\r\n    const set = new Set([\r\n        distance(p1, p2),\r\n        distance(p1, p3),\r\n        distance(p1, p4),\r\n        distance(p2, p3),\r\n        distance(p2, p4),\r\n        distance(p3, p4),\r\n    ]);\r\n\r\n    return !set.has(0) && set.size === 2;\r\n};"
  }
}
