export default {
  "id": 2341,
  "name": "Maximum Number of Pairs in Array",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-number-of-pairs-in-array",
  "relativeDir": "M/Maximum Number of Pairs in Array",
  "slug": "2341-maximum-number-of-pairs-in-array",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 16,
    "java": 22,
    "python": 10,
    "javascript": 17
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n\t//store the frequency of each of the number in the map and\r\n\t//then return the answer as sum all the values dividing 2 and \r\n\t//sum all by taking reminder of 2\r\n    vector<int> numberOfPairs(vector<int>& nums) {\r\n        unordered_map<int, int> mp;\r\n        for(auto i: nums) mp[i]++;\r\n        int c1 = 0, c2 = 0;\r\n        for(auto m: mp){\r\n            c1 += m.second/2;\r\n            c2 += m.second%2;\r\n        }\r\n        return {c1, c2};\r\n    }\r\n};",
    "python": "class Solution:\r\n    def numberOfPairs(self, nums: List[int]) -> List[int]:\r\n        ans = [0] * 2\r\n        c = Counter(nums)\r\n        \r\n        for v in c.values():\r\n            ans[0] += (v // 2)\r\n            ans[1] += (v % 2)\r\n        \r\n        return ans",
    "java": "// Runtime: 4 ms (Top 21.09%) | Memory: 42.4 MB (Top 76.38%)\r\nclass Solution {\r\n    public int[] numberOfPairs(int[] nums) {\r\n\r\n        if(nums.length == 1)\r\n        return new int[]{0,1};\r\n\r\n        HashSet<Integer> set = new HashSet<>();\r\n\r\n        int pairs=0;\r\n        for(int i : nums){\r\n            if(!set.contains(i)){\r\n               set.add(i); // No pair present\r\n            }else{\r\n              set.remove(i); // Pair found\r\n              pairs++;\r\n            }\r\n        }\r\n\r\n        return new int[]{pairs,set.size()};\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number[]} nums\r\n * @return {number[]}\r\n */\r\nvar numberOfPairs = function(nums) {\r\n  let pairs = 0;\r\n  const s = new Set();\r\n  for (const num of nums) {\r\n    if (s.has(num)) {\r\n      pairs += 1;\r\n      s.delete(num);\r\n    } else {\r\n      s.add(num);\r\n    }\r\n  }\r\n  return [pairs, nums.length - pairs * 2];\r\n};"
  }
}
