export default {
  "id": 1674,
  "name": "Minimum Moves to Make Array Complementary",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-moves-to-make-array-complementary",
  "relativeDir": "M/Minimum Moves to Make Array Complementary",
  "slug": "1674-minimum-moves-to-make-array-complementary",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 21,
    "java": 21,
    "python": 19
  },
  "languages": {
    "cpp": "// Runtime: 367 ms (Top 23.53%) | Memory: 89 MB (Top 32.94%)\r\nclass Solution {\r\npublic:\r\n  int minMoves(vector<int>& nums, int limit) {\r\n    vector<int>table(limit + limit + 2, 0);\r\n\r\n    for(int i = 0, j = nums.size()-1; i < j; i++, j--){\r\n      if(nums[i] > nums[j]) swap(nums[i], nums[j]);\r\n      table[nums[i]+1]--, table[nums[j]+1+limit]++;\r\n    }\r\n\r\n    int sum = nums.size();\r\n    for(int i = 0; i != table.size(); i++)\r\n      table[i] = sum += table[i];\r\n\r\n    for(int i = 0, j = nums.size()-1; i < j; i++, j--)\r\n      table[nums[i] + nums[j]]--;\r\n\r\n    return *min_element(table.begin(), table.end());\r\n  }\r\n};",
    "python": "class Solution:  \r\n    def minMoves(self, nums: List[int], limit: int) -> int:\r\n        n = len(nums)\r\n        overlay_arr = [0] * (2*limit+2)\r\n        for i in range(n//2):\r\n            left_boundary = min(nums[i], nums[n-1-i]) + 1\r\n            no_move_value = nums[i] + nums[n-1-i]\r\n            right_boundary = max(nums[i], nums[n-1-i]) + limit\r\n            overlay_arr[left_boundary] -= 1\r\n            overlay_arr[no_move_value] -= 1\r\n            overlay_arr[no_move_value+1] += 1\r\n            overlay_arr[right_boundary+1] += 1\r\n        curr_moves = n   #initial assumption of two moves for each pair\r\n        res = float(\"inf\")\r\n\t\t# start Sweeping\r\n        for i in range(2, 2*limit+1):\r\n            curr_moves += overlay_arr[i]\r\n            res = min(res, curr_moves)\r\n        return res",
    "java": "class Solution {\r\n    public int minMoves(int[] nums, int limit) {\r\n        int[] oneMove = new int[2 * limit + 2];\r\n        Map<Integer, Integer> noMove = new HashMap<>();\r\n\r\n        for (int i = 0; i < nums.length / 2; i++){\r\n            int j = nums.length - 1 - i;\r\n            noMove.merge(nums[i] + nums[j], 1, Integer::sum);\r\n            oneMove[Math.min(nums[i], nums[j]) + 1]++;\r\n            oneMove[Math.max(nums[i], nums[j]) + limit + 1]--;\r\n        }\r\n\r\n        int ans = nums.length, one = 0;\r\n        for (int i = 2; i <= 2 * limit; i++){\r\n            one += oneMove[i];\r\n            ans = Math.min(ans, one + 2 * (nums.length / 2 - one) - noMove.getOrDefault(i, 0));\r\n        }\r\n\r\n        return ans;\r\n    }\r\n}"
  }
}
