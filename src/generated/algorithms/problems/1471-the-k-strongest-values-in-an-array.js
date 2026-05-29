export default {
  "id": 1471,
  "name": "The k Strongest Values in an Array",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/the-k-strongest-values-in-an-array",
  "relativeDir": "T/The k Strongest Values in an Array",
  "slug": "1471-the-k-strongest-values-in-an-array",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 22,
    "java": 25,
    "python": 16,
    "javascript": 26
  },
  "languages": {
    "cpp": "class Solution \r\n{\r\npublic:\r\n    vector<int> getStrongest(vector<int>& arr, int k) \r\n    {\r\n        int n=arr.size();\r\n        sort(arr.begin(),arr.end());\r\n        int m=arr[(n-1)/2];\r\n        priority_queue<pair<int,int>> pq;\r\n        for(auto it: arr)\r\n        {\r\n            pq.push({abs(it-m),it});\r\n        }\r\n        vector<int> ans;\r\n        while(k-- && !pq.empty())\r\n        {\r\n            ans.push_back(pq.top().second);\r\n            pq.pop();\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "// Runtime: 708 ms (Top 81.36%) | Memory: 29.90 MB (Top 95.48%)\r\n\r\nclass Solution:\r\n    def getStrongest(self, arr: List[int], k: int) -> List[int]:\r\n        arr.sort()\r\n        mid = arr[(len(arr)-1)//2]\r\n        ans = []\r\n        l ,r = 0, len(arr)-1\r\n        while(l <= r):\r\n            if abs(arr[l] - mid) > abs(arr[r]-mid)  :\r\n                ans.append(arr[l])\r\n                l+=1\r\n            else:\r\n                ans.append(arr[r])\r\n                r-=1\r\n        return ans[:k]",
    "java": "// Runtime: 55 ms (Top 48.30%) | Memory: 81.3 MB (Top 78.98%)\r\nclass Solution {\r\n    public int[] getStrongest(int[] arr, int k) {\r\n        int[] result = new int[k];\r\n        int n = arr.length, left = 0, right = n - 1, idx = 0;\r\n        Arrays.sort(arr);\r\n        int median = arr[(n - 1) / 2];\r\n        while (left <= right) {\r\n            int diff_l = Math.abs(arr[left] - median);\r\n            int diff_r = Math.abs(arr[right] - median);\r\n\r\n            if (diff_r > diff_l)\r\n                result[idx++] = arr[right--];\r\n            else if (diff_l > diff_r)\r\n                result[idx++] = arr[left++];\r\n            else if (arr[right] > arr[left])\r\n                result[idx++] = arr[right--];\r\n            else\r\n                result[idx++] = arr[left++];\r\n            if (idx == k)\r\n                break;\r\n        }\r\n        return result;\r\n    }\r\n}",
    "javascript": "// Runtime: 645 ms (Top 8.33%) | Memory: 65.4 MB (Top 83.33%)\r\nvar getStrongest = function(arr, k) {\r\n    // sort array so we can easily find median\r\n    const sorted = arr.sort((a,b) => a-b)\r\n    // get index of median\r\n    const medianIndex = Math.floor(((sorted.length-1)/2))\r\n    // get median\r\n    const median = sorted[medianIndex]\r\n\r\n    // custom sort function following the parameters given us in the description\r\n    const compareFunction = (a, b) => {\r\n        if (Math.abs(a-median) > Math.abs(b-median)) {\r\n            return 1\r\n        }\r\n        else if (Math.abs(a-median) === Math.abs(b-median) && a > b) {\r\n            return 1\r\n        } else {\r\n            return -1\r\n        }\r\n    }\r\n\r\n    // sort array using our custom sort function\r\n    const strongest = arr.sort(compareFunction).reverse().slice(0,k);\r\n\r\n    return strongest;\r\n};"
  }
}
