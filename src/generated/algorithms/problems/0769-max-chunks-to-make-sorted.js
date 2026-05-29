export default {
  "id": 769,
  "name": "Max Chunks To Make Sorted",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/max-chunks-to-make-sorted",
  "relativeDir": "M/Max Chunks To Make Sorted",
  "slug": "0769-max-chunks-to-make-sorted",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 23,
    "java": 11,
    "python": 11,
    "javascript": 9
  },
  "languages": {
    "cpp": "// Runtime: 6 ms (Top 11.71%) | Memory: 7.3 MB (Top 29.81%)\r\nclass Solution {\r\npublic:\r\n    int maxChunksToSorted(vector<int>& arr) {\r\n        // using chaining technique\r\n        int maxi=INT_MIN;\r\n        int ans =0;\r\n\r\n        for(int i=0;i<size(arr);i++)\r\n\r\n        {\r\n            maxi = max(maxi,arr[i]);\r\n\r\n            if(maxi==i)\r\n            {\r\n                //.. found partition\r\n                ans++;\r\n\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution(object):\r\n    def maxChunksToSorted(self, arr):\r\n        n= len(arr)\r\n\r\n        count=0\r\n        currentmax= -2**63\r\n        for i in range(0,n):\r\n            currentmax=max(currentmax, arr[i])\r\n            if (currentmax==i):\r\n                count+=1\r\n        return count",
    "java": "// Runtime: 0 ms (Top 100.00%) | Memory: 40.9 MB (Top 81.61%)\r\nclass Solution {\r\n    public int maxChunksToSorted(int[] arr) {\r\n\r\n        int max=0, count=0;\r\n        for(int i=0; i<arr.length; i++){\r\n            max = Math.max(arr[i],max);\r\n            if(i==max) count++;\r\n        }return count;\r\n    }\r\n}",
    "javascript": "// Runtime: 92 ms (Top 43.48%) | Memory: 41.8 MB (Top 59.42%)\r\nvar maxChunksToSorted = function(arr) {\r\n    let count = 0, cumSum = 0;\r\n    arr.forEach((el, index) => {\r\n        cumSum += el-index;\r\n        if (cumSum === 0) count++;\r\n    });\r\n    return count;\r\n};"
  }
}
