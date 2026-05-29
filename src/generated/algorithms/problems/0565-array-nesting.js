export default {
  "id": 565,
  "name": "Array Nesting",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/array-nesting",
  "relativeDir": "A/Array Nesting",
  "slug": "0565-array-nesting",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 23,
    "java": 18,
    "python": 17,
    "javascript": 12
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int dfs(vector<int>&nums,int ind,int arr[],int res)\r\n    {\r\n        if(arr[ind]==1)\r\n            return res;\r\n        res++;\r\n        arr[ind]=1;\r\n        return dfs(nums,nums[ind],arr,res);\r\n    }\r\n    int arrayNesting(vector<int>& nums) {\r\n        \r\n        int arr[nums.size()],ans=0;\r\n        for(int i=0;i<nums.size();i++)\r\n            arr[i]=0;\r\n        for(int i=0;i<nums.size();i++)\r\n        {\r\n            int res=dfs(nums,i,arr,0);\r\n            ans=max(res,ans);\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def arrayNesting(self, nums: List[int]) -> int:\r\n        max_len = 0\r\n        visited = set()\r\n        def dfs(nums, index, dfs_visited):\r\n            if index in dfs_visited:\r\n                return len(dfs_visited)\r\n            \r\n            # add the index to dfs_visited and visited\r\n            visited.add(index)\r\n            dfs_visited.add(index)\r\n            return dfs(nums, nums[index], dfs_visited)\r\n            \r\n        for i in range(len(nums)):\r\n            if i not in visited:\r\n                max_len = max(max_len, dfs(nums, i, set()))\r\n        return max_len",
    "java": "class Solution {\r\n    public int arrayNesting(int[] nums) {\r\n        int res=0;\r\n        boolean[] visited = new boolean[nums.length];\r\n        for(int i=0;i<nums.length;i++){\r\n            if(!visited[i]){\r\n                int len = dfs(nums,i,visited);\r\n                res = Math.max(res,len);\r\n            }\r\n        }\r\n        return res;\r\n    }\r\n    public int dfs(int[] nums,int i,boolean[] visited){\r\n        if(visited[i]) return 0;\r\n        visited[i] = true;\r\n        return 1+dfs(nums,nums[i],visited);\r\n    }\r\n}",
    "javascript": "var arrayNesting = function(nums) {\r\n\treturn nums.reduce((result, num, index) => {\r\n\t\tlet count = 1;\r\n\r\n\t\twhile (nums[index] !== index) {\r\n\t\t\tconst next = nums[index];\r\n\t\t\t[nums[index], nums[next]] = [nums[next], nums[index]];\r\n\t\t\tcount += 1;\r\n\t\t}\r\n\t\treturn Math.max(result, count);\r\n\t}, 0);\r\n};"
  }
}
