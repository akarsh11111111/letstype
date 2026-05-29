export default {
  "id": 2195,
  "name": "Append K Integers With Minimal Sum",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/append-k-integers-with-minimal-sum",
  "relativeDir": "A/Append K Integers With Minimal Sum",
  "slug": "2195-append-k-integers-with-minimal-sum",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 59,
    "python": 14,
    "javascript": 17
  },
  "languages": {
    "cpp": "// Runtime: 116 ms (Top 82.06%) | Memory: 66.60 MB (Top 59.64%)\r\n\r\nclass Solution {\r\npublic:\r\n    long long minimalKSum(vector<int>& nums, int k) {\r\n        int n = nums.size();\r\n        \r\n        // Sort array so that we can get smaller elements first\r\n        sort(begin(nums), end(nums));\r\n        \r\n        long long sum = 0;\r\n        \r\n        // Previous element that we encountered\r\n        int prev = 0, curr = 0;\r\n        \r\n        for(int i=0; i<n; i++) {\r\n            \r\n            curr = nums[i];\r\n            \r\n            // Get the difference b/w prev and current \r\n            // So that we can append elements that are in between them\r\n            long long diff = (curr - prev - 1);\r\n            \r\n            // If prev and current are same then just skip\r\n            if(diff <= 0) {\r\n                prev = curr;\r\n                continue;\r\n            }\r\n            \r\n            // If there are more available elements b/w prev and current\r\n            // Then we just take closest k element from prev.\r\n            // And leave remaining as it is\r\n            if(diff > k) {\r\n                diff = k;\r\n                curr = prev + k + 1;\r\n            }\r\n            \r\n            // Get the sum of all elements b/w prev and current\r\n            // Since it is AP series, we can use direct formula\r\n            sum += (diff * 1LL * (curr + prev) / 2);\r\n            \r\n            // Update previous to current\r\n            prev = curr;\r\n            \r\n            // Update count of how many more element we need to append \r\n            k -= diff;\r\n            \r\n            if(k == 0) break;\r\n        }\r\n        \r\n        // Case : When we have reached the end of array \r\n        // And still we have some more element left to append\r\n        if(k) {\r\n            sum += (k * 1LL * (2 * prev + k + 1) / 2);\r\n        }\r\n        \r\n        return sum;\r\n    }\r\n};",
    "python": "# Runtime: 563 ms (Top 89.1%) | Memory: 31.37 MB (Top 44.5%)\r\n\r\nclass Solution:\r\n    def minimalKSum(self, nums: List[int], k: int) -> int:\r\n        ans = k*(k+1)//2\r\n        prev = -inf \r\n        for x in sorted(nums): \r\n            if prev < x: \r\n                if x <= k: \r\n                    k += 1\r\n                    ans += k - x\r\n                else: break\r\n                prev = x\r\n        return ans",
    "javascript": "var minimalKSum = function(nums, k) {\r\n  let total = (k*(k+1))/2;\r\n    \r\n  nums = Array.from(new Set(nums));\r\n  nums.sort((a,b)=>a-b); \r\n  for (let num of nums) {\r\n    if (num<=k) {\r\n      k++;\r\n      console.log(total-1)\r\n      total=total-num+k;\r\n      console.log(total+1)\r\n    }\r\n    else\r\n      break;\r\n  }\r\n  return total;\r\n}"
  }
}
