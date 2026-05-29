export default {
  "id": 1470,
  "name": "Shuffle the Array",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/shuffle-the-array",
  "relativeDir": "S/Shuffle the Array",
  "slug": "1470-shuffle-the-array",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 14,
    "java": 23,
    "python": 8,
    "javascript": 7
  },
  "languages": {
    "cpp": "// Runtime: 7 ms (Top 74.55%) | Memory: 9.6 MB (Top 96.76%)\r\nclass Solution {\r\npublic:\r\n    vector<int> shuffle(vector<int>& nums, int n) {\r\n        vector<int> ans;\r\n        int size = nums.size();\r\n        int i = 0, j =0;\r\n        for(i=0,j=n; i<n && j<size; i++, j++){\r\n            ans.push_back(nums[i]);\r\n            ans.push_back(nums[j]);\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "'''\r\nFirst of all, I'm making a few tuples  using zip function.\r\nThen extracting every created tuple. (for tup in zip())\r\nAfter that, I can take numbers from the extracted tuples, in order to add them to a list and return. (for number in tup)\r\n'''\r\nclass Solution:\r\n    def shuffle(self, nums: List[int], n: int) -> List[int]:\r\n        return [number for tup in zip(nums[:n], nums[n:]) for number in tup]",
    "java": "// Runtime: 1 ms (Top 65.71%) | Memory: 45.8 MB (Top 46.61%)\r\nclass Solution {\r\n    public int[] shuffle(int[] nums, int n)\r\n    {\r\n        int[] arr = new int[2*n];\r\n        int j = 0;\r\n        int k = n;\r\n        for(int i =0; i<2*n; i++)\r\n        {\r\n            if(i%2==0)\r\n            {\r\n                arr[i] = nums[j];\r\n                j++;\r\n            }\r\n            else\r\n            {\r\n                arr[i] = nums[k];\r\n                k++;\r\n            }\r\n        }\r\n        return arr;\r\n    }\r\n}",
    "javascript": "// Runtime: 134 ms (Top 11.99%) | Memory: 44.2 MB (Top 60.87%)\r\nvar shuffle = function(nums, n) {\r\n    while (n--) {\r\n        nums.splice(n + 1, 0, nums.pop());\r\n    }\r\n    return nums;\r\n};"
  }
}
