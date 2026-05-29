export default {
  "id": 528,
  "name": "Random Pick with Weight",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/random-pick-with-weight",
  "relativeDir": "R/Random Pick with Weight",
  "slug": "0528-random-pick-with-weight",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 16,
    "java": 30,
    "python": 24,
    "javascript": 34
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<int> cumW;  \r\n    Solution(vector<int>& w) {\r\n        // initialising random seeder\r\n        srand(time(NULL));\r\n        // populating the cumulative weights vector\r\n        cumW.resize(w.size());\r\n        cumW[0] = w[0];\r\n        for (int i = 1; i < w.size(); i++) cumW[i] = cumW[i - 1] + w[i];\r\n    }\r\n    \r\n    int pickIndex() {\r\n        return upper_bound(begin(cumW), end(cumW), rand() % cumW.back()) - begin(cumW);\r\n    }\r\n};",
    "python": "class Solution(object):\r\n\tdef __init__(self, w):\r\n\t\t\"\"\"\r\n\t\t:type w: List[int]\r\n\t\t\"\"\"\r\n\t\t#Cumulative sum\r\n\t\tself.list = [0] * len(w)\r\n\r\n\t\ts = 0\r\n\t\tfor i, n in enumerate(w):\r\n\t\t\ts += n\r\n\t\t\tself.list[i] = s\r\n\r\n\r\n\tdef pickIndex(self):\r\n\t\t\"\"\"\r\n\t\t:rtype: int\r\n\t\t\"\"\"\r\n\t\treturn bisect_left(self.list, random.randint(1, self.list[-1]))\r\n\r\n\r\n# Your Solution object will be instantiated and called as such:\r\n# obj = Solution(w)\r\n# param_1 = obj.pickIndex()",
    "java": "// Runtime: 50 ms (Top 42.43%) | Memory: 56.3 MB (Top 78.21%)\r\nclass Solution {\r\n\r\n    private int[] prefixSum;\r\n    private Random random;\r\n\r\n    public Solution(int[] w) {\r\n        for (int i = 1; i < w.length; i++)\r\n            w[i] += w[i - 1];\r\n        prefixSum = w;\r\n        random = new Random();\r\n    }\r\n\r\n    public int pickIndex() {\r\n        int num = 1 + random.nextInt(prefixSum[prefixSum.length - 1]); // Generate random number between 1 and total sum of weights\r\n        int left = 0;\r\n        int right = prefixSum.length - 1;\r\n\r\n        while (left < right) {\r\n            int mid = (left + right) / 2;\r\n            if (num == prefixSum[mid])\r\n                return mid;\r\n            else if (num < prefixSum[mid])\r\n                right = mid;\r\n            else\r\n                left = mid + 1;\r\n        }\r\n        return left;\r\n    }\r\n}",
    "javascript": "class Solution {\r\n    constructor(nums) {\r\n        this.map = new Map();\r\n        this.sum = 0;\r\n        \r\n        nums.forEach((num, i) => {\r\n            this.sum += num;\r\n            this.map.set(this.sum, i);\r\n        })\r\n    }\r\n    pickIndex = function() {\r\n        const random_sum = Math.floor(Math.random() * this.sum);\r\n        return this.fetchIndexUsingBS(random_sum);\r\n    }\r\n    fetchIndexUsingBS = function(target) {\r\n        const sums = Array.from(this.map.keys());\r\n        let lo = 0,\r\n            hi = sums.length - 1,\r\n            mid;\r\n        \r\n        while(lo <= hi) {\r\n            mid = Math.floor((hi - lo)/2) + lo;\r\n            // if((mid === 0 || sums[mid - 1] < target) && sums[mid] >= target) {\r\n            //     return this.map.get(sums[mid]);\r\n            // }\r\n            if(sums[mid] > target) {\r\n                hi = mid - 1;\r\n            } else {\r\n                lo = mid + 1;\r\n            }\r\n        }\r\n        return lo;\r\n    }\r\n}"
  }
}
