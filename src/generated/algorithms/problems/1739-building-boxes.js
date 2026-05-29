export default {
  "id": 1739,
  "name": "Building Boxes",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/building-boxes",
  "relativeDir": "B/Building Boxes",
  "slug": "1739-building-boxes",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 45,
    "java": 53,
    "python": 13,
    "javascript": 16
  },
  "languages": {
    "cpp": "// Runtime: 2 ms (Top 64.56%) | Memory: 6.40 MB (Top 55.7%)\r\n\r\nclass Solution {\r\nprivate:\r\n    int getLayerSize(int x){\r\n        return x * (x+1) / 2;\r\n    }\r\n    int getCubeSize(int x){\r\n        long d = static_cast<long>(x);\r\n        long sz = (d * (d+1) * (d+2)) / 6;\r\n        return static_cast<int>(sz);\r\n    }\r\npublic:\r\n\r\n    int minimumBoxes(int n) {\r\n        // First Binary Search\r\n        int l(0), r(2000), m;\r\n        while(l <= r)\r\n        {\r\n            m = (l+r)/2;\r\n            int sz = getCubeSize(m);\r\n            if(sz <= n)\r\n                l = m + 1;\r\n            else\r\n                r = m - 1;\r\n        }\r\n        int aSideOfPyramid = r;\r\n        int rest = n - getCubeSize(aSideOfPyramid);\r\n        \r\n\t\t// Second Binary Search\r\n        l=0,r=2000;\r\n        while(l <= r)\r\n        {\r\n            m = (l+r)/2;\r\n            int sz = getLayerSize(m);\r\n            if(sz < rest)\r\n                l = m + 1;\r\n            else\r\n                r = m - 1;\r\n        }\r\n        int addedFloorCubic = l;\r\n\r\n        return getLayerSize(aSideOfPyramid) + addedFloorCubic;\r\n    }\r\n};",
    "python": "# Runtime: 68 ms (Top 24.24%) | Memory: 13.9 MB (Top 54.55%)\r\nclass Solution:\r\n    def minimumBoxes(self, n: int) -> int:\r\n        r = 0\r\n        while (n_upper := r*(r+1)*(r+2)//6) < n:\r\n            r += 1\r\n        m = r*(r+1)//2\r\n        for i in range(r, 0, -1):\r\n            if (n_upper - i) < n:\r\n                break\r\n            n_upper -= i\r\n            m -= 1\r\n        return m",
    "java": "class Solution {\r\n\r\n    static final double ONE_THIRD = 1.0d / 3.0d;\r\n\r\n    public int minimumBoxes(int n) {\r\n        int k = findLargestTetrahedralNotGreaterThan(n);\r\n        int used = tetrahedral(k);\r\n        int floor = triangular(k);\r\n        int unused = (n - used);\r\n        if (unused == 0) {\r\n            return floor;\r\n        }\r\n        int r = findSmallestTriangularNotLessThan(unused);\r\n        return (floor + r);\r\n    }\r\n\r\n    private final int findLargestTetrahedralNotGreaterThan(int te) {\r\n        int a = (int) Math.ceil(Math.pow(product(6, te), ONE_THIRD));\r\n        while (tetrahedral(a) > te) {\r\n            a--;\r\n        }\r\n        return a;\r\n    }\r\n\r\n    private final int findSmallestTriangularNotLessThan(int t) {\r\n        int a = -1 + (int) Math.floor(Math.sqrt(product(t, 2)));\r\n        while (triangular(a) < t) {\r\n            a++;\r\n        }\r\n        return a;\r\n    }\r\n\r\n    private final int tetrahedral(int a) {\r\n        return (int) ratio(product(a, a + 1, a + 2), 6);\r\n    }\r\n\r\n    private final int triangular(int a) {\r\n        return (int) ratio(product(a, a + 1), 2);\r\n    }\r\n\r\n    private final long product(long... vals) {\r\n        long product = 1L;\r\n        for (long val : vals) {\r\n            product *= val;\r\n        }\r\n        return product;\r\n    }\r\n\r\n    private final long ratio(long a, long b) {\r\n        return (a / b);\r\n    }\r\n\r\n}",
    "javascript": "var minimumBoxes = function(n) {\r\n    //Binary search for the height of the biggest triangle I can create with n cubes available.\r\n    let lo=1,hi=n,result\r\n    let totalCubes=x=>x*(x+1)*(x+2)/6 //the total cubes of a triangle with height x \r\n    while(lo+1<hi){\r\n        let mid=lo+hi>>1\r\n        if(totalCubes(mid)<=n)\r\n            lo=mid\r\n        else \r\n            hi=mid\r\n    }\r\n\tlet f=(x)=>Math.floor(Math.sqrt(2*x)+1/2)// the i-th element of the sequence 1,2,2,3,3,3,4,4,4,4,5,...\r\n    result=(lo)*(lo+1)/2// the base of the largest complete triangle 1+2+3+..+H\r\n    n-=totalCubes(lo) //remove the cubes of the complete triangle\r\n    return result+f(n)  // the base of the largest+ the extra floor cubes\r\n};"
  }
}
