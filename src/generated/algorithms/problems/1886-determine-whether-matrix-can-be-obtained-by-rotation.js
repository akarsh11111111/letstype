export default {
  "id": 1886,
  "name": "Determine Whether Matrix Can Be Obtained By Rotation",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/determine-whether-matrix-can-be-obtained-by-rotation",
  "relativeDir": "D/Determine Whether Matrix Can Be Obtained By Rotation",
  "slug": "1886-determine-whether-matrix-can-be-obtained-by-rotation",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 27,
    "java": 35,
    "python": 19,
    "javascript": 30
  },
  "languages": {
    "cpp": "// Runtime: 7 ms (Top 66.25%) | Memory: 11.2 MB (Top 34.25%)\r\nclass Solution {\r\npublic:\r\n    bool findRotation(vector<vector<int>>& mat, vector<vector<int>>& target) {\r\n        int n = mat.size();\r\n        if(mat == target) { // rotation by 0 degree.\r\n            return true;\r\n        }\r\n\r\n        int deg = 3; // more rotations with 90, 180, 270 degree's.\r\n\r\n        while(deg --) {\r\n            for(int i = 0; i < n; i ++) {\r\n                for(int j = i; j < n; j ++) {\r\n                    swap(mat[i][j], mat[j][i]); // transpose of matrix.\r\n                }\r\n            }\r\n            for(int i = 0; i < n; i ++) {\r\n                reverse(mat[i].begin(),mat[i].end()); // reverse each row.\r\n            }\r\n            if(mat == target) {\r\n                return true;\r\n            }\r\n        }\r\n        return false;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def findRotation(self, mat: List[List[int]], target: List[List[int]]) -> bool:\r\n        \r\n        # if already equal\r\n        if target == mat:\r\n            return True\r\n        # there are 4 different rotation with 90 deg. \r\n        # We need to check at most 3 more rotation.\r\n        for i in range(3):\r\n            # transpose the matrix by swap row and col values.\r\n            for j in range(len(mat)):\r\n                for k in range(j+1, len(mat)):\r\n                    mat[j][k], mat[k][j] = mat[k][j], mat[j][k]\r\n                # Reflect the row by reverse it.\r\n                mat[j] = mat[j][::-1]\r\n            # now the matrix is roteted; check if they're alike.\r\n            if target == mat:\r\n                return True\r\n        return False",
    "java": "// Runtime: 5 ms (Top 6.49%) | Memory: 42.9 MB (Top 12.04%)\r\nclass Solution {\r\n    public boolean findRotation(int[][] mat, int[][] target) {\r\n        if (mat == target) return true;\r\n        int n = mat.length;\r\n        int[] res[] = new int[n][n];\r\n        for (int i = 0; i < n; i++) { //clockwise 90\r\n            for (int j = 0; j < n; j++) {\r\n                res[i][j] = mat[n - 1 - j][i];\r\n            }\r\n        }\r\n\r\n        int[] res2[] = new int[n][n];\r\n        for (int i = 0; i < n; i++) { //clockwise 180\r\n            for (int j = 0; j < n; j++) {\r\n                res2[i][j] = res[n - 1 - j][i];\r\n            }\r\n        }\r\n\r\n        int[] res3[] = new int[n][n];\r\n        for (int i = 0; i < n; i++) { //clockwise 270\r\n            for (int j = 0; j < n; j++) {\r\n                res3[i][j] = res2[n - 1 - j][i];\r\n            }\r\n        }\r\n\r\n        //compare to 90,180,270 and itself\r\n        if(Arrays.deepEquals(target, res) || Arrays.deepEquals(target, res2) || Arrays.deepEquals(target, res3) || Arrays.deepEquals(target, mat) ){\r\n            return true;\r\n        }\r\n        return false;\r\n    }\r\n}\r\n\r\n// Arrays.deepEquals() use for matrix",
    "javascript": "var findRotation = function(mat, target) {\r\n    let width = mat[0].length;\r\n    let height = mat.length;\r\n    \r\n    let normal = true;\r\n    let rightOneTime = true;\r\n    let rightTwoTimes = true;\r\n    let rightThreeTimes = true;\r\n    for (let i = 0; i < height; i++)  {\r\n        for (let j = 0; j < width; j++) {\r\n            // don't rotate mat\r\n            if (mat[i][j] !== target[i][j]) {\r\n                normal = false;\r\n            }\r\n            // rotate mat right 1 time\r\n            if (mat[i][j] !== target[j][width - 1 - i]) {\r\n                rightOneTime = false;\r\n            }\r\n            // rotate mat right 2 times\r\n            if (mat[i][j] !== target[height - 1 - i][width - 1 - j]) {\r\n                rightTwoTimes = false;\r\n            }\r\n            // rotate mat right 3 times\r\n            if (mat[i][j] !== target[height - 1 - j][i]) {\r\n                rightThreeTimes = false;\r\n            }\r\n        }\r\n    }\r\n    return normal || rightOneTime || rightTwoTimes || rightThreeTimes;\r\n};"
  }
}
