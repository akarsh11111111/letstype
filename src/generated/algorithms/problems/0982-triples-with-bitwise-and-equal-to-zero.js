export default {
  "id": 982,
  "name": "Triples with Bitwise AND Equal To Zero",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/triples-with-bitwise-and-equal-to-zero",
  "relativeDir": "T/Triples with Bitwise AND Equal To Zero",
  "slug": "0982-triples-with-bitwise-and-equal-to-zero",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 28,
    "java": 21,
    "python": 17
  },
  "languages": {
    "cpp": "// Runtime: 267 ms (Top 65.96%) | Memory: 13.40 MB (Top 32.62%)\r\n\r\nclass Solution {\r\npublic:\r\n    int countTriplets(vector<int>& a) {\r\n        int  n = a.size();\r\n        unordered_map<int,int> mp;\r\n        for(int  i= 0;i<n;i++)\r\n        {\r\n            for(int  j= 0;j<n;j++)\r\n            {\r\n               mp[(a[i] & a[j])]++;\r\n            }\r\n        }\r\n        int ans  = 0;\r\n        for(auto &op : mp)\r\n        {\r\n            for(int  i = 0;i<n;i++)\r\n            {\r\n                if(op.first & a[i])\r\n                {}\r\n                else\r\n                {ans+=op.second;}\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 549 ms (Top 98.6%) | Memory: 23.43 MB (Top 9.7%)\r\n\r\nclass Solution:\r\n    def countTriplets(self, nums: List[int]) -> int:\r\n        freq = defaultdict(int)\r\n        for x in nums: \r\n            for y in nums: \r\n                freq[x&y] += 1\r\n        \r\n        ans = 0\r\n        for x in nums: \r\n            mask = x = x ^ 0xffff\r\n            while x: \r\n                ans += freq[x]\r\n                x = mask & (x-1)\r\n            ans += freq[0]\r\n        return ans",
    "java": "// Runtime: 113 ms (Top 49.3%) | Memory: 43.66 MB (Top 52.1%)\r\n\r\nclass Solution {\r\n    public int countTriplets(int[] nums) {\r\n        int[] count = new int[1 << 16];\r\n        for (int i = 0; i < nums.length; i++) {\r\n            for (int j = 0; j < nums.length; j++) {\r\n                count[nums[i] & nums[j]]++;\r\n            }\r\n        }\r\n        int ans = 0;\r\n        for (int i = 0; i < nums.length; i++) {\r\n            for (int j = 0; j < 1 << 16; j++) {\r\n                if ((nums[i] & j) == 0) {\r\n                    ans += count[j];\r\n                }\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n}"
  }
}
