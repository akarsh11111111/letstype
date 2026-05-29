export default {
  "id": 454,
  "name": "4Sum II",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/4sum-ii",
  "relativeDir": "0-9/4Sum II",
  "slug": "0454-4sum-ii",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 37,
    "java": 15,
    "python": 15,
    "javascript": 28
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    \r\n    int fourSumCount(vector<int>& nums1, vector<int>& nums2, vector<int>& nums3, vector<int>& nums4) {\r\n        \r\n        int count=0;\r\n        unordered_map<int,int> mp;\r\n        \r\n        /* Philosophy\r\n        \r\n        1. I know that Addtion have two parts in it  EG (a +b , Part 1 - a, Part 2- b.\r\n        2.So, Lets make and find this dependency factors. How can I do it?\r\n        \r\n        3. If there are 4 Sum. it means 2 sums is going to Part 1 and another 2 gonna be Part 2 which are dependent on Part 1 for 0 resultant.\r\n        \r\n        4. I gonna store summation 2 nums1 in a FREQUENCY Hashmap.\r\n        \r\n        5. Then I traverse 2nd part of the summation (rest to nums) and keep checking that do (0-it1-it2) is exist in map . \r\n       \r\n        6. If yes, the add the frequency of Part1 int COUNT var.\r\n        \r\n        7. return count;\r\n        */\r\n        \r\n        //Traversing Part 1\r\n        for (auto &it1: nums1)\r\n            for (auto &it2:nums2)\r\n                mp[it1+it2]++; \r\n        \r\n        // Traversing Part 2\r\n        for(auto &it3: nums3)\r\n            for(auto &it4:nums4)\r\n               if(mp.count(0-it3-it4)) count+=mp[0-it3-it4];\r\n        \r\n        return count;\r\n    }\r\n};",
    "python": "# Runtime: 1360 ms (Top 29.95%) | Memory: 14.2 MB (Top 70.39%)\r\nclass Solution:\r\n    def fourSumCount(self, nums1: List[int], nums2: List[int], nums3: List[int], nums4: List[int]) -> int:\r\n        n1n2 = defaultdict(int)\r\n        for n1 in nums1:\r\n            for n2 in nums2:\r\n                n1n2[n1+n2] += 1\r\n        n3n4 = defaultdict(int)\r\n        for n3 in nums3:\r\n            for n4 in nums4:\r\n                n3n4[n3+n4] += 1\r\n        ans = 0\r\n        for s in n1n2:\r\n            ans += n1n2[s] * n3n4[-s]\r\n        return ans",
    "java": "// Runtime: 107 ms (Top 81.61%) | Memory: 44.50 MB (Top 61.42%)\r\n\r\nclass Solution {\r\n    public int fourSumCount(int[] nums1, int[] nums2, int[] nums3, int[] nums4) {\r\n        Map<Integer, Integer> map = new HashMap<>();\r\n        for(int k : nums3)\r\n            for(int l : nums4)\r\n                map.put(k + l, map.getOrDefault(k + l, 0) + 1);\r\n        int count = 0;\r\n        for(int i : nums1)\r\n            for(int j : nums2)\r\n                        count += map.getOrDefault(-(i + j), 0);\r\n        return count;\r\n    }\r\n}",
    "javascript": "\r\nvar fourSumCount = function(nums1, nums2, nums3, nums4) {\r\n    let result = 0;\r\n    \r\n    let sumMap = {}; \r\n    \r\n    for(let i=0; i < nums1.length; i++){\r\n       for(let j=0; j < nums2.length; j++){\r\n           let sum = nums1[i] + nums2[j];\r\n              if(!sumMap[sum]){\r\n                sumMap[sum] = 0;\r\n              }\r\n           \r\n           sumMap[sum]+=1;\r\n       } \r\n    }\r\n    \r\n    for(let k=0; k < nums3.length; k++){\r\n         for(let l=0; l < nums4.length; l++){\r\n            let sum = nums3[k] + nums4[l];\r\n            if(sumMap[-sum]){\r\n                result+=sumMap[-sum];    \r\n            }\r\n         }  \r\n    } \r\n    \r\n    return result;\r\n};"
  }
}
