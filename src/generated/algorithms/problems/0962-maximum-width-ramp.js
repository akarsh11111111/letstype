export default {
  "id": 962,
  "name": "Maximum Width Ramp",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-width-ramp",
  "relativeDir": "M/Maximum Width Ramp",
  "slug": "0962-maximum-width-ramp",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 22,
    "java": 23,
    "python": 16,
    "javascript": 20
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int maxWidthRamp(vector<int>& nums) {\r\n        int n=nums.size();\r\n        if(n==2){\r\n            if(nums[0]<=nums[1])return 1;\r\n            return 0;\r\n        }\r\n        stack<int>st;\r\n        for(int i=0;i<n;i++){\r\n            if(st.empty()||nums[i]<nums[st.top()]){st.push(i);}  // maintaining a monotonic decreasing stack\r\n        }\r\n        int ramp=0;\r\n        for(int i=n-1;i>=0;i--){\r\n            while(!st.empty() && nums[i]>=nums[st.top()] ){    \r\n                ramp=max(ramp,i-st.top());\r\n                st.pop();\r\n            }\r\n        }\r\n        return ramp;\r\n    }\r\n};",
    "python": "# Runtime: 635 ms (Top 30.72%) | Memory: 21.1 MB (Top 46.08%)\r\nclass Solution:\r\n    def maxWidthRamp(self, nums: List[int]):\r\n        st=[]\r\n        n=len(nums)\r\n        for i in range(n):\r\n            if len(st)==0 or nums[st[-1]]>=nums[i]:\r\n                st.append(i)\r\n        print(st)\r\n        max_idx=-1\r\n        for j in range(n-1,-1,-1):\r\n            while len(st) and nums[st[-1]]<=nums[j]:\r\n                prev=st.pop()\r\n                max_idx=max(max_idx,j-prev)\r\n\r\n        return max_idx",
    "java": "class Solution {\r\n    public int maxWidthRamp(int[] nums) {\r\n        Stack<Integer> s = new Stack<>();\r\n        int res = 0;\r\n        for(int i = 0; i< nums.length; i++){\r\n            if(!s.isEmpty() && nums[s.peek()]<=nums[i]) {\r\n                res = Math.max(res, i-s.peek());\r\n                continue;\r\n            }\r\n            s.push(i);\r\n        }\r\n        int i = nums.length-1;\r\n        while(!s.isEmpty() && i>=0){\r\n            if(nums[s.peek()]<=nums[i]){\r\n                res = Math.max(res, i-s.peek());\r\n                s.pop();\r\n            }else{\r\n                i--;\r\n            }\r\n        }\r\n        return res;\r\n    }\r\n}",
    "javascript": "var maxWidthRamp = function(nums) {\r\n  let stack = [], ans = 0;\r\n  for (let i = 0; i < nums.length; i++) {\r\n    let index = lower_bound(stack, i);\r\n    ans = Math.max(ans, i - index);\r\n    if (!stack.length || nums[i] < nums[stack[stack.length - 1]]) stack.push(i);\r\n  }\r\n  return ans;\r\n  \r\n  function lower_bound(arr, index) {\r\n    if (!arr.length) return index;\r\n    let low = 0, high = arr.length - 1;\r\n    while (low < high) {\r\n      let mid = Math.floor((low + high) / 2);\r\n      if (nums[arr[mid]] <= nums[index]) high = mid;\r\n      else low = mid + 1;\r\n    }\r\n    return nums[arr[low]] <= nums[index] ? arr[low] : index;\r\n  }\r\n};"
  }
}
