export default {
  "id": 1577,
  "name": "Number of Ways Where Square of Number Is Equal to Product of Two Numbers",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/number-of-ways-where-square-of-number-is-equal-to-product-of-two-numbers",
  "relativeDir": "N/Number of Ways Where Square of Number Is Equal to Product of Two Numbers",
  "slug": "1577-number-of-ways-where-square-of-number-is-equal-to-product-of-two-numbers",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 28,
    "java": 45,
    "python": 21,
    "javascript": 36
  },
  "languages": {
    "cpp": "// Runtime: 255 ms (Top 49.82%) | Memory: 34.9 MB (Top 21.03%)\r\nclass Solution {\r\npublic:\r\n    int numTriplets(vector<int>& nums1, vector<int>& nums2) {\r\n\r\n        unordered_map<long, int> m1, m2;\r\n        for(int i : nums1) m1[(long long)i*i]++;\r\n        for(int i : nums2) m2[(long long)i*i]++;\r\n\r\n        int ans = 0;\r\n\r\n        for(int i=0; i<nums2.size()-1; i++){\r\n            for(int j=i+1; j<nums2.size(); j++){\r\n                if(m1[(long long)nums2[i] * nums2[j]]){\r\n                    ans += m1[(long long)nums2[i] * nums2[j]];\r\n                }\r\n            }\r\n        }\r\n        for(int i=0; i<nums1.size()-1; i++){\r\n            for(int j=i+1; j<nums1.size(); j++){\r\n                if(m2[(long long)nums1[i] * nums1[j]]){\r\n                    ans += m2[(long long)nums1[i] * nums1[j]];\r\n                }\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 753 ms (Top 50.00%) | Memory: 14 MB (Top 47.37%)\r\nclass Solution:\r\n    def numTriplets(self, nums1: List[int], nums2: List[int]) -> int:\r\n        sqr1, sqr2 = defaultdict(int), defaultdict(int)\r\n        m, n = len(nums1), len(nums2)\r\n        for i in range(m):\r\n            sqr1[nums1[i]**2] += 1\r\n        for j in range(n):\r\n            sqr2[nums2[j]**2] += 1\r\n\r\n        res = 0\r\n        for i in range(m-1):\r\n            for j in range(i+1, m):\r\n                if nums1[i]*nums1[j] in sqr2:\r\n                    res += sqr2[nums1[i]*nums1[j]]\r\n\r\n        for i in range(n-1):\r\n            for j in range(i+1, n):\r\n                if nums2[i]*nums2[j] in sqr1:\r\n                    res += sqr1[nums2[i]*nums2[j]]\r\n        return res",
    "java": "// Runtime: 19 ms (Top 92.55%) | Memory: 42.4 MB (Top 88.30%)\r\nclass Solution {\r\n    public int numTriplets(int[] nums1, int[] nums2) {\r\n        Arrays.sort(nums1);\r\n        Arrays.sort(nums2);\r\n        return count(nums1 , nums2) + count(nums2 , nums1);\r\n    }\r\n\r\n    public int count(int a[] , int b[]){\r\n        int n = a.length;\r\n        int m = b.length;\r\n        int count = 0;\r\n        for(int i=0;i<n;i++){\r\n            long x = (long)a[i]*a[i];\r\n            int j = 0;\r\n            int k = m-1;\r\n            while(j<k){\r\n                long prod = (long)b[j]*b[k];\r\n                if(prod<x)\r\n                    j++;\r\n                else if(prod>x)\r\n                    k--;\r\n                else if(b[j] != b[k]){\r\n                    int jNew = j;\r\n                    int kNew = k;\r\n\r\n                    while(b[j] == b[jNew])\r\n                        jNew++;\r\n                    while(b[k] == b[kNew])\r\n                        kNew--;\r\n                    count += (jNew-j)*(k-kNew);\r\n                    j = jNew;\r\n                    k = kNew;\r\n                }\r\n                else{\r\n                    int q = k-j+1;\r\n                    count += (q)*(q-1)/2;\r\n                    break;\r\n                }\r\n            }\r\n        }\r\n        return count;\r\n    }\r\n\r\n}",
    "javascript": "// Runtime: 355 ms (Top 47.37%) | Memory: 61.1 MB (Top 47.37%)\r\nvar numTriplets = function(nums1, nums2) {\r\n    const nm1 = new Map(), nm2 = new Map();\r\n    const n = nums1.length, m = nums2.length;\r\n    for(let i = 0; i < n; i++) {\r\n        for(let j = i + 1; j < n; j++) {\r\n            const product = nums1[i] * nums1[j];\r\n            if(!nm1.has(product)) nm1.set(product, 0);\r\n            const arr = nm1.get(product);\r\n            nm1.set(product, arr + 1);\r\n        }\r\n    }\r\n    for(let i = 0; i < m; i++) {\r\n        for(let j = i + 1; j < m; j++) {\r\n            const product = nums2[i] * nums2[j];\r\n            if(!nm2.has(product)) nm2.set(product, 0);\r\n            const arr = nm2.get(product);\r\n            nm2.set(product, arr + 1);\r\n        }\r\n    }\r\n    let ans = 0;\r\n\r\n    for(let num of nums1) {\r\n        const sq = num * num;\r\n        if(nm2.has(sq)) {\r\n            ans += nm2.get(sq);\r\n        }\r\n    }\r\n    for(let num of nums2) {\r\n        const sq = num * num;\r\n        if(nm1.has(sq)) {\r\n            ans += nm1.get(sq);\r\n        }\r\n    }\r\n    return ans;\r\n};"
  }
}
