export default {
  "id": 1829,
  "name": "Maximum XOR for Each Query",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-xor-for-each-query",
  "relativeDir": "M/Maximum XOR for Each Query",
  "slug": "1829-maximum-xor-for-each-query",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 21,
    "python": 9,
    "javascript": 13
  },
  "languages": {
    "cpp": "// Runtime: 98 ms (Top 91.78%) | Memory: 95.80 MB (Top 60.53%)\r\n\r\nclass Solution {\r\npublic:\r\n    vector<int> getMaximumXor(vector<int>& nums, int maximumBit) {\r\n        int n=nums.size();\r\n        vector<int> arr(n,0);\r\n        arr[0]=nums[0];\r\n        for(int i=1;i<n;i++){\r\n            arr[i]=arr[i-1]^nums[i];\r\n        }\r\n        int idx=0;\r\n        int k = (1<<maximumBit) - 1;\r\n        \r\n        for(int i=n-1;i>=0;i--){\r\n            int curr=k & ~(arr[i]); //invertBits(arr[i]);\r\n            nums[idx++]=curr;\r\n        }\r\n        return nums;\r\n    }\r\n};",
    "python": "# Runtime: 736 ms (Top 100.0%) | Memory: 34.71 MB (Top 50.5%)\r\n\r\nclass Solution:\r\n    def getMaximumXor(self, nums: List[int], maximumBit: int) -> List[int]:\r\n        ans = [(1 << maximumBit) - 1]\r\n        for n in nums:\r\n            ans.append(ans[-1] ^ n)\r\n\r\n        return ans[len(ans)-1:0:-1]",
    "javascript": "/**\r\n * @param {number[]} nums\r\n * @param {number} maximumBit\r\n * @return {number[]}\r\n */\r\nvar getMaximumXor = function(nums, maximumBit) {\r\n    let xor = (1 << maximumBit) - 1\r\n    for(let i=0; i<nums.length; i++){\r\n        xor ^= nums[i]\r\n        nums[i] = xor\r\n    }\r\n    return nums.reverse()\r\n};"
  }
}
