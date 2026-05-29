export default {
  "id": 2133,
  "name": "Check if Every Row and Column Contains All Numbers",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers",
  "relativeDir": "C/Check if Every Row and Column Contains All Numbers",
  "slug": "2133-check-if-every-row-and-column-contains-all-numbers",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 25,
    "java": 29,
    "python": 9,
    "javascript": 13
  },
  "languages": {
    "cpp": "// Runtime: 310 ms (Top 66.03%) | Memory: 67.9 MB (Top 58.35%)\r\nclass Solution {\r\npublic:\r\n    bool checkValid(vector<vector<int>>& matrix) {\r\n        int n=matrix.size();\r\n        unordered_set<int> s1, s2;\r\n        for(int i=0;i<n;i++)\r\n        {\r\n            for(int j=0;j<n;j++)\r\n            {\r\n                if(s1.find(matrix[i][j])!=s1.end())\r\n                    return false;\r\n                else\r\n                    s1.insert(matrix[i][j]);\r\n                if(s2.find(matrix[j][i])!=s2.end())\r\n                    return false;\r\n                else\r\n                    s2.insert(matrix[j][i]);\r\n            }\r\n            s1.clear();\r\n            s2.clear();\r\n        }\r\n        return true;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def checkValid(self, matrix: List[List[int]]) -> bool:\r\n        lst = [0]*len(matrix)\r\n        for i in matrix:\r\n            if len(set(i)) != len(matrix):\r\n                return False\r\n            for j in range(len(i)):\r\n                lst[j] += i[j]\r\n        return len(set(lst)) == 1",
    "java": "// Runtime: 56 ms (Top 50.77%) | Memory: 92.4 MB (Top 46.57%)\r\nclass Solution {\r\n    public boolean checkValid(int[][] matrix) {\r\n        int n = matrix.length;\r\n        int num = (n*(n+1))/2; // SUM of n number 1 to n;\r\n\r\n        for(int i=0; i<n; i++)\r\n        {\r\n            HashSet<Integer> hs = new HashSet<Integer>();\r\n              HashSet<Integer> hs1 = new HashSet<Integer>();\r\n\r\n            int m = num; int k = num;\r\n\r\n            for(int j = 0; j<n; j++)\r\n            {\r\n                hs.add(matrix[i][j]);\r\n                  hs1.add(matrix[j][i]);\r\n                m -= matrix[i][j];\r\n                k -= matrix[j][i];\r\n            }\r\n\r\n            if(m != 0 || k != 0 || hs.size() != n || hs.size() != n)\r\n            {\r\n                return false;\r\n            }\r\n        }\r\n        return true;\r\n    }\r\n}",
    "javascript": "var checkValid = function(matrix) {    \r\n    for(let i =0; i<matrix.length;i++){\r\n        const cols = new Set(), rows = new Set(matrix[i]);\r\n\t\t\r\n        for(let j =0; j<matrix.length;j++){\r\n            if(matrix[j][i] > matrix.length) return false;\r\n            cols.add(matrix[j][i])\r\n        }\r\n\t\t\r\n        if(cols.size < matrix.length || rows.size < matrix.length) return false;\r\n    }\r\n    return true;\r\n};"
  }
}
