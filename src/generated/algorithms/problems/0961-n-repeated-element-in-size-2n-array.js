export default {
  "id": 961,
  "name": "N-Repeated Element in Size 2N Array",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/n-repeated-element-in-size-2n-array",
  "relativeDir": "N/N-Repeated Element in Size 2N Array",
  "slug": "0961-n-repeated-element-in-size-2n-array",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 15,
    "java": 12,
    "python": 3,
    "javascript": 11
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int repeatedNTimes(vector<int>& nums) {\r\n        unordered_map<int, int> mp;\r\n        for(auto it : nums) mp[it]++;\r\n        int n;\r\n        for(auto it : mp) {\r\n            if(it.second == nums.size() / 2) {\r\n                n = it.first;\r\n                break;\r\n            }\r\n        }\r\n        return n;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def repeatedNTimes(self, nums: List[int]) -> int:\r\n        return Counter(nums).most_common(1)[0][0]",
    "java": "class Solution {\r\n    public int repeatedNTimes(int[] nums) {\r\n        int count = 0;\r\n        for(int i = 0; i < nums.length; i++) {\r\n            for(int j = i + 1; j < nums.length; j++) {\r\n                if(nums[i] == nums[j])\r\n                    count = nums[j];\r\n            }\r\n        }\r\n        return count;\r\n    }\r\n}",
    "javascript": "var repeatedNTimes = function(nums) {\r\n\r\n//   loop through the array and then as we go over every num we filter that number and get the length. If the length is equal to 1 that is not the element so we continue if its not equal to one its the element we want and we just return that element. \r\n\r\n  for (let num of nums) {\r\n    let len = nums.filter(element => element === num).length\r\n    if (len == 1) continue;\r\n    else return num\r\n  }\r\n\r\n};"
  }
}
