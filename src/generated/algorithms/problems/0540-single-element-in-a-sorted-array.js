export default {
  "id": 540,
  "name": "Single Element in a Sorted Array",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/single-element-in-a-sorted-array",
  "relativeDir": "S/Single Element in a Sorted Array",
  "slug": "0540-single-element-in-a-sorted-array",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 10,
    "java": 21,
    "python": 21,
    "javascript": 19
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int singleNonDuplicate(vector<int>& nums) {\r\n        int ans=0;\r\n        for(int i=0; i<nums.size();i++){\r\n            ans=ans^nums[i];\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def singleNonDuplicate(self, nums: List[int]) -> int:\r\n        return self.b_search(nums)[0]\r\n    \r\n    def b_search(self, nums):\r\n        if len(nums) == 1:\r\n            return nums\r\n        mid = len(nums)//2\r\n        a = nums[:mid]\r\n        b = nums[mid:]\r\n\t\t\r\n\t\t# check if last & first element of the two sub lists are same\r\n        if a[-1] == b[0]:\r\n            a = a[:-1]\r\n            b = b[1:]\r\n\t\t\r\n\t\t# ignore the sub list with even number of elements\r\n        if len(a)%2:\r\n            return self.b_search(a)\r\n        else:\r\n            return self.b_search(b)",
    "java": "// Runtime: 0 ms (Top 100.0%) | Memory: 49.90 MB (Top 64.7%)\r\n\r\nclass Solution {\r\n    public int singleNonDuplicate(int[] nums) {\r\n        if(nums.length==1) return nums[0];\r\n        int l = 0;\r\n        int h = nums.length-1;\r\n        \r\n        while(l<h){\r\n            int mid = l+(h-l)/2;      // divide the array\r\n            \r\n            if(nums[mid]==nums[mid+1]) mid = mid-1;      //two same elements should be in same half\r\n            \r\n            if((mid-l+1)%2!=0) h = mid;            // checking the length of left half. If its is odd then update ur right pointer to mid\r\n            \r\n            else l = mid+1;    // else your right half will be odd then update your left pointer to mid+1\r\n        }\r\n        \r\n        return nums[l];     //left pointer will have the answer at last\r\n    }\r\n}",
    "javascript": "// Runtime: 63 ms (Top 96.12%) | Memory: 45.3 MB (Top 33.50%)\r\nvar singleNonDuplicate = function(nums) {\r\n    var start = 0;\r\n    var end = nums.length - 1\r\n    // to check one element\r\n     if (nums.length == 1) return nums[start]\r\n     while(start <= end) {\r\n        if(nums[start] != nums[start + 1]) {\r\n            return nums[start] }\r\n\r\n          if(nums[end] != nums[end - 1]) {\r\n            return nums[end]\r\n        }\r\n        // increment two point\r\n        start = start + 2;\r\n        end = end - 2;\r\n\r\n    }\r\n};"
  }
}
