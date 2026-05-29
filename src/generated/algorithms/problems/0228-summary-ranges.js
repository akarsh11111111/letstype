export default {
  "id": 228,
  "name": "Summary Ranges",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/summary-ranges",
  "relativeDir": "S/Summary Ranges",
  "slug": "0228-summary-ranges",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 40,
    "python": 28,
    "javascript": 30
  },
  "languages": {
    "cpp": "\t\t\t\t\t\t// 😉😉😉😉Please upvote if it helps 😉😉😉😉\r\nclass Solution {\r\npublic:\r\n    vector<string> summaryRanges(vector<int>& nums) {\r\n\t\t// resultant string\r\n        vector<string> result;\r\n        \r\n        int n = nums.size();\r\n\t\t// if size happens to be  zero return empty string\r\n        if(n == 0 )\r\n                return result;\r\n        \r\n\t\t// assigning first element to a\r\n        int a = nums[0];\r\n        \r\n        for(int i = 0; i<n; i++)\r\n        {\r\n\t\t\t// if one of both is true\r\n            if( i == n-1 || nums[i]+1 != nums[i+1])\r\n            {\r\n\t\t\t    // if current element is not equals a\r\n\t\t\t\t// this means we have found a range.\r\n                if(nums[i] != a)\r\n                    result.push_back(to_string(a)+ \"->\"+ to_string(nums[i]));\r\n\t\t\t\t\t\r\n\t\t\t\t// this means we have reached to the end of string and now\r\n\t\t\t\t// we have to add a that should be the last element\r\n                else\r\n                        result.push_back(to_string(a));\r\n\t\t\t\t\t\t\r\n\t\t\t\t// checking  for this condition so that a got updated for next range\r\n\t\t\t\t// also n-1 so that a doesn't contain out of bound value\r\n                if(i != n-1)\r\n                    a = nums[i+1];\r\n            }\r\n        }\r\n\t\t// return result\r\n        return result;\r\n    }\r\n};",
    "python": "# Runtime: 38 ms (Top 76.97%) | Memory: 13.8 MB (Top 98.42%)\r\n\r\nclass Solution(object):\r\n    def summaryRanges(self, nums):\r\n\r\n        if len(nums) == 0:\r\n            return []\r\n\r\n        l, r = 0, 0\r\n        res = []\r\n\r\n        while l<=r and r <= len(nums):\r\n\r\n            if r == 0:\r\n                r+=1\r\n\r\n            while r < len(nums) and r>0 and nums[r-1] == nums[r]-1:\r\n                r+=1\r\n\r\n            if r-1 == l:\r\n                    res.append(str(nums[r-1]))\r\n            else:\r\n                res.append(str(nums[l]) + '->' + str(nums[r-1]))\r\n\r\n            l=r\r\n            r+=1\r\n\r\n        return res",
    "javascript": "// Runtime: 47 ms (Top 78.6%) | Memory: 41.90 MB (Top 55.1%)\r\n\r\n// Runtime: 46 ms, faster than 86.21% of JavaScript online submissions for Summary Ranges.\r\n// Time Complexity : O(N)\r\n// Space Complexity : O(1)\r\nvar summaryRanges = function(nums) {\r\n    // Create a list of string to store the output result...\r\n    const output = [];\r\n    // Start traversing the array from idx = 0 till idx < sizeofarray in a while loop.\r\n    let idx = 0;\r\n    while(idx < nums.length) {\r\n        // Initialize beg and last index for identifying the continuous element in the array...\r\n        let beg, last;\r\n        // Mark the number at current index as beginning element of the range...\r\n        beg = nums[idx];\r\n        // Traverse the array beggining from current index & find the last element whose difference from previous element is exactly 1, i.e. nums[idx + 1] == nums[idx] + 1...\r\n        while(idx+1 < nums.length && nums[idx+1] == nums[idx] + 1) \r\n            idx++;\r\n        // Set this element as last element of the range...\r\n        last = nums[idx];\r\n        // If continuous element isn't present...\r\n        if(beg == last)\r\n            output.push(beg + \"\");\r\n        // If present...\r\n        else\r\n            output.push( beg + \"->\" + last );\r\n        idx++;          \r\n    }\r\n    return output;      // Return the output result list...\r\n};"
  }
}
