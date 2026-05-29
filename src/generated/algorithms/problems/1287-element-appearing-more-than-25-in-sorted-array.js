export default {
  "id": 1287,
  "name": "Element Appearing More Than 25% In Sorted Array",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array",
  "relativeDir": "E/Element Appearing More Than 25% In Sorted Array",
  "slug": "1287-element-appearing-more-than-25-in-sorted-array",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 21,
    "java": 18,
    "python": 12,
    "javascript": 48
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int findSpecialInteger(vector<int>& arr) {\r\n        \r\n        int freq = 0.25 * arr.size();\r\n        map<int,int>m;\r\n        for(int i: arr)\r\n            m[i]++;\r\n        \r\n        int k;\r\n        for(auto i: m)\r\n        {\r\n            if(i.second > freq)\r\n            {\r\n              k = i.first;\r\n                break;\r\n            }\r\n        }\r\n        return k;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def findSpecialInteger(self, arr: List[int]) -> int:\r\n        l=len(arr)\r\n        c=(l//4)+1\r\n        d={}\r\n        for i in arr:\r\n            if i in d:\r\n                d[i]+=1\r\n            else:\r\n                d[i]=1\r\n            if d[i]>=c:\r\n                return i",
    "java": "class Solution {\r\n    public int findSpecialInteger(int[] arr) {\r\n        HashMap<Integer,Integer>hm=new HashMap<>();\r\n        int comp=arr.length/4;\r\n        for (int i:arr)\r\n        {\r\n            if (!hm.containsKey(i)){hm.put(i,1);}\r\n            else\r\n            {\r\n                int val=hm.get(i);\r\n                val++;\r\n                hm.put(i,val);\r\n            }\r\n            if (hm.get(i)>comp){return i;}\r\n        }\r\n        return 0;\r\n    }\r\n}",
    "javascript": "function binarySearch(array, target, findFirst) {\r\n    function helper(start, end) {\r\n        if (start > end) {\r\n            return -1;\r\n        }       \r\n        \r\n        const middle = Math.floor((start + end) / 2);\r\n        const value = array[middle];\r\n        \r\n        if (value === target) {\r\n            if (findFirst) {\r\n                if (middle === 0 || array[middle - 1] !== value) {\r\n                    return middle;\r\n                }\r\n                \r\n                return helper(start, middle - 1);\r\n            } else {\r\n                if (middle === array.length -1 || array[middle + 1] !== value) {\r\n                    return middle;\r\n                }\r\n                \r\n                return helper(middle + 1, end);\r\n            }\r\n        } else if (value < target) {\r\n          return helper(middle + 1, end);    \r\n        }\r\n        \r\n        return helper(start, middle - 1);\r\n    }\r\n    \r\n    return helper(0, array.length - 1)\r\n}\r\n\r\nconst findFirstOccurance = (array, target) => binarySearch(array, target, true);\r\nconst findLastOccurance = (array, target) => binarySearch(array, target, false);\r\n\r\nvar findSpecialInteger = function(arr) {\r\n    for (const i of [Math.floor(arr.length / 4), Math.floor(arr.length / 2), Math.floor(3 * arr.length / 4)]) {\r\n        const firstOccurance = findFirstOccurance(arr, arr[i]);\r\n        const lastOccurance = findLastOccurance(arr, arr[i]);\r\n                \r\n        if (lastOccurance - firstOccurance + 1 > arr.length / 4) {\r\n            return arr[i]\r\n        }\r\n    }\r\n    \r\n    return -1;\r\n};"
  }
}
