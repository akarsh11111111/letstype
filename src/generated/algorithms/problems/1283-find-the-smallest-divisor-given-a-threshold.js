export default {
  "id": 1283,
  "name": "Find the Smallest Divisor Given a Threshold",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold",
  "relativeDir": "F/Find the Smallest Divisor Given a Threshold",
  "slug": "1283-find-the-smallest-divisor-given-a-threshold",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 25,
    "java": 22,
    "python": 17,
    "javascript": 17
  },
  "languages": {
    "cpp": "// Runtime: 62 ms (Top 71.27%) | Memory: 22.3 MB (Top 64.84%)\r\n\r\nclass Solution {\r\npublic:\r\n    int smallestDivisor(vector<int>& nums, int threshold) {\r\n        int l=1,r=0;\r\n        for(int n:nums)r=max(r,n);\r\n\r\n        int mid,s=0;\r\n        while(l<r){\r\n            s=0;\r\n            mid = l+(r-l)/2;\r\n            for(int n:nums){\r\n                s+= n/mid + (n%mid !=0);\r\n            }\r\n            if(s<= threshold){\r\n                r=mid;\r\n            }else{\r\n                l=mid+1;\r\n            }\r\n\r\n        }\r\n        return r;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def helper(self,nums,m):\r\n        Sum = 0\r\n        for n in nums:\r\n            Sum += math.ceil(n/m)\r\n        return Sum\r\n    \r\n    def smallestDivisor(self, nums: List[int], threshold: int) -> int:\r\n        l,r = 1, max(nums)\r\n        while l < r:\r\n            mid = (l+r)//2\r\n            Sum = self.helper(nums,mid)\r\n            if Sum > threshold:\r\n                l = mid + 1\r\n            else:\r\n                r = mid     \r\n        return r",
    "java": "// Runtime: 6 ms (Top 97.4%) | Memory: 46.77 MB (Top 83.7%)\r\n\r\nclass Solution {\r\n    public int smallestDivisor(int[] a, int h) {\r\n        int l = 1, r = a[0];\r\n        for (int x : a) if (x > r) r = x;\r\n\r\n        while (l < r) {\r\n            int m = l + (r-l)/2;\r\n            if (valid(a, m, h)) r = m;\r\n            else l = m + 1;\r\n        }\r\n\r\n        return l;\r\n    }\r\n\r\n    private boolean valid(int[] a, int m, int h) {\r\n        for (int x : a)\r\n            if ((h -= (x + m-1)/m) < 0) return false;\r\n        return true;\r\n    }\r\n}",
    "javascript": "var smallestDivisor = function(nums, threshold) {\r\n    let left = 1;\r\n    let right = nums.reduce((r, x) => Math.max(r, x), 0);\r\n    \r\n    while (left <= right) {\r\n        const div = Math.floor((left + right) / 2);\r\n        const sum = nums.reduce((r, x) => r + Math.ceil(x / div), 0);\r\n        \r\n        if (sum <= threshold) {\r\n            right = div - 1;\r\n        } else {\r\n            left = div + 1;\r\n        }\r\n    }\r\n    \r\n    return left;\r\n};"
  }
}
