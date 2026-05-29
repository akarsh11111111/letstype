export default {
  "id": 1785,
  "name": "Minimum Elements to Add to Form a Given Sum",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-elements-to-add-to-form-a-given-sum",
  "relativeDir": "M/Minimum Elements to Add to Form a Given Sum",
  "slug": "1785-minimum-elements-to-add-to-form-a-given-sum",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 19,
    "java": 10,
    "python": 3
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int minElements(vector<int>& nums, int limit, int goal) {\r\n     \r\n        //just calculate how many limit values to be added to the array to make our currSum close to the goal\r\n        long int currSum=0;\r\n        for(auto ele:nums)\r\n            currSum+=ele;\r\n        long int remaining=abs(currSum-goal);\r\n        if(remaining==0)\r\n            return 0;\r\n        long int res=(remaining/limit);\r\n        //if remaining exists still after adding limit k times\r\n        //ex - remaining - 7 limit -3 we have to add a 1 after adding two times of limit values (6)\r\n        res+= (remaining%limit!=0) ? 1 : 0;\r\n        return res;\r\n        \r\n    }\r\n};",
    "python": "class Solution:\r\n    def minElements(self, nums: List[int], limit: int, goal: int) -> int:\r\n        return math.ceil(abs(goal - sum(nums)) / limit)",
    "java": "// Runtime: 7 ms (Top 11.82%) | Memory: 74.9 MB (Top 84.55%)\r\nclass Solution {\r\n    public int minElements(int[] nums, int limit, int goal) {\r\n        long sum = 0;\r\n        for(int num: nums)\r\n            sum += num;\r\n        long diff = Math.abs(sum-goal);\r\n        return (int) (diff/limit) + (diff%limit>0?1:0);\r\n    }\r\n}"
  }
}
