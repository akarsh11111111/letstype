export default {
  "id": 1460,
  "name": "Make Two Arrays Equal by Reversing Sub-arrays",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/make-two-arrays-equal-by-reversing-sub-arrays",
  "relativeDir": "M/Make Two Arrays Equal by Reversing Sub-arrays",
  "slug": "1460-make-two-arrays-equal-by-reversing-sub-arrays",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 20,
    "java": 25,
    "python": 9,
    "javascript": 30
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool canBeEqual(vector<int>& target, vector<int>& arr) {\r\n        int arr1[1001]={0};\r\n        int arr2[1001]={0};\r\n        \r\n        for(int i =0 ; i<target.size(); i++)\r\n        {\r\n            arr1[arr[i]]++;\r\n            arr2[target[i]]++;\r\n        }\r\n        \r\n        for(int i =0 ;i<=1000;i++)\r\n        {\r\n            if(arr1[i]!=arr2[i])\r\n                return false;\r\n        }\r\n        return true;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def canBeEqual(self, target: List[int], arr: List[int]) -> bool:\r\n        target.sort()\r\n        arr.sort()\r\n        if len(target)==len(arr):\r\n            if target==arr:\r\n                return True\r\n            else:\r\n                return False",
    "java": "class Solution {\r\n    public boolean canBeEqual(int[] target, int[] arr) {\r\n        HashMap<Integer,Integer>hm1=new HashMap();\r\n        for(int i: arr){\r\n            if(hm1.containsKey(i))\r\n                hm1.put(i,hm1.get(i)+1);\r\n            else\r\n                hm1.put(i,1);\r\n        }\r\n        for(int i: target){\r\n            if(hm1.containsKey(i)){\r\n                hm1.put(i,hm1.getOrDefault(i,0)-1);\r\n                if(hm1.get(i)==0)\r\n                    hm1.remove(i);\r\n            }\r\n            else\r\n                return false;\r\n            \r\n        }\r\n        if(hm1.size()==0)\r\n            return true;\r\n        \r\n        return false;\r\n    }\r\n}",
    "javascript": "var canBeEqual = function(target, arr) {\r\n    if(arr.length==1){\r\n        if(arr[0]===target[0]){\r\n            return true\r\n        }\r\n    }\r\n    let obj = {}\r\n    for(let i =0;i<arr.length; i ++){\r\n        if(obj[arr[i]]==undefined){\r\n            obj[arr[i]]=1\r\n        }else{\r\n            obj[arr[i]]++\r\n        }\r\n    }\r\n    for(let i =0;i<target.length; i ++){\r\n        if(obj[target[i]]==undefined){\r\n            return false\r\n        }else{\r\n            obj[target[i]]++\r\n        }\r\n    }\r\n   let result = Object.values(obj)\r\n   \r\n   for(let i =0; i <result.length; i ++){\r\n       if(result[i]%2!==0){\r\n           return false\r\n       }\r\n   }\r\n    return true\r\n};"
  }
}
