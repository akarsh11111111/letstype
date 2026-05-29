export default {
  "id": 2023,
  "name": "Number of Pairs of Strings With Concatenation Equal to Target",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/number-of-pairs-of-strings-with-concatenation-equal-to-target",
  "relativeDir": "N/Number of Pairs of Strings With Concatenation Equal to Target",
  "slug": "2023-number-of-pairs-of-strings-with-concatenation-equal-to-target",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 22,
    "java": 21,
    "python": 3,
    "javascript": 22
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int numOfPairs(vector<string>& nums, string target) {\r\n        unordered_map<string, int> freq;\r\n        for (auto num : nums) if (num.size() < target.size()) freq[num]++;\r\n        \r\n        int res = 0;\r\n        for (auto [s, frq] : freq) {\r\n            \r\n            if (target.find(s) == 0) {\r\n                \r\n                if (s + s == target) \r\n                    res += frq*(frq-1);\r\n                \r\n                else \r\n                    res += frq * freq[target.substr(s.size())];\r\n            }\r\n        }\r\n        \r\n        return res;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def numOfPairs(self, nums, target):\r\n        return sum(i + j == target for i, j in permutations(nums, 2))",
    "java": "class Solution {\r\n    public int numOfPairs(String[] nums, String target) {\r\n        \r\n        HashMap<String, Integer> map = new HashMap<>();\r\n        for (int i = 0; i<nums.length; i++){\r\n            map.put(nums[i], map.getOrDefault(nums[i],0)+1);\r\n        }\r\n        \r\n        int ans = 0, n = target.length();\r\n        String a = \"\", b= \"\";\r\n        for (int i = 1; i<n; i++){\r\n            a = target.substring(0,i);\r\n            b = target.substring(i,n);\r\n            if (map.containsKey(a) && map.containsKey(b)){\r\n                if (a.equals(b)) ans += (map.get(a) * (map.get(a)-1));\r\n                else ans+= (map.get(a) * map.get(b));\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n}",
    "javascript": "// Runtime: 138 ms (Top 23.42%) | Memory: 47.9 MB (Top 74.77%)\r\n/**\r\n * @param {string[]} nums\r\n * @param {string} target\r\n * @return {number}\r\n */\r\nvar numOfPairs = function(nums, target) {\r\n    var count = 0;\r\n    var x = 0;\r\n    while (x < nums.length) {\r\n        for (let y = 0; y<nums.length; y++) {\r\n            if (nums[x] + nums[y] == target) {\r\n                count += 1;\r\n                if (x == y) {\r\n                    count -= 1;\r\n                }\r\n            }\r\n        }\r\n        x++;\r\n    }\r\n    return count;\r\n};"
  }
}
