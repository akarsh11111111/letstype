export default {
  "id": 1695,
  "name": "Maximum Erasure Value",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-erasure-value",
  "relativeDir": "M/Maximum Erasure Value",
  "slug": "1695-maximum-erasure-value",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 28,
    "java": 18,
    "python": 21,
    "javascript": 10
  },
  "languages": {
    "cpp": "// Runtime: 461 ms (Top 64.36%) | Memory: 127.1 MB (Top 40.21%)\r\nclass Solution {\r\npublic:\r\n    int maximumUniqueSubarray(vector<int>& nums) {\r\n        int curr_sum=0, res=0;\r\n\r\n        //set to store the elements\r\n        unordered_set<int> st;\r\n\r\n        int i=0,j=0;\r\n        while(j<nums.size()) {\r\n            while(st.count(nums[j])>0) {\r\n                //Removing the ith element untill we reach the repeating element\r\n                st.erase(nums[i]);\r\n                curr_sum-=nums[i];\r\n                i++;\r\n            }\r\n            //Add the current element to set and curr_sum value\r\n            curr_sum+=nums[j];\r\n            st.insert(nums[j++]);\r\n\r\n            //res variable to keep track of largest curr_sum encountered till now...\r\n            res = max(res, curr_sum);\r\n        }\r\n\r\n        return res;\r\n    }\r\n};",
    "python": "// Runtime: 796 ms (Top 99.64%) | Memory: 29.60 MB (Top 94.86%)\r\n\r\nclass Solution:\r\n\tdef maximumUniqueSubarray(self, nums: List[int]) -> int:\r\n\t\tlow = 0\r\n\t\tvisited = set()\r\n\t\tresult = 0\r\n\t\tcurSum = 0\r\n\t\tfor high in range(len(nums)):\r\n\t\t\twhile nums[high] in visited:\r\n\t\t\t\tvisited.remove(nums[low])\r\n\t\t\t\tcurSum -= nums[low]\r\n\t\t\t\tlow+=1\r\n\r\n\t\t\tvisited.add(nums[high])\r\n\t\t\tcurSum += nums[high]\r\n\r\n\t\t\tif curSum > result:\r\n\t\t\t\tresult = curSum\r\n\r\n\t\treturn result",
    "java": "// Runtime: 7 ms (Top 95.0%) | Memory: 59.10 MB (Top 35.8%)\r\n\r\nclass Solution {\r\n    public int maximumUniqueSubarray(int[] nums) {\r\n        short[] nmap = new short[10001];\r\n        int total = 0, best = 0;\r\n        for (int left = 0, right = 0; right < nums.length; right++) {\r\n            nmap[nums[right]]++;\r\n            total += nums[right];\r\n            while (nmap[nums[right]] > 1) {\r\n                nmap[nums[left]]--;\r\n                total -= nums[left++];\r\n            }\r\n            best = Math.max(best, total);\r\n        }\r\n        return best;\r\n    }\r\n}",
    "javascript": "var maximumUniqueSubarray = function(nums) {\r\n    let nmap = new Int8Array(10001), total = 0, best = 0\r\n    for (let left = 0, right = 0; right < nums.length; right++) {\r\n        nmap[nums[right]]++, total += nums[right]\r\n        while (nmap[nums[right]] > 1)\r\n            nmap[nums[left]]--, total -= nums[left++]\r\n        best = Math.max(best, total)\r\n    }\r\n    return best\r\n};"
  }
}
