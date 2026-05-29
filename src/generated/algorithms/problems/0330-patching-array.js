export default {
  "id": 330,
  "name": "Patching Array",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/patching-array",
  "relativeDir": "P/Patching Array",
  "slug": "0330-patching-array",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 26,
    "java": 19,
    "python": 19,
    "javascript": 25
  },
  "languages": {
    "cpp": "// Runtime: 8 ms (Top 77.22%) | Memory: 11.5 MB (Top 9.63%)\r\nclass Solution {\r\npublic:\r\n    int minPatches(vector<int>& nums, int n) {\r\n        nums.push_back(0);\r\n        sort(nums.begin(), nums.end());\r\n        long sum = 0;\r\n        int ans = 0;\r\n        for(int i = 1; i < nums.size(); i++){\r\n            while((long)nums[i] > (long)(sum + 1)){\r\n                ans++;\r\n                sum += (long)(sum + 1);\r\n                if(sum >= (long)n)\r\n                    return ans;\r\n            }\r\n            sum += nums[i];\r\n            if(sum >= (long)n)\r\n                return ans;\r\n        }\r\n        while(sum < (long)n){\r\n            ans++;\r\n            sum += (long)(sum + 1);\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def minPatches(self, nums: List[int], n: int) -> int:\r\n\t#pre-process for convenience\r\n        nums.append(n+1)\r\n        t=1\r\n        sum=1\r\n        rs=0\r\n        if nums[0]!=1:\r\n            nums=[1]+nums\r\n            rs+=1\r\n# the idea is sum from index 0 to index i should cover 1 to that sum*2 then we go form left to right to cover upto n\r\n        while sum<n:\r\n            if sum<nums[t]-1:\r\n                sum+=(sum+1)\r\n                rs+=1\r\n            else:\r\n                sum+=nums[t]\r\n                t+=1\r\n        return rs",
    "java": "class Solution {\r\n     public int minPatches(int[] nums, int n) {\r\n        long sum = 0;\r\n        int count = 0;\r\n        for (int x : nums) {\r\n            if (sum >= n) break;\r\n            while (sum+1 < x && sum < n) { \r\n                ++count;\r\n                sum += sum+1;\r\n            }\r\n            sum += x;\r\n        }\r\n        while (sum < n) {\r\n            sum += sum+1;\r\n            ++count;\r\n        }\r\n        return count;\r\n    }\r\n}",
    "javascript": "// Runtime: 65 ms (Top 100.00%) | Memory: 42.7 MB (Top 47.37%)\r\n// time complexity:\r\n// while loop is - o(n) beacuse we can potentially get to n with nums array full of ones and we will pass on each of them\r\n// in some cases it will hit o(logn) if the nums array is pretty empty\r\nvar minPatches = function(nums, n) {\r\n    // nums is sorted so we don't have to sort it\r\n    let index = 0;\r\n    let sumCanCreate = 0;\r\n    let patchCount = 0;\r\n    while(sumCanCreate < n) {\r\n        // if we can't create nums[index] or we at the end of nums and can't create n.\r\n        // we can create nums[index] only if it is lower or equal to sumCanCreate+1.\r\n        if(sumCanCreate+1 < nums[index] || (index >= nums.length && sumCanCreate+1 < n)) {\r\n            patchCount++;\r\n            // because we \"patch\" the next number in the sequence.\r\n            sumCanCreate += (sumCanCreate+1);\r\n        // if we can create nums[index].\r\n        } else {\r\n            // we can create anything from current sumCanCreate to (sumCanCreate + nums[index]).\r\n            sumCanCreate += nums[index];\r\n            index++;\r\n        }\r\n    }\r\n    return patchCount;\r\n};"
  }
}
