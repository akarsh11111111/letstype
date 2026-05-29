export default {
  "id": 1498,
  "name": "Number of Subsequences That Satisfy the Given Sum Condition",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition",
  "relativeDir": "N/Number of Subsequences That Satisfy the Given Sum Condition",
  "slug": "1498-number-of-subsequences-that-satisfy-the-given-sum-condition",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 46,
    "java": 25,
    "python": 17,
    "javascript": 20
  },
  "languages": {
    "cpp": "// Runtime: 2423 ms (Top 5.03%) | Memory: 47.6 MB (Top 92.56%)\r\nclass Solution {\r\nprivate:\r\n    int mod=1e9+7;\r\n    int multiply(int a,int b){\r\n        if(b==0){\r\n            return 0;\r\n        } else if(b%2==0){\r\n            int ans=multiply(a,b/2);\r\n            return (ans%mod+ans%mod)%mod;\r\n        } else {\r\n            int ans=multiply(a,b-1);\r\n            return (a%mod+ans%mod)%mod;\r\n        }\r\n    }\r\n    int power(int b,int e){\r\n        if(e==0){\r\n            return 1;\r\n        } else if(e%2==0){\r\n            int ans=power(b,e/2);\r\n            return multiply(ans,ans);\r\n        } else {\r\n            int ans=power(b,e-1);\r\n            return multiply(b,ans);\r\n        }\r\n    }\r\npublic:\r\n    int numSubseq(vector<int>& nums, int target) {\r\n        sort(nums.begin(),nums.end());\r\n        int start=0,end=0;\r\n        while(end<nums.size() and nums[start]+nums[end]<=target){\r\n            end++;\r\n        }\r\n        end--;\r\n        int ans=0;\r\n        while(start<=end){\r\n            if(nums[start]+nums[end]<=target){\r\n                ans=(ans%mod+power(2,end-start))%mod;\r\n                start++;\r\n            } else {\r\n                end--;\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 637 ms (Top 91.1%) | Memory: 29.39 MB (Top 30.6%)\r\n\r\nclass Solution:\r\n    def numSubseq(self, nums: List[int], target: int) -> int:\r\n        nums.sort()\r\n        left, right = 0, len(nums) - 1\r\n        count = 0\r\n        mod = 10 ** 9 + 7\r\n        \r\n        while left <= right:\r\n            if nums[left] + nums[right] > target:\r\n                right -= 1\r\n            else:\r\n                count += pow(2, right - left, mod)\r\n                left += 1\r\n        \r\n        return count % mod",
    "java": "\r\nclass Solution {\r\n    public int numSubseq(int[] nums, int target) {\r\n        int n = nums.length;\r\n        int i =0, j = n-1;\r\n        int mod = (int)1e9+7;\r\n        Arrays.sort(nums);\r\n        int[] pow = new int[n];\r\n        pow[0]=1;\r\n        int count =0;\r\n        for(int z =1;z<n;z++){\r\n            pow[z] = (pow[z-1]*2)%mod;\r\n        }\r\n        \r\n        while(i<=j){\r\n            if((nums[i]+nums[j]) <= target){\r\n                count=(count+pow[j-i])%mod;\r\n                i++;\r\n            }\r\n            else if((nums[i]+nums[j]) > target)\r\n                j--;\r\n        }\r\n        return count;\r\n    }\r\n}",
    "javascript": "const MOD = 1000000007;\r\n\r\nvar numSubseq = function(nums, target) {\r\n    nums.sort((a, b) => a - b);\r\n    const len = nums.length;\r\n    const pow = new Array(len).fill(1);\r\n    for(let i = 1; i < len; i++) {\r\n        pow[i] = (pow[i - 1] * 2) % MOD;\r\n    }\r\n    let l = 0, r = len - 1, ans = 0;\r\n    while(l <= r) {\r\n        if(nums[l] + nums[r] > target) {\r\n            r--; continue;\r\n        } else {\r\n            ans = (ans + pow[r - l]) % MOD;\r\n            l++;\r\n        }\r\n    }\r\n    return ans % MOD;\r\n};"
  }
}
