export default {
  "id": 974,
  "name": "Subarray Sums Divisible by K",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/subarray-sums-divisible-by-k",
  "relativeDir": "S/Subarray Sums Divisible by K",
  "slug": "0974-subarray-sums-divisible-by-k",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 45,
    "java": 24,
    "python": 21,
    "javascript": 18
  },
  "languages": {
    "cpp": "// Runtime: 148 ms (Top 9.76%) | Memory: 31.7 MB (Top 49.45%)\r\nclass Solution {\r\npublic:\r\n    int subarraysDivByK(vector<int>& nums, int k) {\r\n        // take an ans variable\r\n        int ans = 0;\r\n        // initialize a map of int, int and insert {0,1} as 0 occurs first time for sum\r\n        unordered_map<int, int> mapp;\r\n        mapp.insert({0,1});\r\n        // initialize presum = 0 and remainder rem = 0 which will be used in further calculations\r\n        int presum = 0;\r\n\r\n        int rem = 0;\r\n\r\n        // Logic\r\n        /*\r\n            1. We will traverse the entire given array/vector.\r\n            2. While traversing we will add the element in our presum, i.e presum += nums[i] .\r\n            3. Now we will do the % of presum and k and store it in rem that we have created.\r\n            4. We need to take care of negative value of rem. If it is < 0, then we will add k to the remainder to make it positive.\r\n            5. Now we will check if rem already exist in the map. If it exist then we will add it's frequency to ans variable\r\n             and then increment rem's value in map, i.e. mapp[rem]++, else we will add it in the map.\r\n            6. At last we will return ans.\r\n        */\r\n\r\n        for(int i=0; i<nums.size(); i++)\r\n        {\r\n            presum += nums[i];\r\n            rem = presum % k;\r\n            if(rem < 0)\r\n                rem += k;\r\n\r\n            if(mapp.find(rem) != mapp.end())\r\n            {\r\n                ans += mapp[rem];\r\n                mapp[rem]++;\r\n            }\r\n            else\r\n            {\r\n                mapp.insert({rem,1});\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 209 ms (Top 98.8%) | Memory: 16.64 MB (Top 51.7%)\r\n\r\nclass Solution:\r\n    def subarraysDivByK(self, nums, k):\r\n        n = len(nums)\r\n        prefix_mod = 0\r\n        result = 0\r\n\r\n        # There are k mod groups 0...k-1.\r\n        mod_groups = [0] * k\r\n        mod_groups[0] = 1\r\n\r\n        for num in nums:\r\n            # Take modulo twice to avoid negative remainders.\r\n            prefix_mod = (prefix_mod + num % k + k) % k\r\n            # Add the count of subarrays that have the same remainder as the current\r\n            # one to cancel out the remainders.\r\n            result += mod_groups[prefix_mod]\r\n            mod_groups[prefix_mod] += 1\r\n\r\n        return result",
    "java": "class Solution {\r\n    public int subarraysDivByK(int[] nums, int k) {\r\n        HashMap<Integer,Integer> map = new HashMap<>();\r\n        int count = 0;\r\n        int sum = 0;\r\n        for(int i=0;i<nums.length;i++){\r\n            sum +=nums[i];\r\n            int rem =sum%k;\r\n            if(rem <0){\r\n                rem = rem+k; // -4%3 == -1 and 2 both bec -4 = 3(-1) +(-1) = 3(-2) + 2\r\n            }\r\n            \r\n            if(rem==0){\r\n                count++;\r\n            }\r\n            if(map.containsKey(rem)){\r\n                count+=map.get(rem);\r\n            }\r\n            \r\n            map.put(rem,map.getOrDefault(rem,0)+1);\r\n        }\r\n        return count;\r\n    }\r\n}",
    "javascript": "var subarraysDivByK = function(nums, k) {\r\n    let count = 0;\r\n    let map = new Map();\r\n    map.set(0, 1)\r\n    let sum = 0;\r\n    for(let i=0; i<nums.length; i++){\r\n        sum += nums[i];\r\n        let rem = sum%k;\r\n        if(rem<0) rem += k;\r\n        if(map.has(rem)){\r\n            count += map.get(rem)\r\n            map.set(rem, map.get(rem)+1)\r\n        }else{\r\n            map.set(rem, 1)\r\n        }\r\n    }\r\n    return count\r\n};"
  }
}
