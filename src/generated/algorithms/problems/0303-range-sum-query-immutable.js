export default {
  "id": 303,
  "name": "Range Sum Query - Immutable",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/range-sum-query-immutable",
  "relativeDir": "R/Range Sum Query - Immutable",
  "slug": "0303-range-sum-query-immutable",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 13,
    "java": 19,
    "python": 10,
    "javascript": 9
  },
  "languages": {
    "cpp": "class NumArray {\r\npublic:\r\n\tvector<int>arr;\r\n\tNumArray(vector<int>& nums) {\r\n\t\tarr=nums;\r\n\t}\r\n\r\n\tint sumRange(int left, int right) {\r\n\t\tint sum=0;\r\n\t\tfor(int i=left;i<=right;i++) sum+=arr[i];\r\n\t\treturn sum;\r\n\t}\r\n};",
    "python": "class NumArray:\r\n\r\n    def __init__(self, nums: List[int]):\r\n        self.nums, Sum = [], 0\r\n        for num in nums:\r\n            Sum += num\r\n            self.nums.append(Sum)\r\n\r\n    def sumRange(self, left: int, right: int) -> int:\r\n        return self.nums[right] - self.nums[left - 1] if left - 1 >= 0 else self.nums[right]",
    "java": "// Runtime: 10 ms (Top 88.88%) | Memory: 49.9 MB (Top 6.06%)\r\nclass NumArray {\r\n    int [] prefix;\r\n    public NumArray(int[] nums) {\r\n        int n = nums.length;\r\n        prefix = new int[n];\r\n        prefix[0] = nums[0];\r\n        for(int i = 1; i < n; i++){\r\n            prefix[i] = nums[i] + prefix[i - 1];\r\n        }\r\n    }\r\n\r\n    public int sumRange(int left, int right) {\r\n        if(left == 0){\r\n            return prefix[right];\r\n        }\r\n        return prefix[right] - prefix[left - 1];\r\n    }\r\n}",
    "javascript": "var NumArray = function(nums) {\r\n    this.nums = nums;\r\n};\r\n\r\nNumArray.prototype.sumRange = function(left, right) {\r\n    let sum = 0;\r\n    for(let i = left; i <= right; i++) sum += this.nums[i]\r\n    return sum\r\n};"
  }
}
