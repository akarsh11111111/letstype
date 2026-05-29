export default {
  "id": 220,
  "name": "Contains Duplicate III",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/contains-duplicate-iii",
  "relativeDir": "C/Contains Duplicate III",
  "slug": "0220-contains-duplicate-iii",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 29,
    "java": 51,
    "python": 12,
    "javascript": 18
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool containsNearbyAlmostDuplicate(vector<int>& nums, int indexDiff, int valueDiff) {\r\n        int i=0;\r\n        map<int,int> mp;\r\n        int n=nums.size();\r\n        for(int j=0;j<n;j++){\r\n            auto val=mp.lower_bound(nums[j]);\r\n            if(val!=mp.end() and (val->first-nums[j])<=valueDiff){\r\n                return true;\r\n            }\r\n            if(val!=mp.begin()){\r\n                val--;\r\n                if(abs(val->first-nums[j])<=valueDiff){\r\n                    return true;\r\n                }\r\n            }\r\n            mp[nums[j]]++;\r\n            if((j-i)==indexDiff){\r\n                mp[nums[i]]--;\r\n                if(mp[nums[i]]==0){\r\n                    mp.erase(nums[i]);\r\n                }\r\n                i++;\r\n            }\r\n        }\r\n        return false;\r\n    }\r\n};",
    "python": "# Runtime: 779 ms (Top 16.27%) | Memory: 17.7 MB (Top 35.86%)\r\nfrom sortedcontainers import SortedList\r\nclass Solution:\r\n    def containsNearbyAlmostDuplicate(self, nums, k, t):\r\n        sl = SortedList()\r\n        for i in range(len(nums)):\r\n            if i > k: sl.remove(nums[i-k-1])\r\n            idxl = sl.bisect_left(nums[i]-t)\r\n            idxr = sl.bisect_right(nums[i]+t)\r\n            if idxl != idxr: return True\r\n            sl.add(nums[i])\r\n        return False",
    "java": "// Runtime: 52 ms (Top 75.62%) | Memory: 55.00 MB (Top 92.14%)\r\n\r\n/**\r\n * Sliding Window solution using Buckets\r\n *\r\n * Time Complexity: O(N)\r\n *\r\n * Space Complexity: O(min(N, K+1))\r\n *\r\n * N = Length of input array. K = Input difference between indexes.\r\n */\r\nclass Solution {\r\n    public boolean containsNearbyAlmostDuplicate(int[] nums, int k, int t) {\r\n        if (nums == null || nums.length < 2 || k < 1 || t < 0) {\r\n            return false;\r\n        }\r\n\r\n        HashMap<Long, Long> buckets = new HashMap<>();\r\n        // The bucket size is t+1 as the ranges are from 0..t, t+1..2t+1, ..\r\n        long bucketSize = (long) t + 1;\r\n\r\n        for (int i = 0; i < nums.length; i++) {\r\n            // Making sure only K buckets exists in map.\r\n            if (i > k) {\r\n                long lastBucket = ((long) nums[i - k - 1] - Integer.MIN_VALUE) / bucketSize;\r\n                buckets.remove(lastBucket);\r\n            }\r\n\r\n            long remappedNum = (long) nums[i] - Integer.MIN_VALUE;\r\n            long bucket = remappedNum / bucketSize;\r\n\r\n            // If 2 numbers belong to same bucket\r\n            if (buckets.containsKey(bucket)) {\r\n                return true;\r\n            }\r\n\r\n            // If numbers are in adjacent buckets and the difference between them is at most\r\n            // t.\r\n            if (buckets.containsKey(bucket - 1) && remappedNum - buckets.get(bucket - 1) <= t) {\r\n                return true;\r\n            }\r\n            if (buckets.containsKey(bucket + 1) && buckets.get(bucket + 1) - remappedNum <= t) {\r\n                return true;\r\n            }\r\n\r\n            buckets.put(bucket, remappedNum);\r\n        }\r\n\r\n        return false;\r\n    }\r\n}",
    "javascript": "// Runtime: 4931 ms (Top 33.3%) | Memory: 51.20 MB (Top 40.3%)\r\n\r\n/**\r\n * @param {number[]} nums\r\n * @param {number} k\r\n * @param {number} t\r\n * @return {boolean}\r\n */\r\nvar containsNearbyAlmostDuplicate = function(nums, k, t) {\r\n   for(let i=0;i<nums.length;i++){\r\n        for(let j=i+1;j<nums.length;j++){\r\n            if(Math.abs(nums[i]-nums[j])<=t && (Math.abs(i-j)<=k)){\r\n                return true;\r\n            }\r\n        }\r\n   }\r\n    return false;\r\n};"
  }
}
