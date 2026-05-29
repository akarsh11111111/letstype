export default {
  "id": 1984,
  "name": "Minimum Difference Between Highest and Lowest of K Scores",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores",
  "relativeDir": "M/Minimum Difference Between Highest and Lowest of K Scores",
  "slug": "1984-minimum-difference-between-highest-and-lowest-of-k-scores",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 10,
    "java": 16,
    "python": 12,
    "javascript": 15
  },
  "languages": {
    "cpp": "// Runtime: 16 ms (Top 92.85%) | Memory: 13.7 MB (Top 67.83%)\r\nclass Solution {\r\npublic:\r\n    int minimumDifference(vector<int>& nums, int k) {\r\n        sort(nums.begin(), nums.end());\r\n        int res = nums[k-1] - nums[0];\r\n        for (int i = k; i < nums.size(); i++) res = min(res, nums[i] - nums[i-k+1]);\r\n        return res;\r\n    }\r\n};",
    "python": "// Runtime: 118 ms (Top 7.93%) | Memory: 17.50 MB (Top 9.64%)\r\n\r\nclass Solution:\r\n    def minimumDifference(self, nums: List[int], k: int) -> int:\r\n        nums.sort()\r\n        m,n=100001,len(nums)\r\n        i,j=0,k-1\r\n        while j<n:\r\n            m=min(m,nums[j]-nums[i])\r\n            i+=1\r\n            j+=1\r\n        return m",
    "java": "// Runtime: 6 ms (Top 73.44%) | Memory: 47.5 MB (Top 27.33%)\r\nclass Solution {\r\n    public int minimumDifference(int[] nums, int k) {\r\n        if(k == 1)return 0;\r\n        int i = 0,j = k-1,res = Integer.MAX_VALUE;\r\n\r\n        Arrays.sort(nums);\r\n        while(j < nums.length){\r\n            res = Math.min(res,nums[j] - nums[i]);\r\n            j++;\r\n            i++;\r\n        }\r\n\r\n        return res;\r\n    }\r\n}",
    "javascript": "// Runtime: 138 ms (Top 23.72%) | Memory: 44.4 MB (Top 59.62%)\r\n\r\n```/**\r\n * @param {number[]} nums\r\n * @param {number} k\r\n * @return {number}\r\n */\r\nvar minimumDifference = function(nums, k) {\r\n    nums.sort((a,b)=>a-b)\r\n    let min=nums[0],max=nums[k-1],diff=max-min\r\n    for(let i=k;i<nums.length;i++){\r\n        diff=Math.min(diff,nums[i]-nums[i-k+1])\r\n    }\r\n    return diff\r\n};``"
  }
}
