export default {
  "id": 532,
  "name": "K-diff Pairs in an Array",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/k-diff-pairs-in-an-array",
  "relativeDir": "K/K-diff Pairs in an Array",
  "slug": "0532-k-diff-pairs-in-an-array",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 21,
    "java": 15,
    "python": 12,
    "javascript": 21
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int findPairs(vector<int>& nums, int k) {\r\n        unordered_map<int,int> a;\r\n        for(int i:nums)\r\n            a[i]++;\r\n        int ans=0;\r\n        for(auto x:a)\r\n        {\r\n            if(k==0)\r\n            {    \r\n                if(x.second>1)\r\n                ans++;\r\n            }\r\n             else if(a.find(x.first+k)!=a.end())\r\n                ans++;\r\n        }\r\n        \r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def findPairs(self, nums: List[int], k: int) -> int:\r\n        nums.sort()\r\n        dict1={}\r\n        s=0\r\n        res=[]\r\n        for n in nums:\r\n            if dict1.get(n,None) is not None:\r\n                res.append(n)\r\n            dict1[n+k]=n\r\n        res=list(set(res))\r\n        return len(res)",
    "java": " // O(n) Time Solution\r\n\r\n class Solution {\r\n \t\tpublic int findPairs(int[] nums, int k) {\r\n \t\t\tMap<Integer, Integer> map = new HashMap();\r\n \t\t\tfor (int num : nums)\r\n \t\t\t\tmap.put(num, map.getOrDefault(num, 0) + 1);\r\n\r\n \t\t\tint result = 0;\r\n \t\t\tfor (int i : map.keySet())\r\n \t\t\t\tif (k > 0 && map.containsKey(i + k) || k == 0 && map.get(i) > 1)\r\n \t\t\t\t\tresult++;\r\n \t\t\treturn result;\r\n \t\t}\r\n \t}",
    "javascript": "var findPairs = function(nums, k) {\r\n\tnums.sort((a, b) => b - a);\r\n\tconst { length } = nums;\r\n\tconst hash = new Set();\r\n\tlet left = 0;\r\n\tlet right = 1;\r\n\r\n\twhile (left < length - 1) {\r\n\t\twhile (right < length) {\r\n\t\t\tconst diff = nums[left] - nums[right];\r\n\r\n\t\t\tdiff === k && hash.add(`${nums[left]},${nums[right]}`);\r\n\t\t\tdiff > k\r\n\t\t\t\t? right = length\r\n\t\t\t\t: right += 1;\r\n\t\t}\r\n\t\tleft += 1;\r\n\t\tright = left + 1;\r\n\t}\r\n\treturn hash.size;\r\n};"
  }
}
