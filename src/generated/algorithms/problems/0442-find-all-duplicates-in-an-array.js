export default {
  "id": 442,
  "name": "Find All Duplicates in an Array",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-all-duplicates-in-an-array",
  "relativeDir": "F/Find All Duplicates in an Array",
  "slug": "0442-find-all-duplicates-in-an-array",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 16,
    "java": 16,
    "python": 15,
    "javascript": 10
  },
  "languages": {
    "cpp": "// Runtime: 109 ms (Top 73.24%) | Memory: 34.7 MB (Top 28.82%)\r\nclass Solution {\r\npublic:\r\n    vector<int> findDuplicates(vector<int>& nums) {\r\n        int n=nums.size();\r\n        vector<int> a;\r\n        vector<int> arr(n+1,0);\r\n        for(int i=0;i<nums.size();i++)\r\n            arr[nums[i]]++;\r\n\r\n        for(int j=0;j<=n;j++)\r\n            if(arr[j]==2) a.push_back(j);\r\n\r\n        return a;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def findDuplicates(self, nums: List[int]) -> List[int]:\r\n        res = []\r\n        hm = {}\r\n        # adding entries in hashmap to check frequency\r\n        for i, v in enumerate(nums):\r\n            if v not in hm:\r\n                hm[v] = 1\r\n            else:\r\n                hm[v] += 1\r\n        # checking frequency of item and adding output to an array\r\n        for key, value in hm.items():\r\n            if value > 1:\r\n                res.append(key)\r\n        return res",
    "java": "// Runtime: 14 ms (Top 36.17%) | Memory: 65.2 MB (Top 76.59%)\r\nclass Solution {\r\n    public List<Integer> findDuplicates(int[] nums) {\r\n        List<Integer> ans = new ArrayList<>();\r\n        for(int i=0;i<nums.length;i++){\r\n            int ind = Math.abs(nums[i])-1;\r\n            if(nums[ind]<0){\r\n                ans.add(Math.abs(nums[i]));\r\n            }\r\n            else{\r\n                nums[ind] = -1*nums[ind];\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n}",
    "javascript": "// Approach : Mark Visited Elements in the Input Array itself\r\nvar findDuplicates = function(nums) {\r\n    let result = [];\r\n    for(let i = 0; i < nums.length; i++) {\r\n        let id = Math.abs(nums[i]) - 1;\r\n        if(nums[id] < 0) result.push(id + 1);\r\n        else nums[id] = - Math.abs(nums[id]);\r\n    }\r\n    return result;\r\n};"
  }
}
