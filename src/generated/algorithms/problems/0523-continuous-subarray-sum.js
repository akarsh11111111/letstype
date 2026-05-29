export default {
  "id": 523,
  "name": "Continuous Subarray Sum",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/continuous-subarray-sum",
  "relativeDir": "C/Continuous Subarray Sum",
  "slug": "0523-continuous-subarray-sum",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 19,
    "java": 39,
    "python": 13,
    "javascript": 27
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool checkSubarraySum(vector<int>& nums, int k) {\r\n        unordered_set<int> s;\r\n        int sum = 0;\r\n        int pre = 0;\r\n        for(int i = 0; i < nums.size(); i++)\r\n        {\r\n            sum += nums[i];\r\n            int remainder = sum%k;\r\n            if (s.find(remainder) != s.end())\r\n            {\r\n                return true;\r\n            }\r\n            s.insert(pre);\r\n            pre = remainder;\r\n        }\r\n        return false;\r\n    }",
    "python": "class Solution:\r\n    def checkSubarraySum(self, nums: List[int], k: int) -> bool:\r\n        psum = {0:-1}\r\n        currentSum = 0\r\n        for i in range(len(nums)):\r\n            currentSum += nums[i]\r\n            remainder = currentSum % k\r\n            if remainder not in psum:\r\n                psum[remainder] = i\r\n            else:\r\n                if i - psum[remainder] > 1:\r\n                    return True\r\n        return False",
    "java": "class Solution {\r\n    public boolean checkSubarraySum(int[] nums, int k) {\r\n        boolean t[]=new boolean[nums.length+1];\r\n        Arrays.fill(t,false);\r\n       return help(nums.length,nums,k,0,0,t);\r\n    }\r\n    public boolean help(int i,int nums[],int k,int sum,int size,boolean t[]){\r\n        if(size>=2&&sum%k==0){\r\n            return true;\r\n        }\r\n        if(i==0){\r\n            return false;\r\n        }\r\n        if(t[i-1]!=false){\r\n            return t[i-1];\r\n        }\r\n        if(size>0){\r\n         return t[i]=help(i-1,nums,k,sum+nums[i-1],size+1,t);\r\n        }\r\n        return t[i]=help(i-1,nums,k,sum+nums[i-1],size+1,t)||help(i-1,nums,k,sum,size,t);\r\n    }\r\n}\r\n---------------------------------------------------------------------------------------------\r\nclass Solution {\r\n    public boolean checkSubarraySum(int[] nums, int k) {\r\n      int sum=0;\r\n      HashMap<Integer,Integer>h=new HashMap<>();\r\n      h.put(0,-1);\r\n      for(int i=0;i<nums.length;i++){\r\n          sum+=nums[i];\r\n          sum=k==0?sum:sum%k;\r\n          if(h.containsKey(sum)&& i-h.get(sum)>=2){\r\n              return true;\r\n          }\r\n          h.put(sum,h.getOrDefault(sum,i));\r\n      }  \r\n        return false;\r\n    }\r\n}",
    "javascript": "// Runtime: 98 ms (Top 67.73%) | Memory: 65.80 MB (Top 42.93%)\r\n\r\nvar checkSubarraySum = function(nums, k) {\r\n    const n = nums.length;\r\n    if(n < 2) {\r\n        return false;\r\n    }\r\n    const map = new Map();\r\n\t\r\n\t// edge case - to handle sum % k === 0 and\r\n\t// if the first element of array is a multiple of k, condition 0 - (-1) = 1 > 1 wil fail (min length of subarray must be 2)\r\n    map.set(0, -1);\r\n    let sum = 0;\r\n    \r\n    for(let i = 0; i < n; ++i) {\r\n        sum += nums[i];\r\n        sum = sum % k;\r\n\t\t\r\n\t\t// handles min length of subarray must be 2\r\n        if(map.has(sum) && i - map.get(sum) > 1) {\r\n            return true;\r\n        } else if(!map.has(sum)) {\r\n            map.set(sum, i);\r\n        }\r\n    }\r\n    return false;\r\n}"
  }
}
