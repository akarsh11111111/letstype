export default {
  "id": 1643,
  "name": "Kth Smallest Instructions",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/kth-smallest-instructions",
  "relativeDir": "K/Kth Smallest Instructions",
  "slug": "1643-kth-smallest-instructions",
  "availableLanguages": [
    "cpp",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 44,
    "python": 17
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    string kthSmallestPath(vector<int>& destination, int k) {\r\n        int n=destination[0]+1,m=destination[1]+1;\r\n        \r\n        //this code is straight forward it calculate and stores no. ways to go to destination from i,j\r\n        vector<vector<int>> ways(n,vector<int> (m));\r\n        \r\n        for(int i=n-1;i>=0;i--){\r\n            for(int j=m-1;j>=0;j--){\r\n                if(i==n-1||j==m-1){\r\n                    ways[i][j]=1; continue;\r\n                }\r\n                ways[i][j]=ways[i][j+1]+ways[i+1][j];\r\n            }\r\n        }\r\n\t\t \r\n\t\t\r\n\t\t// with the help of above table ans can be generated\r\n\t\t//suppose we are at (i, j)   we need to decide whether to go Horizontal or Vertical\r\n\t\r\n        string ans=\"\";\r\n        \r\n        int i=0,j=0;\r\n        while(i<n-1&&j<m-1){\r\n\t\t    // if k is less than no of ways to go from selecting horizontal path\r\n             if(k<=ways[i][j+1]){\r\n                ans=ans+'H';j++; \r\n             }\r\n\t\t\t // else we chose vertical for greater k\r\n            else{\r\n                k=k-ways[i][j+1];\r\n                i++;\r\n                ans=ans+'V';\r\n            }\r\n            \r\n         }\r\n         while(j++<m-1) ans=ans+'H';\r\n         while(i++<n-1) ans=ans+'V';\r\n        \r\n        return ans;\r\n        \r\n    }\r\n};",
    "python": "from math import comb\r\nclass Solution:\r\n    def kthSmallestPath(self, destination: List[int], k: int) -> str:\r\n        i,j = destination\r\n        \r\n        @lru_cache(None)\r\n        def helper(i,j,k):\r\n            if k == 1:\r\n                return \"H\"*j+\"V\"*i\r\n            else:\r\n                horizontal = comb(i+j-1,j-1)\r\n                if k <= horizontal:\r\n                    return \"H\" + helper(i,j-1,k)\r\n                else:\r\n                    return \"V\" + helper(i-1,j,k-horizontal)\r\n        \r\n        return helper(i,j,k)"
  }
}
