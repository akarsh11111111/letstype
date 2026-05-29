export default {
  "id": 1764,
  "name": "Form Array by Concatenating Subarrays of Another Array",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/form-array-by-concatenating-subarrays-of-another-array",
  "relativeDir": "F/Form Array by Concatenating Subarrays of Another Array",
  "slug": "1764-form-array-by-concatenating-subarrays-of-another-array",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 47,
    "java": 38,
    "python": 14,
    "javascript": 23
  },
  "languages": {
    "cpp": "// Runtime: 30 ms (Top 53.45%) | Memory: 14 MB (Top 39.66%)\r\nclass Solution {\r\npublic:\r\n    //Idea is to use KMP Longest Prefix Suffix array to match if one array is subarray of another array.\r\n    bool canChoose(vector<vector<int>>& groups, vector<int>& nums) {\r\n        int m = nums.size();\r\n        int index = 0;\r\n        for(auto group : groups){\r\n            int n = group.size();\r\n            //Step-1 Generate LPS\r\n            vector<int>lps(n,0);\r\n            for(int i = 1;i<n; i++){\r\n                int j = lps[i-1];\r\n                while(j>0 && group[i] != group[j]){\r\n                    j = lps[j-1];\r\n                }\r\n                if(group[i] == group[j]){\r\n                    j++;\r\n                }\r\n                lps[i] = j;\r\n            }\r\n\r\n            //Step 2 - Matching\r\n            int j = 0;\r\n            while(index<m){\r\n                if(nums[index]==group[j]){\r\n                    j++;\r\n                    index++;\r\n                }\r\n                if(j==n)\r\n                    break;\r\n                else\r\n                 if(index <m && nums[index] != group[j]){\r\n                    if(j >0){\r\n                        j=lps[j-1];\r\n                    }else{\r\n                        index++;\r\n                    }\r\n                }\r\n            }\r\n            if(j != n)\r\n                return false;\r\n        }\r\n\r\n        return true;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def canChoose(self, groups: List[List[int]], nums: List[int]) -> bool:\r\n        groups = ['-'.join(str(s) for s in group) for group in groups]\r\n        nums = '-'.join(str(s) for s in nums)\r\n        j = k = 0\r\n        while k < len(groups):\r\n            group = groups[k]\r\n            i = nums.find(group, j)\r\n            if i == -1: return False\r\n            if i == 0 or i > 0 and nums[i-1] == '-':\r\n                j = i + len(group)\r\n                k += 1\r\n            else: j += 1\r\n        return True",
    "java": "class Solution {\r\n    \r\n    public int search(int[] group, int[] nums, int start, int end )\r\n    {\r\n        int i=start, j=0;\r\n        while(i<end && j<group.length)\r\n        {\r\n            if(nums[i] == group[j])\r\n            {\r\n                i++;\r\n                j++;\r\n\r\n                if(j == group.length)\r\n                    return i;\r\n            }\r\n\r\n            else {\r\n                i = i - j + 1;\r\n                j = 0;\r\n            }\r\n\r\n        }\r\n        return -1;\r\n    }\r\n    public boolean canChoose(int[][] groups, int[] nums) {\r\n        int start=0, end =nums.length;\r\n        \r\n        for(int[] group : groups)\r\n        {\r\n            start = search(group, nums, start, end);\r\n            if(start == -1)\r\n                return false;\r\n        }\r\n        \r\n        return true;\r\n        \r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number[][]} groups\r\n * @param {number[]} nums\r\n * @return {boolean}\r\n */\r\nvar canChoose = function(groups, nums) {\r\n    let i=0;\r\n    for(let start=0;i<groups.length&&groups[i].length+start<=nums.length;start++){\r\n        \r\n        if(search(groups[i], nums, start)){\r\n            start+=groups[i].length-1;\r\n            i++;\r\n        }\r\n    }\r\n    return i==groups.length;\r\n    \r\n    function search(group, nums, start){\r\n        for(let i =0;i<group.length;i++){\r\n            if(group[i]!=nums[i+start]) return false;\r\n        }\r\n        return true;\r\n    }\r\n};"
  }
}
