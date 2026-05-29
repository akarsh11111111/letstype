export default {
  "id": 2091,
  "name": "Removing Minimum and Maximum From Array",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/removing-minimum-and-maximum-from-array",
  "relativeDir": "R/Removing Minimum and Maximum From Array",
  "slug": "2091-removing-minimum-and-maximum-from-array",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 17,
    "java": 41,
    "python": 12,
    "javascript": 61
  },
  "languages": {
    "cpp": "// Runtime: 211 ms (Top 76.70%) | Memory: 88.3 MB (Top 35.46%)\r\nclass Solution {\r\npublic:\r\n    int minimumDeletions(vector<int>& nums) {\r\n\r\n        int indmin, indmax, mini(INT_MAX), maxi(INT_MIN), n(nums.size());\r\n\r\n        for (int i=0; i<n; i++)\r\n        {\r\n            if (maxi < nums[i]) maxi = nums[i], indmax = i;\r\n            if (mini > nums[i]) mini = nums[i], indmin = i;\r\n        }\r\n\r\n        int before(min(indmin, indmax)), after(max(indmin, indmax));\r\n        return min(before+1 + min(n-after, after-before), n-after + min(before+1, after-before));\r\n    }\r\n};",
    "python": "class Solution:\r\n    def minimumDeletions(self, nums: List[int]) -> int:\r\n        minFromFront = nums.index(min(nums))\r\n        maxFromFront = nums.index(max(nums))\r\n        \r\n        minFromBack = len(nums) - minFromFront - 1\r\n        maxFromBack = len(nums) - maxFromFront - 1 \r\n        \r\n        return min(max(minFromFront, maxFromFront) + 1,  # Case 1\r\n                   max(minFromBack, maxFromBack) + 1,    # Case 2\r\n                   minFromBack + maxFromFront + 2,       # Case 3 \r\n                   minFromFront + maxFromBack + 2)       # Case 4",
    "java": "class Solution {\r\n    public int minimumDeletions(int[] nums) {\r\n        int max = Integer.MIN_VALUE;\r\n        int min = Integer.MAX_VALUE;\r\n        int minInd = 0;\r\n        int maxInd = 0;\r\n        int n = nums.length;\r\n        \r\n        //First Find out the max and min element index\r\n        for(int i=0;i<n;i++){\r\n            if(nums[i]>max){\r\n                max = nums[i];\r\n                maxInd = i;\r\n            }\r\n            \r\n            if(nums[i]<min){\r\n                min = nums[i];\r\n                minInd = i;\r\n            }\r\n        }\r\n        \r\n        //if both index are same then return the part in which less number of elements are there\r\n        if(maxInd==minInd){\r\n            return Math.min(maxInd+1,n-maxInd);\r\n        }\r\n        \r\n        //max element is right side of min element\r\n        if(maxInd>minInd){\r\n            int count = Math.min(maxInd+1,n-minInd); // min of all the elements till max element and all the elements to the right of min element\r\n            int count1 = minInd+1+(n-maxInd); // all elements to the left of min and right of max\r\n            return Math.min(count,count1); // min of both\r\n        }\r\n        // min element is right side of the max element\r\n        else{\r\n            int count = Math.min(minInd+1,n-maxInd);\r\n            int count1 = maxInd+1+(n-minInd);\r\n            return Math.min(count,count1);\r\n        }\r\n        \r\n    }\r\n}",
    "javascript": "var minimumDeletions = function(nums) {\r\n    if(nums.length===1)return 1\r\n    let min=Math.min()\r\n    let max=Math.max()\r\n    \r\n\t// finding min and max\r\n    for(let n of nums){\r\n        min=Math.min(n,min)\r\n        max=Math.max(n,max)\r\n    };\r\n    \r\n\t// obj to store no. of elements to remove if we start from left and if we start from right\r\n    const obj={\r\n        left:[],\r\n        right:[]\r\n    }\r\n\t// left[0]-> no. of elements upto min element if we start from left\r\n\t// left[1]-> no. of elements upto max element if we start from left\r\n\t// right[0]-> no. of elements upto min element if we start from right\r\n\t// right[1]-> no. of elements upto max element if we start from right\r\n    for(let i=0;i<nums.length;i++){\r\n        if(nums[i]===max){\r\n            obj['left'][1]=i+1\r\n            obj['right'][1]=nums.length-i\r\n        }\r\n        if(nums[i]===min){\r\n            obj['left'][0]=i+1\r\n            obj['right'][0]=nums.length-i\r\n        }\r\n    }\r\n    let total=0\r\n    const set = new Set();\r\n\t// if no. of elements to remove min element from left is less than right \r\n    if(obj['left'][0]<obj['right'][0]){\r\n        set.add('left');\r\n        total+=obj['left'][0]\r\n    }else{\r\n\t\t// vice versa\r\n        set.add('right');\r\n        total+=obj['right'][0]\r\n    }\r\n\t// if no. of elements to remove max element from right is less than left \r\n     if(obj['left'][1]<obj['right'][1]){\r\n        set.add('left');\r\n         total+=obj['left'][1]\r\n    }else{\r\n\t\t// vice versa\r\n        set.add('right');\r\n        total+=obj['right'][1]\r\n    }\r\n\t\r\n\t// if both elements are to be removed from diff direction inorder to remove lesser element\r\n\t// we have 3 cases: \r\n\t// one from left and one from right(total), min/max element lies after max/min ele from left,min/max element lies after max/min ele from right\r\n    if(set.size===2)return Math.min(total,Math.max(...obj['left']),Math.max(...obj['right']));\r\n    else{\r\n\t   // if both elements can be removed from same direction(ie. either left or right)\r\n        return Math.max(...obj[set.values().next().value])\r\n    }\r\n    \r\n};"
  }
}
