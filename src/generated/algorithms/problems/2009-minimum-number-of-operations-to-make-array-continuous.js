export default {
  "id": 2009,
  "name": "Minimum Number of Operations to Make Array Continuous",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-number-of-operations-to-make-array-continuous",
  "relativeDir": "M/Minimum Number of Operations to Make Array Continuous",
  "slug": "2009-minimum-number-of-operations-to-make-array-continuous",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 20,
    "java": 16,
    "python": 14
  },
  "languages": {
    "cpp": "// Runtime: 149 ms (Top 82.97%) | Memory: 64.80 MB (Top 63.96%)\r\n\r\n// OJ: https://leetcode.com/problems/minimum-number-of-operations-to-make-array-continuous/\r\n// Author: github.com/lzl124631x\r\n// Time: O(NlogN)\r\n// Space: O(1)\r\nclass Solution {\r\npublic:\r\n    int minOperations(vector<int>& A) {\r\n        int N = A.size(), ans = N, j = 0;\r\n        sort(begin(A), end(A));\r\n        A.erase(unique(begin(A), end(A)), end(A)); // only keep unique elements\r\n        int M = A.size();\r\n        for (int i = 0; i < M; ++i) {\r\n            while (j < M && A[j] < A[i] + N) ++j; // let `j` point to the first element that is out of range -- `>= A[i] + N`.\r\n            ans = min(ans, N - j + i); // The length of this subarray is `j - i`. We need to replace `N - j + i` elements to make it continuous.\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def minOperations(self, nums: List[int]) -> int:\r\n        n = len(nums)\r\n        nums = sorted(set(nums))\r\n        end = 0\r\n        ans = -1\r\n        for i in range(len(nums)):\r\n            while end < len(nums):\r\n                if nums[i] + n > nums[end]:\r\n                    end+=1\r\n                else:\r\n                    break\r\n            ans = max(ans,end - i)\r\n        return n - ans",
    "java": "class Solution {\r\n    public int minOperations(int[] nums) {\r\n        TreeSet<Integer> set = new TreeSet<>();\r\n        int threshold = nums.length-1;\r\n        int max = 0;\r\n        Arrays.sort(nums);\r\n        for(int num:nums) {\r\n            while(!set.isEmpty() && num-set.first()>threshold) {\r\n                set.remove(set.first());\r\n            } \r\n            set.add(num);\r\n            max = Math.max(max, set.size());   \r\n        }\r\n        return nums.length-max;\r\n    }\r\n}"
  }
}
