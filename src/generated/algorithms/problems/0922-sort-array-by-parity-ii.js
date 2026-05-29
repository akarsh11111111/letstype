export default {
  "id": 922,
  "name": "Sort Array By Parity II",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/sort-array-by-parity-ii",
  "relativeDir": "S/Sort Array By Parity II",
  "slug": "0922-sort-array-by-parity-ii",
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
    "python": 16,
    "javascript": 13
  },
  "languages": {
    "cpp": "// Runtime: 28 ms (Top 76.96%) | Memory: 21.4 MB (Top 66.53%)\r\nclass Solution {\r\npublic:\r\n    vector<int> sortArrayByParityII(vector<int>& nums) {\r\n\r\n        vector<int>ans(nums.size());\r\n\r\n        int even_idx=0;\r\n        int odd_idx=1;\r\n\r\n        for(int i=0;i<nums.size();i++)\r\n        {\r\n            if((nums[i]%2)==0) //the num is even\r\n            {\r\n                ans[even_idx]=nums[i];\r\n                even_idx+=2;\r\n            }\r\n            else //the num is odd\r\n            {\r\n                ans[odd_idx]=nums[i];\r\n                odd_idx+=2;\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "// Runtime: 148 ms (Top 91.55%) | Memory: 19.90 MB (Top 17.18%)\r\n\r\nclass Solution:\r\n    def sortArrayByParityII(self, nums: List[int]) -> List[int]:\r\n        even = []\r\n        odd = []\r\n        lst=[]\r\n        for i in range(len(nums)):\r\n            if nums[i]%2 == 0:\r\n                even.append(nums[i])\r\n            else:\r\n                odd.append(nums[i])\r\n        for i in range(len(even)):\r\n            lst.append(even[i])\r\n            lst.append(odd[i])\r\n        return lst",
    "java": "// Runtime: 3 ms (Top 44.53%) | Memory: 47.70 MB (Top 5.52%)\r\n\r\nclass Solution {\r\n    public int[] sortArrayByParityII(int[] A) {\r\n        int i = 0, j = 1, n = A.length;\r\n        while (i < n && j < n) {\r\n            while (i < n && A[i] % 2 == 0) {\r\n                i += 2;\r\n            }\r\n            while (j < n && A[j] % 2 == 1) {\r\n                j += 2;\r\n            }\r\n            if (i < n && j < n) {\r\n                swap(A, i, j);\r\n            }\r\n        }\r\n        return A;\r\n    }\r\n    private void swap(int[] A, int i, int j) {\r\n        int temp = A[i];\r\n        A[i] = A[j];\r\n        A[j] = temp;\r\n    }\r\n}",
    "javascript": "var sortArrayByParityII = function(nums) {\r\n    let arrEven = []\r\n    let arrOdd = []\r\n    let result = []\r\n    for(let i in nums){\r\n    nums[i]%2==0 ? arrEven.push(nums[i]) : arrOdd.push(nums[i])\r\n    }\r\n    for(let i in  arrEven){\r\n        result.push(arrEven[i])\r\n        result.push(arrOdd[i])\r\n    }\r\n   return result\r\n};"
  }
}
