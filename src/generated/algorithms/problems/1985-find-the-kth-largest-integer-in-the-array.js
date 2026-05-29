export default {
  "id": 1985,
  "name": "Find the Kth Largest Integer in the Array",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-the-kth-largest-integer-in-the-array",
  "relativeDir": "F/Find the Kth Largest Integer in the Array",
  "slug": "1985-find-the-kth-largest-integer-in-the-array",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 18,
    "java": 30,
    "python": 4,
    "javascript": 44
  },
  "languages": {
    "cpp": "// Runtime: 513 ms (Top 42.13%) | Memory: 55.3 MB (Top 76.34%)\r\nclass Solution {\r\npublic:\r\n    static bool cmp(string &a,string &b)\r\n    {\r\n        if(a.size()==b.size())\r\n        {\r\n            return a<b;\r\n        }\r\n        return a.size()<b.size();\r\n    }\r\n    string kthLargestNumber(vector<string>& nums, int k)\r\n    {\r\n        sort(nums.begin(),nums.end(),cmp);\r\n        int n=nums.size();\r\n        return nums[n-k];\r\n    }\r\n};",
    "python": "class Solution:\r\n    def kthLargestNumber(self, nums: List[str], k: int) -> str:\r\n        nums = sorted(map(int, nums), reverse=True)\r\n        return str(nums[k-1])",
    "java": "// Runtime: 107 ms (Top 27.4%) | Memory: 53.91 MB (Top 31.3%)\r\n\r\nclass Solution {\r\n    public String kthLargestNumber(String[] nums, int k) {\r\n        \r\n        int n=nums.length;\r\n        \r\n        Arrays.sort(nums,(a,b)->{\r\n            if(a.length()>b.length()) return 1;\r\n            else if(b.length()>a.length()) return -1;\r\n            else{\r\n              return isgreater(a,b);   \r\n            }\r\n        });\r\n        return nums[n-k];        \r\n    }\r\n    \r\n    public static int isgreater(String a,String b){\r\n        \r\n        int n=a.length();\r\n        \r\n        for(int i=0;i<n;i++){\r\n            int a1=Integer.parseInt(\"\"+a.charAt(i));\r\n            int b1=Integer.parseInt(\"\"+b.charAt(i));\r\n            if(a1>b1) return 1;\r\n            if(b1>a1) return -1;\r\n        }\r\n        return 0;\r\n    }\r\n}",
    "javascript": "// Runtime: 7964 ms (Top 6.4%) | Memory: 57.65 MB (Top 58.0%)\r\n\r\nvar kthLargestNumber = function(nums, k) {\r\n    const n = nums.length;\r\n    k = n - k; \r\n    \r\n    return quickSelect(nums, k, 0, n - 1);\r\n    \r\n    \r\n    function quickSelect(arr, selectIdx, left, right) {\r\n        const pivotIdx = Math.floor(Math.random() * (right - left + 1) + left);\r\n        const pivotNum = arr[pivotIdx];\r\n        \r\n        swap(arr, pivotIdx, right);\r\n        \r\n        let swapIdx = left;\r\n        \r\n        for (let i = left; i < right; i++) {\r\n            if (compare(arr[i], pivotNum) < 0) {\r\n                swap(arr, swapIdx, i);\r\n                swapIdx++;\r\n            }\r\n        }\r\n        \r\n        swap(arr, swapIdx, right);\r\n        \r\n        if (swapIdx === selectIdx) return arr[selectIdx];\r\n        \r\n        if (swapIdx > selectIdx) return quickSelect(arr, selectIdx, left, swapIdx - 1);\r\n        if (swapIdx < selectIdx) return quickSelect(arr, selectIdx, swapIdx + 1, right);\r\n    }\r\n    \r\n    \r\n    function compare(numStr1, numStr2) {\r\n        if (numStr1.length > numStr2.length) return 1;\r\n        if (numStr2.length > numStr1.length) return -1;\r\n        \r\n        return numStr1.localeCompare(numStr2);\r\n    }\r\n    \r\n    function swap(arr, i, j) {\r\n        [arr[i], arr[j]] = [arr[j], arr[i]];\r\n    }\r\n};"
  }
}
