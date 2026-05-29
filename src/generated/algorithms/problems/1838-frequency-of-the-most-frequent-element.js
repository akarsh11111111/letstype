export default {
  "id": 1838,
  "name": "Frequency of the Most Frequent Element",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/frequency-of-the-most-frequent-element",
  "relativeDir": "F/Frequency of the Most Frequent Element",
  "slug": "1838-frequency-of-the-most-frequent-element",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 33,
    "java": 27,
    "python": 11,
    "javascript": 21
  },
  "languages": {
    "cpp": "// Runtime: 447 ms (Top 28.83%) | Memory: 99.1 MB (Top 14.78%)\r\n\r\n#define ll long long\r\n\r\nclass Solution {\r\npublic:\r\n    int maxFrequency(vector<int>& nums, int k) {\r\n        // sorting so that can easily find the optimal window\r\n        sort(nums.begin(), nums.end());\r\n\r\n        // left - left pointer of window\r\n        // right - right pointer of window\r\n        int left = 0, right = 0, ans = 1;\r\n        ll total = 0, n = nums.size();\r\n        while(right < n){\r\n            // total - total sum of elements in the window\r\n            total += nums[right];\r\n\r\n            // Checking if the we can achieve elements in this window\r\n            // If it exceeds k then shrinking the window by moving left pointer\r\n            // For optimal we will make all elements in the array equal to\r\n            // the maximum value element\r\n            while((1ll)*(right - left + 1)*nums[right] - total > k){\r\n                total -= nums[left];\r\n                left++;\r\n            }\r\n\r\n            ans = max(ans, right - left + 1);\r\n            right++;\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def maxFrequency(self, nums: List[int], k: int) -> int:\r\n        nums.sort()\r\n        sums, i, ans = 0, 0, 0\r\n        for j in range(len(nums)):\r\n            sums += nums[j]\r\n            while nums[j]*(j-i+1) > sums+k:\r\n                sums -= nums[i]\r\n                i = i+1\r\n            ans = max(ans, j-i+1)\r\n        return ans",
    "java": "// Runtime: 46 ms (Top 33.83%) | Memory: 95.9 MB (Top 65.95%)\r\nclass Solution {\r\n    public int maxFrequency(int[] nums, int k) {\r\n        //Step-1: Sorting->\r\n        Arrays.sort(nums);\r\n        //Step-2: Two-Pointers->\r\n        int L=0,R=0;\r\n        long totalSum=0;\r\n        int res=1;\r\n        //Iterating over the array:\r\n        while(R<nums.length)\r\n        {\r\n            totalSum+=nums[R];\r\n            //The value of \"totalSum+k\" should be \">=\" \"windowSize*nums[R]\"\r\n            //then only the window is possible else decrease the \"totalSum\"\r\n            //till the value \"totalSum+k\" is \">=\" \"windowSize*nums[R]\"\r\n            while(! ((totalSum+k) >= ((R-L+1)*nums[R])) )\r\n            {\r\n                totalSum-=nums[L];\r\n                L++;\r\n            }\r\n            res=Math.max(res,(R-L+1));\r\n            R++;\r\n        }\r\n        return res;\r\n    }\r\n}",
    "javascript": "// Runtime: 221 ms (Top 19.38%) | Memory: 56.90 MB (Top 49.18%)\r\n\r\nvar maxFrequency = function(nums, k) {\r\n// We sorted because as we are allowed only to increment the value & we try to increase the smaller el to some larger el\r\n    nums.sort((a,b)=>a-b);\r\n    \r\n    let left=0;\r\n    let max=Math.max(); // without any args, Math.max() is -Infinity\r\n    let curr=0;\r\n\t// I have used 'for loop' so rightPtr is 'i' here\r\n    for(let i=0;i<nums.length;i++){\r\n        curr+=nums[i];\r\n\t\t// decrement the winSize once the value required to convert could not be achieved even after utilizing K\r\n\t\t// (i-left+1) * nums[i] because we are converting every el upto that winSize by current el\r\n        while((i-left+1) * nums[i] > curr+k){\r\n            curr-=nums[left++]\r\n        }        \r\n        max = Math.max(max,i-left+1);\r\n    }\r\n    return max;\r\n};"
  }
}
