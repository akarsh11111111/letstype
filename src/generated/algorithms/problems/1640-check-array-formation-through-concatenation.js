export default {
  "id": 1640,
  "name": "Check Array Formation Through Concatenation",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/check-array-formation-through-concatenation",
  "relativeDir": "C/Check Array Formation Through Concatenation",
  "slug": "1640-check-array-formation-through-concatenation",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 15,
    "java": 21,
    "python": 9,
    "javascript": 10
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool canFormArray(vector<int>& arr, vector<vector<int>>& pieces) {\r\n        map<int,vector<int>> mp; \r\n        // map the 1st element in pieces[i] to pieces[i]\r\n        for(auto p:pieces) \r\n            mp[p[0]] = p;\r\n        vector<int> result;\r\n        for(auto a:arr) {\r\n            if(mp.find(a)!=mp.end()) \r\n                result.insert(result.end(),mp[a].begin(),mp[a].end());\r\n        }\r\n        return result ==arr;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def canFormArray(self, arr: List[int], pieces: List[List[int]]) -> bool:\r\n        keys, ans = {}, []\r\n        for piece in pieces:\r\n            keys[piece[0]] = piece\r\n        for a in arr:\r\n            if a in keys:\r\n                ans.extend(keys[a])\r\n        return ''.join(map(str, arr)) == ''.join(map(str, ans))",
    "java": "class Solution {\r\n    public boolean canFormArray(int[] arr, int[][] pieces) {\r\n        HashMap<Integer,int[]> hm = new HashMap();\r\n        for(int[] list:pieces)\r\n            hm.put(list[0],list);\r\n        \r\n        int index = 0;\r\n        while(index<arr.length){\r\n            if(!hm.containsKey(arr[index]))\r\n                return false;\r\n            \r\n            int[] list = hm.get(arr[index]);\r\n            for(int val:list){\r\n                if(index>=arr.length || val!=arr[index])\r\n                    return false;\r\n                index++;\r\n            }\r\n        }\r\n        return true;\r\n    }\r\n}",
    "javascript": "var canFormArray = function(arr, pieces) {\r\n\tlet total = \"\";\r\n    arr=arr.join(\"\");\r\n    for (let i = 0; i < pieces.length; i++) {\r\n      pieces[i] = pieces[i].join(\"\");\r\n      total += pieces[i];\r\n      if (arr.indexOf(pieces[i]) == -1) return false;\r\n    }\r\n    return total.length == arr.length;\r\n};"
  }
}
