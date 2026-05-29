export default {
  "id": 553,
  "name": "Optimal Division",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/optimal-division",
  "relativeDir": "O/Optimal Division",
  "slug": "0553-optimal-division",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 31,
    "java": 24,
    "python": 12,
    "javascript": 11
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.0%) | Memory: 8.50 MB (Top 25.14%)\r\n\r\n// This code is using 2nd Approach.\r\n\r\nclass Solution {\r\npublic:\r\n    string optimalDivision(vector<int>& nums) {\r\n        int n=nums.size();\r\n        string ans;\r\n\t\t\r\n\t\t// check for size if its 1 then we can't use parantheses and \r\n\t\t// if its 2 then also we should not use it.\r\n\t\t\r\n        if(n==1) return ans=to_string(nums[0]);\r\n        if(n==2) return ans=to_string(nums[0])+\"/\"+to_string(nums[1]);\r\n\t\t\r\n\t\t//  for size greater than 2 add paranthese after first number \r\n\t\t\r\n        ans=to_string(nums[0]);\r\n        ans.append(\"/(\");\r\n        for(int i=1;i<n-1;i++){\r\n            ans.append(to_string(nums[i])+\"/\");\r\n        }\r\n        ans.append(to_string(nums[n-1]));\r\n        ans.append(\")\");\r\n\t\t\r\n\t\t// finally this becomes as a/(b/c/d/....) which is our answer\r\n\t\t\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution(object):\r\n    def optimalDivision(self, nums):\r\n\r\n        A = list(map(str, nums))\r\n        \r\n        \r\n        if len(A) <= 2:\r\n            \r\n            return '/'.join(A)\r\n        \r\n        \r\n        return A[0] + '/(' + '/'.join(A[1:]) + ')'",
    "java": "// Runtime: 9 ms (Top 33.5%) | Memory: 41.11 MB (Top 16.7%)\r\n\r\nclass Solution {\r\n    public String optimalDivision(int[] nums) {\r\n    \r\n         if(nums.length==1){\r\n            return nums[0] + \"\";\r\n        }else if(nums.length==2){\r\n            StringBuilder sb=new StringBuilder();\r\n            sb.append(nums[0] + \"/\" + nums[1]);\r\n            return sb.toString();\r\n        }\r\n        \r\n        StringBuilder sb=new StringBuilder();\r\n         sb.append(nums[0]);\r\n         sb.append(\"/(\");\r\n       for(int i=1;i<nums.length-1;i++){           \r\n            sb.append(nums[i] + \"/\");\r\n        }\r\n        sb.append(nums[nums.length-1] + \")\");\r\n      \r\n        return sb.toString();\r\n    }\r\n}",
    "javascript": "var optimalDivision = function(nums) {\r\n\tconst { length } = nums;\r\n\tif (length === 1) return `${nums[0]}`;\r\n\tif (length === 2) return nums.join('/');\r\n\r\n\treturn nums.reduce((result, num, index) => {\r\n\t\tif (index === 0) return `${num}/(`;\r\n\t\tif (index === length - 1) return result + `${num})`;\r\n\t\treturn result + `${num}/`;\r\n\t}, '');\r\n};"
  }
}
