export default {
  "id": 835,
  "name": "Image Overlap",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/image-overlap",
  "relativeDir": "I/Image Overlap",
  "slug": "0835-image-overlap",
  "availableLanguages": [
    "cpp",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 29,
    "python": 20
  },
  "languages": {
    "cpp": "// Runtime: 428 ms (Top 30.81%) | Memory: 12.5 MB (Top 26.58%)\r\n\r\nclass Solution {\r\npublic:\r\n    int largestOverlap(vector<vector<int>>& img1, vector<vector<int>>& img2) {\r\n        int n=img1.size();\r\n        vector<pair<int,int>>vec_a;\r\n        vector<pair<int,int>>vec_b;\r\n        for(int i=0;i<n;i++){\r\n            for(int j=0;j<n;j++){\r\n                if(img1[i][j]==1){\r\n                    vec_a.push_back({i,j});\r\n                }\r\n                if(img2[i][j]==1){\r\n                    vec_b.push_back({i,j});\r\n                }\r\n            }\r\n        }\r\n        int ans=0;\r\n        map<pair<int,int>,int>mp;\r\n        for(auto [i1,j1]:vec_a){\r\n            for(auto [i2,j2]:vec_b){\r\n                mp[{i1-i2,j1-j2}]++;\r\n                ans=max(ans,mp[{i1-i2,j1-j2}]);\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 593 ms (Top 76.00%) | Memory: 14.7 MB (Top 44.00%)\r\nclass Solution:\r\n    def largestOverlap(self, img1: List[List[int]], img2: List[List[int]]) -> int:\r\n        n = len(img1)\r\n        list1, list2 = [], []\r\n        res = 0\r\n        for r in range(n):\r\n            for c in range(n):\r\n                if img1[r][c]:\r\n                    list1.append((r, c))\r\n                if img2[r][c]:\r\n                    list2.append((r, c))\r\n\r\n        shiftDict = defaultdict(int)\r\n        for x1, y1 in list1:\r\n            for x2, y2 in list2:\r\n                dx, dy = x2 - x1, y2 - y1\r\n                shiftDict[(dx, dy)] += 1\r\n\r\n        return max(shiftDict.values()) if shiftDict else 0"
  }
}
