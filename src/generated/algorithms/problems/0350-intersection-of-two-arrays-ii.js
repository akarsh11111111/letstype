export default {
  "id": 350,
  "name": "Intersection of Two Arrays II",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/intersection-of-two-arrays-ii",
  "relativeDir": "I/Intersection of Two Arrays II",
  "slug": "0350-intersection-of-two-arrays-ii",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 34,
    "java": 19,
    "python": 16,
    "javascript": 33
  },
  "languages": {
    "cpp": "// Runtime: 3 ms (Top 96.48%) | Memory: 10.1 MB (Top 81.91%)\r\nclass Solution {\r\npublic:\r\n    vector<int> intersect(vector<int>& nums1, vector<int>& nums2) {\r\n     sort(nums1.begin(),nums1.end());\r\n    sort(nums2.begin(),nums2.end());\r\n\r\n    int a = nums1.size();\r\n    int b = nums2.size();\r\n\r\n    int i=0,j=0;\r\n    vector<int>res;\r\n\r\n    while(i<a && j<b)\r\n    {\r\n        if(nums1[i] > nums2[j])\r\n        {\r\n            j++;\r\n        }\r\n        else if(nums1[i] < nums2[j])\r\n        {\r\n            i++;\r\n        }\r\n        else\r\n        {\r\n            res.push_back(nums1[i]);\r\n            i++;\r\n            j++;\r\n        }\r\n    }\r\n\r\n    return res;\r\n}\r\n};",
    "python": "class Solution:\r\n    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:\r\n        nums1.sort()\r\n        nums2.sort()\r\n        ans = []\r\n        i, j = 0, 0\r\n        while i < len(nums1) and j < len(nums2):\r\n            if nums1[i] < nums2[j]:\r\n                i += 1\r\n            elif nums1[i] > nums2[j]:\r\n                j += 1\r\n            else:\r\n                ans.append(nums1[i])\r\n                i += 1\r\n                j += 1\r\n        return ans",
    "java": "class Solution {\r\n    public int[] intersect(int[] nums1, int[] nums2) {\r\n        int[] dp = new int[1000+1];\r\n        for(int i: nums1){\r\n            dp[i]++;\r\n        }\r\n        int ptr =0;\r\n        int ans[] = new int[1000+1];\r\n        for(int i:nums2){\r\n            if(dp[i]!= 0){\r\n                ans[ptr]= i;\r\n                ptr++;\r\n                dp[i]--;\r\n            }\r\n                        \r\n        }\r\n        return Arrays.copyOfRange(ans,0,ptr);\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number[]} nums1\r\n * @param {number[]} nums2\r\n * @return {number[]}\r\n */\r\nvar intersect = function(nums1, nums2) {\r\n    // initialize empty array\r\n    let result = [];\r\n    \r\n    // sort arrays\r\n    const nums1Sorted = nums1.sort((a,b) => a - b);\r\n    const nums2Sorted = nums2.sort((a,b) => a - b);\r\n    \r\n    let i = 0;\r\n    let j = 0;\r\n    \r\n    while(i < nums1Sorted.length && j < nums2Sorted.length ){\r\n        // if nums1 index value is smaller than nums2 index value continue interating through nums1\r\n       if(nums1Sorted[i] < nums2Sorted[j]){\r\n           i++;\r\n        // if nums1 index value is larger than nums2 index value continue interating through nums2\r\n       }else if(nums1Sorted[i] > nums2Sorted[j]){\r\n           j++;\r\n       }else{\r\n           // if match found, push to result\r\n           result.push(nums1Sorted[i]);\r\n           i++;\r\n           j++;\r\n       }\r\n    }\r\n    return result;\r\n    \r\n};"
  }
}
