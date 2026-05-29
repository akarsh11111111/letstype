export default {
  "id": 2201,
  "name": "Count Artifacts That Can Be Extracted",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/count-artifacts-that-can-be-extracted",
  "relativeDir": "C/Count Artifacts That Can Be Extracted",
  "slug": "2201-count-artifacts-that-can-be-extracted",
  "availableLanguages": [
    "cpp",
    "java",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 23,
    "java": 19,
    "javascript": 51
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int digArtifacts(int n, vector<vector<int>>& artifacts, vector<vector<int>>& dig) {\r\n        vector<vector<int>>arr(n,vector<int>(n,1));\r\n        for(vector<int>& v : dig){\r\n            arr[v[0]][v[1]] = 0;\r\n        }\r\n        int preSum[n+1][n+1];\r\n        for(int i=0;i<=n;i++){preSum[i][0] = 0; preSum[0][i] = 0;}\r\n        for(int i=1;i<=n;i++){\r\n            for(int j=1;j<=n;j++){\r\n                preSum[i][j] = preSum[i-1][j] + preSum[i][j-1] - preSum[i-1][j-1] + arr[i-1][j-1];\r\n            }\r\n        }\r\n        int res = 0,sum,r1,c1,r2,c2;\r\n        for(vector<int>& v : artifacts){\r\n            r1 = v[0]; c1 = v[1]; r2 = v[2]; c2 = v[3];\r\n            sum = preSum[r2+1][c2+1] - preSum[r1][c2+1] - preSum[r2+1][c1] + preSum[r1][c1];\r\n            if(sum == 0){res++;}\r\n        }\r\n        return res;\r\n    }\r\n};",
    "java": "// Runtime: 198 ms (Top 10.48%) | Memory: 160.5 MB (Top 45.16%)\r\nclass Solution {\r\n    public int digArtifacts(int n, int[][] artifacts, int[][] dig) {\r\n        HashSet<String> set = new HashSet<>();\r\n        for (int d[] : dig) set.add(d[0] + \" \" + d[1]);\r\n        int c = 0;\r\n        for (int a[] : artifacts) {\r\n            boolean done = true;\r\n            for (int i = a[0]; i <= a[2]; i++) {\r\n                for (int j = a[1]; j <= a[3]; j++) {\r\n                    if (!set.contains(i + \" \" + j)) done = false;\r\n                }\r\n            }\r\n            if (done) c++;\r\n        }\r\n        return c;\r\n    }\r\n}\r\n//TC = O(DIG + N^2)",
    "javascript": "// Runtime: 215 ms (Top 66.67%) | Memory: 127.70 MB (Top 16.67%)\r\n\r\n/**\r\n * @param {number} n\r\n * @param {number[][]} artifacts\r\n * @param {number[][]} dig\r\n * @return {number}\r\n */\r\nvar digArtifacts = function(n, artifacts, dig) {\r\n   // Step 1\r\n    const virtualMap = [] // 0 = null, n = artifact_n\r\n    for (let x = 0; x< n; x++){\r\n        const row = []\r\n        for(let y = 0; y<n; y++){\r\n            row.push(0)\r\n        }\r\n        virtualMap.push(row)\r\n    }\r\n\t\r\n\t// Step 2\r\n    const artifactSize = []\r\n    for(let artifactIdx in artifacts){\r\n        let [artY1, artX1, artY2, artX2] = artifacts[artifactIdx]\r\n        artifactSize.push((artX2 + 1 - artX1) * (artY2 + 1 - artY1))\r\n        while(artY1 <= artY2){\r\n            while(artX1 <= artX2){\r\n                virtualMap[artY1][artX1] = Number(artifactIdx)+1\r\n                artX1++\r\n            }\r\n            artY1++\r\n            artX1 = artifacts[artifactIdx][1]\r\n        }\r\n    }\r\n\r\n    // Step 3\r\n    for(let digComp of dig){\r\n        const [digY, digX] = digComp\r\n        const content = virtualMap[digY][digX]\r\n        if(content !== 0){\r\n            artifactSize[content-1] -= 1 \r\n        }\r\n    }\r\n\r\n    // Step 4\r\n    return artifactSize.reduce((acc, remainder) => {\r\n        if(remainder === 0){\r\n            acc++\r\n        }\r\n        return acc\r\n    }, 0)\r\n};"
  }
}
