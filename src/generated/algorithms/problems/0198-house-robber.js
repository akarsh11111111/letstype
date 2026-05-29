export default {
  "id": 198,
  "name": "House Robber",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/house-robber",
  "relativeDir": "H/House Robber",
  "slug": "0198-house-robber",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 15,
    "java": 27,
    "python": 16,
    "javascript": 14
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int helper(int i, vector<int>& nums) {\r\n        if(i == 0) return nums[i];\r\n        if(i < 0) return 0;\r\n\r\n        int pick = nums[i] + helper(i-2, nums);\r\n        int not_pick = 0 + helper(i-1, nums);\r\n\r\n        return max(pick,not_pick);\r\n    }\r\n    int rob(vector<int>& nums) {\r\n        return helper(nums.size()-1, nums);\r\n    }\r\n};",
    "python": "class Solution:\r\n    def rob(self, nums: List[int]) -> int:\r\n        # [rob1,rob2,n,n+1]\r\n        # 1 | 2 | 3 | 1  \r\n   #index 0   1   2   3\r\n        # so upto last index it depends on previous 2 values :\r\n    # here upto 2nd index max rob is 1+3=4; not choosing adjacent element 2\r\n    # and upto 1st index  max rob is 2 ; not choosing any adjacent elements\r\n    # so at 3rd index it depend on prev rob value and 1st index rob value+last value\r\n    # i.e max(2+(val at last index),4)\r\n        rob1=0;rob2=0;\r\n        for i in nums:\r\n            temp=max(rob1+i,rob2);\r\n            rob1=rob2;\r\n            rob2=temp;\r\n        return rob2;",
    "java": "// Runtime: 0 ms (Top 100.00%) | Memory: 41.8 MB (Top 31.47%)\r\nclass Solution {\r\n    public int rob(int[] nums) {\r\n        int[] t = new int[nums.length] ;\r\n        for(int i=0; i<t.length; i++){\r\n            t[i] =-1;\r\n        }\r\n       return helper(nums,0,t);\r\n    }\r\n    static int helper(int[] nums, int i,int[] t){\r\n        if(i>=nums.length){\r\n            return 0;\r\n        }\r\n        if(i==nums.length-1){\r\n            return nums[i];\r\n        }\r\n        if(t[i] != -1){\r\n            return t[i];\r\n        }\r\n\r\n        int pick = nums[i] + helper(nums,i+2,t);\r\n        int unpicked = helper(nums,i+1,t);\r\n        t[i] = Math.max(pick,unpicked);\r\n        return t[i];\r\n\r\n    }\r\n}",
    "javascript": "// Runtime: 81 ms (Top 64.99%) | Memory: 42 MB (Top 44.71%)\r\nconst max=(x,y)=>x>y?x:y\r\nvar rob = function(nums) {\r\n     if(nums.length==1) return(nums[0]);\r\n    let temp=[]\r\n    temp[0]=nums[0];\r\n        temp[1]=max(nums[0],nums[1]);\r\n\r\n        for(let i =2;i<nums.length;i++){\r\n            temp[i] = max(temp[i-1],nums[i]+temp[i-2]);\r\n        }\r\n        // console.log(temp)\r\n        return(temp[nums.length-1]);\r\n};"
  }
}
