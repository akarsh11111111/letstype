export default {
  "id": 59,
  "name": "Spiral Matrix II",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/spiral-matrix-ii",
  "relativeDir": "S/Spiral Matrix II",
  "slug": "0059-spiral-matrix-ii",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 56,
    "java": 43,
    "python": 28,
    "javascript": 39
  },
  "languages": {
    "cpp": "// Runtime: 3 ms (Top 42.85%) | Memory: 6.7 MB (Top 18.22%)\r\nclass Solution {\r\npublic:\r\n    vector<vector<int>> generateMatrix(int n) {\r\n        vector<vector<int>> vec( n , vector<int> (n, 0));\r\n\r\n        vector<int>helper;\r\n        for(int i=0;i<n*n;i++){\r\n            helper.push_back(i+1);\r\n        }\r\n\r\n        int k = 0;\r\n        int top = 0;\r\n        int down = n-1;\r\n\r\n        int left = 0;\r\n        int right = n-1;\r\n\r\n        int direction = 0;\r\n\r\n        vector<int>result;\r\n\r\n        while(top<=down and left<=right){\r\n            if(direction==0){\r\n                for(int i=left;i<=right;i++){\r\n                    vec[top][i] = helper[k];\r\n                    k++;\r\n                }\r\n                top++;\r\n            }\r\n            else if(direction==1){\r\n                for(int i=top;i<=down;i++){\r\n                    vec[i][right] = helper[k];\r\n                    k++;\r\n                }\r\n                right--;\r\n            }\r\n            else if(direction==2){\r\n                for(int i=right;i>=left;i--){\r\n                    vec[down][i] = helper[k];\r\n                    k++;\r\n                }\r\n                down--;\r\n            }\r\n            else if(direction==3){\r\n                for(int i=down;i>=top;i--){\r\n                    vec[i][left] = helper[k];\r\n                    k++;\r\n                }\r\n                left++;\r\n            }\r\n            direction = (direction+1)%4;\r\n        }\r\n        return vec;\r\n    }\r\n};",
    "python": "// Runtime: 34 ms (Top 84.25%) | Memory: 16.50 MB (Top 59.83%)\r\n\r\nclass Solution:\r\n    def generateMatrix(self, n: int) -> List[List[int]]:\r\n        if not n:\r\n            return []\r\n        matrix = [[0 for _ in range(n)] for _ in range(n)]\r\n        left, right, top, bottom, num = 0, n-1, 0, n-1, 1\r\n        while left <= right and top <= bottom:\r\n            for i in range(left, right+1):\r\n                matrix[top][i] = num \r\n                num += 1\r\n            top += 1\r\n            for i in range(top, bottom+1):\r\n                matrix[i][right] = num\r\n                num += 1\r\n            right -= 1\r\n            if top <= bottom:\r\n                for i in range(right, left-1, -1):\r\n                    matrix[bottom][i] = num\r\n                    num += 1\r\n                bottom -= 1\r\n            if left <= right:\r\n                for i in range(bottom, top-1, -1):\r\n                    matrix[i][left] = num\r\n                    num += 1\r\n                left += 1\r\n        return matrix",
    "java": "// Runtime: 0 ms (Top 100.00%) | Memory: 41.9 MB (Top 69.11%)\r\nclass Solution {\r\n    public int[][] generateMatrix(int n) {\r\n        int startingRow = 0;\r\n        int endingRow = n-1;\r\n        int startingCol = 0;\r\n        int endingCol = n-1;\r\n\r\n        int total = n*n;\r\n        int element = 1;\r\n        int[][] matrix = new int[n][n];\r\n\r\n        while(element<=total){\r\n\r\n        for(int i = startingCol; element<=total && i<=endingCol; i++){\r\n            matrix[startingRow][i] = element;\r\n            element++;\r\n        }\r\n        startingRow++;\r\n\r\n        for(int i = startingRow; element<=total && i<=endingRow; i++){\r\n            matrix[i][endingCol] = element;\r\n            element++;\r\n        }\r\n        endingCol--;\r\n\r\n        for(int i = endingCol; element<=total && i>=startingCol; i--){\r\n            matrix[endingRow][i] = element;\r\n            element++;\r\n        }\r\n        endingRow--;\r\n\r\n        for(int i = endingRow; element<=total && i>=startingRow; i--){\r\n            matrix[i][startingCol] = element;\r\n            element++;\r\n        }\r\n        startingCol++;\r\n\r\n        }\r\n\r\n        return matrix;\r\n    }\r\n}",
    "javascript": "// Runtime: 51 ms (Top 99.51%) | Memory: 42.1 MB (Top 65.95%)\r\nvar generateMatrix = function(n) {\r\n    const arr = new Array(n).fill(0).map(() => new Array(n).fill(0));\r\n    let count = 1, index = 1, i = 0, j =0, changed = false, toIncrease = true;\r\n    arr[i][j] = index;\r\n    while(index < n*n) {\r\n        index++;\r\n        if(i == n-count && j > count-1) {\r\n            j--;\r\n            toIncrease = false;\r\n            changed = true;\r\n        }\r\n        else if(i !== n-count && j == n-count) {\r\n            i++;\r\n            toIncrease = false;\r\n            changed = true;\r\n        }\r\n        if(i == count-1 && !changed) {\r\n            if(toIncrease) j++;\r\n            else j--;\r\n        }\r\n        else if(j == count-1 && !changed) {\r\n            if(i == count) {\r\n                toIncrease = true;\r\n                j++;\r\n                count++;\r\n            }\r\n            else if(toIncrease) i++;\r\n            else i--;\r\n        }\r\n        arr[i][j] = index;\r\n        if(index == 4*(n-1)) {\r\n            toIncrease = true;\r\n            count++;\r\n        }\r\n        changed = false;\r\n    }\r\n    return arr;\r\n};"
  }
}
