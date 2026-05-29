export default {
  "id": 915,
  "name": "Partition Array into Disjoint Intervals",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/partition-array-into-disjoint-intervals",
  "relativeDir": "P/Partition Array into Disjoint Intervals",
  "slug": "0915-partition-array-into-disjoint-intervals",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 32,
    "java": 19,
    "python": 11,
    "javascript": 21
  },
  "languages": {
    "cpp": "// Runtime: 241 ms (Top 56.54%) | Memory: 102.3 MB (Top 15.65%)\r\nclass Solution {\r\npublic:\r\n    vector<int> tree;\r\n    void build(vector<int> &nums) {\r\n        int n=nums.size();\r\n        for(int i=0 ; i<nums.size(); i++) tree[i+n]=nums[i];\r\n        for(int i=n-1 ; i>0 ; i--) tree[i] = min(tree[i<<1],tree[i<<1|1]);\r\n    }\r\n\r\n    int query(int l, int r, int n) {\r\n        l+=n,r+=n;\r\n        int ans = INT_MAX;\r\n        while(l<r) {\r\n            if(l&1) ans = min(ans,tree[l++]);\r\n            if(r&1) ans = min(ans,tree[--r]);\r\n            l>>=1; r>>=1;\r\n        }\r\n        return ans;\r\n    }\r\n\r\n    int partitionDisjoint(vector<int>& nums) {\r\n        int n=nums.size();\r\n        int mx=-1 ;\r\n        tree.resize(2*n,INT_MAX); build(nums);\r\n        for(int left=0; left<n ; left++) {\r\n            mx = max(mx,nums[left]);\r\n            if(query(left+1,n,n) >= mx) return left+1;\r\n        }\r\n        return n;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def partitionDisjoint(self, nums: List[int]) -> int:\r\n        prefix = [nums[0] for _ in range(len(nums))]\r\n        suffix = [nums[-1] for _ in range(len(nums))]\r\n        for i in range(1, len(nums)):\r\n            prefix[i] = max(prefix[i-1], nums[i-1])\r\n        for i in range(len(nums)-2, -1, -1):\r\n            suffix[i] = min(suffix[i+1], nums[i+1])\r\n        for i in range(0, len(nums)-1):\r\n            if prefix[i] <= suffix[i]:\r\n                return i+1",
    "java": "class Solution {\r\n    public int partitionDisjoint(int[] nums) {\r\n        int mts = nums[0]; // max till scan\r\n        int mtp = nums[0]; // max till partition\r\n        int idx = 0;\r\n        \r\n        for(int i=1; i<nums.length; i++) {\r\n            int val = nums[i];\r\n            if(val < mtp) {\r\n                idx = i;\r\n                mtp = mts;\r\n            }\r\n            \r\n            mts = Math.max(mts, val);\r\n        }\r\n        \r\n        return idx + 1;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number[]} nums\r\n * @return {number}\r\n */\r\nvar partitionDisjoint = function(nums) {\r\n    let n = nums.length;\r\n    let leftMax = Array(n).fill(0), rightMin = Array(n).fill(0);\r\n    let left = 0, right = n- 1;\r\n    \r\n    for(let i = 0, j = n - 1;i<n, j>=0 ;i++,j--){\r\n        leftMax[i] = Math.max(nums[i], !i ? -Infinity : leftMax[i-1]);\r\n        rightMin[j] = Math.min(nums[j], j === n - 1 ? Infinity : rightMin[j+1]);\r\n    }\r\n    \r\n    for(let i = 0;i<n-1;i++){\r\n        if(leftMax[i] <= rightMin[i+1]){\r\n            return i + 1;\r\n        }\r\n    }\r\n \r\n};"
  }
}
