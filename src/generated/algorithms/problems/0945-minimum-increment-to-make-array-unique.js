export default {
  "id": 945,
  "name": "Minimum Increment to Make Array Unique",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-increment-to-make-array-unique",
  "relativeDir": "M/Minimum Increment to Make Array Unique",
  "slug": "0945-minimum-increment-to-make-array-unique",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 16,
    "java": 54,
    "python": 14,
    "javascript": 18
  },
  "languages": {
    "cpp": "// Runtime: 363 ms (Top 33.60%) | Memory: 65.6 MB (Top 68.46%)\r\nclass Solution {\r\npublic:\r\n    int minIncrementForUnique(vector<int>& nums) {\r\n        int minElePossible=0,ans=0;\r\n        sort(nums.begin(),nums.end());\r\n        for(int i=0;i<nums.size();i++){\r\n            if(nums[i]<minElePossible){\r\n                ans+=minElePossible-nums[i];\r\n                nums[i]+=minElePossible-nums[i];\r\n            }\r\n            minElePossible=nums[i]+1;\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def minIncrementForUnique(self, nums: List[int]) -> int:\r\n        nums.sort()\r\n        c=0\r\n        i=1\r\n        num=[]\r\n        \r\n        while i<len(nums):\r\n            if nums[i]<=nums[i-1]:\r\n                a=nums[i-1]+1\r\n                c+=(a-nums[i])\r\n                nums[i]=a\r\n            i+=1\r\n        return c",
    "java": "class Solution {\r\n    public int minIncrementForUnique(int[] nums) {\r\n        \r\n        //Approach - 1 : Using a Count array\r\n        \r\n        // TC : O(N)\r\n        // SC : O(N)\r\n        \r\n        int max = 0;\r\n        for(int i : nums)\r\n            max = Math.max(max, i);\r\n        \r\n        int count[] = new int[nums.length + max];\r\n\t\t\r\n        for(int c : nums)\r\n            count[c]++;\r\n\t\t\t\r\n        int answer = 0, choosen = 0;\r\n\t\tint len = count.length;\r\n\t\t\r\n        for(int i = 0; i< len; i++)\r\n        {\r\n            if(count[i] >= 2)\r\n            {\r\n                choosen += count[i] - 1;\r\n                answer -= i * (count[i] - 1);\r\n            }\r\n            else if(choosen > 0 && count[i] == 0)\r\n            {\r\n                answer += i;\r\n                choosen--;\r\n            }\r\n        }\r\n\t\t\r\n        return answer;\r\n        \r\n        \r\n        //Approach - 2:\r\n        \r\n        // TC : O(nlogn)\r\n        // SC : O(1)\r\n        \r\n        Arrays.sort(nums);\r\n        int answer = 0;\r\n        for(int i=1; i<nums.length; i++)\r\n        {\r\n            if(nums[i-1] >= nums[i]){\r\n                answer += nums[i-1]- nums[i] +1;\r\n                nums[i] = nums[i-1] + 1; \r\n            }\r\n        }\r\n        return answer;\r\n    }\r\n}",
    "javascript": "var minIncrementForUnique = function(nums) {\r\n  let ans = 0, arr = nums.sort((a, b) => a - b);\r\n\r\n  for (let i = 0; i < arr.length; i++) {\r\n    if (arr[i] === arr[i + 1]) {\r\n      arr[i + 1]++;\r\n      ans++;\r\n    }\r\n    else if (arr[i] > arr[i + 1]) {\r\n      if(arr[i] - arr[i - 1] === 1){\r\n        ans += arr[i] - arr[i + 1] + 1\r\n        arr[i + 1] += arr[i] - arr[i + 1] + 1;\r\n      }\r\n    }\r\n  }\r\n\r\n  return ans;\r\n};"
  }
}
