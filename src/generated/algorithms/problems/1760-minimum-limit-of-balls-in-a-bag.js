export default {
  "id": 1760,
  "name": "Minimum Limit of Balls in a Bag",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-limit-of-balls-in-a-bag",
  "relativeDir": "M/Minimum Limit of Balls in a Bag",
  "slug": "1760-minimum-limit-of-balls-in-a-bag",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 35,
    "java": 33,
    "python": 10,
    "javascript": 18
  },
  "languages": {
    "cpp": "// Runtime: 412 ms (Top 28.34%) | Memory: 56 MB (Top 33.00%)\r\nclass Solution {\r\npublic:\r\n    bool isPossible(vector<int>&nums,int mid_penalty,int maxOperations)\r\n    {\r\n        int operations=0;\r\n\r\n        for(int i=0;i<nums.size();i++)\r\n        {\r\n            operations+=(nums[i]/mid_penalty); //Operations Nedded to divide that element.\r\n            if(nums[i]%mid_penalty==0) //if it is completely divisible means less 1 less is needed for that nums.\r\n                operations--;\r\n        }\r\n\r\n        return operations<=maxOperations?1:0; //If operations are less than maxOperations it is one of our ans.\r\n    }\r\n    int minimumSize(vector<int>& nums, int maxOperations) {\r\n        int low_penalty=1,high_penalty=*max_element(nums.begin(),nums.end());\r\n        int ans=high_penalty;\r\n        while(low_penalty<=high_penalty)\r\n        {\r\n            int mid_penalty=low_penalty+(high_penalty-low_penalty)/2;\r\n            if(mid_penalty==0) //To avoid divison by zero.\r\n                break;\r\n            if(isPossible(nums,mid_penalty,maxOperations))\r\n            {\r\n                ans=mid_penalty;\r\n                high_penalty=mid_penalty-1;\r\n            }\r\n            else\r\n                low_penalty=mid_penalty+1;\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def minimumSize(self, nums: List[int], maxOperations: int) -> int:\r\n        l, r = 1, max(nums)\r\n        while l < r:\r\n            mid = (l + r) // 2\r\n            if sum([(n - 1) // mid for n in nums]) > maxOperations: \r\n                l = mid + 1\r\n            else:\r\n                r = mid\r\n        return l",
    "java": "// Runtime: 26 ms (Top 86.75%) | Memory: 59.70 MB (Top 45.73%)\r\n\r\nclass Solution {\r\n\r\npublic int minimumSize(int[] nums, int maxOperations) {\r\n//initiate the boundary for possible answers, here if you let min=1 it will still work for most cases except for some corner cases. We make max=100000000 because nums[i] <= 10^9. You can choose to sort the array and make the max= arr.max, at the price of time consumption.\r\n//The answer should be the minimized max value.\r\n    int min = 0;\r\n    int max = 1000000000;\r\n\t//Compared with min<max or min <= max, min + 1 < max will avoid infinite loops e.g. when min = 2, max = 3\r\n    while (min +1< max) {\r\n        int mid = (max - min)/2 + min;\r\n\t\t//count indicates the operation times with atmost mid balls in bag.\r\n        int count = 0;\r\n        for (int a: nums) {\r\n\t\t//this is the same as Math. ceil(a/mid) - 1=> math.ceil(a/mid) gives the number of divided bags, we subtract the number by 1 to get the subdivision operation times.\r\n            count+=(a-1)/mid;\r\n        }\r\n\t\t//if count < maxOperations, max WOULD be further minimized and set to mid; \r\n\t\t//if count = maxOperations, max still COULD be further minimized and set to mid. \r\n\t\t//so we combine < and = cases together in one if condition\r\n        if (count <= maxOperations) {\r\n\t\t//max = mid - 1 will not work in this case becasue mid could be the correct answer. \r\n\t\t//To not miss the correct answer we set a relatively \"loose\" boundary for max and min.\r\n            max = mid;\r\n        } else{\r\n            min = mid;\r\n        }\r\n    }\r\n\t//Now we find the minimized max value\r\n    return max;\r\n}\r\n}",
    "javascript": "// Runtime: 287 ms (Top 21.05%) | Memory: 51.7 MB (Top 84.21%)\r\nvar minimumSize = function(nums, maxOperations) {\r\n  let i = 1\r\n  let j = Math.max(...nums)\r\n\r\n  while (i <= j) {\r\n    let mid = Math.floor((j-i)/2 + i)\r\n    let count = 0\r\n    nums.forEach(n => count += Math.floor((n-1)/mid))\r\n\r\n    if (count <= maxOperations) {\r\n      j = mid - 1\r\n    } else {\r\n      i = mid + 1\r\n    }\r\n  }\r\n  return i\r\n};"
  }
}
