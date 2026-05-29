export default {
  "id": 665,
  "name": "Non-decreasing Array",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/non-decreasing-array",
  "relativeDir": "N/Non-decreasing Array",
  "slug": "0665-non-decreasing-array",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 37,
    "java": 13,
    "python": 14,
    "javascript": 12
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\nbool checkPossibility(vector<int>& nums) {\r\n    if(nums.size()<=2)\r\n        return true;\r\n    //creating a diff array(size=n-1) to store differences bw 2 consecutive ele.\r\n    vector<int>diff(nums.size()-1);\r\n    int neg=0;\r\n    \r\n    for(int i=0;i<nums.size()-1;i++)\r\n    {\r\n        diff[i]=nums[i+1]-nums[i];\r\n        diff[i]<0?neg++:0; //no of negative differences\r\n    }\r\n    \r\n    if(neg>1)\r\n        return false;\r\n\r\n    \r\n    for(int i=0;i<diff.size();i++)\r\n    {\r\n        if(diff[i]<0 and i!=diff.size()-1)\r\n        {\r\n            if(i==0)\r\n                // if(diff[i+1]>=0)\r\n                continue; //if the first diff is neg, the next is obviosly>=0 as neg<=1, and this mountain can be resolved;\r\n                // else\r\n                    // return false;\r\n            \r\n            if((nums[i-1]<=nums[i+1]) || (diff[i+1])>=abs(diff[i]))\r\n                continue;  //the major mountain cases, lemme know below if want explaination of these\r\n            else \r\n                return false;\r\n        }\r\n    }   \r\n    return true;\r\n}",
    "python": "class Solution:\r\n    def checkPossibility(self, nums: List[int]) -> bool:\r\n        unstable=0\r\n        for i in range(1,len(nums)):\r\n            if nums[i]<nums[i-1]:\r\n                unstable+=1\r\n                if i<2 or nums[i-2]<=nums[i]:\r\n                    nums[i-1]=nums[i]\r\n                else:\r\n                    nums[i]=nums[i-1]\r\n                \r\n                if unstable>1:\r\n                    return False\r\n        return True",
    "java": "class Solution {\r\n    public boolean checkPossibility(int[] nums) {\r\n        int modified = 0, prev = nums[0], index = 0;\r\n        for (; index < nums.length; ++index) {\r\n            if (nums[index] < prev) {\r\n                if (++modified > 1) return false;\r\n                if (index - 2 >= 0 && nums[index - 2] > nums[index]) continue;\r\n            }\r\n            prev = nums[index];\r\n        }\r\n        return true;\r\n    }\r\n}",
    "javascript": "var checkPossibility = function(nums) {\r\n    let changed = false\r\n    for(let i=nums.length-1; i>0; i--) {\r\n        if(nums[i-1] > nums[i]) {\r\n            if(changed) return false;\r\n            if(i === nums.length-1 || nums[i-1] < nums[i+1]) nums[i] = nums[i-1]\r\n            else nums[i-1] = nums[i];\r\n            changed = true\r\n        }\r\n    }\r\n    return true;\r\n};"
  }
}
