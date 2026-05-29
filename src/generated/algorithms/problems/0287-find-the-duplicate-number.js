export default {
  "id": 287,
  "name": "Find the Duplicate Number",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-the-duplicate-number",
  "relativeDir": "F/Find the Duplicate Number",
  "slug": "0287-find-the-duplicate-number",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 29,
    "java": 24,
    "python": 11,
    "javascript": 13
  },
  "languages": {
    "cpp": "// Runtime: 286 ms (Top 20.57%) | Memory: 61.3 MB (Top 61.82%)\r\n                // Please upvote if it helps\r\nclass Solution {\r\npublic:\r\n    int findDuplicate(vector<int>& nums) {\r\n        int low = 1, high = nums.size() - 1, cnt;\r\n\r\n        while(low <= high)\r\n        {\r\n            int mid = low + (high - low) / 2;\r\n            cnt = 0;\r\n            // cnt number less than equal to mid\r\n            for(int n : nums)\r\n            {\r\n                if(n <= mid)\r\n                    ++cnt;\r\n            }\r\n            // binary search on left\r\n            if(cnt <= mid)\r\n                low = mid + 1;\r\n            else\r\n            // binary search on right\r\n                high = mid - 1;\r\n\r\n        }\r\n        return low;\r\n    }\r\n    // for github repository link go to my profile.\r\n};",
    "python": "# Runtime: 1523 ms (Top 9.74%) | Memory: 34 MB (Top 8.51%)\r\nclass Solution:\r\n    def findDuplicate(self, nums: List[int]) -> int:\r\n\r\n        dictx = {}\r\n\r\n        for each in nums:\r\n            if each not in dictx:\r\n                dictx[each] = 1\r\n            else:\r\n                return each",
    "java": "class Solution {\r\n    public int findDuplicate(int[] nums) {\r\n        int i = 0; \r\n         while (i < nums.length) {\r\n\r\n            if (nums[i] != i + 1) {\r\n                int correct = nums[i] - 1;\r\n                if (nums[i] != nums[correct]) {\r\n                    swap(nums, i , correct);\r\n                } else {\r\n                    return nums[i];\r\n                }\r\n            } else {\r\n                i++;\r\n            }\r\n        }\r\n        return -1;\r\n    }\r\n     static void swap(int[] arr, int first, int second) {\r\n        int temp = arr[first];\r\n        arr[first] = arr[second];\r\n        arr[second] = temp;\r\n    }\r\n   }",
    "javascript": "// Runtime: 151 ms (Top 47.90%) | Memory: 70.3 MB (Top 5.11%)\r\nvar findDuplicate = function(nums) {\r\n    let dup = new Map();\r\n\r\n    for(let val of nums){\r\n        if(dup.has(val)){\r\n            dup.set(val, dup.get(val) + 1);\r\n            return val;\r\n        }\r\n        else\r\n            dup.set(val, 1);\r\n    }\r\n};"
  }
}
