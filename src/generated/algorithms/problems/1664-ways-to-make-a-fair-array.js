export default {
  "id": 1664,
  "name": "Ways to Make a Fair Array",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/ways-to-make-a-fair-array",
  "relativeDir": "W/Ways to Make a Fair Array",
  "slug": "1664-ways-to-make-a-fair-array",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 58,
    "java": 30,
    "python": 32,
    "javascript": 38
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int waysToMakeFair(vector<int>& nums) {\r\n        //it looks a quite complicated problem but actually it is not\r\n        //the main observation here is when a element is deleted the odd sum after the element becomes the evensum and vice versa\r\n        //so we maintain two vectors left and right\r\n        vector<int> left(2,0);\r\n        vector<int> right(2,0);\r\n        \r\n        //left[0],right[0] stores the sum of even indices elements to the left and right side of the element respectively\r\n        //left[1] right[1] stores the sum of odd indices elements to the left and right side of the element respectively\r\n        \r\n        int ans=0; //stores the result\r\n        //first store the odd sum and even sum in right\r\n        for(int i=0;i<nums.size();i++)\r\n        {\r\n            if(i%2)\r\n            {\r\n                //odd index \r\n                right[1]+=nums[i];\r\n            }\r\n            else{\r\n                //even index \r\n                right[0]+=nums[i];\r\n            }\r\n        }\r\n        \r\n        //now traverse through every element in the array and try to remove the element  and check does it makes a fair array\r\n        for(int i=0;i<nums.size();i++)\r\n        {\r\n            //try to remove the element\r\n            int currOdd=right[1];\r\n            int currEven=right[0];\r\n            if(i%2)\r\n            {\r\n                //odd index , remove it from currOdd\r\n                currOdd-=nums[i];\r\n                right[1]-=nums[i]; //since it would be no longer to the right\r\n            }\r\n            else{\r\n                //even index , remove it from currEven\r\n                currEven-=nums[i];\r\n                right[0]-=nums[i];\r\n            }\r\n            //now check whether the total oddSum and the evenSum in the array are equal ?\r\n            //since we are deleting this element oddSum becomes evenSum and evenSum becomes oddSum\r\n            //check leftOdd+rightOdd==rightEven+leftEven\r\n            //left[0] is even sum to left of i \r\n            //left[1] is the odd sum to left of i\r\n            if(left[0]+currOdd==left[1]+currEven)\r\n                ans++;\r\n            //since we traverse to right add this value to the left array\r\n            (i%2) ? left[1]+=nums[i] : left[0]+=nums[i];\r\n        }\r\n        \r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n\tdef waysToMakeFair(self, nums: List[int]) -> int:\r\n\t\tif len(nums) == 1:\r\n\t\t\treturn 1\r\n\r\n\t\tif len(nums) == 2:\r\n\t\t\treturn 0\r\n\r\n\t\tprefixEven = sum(nums[2::2])\r\n\t\tprefixOdd = sum(nums[1::2])\r\n\t\tresult = 0\r\n\r\n\t\tif prefixEven == prefixOdd and len(set(nums)) == 1:\r\n\t\t\tresult += 1\r\n\r\n\t\tfor i in range(1,len(nums)):\r\n\t\t\tif i == 1:\r\n\t\t\t\tprefixOdd, prefixEven = prefixEven, prefixOdd \r\n\r\n\t\t\tif i > 1:\r\n\t\t\t\tif i % 2 == 0:\r\n\t\t\t\t\tprefixEven -= nums[i-1]\r\n\t\t\t\t\tprefixEven += nums[i-2]\r\n\r\n\t\t\t\telse:\r\n\t\t\t\t\tprefixOdd -= nums[i-1]\r\n\t\t\t\t\tprefixOdd += nums[i-2]\r\n\r\n\t\t\tif prefixOdd == prefixEven:\r\n\t\t\t\tresult += 1\r\n\r\n\t\treturn result",
    "java": "// Runtime: 5 ms (Top 97.91%) | Memory: 58.00 MB (Top 9.21%)\r\n\r\nclass Solution {\r\n    public int waysToMakeFair(int[] nums) {\r\n        int esum = 0;  // Sum of even-indexed elements\r\n        int osum = 0;  // Sum of odd-indexed elements\r\n        int n=nums.length;\r\n        for (int i = 0; i < n; i++) {\r\n            if (i % 2 == 0) {\r\n                osum += nums[i];\r\n            } else {\r\n                esum += nums[i];\r\n            }\r\n        }\r\n        int count = 0;\r\n        int prev = 0;\r\n        for (int i = 0; i < n; i++) {\r\n            if (i % 2 == 0) {\r\n                osum = osum - nums[i] + prev;\r\n            } else {\r\n                esum = esum - nums[i] + prev;\r\n            }\r\n            if (esum == osum) {\r\n                count++;\r\n            }\r\n            prev = nums[i];\r\n        }\r\n        return count;\r\n    }\r\n}",
    "javascript": "// Runtime: 63 ms (Top 100.0%) | Memory: 58.90 MB (Top 32.14%)\r\n\r\n/**\r\n * @param {number[]} nums\r\n * @return {number}\r\n */\r\nvar waysToMakeFair = function(nums) {\r\n    let oddSum = 0; \r\n    let evenSum = 0 ;\r\n    let count = 0;\r\n    \r\n    for (let i = 0; i < nums.length; i++) {\r\n        if (i % 2 === 0) {\r\n            evenSum += nums[i];\r\n        } else {\r\n            oddSum += nums[i];\r\n        }\r\n    }\r\n    \r\n    \r\n    for (let i = 0; i < nums.length; i++) {\r\n        if (i % 2 === 0) {\r\n            evenSum -= nums[i];\r\n            if (evenSum === oddSum) {\r\n                count++; \r\n            }\r\n            oddSum += nums[i];\r\n        } else {\r\n            oddSum -= nums[i];\r\n            if (evenSum === oddSum) {\r\n                count++;\r\n            }\r\n            evenSum += nums[i]\r\n        }\r\n    }\r\n    \r\n    return count;\r\n};"
  }
}
