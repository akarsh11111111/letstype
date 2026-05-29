export default {
  "id": 398,
  "name": "Random Pick Index",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/random-pick-index",
  "relativeDir": "R/Random Pick Index",
  "slug": "0398-random-pick-index",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 28,
    "java": 21,
    "python": 35,
    "javascript": 17
  },
  "languages": {
    "cpp": "class Solution {\r\n    unordered_map<int,vector<int>> itemIndicies;\r\npublic:\r\n    Solution(vector<int>& nums)\r\n    {\r\n        srand(time(NULL));\r\n        \r\n        for (int i = 0; i < nums.size(); i++)\r\n        {\r\n            if (itemIndicies.find(nums[i]) == itemIndicies.end())\r\n                itemIndicies[nums[i]] = {i};\r\n            else\r\n                itemIndicies[nums[i]].push_back(i);\r\n        }\r\n    }\r\n    \r\n    int pick(int target) {\r\n        int size = itemIndicies[target].size();\r\n        int randomValue = rand() % size;\r\n        return itemIndicies[target][randomValue];\r\n    }\r\n};\r\n\r\n/**\r\n * Your Solution object will be instantiated and called as such:\r\n * Solution* obj = new Solution(nums);\r\n * int param_1 = obj->pick(target);\r\n */",
    "python": "class Solution:\r\n\r\n    def __init__(self, nums: List[int]):\r\n        #self.nums = nums\r\n        #create a hash of values with their list of indices\r\n        self.map = defaultdict(list)\r\n        for i,v in enumerate(nums):\r\n            self.map[v].append(i)\r\n        \r\n\r\n    def pick(self, target: int) -> int:\r\n        return random.sample(self.map[target],1)[0]\r\n        '''\r\n        reservoir = 0\r\n        count = 0\r\n        for i in range(len(self.nums)):\r\n            if self.nums[i] == target:\r\n                count+=1\r\n                if random.random() < 1/count:\r\n                    reservoir = i\r\n        return reservoir\r\n\r\n        \r\n        samp = []\r\n        for i in range(len(self.nums)):\r\n            if self.nums[i] == target:\r\n                samp.append(i)\r\n        return (random.sample(samp,1))[0]\r\n        '''\r\n        \r\n\r\n\r\n# Your Solution object will be instantiated and called as such:\r\n# obj = Solution(nums)\r\n# param_1 = obj.pick(target)",
    "java": "// Runtime: 85 ms (Top 42.59%) | Memory: 55.80 MB (Top 31.28%)\r\n\r\nclass Solution {\r\n    Random random;\r\n    int[] origin;\r\n    \r\n    public Solution(int[] nums) {\r\n        random = new Random();\r\n        origin = nums;\r\n    }\r\n    \r\n    public int pick(int target) {\r\n        \r\n        while(true){\r\n            int idx = random.nextInt(origin.length);\r\n            if(origin[idx] == target){\r\n                return idx;\r\n            }\r\n        }\r\n    }\r\n}",
    "javascript": "// Runtime: 412 ms (Top 30.40%) | Memory: 89.1 MB (Top 48.00%)\r\nvar Solution = function(nums) {\r\n    this.map = nums.reduce((result, num, index) => {\r\n        const value = result.get(num) ?? [];\r\n\r\n        value.push(index);\r\n        result.set(num, value);\r\n        return result;\r\n    }, new Map());\r\n};\r\n\r\nSolution.prototype.pick = function(target) {\r\n    const pick = this.map.get(target);\r\n    const random = Math.random() * pick.length | 0;\r\n\r\n    return pick[random];\r\n};"
  }
}
