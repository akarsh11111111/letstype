export default {
  "id": 1351,
  "name": "Count Negative Numbers in a Sorted Matrix",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix",
  "relativeDir": "C/Count Negative Numbers in a Sorted Matrix",
  "slug": "1351-count-negative-numbers-in-a-sorted-matrix",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 7,
    "java": 18,
    "python": 17,
    "javascript": 45
  },
  "languages": {
    "cpp": "// Runtime: 29 ms (Top 41.34%) | Memory: 11 MB (Top 7.78%)\r\nclass Solution {\r\npublic:\r\n    int countNegatives(vector<vector<int>>& grid) {\r\n        int ans = 0; for (auto hehe : grid) for (int i : hehe) if (i < 0) ans++; return ans;\r\n    }\r\n};",
    "python": "# Runtime: 252 ms (Top 17.18%) | Memory: 15.1 MB (Top 10.42%)\r\nclass Solution:\r\n    def countNegatives(self, grid: List[List[int]]) -> int:\r\n        count = 0\r\n\r\n        for i in grid:\r\n            low = 0\r\n            high = len(i) - 1\r\n\r\n            while low <= high:\r\n                mid = (low+high)//2\r\n                if i[mid] < 0:\r\n                    high = mid - 1\r\n                elif i[mid] >= 0:\r\n                    low = mid + 1\r\n            count += (len(i) - low)\r\n        return count",
    "java": "class Solution {\r\n    public int countNegatives(int[][] grid) {\r\n        int m = grid.length ;\r\n        int n = grid[0].length ;\r\n        int c = 0;\r\n        int count = 0;\r\n        int r = m-1;\r\n        while( r >= 0 && c < n ) {\r\n            if (grid[r][c] < 0 ) {\r\n                r--;\r\n                count += n - c;\r\n            } else{\r\n                c++;\r\n            }\r\n        }\r\n        return count;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number[][]} grid\r\n * @return {number}\r\n */\r\nvar countNegatives = function(grid) {\r\n  \r\n    const m = grid.length\r\n    const n = grid[0].length\r\n    \r\n    // for each row we need to find location of first negative\r\n    // all columns past that are negative\r\n    // also for next row search stops before\r\n    // location of current first negative because \r\n    // all numbers below current are also lesser (negative) \r\n    \r\n    function binSearch(start,end, arr){\r\n        \r\n        while(start<=end){\r\n            let mid = start + ((end-start)>>1)\r\n            if(arr[mid] < 0)\r\n                end = mid - 1\r\n            else \r\n                start = mid + 1\r\n        }\r\n        return arr[end]<0 ? end : end + 1\r\n    }\r\n    \r\n    \r\n    \r\n    let ans = 0\r\n    let searchTill = n-1\r\n    for(let i=0;i<m;i++){\r\n        \r\n        if(searchTill<0){ \r\n            // last row found 0 in first column\r\n            ans += n\r\n            continue;\r\n        }\r\n        \r\n        let firstNegative = binSearch(0,searchTill, grid[i])\r\n        searchTill = firstNegative - 1\r\n        ans += (n - firstNegative)\r\n    }\r\n    return ans\r\n};"
  }
}
