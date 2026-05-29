export default {
  "id": 2289,
  "name": "Steps to Make Array Non-decreasing",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/steps-to-make-array-non-decreasing",
  "relativeDir": "S/Steps to Make Array Non-decreasing",
  "slug": "2289-steps-to-make-array-non-decreasing",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 32,
    "java": 32,
    "python": 14,
    "javascript": 15
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    using pi = pair<int, int>;\r\n    int totalSteps(vector<int>& nums) {\r\n        int N = nums.size();\r\n        map<int, int> mp;\r\n        vector<pi> del;    // stores pairs of (previous id, toDelete id)\r\n        for (int i = 0; i < N; ++i) {\r\n            mp[i] = nums[i];\r\n            if (i+1 < N && nums[i] > nums[i+1])\r\n                del.emplace_back(i, i+1);\r\n        }\r\n\r\n        int ans = 0;  // number of rounds\r\n        while (!del.empty()) {\r\n            ++ans;\r\n            vector<pi> nxt;  // pairs to delete in the next round\r\n            for (auto [i,j] : del) mp.erase(j);   // first, get rid of the required deletions\r\n            for (auto [i,j] : del) {\r\n                auto it = mp.find(i);\r\n                if ( it == end(mp) || next(it) == end(mp) )   // if it's not in the map anymore,\r\n                    continue;                   // OR if it's the last element, skip it\r\n                auto itn = next(it);            // now compare against next element in the ordering\r\n                if (it->second > itn->second)   \r\n                    nxt.emplace_back(it->first, itn->first);  // add the (current id, toDelete id)\r\n            }\r\n            swap(nxt, del);  // nxt is the new del\r\n        }\r\n        return ans;\r\n\r\n    }\r\n};",
    "python": "class Solution:\r\n    def totalSteps(self, nums: List[int]) -> int:\r\n        st = []\r\n        ans = 0\r\n        for i in nums:\r\n            t = 0\r\n            while st and st[-1][0] <= i:\r\n                t = max(t, st.pop()[1])\r\n            x = 0 \r\n            if st: \r\n                x = t+1 \r\n            st.append([i, x])\r\n            ans = max(ans, x)\r\n        return ans",
    "java": "class Solution {\r\n    \r\n    \r\n    \r\n    public int totalSteps(int[] nums) {\r\n        \r\n        int n = nums.length;\r\n        int ans = 0;\r\n        \r\n        Stack<Pair<Integer,Integer>> st = new Stack();\r\n        \r\n        st.push(new Pair(nums[n-1],0));\r\n        \r\n        \r\n        for(int i=n-2;i>=0;i--)\r\n        {\r\n            int count = 0;\r\n            \r\n            while(!st.isEmpty() && nums[i] > st.peek().getKey())\r\n            {\r\n                count = Math.max(count+1 , st.peek().getValue() );\r\n                st.pop();\r\n            }\r\n            \r\n            ans = Math.max(ans , count);\r\n            st.push(new Pair(nums[i],count));\r\n        }\r\n        \r\n        return ans;\r\n        \r\n    }\r\n}",
    "javascript": "// Runtime: 192 ms (Top 48.39%) | Memory: 61.2 MB (Top 67.74%)\r\nvar totalSteps = function(nums) {\r\n    let stack = [],\r\n        dp = new Array(nums.length).fill(0),\r\n        max = 0\r\n\r\n    for (let i = nums.length - 1; i >= 0; i--) {\r\n        while (stack.length > 0 && nums[i] > nums[stack[stack.length - 1]]) {\r\n            dp[i] = Math.max(++dp[i], dp[stack.pop()])\r\n            max = Math.max(dp[i], max)\r\n        }\r\n        stack.push(i)\r\n    }\r\n    return max\r\n};"
  }
}
