export default {
  "id": 560,
  "name": "Subarray Sum Equals K",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/subarray-sum-equals-k",
  "relativeDir": "S/Subarray Sum Equals K",
  "slug": "0560-subarray-sum-equals-k",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 38,
    "java": 23,
    "python": 19,
    "javascript": 17
  },
  "languages": {
    "cpp": "// Runtime: 107 ms (Top 16.47%) | Memory: 41.90 MB (Top 63.1%)\r\n\r\nclass Solution {\r\npublic:\r\n    int subarraySum(vector<int>& arr, int k) {\r\n        int n = arr.size(); // take the size of the array\r\n        \r\n        int prefix[n]; // make a prefix array to store prefix sum\r\n        \r\n        prefix[0] = arr[0]; // for element at index at zero, it is same\r\n        \r\n        // making our prefix array\r\n        for(int i = 1; i < n; i++)\r\n        {\r\n            prefix[i] = arr[i] + prefix[i - 1];\r\n        }\r\n        \r\n        unordered_map<int,int> mp; // declare an unordered map\r\n        \r\n        int ans = 0; // to store the number of our subarrays having sum as 'k'\r\n        \r\n        for(int i = 0; i < n; i++) // traverse from the prefix array\r\n        {\r\n            if(prefix[i] == k) // if it already becomes equal to k, then increment ans\r\n                ans++;\r\n            \r\n            // now, as we discussed find whether (prefix[i] - k) present in map or not\r\n            if(mp.find(prefix[i] - k) != mp.end())\r\n            {\r\n                ans += mp[prefix[i] - k]; // if yes, then add it our answer\r\n            }\r\n            \r\n            mp[prefix[i]]++; // put prefix sum into our map\r\n        }\r\n        \r\n        return ans; // and at last, return our answer\r\n    }\r\n};",
    "python": "class Solution:\r\n\tdef subarraySum(self, nums: List[int], k: int) -> int:\r\n\r\n\t\tans=0\r\n\t\tprefsum=0\r\n\t\td={0:1}\r\n\r\n\t\tfor num in nums:\r\n\t\t\tprefsum = prefsum + num\r\n\r\n\t\t\tif prefsum-k in d:\r\n\t\t\t\tans = ans + d[prefsum-k]\r\n\r\n\t\t\tif prefsum not in d:\r\n\t\t\t\td[prefsum] = 1\r\n\t\t\telse:\r\n\t\t\t\td[prefsum] = d[prefsum]+1\r\n\r\n\t\treturn ans",
    "java": "// Runtime: 80 ms (Top 15.87%) | Memory: 68.2 MB (Top 25.50%)\r\n/*\r\nRuntime: 21 ms, faster than 98.97% of Java online submissions for Subarray Sum Equals K.\r\nMemory Usage: 47.1 MB, less than 85.93% of Java online submissions for Subarray Sum Equals K.\r\n*/\r\nclass Solution {\r\n    public int subarraySum(int[] nums, int k) {\r\n\r\n        HashMap<Integer, Integer> map = new HashMap<>();\r\n        map.put(0,1);\r\n        int count = 0;\r\n        int sum = 0;\r\n\r\n        for(int i=0; i<nums.length; i++){\r\n            sum += nums[i];\r\n            if(map.containsKey(sum - k)){\r\n                count += map.get(sum-k);\r\n            }\r\n            map.put(sum, map.getOrDefault(sum,0)+1);\r\n        }\r\n        return count;\r\n    }\r\n}",
    "javascript": "// Runtime: 203 ms (Top 18.14%) | Memory: 53.8 MB (Top 33.52%)\r\n    var subarraySum = function(nums, k) {\r\n        const obj = {};\r\n        let res = 0;\r\n        let sum = 0;\r\n\r\n        for (let i = 0; i < nums.length; i++) {\r\n\r\n            sum += nums[i];\r\n            if (sum == k) res++;\r\n\r\n            if (obj[sum - k]) res += obj[sum - k];\r\n\r\n            obj[sum] ? obj[sum] += 1 : obj[sum] = 1;\r\n        }\r\n        return res;\r\n    };"
  }
}
