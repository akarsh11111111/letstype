export default {
  "id": 799,
  "name": "Champagne Tower",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/champagne-tower",
  "relativeDir": "C/Champagne Tower",
  "slug": "0799-champagne-tower",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 19,
    "java": 25,
    "python": 17,
    "javascript": 26
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    double champagneTower(int poured, int query_row, int query_glass) {\r\n        vector<double> currRow(1, poured);\r\n\t\t\r\n        for(int i=0; i<=query_row; i++){ //we need to make the dp matrix only till query row. No need to do after that\r\n            vector<double> nextRow(i+2, 0); //If we are at row 0, row 1 will have 2 glasses. So next row will have currRow number + 2 number of glasses.\r\n            for(int j=0; j<=i; j++){ //each row will have currRow number + 1 number of glasses.\r\n                if(currRow[j]>=1){ //if the champagne from the current glass is being overflowed.\r\n                    nextRow[j] += (currRow[j]-1)/2.0; //fill the left glass with the overflowing champagne\r\n                    nextRow[j+1] += (currRow[j]-1)/2.0; //fill the right glass with the overflowing champagne\r\n                    currRow[j] = 1; //current glass will store only 1 cup of champagne\r\n                }\r\n            }\r\n            if(i!=query_row) currRow = nextRow; //change the currRow for the next iteration. But if we have already reached the query_row, then the next iteration will not even take place, so the currRow is the query_row itself. So don't change as we need the currRow only.\r\n        }\r\n        return currRow[query_glass];\r\n    }\r\n};",
    "python": "# Runtime: 392 ms (Top 9.30%) | Memory: 14.4 MB (Top 11.38%)\r\nclass Solution:\r\n    def champagneTower(self, poured: int, r: int, c: int) -> float:\r\n        quantity=defaultdict(int)\r\n        quantity[(0,0)]=poured\r\n        for i in range(r+1):\r\n            flag=False\r\n            for j in range(i+1):\r\n                prev_flow=quantity[(i,j)]-1\r\n                if prev_flow<=0:\r\n                    continue\r\n                flag=True\r\n                quantity[(i,j)]=1\r\n                quantity[(i+1,j)]+=prev_flow/2\r\n                quantity[(i+1,j+1)]+=prev_flow/2\r\n            if not flag: break\r\n        return quantity[(r,c)]",
    "java": "// Champagne Tower\r\n// Leetcode: https://leetcode.com/problems/champagne-tower/\r\n\r\nclass Solution {\r\n    public double champagneTower(int poured, int query_row, int query_glass) {\r\n        if (poured == 0) return 0;\r\n        double[] memo = new double[101];\r\n        memo[0] = poured;\r\n        for (int i=0; i<100; i++) {\r\n            for (int j=i; j>=0; j--) {\r\n                if (memo[j] > 1) {\r\n                    if (i == query_row && j == query_glass) return 1;\r\n                    double val = (memo[j] - 1) / 2;\r\n                    memo[j+1] += val;\r\n                    memo[j] = val;\r\n                } else {\r\n                    if (i == query_row && j == query_glass) return memo[query_glass];\r\n                    memo[j+1] += 0;\r\n                    memo[j] = 0;\r\n                }\r\n            }\r\n        }\r\n        return memo[query_glass];\r\n    }\r\n}",
    "javascript": "// Runtime: 65 ms (Top 67.95%) | Memory: 48.40 MB (Top 39.74%)\r\n\r\n/**\r\n * @param {number} poured\r\n * @param {number} query_row\r\n * @param {number} query_glass\r\n * @return {number}\r\n */\r\nvar champagneTower = function(poured, query_row, query_glass) {\r\n    let glassLevels = Array(100).fill(0.0);\r\n    glassLevels[0] = poured;\r\n\r\n    for (let curRow = 0; curRow < query_row; curRow++) {\r\n        let nextLevels = Array(100).fill(0.0);\r\n\r\n        for (let curGlass = 0; curGlass <= curRow; curGlass++) {\r\n            let overflow = Math.max(0, (glassLevels[curGlass] - 1.0) / 2.0);\r\n            nextLevels[curGlass] += overflow;\r\n            nextLevels[curGlass + 1] += overflow;\r\n        }\r\n\r\n        glassLevels = nextLevels;\r\n    }\r\n\r\n    return Math.min(1.0, glassLevels[query_glass]);    \r\n};"
  }
}
