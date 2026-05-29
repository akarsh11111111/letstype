export default {
  "id": 1539,
  "name": "Kth Missing Positive Number",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/kth-missing-positive-number",
  "relativeDir": "K/Kth Missing Positive Number",
  "slug": "1539-kth-missing-positive-number",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 20,
    "java": 16,
    "python": 11,
    "javascript": 8
  },
  "languages": {
    "cpp": "// Runtime: 3 ms (Top 79.43%) | Memory: 9.90 MB (Top 63.69%)\r\n\r\nclass Solution {\r\npublic:\r\n    int findKthPositive(vector<int>& arr, int k) \r\n    {\r\n        int n=arr.size();\r\n        int low=0,high=n-1;\r\n        while(low<=high)\r\n        {\r\n            int mid=(high-low)/2+low;\r\n            int x=arr[mid]-mid-1;//will give no. of missing elements\r\n            if(x>=k)\r\n            high=mid-1;\r\n            else\r\n            low=mid+1;\r\n        }\r\n        return k+low;   \r\n    }\r\n};",
    "python": "# Runtime: 121 ms (Top 20.23%) | Memory: 14 MB (Top 53.50%)\r\nclass Solution:\r\n    def findKthPositive(self, arr: List[int], k: int) -> int:\r\n        arr = set(arr)\r\n        i = 0\r\n        missed = 0\r\n        while missed != k:\r\n            i += 1\r\n            if i not in arr:\r\n                missed += 1\r\n        return i",
    "java": "class Solution {\r\n    public int findKthPositive(int[] arr, int k) {\r\n        if(arr[0] > k) {\r\n            return k;\r\n        }\r\n        \r\n        for(int i=0; i<arr.length; i++) {\r\n            if(arr[i] <= k) {\r\n                k++;\r\n            }else {\r\n                break;\r\n            }\r\n        }\r\n        return k;\r\n    }\r\n}",
    "javascript": "var findKthPositive = function(arr, k) {\r\n    let newArr = [];\r\n    for(let i=0,j=1; j<=arr.length+k; j++){\r\n        arr[i]!=j?newArr.push(j):i++;\r\n    }\r\n    return newArr[k-1]; \r\n    \r\n};"
  }
}
