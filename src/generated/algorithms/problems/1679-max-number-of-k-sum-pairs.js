export default {
  "id": 1679,
  "name": "Max Number of K-Sum Pairs",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/max-number-of-k-sum-pairs",
  "relativeDir": "M/Max Number of K-Sum Pairs",
  "slug": "1679-max-number-of-k-sum-pairs",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 21,
    "java": 18,
    "python": 18,
    "javascript": 11
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int maxOperations(vector<int>& nums, int k) {\r\n      unordered_map<int, int> Map;\r\n      for (auto &num: nums) Map[num]++;  // count freq of nums\r\n      int ans = 0;\r\n  \r\n      for(auto it=Map.begin(); it!=Map.end(); ++it){\r\n        int num = it->first, count = it->second;\r\n        if(k - num == num) ans += count/2;   // if num is half of k add half of it's count in ans\r\n        else if(Map.count(k - num)){   // find k-num in nums and add min freq of num or k-num to ans\r\n          int Min = min(count, Map[k-num]);\r\n          ans += Min;\r\n          Map[num] -= Min;\r\n          Map[k-num] -= Min;\r\n        }\r\n      }\r\n      \r\n      return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def maxOperations(self, nums: List[int], k: int) -> int:\r\n        nums.sort()\r\n        left = 0\r\n        right = len(nums) - 1\r\n        ans = 0\r\n        while left < right:\r\n            cur = nums[left] + nums[right]\r\n            if cur == k:\r\n                ans += 1\r\n                left += 1\r\n                right -= 1\r\n            elif cur < k:\r\n                left += 1\r\n            else:\r\n                right -= 1\r\n        \r\n        return ans",
    "java": "class Solution {\r\n    public int maxOperations(int[] nums, int k) {\r\n        HashMap<Integer,Integer>map=new HashMap<>();\r\n        int count=0;\r\n        for(int i=0;i<nums.length;i++){\r\n            //to check if that k-nums[i] present and had some value left or already paired\r\n            if(map.containsKey(k-nums[i])&&map.get(k-nums[i])>0){\r\n                count++;\r\n                map.put(k-nums[i],map.get(k-nums[i])-1);\r\n            }else{\r\n                //getOrDefault is easy way it directly checks if value is 0 returns 0 where I added 1\r\n                //and if some value is present then it return that value \"similar to map.get(i)\" and I added 1 on it \r\n                map.put(nums[i],map.getOrDefault(nums[i],0)+1);\r\n            }\r\n        }\r\n        return count;\r\n    }\r\n}",
    "javascript": "var maxOperations = function(nums, k) {\r\nlet freq = new Map(),count=0; \r\nfor (let i = 0; i < nums.length; i++) {\r\n    if (freq.get(k-nums[i])) {\r\n        if(freq.get(k-nums[i])==1) freq.delete(k-nums[i])\r\n        else freq.set(k-nums[i],freq.get(k-nums[i])-1)\r\n        count++;\r\n    }else freq.set(nums[i],freq.get(nums[i])+1||1)\r\n} \r\nreturn count;\r\n};"
  }
}
