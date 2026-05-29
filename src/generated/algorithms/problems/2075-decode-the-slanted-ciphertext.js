export default {
  "id": 2075,
  "name": "Decode the Slanted Ciphertext",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/decode-the-slanted-ciphertext",
  "relativeDir": "D/Decode the Slanted Ciphertext",
  "slug": "2075-decode-the-slanted-ciphertext",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 45,
    "java": 27,
    "python": 12,
    "javascript": 30
  },
  "languages": {
    "cpp": "// Runtime: 467 ms (Top 5.00%) | Memory: 46 MB (Top 21.15%)\r\nclass Solution {\r\npublic:\r\n    string decodeCiphertext(string encodedText, int rows) {\r\n        int n = encodedText.size();\r\n\r\n        // Determining the number of columns\r\n        int cols = n / rows;\r\n        vector<vector<char>> mat(rows, vector<char>(cols, ' '));\r\n        int i = 0, j = 0;\r\n        int k = 0;\r\n\r\n        string ans = \"\";\r\n\r\n        // Filling the matrix using encodedText\r\n        // Row wise\r\n        for(int i = 0; i < rows; i++) {\r\n            for(int j = 0; j < cols; j++) {\r\n                mat[i][j] = encodedText[k++];\r\n            }\r\n        }\r\n\r\n        // Only the upper triangular part of the matrix will\r\n        // contain characters of the originalText\r\n        // so, this loop traverses that area\r\n        for(int k = 0; k < n - (rows * (rows - 1)) / 2; k++) {\r\n            // i, j are the two pointers for tracking rows and columns\r\n            ans.push_back(mat[i++][j++]);\r\n\r\n            // If any boundary is hit, then column pointer is subtracted\r\n            // by row_pointer - 1\r\n            // and row pointer is reset to 0\r\n            if(i == rows || j == cols) {\r\n                j -= (i - 1);\r\n                i = 0;\r\n            }\r\n        }\r\n\r\n        // Removing all trailing spaces\r\n        while(ans.back() == ' ')\r\n            ans.pop_back();\r\n\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def decodeCiphertext(self, encodedText: str, rows: int) -> str:\r\n        n = len(encodedText)\r\n        cols = n // rows\r\n        step = cols + 1\r\n        res = \"\"\r\n        \r\n        for i in range(cols):\r\n            for j in range(i, n, step):\r\n                res += encodedText[j]\r\n            \r\n        return res.rstrip()",
    "java": "// Runtime: 57 ms (Top 15.7%) | Memory: 54.11 MB (Top 92.9%)\r\n\r\nclass Solution {\r\n    public String decodeCiphertext(String str, int rows) {\r\n\r\n        //first find column size!!\r\n    \tint cols=str.length()/rows;\r\n    \tStringBuilder res=new StringBuilder(),new_res=new StringBuilder();;\r\n    \tfor(int i=0;i<cols;i++) {\r\n        \r\n            //iterating diagonally!!\r\n            for(int j=i;j<str.length();j+=cols+1)\r\n    \t\t\tres.append(str.charAt(j));\r\n    \t}\r\n        \r\n        //removing last spaces!!!\r\n        int fg=0;\r\n        for(int i=res.length()-1;i>=0;i--) {\r\n            \r\n            if(fg==0&&res.charAt(i)==' ')\r\n                continue;\r\n            fg=1;\r\n            new_res.append(res.charAt(i));\r\n        }\r\n        return new_res.reverse().toString();\r\n    }\r\n}",
    "javascript": "// Runtime: 144 ms (Top 94.59%) | Memory: 106.20 MB (Top 91.89%)\r\n\r\nvar decodeCiphertext = function(encodedText, rows) {\r\n    const numColumns = encodedText.length / rows;\r\n    const stringBuilder = [];\r\n    let nextCol = 1;\r\n    let row = 0;\r\n    let col = 0;\r\n    let index = 0\r\n    while (index < encodedText.length) {\r\n        stringBuilder.push(encodedText[index]);\r\n        if (row === rows - 1 || col === numColumns - 1) {\r\n            row = 0;\r\n            col = nextCol;\r\n            nextCol++;\r\n        } else {\r\n            row++;\r\n            col++;\r\n        }\r\n        index = calcIndex(row, col, numColumns);\r\n    }\r\n    while (stringBuilder[stringBuilder.length - 1] === ' ') {\r\n        stringBuilder.pop();\r\n    }\r\n    return stringBuilder.join('');\r\n};\r\n\r\nfunction calcIndex(row, col, numColumns) {\r\n    return row * numColumns + col;\r\n}"
  }
}
