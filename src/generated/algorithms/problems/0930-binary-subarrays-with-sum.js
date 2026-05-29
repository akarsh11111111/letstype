export default {
  "id": 930,
  "name": "Binary Subarrays With Sum",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/binary-subarrays-with-sum",
  "relativeDir": "B/Binary Subarrays With Sum",
  "slug": "0930-binary-subarrays-with-sum",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 36,
    "java": 24,
    "python": 15
  },
  "languages": {
    "cpp": "// Runtime: 42 ms (Top 86.81%) | Memory: 28.8 MB (Top 72.20%)\r\nclass Solution {\r\npublic:\r\n\r\n    int lessequal(vector<int>& nums, int goal) {\r\n\r\n        if(goal < 0) return 0;\r\n\r\n        int n = nums.size();\r\n        int i = 0, j = 0;\r\n        int sum = 0;\r\n        int ans = 0;\r\n\r\n        while(j < n) {\r\n\r\n            sum += nums[j];\r\n\r\n            while(sum > goal) {\r\n                sum -= nums[i];\r\n                i++;\r\n            }\r\n            ans += j-i+1;\r\n            j++;\r\n        }\r\n\r\n        return ans;\r\n    }\r\n\r\n    int numSubarraysWithSum(vector<int>& nums, int goal) {\r\n\r\n        return lessequal(nums, goal) - lessequal(nums, goal - 1);\r\n    }\r\n};\r\n\r\n// our function is giving number of subarrays with sum less or equal to goal.\r\n// upvote if it helps.",
    "python": "# Runtime: 680 ms (Top 7.52%) | Memory: 17.5 MB (Top 60.81%)\r\nclass Solution:\r\n    def numSubarraysWithSum(self, nums: List[int], goal: int) -> int:\r\n        my_dict = {0:1}\r\n        accum, res = 0, 0\r\n        for n in nums:\r\n            accum += n\r\n            diff = accum-goal\r\n            if diff in my_dict:\r\n                res += my_dict[diff]\r\n            if accum in my_dict:\r\n                my_dict[accum] +=1\r\n            else:\r\n                my_dict[accum] =1\r\n        return res",
    "java": "class Solution {\r\npublic int numSubarraysWithSum(int[] nums, int goal) {\r\n    \r\n    int pre=0,cnt=0;\r\n    HashMap<Integer,Integer> m=new HashMap();\r\n    for(int i:nums){\r\n        \r\n        pre+=i;\r\n     //   if(pre-goal<0)continue;\r\n        if(pre-goal==0)cnt++;\r\n        \r\n        if(m.containsKey(pre-goal)){\r\n            cnt+=m.get(pre-goal);\r\n            \r\n            \r\n        }\r\n        m.put(pre,m.getOrDefault(pre,0)+1);\r\n\r\n        \r\n        \r\n    }\r\n    \r\n    return cnt;\r\n}"
  }
}
