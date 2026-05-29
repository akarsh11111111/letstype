export default {
  "id": 2271,
  "name": "Maximum White Tiles Covered by a Carpet",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-white-tiles-covered-by-a-carpet",
  "relativeDir": "M/Maximum White Tiles Covered by a Carpet",
  "slug": "2271-maximum-white-tiles-covered-by-a-carpet",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 37,
    "java": 36,
    "python": 20,
    "javascript": 30
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int maximumWhiteTiles(vector<vector<int>>& tiles, int carpetLen) {\r\n        long long n = tiles.size() , ans = INT_MIN;\r\n        sort(tiles.begin(),tiles.end());\r\n        vector<long long> len(n) , li(n);\r\n\t\t//len array stores the prefix sum of tiles\r\n\t\t//li array stores the last index tiles[i]\r\n        for(int i=0;i<n;i++){\r\n            len[i] = (long long)(tiles[i][1] - tiles[i][0] + 1);\r\n            len[i]+=(i==0) ? 0 : len[i-1];\r\n            li[i] = tiles[i][1];\r\n        }\r\n        \r\n        for(int i=0 ; i<n ; i++){\r\n\t\t   //sp means starting tile index\r\n\t\t   //ep means ending tile index\r\n            long long sp = tiles[i][0] , ep = tiles[i][0] + (long long)carpetLen-1 , tc=0;\r\n            int idx = lower_bound(li.begin(),li.end(),ep) - li.begin();\r\n\t\t\t\r\n\t\t\t//logic to take count of tiles covered\r\n            if(idx==n){\r\n                tc = len[n-1];\r\n                tc-=(i==0) ? 0 : len[i-1];\r\n            }else{\r\n                tc = ep<tiles[idx][0] ? 0 : ep - (long long)tiles[idx][0]  + 1;\r\n                idx--;\r\n                if(idx>=0){\r\n                    tc+=len[idx];\r\n                    tc-=(i==0) ? 0 : len[i-1];\r\n                }\r\n            }\r\n            ans = max(ans,tc);\r\n        }\r\n        return (int)ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def maximumWhiteTiles(self, tiles: List[List[int]], carpetLen: int) -> int:\r\n        tiles.sort()\r\n\t\t#j: window index\r\n        j = cover = res = 0\r\n        for i in range(len(tiles)):\r\n\t\t\t#slide the window as far as we can to cover fully the intervals with the carpet\r\n            while j<len(tiles) and tiles[j][1]-tiles[i][0] + 1 <= carpetLen:\r\n                cover += tiles[j][1]-tiles[j][0] + 1\r\n                j += 1\r\n\t\t\t#process the remnant, that is, when the tiles[j] is covered by the carpet partially(not fully)\r\n            if j<len(tiles) and tiles[j][0]-tiles[i][0] + 1 <= carpetLen:\r\n                res = max(res, cover + carpetLen-(tiles[j][0]-tiles[i][0]))\r\n            else:\r\n                res = max(res, cover)\r\n            #when the tiles[j] is covered partially, the interval is not added to the variable cover\r\n\t\t\tif i!=j:\r\n                cover -= tiles[i][1]-tiles[i][0]+1\r\n\t\t\tj = max(j, i+1)\r\n        return res",
    "java": "// Runtime: 45 ms (Top 71.1%) | Memory: 71.05 MB (Top 47.1%)\r\n\r\nclass Solution\r\n{\r\n    public int maximumWhiteTiles(int[][] tiles, int carpetLen)\r\n    {\r\n        Arrays.sort(tiles,(a,b)->{return a[0]-b[0];});\r\n        int x = 0;\r\n        int y = 0;\r\n        long maxCount = 0;\r\n        long count = 0;\r\n        \r\n        while(y < tiles.length && x <= y)\r\n        {\r\n            long start = tiles[x][0];\r\n            long end = tiles[y][1];\r\n            \r\n            if(end-start+1 <= carpetLen) \r\n            {\r\n                count += tiles[y][1] - tiles[y][0]+1;\r\n                maxCount = Math.max(maxCount,count);\r\n                y++;\r\n            }\r\n            else \r\n            {\r\n                long midDist = start+carpetLen-1;\r\n                long s = tiles[y][0];\r\n                long e = tiles[y][1];\r\n                if(midDist <= e && midDist >= s)  maxCount = Math.max(maxCount,count+midDist-s+1);\r\n                count -= tiles[x][1] - tiles[x][0] + 1;\r\n                x++;\r\n            }\r\n        }\r\n        return (int)maxCount;\r\n    }\r\n}",
    "javascript": "// Runtime: 267 ms (Top 75.00%) | Memory: 62.7 MB (Top 77.27%)\r\n/**\r\n * @param {number[][]} tiles\r\n * @param {number} carpetLen\r\n * @return {number}\r\n */\r\nvar maximumWhiteTiles = function(tiles, carpetLen) {\r\n    const sorted = tiles.sort((a, b) => a[0]-b[0])\r\n    let res = 0\r\n\r\n    let total = 0\r\n    let right = 0\r\n\r\n    for (let tile of sorted){\r\n        const start = tile[0]\r\n        const end = start + carpetLen - 1\r\n        while(right < sorted.length && tiles[right][1] < end){\r\n            total += tiles[right][1] - tiles[right][0] + 1\r\n            right+=1\r\n        }\r\n        if(right === sorted.length || sorted[right][0] > end){\r\n            res = Math.max(res, total)\r\n        } else{\r\n            res = Math.max(res, total + (end-tiles[right][0] + 1))\r\n        }\r\n        total -= tile[1] - tile[0] + 1\r\n    }\r\n\r\n    return res\r\n};"
  }
}
