export default {
  "id": 2155,
  "name": "All Divisions With the Highest Score of a Binary Array",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/all-divisions-with-the-highest-score-of-a-binary-array",
  "relativeDir": "A/All Divisions With the Highest Score of a Binary Array",
  "slug": "2155-all-divisions-with-the-highest-score-of-a-binary-array",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 28,
    "java": 27,
    "python": 28,
    "javascript": 40
  },
  "languages": {
    "cpp": "// Runtime: 262 ms (Top 85.58%) | Memory: 286.70 MB (Top 87.39%)\r\n\r\nclass Solution {\r\npublic:\r\n\r\n    vector<int> maxScoreIndices(vector<int> &a) {\r\n        int n=a.size();\r\n        \r\n        int one=accumulate(a.begin(),a.end(),0), zero=0;\r\n        \r\n        int maxs=0;\r\n        vector<int> ans;\r\n        for(int i=0;i<=n;i++){\r\n            int s=one+zero;\r\n            if(s>maxs){\r\n                maxs=s;\r\n                ans={i};\r\n            }else if(s==maxs){\r\n                ans.push_back(i);\r\n            }\r\n            if(i<n){\r\n                one -= (a[i]==1);\r\n                zero += (a[i]==0);\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 5049 ms (Top 67.40%) | Memory: 29.4 MB (Top 23.35%)\r\nclass Solution:\r\n    def maxScoreIndices(self, nums: List[int]) -> List[int]:\r\n        zeroFromLeft = [0] * (len(nums) + 1)\r\n        oneFromRight = [0] * (len(nums) + 1)\r\n        for i in range(len(nums)):\r\n            if nums[i] == 0:\r\n                zeroFromLeft[i + 1] = zeroFromLeft[i] + 1\r\n            else:\r\n                zeroFromLeft[i + 1] = zeroFromLeft[i]\r\n\r\n        for i in range(len(nums))[::-1]:\r\n            if nums[i] == 1:\r\n                oneFromRight[i] = oneFromRight[i + 1] + 1\r\n            else:\r\n                oneFromRight[i] = oneFromRight[i + 1]\r\n\r\n        allSum = [0] * (len(nums) + 1)\r\n        currentMax = 0\r\n        res = []\r\n        for i in range(len(nums) + 1):\r\n            allSum[i] = oneFromRight[i] + zeroFromLeft[i]\r\n            if allSum[i] > currentMax:\r\n                res = []\r\n                currentMax = allSum[i]\r\n            if allSum[i] == currentMax:\r\n                res.append(i)\r\n        return res",
    "java": "// Runtime: 21 ms (Top 98.47%) | Memory: 61.2 MB (Top 91.95%)\r\nclass Solution {\r\n    public List<Integer> maxScoreIndices(int[] nums) {\r\n        int N = nums.length;\r\n        List<Integer> res = new ArrayList<>();\r\n\r\n        int[] pref = new int[N + 1];\r\n        pref[0] = 0; // at zeroth division we have no elements\r\n        for(int i = 0; i < N; ++i) pref[i+1] = nums[i] + pref[i];\r\n\r\n        int maxScore = -1;\r\n        int onesToRight, zeroesToLeft, currScore;\r\n\r\n        for(int i = 0; i < N + 1; ++i) {\r\n            onesToRight = pref[N] - pref[i];\r\n            zeroesToLeft = i - pref[i];\r\n            currScore = zeroesToLeft + onesToRight;\r\n\r\n            if(currScore > maxScore) {\r\n                res.clear();\r\n                maxScore = currScore;\r\n            }\r\n            if(currScore == maxScore) res.add(i);\r\n        }\r\n        return res;\r\n    }\r\n}",
    "javascript": "// Runtime: 596 ms (Top 40.00%) | Memory: 82.5 MB (Top 53.33%)\r\n\r\n/**\r\n * @param {number[]} nums\r\n * @return {number[]}\r\n */\r\nvar maxScoreIndices = function(nums) {\r\n        let n=nums.length;\r\n        // initialize 3 arrays for counting with n+1 size\r\n        let zeros = new Array(n+1).fill(0);\r\n        let ones = new Array(n+1).fill(0);\r\n        let total = new Array(n+1).fill(0);\r\n\r\n       // count no of zeros from left to right\r\n        for(let i=0;i<n;i++){\r\n            if(nums[i]==0)zeros[i+1]=zeros[i]+1;\r\n            else zeros[i+1]=zeros[i];\r\n        }\r\n\r\n        // count no of ones from right to left\r\n        for(let i=n-1;i>=0;i--){\r\n            if(nums[i]==1)ones[i]=ones[i+1]+1;\r\n            else ones[i]=ones[i+1];\r\n        }\r\n\r\n        // merge left and right to total and find max element\r\n        let max=0;\r\n        for(let i=0;i<n+1;i++){\r\n            total[i]=ones[i]+zeros[i];\r\n            if(total[i]>max)max=total[i];\r\n        }\r\n\r\n        // Find occurrence of max elements and return those indexes\r\n        let ans= [];\r\n        for(let i=0;i<n+1;i++){\r\n            if(total[i]==max)ans.push(i);\r\n        }\r\n\r\n        return ans;\r\n};"
  }
}
