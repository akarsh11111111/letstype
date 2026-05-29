export default {
  "id": 1995,
  "name": "Count Special Quadruplets",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/count-special-quadruplets",
  "relativeDir": "C/Count Special Quadruplets",
  "slug": "1995-count-special-quadruplets",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 24,
    "java": 21,
    "python": 5,
    "javascript": 59
  },
  "languages": {
    "cpp": "// Runtime: 15 ms (Top 91.46%) | Memory: 13.90 MB (Top 18.59%)\r\n\r\nclass Solution {\r\npublic:\r\n    int countQuadruplets(vector<int>& nums) {\r\n        int res = 0;\r\n        int len = nums.size();\r\n        \r\n        unordered_map<int, int> count;\r\n        count[nums[len-1] - nums[len-2]] = 1;\r\n        \r\n        for (int b = len - 3; b >= 1; b--) {\r\n            for (int a = b - 1; a >= 0; a--) {\r\n                res += count[nums[a] + nums[b]];\r\n            }\r\n            \r\n            for (int x = len - 1; x > b; x--) {\r\n                count[nums[x] - nums[b]]++;\r\n            }\r\n        }\r\n        \r\n        return res;\r\n    }\r\n};",
    "python": "# Runtime: 640 ms (Top 64.4%) | Memory: 17.10 MB (Top 9.2%)\r\n\r\nclass Solution:\r\n    def countQuadruplets(self, nums: List[int]) -> int:\r\n        return sum([1 for a, b, c, d in combinations(nums, 4) if a + b + c == d])",
    "java": "class Solution {\r\n    public int countQuadruplets(int[] nums) {\r\n        int res = 0;\r\n        int len = nums.length;\r\n        \r\n        Map<Integer, Integer> count = new HashMap<>();\r\n        count.put(nums[len-1] - nums[len-2], 1);\r\n        \r\n        for (int b = len - 3; b >= 1; b--) {\r\n            for (int a = b - 1; a >= 0; a--) {\r\n                res += count.getOrDefault(nums[a] + nums[b], 0);\r\n            }\r\n            \r\n            for (int x = len - 1; x > b; x--) {\r\n                count.put(nums[x] - nums[b], count.getOrDefault(nums[x] - nums[b], 0) + 1);\r\n            }\r\n        }\r\n        \r\n        return res;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number[]} nums\r\n * @return {number}\r\n */\r\nvar countQuadruplets = function(nums) {\r\n    const map = new Map();\r\n    \r\n    for(let i = 0; i < nums.length; i++) {\r\n        let n = nums[i];\r\n        \r\n        if(map.has(n)) {\r\n            let t = map.get(n);\r\n            t.push(i);\r\n            map.set(n, t);\r\n        } else {\r\n            map.set(n, [i]);\r\n        }\r\n    }\r\n    \r\n    let count = 0;\r\n    \r\n    for(let a = 0;a < nums.length - 3; a++) {\r\n        for(let b = a + 1; b < nums.length - 2; b++) {\r\n            for(let c = b + 1; c < nums.length - 1;c++) {\r\n                let sum = nums[a] + nums[b] + nums[c];\r\n                \r\n                let indexes = map.get(sum) || [];\r\n\t\t\t\t//t is the d index that might exist\r\n                let t = c + 1;\r\n                \r\n                let low = 0;\r\n                let high = indexes.length - 1;\r\n                let ans = -1;\r\n                \r\n                while(low <= high) {\r\n                    let mid = low + Math.floor((high - low)/2);\r\n                    \r\n                    if(indexes[mid] === t) {\r\n                        ans = mid;\r\n                        break;\r\n                    }\r\n                    \r\n                    if(indexes[mid] < t) {\r\n                        low = mid + 1;\r\n                    } else {\r\n                        ans = mid;\r\n                        high = mid - 1;\r\n                    }\r\n                }\r\n                \r\n                if(ans !== -1) {\r\n                    count += indexes.length - ans;\r\n                }\r\n            }\r\n        }\r\n    }\r\n    \r\n    return count;\r\n};"
  }
}
