export default {
  "id": 1726,
  "name": "Tuple with Same Product",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/tuple-with-same-product",
  "relativeDir": "T/Tuple with Same Product",
  "slug": "1726-tuple-with-same-product",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 20,
    "java": 32,
    "python": 16,
    "javascript": 17
  },
  "languages": {
    "cpp": "// Runtime: 887 ms (Top 51.24%) | Memory: 81.6 MB (Top 89.34%)\r\nclass Solution {\r\npublic:\r\n    int tupleSameProduct(vector<int>& nums) {\r\n        int n = nums.size();\r\n        unordered_map<int,int> map;\r\n        int res = 0;\r\n        for(int i = 0 ; i < n ; i++){\r\n            for(int j = i+1 ; j < n ; j++){\r\n                int prod = nums[i] * nums[j];\r\n                map[prod]++;//store product of each possible pair\r\n            }\r\n        }\r\n        for(pair<int,int> m:map){\r\n            int n=m.second;\r\n            res += (n*(n-1))/2; //no. of tuple\r\n        }\r\n        return res*8; //Every tuple has 8 permutations\r\n    }\r\n};",
    "python": "# Runtime: 1072 ms (Top 44.44%) | Memory: 42.9 MB (Top 86.75%)\r\nclass Solution:\r\n    def tupleSameProduct(self, nums: List[int]) -> int:\r\n\r\n        from itertools import combinations\r\n        mydict=defaultdict(int)\r\n        ans=0\r\n\r\n        for a,b in combinations(nums,2):\r\n            mydict[a*b]+=1\r\n\r\n        for i,j in mydict.items():\r\n            if j>1:\r\n                ans+=(j*(j-1)//2)*8\r\n\r\n        return ans",
    "java": "class Solution {\r\n    public int tupleSameProduct(int[] nums) {\r\n        \r\n        if(nums.length < 4){\r\n            return 0;\r\n        }\r\n        \r\n        int res = 0;\r\n        \r\n        HashMap<Integer, Integer> map = new HashMap<>();\r\n        \r\n        for(int i = 0; i < nums.length - 1; i++){\r\n            \r\n            for(int j = i + 1; j < nums.length; j++){\r\n                \r\n                int val = nums[i] * nums[j];\r\n                map.put(val, map.getOrDefault(val, 0) + 1);\r\n            }\r\n        }\r\n        \r\n        for(int key : map.keySet()){\r\n            \r\n            int val = map.get(key);\r\n            \r\n            if(val > 1){\r\n                res += val * (val - 1) * 4;    // (val * (val - 1) / 2) * 8\r\n            }\r\n        }\r\n        \r\n        return res;\r\n    }\r\n}",
    "javascript": "// Runtime: 713 ms (Top 56.41%) | Memory: 88 MB (Top 92.31%)\r\nvar tupleSameProduct = function(nums) {\r\n    let tupleCount = 0;\r\n    let products = {}; // we'll keep track of how many times we've seen a given product before\r\n    for (let a = 0; a < nums.length; a++) {\r\n        for (let b = a + 1; b < nums.length; b++) {\r\n            let product = nums[a] * nums[b];\r\n            if (products[product]) { // we've seen at least one other pair of numbers with the same product already\r\n                tupleCount += 8 * products[product]; // multiply by 8 because for any 4 numbers there are 8 permutations\r\n                products[product] += 1; // increment the count, if we see this product again there are even more possible tuple combinations\r\n            } else {\r\n                products[product] = 1; // mark as seen once\r\n            }\r\n        }\r\n    }\r\n    return tupleCount;\r\n};"
  }
}
