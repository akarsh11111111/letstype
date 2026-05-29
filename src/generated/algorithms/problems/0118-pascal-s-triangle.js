export default {
  "id": 118,
  "name": "Pascal's Triangle",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/pascals-triangle",
  "relativeDir": "P/Pascal's Triangle",
  "slug": "0118-pascal-s-triangle",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 16,
    "java": 21,
    "python": 14,
    "javascript": 14
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<vector<int>> generate(int numRows) {\r\n        vector<vector<int>> ans(numRows, vector<int>());\r\n        for(int i = 0; i<numRows; i++){\r\n            for(int j = 0; j <= i; j++){\r\n                if(j == 0 || j == i){\r\n                    ans[i].push_back(1);\r\n                }else{\r\n                    ans[i].push_back(ans[i-1][j-1] + ans[i-1][j]);\r\n                }\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def generate(self, numRows: int) -> List[List[int]]:\r\n        if numRows == 1:\r\n            return [[1]]\r\n        if numRows == 2:\r\n            return [[1], [1, 1]]\r\n        ans = [[1], [1, 1]]\r\n        for x in range(1, numRows - 1):\r\n            tmp = [1]\r\n            for k in range(len(ans[x]) - 1):\r\n                tmp.append(ans[x][k] + ans[x][k + 1])\r\n            tmp.append(1)\r\n            ans.append(tmp)\r\n        return ans",
    "java": "class Solution {\r\n    public List<List<Integer>> generate(int numRows) {\r\n        List<List<Integer>> list = new LinkedList();\r\n        list.add(Arrays.asList(1));\r\n        if(numRows == 1) return list;\r\n        list.add(Arrays.asList(1,1));\r\n        \r\n        for(int i = 1; i < numRows - 1; i++) {\r\n            List<Integer> temp = list.get(i);\r\n            List<Integer> temp2 = new ArrayList();\r\n            temp2.add(1);\r\n            for(int j = 0; j < temp.size() - 1; j++) {\r\n                temp2.add(temp.get(j) + temp.get(j+1));\r\n            }\r\n            temp2.add(1);\r\n            list.add(temp2);\r\n        }\r\n        \r\n        return list;\r\n    }\r\n}",
    "javascript": "// Runtime: 97 ms (Top 29.35%) | Memory: 42 MB (Top 49.80%)\r\nvar generate = function(numRows) {\r\n    let ans = new Array(numRows)\r\n    for (let i = 0; i < numRows; i++) {\r\n        let row = new Uint32Array(i+1).fill(1),\r\n            mid = i >> 1\r\n        for (let j = 1; j <= mid; j++) {\r\n            let val = ans[i-1][j-1] + ans[i-1][j]\r\n            row[j] = val, row[row.length-j-1] = val\r\n        }\r\n        ans[i] = row\r\n    }\r\n    return ans\r\n};"
  }
}
