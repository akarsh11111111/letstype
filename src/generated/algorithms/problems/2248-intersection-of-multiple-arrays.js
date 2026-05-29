export default {
  "id": 2248,
  "name": "Intersection of Multiple Arrays",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/intersection-of-multiple-arrays",
  "relativeDir": "I/Intersection of Multiple Arrays",
  "slug": "2248-intersection-of-multiple-arrays",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 26,
    "java": 24,
    "python": 5,
    "javascript": 17
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<int> intersection(vector<vector<int>>& nums) {\r\n        int n = nums.size(); // gives the no. of rows\r\n        map<int,int> mp; // we don't need unordered_map because we need the elements to be in sorted format.\r\n        vector<int> vec;\r\n        \r\n        // traverse through the 2D array and store the frequency of each element\r\n        for(int row=0;row<n;row++)\r\n        {\r\n            for(int col=0;col<nums[row].size();col++)\r\n            {\r\n                mp[nums[row][col]]++;\r\n            }\r\n        }\r\n        \r\n        // In the 2D array, intersection occurs when the elements are present in every row.\r\n        // So the frequency of the element should match with the no. or rows in the 2D array.\r\n        for(auto element : mp)\r\n            if(element.second == n)\r\n                vec.push_back(element.first);\r\n        \r\n        // return the intersecting elements\r\n        return vec;\r\n    }\r\n};",
    "python": "// Runtime: 55 ms (Top 98.76%) | Memory: 17.70 MB (Top 35.84%)\r\n\r\nclass Solution:\r\n    def intersection(self, A: List[List[int]]) -> List[int]:\r\n        return sorted([k for k,v in Counter([x for l in A for x in l]).items() if v==len(A)])",
    "java": "// Runtime: 3 ms (Top 94.41%) | Memory: 46.4 MB (Top 56.41%)\r\n\r\nclass Solution {\r\n    public List<Integer> intersection(int[][] nums) {\r\n\r\n        List<Integer> ans = new ArrayList<>();\r\n\r\n        int[] count = new int[1001];\r\n\r\n        for(int[] arr : nums){\r\n            for(int i : arr){\r\n                count[i]++;\r\n            }\r\n        }\r\n\r\n       for(int i=0;i<count.length;i++){\r\n           if(count[i]==nums.length){\r\n               ans.add(i);\r\n           }\r\n       }\r\n\r\n        return ans;\r\n    }\r\n}",
    "javascript": "// Runtime: 111 ms (Top 46.85%) | Memory: 44.4 MB (Top 73.58%)\r\nvar intersection = function(nums) {\r\n    let set = addToSet(nums[0]);\r\n    for(let i=1; i<nums.length; i++) {\r\n        let tempSet = addToSet(nums[i]);\r\n        for(let key of set) {\r\n            if( !tempSet.has(key) )\r\n                set.delete(key);\r\n        }\r\n    }\r\n    return [...set].sort( (a,b) => a-b );\r\n};\r\n\r\nfunction addToSet(arr) {\r\n    let set = new Set(arr);\r\n    return set;\r\n}"
  }
}
