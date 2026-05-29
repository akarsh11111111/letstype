export default {
  "id": 2342,
  "name": "Max Sum of a Pair With Equal Sum of Digits",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/max-sum-of-a-pair-with-equal-sum-of-digits",
  "relativeDir": "M/Max Sum of a Pair With Equal Sum of Digits",
  "slug": "2342-max-sum-of-a-pair-with-equal-sum-of-digits",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 17,
    "java": 30,
    "python": 31,
    "javascript": 17
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int maximumSum(vector<int>& nums) {\r\n        int ans=-1, sz=nums.size();\r\n        unordered_map<int,int>mp;\r\n        for(auto & i:nums){\r\n            string s=to_string(i);\r\n            int sum=0;\r\n            for(auto & ch:s)\r\n                sum+=(ch-'0');\r\n            if(mp.count(sum))\r\n                ans=max(ans,i+mp[sum]);\r\n            mp[sum]=max(i,mp[sum]);\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:     # The plan here is to:\r\n                    # \r\n                    #   • sort the elements of nums into a dict of maxheaps,\r\n                    #     according to sum-of-digits.\r\n                    #\r\n                    #   • For each key, determine whether there are at least two \r\n                    #     elements in that key's values, and if so, compute the\r\n                    #     product of the greatest two elements.\r\n                    #\r\n                    #   • return the the greatest such product as the answer.\r\n\r\n                    # For example:\r\n\t\t\t\t\t\r\n                    #     nums = [6,15,13,12,24,21] –> {3:[12,21], 4:[13], 6:[6,15,24]}\r\n\t\t\t\t\t\r\n                    #     Only two keys qualify, 3 and 6, for which the greatest two elements\r\n                    #     are 12,21 and 15,24, respectively. 12+21 = 33 and 15+24 = 39,\r\n                    #     so the answer is 39.\r\n\r\n    def maximumSum(self, nums: List[int]) -> int:\r\n        d, mx = defaultdict(list), -1\r\n        digits = lambda x: sum(map(int, list(str(x))))      # <-- sum-of-digits function\r\n       \r\n        for n in nums:                                      # <-- construct max-heaps\r\n            heappush(d[digits(n)],-n)                       #     (note \"-n\") \r\n\r\n        for i in d:                                         # <-- pop the two greatest values off\r\n            if len(d[i]) > 1:                               #     each maxheap (when possible) and\r\n                mx= max(mx, -heappop(d[i])-heappop(d[i]))   #     compare with current max value.\r\n                                                           \r\n        return mx",
    "java": "// Runtime: 125 ms (Top 33.41%) | Memory: 82.2 MB (Top 27.68%)\r\nclass Solution {\r\n    public int maximumSum(int[] nums) {\r\n        HashMap<Integer, Integer> map = new HashMap<>();\r\n        int result = -1;\r\n\r\n        for (int item : nums) {\r\n            int key = getNumberTotal(item);\r\n\r\n            if (!map.containsKey(key))\r\n                map.put(key, item);\r\n            else {\r\n                result = Math.max(result, map.get(key) + item);\r\n                map.put(key, Math.max(map.get(key), item));\r\n            }\r\n        }\r\n\r\n        return result;\r\n    }\r\n\r\n    int getNumberTotal(int num) {\r\n        int result = 0;\r\n        while (num > 0) {\r\n            result += num % 10;\r\n            num /= 10;\r\n        }\r\n\r\n        return result;\r\n    }\r\n}",
    "javascript": "// Runtime: 694 ms (Top 19.67%) | Memory: 88 MB (Top 12.50%)\r\nvar maximumSum = function(nums) {\r\n    let sums = nums.map(x => x.toString().split('').map(Number).reduce((a,b)=> a+b,0));\r\n    let max = -1;\r\n    let map =sums.reduce((a,b,c) => {\r\n        a[b] ??= [];\r\n        a[b].push(nums[c])\r\n        return a;\r\n    },{});\r\n    Object.values(map).forEach(x => {\r\n        if(x.length > 1){\r\n            let temp = x.sort((a,b) => b-a);\r\n            max = Math.max(max, temp[0]+temp[1]);\r\n        }\r\n    })\r\n    return max;\r\n};"
  }
}
