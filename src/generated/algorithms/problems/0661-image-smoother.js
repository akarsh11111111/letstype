export default {
  "id": 661,
  "name": "Image Smoother",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/image-smoother",
  "relativeDir": "I/Image Smoother",
  "slug": "0661-image-smoother",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 27,
    "java": 53,
    "python": 18
  },
  "languages": {
    "cpp": "// Runtime: 143 ms (Top 11.55%) | Memory: 21.8 MB (Top 55.12%)\r\nclass Solution {\r\npublic:\r\n    vector<vector<int>> imageSmoother(vector<vector<int>>& img) {\r\n        int row[]={0,0,0,-1,1,-1,1,-1,1};\r\n        int col[]={0,-1,1,0,0,1,-1,-1,1};\r\n        int m=img.size(),n=img[0].size();\r\n        vector<vector<int>>ans(m,vector<int>(n,0));\r\n        for(int i=0;i<m;i++)\r\n        {\r\n            for(int j=0;j<n;j++)\r\n            {\r\n                int sum=0,count=0;\r\n                for(int k=0;k<9;k++)\r\n                {\r\n                    if(0<=i+row[k] && i+row[k]<m && 0<=j+col[k] && j+col[k]<n)\r\n                    {\r\n                        sum+=img[i+row[k]][j+col[k]];\r\n                        count++;\r\n                    }\r\n                }\r\n                ans[i][j]=sum/count;\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 1147 ms (Top 25.09%) | Memory: 14.8 MB (Top 29.59%)\r\nclass Solution:\r\n    def imageSmoother(self, img: List[List[int]]) -> List[List[int]]:\r\n        m, n = len(img), len(img[0])\r\n\r\n        def avg(i, j):\r\n            s = squares = 0\r\n            top, bottom = max(0, i - 1), min(m, i + 2)\r\n            left, right = max(0, j - 1), min(n, j + 2)\r\n\r\n            for x in range(top, bottom):\r\n                for y in range(left, right):\r\n                    s += img[x][y]\r\n                    squares += 1\r\n\r\n            return s // squares\r\n\r\n        return [[avg(i, j) for j in range(n)] for i in range(m)]",
    "java": "/**\r\n * Constant Space Solution. Using input array to store the average\r\n * This solution can be modified to work if numbers are upto 2^16 - 1 (65,535).\r\n *\r\n * Time Complexity: O(8*M*N + M*N) = O(M*N)\r\n *\r\n * Space Complexity: O(1)\r\n *\r\n * M = Number of rows. N = Number of columns.\r\n * \r\n * Note: Similar to \"289. Game of Life\"\r\n */\r\nclass Solution {\r\n    private static final int[][] DIRS = { { 0, 1 }, { 1, 1 }, { 1, 0 }, { 1, -1 }, { 0, -1 }, { -1, -1 }, { -1, 0 }, { -1, 1 } };\r\n\r\n    public int[][] imageSmoother(int[][] img) {\r\n        if (img == null) {\r\n            throw new IllegalArgumentException(\"Input image is null\");\r\n        }\r\n        if (img.length == 0 || img[0].length == 0) {\r\n            return img;\r\n        }\r\n\r\n        int rows = img.length;\r\n        int cols = img[0].length;\r\n        if (rows == 1 && cols == 1) {\r\n            return img;\r\n        }\r\n\r\n        for (int i = 0; i < rows; i++) {\r\n            for (int j = 0; j < cols; j++) {\r\n                int sum = img[i][j];\r\n                int count = 1;\r\n                for (int[] d : DIRS) {\r\n                    int x = i + d[0];\r\n                    int y = j + d[1];\r\n                    if (x >= 0 && x < rows && y >= 0 && y < cols) {\r\n                        sum += img[x][y] & 0xFF;\r\n                        count++;\r\n                    }\r\n                }\r\n                img[i][j] |= (sum / count) << 8;\r\n            }\r\n        }\r\n        for (int i = 0; i < rows; i++) {\r\n            for (int j = 0; j < cols; j++) {\r\n                img[i][j] >>>= 8;\r\n            }\r\n        }\r\n\r\n        return img;\r\n    }\r\n}"
  }
}
