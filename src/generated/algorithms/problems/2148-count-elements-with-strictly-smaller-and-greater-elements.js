export default {
  "id": 2148,
  "name": "Count Elements With Strictly Smaller and Greater Elements",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements",
  "relativeDir": "C/Count Elements With Strictly Smaller and Greater Elements",
  "slug": "2148-count-elements-with-strictly-smaller-and-greater-elements",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 12,
    "java": 18,
    "python": 5,
    "javascript": 20
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int countElements(vector<int>& nums) {\r\n        int M = *max_element(nums.begin(), nums.end()); \r\n        int m = *min_element(nums.begin(), nums.end()); \r\n        int res = 0;\r\n        for(int i = 0; i < nums.size(); i++){\r\n            if(nums[i] > m && nums[i] < M) res++;\r\n        }\r\n        return res;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def countElements(self, nums: List[int]) -> int:\r\n        M = max(nums)\r\n        m = min(nums)\r\n        return sum(1 for i in nums if m<i<M)",
    "java": "class Solution {\r\n    public int countElements(int[] nums) {\r\n        int nmin=Integer.MAX_VALUE;\r\n        int nmax=Integer.MIN_VALUE;\r\n        for(int a:nums)\r\n        {\r\n            nmin=Math.min(a,nmin);\r\n            nmax=Math.max(a,nmax);\r\n        }\r\n        int count=0;\r\n        for(int a:nums)\r\n        {\r\n            if(a>nmin && a<nmax)\r\n                count++;\r\n        }\r\n        return count;\r\n    }\r\n}",
    "javascript": "// Runtime: 65 ms (Top 92.65%) | Memory: 44.9 MB (Top 5.15%)\r\nvar countElements = function(nums) {\r\n    let map = {}, total = 0;\r\n\r\n    // adding elements to map\r\n    for(let i of nums) map[i] ? map[i]++ : map[i] = 1;\r\n\r\n    // Removing repeated elements\r\n    let newNums = [... new Set(nums)];\r\n\r\n    // If length of array after removing repeated nums is less than three return 0;\r\n    if(newNums.length < 3) return 0;\r\n\r\n    // sort the newNums array and remove the first and last element.\r\n    // for all the remaining elements check their number in map and add it to total variable\r\n    newNums.sort((a,b) => a-b).slice(1, newNums.length-1).forEach(num => total += map[num]);\r\n\r\n    // return total variable\r\n    return total;\r\n};"
  }
}
