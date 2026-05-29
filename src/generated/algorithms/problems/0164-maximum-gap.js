export default {
  "id": 164,
  "name": "Maximum Gap",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-gap",
  "relativeDir": "M/Maximum Gap",
  "slug": "0164-maximum-gap",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 25,
    "java": 13,
    "python": 37,
    "javascript": 71
  },
  "languages": {
    "cpp": "// Runtime: 1034 ms (Top 5.00%) | Memory: 142.3 MB (Top 5.23%)\r\n\r\nclass Solution {\r\npublic:\r\n    int maximumGap(vector<int>& nums) {\r\n        sort(nums.begin(),nums.end());\r\n        int res;\r\n        int maxx=INT_MIN;\r\n        map<int,int> m;\r\n        if(nums.size()==1)\r\n            return 0;\r\n        for(int i =0;i<nums.size()-1;i++)\r\n        {\r\n            m[i]=nums[i+1]-nums[i];\r\n        }\r\n        for(auto it: m)\r\n        {\r\n            if(it.second>maxx)\r\n            {\r\n                maxx=it.second;\r\n            }\r\n        }\r\n        return maxx;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def maximumGap(self, nums: List[int]) -> int:\r\n        if len(nums)<2: return 0\r\n        \r\n        #radix sort\r\n        #N = length of nums\r\n        #find number of digits in largest number - O(K) where K = length of largest number\r\n        longest = 0\r\n        for i in nums:\r\n            longest = max(longest,len(str(i)))\r\n            \r\n        #normalize so that all numbers have same number of digits by adding 0s at the start of shorter numbers - O(N*K)\r\n        for i in range(len(nums)):\r\n            if len(str(nums[i]))!=longest:\r\n                nums[i] = '0'*(longest-len(str(nums[i]))) + str(nums[i])\r\n            else:\r\n                nums[i] = str(nums[i])\r\n        \r\n        #apply counting sort starting with each digit from the end of the last digits - O(K*N)\r\n        for digit in range(longest-1,-1,-1):\r\n            vals = [[] for k in range(10)]\r\n            for num in nums:\r\n                vals[int(num[digit])] += [num]\r\n\t\t\t#join list sorted by that digit position together:\r\n            new = []\r\n            for i in vals:\r\n                new += i\r\n            nums = new.copy()\r\n        \r\n        #find the largest difference in the now sorted nums - O(N)\r\n        best_diff = 0\r\n        for i in range(1,len(nums)):\r\n            best_diff = max(best_diff,int(nums[i])-int(nums[i-1]))\r\n        return best_diff\r\n    \r\n#Overall complexity is O(N*K) but K is at most 10 so O(10*N) = O(N) so linear\r\n#Please correct me if I am wrong!",
    "java": "class Solution {\r\n    public int maximumGap(int[] nums) {\r\n        Arrays.sort(nums);\r\n        int res=0;\r\n        if(nums.length==0){\r\n            return 0;\r\n        }\r\n        for (int i =0;i<nums.length-1;i++){\r\n            res=Math.max(Math.abs(nums[i]-nums[i+1]),res);\r\n        }\r\n        return res;\r\n    }\r\n}",
    "javascript": "// Runtime: 232 ms (Top 93.36%) | Memory: 57.4 MB (Top 48.67%)\r\n/**\r\n * The buckets solution.\r\n *\r\n * Time Complexity: O(n)\r\n * Space Complexity: O(n)\r\n *\r\n * @param {number[]} nums\r\n * @return {number}\r\n */\r\nvar maximumGap = function(nums) {\r\n    const n = nums.length\r\n\r\n    if (n < 2) {\r\n        return 0\r\n    }\r\n\r\n    if (n < 3) {\r\n        return Math.abs(nums[0] - nums[1])\r\n    }\r\n\r\n    let maxNum = -Infinity\r\n    let minNum = +Infinity\r\n\r\n    for (let i = 0; i < n; i++) {\r\n        maxNum = Math.max(maxNum, nums[i])\r\n        minNum = Math.min(minNum, nums[i])\r\n    }\r\n\r\n    if (maxNum === minNum) {\r\n        return 0\r\n    }\r\n\r\n    const k = n - 1\r\n    const averageGap = (maxNum - minNum) / k\r\n\r\n    const minBuckets = new Array(k)\r\n    const maxBuckets = new Array(k)\r\n\r\n    minBuckets[0] = minNum\r\n    maxBuckets[0] = minNum\r\n\r\n    minBuckets[k - 1] = maxNum\r\n    maxBuckets[k - 1] = maxNum\r\n\r\n    for (let i = 0; i < n; i++) {\r\n        if (minNum === nums[i] || nums[i] === maxNum) {\r\n            continue\r\n        }\r\n\r\n        const j = Math.floor((nums[i] - minNum) / averageGap)\r\n\r\n        minBuckets[j] = minBuckets[j] ? Math.min(minBuckets[j], nums[i]) : nums[i]\r\n        maxBuckets[j] = maxBuckets[j] ? Math.max(maxBuckets[j], nums[i]) : nums[i]\r\n    }\r\n\r\n    let largestGap = 0\r\n    let prevMaxIndex = 0\r\n\r\n    for (let i = 1; i < n - 1; i++) {\r\n        if (minBuckets[i]) {\r\n            largestGap = Math.max(largestGap, minBuckets[i] - maxBuckets[prevMaxIndex])\r\n        }\r\n\r\n        if (maxBuckets[i]) {\r\n            prevMaxIndex = i\r\n        }\r\n    }\r\n\r\n    return largestGap\r\n}"
  }
}
