export default {
  "id": 1237,
  "name": "Find Positive Integer Solution for a Given Equation",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-positive-integer-solution-for-a-given-equation",
  "relativeDir": "F/Find Positive Integer Solution for a Given Equation",
  "slug": "1237-find-positive-integer-solution-for-a-given-equation",
  "availableLanguages": [
    "cpp",
    "java",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 43,
    "java": 37,
    "javascript": 35
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<vector<int>> findSolution(CustomFunction& customfunction, int z) {\r\n        int i=1;\r\n        vector<vector<int>> ans;\r\n        // finding minimum i such that there is no x>=i ans y>=i for which f(x,y)=z\r\n        for(;i<1001;i++){                             \r\n            if(customfunction.f(i,i)>z){\r\n                break;\r\n            }\r\n        }\r\n        i--;\r\n        int k=i;\r\n        // checking bottom right grid\r\n        //k represents x and j represents y\r\n        for(int j=i;j<=1000 && k>0;j++){\r\n            int curr=customfunction.f(k,j);\r\n            if(curr==z){\r\n                ans.push_back({k,j});\r\n                k--;\r\n            }\r\n            else if(curr>z){\r\n                k--;\r\n                j--;\r\n            }\r\n        }\r\n        k=i;\r\n        //checking top left grid\r\n        //now k represents y and j represents x \r\n        for(int j=i+1;j<=1000 && k>0;j++){\r\n            int curr=customfunction.f(j,k);\r\n            if(curr==z){\r\n                ans.push_back({j,k});\r\n                k--;\r\n            }\r\n            else if(curr>z){\r\n                k--;\r\n                j--;\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "java": "class Solution {\r\n    private int binarySearch(int ans, int x, CustomFunction func){\r\n        int left = 1, right =1000;\r\n        while(left <= right){\r\n            int mid = left + (right -left)/2;\r\n            \r\n            int res = func.f(x, mid);\r\n            \r\n            if(res == ans){\r\n                return mid;\r\n            }\r\n            if(res < ans){\r\n                left = mid+1;\r\n            }else{\r\n                right = mid-1;\r\n            }\r\n        }\r\n        return -1;\r\n    }\r\n    public List<List<Integer>> findSolution(CustomFunction customfunction, int z) {\r\n        List<List<Integer>> res = new ArrayList<>();\r\n\r\n        for(int i=1; i<=1000; i++){\r\n            int ans = binarySearch(z, i, customfunction);\r\n            if(ans != -1){\r\n                List<Integer> temp = new ArrayList<>();\r\n                temp.add(i);\r\n                temp.add(ans);\r\n                res.add(temp);\r\n            }\r\n            if(customfunction.f(i,1) > z){\r\n                break;\r\n            }\r\n        }\r\n        return res;\r\n    }\r\n}",
    "javascript": "// Runtime: 58 ms (Top 64.29%) | Memory: 43.20 MB (Top 11.9%)\r\n\r\n/**\r\n * // This is the CustomFunction's API interface.\r\n * // You should not implement it, or speculate about its implementation\r\n * function CustomFunction() {\r\n *     @param {integer, integer} x, y\r\n *     @return {integer}\r\n *     this.f = function(x, y) {\r\n *         ...\r\n *     };\r\n * };\r\n */\r\n\r\n/**\r\n * @param {CustomFunction} customfunction\r\n * @param {integer} z\r\n * @return {integer[][]}\r\n */\r\nvar findSolution = function(customfunction, z) {\r\n    var ans = []\r\n    var x = 1, y = 1000;\r\n    while(x<=1000 && y>0){\r\n        if(customfunction.f(x,y)>z){\r\n            y--;\r\n        }else if(customfunction.f(x,y)<z){\r\n            x++;\r\n        }else{\r\n            ans.push([x,y]);\r\n            x++;\r\n            y--;\r\n        }\r\n    }\r\n    return ans;\r\n};"
  }
}
