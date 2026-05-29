export default {
  "id": 2033,
  "name": "Minimum Operations to Make a Uni-Value Grid",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-operations-to-make-a-uni-value-grid",
  "relativeDir": "M/Minimum Operations to Make a Uni-Value Grid",
  "slug": "2033-minimum-operations-to-make-a-uni-value-grid",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 19,
    "java": 30,
    "python": 39,
    "javascript": 23
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int minOperations(vector<vector<int>>& grid, int x) {\r\n        vector<int>nums;\r\n        int m=grid.size(),n=grid[0].size();\r\n        for(int i=0;i<m;i++)\r\n            for(int j=0;j<n;j++)\r\n                nums.push_back(grid[i][j]);\r\n        sort(nums.begin(),nums.end());\r\n        int target=nums[m*n/2],ans=0;\r\n        for(int i=m*n-1;i>=0;i--){\r\n            if(abs(nums[i]-target)%x!=0)\r\n                return -1;\r\n            else\r\n                ans+=abs(nums[i]-target)/x;  \r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "\r\nclass Solution:\r\n    def minOperations(self, grid: List[List[int]], x: int) -> int:\r\n        \r\n        m = len(grid)\r\n        n = len(grid[0])\r\n\t\t\r\n\t\t# handle the edge case\r\n        if m==1 and n==1: return 0\r\n\t\t\r\n\t\t# transform grid to array, easier to operate\r\n        arr = [] \r\n        for i in range(m):\r\n            arr+=grid[i]\r\n        \r\n        arr.sort()\r\n        \r\n\t\t# the median is arr[len(arr)//2] when len(arr) is odd\r\n\t\t# or may be arr[len(arr)//2] and arr[len(arr)//2-1] when len(arr) is even.\r\n        cand1 = arr[len(arr)//2]\r\n        cand2 = arr[len(arr)//2-1]\r\n        \r\n        return min(\r\n            self.get_num_operations_to_target(grid, cand1, x),\r\n            self.get_num_operations_to_target(grid, cand2, x)\r\n        )\r\n        \r\n        \r\n    def get_num_operations_to_target(self, grid, target,x):\r\n\t\t\"\"\"Get the total number of operations to transform all grid elements to the target value.\"\"\"\r\n        ans = 0\r\n        for i in range(len(grid)):\r\n            for j in range(len(grid[0])):\r\n                if abs(grid[i][j]-target)%x!=0:\r\n                    return -1\r\n                else:\r\n                    ans+=abs(grid[i][j]-target)//x\r\n\r\n        return ans",
    "java": "class Solution {\r\n    public int minOperations(int[][] grid, int x) {\r\n        int[] arr = new int[grid.length * grid[0].length];\r\n        int index = 0;\r\n        \r\n        for (int i = 0; i < grid.length; i++) {\r\n            for (int j = 0; j < grid[0].length; j++) {\r\n                arr[index++] = grid[i][j];\r\n            }\r\n        }\r\n        \r\n        Arrays.sort(arr);\r\n        int median = arr[(arr.length - 1) / 2];\r\n        int steps = 0;\r\n        \r\n        for (int num : arr) {\r\n            if (num == median) {\r\n                continue;\r\n            }\r\n            \r\n            if (Math.abs(num - median) % x != 0) {\r\n                return -1;\r\n            }\r\n            \r\n            steps += (Math.abs(num - median) / x);\r\n        }\r\n        \r\n        return steps;\r\n    }\r\n}",
    "javascript": "var minOperations = function(grid, x) {\r\n    \r\n    let remainder = -Infinity, flatten = [], res = 0;\r\n    \r\n    for(let i = 0;i<grid.length;i++){\r\n        for(let j = 0;j<grid[i].length;j++){\r\n            \r\n            if(remainder === -Infinity)\r\n                remainder = grid[i][j] % x;\r\n            else if(remainder !== grid[i][j] % x){\r\n                return -1;\r\n            }\r\n            flatten.push(grid[i][j])\r\n        }\r\n    }\r\n    flatten.sort((a,b)=> a-b);\r\n    let median = flatten[~~(flatten.length/2)] \r\n\r\n    for(let i = 0;i<flatten.length;i++){\r\n        res += Math.abs(flatten[i] - median) / x\r\n    }\r\n    return res;\r\n};"
  }
}
