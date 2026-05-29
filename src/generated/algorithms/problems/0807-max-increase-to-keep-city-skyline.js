export default {
  "id": 807,
  "name": "Max Increase to Keep City Skyline",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/max-increase-to-keep-city-skyline",
  "relativeDir": "M/Max Increase to Keep City Skyline",
  "slug": "0807-max-increase-to-keep-city-skyline",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 29,
    "java": 20,
    "python": 12,
    "javascript": 31
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int maxIncreaseKeepingSkyline(vector<vector<int>>& grid) {\r\n        int n=grid.size();\r\n        //get max for every Column\r\n        vector<int> maxfromcol(n,INT_MIN);\r\n        for(int j=0;j<n;j++){\r\n            for(int i=0;i<n;i++){\r\n                maxfromcol[j]=max(maxfromcol[j],grid[i][j]);\r\n            }\r\n        }\r\n        int cost=0;\r\n        for(int i=0;i<n;i++){\r\n            //find maximum in ithrow\r\n            int mx=INT_MIN;\r\n            for(int j=0;j<n;j++){\r\n                mx=max(mx,grid[i][j]);   \r\n            }\r\n            cout<<mx<<endl;\r\n            //update every element in ith row with min of max of ith row and max of jth col\r\n            for(int j=0;j<n;j++){\r\n                int temp=grid[i][j];\r\n                grid[i][j]=min(mx,maxfromcol[j]);\r\n                cost+=grid[i][j]-temp;\r\n            }\r\n        }\r\n        return cost;\r\n    }\r\n};",
    "python": "class Solution:\r\n\tdef maxIncreaseKeepingSkyline(self, grid: List[List[int]]) -> int:\r\n\t\tmxr = [max(i) for i in grid]\r\n\t\tmxc = [0 for _ in range(len(grid[0]))]\r\n\t\tfor i in range(len(grid)):\r\n\t\t\tfor j in range(len(grid[0])):\r\n\t\t\t\tmxc[j] = max(grid[i][j],mxc[j])\r\n\t\tans =0 \r\n\t\tfor i in range(len(grid)):\r\n\t\t\tfor j in range(len(grid)):\r\n\t\t\t\tans+=(min(mxr[i],mxc[j]) - grid[i][j]) \r\n\t\treturn ans",
    "java": "class Solution {\r\n    public int maxIncreaseKeepingSkyline(int[][] grid) {\r\n        int n = grid.length;\r\n        int[] row = new int[n];\r\n        int[] col = new int[n];\r\n        int ans = 0;\r\n        for(int i=0;i<n;i++){\r\n            for(int j=0;j<n;j++){\r\n                row[i] = Math.max(row[i],grid[i][j]);\r\n                col[i] = Math.max(col[i],grid[j][i]);\r\n            }\r\n        }\r\n        for(int i=0;i<n;i++){\r\n            for(int j=0;j<n;j++){\r\n                ans += Math.min(row[i],col[j])-grid[i][j];\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n}",
    "javascript": "// Runtime: 73 ms (Top 92.50%) | Memory: 42.7 MB (Top 88.33%)\r\n/**\r\n * @param {number[][]} grid\r\n * @return {number}\r\n */\r\nvar maxIncreaseKeepingSkyline = function(grid) {\r\n    let n = grid.length;\r\n    let sum = 0;\r\n    let cache = [];\r\n\r\n    for (let i = 0; i < n; i++) {\r\n        const rowMax = Math.max(...grid[i]);\r\n\r\n        for (let j = 0; j < n; j++) {\r\n            let colMax = cache[j];\r\n\r\n            if (!colMax) {\r\n                let max = Number.MIN_SAFE_INTEGER;\r\n                for (let c = 0; c < n; c++) {\r\n                    max = Math.max(max, grid[c][j]);\r\n                }\r\n                cache[j] = max;\r\n                colMax = max;\r\n            }\r\n\r\n            sum += Math.min(rowMax, colMax) - grid[i][j];\r\n        }\r\n    }\r\n\r\n    return sum;\r\n};"
  }
}
