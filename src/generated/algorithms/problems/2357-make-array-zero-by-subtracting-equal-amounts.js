export default {
  "id": 2357,
  "name": "Make Array Zero by Subtracting Equal Amounts",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts",
  "relativeDir": "M/Make Array Zero by Subtracting Equal Amounts",
  "slug": "2357-make-array-zero-by-subtracting-equal-amounts",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 27,
    "java": 21,
    "python": 3,
    "javascript": 5
  },
  "languages": {
    "cpp": "// Runtime: 4 ms (Top 37.02%) | Memory: 8.80 MB (Top 13.84%)\r\n\r\nclass Solution {\r\npublic:\r\n    int minimumOperations(vector<int>& nums) {\r\n        priority_queue <int, vector<int>, greater<int> > pq;\r\n        \r\n        for(int i=0;i<nums.size();i++)\r\n            pq.push(nums[i]);\r\n        \r\n        int curr_min=0;\r\n        int count=0;\r\n        \r\n        while(!pq.empty()){\r\n            if(pq.top()==0)pq.pop();\r\n            else{\r\n                int top=pq.top()-curr_min;\r\n                if(top!=0){\r\n                    curr_min+=top;\r\n                    count++;\r\n                }\r\n                pq.pop();\r\n            }\r\n        }\r\n        return count;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def minimumOperations(self, nums: List[int]) -> int:\r\n        return len(set(nums) - {0})",
    "java": "// Runtime: 1 ms (Top 64.28%) | Memory: 40.90 MB (Top 7.16%)\r\n\r\nclass Solution {\r\n    public int minimumOperations(int[] nums) {\r\n        Set<Integer> s = new HashSet<>();\r\n        int result = 0;\r\n        if(nums[0] == 0 && nums.length == 1){\r\n            return 0;\r\n        }\r\n        else{\r\n        for (int num : nums) {\r\n            s.add(num);\r\n        }\r\n        for (int num : nums) {\r\n            s.remove(0);\r\n        }\r\n        result = s.size();;\r\n        }\r\n        return result;\r\n    }\r\n}",
    "javascript": "// Runtime: 108 ms (Top 26.95%) | Memory: 41.6 MB (Top 95.74%)\r\nvar minimumOperations = function(nums) {\r\n    let k = new Set(nums) // convert array to set; [...nums] is destructuring syntax\r\n    return k.has(0) ? k.size-1 : k.size; // we dont need 0, hence if zero exists return size-1\r\n};"
  }
}
