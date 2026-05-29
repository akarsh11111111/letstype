export default {
  "id": 1343,
  "name": "Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold",
  "relativeDir": "N/Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold",
  "slug": "1343-number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 19,
    "java": 15,
    "python": 23,
    "javascript": 22
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int numOfSubarrays(vector<int>& arr, int k, int threshold) {\r\n        int i=0;int j=0;int sum=0;int ans=0;\r\n        while(j<arr.size()){\r\n            sum+=arr[j];\r\n            if(j-i+1<k) j++;\r\n            else if(j-i+1==k){\r\n               if(sum/k>=threshold){\r\n                   ans++;\r\n               } \r\n                sum-=arr[i];\r\n                j++;\r\n                i++;\r\n            }  \r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def numOfSubarrays(self, nums: List[int], k: int, threshold: int) -> int:\r\n        currSum = 0\r\n        start = 0\r\n        end = 0\r\n        count = 0\r\n        \r\n        # run right pointer till end element\r\n        for end in range(len(nums)):\r\n            # update value to window\r\n            currSum += nums[end]\r\n            \r\n            # check if window size achieved\r\n            if (end - start + 1) == k:\r\n                # is average > target val\r\n                if (currSum // k) >= threshold:\r\n                    count += 1\r\n                # slide the window\r\n                currSum -= nums[start]\r\n                start += 1\r\n            \r\n            \r\n        return count",
    "java": "class Solution {\r\n    public int numOfSubarrays(int[] arr, int k, int threshold) {\r\n        int average=0,count=0,start=0,sum=0;       \r\n        for(int i=0;i<arr.length;i++){\r\n            sum+=arr[i];\r\n            if(i>=k-1){\r\n                average=sum/k;\r\n                if(average>=threshold) count++;\r\n                sum-=arr[start];          \r\n                start++;   \r\n            }          \r\n        }\r\n        return count;  \r\n    }\r\n}",
    "javascript": "var numOfSubarrays = function(arr, k, threshold) {\r\n    let total = 0;\r\n    let left = 0;\r\n    let right = k;\r\n    // get initial sum of numbers in first sub array range, by summing left -> right\r\n    let sum = arr.slice(left, right).reduce((a, b) => a + b, 0);\r\n    while (right <= arr.length) {\r\n        // move through the array as a sliding window\r\n        if (left > 0) {\r\n            // on each iteration of the loop, subtract the val that has fallen out of the window, \r\n            // and add the new value that has entered the window\r\n            sum -= arr[left - 1];\r\n            sum += arr[right - 1];\r\n        }\r\n        if (sum / k >= threshold) {\r\n            total++;\r\n        }\r\n        left++;\r\n        right++;\r\n    }\r\n    return total;\r\n};"
  }
}
