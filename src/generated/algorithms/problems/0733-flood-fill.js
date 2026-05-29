export default {
  "id": 733,
  "name": "Flood Fill",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/flood-fill",
  "relativeDir": "F/Flood Fill",
  "slug": "0733-flood-fill",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 27,
    "java": 25,
    "python": 31,
    "javascript": 42
  },
  "languages": {
    "cpp": "// Runtime: 25 ms (Top 11.09%) | Memory: 14.2 MB (Top 34.39%)\r\nclass Solution {\r\npublic:\r\n    vector<vector<int>> paths = {{0,1},{0,-1},{-1,0},{1,0}};\r\n    bool check(int i,int j , int n, int m){\r\n        if(i>=n or i<0 or j>=m or j<0) return false;\r\n        return true;\r\n    }\r\n    void solve(vector<vector<int>> &image, int sr, int sc, int color, int orig){\r\n        int n = image.size(), m = image[0].size();\r\n        image[sr][sc] = color;\r\n        for(int i=0;i<4;i++){\r\n            int new_sr = paths[i][0] + sr;\r\n            int new_sc = paths[i][1] + sc;\r\n            if(check(new_sr,new_sc,n,m)==true and image[new_sr][new_sc]==orig){\r\n                solve(image, new_sr, new_sc, color,orig);\r\n            }\r\n        }\r\n\r\n    }\r\n    vector<vector<int>> floodFill(vector<vector<int>>& image, int sr, int sc, int color) {\r\n        if(color==image[sr][sc]) return image;\r\n        int orig = image[sr][sc];\r\n        solve(image, sr,sc,color, orig);\r\n        return image;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def floodFill(self, image: List[List[int]], sr: int, sc: int, color: int) -> List[List[int]]:\r\n        queue = deque()\r\n        rows = len(image)\r\n        cols = len(image[0])\r\n        \r\n        targetColor = image[sr][sc]\r\n        \r\n        if color == targetColor:\r\n\t\t    # in this case, we don't need to do anything\r\n            return image\r\n\r\n        rDirs = [1, 0, -1, 0]\r\n        cDirs = [0, 1, 0, -1]\r\n        \r\n        queue.append((sr, sc))\r\n        \r\n        while len(queue) > 0:\r\n            r, c = queue.pop()\r\n            \r\n            image[r][c] = color\r\n            for rd, cd in zip(rDirs, cDirs):\r\n                newRow = r + rd\r\n                newCol = c + cd\r\n                \r\n                isValidCoordinate = newRow >= 0 and newRow < rows and newCol >= 0 and newCol < cols\r\n                \r\n                if isValidCoordinate and image[newRow][newCol] == targetColor:\r\n                    queue.append((newRow, newCol))\r\n        \r\n        return image",
    "java": "// Runtime: 1 ms (Top 91.13%) | Memory: 48.4 MB (Top 21.53%)\r\nclass Solution {\r\n    void colorFill(int[][]image,int sr,int sc,int sourceColor,int targetColor){\r\n        int m = image.length, n = image[0].length;\r\n\r\n        if(sr>=0 && sr<m && sc>=0 && sc<n)\r\n        {\r\n            if( (image[sr][sc] != sourceColor) ||(image[sr][sc] == targetColor)) return;\r\n\r\n        image[sr][sc] = targetColor;\r\n        colorFill(image,sr,sc-1,sourceColor,targetColor); // left\r\n        colorFill(image,sr,sc+1,sourceColor,targetColor); // right\r\n        colorFill(image,sr-1,sc,sourceColor,targetColor); // up\r\n        colorFill(image,sr+1,sc,sourceColor,targetColor); // down\r\n        }\r\n       else\r\n           return;\r\n    }\r\n    public int[][] floodFill(int[][] image, int sr, int sc, int color) {\r\n        int rows = image.length, cols = image[0].length;\r\n\r\n        colorFill(image,sr,sc,image[sr][sc],color);\r\n    return image;\r\n    }\r\n}",
    "javascript": "// Runtime: 149 ms (Top 9.09%) | Memory: 44.8 MB (Top 18.89%)\r\n/**\r\n * @param {number[][]} image\r\n * @param {number} sr\r\n * @param {number} sc\r\n * @param {number} color\r\n * @return {number[][]}\r\n */\r\nvar floodFill = function(image, sr, sc, color) {\r\n    const pixelsToCheck = [[sr, sc]]\r\n    const startingPixelColor = image[sr][sc]\r\n    const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]]\r\n    const seenPixels = new Set()\r\n\r\n    if (\r\n        startingPixelColor === undefined ||\r\n        startingPixelColor === color\r\n    ) return image\r\n\r\n    for (const pixel of pixelsToCheck) {\r\n        const currentPixelColor = image[pixel[0]]?.[pixel[1]]\r\n\r\n        if (\r\n            currentPixelColor === undefined ||\r\n            startingPixelColor !== currentPixelColor\r\n        ) continue\r\n\r\n        image[pixel[0]][pixel[1]] = color\r\n\r\n        for (const direction of directions) {\r\n            const newPixel = [pixel[0] + direction[0], pixel[1] + direction[1]]\r\n            const pixelString = newPixel.join()\r\n\r\n            if (seenPixels.has(pixelString)) continue\r\n\r\n            pixelsToCheck.push(newPixel)\r\n            seenPixels.add(pixelString)\r\n        }\r\n    }\r\n\r\n    return image\r\n};"
  }
}
