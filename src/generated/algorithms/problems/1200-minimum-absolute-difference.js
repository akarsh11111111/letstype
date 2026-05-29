export default {
  "id": 1200,
  "name": "Minimum Absolute Difference",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-absolute-difference",
  "relativeDir": "M/Minimum Absolute Difference",
  "slug": "1200-minimum-absolute-difference",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 19,
    "java": 26,
    "python": 13,
    "javascript": 20
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<vector<int>> minimumAbsDifference(vector<int>& arr) {\r\n        sort(arr.begin(),arr.end());\r\n        int diff=INT_MAX;\r\n        for(int i=1;i<arr.size();i++){\r\n            diff=min(diff,abs(arr[i]-arr[i-1]));\r\n        }\r\n        vector<vector<int>>v;\r\n        for(int i=1;i<arr.size();i++){\r\n            if(abs(arr[i]-arr[i-1])==diff){\r\n                int a=min(arr[i],arr[i-1]);\r\n                int b=max(arr[i],arr[i-1]);\r\n                v.push_back({a,b});\r\n            }  \r\n        }\r\n        return v;\r\n    }\r\n};",
    "python": "# Runtime: 574 ms (Top 47.47%) | Memory: 28.9 MB (Top 58.47%)\r\nclass Solution:\r\n    def minimumAbsDifference(self, arr: List[int]) -> List[List[int]]:\r\n        arr.sort()\r\n        diff=float(inf)\r\n        for i in range(0,len(arr)-1):\r\n            if arr[i+1]-arr[i]<diff:\r\n                diff=arr[i+1]-arr[i]\r\n        lst=[]\r\n        for i in range(0,len(arr)-1):\r\n            if arr[i+1]-arr[i]==diff:\r\n                lst.append([arr[i],arr[i+1]])\r\n        return lst",
    "java": "// Runtime: 18 ms (Top 78.7%) | Memory: 55.94 MB (Top 56.9%)\r\n\r\nclass Solution {\r\n    public List<List<Integer>> minimumAbsDifference(int[] arr) {\r\n        List<List<Integer>> ans=new ArrayList<>();\r\n        Arrays.sort(arr);\r\n        int min=Integer.MAX_VALUE;\r\n        for(int i=0;i<arr.length-1;i++){\r\n            int diff=Math.abs(arr[i]-arr[i+1]);\r\n            if(diff<min)\r\n            {\r\n            min=diff;\r\n            }\r\n        }\r\n        for(int i=0;i<arr.length-1;i++){\r\n            int diff=Math.abs(arr[i]-arr[i+1]);\r\n            if(diff==min){\r\n                 List<Integer> pair=new ArrayList<>(2);\r\n                pair.add(arr[i]);\r\n                pair.add(arr[i+1]);\r\n                ans.add(pair);\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n}",
    "javascript": "// Runtime: 254 ms (Top 44.04%) | Memory: 53.4 MB (Top 97.11%)\r\n\r\nvar minimumAbsDifference = function(arr) {\r\n    arr.sort((a, b) => a - b)\r\n    let minDif = Infinity\r\n    let res = []\r\n\r\n    for (let i = 0; i < arr.length - 1; i++) {\r\n        let currDif = Math.abs(arr[i + 1] - arr[i])\r\n        if (currDif < minDif) minDif = currDif\r\n    }\r\n\r\n    for (let i = 0; i < arr.length - 1; i++) {\r\n        let dif = Math.abs(arr[i + 1] - arr[i])\r\n        if (dif === minDif) {\r\n            res.push([arr[i], arr[i + 1]])\r\n        }\r\n    }\r\n    return res\r\n};"
  }
}
