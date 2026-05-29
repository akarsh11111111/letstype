export default {
  "id": 2334,
  "name": "Subarray With Elements Greater Than Varying Threshold",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/subarray-with-elements-greater-than-varying-threshold",
  "relativeDir": "S/Subarray With Elements Greater Than Varying Threshold",
  "slug": "2334-subarray-with-elements-greater-than-varying-threshold",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 32,
    "java": 38,
    "python": 12,
    "javascript": 33
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int validSubarraySize(vector<int>& nums, int threshold) {\r\n        int n = nums.size();\r\n        vector<long long> lr(n, n), rl(n, -1);\r\n        \r\n        vector<int> s;\r\n        for(int i = 0; i < n; ++i) {\r\n            while(!s.empty() and nums[i] < nums[s.back()]) {\r\n                lr[s.back()] = i;\r\n                s.pop_back();\r\n            }\r\n            s.push_back(i);\r\n        }\r\n        s.clear();\r\n        for(int i = n - 1; ~i; --i) {\r\n            while(!s.empty() and nums[i] < nums[s.back()]) {\r\n                rl[s.back()] = i;\r\n                s.pop_back();\r\n            }\r\n            s.push_back(i);\r\n        }\r\n        \r\n        for(int i = 0; i < n; ++i) {\r\n            long long length = lr[i] - rl[i] - 1;\r\n            if(1LL * nums[i] * length > threshold) return length;\r\n        }\r\n        \r\n        return -1;\r\n    }\r\n};\r\n// please upvote if you like",
    "python": "# Runtime: 3127 ms (Top 12.36%) | Memory: 28.8 MB (Top 64.23%)\r\nclass Solution:\r\n    def validSubarraySize(self, nums: List[int], threshold: int) -> int:\r\n        nums = [0] + nums + [0]\r\n        stack = [0]\r\n        for i in range(1,len(nums)):\r\n            while nums[i] < nums[stack[-1]]:\r\n                tmp = nums[stack.pop()]\r\n                if tmp > threshold / (i - stack[-1] - 1):\r\n                    return i - stack[-1] - 1\r\n            stack.append(i)\r\n        return -1",
    "java": "class Solution {\r\n    public int validSubarraySize(int[] nums, int threshold) {\r\n        int n = nums.length;\r\n        int[] next_small = new int[n];\r\n        int[] prev_small = new int[n];\r\n        Stack<Integer> stack = new Stack<>();\r\n        stack.push(0);\r\n        Arrays.fill(next_small, n);\r\n        Arrays.fill(prev_small, -1);\r\n        for(int i=1;i<n;i++){\r\n            while(!stack.isEmpty() && nums[stack.peek()] >= nums[i]){\r\n                stack.pop();\r\n            }    \r\n            if(stack.size()!=0){\r\n                prev_small[i] = stack.peek();\r\n            }\r\n            stack.push(i);\r\n        }\r\n        stack = new Stack<>();\r\n        stack.push(n-1);\r\n        for(int i=n-2;i>=0;i--){\r\n            while(!stack.isEmpty() && nums[stack.peek()] >= nums[i]){\r\n                stack.pop();\r\n            }    \r\n            if(stack.size()!=0){\r\n                next_small[i] = stack.peek();\r\n            }\r\n            stack.push(i);\r\n        }\r\n        for(int i=0;i<n;i++){\r\n            int len = next_small[i] - prev_small[i] - 1;\r\n            if(threshold/(double)len < nums[i]){\r\n                return len;\r\n            }\r\n        }\r\n        return -1;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number[]} nums\r\n * @param {number} threshold\r\n * @return {number}\r\n */\r\nvar validSubarraySize = function(nums, threshold) {\r\n    /*\r\n    Approach: Use monotonous increasing array\r\n    */\r\n    let stack=[];\r\n    for(let i=0;i<nums.length;i++){\r\n        let start = i;\r\n        while(stack.length>0 && stack[stack.length-1][0]>nums[i]){\r\n            let popped = stack.pop();\r\n            let min = popped[0];\r\n            let len = i-popped[1];\r\n            if(min>threshold/len){\r\n                return len;\r\n            }\r\n            start = popped[1];\r\n        }\r\n        stack.push([nums[i],start]);\r\n    }\r\n    let end = nums.length-1;\r\n    for(let i=0;i<stack.length;i++){\r\n        let len = end - stack[i][1] +1;\r\n        let min = stack[i][0];\r\n        if(min>threshold/len){\r\n            return len;\r\n        }\r\n    }\r\n    return -1;\r\n};"
  }
}
