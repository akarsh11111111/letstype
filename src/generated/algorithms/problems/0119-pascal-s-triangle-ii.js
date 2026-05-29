export default {
  "id": 119,
  "name": "Pascal's Triangle II",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/pascals-triangle-ii",
  "relativeDir": "P/Pascal's Triangle II",
  "slug": "0119-pascal-s-triangle-ii",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 13,
    "java": 19,
    "python": 14,
    "javascript": 19
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<int> getRow(int rowIndex) {\r\n        vector<int> ans(rowIndex+1,0);\r\n        ans[0]=1;\r\n        for(int i=1;i<rowIndex+1;i++){\r\n            for(int j=i;j>=1;j--){\r\n                ans[j]=ans[j]+ans[j-1];\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def getRow(self, rowIndex: int) -> List[int]:\r\n        # base case\r\n        # we know that there exist two base case one which is for zero input\r\n        # One when we have to exit our recursive loop \r\n        if rowIndex == 0:\r\n            return [1]\r\n        if rowIndex == 1:\r\n            return [1,1]\r\n        #recurance relation or prev call\r\n        prev_prob = self.getRow(rowIndex-1)\r\n        # post processing on data \r\n        # if someone has given us prev_Row what operation we can perform to get current_Row\r\n        return [1]+[prev_prob[i]+prev_prob[i-1] for i in range(1,len(prev_prob))]+[1]",
    "java": "class Solution {\r\n    public List<Integer> getRow(int rowIndex) {\r\n        List<List<Integer>> out = new ArrayList<>();\r\n        for(int i = 0; i<=rowIndex; i++){\r\n            List<Integer>in = new ArrayList<>(i+1);\r\n            for(int j = 0 ; j<= i; j++){\r\n                if(j == 0 || j == i){\r\n                    in.add(1);\r\n                }\r\n                else{\r\n                    in.add(out.get(i-1).get(j-1) + out.get(i-1).get(j));\r\n                }\r\n                \r\n            }\r\n            out.add(in);\r\n        }\r\n        return out.get(rowIndex);\r\n    }\r\n}",
    "javascript": "// Runtime: 123 ms (Top 7.32%) | Memory: 42 MB (Top 62.25%)\r\nvar getRow = function(rowIndex) {\r\n    const triangle = [];\r\n\r\n    for (let i = 0; i <= rowIndex; i++) {\r\n        const rowValue = [];\r\n\r\n        for (let j = 0; j < i + 1; j++) {\r\n             if (j === 0 || j === i) {\r\n                 rowValue[j] = 1;\r\n             } else {\r\n                 rowValue[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];\r\n             }\r\n        }\r\n        triangle.push(rowValue)\r\n    }\r\n\r\n    return triangle[rowIndex];\r\n};"
  }
}
