export default {
  "id": 719,
  "name": "Find K-th Smallest Pair Distance",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-k-th-smallest-pair-distance",
  "relativeDir": "F/Find K-th Smallest Pair Distance",
  "slug": "0719-find-k-th-smallest-pair-distance",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 32,
    "java": 24,
    "python": 16,
    "javascript": 20
  },
  "languages": {
    "cpp": "// Runtime: 17 ms (Top 76.81%) | Memory: 10.3 MB (Top 8.23%)\r\nclass Solution {\r\npublic:\r\n    int count(vector<int> &temp,int mid){\r\n        int i=0,j=0,n=temp.size();\r\n        int len=0;\r\n\r\n        while(i<n){\r\n            while(j<n && (temp[j]-temp[i])<=mid) j++;\r\n            len+=j-i-1;\r\n            i++;\r\n        }\r\n        return len;\r\n    }\r\n    int smallestDistancePair(vector<int>& nums, int k) {\r\n        int s=0,e=1e6;\r\n        int ans=0;\r\n        vector<int> temp=nums;\r\n        sort(temp.begin(),temp.end());\r\n        while(s<=e){\r\n            int mid=s+(e-s)/2;\r\n\r\n            if(count(temp,mid)>=k){\r\n                ans=mid;\r\n                e=mid-1;\r\n            }else {\r\n                s=mid+1;\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "from heapq import heappush, heappop, heapify\r\nclass Solution:\r\n    def smallestDistancePair(self, nums: List[int], k: int) -> int:\r\n        # pairs = list(combinations(nums, 2))\r\n        \r\n        maxHeap = []\r\n        heapify(maxHeap)\r\n        \r\n        for idx, val1 in enumerate(nums):\r\n            for val2 in nums[idx + 1:]:\r\n                pair = [val1, val2]\r\n                heappush(maxHeap, [-1*abs(pair[0] - pair[1]), pair])\r\n                if len(maxHeap) > k:\r\n                    heappop(maxHeap)\r\n        \r\n        return -1*maxHeap[0][0]",
    "java": "class Solution {\r\n    public int smallestDistancePair(int[] nums, int k) {\r\n        Arrays.sort(nums);\r\n        int low = 0, high = nums[nums.length-1] - nums[0];\r\n        \r\n        while(low<=high){\r\n            int mid = low + (high-low)/2;\r\n            if(noOfDistancesLessThan(mid,nums) >= k) high = mid - 1;\r\n            else low = mid + 1;\r\n        }\r\n        return low;\r\n    }\r\n    private int noOfDistancesLessThan(int dist,int[] nums){\r\n        int count = 0,i = 0, j = 0;\r\n        while(i<nums.length){\r\n            while(j<nums.length && nums[j]-nums[i]<=dist){  // sliding window\r\n                j++;\r\n            }\r\n            count += j-i-1;\r\n            i++;\r\n        }\r\n        return count;\r\n    }\r\n}",
    "javascript": "\r\nvar smallestDistancePair = function(nums, k) {    \r\n    nums.sort((a,b) => a - b);   \r\n    let left = 0, right = nums[nums.length-1] - nums[0], mid = null, total = 0;    \r\n    \r\n    while (left < right) {\r\n        mid = left + Math.floor((right - left) / 2);\r\n    \r\n        total = 0;\r\n        for (var i = 0, j = 1; i < nums.length - 1 && total <= k; i++) {\r\n            for ( ; j < nums.length && nums[j] - nums[i] <= mid; j++) {}\r\n\t\t\ttotal += j - i - 1; \r\n        }\r\n        \r\n        if (total >= k) {right = mid;}  \r\n\t\telse {left = mid+1;}\r\n    }    \r\n\t\r\n    return left;\r\n};"
  }
}
