export default {
  "id": 1476,
  "name": "Subrectangle Queries",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/subrectangle-queries",
  "relativeDir": "S/Subrectangle Queries",
  "slug": "1476-subrectangle-queries",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 19,
    "java": 26,
    "python": 12,
    "javascript": 38
  },
  "languages": {
    "cpp": "class SubrectangleQueries {\r\npublic:\r\n    vector<vector<int>> rect;\r\n    SubrectangleQueries(vector<vector<int>>& rectangle) {\r\n        rect= rectangle;\r\n    }\r\n    \r\n    void updateSubrectangle(int row1, int col1, int row2, int col2, int newValue) {\r\n        for(int i=row1; i<=row2; ++i){\r\n            for(int j=col1; j<=col2; ++j){\r\n                rect[i][j]= newValue;\r\n            }\r\n        }\r\n    }\r\n    \r\n    int getValue(int row, int col) {\r\n        return rect[row][col];\r\n    }\r\n};",
    "python": "class SubrectangleQueries:\r\n\r\n    def __init__(self, rectangle: List[List[int]]):\r\n        self.rectangle = rectangle\r\n\r\n    def updateSubrectangle(self, row1: int, col1: int, row2: int, col2: int, newValue: int) -> None:\r\n        for i in range(row1,row2+1):\r\n            for j in range(col1,col2+1):\r\n                self.rectangle[i][j] = newValue\r\n                \r\n    def getValue(self, row: int, col: int) -> int:\r\n        return self.rectangle[row][col]",
    "java": "// Runtime: 53 ms (Top 20.07%) | Memory: 56.2 MB (Top 15.31%)\r\nclass SubrectangleQueries {\r\n    int[][] rectangle;\r\n    public SubrectangleQueries(int[][] rectangle) {\r\n        this.rectangle = rectangle;\r\n    }\r\n\r\n    public void updateSubrectangle(int row1, int col1, int row2, int col2, int newValue) {\r\n        for(int i=row1;i<=row2;i++){\r\n            for(int j=col1;j<=col2;j++){\r\n                rectangle[i][j] = newValue;\r\n            }\r\n        }\r\n    }\r\n\r\n    public int getValue(int row, int col) {\r\n        return this.rectangle[row][col];\r\n    }\r\n}\r\n\r\n/**\r\n * Your SubrectangleQueries object will be instantiated and called as such:\r\n * SubrectangleQueries obj = new SubrectangleQueries(rectangle);\r\n * obj.updateSubrectangle(row1,col1,row2,col2,newValue);\r\n * int param_2 = obj.getValue(row,col);\r\n */",
    "javascript": "/**\r\n * @param {number[][]} rectangle\r\n */\r\nvar SubrectangleQueries = function(rectangle) {\r\n    this.rectangle = rectangle;\r\n};\r\n\r\n/** \r\n * @param {number} row1 \r\n * @param {number} col1 \r\n * @param {number} row2 \r\n * @param {number} col2 \r\n * @param {number} newValue\r\n * @return {void}\r\n */\r\nSubrectangleQueries.prototype.updateSubrectangle = function(row1, col1, row2, col2, newValue) {\r\n    for(let i=row1; i<=row2; i++){\r\n            for(let j=col1; j<=col2; j++){\r\n                this.rectangle[i][j] = newValue;\r\n            }\r\n        }\r\n};\r\n\r\n/** \r\n * @param {number} row \r\n * @param {number} col\r\n * @return {number}\r\n */\r\nSubrectangleQueries.prototype.getValue = function(row, col) {\r\n    return this.rectangle[row][col];\r\n};\r\n\r\n/** \r\n * Your SubrectangleQueries object will be instantiated and called as such:\r\n * var obj = new SubrectangleQueries(rectangle)\r\n * obj.updateSubrectangle(row1,col1,row2,col2,newValue)\r\n * var param_2 = obj.getValue(row,col)\r\n */"
  }
}
