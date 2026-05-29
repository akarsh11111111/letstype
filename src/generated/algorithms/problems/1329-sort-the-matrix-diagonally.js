export default {
  "id": 1329,
  "name": "Sort the Matrix Diagonally",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/sort-the-matrix-diagonally",
  "relativeDir": "S/Sort the Matrix Diagonally",
  "slug": "1329-sort-the-matrix-diagonally",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 24,
    "java": 33,
    "python": 6,
    "javascript": 33
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n\tvoid sortmat(int i,int j,vector<vector<int>>& mat,int m,int n,vector<int>& temp){\r\n\t\tif(i>=m || j>=n){\r\n\t\t\tsort(temp.begin(),temp.end());\r\n\t\t\treturn ;\r\n\t\t}\r\n\t\ttemp.push_back(mat[i][j]);\r\n\t\tsortmat(i+1,j+1,mat,m,n,temp);\r\n\t\tmat[i][j]=temp.back();\r\n\t\ttemp.pop_back();\r\n\t}\r\n\r\n\tvector<vector<int>> diagonalSort(vector<vector<int>>& mat) {\r\n\t\tint m=mat.size();\r\n\t\tint n=mat[0].size();\r\n\t\tvector<int>temp;\r\n//      For column\r\n\t\tfor(int j=0;j<n;j++) sortmat(0,j,mat,m,n,temp);\r\n//      For Row\r\n\t\tfor(int i=1;i<m;i++) sortmat(i,0,mat,m,n,temp);\r\n\t\treturn mat;\r\n\t}\r\n};",
    "python": "class Solution:\r\n    def diagonalSort(self, A: List[List[int]]) -> List[List[int]]:\r\n        n, m, d = len(A), len(A[0]), defaultdict(list)\r\n        any(d[i - j].append(A[i][j]) for i in range(n) for j in range(m))\r\n        any(d[sum_].sort(reverse=1) for sum_ in d)\r\n        return [[d[i-j].pop() for j in range(m)] for i in range(n)]",
    "java": "class Solution {\r\n    public int[][] diagonalSort(int[][] mat) {\r\n        int n = mat.length; \r\n        int m = mat[0].length;\r\n        for(int i=0;i<m;i++){\r\n            give(0,i,mat,n,m);\r\n        }\r\n        for(int i=1;i<n;i++){\r\n            give(i,0,mat,n,m);\r\n        }\r\n        return mat;\r\n    }\r\n    public void give(int i,int j,int[][] mat,int n,int m){\r\n        int[] dig = new int[Math.min(m-j,n-i)];\r\n        int r = i;\r\n        int c = j;\r\n        int k = 0;\r\n        while(r<n && c<m){\r\n            dig[k] = mat[r][c];\r\n            r++;\r\n            c++;\r\n            k++;\r\n        }\r\n        Arrays.sort(dig);\r\n        k = 0;\r\n        while(i<n && j<m){\r\n            mat[i][j] = dig[k];\r\n            i++;\r\n            j++;\r\n            k++;\r\n        }\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number[][]} mat\r\n * @return {number[][]}\r\n */\r\nvar diagonalSort = function(mat) {\r\nconst res=new Array(mat.length);\r\n    \r\nfor(let i=0;i<mat.length;i++)\r\n    res[i]=new Array(mat[i].length);\r\n\r\n    \r\nfor(let i=0;i<mat.length;i++){\r\n    for(let j=0;j<mat[i].length;j++){\r\n        if(i===0 || j===0){\r\n            const scale= i-j;\r\n            let val=[],index=[];\r\n            \r\n            for(let i=0;i<mat.length;i++){\r\n                for(let j=0;j<mat[i].length;j++){\r\n                    if(scale===i-j){\r\n                        val.push(mat[i][j]);    \r\n                        index.push([i,j]);            \r\n                    }\r\n                }\r\n            }\r\n            val=val.sort((a,b)=>a-b);\r\n            index.forEach(([x,y],id)=>res[x][y]=val[id]);\r\n        }\r\n    }\r\n}\r\n    return res;\r\n\r\n};"
  }
}
