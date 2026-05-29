export default {
  "id": 1053,
  "name": "Previous Permutation With One Swap",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/previous-permutation-with-one-swap",
  "relativeDir": "P/Previous Permutation With One Swap",
  "slug": "1053-previous-permutation-with-one-swap",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 17,
    "java": 27,
    "python": 21,
    "javascript": 25
  },
  "languages": {
    "cpp": "// Runtime: 18 ms (Top 81.73%) | Memory: 25.20 MB (Top 23.35%)\r\n\r\nclass Solution {\r\npublic:\r\n    vector<int> prevPermOpt1(vector<int>& arr) {\r\n        int n = arr.size();\r\n        int c1 = n-2, c2 = n-1;\r\n        while(c1>=0 && arr[c1]<=arr[c1+1])\r\n            c1--;\r\n        if(c1<0)\r\n            return arr;\r\n        while(arr[c2] >= arr[c1] || c2>0 && arr[c2]==arr[c2-1])\r\n            c2--;\r\n        swap(arr[c1], arr[c2]);\r\n        return arr;\r\n    }\r\n};",
    "python": "# Runtime: 486 ms (Top 14.08%) | Memory: 15.3 MB (Top 47.61%)\r\nclass Solution:\r\n\r\n    def find_max(self, i, a, n):\r\n        maxs = i+1\r\n        for j in range(n-1, i, -1):\r\n            # if only j is greater than max and smaller than first descending element\r\n            if(a[maxs] <= a[j] and a[j] < a[i]):\r\n                maxs = j\r\n        # Swap\r\n        a[i], a[maxs] = a[maxs], a[i]\r\n        return a\r\n\r\n    def prevPermOpt1(self, arr):\r\n        n = len(arr)\r\n        for i in range(n-1, 0, -1):\r\n            if(arr[i] < arr[i-1]):\r\n                # sending the first descending element from right to max_function\r\n                arr = self.find_max(i-1, arr, n)\r\n                break\r\n        return arr",
    "java": "class Solution {\r\n    public int[] prevPermOpt1(int[] arr) {\r\n        int n=arr.length;\r\n        int small=arr[n-1];\r\n        int prev=arr[n-1];\r\n        for(int i=n-2;i>=0;i--){\r\n            if(arr[i]<=prev){\r\n                prev=arr[i];\r\n            }\r\n            else{\r\n                int indte=i;\r\n                int te=0;\r\n                    for(int j=i+1;j<n;j++){\r\n                        if(arr[j]<arr[i]&&arr[j]>te){\r\n                            te=arr[j];\r\n                            indte=j;\r\n                        }\r\n                }\r\n                int tem=arr[indte];\r\n                arr[indte]=arr[i];\r\n                arr[i]=tem;\r\n                return arr;\r\n            }\r\n        }\r\n        return arr;\r\n    }\r\n}",
    "javascript": "var prevPermOpt1 = function(arr) {\r\n    const n = arr.length;\r\n    let i = n - 1;\r\n    \r\n    while (i > 0 && arr[i] >= arr[i - 1]) i--;\r\n    \r\n    if (i === 0) return arr;\r\n\r\n    const swapIndex = i - 1;\r\n    const swapDigit = arr[swapIndex];\r\n    \r\n    let maxIndex = i;\r\n    i = n - 1;\r\n    \r\n    while (swapIndex < i) {\r\n        const currDigit = arr[i];\r\n        \r\n        if (currDigit < swapDigit && currDigit >= arr[maxIndex]) maxIndex = i;\r\n        i--;\r\n    }\r\n\r\n    [arr[maxIndex], arr[swapIndex]] = [arr[swapIndex], arr[maxIndex]];\r\n    \r\n    return arr; \r\n};"
  }
}
