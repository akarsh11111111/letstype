export default {
  "id": 384,
  "name": "Shuffle an Array",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/shuffle-an-array",
  "relativeDir": "S/Shuffle an Array",
  "slug": "0384-shuffle-an-array",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 18,
    "java": 33,
    "python": 17,
    "javascript": 25
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<int> ans;\r\n    vector<int> res;\r\n    Solution(vector<int>& nums) {\r\n        ans=nums;\r\n        res=nums;\r\n    }\r\n    \r\n    vector<int> reset() {\r\n        return res;\r\n    }\r\n    \r\n    vector<int> shuffle() {\r\n        next_permutation(ans.begin(),ans.end());\r\n        return ans;\r\n    }\r\n};",
    "python": "import random \r\n\r\nclass Solution:\r\n\r\n    def __init__(self, nums: List[int]):\r\n        self.nums = nums\r\n\r\n    def reset(self) -> List[int]:  \r\n        return self.nums\r\n\r\n    def shuffle(self) -> List[int]:\r\n        shuffled_array = self.nums.copy()\r\n        # randomly generates the idx of the element that'll be the ith element of the array \r\n        for i in range(len(self.nums) - 1, 0, -1):\r\n            idx = random.randint(0, i)\r\n            shuffled_array[i], shuffled_array[idx] = shuffled_array[idx], shuffled_array[i]\r\n        return shuffled_array",
    "java": "// Runtime: 125 ms (Top 16.02%) | Memory: 64.6 MB (Top 78.83%)\r\nclass Solution {\r\n\r\n    int a[];\r\n    int b[];\r\n    public Solution(int[] nums) {\r\n        a=nums.clone();\r\n        b=nums.clone();\r\n    }\r\n\r\n    public int[] reset() {\r\n        a=b.clone();\r\n        return a;\r\n    }\r\n\r\n    public int[] shuffle() {\r\n\r\n        for(int i=0;i<a.length;i++){\r\n            int ren=(int)(Math.random()*a.length);\r\n            int temp= a[ren];\r\n             a[ren]=a[i];\r\n            a[i]=temp;\r\n        }\r\n        return a;\r\n    }\r\n}\r\n\r\n/**\r\n * Your Solution object will be instantiated and called as such:\r\n * Solution obj = new Solution(nums);\r\n * int[] param_1 = obj.reset();\r\n * int[] param_2 = obj.shuffle();\r\n */",
    "javascript": "// Runtime: 308 ms (Top 14.36%) | Memory: 51.8 MB (Top 95.39%)\r\n\r\nvar Solution = function(nums) {\r\n    this.nums = nums;\r\n    this.resetArray = [...nums];\r\n};\r\n\r\nSolution.prototype.reset = function() {\r\n    return this.resetArray;\r\n};\r\n\r\nSolution.prototype.shuffle = function() {\r\n\r\n    const n = this.nums.length;\r\n    const numsArray = this.nums;\r\n\r\n    for (let i = 0; i < n; i++) {\r\n        const j = Math.floor(Math.random() * (n - i)) + i;\r\n        const tmp = numsArray[i];\r\n        numsArray[i] = numsArray[j];\r\n        numsArray[j] = tmp;\r\n    }\r\n\r\n    return numsArray;\r\n};"
  }
}
