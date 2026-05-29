export default {
  "id": 992,
  "name": "Subarrays with K Different Integers",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/subarrays-with-k-different-integers",
  "relativeDir": "S/Subarrays with K Different Integers",
  "slug": "0992-subarrays-with-k-different-integers",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 45,
    "java": 28,
    "python": 24
  },
  "languages": {
    "cpp": "/*\r\n    https://leetcode.com/problems/subarrays-with-k-different-integers/submissions/\r\n    \r\n    We use a different problem to solve this. We find the number of substrings with atmost\r\n    K unique chars. \r\n    substrings with exactly k = atmost unique (K) - atmost unique (K-1)\r\n    This diff only leaves the substrings with exactly k unique chars\r\n*/\r\nclass Solution {\r\npublic:\r\n    // Finds the substring with atmost K unique chars\r\n    int atmostK(vector<int>& arr, int K) {\r\n        int i = 0, j = 0, substrings = 0;\r\n        unordered_map<int, int> freq;\r\n        const int N = arr.size();\r\n        \r\n        while(i < N) {\r\n            // Expand the window\r\n            if(K >= 0) {\r\n                ++freq[arr[i]];\r\n                if(freq[arr[i]] == 1)\r\n                    --K;\r\n                ++i;\r\n            }\r\n            // make the window valid\r\n            while(K < 0) {\r\n                --freq[arr[j]];\r\n                if(freq[arr[j]] == 0)\r\n                    ++K;\r\n                ++j;\r\n            }\r\n            // Each valid window adds the subarrays which satisfies the condition\r\n            // For : 1,2,1, k=2\r\n            // 1: [1] \r\n            // 2: [2], [1,2]\r\n            // 3: [1,2], [2,1], [1,2,1]\r\n            substrings += i - j + 1;\r\n        }\r\n        return substrings;\r\n    }\r\n    \r\n    int subarraysWithKDistinct(vector<int>& arr, int K) {\r\n        return atmostK(arr, K) - atmostK(arr, K-1);\r\n    }\r\n};",
    "python": "class Solution:\r\n    def subarraysWithKDistinct(self, nums: List[int], k: int) -> int:\r\n        return self.lengthOfLongestSubstringKDistinct(nums, k) - self.lengthOfLongestSubstringKDistinct(nums, k-1)\r\n    \r\n    def lengthOfLongestSubstringKDistinct(self, s, k):\r\n        n = len(s)\r\n        if n * k == 0:\r\n            return 0\r\n        left = 0\r\n\r\n        hashmap = collections.OrderedDict()\r\n\r\n        subarray = 0\r\n        for right in range(n):\r\n            if s[right] in hashmap:\r\n                del hashmap[s[right]]\r\n            hashmap[s[right]] = right\r\n\r\n            if len(hashmap) == k + 1:\r\n                _, del_idx = hashmap.popitem(last = False)\r\n                left = del_idx + 1\r\n            subarray += right - left + 1\r\n\r\n        return subarray",
    "java": "// Runtime: 139 ms (Top 8.32%) | Memory: 69.1 MB (Top 62.69%)\r\n\r\nclass Solution {\r\n    public int subarraysWithKDistinct(int[] nums, int k) {\r\n       return count(nums, k) - count(nums, k - 1);\r\n    }\r\n\r\n       public int count(int[] nums, int k){\r\n        HashMap<Integer, Integer> hm = new HashMap<>();\r\n\r\n        int left = 0, right = 0, ans = 0;\r\n\r\n        while(right < nums.length){\r\n            hm.put(nums[right] , hm.getOrDefault(nums[right], 0) + 1);\r\n\r\n            while(hm.size() == k + 1){\r\n                hm.put(nums[left], hm.get(nums[left]) - 1);\r\n                if(hm.get(nums[left]) == 0)\r\n                    hm.remove(nums[left]);\r\n                    left++;\r\n            }\r\n            ans += right - left + 1;\r\n            right++;\r\n        }\r\n        return ans;\r\n\r\n    }\r\n}"
  }
}
