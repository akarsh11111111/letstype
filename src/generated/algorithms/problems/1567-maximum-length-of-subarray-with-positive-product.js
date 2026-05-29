export default {
  "id": 1567,
  "name": "Maximum Length of Subarray With Positive Product",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-length-of-subarray-with-positive-product",
  "relativeDir": "M/Maximum Length of Subarray With Positive Product",
  "slug": "1567-maximum-length-of-subarray-with-positive-product",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 27,
    "java": 39,
    "python": 18,
    "javascript": 46
  },
  "languages": {
    "cpp": "// Runtime: 295 ms (Top 5.06%) | Memory: 57.9 MB (Top 75.87%)\r\nclass Solution {\r\npublic:\r\n    int getMaxLen(vector<int>& nums) {\r\n        int ans = 0;\r\n        int lprod = 1,rprod = 1;\r\n        int llen = 0, rlen = 0;\r\n        int n = nums.size();\r\n        for(int i = 0 ; i < n ; i++){\r\n            lprod *= nums[i] != 0 ? nums[i]/abs(nums[i]) : 0;\r\n            rprod *= nums[n-1-i] != 0 ? nums[n-1-i]/abs(nums[n-1-i]) : 0;\r\n            if(lprod != 0) llen ++;\r\n            if(rprod != 0) rlen ++;\r\n            if(lprod > 0) ans = max(ans,llen);\r\n            if(rprod > 0) ans = max(ans,rlen);\r\n            if(lprod == 0) {\r\n                lprod = 1;\r\n                llen = 0;\r\n            }\r\n            if(rprod == 0){\r\n                rlen = 0;\r\n                rprod = 1;\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def getMaxLen(self, arr: List[int]) -> int:\r\n        n=len(arr)\r\n        def solve(nums):\r\n            i,j,last_neg,neg,ans=0,0,None,0,0\r\n            while j<n:\r\n                while j<n and nums[j]!=0:\r\n                    if nums[j]<0: \r\n                        neg+=1\r\n                        last_neg=j\r\n                    j+=1\r\n                if neg%2==0:\r\n                    ans=max(ans,j-i)\r\n                elif last_neg!=None:\r\n                    ans=max(ans,last_neg-i,j-last_neg-1)\r\n                i,j,neg,last_neg=j+1,j+1,0,None\r\n            return ans\r\n        return max(solve(arr),solve(arr[::-1]))",
    "java": "// Runtime: 7 ms (Top 27.34%) | Memory: 84.2 MB (Top 12.92%)\r\nclass Solution {\r\n    public int getMaxLen(int[] nums)\r\n    {\r\n        int first_negative=-1;\r\n        int zero_position=-1;\r\n        int count_neg=0;\r\n        int res=0;\r\n        for(int i=0;i<nums.length;i++)\r\n        {\r\n            if (nums[i]<0)\r\n            {\r\n                count_neg = count_neg+1;\r\n                if(first_negative==-1)\r\n                {\r\n                    first_negative=i;\r\n                }\r\n            }\r\n            if (nums[i]==0)\r\n            {\r\n                count_neg = 0;\r\n                zero_position=i;\r\n                first_negative=-1;\r\n            }\r\n            else\r\n            {\r\n                if (count_neg%2==0)\r\n                {\r\n                    res=Math.max(i-zero_position,res);\r\n                }\r\n                else\r\n                {\r\n                    res=Math.max(i-first_negative,res);\r\n                }\r\n            }\r\n        }\r\n        return res;\r\n    }\r\n}",
    "javascript": "// Runtime: 160 ms (Top 18.09%) | Memory: 51.5 MB (Top 65.79%)\r\n/**\r\n * @param {number[]} nums\r\n * @return {number}\r\n */\r\nvar getMaxLen = function(nums) {\r\n    let leftToRight=0,p=1,count=0,max=0,item;\r\n    //Process elements from left to right\r\n    for(let i=0;i<nums.length;i++){\r\n        if(nums[i]===0){\r\n            p=0;\r\n        }else if(nums[i]>0){\r\n            p *=1\r\n        }else if(nums[i]<0){\r\n            p *=-1\r\n        }\r\n        count++;\r\n        if(p>0){\r\n            max = Math.max(max,count);\r\n        }\r\n        if(p===0){\r\n            p=1;\r\n            count=0;\r\n        }\r\n    }\r\n    count = 0;p=1;\r\n    //Process elements from right to left\r\n    for(let i=nums.length-1;i>=0;i--){\r\n        if(nums[i]===0){\r\n            p=0;\r\n        }else if(nums[i]>0){\r\n            p *=1\r\n        }else if(nums[i]<0){\r\n            p *=-1\r\n        }\r\n        count++;\r\n        if(p>0){\r\n            max = Math.max(max,count);\r\n        }\r\n        if(p===0){\r\n            p=1;\r\n            count=0;\r\n        }\r\n    }\r\n    return max;\r\n};"
  }
}
