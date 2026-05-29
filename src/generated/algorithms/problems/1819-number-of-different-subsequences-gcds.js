export default {
  "id": 1819,
  "name": "Number of Different Subsequences GCDs",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/number-of-different-subsequences-gcds",
  "relativeDir": "N/Number of Different Subsequences GCDs",
  "slug": "1819-number-of-different-subsequences-gcds",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 27,
    "java": 25,
    "python": 17
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int countDifferentSubsequenceGCDs(vector<int>& nums) {\r\n        int curr_max = INT_MIN, ret = 0, n = nums.size();\r\n        int present[200001] = {0};\r\n        for(int i=0; i<n; i++)\r\n        {\r\n            curr_max = max(curr_max, nums[i]);\r\n            present[nums[i]]=1;\r\n        }\r\n        for(int i=1; i<=curr_max; i++)\r\n        {\r\n            int curr_gcd = 0;\r\n            for(int j=i; j<=curr_max; j+=i)\r\n            {\r\n                if(present[j]==1)\r\n                    curr_gcd = gcd(curr_gcd, j);\r\n                if(curr_gcd==i)\r\n                {\r\n                    ret++;\r\n                    break;\r\n                }\r\n            }\r\n        }\r\n        return ret;\r\n    }\r\n};",
    "python": "// Runtime: 5748 ms (Top 75.00%) | Memory: 34.4 MB (Top 21.43%)\r\nimport math\r\n\r\nclass Solution:\r\n    def countDifferentSubsequenceGCDs(self, nums: List[int]) -> int:\r\n        max_n = max(nums) + 1\r\n        seen = set(nums)\r\n\r\n        ans = 0\r\n        for k in range(1, max_n): # iterate candidate k\r\n            gcd = 0\r\n            for multiple in range(k, max_n, k): # compute gcd of all array multiples of k\r\n                if multiple in seen:\r\n                    gcd = math.gcd(gcd, multiple)\r\n            if gcd == k: # check the candidate\r\n                ans += 1\r\n        return ans",
    "java": "// Runtime: 1084 ms (Top 15.1%) | Memory: 56.26 MB (Top 90.9%)\r\n\r\nclass Solution {\r\n    int max = 0;\r\n    Set<Integer> exist = new HashSet();\r\n    public int countDifferentSubsequenceGCDs(int[] nums) {\r\n        getMax(nums);\r\n        for(int num : nums) exist.add(num);\r\n        int count = 0;\r\n        for (int i=1;i<=max;i++) if(findGCD(i)) count++;      //  <---- findGCD\r\n        return count;\r\n    }\r\n    public void getMax(int[] nums){\r\n        for(int i : nums) max = Math.max(max, i);\r\n    }\r\n    public int gcd(int a, int b){\r\n        return (a == 0) ? b : gcd(b % a, a);\r\n    }\r\n\tpublic boolean findGCD(int num){\r\n        int val = 0;\r\n        for(int i = num; i <= max; i+= num)\r\n            if(exist.contains(i)) val = gcd(i, val);          //  <---- gcd between two number\r\n        return (val == num);\r\n    }\r\n}"
  }
}
