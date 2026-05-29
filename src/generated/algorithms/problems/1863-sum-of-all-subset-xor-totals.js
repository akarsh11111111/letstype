export default {
  "id": 1863,
  "name": "Sum of All Subset XOR Totals",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/sum-of-all-subset-xor-totals",
  "relativeDir": "S/Sum of All Subset XOR Totals",
  "slug": "1863-sum-of-all-subset-xor-totals",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 23,
    "java": 16,
    "python": 9,
    "javascript": 14
  },
  "languages": {
    "cpp": "// Runtime: 6 ms (Top 60.42%) | Memory: 7.2 MB (Top 56.55%)\r\nclass Solution {\r\npublic:\r\n\r\n    int subsetXORSum(vector<int>& nums)\r\n    {\r\n        int ans=0;\r\n        for(int i=0; i<32; i++)\r\n        {\r\n            int mask=1<<i;\r\n            int count=0;\r\n            for(int j=0; j<nums.size(); j++)\r\n            {\r\n                if(nums[j]&mask) count++;\r\n            }\r\n            if(count)\r\n            {\r\n                ans+=mask*(1<<(count-1))*(1<<(nums.size()-count));\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 60 ms (Top 83.44%) | Memory: 13.8 MB (Top 70.65%)\r\nclass Solution:\r\n    def subsetXORSum(self, nums: List[int]) -> int:\r\n        def sums(term, idx):\r\n            if idx == len(nums):\r\n                return term\r\n            return sums(term, idx + 1) + sums(term ^ nums[idx], idx + 1)\r\n\r\n        return sums(0, 0)",
    "java": "// Runtime: 0 ms (Top 100.0%) | Memory: 40.90 MB (Top 35.14%)\r\n\r\nclass Solution {\r\n    int sum=0;\r\n    public int subsetXORSum(int[] nums) {\r\n        sum=0;\r\n        return getAns(nums,0,0);\r\n    }\r\n    \r\n    int getAns(int[] arr,int i,int cur){\r\n        if(i==arr.length){\r\n            return cur;\r\n        }\r\n        return getAns(arr,i+1,cur^arr[i]) + getAns(arr,i+1,cur);\r\n    }\r\n}",
    "javascript": "// Runtime: 127 ms (Top 24.62%) | Memory: 48.3 MB (Top 25.38%)\r\nvar subsetXORSum = function(nums) {\r\n    let output=[];\r\n    backtrack();\r\n    return output.reduce((a,b)=>a+b);\r\n    function backtrack(start = 0, arr=[nums[0]]){\r\n       output.push([...arr].reduce((a,b)=>a^b,0));\r\n       for(let i=start; i<nums.length; i++){\r\n            arr.push(nums[i]);\r\n            backtrack(i+1, arr);\r\n            arr.pop();\r\n       }\r\n    }\r\n};"
  }
}
