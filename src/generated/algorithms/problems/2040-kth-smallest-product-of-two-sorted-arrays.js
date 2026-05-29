export default {
  "id": 2040,
  "name": "Kth Smallest Product of Two Sorted Arrays",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/kth-smallest-product-of-two-sorted-arrays",
  "relativeDir": "K/Kth Smallest Product of Two Sorted Arrays",
  "slug": "2040-kth-smallest-product-of-two-sorted-arrays",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 69,
    "java": 40,
    "python": 9
  },
  "languages": {
    "cpp": "// Runtime: 2239 ms (Top 23.46%) | Memory: 94.1 MB (Top 82.30%)\r\nclass Solution {\r\npublic:\r\n    bool check(long long midval,vector<int>& nums1, vector<int>& nums2, long long k){\r\n        long long cnt=0;\r\n        for(int i=0;i<nums1.size();i++)\r\n        {\r\n            long long val=nums1[i];\r\n\r\n            //If val == 0, product of val and each element in nums2 will be 0. And if midval>=0, then because all\r\n            //products are 0, all products will be smaller or equal to midval. So we can add all products in the answer\r\n            if(val==0 and midval>=0)\r\n                cnt+=nums2.size();\r\n\r\n            else if(val>0)\r\n                cnt+=findmaxIndex(nums2,val,midval);\r\n\r\n            else if(val<0)\r\n                cnt+=findminIndex(nums2,val,midval);\r\n        }\r\n        return cnt>=k;\r\n    }\r\n\r\n    int findmaxIndex(vector<int>&nums2 , long long val , long long midval)\r\n    {\r\n        int l = 0 , r = nums2.size()-1 , res= -1;\r\n        while(l<=r)\r\n        {\r\n            long long mid = (l+r)/2;\r\n            if(val*nums2[mid]<=midval)\r\n            {\r\n                res=mid;\r\n                l=mid+1;\r\n            }\r\n            else r=mid-1;\r\n        }\r\n        return res+1;\r\n    }\r\n\r\n    int findminIndex(vector<int>&nums2 , long long val , long long midval)\r\n    {\r\n        int l = 0 , r = nums2.size()-1 , res= r+1;\r\n        while(l<=r)\r\n        {\r\n            long long mid = (l+r)/2;\r\n            if(val*nums2[mid]<=midval)\r\n            {\r\n                res=mid;\r\n                r=mid-1;\r\n            }\r\n            else l=mid+1;\r\n        }\r\n        return nums2.size()-res;\r\n    }\r\n\r\n    long long kthSmallestProduct(vector<int>& nums1, vector<int>& nums2, long long k) {\r\n        long long l=-1e10,r=1e10,res=-1;\r\n        while(l<=r){\r\n            long long mid = (l+r)/2;\r\n            // cout<<mid<<endl;\r\n            if(check(mid,nums1,nums2,k)) {\r\n                res=mid;\r\n                r=mid-1;\r\n            }\r\n            else l=mid+1;\r\n        }\r\n        return res;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def kthSmallestProduct(self, nums1: List[int], nums2: List[int], k: int) -> int:\r\n        result = []\r\n        for i in range(len(nums1)):\r\n            for j in range(len(nums2)):\r\n                temp = nums1[i]*nums2[j]\r\n                result.append(temp)\r\n        result.sort()\r\n        return result[k-1]",
    "java": "// Runtime: 740 ms (Top 67.46%) | Memory: 89.4 MB (Top 63.10%)\r\nclass Solution {\r\n    static long INF = (long) 1e10;\r\n    public long kthSmallestProduct(int[] nums1, int[] nums2, long k) {\r\n        int m = nums1.length, n = nums2.length;\r\n        long lo = -INF - 1, hi = INF + 1;\r\n        while (lo < hi) {\r\n            long mid = lo + ((hi - lo) >> 1), cnt = 0;\r\n            for (int i : nums1) {\r\n                if (0 <= i) {\r\n                    int l = 0, r = n - 1, p = 0;\r\n                    while (l <= r) {\r\n                        int c = l + ((r - l) >> 1);\r\n                        long mul = i * (long) nums2[c];\r\n                        if (mul <= mid) {\r\n                            p = c + 1;\r\n                            l = c + 1;\r\n                        } else r = c - 1;\r\n                    }\r\n                    cnt += p;\r\n                } else {\r\n                    int l = 0, r = n - 1, p = 0;\r\n                    while (l <= r) {\r\n                        int c = l + ((r - l) >> 1);\r\n                        long mul = i * (long) nums2[c];\r\n                        if (mul <= mid) {\r\n                            p = n - c;\r\n                            r = c - 1;\r\n                        } else l = c + 1;\r\n                    }\r\n                    cnt += p;\r\n                }\r\n            }\r\n            if (cnt >= k) {\r\n                hi = mid;\r\n            } else lo = mid + 1L;\r\n        }\r\n        return lo;\r\n    }\r\n}"
  }
}
