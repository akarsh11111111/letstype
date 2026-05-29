export default {
  "id": 1546,
  "name": "Maximum Number of Non-Overlapping Subarrays With Sum Equals Target",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-number-of-non-overlapping-subarrays-with-sum-equals-target",
  "relativeDir": "M/Maximum Number of Non-Overlapping Subarrays With Sum Equals Target",
  "slug": "1546-maximum-number-of-non-overlapping-subarrays-with-sum-equals-target",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 16,
    "java": 19,
    "python": 20,
    "javascript": 15
  },
  "languages": {
    "cpp": "// Runtime: 392 ms (Top 40.92%) | Memory: 84.2 MB (Top 54.29%)\r\nclass Solution {\r\npublic:\r\n    unordered_map<int,int> mpp ;\r\n    int maxNonOverlapping(vector<int>& nums, int target) {\r\n\r\n        int sum = 0 , ways = 0 , prev = INT_MIN ;\r\n        mpp[0] = -1 ;\r\n        for(int i = 0 ; i < nums.size() ; ++i ){\r\n            sum += nums[i] ;\r\n            if(mpp.find(sum - target) != end(mpp) and mpp[sum-target] >= prev ) ++ways , prev = i ;\r\n            mpp[sum] = i ;\r\n        }\r\n        return ways ;\r\n    }\r\n};",
    "python": "'''\r\ngreedy, prefix sum with hashtable\r\nO(n), O(n)\r\n'''\r\nclass Solution:\r\n    def maxNonOverlapping(self, nums: List[int], target: int) -> int:\r\n        # hash set to record previously encountered prefix sums\r\n        prefix_sums = {0}\r\n        \r\n        res = prefix_sum = 0\r\n        for num in nums:\r\n            prefix_sum += num\r\n            if prefix_sum - target in prefix_sums:\r\n                res += 1\r\n                # greedily discard prefix sums before num\r\n                # thus not considering subarrays that start at before num \r\n                prefix_sums = {prefix_sum} \r\n            else:\r\n                prefix_sums.add(prefix_sum)\r\n        return res",
    "java": "class Solution {\r\n    public int maxNonOverlapping(int[] nums, int target) {\r\n        Map<Integer, Integer> valToPos = new HashMap<>();\r\n        int sums = 0;\r\n        int count = 0;\r\n        int lastEndPos = 0;\r\n        valToPos.put(0, 0);\r\n        for (int i = 0; i < nums.length; i++) {\r\n            sums += nums[i];\r\n            int pos = valToPos.getOrDefault(sums - target, -1);\r\n            if (pos >= lastEndPos) {\r\n                count += 1;\r\n                lastEndPos = i + 1;\r\n            }\r\n            valToPos.put(sums, i + 1);\r\n        }\r\n        return count;\r\n    }\r\n}",
    "javascript": "var maxNonOverlapping = function(nums, target) {\r\n    const seen = new Set();\r\n    let total = 0, result = 0;\r\n    \r\n    for(let n of nums) {\r\n        total += n;\r\n        \r\n        if(total === target || seen.has(total - target)) {\r\n            total = 0;\r\n            result++;\r\n            seen.clear()\r\n        } else seen.add(total)\r\n    }\r\n    return result;\r\n};"
  }
}
