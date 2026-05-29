export default {
  "id": 1574,
  "name": "Shortest Subarray to be Removed to Make Array Sorted",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/shortest-subarray-to-be-removed-to-make-array-sorted",
  "relativeDir": "S/Shortest Subarray to be Removed to Make Array Sorted",
  "slug": "1574-shortest-subarray-to-be-removed-to-make-array-sorted",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 41,
    "java": 23,
    "python": 23,
    "javascript": 48
  },
  "languages": {
    "cpp": "// Runtime: 286 ms (Top 6.53%) | Memory: 72.3 MB (Top 5.60%)\r\n\r\n// itne me hi thakk gaye?\r\nclass Solution {\r\npublic:\r\n    bool ok(int &size, vector<int> &pref, vector<int> &suff, vector<int> &arr, int &n) {\r\n        for(int start=0; start<=n-size; start++) {\r\n            int end = start + size - 1;\r\n            int left = (start <= 0) ? 0 : pref[start-1];\r\n            int right = (end >= n-1) ? 0 : suff[end+1];\r\n            int le = (start <= 0) ? -1e9+2 : arr[start-1];\r\n            int re = (end >= n-1) ? 1e9+2 : arr[end+1];\r\n            if (left + right == n-size && le <= re) {\r\n                return true;\r\n            }\r\n        }\r\n        return false;\r\n    }\r\n    int findLengthOfShortestSubarray(vector<int>& arr) {\r\n        int n = arr.size();\r\n        if (!n || n==1) return 0;\r\n        vector<int> pref(n, 1);\r\n        vector<int> suff(n, 1);\r\n        for(int i=1; i<n; i++) {\r\n            if (arr[i] >= arr[i-1]) pref[i] = pref[i-1]+1;\r\n        }\r\n        for(int i=n-2; i>=0; i--) {\r\n            if (arr[i] <= arr[i+1]) suff[i] = suff[i+1]+1;\r\n        }\r\n        int low = 0;\r\n        int high = n-1;\r\n        while(low < high) {\r\n            int mid = (low + high)/2;\r\n            if(ok(mid, pref, suff, arr, n)) high = mid;\r\n            else low = mid+1;\r\n            if(high - low == 1) break;\r\n        }\r\n        if (ok(low, pref, suff, arr, n)) return low;\r\n        return high;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def findLengthOfShortestSubarray(self, arr: List[int]) -> int:\r\n        n = len(arr)\r\n        i = 0\r\n        while i < n-1 and arr[i+1] >= arr[i]:\r\n            i += 1\r\n        \r\n        if i == n-1:\r\n            return 0\r\n        \r\n        j = n-1\r\n        while j >= 0 and arr[j-1] <= arr[j]:\r\n            j -= 1\r\n        \r\n        ans = min(n, n-i-1, j)\r\n        \r\n        for l in range(i+1):\r\n            r = j\r\n            while r < n and arr[r] < arr[l]:\r\n                r += 1\r\n            ans = min(ans, r-l-1)\r\n        \r\n        return ans",
    "java": "class Solution {\r\n    public int findLengthOfShortestSubarray(int[] arr) {\r\n        int firstLast=0,lastFirst=arr.length-1;\r\n        for(;firstLast<arr.length-1;firstLast++){\r\n            if(arr[firstLast]>arr[firstLast+1]) break;\r\n        }\r\n\t\t//Base case for a non-decreasing sequence\r\n        if(firstLast==arr.length-1) return 0;\r\n        for( ;lastFirst>0;lastFirst--){\r\n            if(arr[lastFirst]<arr[lastFirst-1]) break;\r\n        }\r\n\t\t//Possibilities 1 or 2 as mentioned above\r\n        int minLength=Math.min(arr.length-firstLast-1,lastFirst);\r\n        for(;firstLast>=0;firstLast--){\r\n            for(int i=lastFirst;i<arr.length;i++){\r\n                if(arr[firstLast]>arr[i]) continue;\r\n                minLength = Math.min(minLength,i-firstLast-1);\r\n                break;\r\n            }\r\n        }\r\n        return minLength;\r\n    }\r\n}",
    "javascript": "var findLengthOfShortestSubarray = function(arr) {\r\n    const n = arr.length;\r\n    \r\n    if (n <= 1) {\r\n        return 0;\r\n    }\r\n    \r\n    let prefix = 1;\r\n    \r\n    while (prefix < n) {\r\n        if (arr[prefix - 1] <= arr[prefix]) {\r\n            prefix++;\r\n        } else {\r\n            break;\r\n        }\r\n    }\r\n    \r\n    if (prefix === n) {\r\n        return 0;\r\n    }\r\n    \r\n    let suffix = 1;\r\n    \r\n    while (suffix < n) {\r\n        const i = n - 1 - suffix;\r\n        \r\n        if (arr[i] <= arr[i + 1]) {\r\n            suffix++;\r\n        } else {\r\n            break;\r\n        }\r\n    }\r\n\r\n    let res = Math.min(n - prefix, n - suffix);\r\n    let left = 0;\r\n    let right = n - suffix;\r\n\r\n    while (left < prefix && right < n) {\r\n        if (arr[left] <= arr[right]) {\r\n            res = Math.min(res, right - left - 1);\r\n            left++;\r\n        } else {\r\n            right++;\r\n        }\r\n    }\r\n\r\n    return res;\r\n};"
  }
}
