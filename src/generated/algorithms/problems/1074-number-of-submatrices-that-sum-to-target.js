export default {
  "id": 1074,
  "name": "Number of Submatrices That Sum to Target",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/number-of-submatrices-that-sum-to-target",
  "relativeDir": "N/Number of Submatrices That Sum to Target",
  "slug": "1074-number-of-submatrices-that-sum-to-target",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 27,
    "java": 36,
    "python": 40,
    "javascript": 25
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int numSubmatrixSumTarget(vector<vector<int>>& matrix, int target) {\r\n        int n=matrix.size(),m=matrix[0].size(),count=0;\r\n        vector<vector<int>>temp(n+1,vector<int>(m));\r\n        for(int i=0;i<n;i++){\r\n            for(int j=0;j<m;j++){\r\n                temp[i+1][j]=temp[i][j]+matrix[i][j];\r\n            }\r\n        }\r\n        for(int i=0;i<n;i++){\r\n            for(int j=i+1;j<=n;j++){\r\n                for(int k=0;k<m;k++){\r\n                    int sum=0;\r\n                    for(int l=k;l<m;l++){\r\n                        sum+=temp[j][l]-temp[i][l];\r\n                        if(sum==target){\r\n                            // cout<<j<<\" \"<<i<<\" \"<<k<<endl;\r\n                            count++;\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n        }\r\n        return count;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def numSubmatrixSumTarget(self, matrix: List[List[int]], target: int) -> int:\r\n        m, n = len(matrix), len(matrix[0])\r\n        matrix_sums = [[0 for _ in range(n)] for _ in range(m)]\r\n        \r\n        # Calculate all the submatrices sum with the transition formula we found\r\n        for row in range(m):\r\n            for col in range(n):\r\n                # first cell\r\n                if row == 0 and col == 0:\r\n                    matrix_sums[row][col] = matrix[row][col]\r\n                # Rows and columns are like prefix sums, without intersection\r\n                elif row == 0:\r\n                    matrix_sums[row][col] = matrix[row][col] + matrix_sums[row][col-1]\r\n                elif col == 0:\r\n                    matrix_sums[row][col] = matrix[row][col] + matrix_sums[row-1][col]\r\n                \r\n                # current sum is the sum of the matrix above, to the left and subtract the intersection\r\n                else:\r\n                    matrix_sums[row][col] = matrix[row][col] \\\r\n                    + (matrix_sums[row][col-1]) \\\r\n                    + (matrix_sums[row-1][col]) \\\r\n                    - (matrix_sums[row-1][col-1])\r\n\r\n                \r\n        ans = 0\r\n        # Generate all submatrices\r\n        for y1 in range(m):\r\n            for x1 in range(n):\r\n                for y2 in range(y1, m):\r\n                    for x2 in range(x1, n):\r\n                        # calculate sum in O(1)\r\n                        submatrix_total = matrix_sums[y2][x2] \\\r\n                        - (matrix_sums[y2][x1-1] if x1-1 >= 0 else 0) \\\r\n                        - (matrix_sums[y1-1][x2] if y1-1 >= 0 else 0) \\\r\n                        + (matrix_sums[y1-1][x1-1] if y1-1 >= 0 and x1-1 >= 0 else 0)\r\n                        \r\n                        if submatrix_total == target:\r\n                            ans += 1\r\n        return ans",
    "java": "// Runtime: 321 ms (Top 35.18%) | Memory: 117.7 MB (Top 29.49%)\r\nclass Solution {\r\npublic int numSubmatrixSumTarget(int[][] matrix, int target) {\r\n    int m = matrix.length, n = matrix[0].length;\r\n\r\n    int[] summedArray = new int[n];\r\n    int ans = 0;\r\n    for(int i = 0; i < m; i++){ //starting row\r\n        Arrays.fill(summedArray, 0);\r\n        for(int j = i; j < m; j++){ //ending row\r\n            for(int k = 0; k < n; k++){ // column\r\n                summedArray[k] += matrix[j][k];\r\n            }\r\n            ans += subarraySum(summedArray, target);\r\n        }\r\n    }\r\n    return ans;\r\n}\r\n\r\n public int subarraySum(int[] nums, int k) {\r\n    //map<sum, freq>\r\n    Map<Integer, Integer> map = new HashMap<>();\r\n    int count = 0;\r\n    map.put(0,1);\r\n    int sum = 0;\r\n    for(int num : nums){\r\n        sum += num;\r\n        int diff = sum - k;\r\n        if(map.containsKey(diff)){\r\n            count += map.get(diff);\r\n        }\r\n        map.put(sum, map.getOrDefault(sum, 0) + 1);\r\n    }\r\n    return count;\r\n}\r\n}",
    "javascript": "var numSubmatrixSumTarget = function(matrix, target) {\r\n    let result = 0;\r\n    \r\n    for (let i = 0; i < matrix.length; i++) {\r\n        for (let j = 1; j < matrix[0].length; j++) {\r\n            matrix[i][j] = matrix[i][j] + matrix[i][j-1]\r\n        }\r\n    }\r\n    \r\n    for (let i = 0; i < matrix[0].length; i++) {\r\n        for (let j = i; j < matrix[0].length; j++) {\r\n            let dict = {};\r\n            let cur = 0;\r\n            dict[0] = 1;\r\n            \r\n            for (let k = 0; k < matrix.length; k++) {\r\n                cur += matrix[k][j] - ((i > 0)?(matrix[k][i - 1]):0);\r\n                result += ((dict[cur - target] == undefined)?0:dict[cur - target]);\r\n                dict[cur] = ((dict[cur] == undefined)?0:dict[cur])+1;\r\n            } \r\n        }\r\n    }\r\n    \r\n    return result;\r\n};"
  }
}
