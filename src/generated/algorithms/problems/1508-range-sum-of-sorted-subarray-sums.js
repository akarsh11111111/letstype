export default {
  "id": 1508,
  "name": "Range Sum of Sorted Subarray Sums",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/range-sum-of-sorted-subarray-sums",
  "relativeDir": "R/Range Sum of Sorted Subarray Sums",
  "slug": "1508-range-sum-of-sorted-subarray-sums",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 27,
    "java": 21,
    "python": 13,
    "javascript": 94
  },
  "languages": {
    "cpp": "class Solution \r\n{\r\npublic:\r\n    int rangeSum(vector<int>& nums, int n, int left, int right) \r\n    {\r\n        const int m= 1e9+7; // To return ans % m\r\n        int ans=0;  // Final Answer\r\n        int k=1;  // For 1 based indexing\r\n        int size= (n*(n+1))/2;  // We can form n(n+1)/2 subarrays for an array of size n\r\n        vector<int> subsum(size+1); \r\n        for(int i=0;i<n;i++)\r\n        {\r\n            int sum=0;\r\n            for(int j=i;j<n;j++)\r\n            {\r\n                sum+=nums[j];     // Sum of the subarray\r\n                subsum[k++]=sum;   // Inserting the prefix sum at the index\r\n            }\r\n        }\r\n        sort(subsum.begin(),subsum.end()); // Sorting the array\r\n        for(int i=left; i<=right; i++)\r\n        {\r\n            ans=(ans+subsum[i])%m;   // ans modulo 10^9 +7\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 276 ms (Top 95.45%) | Memory: 37.2 MB (Top 59.09%)\r\nfrom itertools import accumulate\r\n\r\nclass Solution:\r\n    def rangeSum(self, nums, n, left, right):\r\n        acc = []\r\n\r\n        for i in range(n):\r\n            acc.extend(accumulate(nums[i:]))\r\n\r\n        acc.sort()\r\n\r\n        return sum(acc[left - 1:right]) % (10**9 + 7)",
    "java": "class Solution {\r\n    private static int mod=(int)1e9+7;\r\n    public int rangeSum(int[] nums, int n, int left, int right) {\r\n        \r\n        PriorityQueue<int[]> pq=new PriorityQueue<>((n1,n2)->n1[1]-n2[1]);\r\n        \r\n        for(int i=0;i<n;i++) pq.add(new int[]{i,nums[i]});\r\n        \r\n        int ans=0;\r\n        for(int i=1;i<=right;i++){\r\n            int[] k=pq.remove();\r\n            if(i>=left){\r\n                ans=(ans+k[1])%mod;\r\n            }\r\n            if(k[0]+1<n){\r\n                pq.add(new int[]{k[0]+1,k[1]+nums[k[0]+1]});\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n}",
    "javascript": "// Runtime: 64 ms (Top 100.0%) | Memory: 42.70 MB (Top 85.71%)\r\n\r\n/**\r\n * @param {number[]} nums\r\n * @param {number} n\r\n * @param {number} left\r\n * @param {number} right\r\n * @return {number}\r\n */\r\nvar rangeSum = function(nums, n, left, right) {\r\n  var len = nums.length\r\n\r\n  var prefix = [nums[0]]\r\n  function buildPrefix() {\r\n    for (var i = 1; i < len; i++) {\r\n      prefix[i] = prefix[i - 1] + nums[i]\r\n    }\r\n  }\r\n\r\n  buildPrefix()\r\n\r\n  function countUnderSum(sum, cb) {\r\n    var left = 0\r\n    var count = 0\r\n    var right = 0\r\n\r\n    while (right < len) {\r\n      let wholeSubSum = prefix[right] - (left === 0 ? 0 : prefix[left - 1])\r\n      if (wholeSubSum <= sum) {\r\n        count += right - left + 1\r\n        cb && cb(left, right)\r\n      } else {\r\n        while (\r\n          wholeSubSum > sum\r\n        ) {\r\n          if (left <= right) {\r\n            wholeSubSum -= nums[left]\r\n            left++\r\n          } else {\r\n            break\r\n          }\r\n        }\r\n        count += right - left + 1\r\n        cb && cb(left, right)\r\n      }\r\n      right++\r\n    }\r\n\r\n    return count\r\n    \r\n  }\r\n\r\n  function calSubArraySumByRange(i, j) {\r\n    var windowLen = j - i + 1\r\n    var sum = 0\r\n    while (windowLen > 0) {\r\n      sum += nums[j] * windowLen\r\n      windowLen--\r\n      j--\r\n    }\r\n    return sum\r\n  }\r\n\r\n  function calSum(count) {\r\n    var lowSum = findTheLowestSumThatSatisfyTheSpecficCount(count)\r\n    var sum = 0 \r\n    countUnderSum(lowSum, (i, j) => {\r\n      sum += calSubArraySumByRange(i, j)\r\n    })\r\n\r\n    //This line is used to deal with some same value cases\r\n    //Such as if the low value is 9, and we have 9 subarrays of which low value \r\n    //is 9. But the count is 8, so we must remove one of it.\r\n    return sum - (countUnderSum(lowSum) - count) * lowSum\r\n  }\r\n\r\n  function findTheLowestSumThatSatisfyTheSpecficCount(count) {\r\n    var l = 0\r\n    var r = prefix[len - 1]\r\n    while (l < r) {\r\n      var mid = Math.floor((l + r) / 2)\r\n      if (countUnderSum(mid) < count) {\r\n        l = mid + 1\r\n      } else {\r\n        r = mid\r\n      }\r\n    }\r\n\r\n    return l\r\n  }\r\n\r\n  return (calSum(right) - calSum(left - 1)) % (Math.pow(10, 9) + 7)\r\n\r\n};"
  }
}
