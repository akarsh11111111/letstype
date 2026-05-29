export default {
  "id": 2150,
  "name": "Find All Lonely Numbers in the Array",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-all-lonely-numbers-in-the-array",
  "relativeDir": "F/Find All Lonely Numbers in the Array",
  "slug": "2150-find-all-lonely-numbers-in-the-array",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 20,
    "java": 24,
    "python": 5,
    "javascript": 16
  },
  "languages": {
    "cpp": "// Runtime: 517 ms (Top 77.96%) | Memory: 167.2 MB (Top 67.68%)\r\nclass Solution {\r\npublic:\r\n    vector<int> findLonely(vector<int>& nums) {\r\n        int n=nums.size();\r\n        unordered_map<int,int> ump;\r\n        vector<int> sol;\r\n        for(int i=0;i<n;i++)\r\n        {\r\n            ump[nums[i]]++;\r\n        }\r\n        for(auto a: ump)\r\n        {\r\n            if(a.second==1 and !ump.count(a.first+1) and !ump .count(a.first-1))\r\n                sol.push_back(a.first);\r\n        }\r\n\r\n        return sol;\r\n    }\r\n};",
    "python": "# Runtime: 4306 ms (Top 5.12%) | Memory: 38.2 MB (Top 71.56%)\r\nclass Solution:\r\n    def findLonely(self, nums: List[int]) -> List[int]:\r\n        m = Counter(nums)\r\n        return [n for n in nums if m[n] == 1 and m[n - 1] + m[n + 1] == 0]",
    "java": "// Runtime: 32 ms (Top 100.00%) | Memory: 61.2 MB (Top 97.43%)\r\nclass Solution {\r\n    public List<Integer> findLonely(int[] nums) {\r\n        Arrays.sort(nums);\r\n        ArrayList<Integer> list = new ArrayList<>();\r\n        for (int i = 1; i < nums.length - 1; i++) {\r\n            if (nums[i - 1] + 1 < nums[i] && nums[i] + 1 < nums[i + 1]) {\r\n                list.add(nums[i]);\r\n            }\r\n        }\r\n        if (nums.length == 1) {\r\n            list.add(nums[0]);\r\n        }\r\n        if (nums.length > 1) {\r\n            if (nums[0] + 1 < nums[1]) {\r\n                list.add(nums[0]);\r\n            }\r\n            if (nums[nums.length - 2] + 1 < nums[nums.length - 1]) {\r\n                list.add(nums[nums.length - 1]);\r\n            }\r\n        }\r\n        return list;\r\n    }\r\n}",
    "javascript": "// Runtime: 377 ms (Top 95.35%) | Memory: 84 MB (Top 73.26%)\r\nvar findLonely = function(nums) {\r\n    let countMap = new Map();\r\n    let result = [];\r\n    for (let num of nums) {\r\n        countMap.set(num, (countMap.get(num) || 0) + 1);\r\n    }\r\n    for (let num of nums) {\r\n        if (!countMap.has(num - 1) && !countMap.has(num + 1) && countMap.get(num) === 1) {\r\n\r\n            result.push(num);\r\n        }\r\n\r\n    }\r\n    return result;\r\n};"
  }
}
