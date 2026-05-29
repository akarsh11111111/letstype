export default {
  "id": 2176,
  "name": "Count Equal and Divisible Pairs in an Array",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array",
  "relativeDir": "C/Count Equal and Divisible Pairs in an Array",
  "slug": "2176-count-equal-and-divisible-pairs-in-an-array",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 17,
    "java": 22,
    "python": 9,
    "javascript": 16
  },
  "languages": {
    "cpp": "// Runtime: 7 ms (Top 71.04%) | Memory: 12.30 MB (Top 39.13%)\r\n\r\nclass Solution {\r\npublic:\r\n    int countPairs(vector<int>& nums, int k) {\r\n        int count=0;\r\n        for(int i=0;i<nums.size()-1;i++)\r\n        {\r\n            for(int j=i+1;j<nums.size();j++)\r\n                if(nums[i]==nums[j] && i*j%k==0)\r\n                {\r\n                    count++;\r\n                }\r\n        }\r\n        return count;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def countPairs(self, nums: List[int], k: int) -> int:\r\n        n=len(nums)\r\n        c=0\r\n        for i in range(0,n):\r\n            for j in range(i+1,n):\r\n                if nums[i]==nums[j] and ((i*j)%k==0):\r\n                    c+=1\r\n        return c",
    "java": "// Runtime: 15 ms (Top 5.12%) | Memory: 43.6 MB (Top 19.49%)\r\nclass Solution {\r\n    public int countPairs(int[] nums, int k) {\r\n      HashMap<Integer,List<Integer>> hMap = new HashMap<>();\r\n        int count = 0;\r\n        for(int i = 0 ; i < nums.length ; i++){\r\n            if(!hMap.containsKey(nums[i])){\r\n                List<Integer> l = new ArrayList<>();\r\n                l.add(i);\r\n                hMap.put(nums[i],l);\r\n            }else{\r\n                List<Integer> v = hMap.get(nums[i]);\r\n                for(Integer j : v){\r\n                    if((i*j)%k == 0) count++;\r\n                }\r\n                v.add(i);\r\n                hMap.put(nums[i],v);\r\n            }\r\n        }\r\n        return count;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number[]} nums\r\n * @param {number} k\r\n * @return {number}\r\n */\r\nvar countPairs = function(nums, k) {\r\n    var count = 0;\r\n    for(let i=0; i<nums.length; i++){\r\n        for(let j=i+1; j<nums.length; j++){\r\n            if(nums[i] == nums[j] && (i * j) % k == 0){\r\n                count++;\r\n            }\r\n        }\r\n    }\r\n    return count;\r\n};"
  }
}
