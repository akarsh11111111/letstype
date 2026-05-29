export default {
  "id": 446,
  "name": "Arithmetic Slices II - Subsequence",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/arithmetic-slices-ii-subsequence",
  "relativeDir": "A/Arithmetic Slices II - Subsequence",
  "slug": "0446-arithmetic-slices-ii-subsequence",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 22,
    "java": 32,
    "python": 11,
    "javascript": 26
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int numberOfArithmeticSlices(vector<int>& nums) {\r\n        int n=nums.size(),ans=0;\r\n        unordered_map<long long, unordered_map<int,int>> ma;   // [diff, [index, count]]\r\n        unordered_map<int,int> k;\r\n        for(int i=1;i<n;i++)\r\n        {\r\n            for(int j=0;j<i;j++)\r\n            {\r\n                long long diff= (long long)nums[i]-(long long)nums[j];\r\n                if(ma.find(diff)==ma.end())\r\n                    ma[diff]= k;\r\n                if(ma[diff].find(j)==ma[diff].end())\r\n                    ma[diff][j]=0;\r\n                ma[diff][i] += ma[diff][j] + 1;\r\n                ans += ma[diff][j];\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def numberOfArithmeticSlices(self, nums: List[int]) -> int:\r\n        sz, dp, ans = len(nums), [defaultdict(int) for _ in range(len(nums))], 0\r\n        for i in range(1, sz):\r\n            for j in range(i):\r\n                difference = nums[i] - nums[j]\r\n                dp[i][difference] += 1\r\n                if difference in dp[j]:\r\n                    dp[i][difference] += dp[j][difference]\r\n                    ans += dp[j][difference]\r\n        return ans",
    "java": "class Solution {\r\n    public int numberOfArithmeticSlices(int[] nums) {\r\n        int n=nums.length;\r\n        \r\n        HashMap<Integer,Integer> []dp=new HashMap[n];\r\n        \r\n        for(int i=0;i<n;i++){\r\n            dp[i]=new HashMap<Integer,Integer>();\r\n        }\r\n        \r\n        int ans=0;\r\n        \r\n        for(int i=1;i<n;i++){\r\n            for(int j=0;j<i;j++){\r\n                long cd=(long)nums[i]-(long)nums[j];\r\n                \r\n                if(cd<=Integer.MIN_VALUE || cd>=Integer.MAX_VALUE){\r\n                    continue;\r\n                }\r\n                \r\n                int endingAtj=dp[j].getOrDefault((int)cd,0);\r\n                int endingAti=dp[i].getOrDefault((int)cd,0);\r\n                \r\n                ans+=endingAtj;\r\n                \r\n                dp[i].put((int)cd,endingAtj+endingAti+1);\r\n            }\r\n        }\r\n        \r\n        return ans;\r\n    }\r\n}",
    "javascript": "// Runtime: 499 ms (Top 76.47%) | Memory: 108.2 MB (Top 70.59%)\r\n/**\r\n * @param {number[]} nums\r\n * @return {number}\r\n */\r\nvar numberOfArithmeticSlices = function(nums) {\r\n  let dp = new Array(nums.length);\r\n  for(let i = 0; i < nums.length; i++) {\r\n    dp[i] = new Map();\r\n  }\r\n  let ans = 0;\r\n  for(let j = 1; j < nums.length; j++) {\r\n    for(let i = 0; i < j; i++) {\r\n      let commonDifference = nums[j] - nums[i];\r\n      if ((commonDifference > (Math.pow(2, 31) - 1)) || commonDifference < (-Math.pow(2, 31))) {\r\n        continue;\r\n      }\r\n      let apsEndingAtI = dp[i].get(commonDifference) || 0\r\n      let apsEndingAtJ = dp[j].get(commonDifference) || 0\r\n\r\n      dp[j].set(commonDifference, (apsEndingAtI + apsEndingAtJ + 1));\r\n      ans += apsEndingAtI;\r\n    }\r\n  }\r\n  return ans;\r\n};"
  }
}
