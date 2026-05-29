export default {
  "id": 223,
  "name": "Rectangle Area",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/rectangle-area",
  "relativeDir": "R/Rectangle Area",
  "slug": "0223-rectangle-area",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 20,
    "java": 21,
    "python": 6,
    "javascript": 9
  },
  "languages": {
    "cpp": "// Runtime: 17 ms (Top 23.83%) | Memory: 5.9 MB (Top 77.72%)\r\n\r\nclass Solution {\r\npublic:\r\n    int computeArea(int ax1, int ay1, int ax2, int ay2, int bx1, int by1, int bx2, int by2) {\r\n        int rec1=abs(ax2-ax1)*abs(ay2-ay1); //Area(Rectangle 1)\r\n        int rec2=abs(bx2-bx1)*abs(by2-by1); //Area(Rectangle 2)\r\n\r\n        //As explained above, if intervals overlap, max(x1,x3) < min(x2,x4) and overlapped interval\r\n        //is ( max(x1,x3) , min(x2,x4) ).\r\n\r\n        int ox1=(max(ax1,bx1)-min(ax2,bx2)); //if ox1 is negative, abs(ox1) is the length of overlapped rectangle, else rectangles do not overlap.\r\n        int oy1=(max(ay1,by1)-min(ay2,by2)); //breadth of overlapped rectangle\r\n\r\n        int rec3=0; //if rectangles do not overlap, area of overlapped rectangle is zero.\r\n        if(ox1<0&&oy1<0) //if both ox1 and oy2 are negative, two rectangles overlap.\r\n            rec3=ox1*oy1;\r\n        return rec1+rec2-rec3; //Area(Rectangle 1) + Area(Rectangle 2) - Area(Overlapped triangle)\r\n    }\r\n};",
    "python": "# Runtime: 86 ms (Top 48.63%) | Memory: 14 MB (Top 27.24%)\r\nclass Solution:\r\n    def computeArea(self, ax1: int, ay1: int, ax2: int, ay2: int, bx1: int, by1: int, bx2: int, by2: int) -> int:\r\n        def segment(ax1,ax2,bx1,bx2):\r\n            return min(ax2,bx2) - max(ax1, bx1) if max(ax1, bx1) < min(ax2, bx2) else 0\r\n        return (ax2-ax1)*(ay2-ay1) + (bx2-bx1)*(by2-by1) - segment(ax1,ax2,bx1,bx2)*segment(ay1,ay2,by1,by2)",
    "java": "// Runtime: 5 ms (Top 35.02%) | Memory: 42.9 MB (Top 64.28%)\r\nclass Solution {\r\n    public int computeArea(int ax1, int ay1, int ax2, int ay2, int bx1, int by1, int bx2, int by2) {\r\n        int x1 = Math.max(ax1,bx1);\r\n        int y1 = Math.max(ay1,by1);\r\n        int x2 = Math.min(ax2,bx2);\r\n        int y2 = Math.min(ay2,by2);\r\n\r\n        int area = 0;\r\n        int R1 = (ax2-ax1)*(ay2-ay1);\r\n        int R2 = (bx2-bx1)*(by2-by1);\r\n        area = R1 + R2;\r\n\r\n        if(x2 > x1 && y2 > y1){\r\n            int overlap = (x2-x1)*(y2-y1);\r\n            area = area - overlap;\r\n        }\r\n\r\n        return area;\r\n    }\r\n}",
    "javascript": "// Runtime: 95 ms (Top 83.5%) | Memory: 47.80 MB (Top 20.39%)\r\n\r\nvar computeArea = function(A, B, C, D, E, F, G, H) {\r\n    var intersectionWidth = Math.min(C,G) - Math.max(A,E);\r\n    var intersectionHeight = Math.min(D,H) - Math.max(B,F);\r\n    intersectionWidth = intersectionWidth > 0 ? intersectionWidth : 0;\r\n    intersectionHeight = intersectionHeight > 0 ? intersectionHeight : 0;\r\n    return (C - A) * (D - B) + (G - E) * (H - F) - intersectionWidth * intersectionHeight;\r\n};"
  }
}
