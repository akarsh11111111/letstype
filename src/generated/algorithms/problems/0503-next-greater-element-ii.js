export default {
  "id": 503,
  "name": "Next Greater Element II",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/next-greater-element-ii",
  "relativeDir": "N/Next Greater Element II",
  "slug": "0503-next-greater-element-ii",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 24,
    "java": 17,
    "python": 14,
    "javascript": 21
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<int> nextGreaterElements(vector<int>& nums) {\r\n        int n = nums.size();\r\n        vector<int> res;\r\n        \r\n        for(int i = 0; i < n; i++){\r\n            int j = i + 1;\r\n            if(j == n) j = 0;\r\n            int next = -1;\r\n            \r\n            while(j != i){\r\n                if(nums[j] > nums[i]){\r\n                    next = nums[j];\r\n                    break;\r\n                }\r\n                j++;\r\n                if(j == n) j = 0;\r\n            }\r\n            res.push_back(next);\r\n        }\r\n        return res;\r\n    }\r\n};",
    "python": "// Runtime: 151 ms (Top 99.29%) | Memory: 19.30 MB (Top 5.84%)\r\n\r\nclass Solution:\r\n    def nextGreaterElements(self, nums: List[int]) -> List[int]:\r\n        st = []\r\n        n = len(nums)\r\n        ans = [-1] * n\r\n        for i in range(2*n-1, -1, -1):\r\n            while st and st[-1] <= nums[i%n]:\r\n                st.pop()\r\n            if st and i < n:\r\n                ans[i] = st[-1]\r\n            st.append(nums[i%n])\r\n        return ans",
    "java": "class Solution {\r\n    public int[] nextGreaterElements(int[] nums) {\r\n        Stack<Integer>s=new Stack<>();\r\n        for(int i=nums.length-1;i>=0;i--){\r\n            s.push(nums[i]);\r\n        }\r\n        for(int i=nums.length-1;i>=0;i--){\r\n            int num=nums[i];\r\n            while(!s.isEmpty() && s.peek()<=nums[i]){\r\n                s.pop();\r\n            }\r\n            nums[i]=s.empty()?-1:s.peek();\r\n            s.push(num);\r\n        }\r\n        return nums;\r\n    }\r\n}",
    "javascript": "// Runtime: 218 ms (Top 26.53%) | Memory: 48.7 MB (Top 35.44%)\r\nvar nextGreaterElements = function(nums) {\r\n    const len = nums.length;\r\n    const ans = new Array(len).fill(-1);\r\n    const stack = [];\r\n    for(let i = 0; i < len; i++) {\r\n        if(i == 0) stack.push([i, nums[i]]);\r\n        else {\r\n            while(stack.length && stack.at(-1)[1] < nums[i]) {\r\n                ans[stack.pop()[0]] = nums[i];\r\n            }\r\n            stack.push([i, nums[i]]);\r\n        }\r\n    }\r\n    for(let num of nums) {\r\n        while(stack.length && stack.at(-1)[1] < num) {\r\n            ans[stack.pop()[0]] = num;\r\n        }\r\n    }\r\n    return ans;\r\n};"
  }
}
