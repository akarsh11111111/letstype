export default {
  "id": 1004,
  "name": "Max Consecutive Ones III",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/max-consecutive-ones-iii",
  "relativeDir": "M/Max Consecutive Ones III",
  "slug": "1004-max-consecutive-ones-iii",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 23,
    "java": 23,
    "python": 13,
    "javascript": 26
  },
  "languages": {
    "cpp": "// Runtime: 72 ms (Top 5.04%) | Memory: 55.80 MB (Top 77.26%)\r\n\r\nclass Solution {\r\npublic:\r\n    int longestOnes(vector<int>& A, int K) {\r\n       int start = 0, max = INT_MIN,zeroCounter=0;\r\n        for(int end=0 ; end<A.size() ; end++){\r\n            if(A[end]==0){\r\n                zeroCounter++;\r\n            }\r\n            while(zeroCounter>K){\r\n                if(A[start]==0){\r\n                    zeroCounter--;\r\n                }\r\n                start++;\r\n            }\r\n            \r\n            max = std::max(max,end-start+1);\r\n        }\r\n        \r\n        return max;\r\n    }\r\n};",
    "python": "// Runtime: 398 ms (Top 99.0%) | Memory: 17.90 MB (Top 17.54%)\r\n\r\nclass Solution:\r\n    def longestOnes(self, nums: List[int], k: int) -> int:\r\n        l=r=0    \r\n        for r in range(len(nums)):\r\n            if nums[r] == 0:\r\n                k-=1\r\n            if k<0:\r\n                if nums[l] == 0:\r\n                    k+=1\r\n                l+=1\r\n        return r-l+1",
    "java": "// Runtime: 2 ms (Top 100.00%) | Memory: 43.4 MB (Top 96.24%)\r\n\r\nclass Solution {\r\n    public int longestOnes(int[] nums, int k) {\r\n        int ans = 0;\r\n        int j = -1;\r\n        int count = 0;\r\n        for (int i = 0; i < nums.length; i++) {\r\n            if (nums[i] == 0) {\r\n                count++;\r\n            }\r\n            while (count > k) {\r\n                j++;\r\n                if (nums[j] == 0) {\r\n                    count--;\r\n                }\r\n            }\r\n            int len = i - j;\r\n            if (len > ans) ans = len;\r\n        }\r\n        return ans;\r\n    }\r\n}",
    "javascript": " * @param {number[]} nums\r\n * @param {number} k\r\n * @return {number}\r\n */\r\nvar longestOnes = function(nums, k) {\r\n    let left = 0;\r\n    let oneCount = 0;\r\n    let maxLength = 0;\r\n    \r\n    for (let right = 0; right < nums.length; right ++) {\r\n        if (nums[right]) {  // so if the element is a 1 since 0 is falsy\r\n            oneCount++\r\n        }\r\n        \r\n        if ((right - left + 1 - oneCount) > k) { // check if we've used all of our replacements\r\n            if (nums[left]) { // start shrinking the window if its a 1 we subtract a count from oneCount\r\n                oneCount--\r\n            }\r\n            left++\r\n        }\r\n        \r\n        maxLength = Math.max(maxLength, right - left + 1); // update maxLength each iteration for largest window\r\n    }\r\n    \r\n    return maxLength\r\n};"
  }
}
