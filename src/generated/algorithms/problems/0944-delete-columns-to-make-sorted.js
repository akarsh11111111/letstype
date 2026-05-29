export default {
  "id": 944,
  "name": "Delete Columns to Make Sorted",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/delete-columns-to-make-sorted",
  "relativeDir": "D/Delete Columns to Make Sorted",
  "slug": "0944-delete-columns-to-make-sorted",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 17,
    "java": 17,
    "python": 16,
    "javascript": 17
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int minDeletionSize(vector<string>& strs) {\r\n        int col = strs[0].size();\r\n        int row = strs.size();\r\n        int count = 0;\r\n        for(int c = 0 ; c < col ; c++){\r\n            for(int r = 1 ; r < row ; r++){\r\n                if(strs[r][c] - strs[r - 1][c] < 0){\r\n                    count++;\r\n                    break;\r\n                }\r\n            }\r\n        }\r\n        return count;\r\n    }\r\n};",
    "python": "# Runtime: 330 ms (Top 23.27%) | Memory: 14.6 MB (Top 66.82%)\r\n\r\nclass Solution:\r\n    def minDeletionSize(self, strs: List[str]) -> int:\r\n\r\n        cols={}\r\n        l=len(strs)\r\n        l_s = len(strs[0])\r\n        delete = set()\r\n        for i in range(l):\r\n            for col in range(l_s):\r\n                if col in cols:\r\n                    if cols[col]>strs[i][col]:\r\n                        delete.add(col)\r\n                cols[col] = strs[i][col]\r\n        return len(delete)",
    "java": "// Runtime: 9 ms (Top 91.77%) | Memory: 42.4 MB (Top 94.00%)\r\nclass Solution {\r\n    public int minDeletionSize(String[] strs) {\r\n        int count = 0;\r\n        for(int i = 0; i < strs[0].length(); i++){ //strs[0].length() is used to find the length of the column\r\n            for(int j = 0; j < strs.length-1; j++){\r\n                if((int) strs[j].charAt(i) <= (int) strs[j+1].charAt(i)){\r\n                    continue;\r\n                }else{\r\n                    count++;\r\n                    break;\r\n                }\r\n            }\r\n        }\r\n        return count;\r\n    }\r\n}",
    "javascript": "// Runtime: 112 ms (Top 63.93%) | Memory: 45.9 MB (Top 77.87%)\r\n/**\r\n * @param {string[]} strs\r\n * @return {number}\r\n */\r\nvar minDeletionSize = function(strs) {\r\n    let count = 0;\r\n    for(let i=0; i<strs[0].length; i++){\r\n        for(let j=0; j<strs.length-1; j++){\r\n            if(strs[j].charAt(i) > strs[j+1].charAt(i)){\r\n                count++;\r\n                break;\r\n            }\r\n        }\r\n    }\r\n    return count;\r\n};"
  }
}
