export default {
  "id": 477,
  "name": "Total Hamming Distance",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/total-hamming-distance",
  "relativeDir": "T/Total Hamming Distance",
  "slug": "0477-total-hamming-distance",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 38,
    "java": 15,
    "python": 11,
    "javascript": 12
  },
  "languages": {
    "cpp": "/*\r\nSo in the question we want to find out the \r\nnumber of difference of bits between each pair \r\nso in the brute force we will iterate over the vector \r\nand for every pair we will calculate the Hamming  distance \r\nthe Hamming distance will be calculated by taking XOR  between the two elements\r\nand then finding out the number of ones in the XOR of those two elements \r\nthe intuition behind this method is that XOR will contain 1's at those places \r\nwhere the corresponding bits of  elements x & y are different \r\ntherefore we will add this count\r\nto our answer\r\n*/\r\nclass Solution {\r\npublic:\r\n    int hammingDistance(int x, int y) {\r\n        int XOR=x^y;\r\n        \r\n        int count=0;\r\n        while(XOR){\r\n            if(XOR&1)\r\n                count++;\r\n            \r\n            XOR=XOR>>1;\r\n        }\r\n        return count;\r\n    }\r\n    \r\n    int totalHammingDistance(vector<int>& nums) {\r\n        int ans=0;\r\n        for(int i=0;i<nums.size()-1;i++){\r\n            for(int j=i+1;j<nums.size();j++){\r\n                ans+=hammingDistance(nums[i],nums[j]);\r\n            }\r\n        }\r\n        \r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 947 ms (Top 34.04%) | Memory: 15.5 MB (Top 30.97%)\r\nclass Solution:\r\n    def totalHammingDistance(self, arr: List[int]) -> int:\r\n\r\n        total = 0\r\n        for i in range(0,31):\r\n            count = 0\r\n            for j in arr :\r\n                count+= (j >> i) & 1\r\n            total += count*(len(arr)-count)\r\n        return total",
    "java": "// Runtime: 24 ms (Top 19.37%) | Memory: 53.8 MB (Top 78.38%)\r\nclass Solution {\r\n    public int totalHammingDistance(int[] nums) {\r\n        int total = 0;\r\n        int[][] cnt = new int[2][32];\r\n        for (int i = 0; i < nums.length; i++) {\r\n            for (int j = 0; j < 32; j++) {\r\n                int idx = (nums[i] >> j) & 1;\r\n                total += cnt[idx ^ 1][j];\r\n                cnt[idx][j]++;\r\n            }\r\n        }\r\n        return total;\r\n    }\r\n}",
    "javascript": "// Runtime: 122 ms (Top 61.76%) | Memory: 44.5 MB (Top 97.06%)\r\nvar totalHammingDistance = function(nums) {\r\n    let n = nums.length, ans = 0;\r\n    for(let bit = 0; bit < 32; bit++) {\r\n        let zeros = 0, ones = 0;\r\n        for(let i = 0; i < n; i++) {\r\n            ((nums[i] >> bit) & 1) ? ones++ : zeros++;\r\n        }\r\n        ans += zeros * ones;\r\n    }\r\n    return ans;\r\n};"
  }
}
