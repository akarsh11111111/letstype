export default {
  "id": 845,
  "name": "Longest Mountain in Array",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/longest-mountain-in-array",
  "relativeDir": "L/Longest Mountain in Array",
  "slug": "0845-longest-mountain-in-array",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 38,
    "java": 34,
    "python": 23,
    "javascript": 36
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int longestMountain(vector<int>& arr) {\r\n     vector<int> v;\r\n        for(int i=0;i<arr.size()-1;i++)\r\n        {\r\n            if(arr[i+1]>arr[i])v.push_back(1);\r\n            else if(arr[i+1]<arr[i])v.push_back(-1);\r\n            else \r\n                v.push_back(0);\r\n        }\r\n        int i=0;\r\n        int ans=0;\r\n        while(i<v.size())\r\n        {\r\n            int c1=0,c2=0;\r\n            while(i<v.size() and v[i]==1)\r\n            {\r\n                c1++;\r\n                i++;\r\n            }\r\n            while(i<v.size() and v[i]==-1)\r\n            {\r\n                c2++;\r\n                i++;\r\n            }\r\n            while(i<v.size() and v[i]==0)\r\n            {\r\n                i++;\r\n            }\r\n            if(c1!=0 and c2!=0)\r\n            {\r\n                ans=max(ans,c1+c2+1);\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def longestMountain(self, arr: List[int]) -> int:\r\n        if len(arr) < 3:\r\n            return 0\r\n        \r\n        max_up, max_down = [1 for _ in arr], [1 for _ in arr]\r\n        \r\n        for i, x in enumerate(arr):\r\n            if i == 0:\r\n                continue\r\n            if x > arr[i - 1]:\r\n                max_up[i] = max_up[i - 1] + 1\r\n            \r\n        for j, y in reversed(list(enumerate(arr))):\r\n            if j == len(arr) - 1:\r\n                continue\r\n            if y > arr[j + 1]:\r\n                max_down[j] = max_down[j + 1] + 1\r\n                \r\n        return max(\r\n            x + y - 1 if x > 1 and y > 1 else 0 \r\n            for x, y in zip(max_up, max_down)\r\n        )",
    "java": "// Runtime: 3 ms (Top 81.75%) | Memory: 52.8 MB (Top 24.19%)\r\nclass Solution {\r\n    public int longestMountain(int[] arr) {\r\n        if (arr.length < 3)\r\n            return 0;\r\n        int max = 0;\r\n        for (int i = 0; i < arr.length; i++) {\r\n            if (isPeak(arr, i)) {\r\n                int leftLength = left(arr, i);\r\n                int rightLength = right(arr, i);\r\n                max = Math.max(max, leftLength + rightLength + 1);\r\n            }\r\n        }\r\n        return max;\r\n    }\r\n\r\n    public int left(int[] arr, int i) {\r\n        int j = i - 1;\r\n        while (j >= 0 && arr[j] < arr[j + 1])\r\n            j--;\r\n        return i - (j + 1);\r\n    }\r\n\r\n    public int right(int[] arr, int i) {\r\n        int j = i + 1;\r\n        while (j < arr.length && arr[j - 1] > arr[j])\r\n            j++;\r\n        return j - (i + 1);\r\n    }\r\n\r\n    public boolean isPeak(int[] arr, int i) {\r\n        return i - 1 >= 0 && i + 1 < arr.length && arr[i - 1] < arr[i] && arr[i + 1] < arr[i];\r\n    }\r\n}",
    "javascript": "var longestMountain = function(arr) {\r\n    let len=arr.length;\r\n    let climbUp=false;\r\n    let climbDown=false;\r\n    let countUp=0;\r\n    let countDown=0;\r\n    let distance=0;\r\n    let max=0; \r\n    if(len<3){\r\n        return 0;\r\n    }\r\n    for(i=0;i<len;i++){\r\n        if(arr[i-1]<arr[i]){\r\n        countUp++;\r\n        climbUp=true;   \r\n        }else if(arr[i-1]>arr[i] && climbUp){\r\n        countDown++; \r\n        climbDown=true;\r\n        }\r\n        if((arr[i-1]>=arr[i] && arr[i]<=arr[i+1]) || (i==len-1 && climbDown==true)){\r\n            distance=countUp+countDown+1;\r\n            if(max<distance && climbUp && climbDown){\r\n                max=distance;\r\n            }\r\n            countUp=0;\r\n            countDown=0;\r\n            climbUp=false;\r\n            climbDown=false;\r\n        }\r\n        if(arr[i+1]==arr[i]){\r\n            climbUp=false;\r\n            climbDown=false;\r\n        }\r\n    }\r\n   return(max<3?0:max)\r\n};"
  }
}
