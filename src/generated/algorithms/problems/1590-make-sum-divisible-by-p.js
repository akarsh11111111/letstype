export default {
  "id": 1590,
  "name": "Make Sum Divisible by P",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/make-sum-divisible-by-p",
  "relativeDir": "M/Make Sum Divisible by P",
  "slug": "1590-make-sum-divisible-by-p",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 25,
    "python": 18,
    "javascript": 26
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int minSubarray(vector<int>& nums, int p) {\r\n        int n=nums.size();\r\n        int sm=0;\r\n        int ans=INT_MAX,cur=INT_MAX;\r\n        for(int it:nums) sm=(sm+it)%p;\r\n        if(sm==0)\r\n            return 0;\r\n        unordered_map<long long,int> mp={{0,-1}};\r\n        long long pre=0;\r\n        for(int i=0;i<n;i++)\r\n        {\r\n            pre=(pre+nums[i])%p;\r\n            mp[pre]=i;\r\n            if(mp.count((pre-sm+p)%p)>0)\r\n                cur=i-mp[(pre-sm+p)%p];\r\n            ans=min(ans,cur);\r\n        }\r\n        if(ans==INT_MAX||ans==n)\r\n            return -1;\r\n        else\r\n            return ans;\r\n    }\r\n};",
    "python": "// Runtime: 457 ms (Top 46.03%) | Memory: 34.70 MB (Top 85.36%)\r\n\r\nclass Solution:\r\n    def minSubarray(self, nums: List[int], p: int) -> int:\r\n        n = len(nums)\r\n        target = sum(nums)%p\r\n        if not target:\r\n            return 0\r\n        answer = n\r\n        prefix_sum = 0\r\n        hashmap = {0: -1}\r\n        for i, num in enumerate(nums):\r\n            prefix_sum += num\r\n            key = (prefix_sum%p - target)%p\r\n            if key in hashmap:\r\n                answer = min(answer, i-hashmap[key])\r\n            hashmap[prefix_sum%p] = i\r\n        return answer if answer < n else -1",
    "javascript": "// Runtime: 181 ms (Top 72.22%) | Memory: 63.8 MB (Top 94.44%)\r\nvar minSubarray = function(nums, p) {\r\n    let n = nums.length;\r\n    let map = new Map([[0,-1]])\r\n    let total = 0, res = n, sum = 0\r\n    for(let i=0; i<n; i++){\r\n        total += nums[i]\r\n    }\r\n    total = total % p\r\n\r\n    for(let i=0; i<n; i++){\r\n        sum = (sum + nums[i]) % p\r\n        map.set(sum, i)\r\n        let prevSum = mod(sum-total,p)\r\n        if(map.has(prevSum)){\r\n            res = Math.min(res, i-map.get(prevSum))\r\n        }\r\n    }\r\n\r\n    return res == nums.length ? -1 : res\r\n};\r\n\r\nfunction mod(a,b){\r\n    let c = a%b\r\n    return c<0 ? c+b : c\r\n}"
  }
}
