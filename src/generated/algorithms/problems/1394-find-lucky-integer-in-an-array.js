export default {
  "id": 1394,
  "name": "Find Lucky Integer in an Array",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-lucky-integer-in-an-array",
  "relativeDir": "F/Find Lucky Integer in an Array",
  "slug": "1394-find-lucky-integer-in-an-array",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 32,
    "java": 22,
    "python": 14,
    "javascript": 24
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int findLucky(vector<int>& arr) {\r\n        // sort(arr.begin(),arr.end());\r\n        map<int,int>mp;\r\n        vector<int>v;\r\n        for(int i=0;i<arr.size();i++)\r\n        {\r\n            mp[arr[i]]++;\r\n        }\r\n\r\n        for(auto x:mp)\r\n        {\r\n            if(x.first == x.second)\r\n            {\r\n                v.push_back(x.first);\r\n            }\r\n           \r\n        }\r\n\r\n        int mx = -1;\r\n        for(int i=0;i<v.size();i++)\r\n        {\r\n            mx = max(mx,v[i]);\r\n        }\r\n\r\n\r\n\r\n        return mx;\r\n        \r\n    }\r\n};",
    "python": "class Solution:\r\n    def findLucky(self, arr: List[int]) -> int:\r\n        dc = {}\r\n        \r\n        for i in range(len(arr)):\r\n            if arr[i] not in dc:\r\n                dc[arr[i]] = 1\r\n            else:\r\n                dc[arr[i]] = dc[arr[i]] + 1\r\n        mx = -1\r\n        for key,value in dc.items():\r\n            if key == value:\r\n                mx = max(key, mx)\r\n        return mx",
    "java": "// Runtime: 12 ms (Top 12.82%) | Memory: 44.3 MB (Top 18.67%)\r\nclass Solution {\r\n    public int findLucky(int[] arr) {\r\n        HashMap<Integer,Integer> map = new HashMap<>();\r\n        for(int i : arr){\r\n            map.put(i, map.getOrDefault(i,0)+1);\r\n        }\r\n        System.out.print(map);\r\n         int max = 0;\r\n        for (Map.Entry<Integer, Integer> e : map.entrySet()){\r\n           int temp = 0;\r\n            if(e.getKey() == (int)e.getValue()){\r\n                temp = (int)e.getKey();\r\n            }\r\n            if(max < temp){\r\n                max= temp;\r\n            }\r\n        }\r\n         if(max != 0)return max;\r\n        return -1;\r\n    }\r\n}",
    "javascript": "// Runtime: 47 ms (Top 95.84%) | Memory: 44.00 MB (Top 53.55%)\r\n\r\n// time O(n) space O(n)\r\nvar findLucky = function(arr) {\r\n    let max = -1\r\n    \r\n    const map = {}\r\n    \r\n    for(const number of arr) {\r\n        if(map[number]) {\r\n            map[number] += 1\r\n        } else {\r\n            map[number] = 1\r\n        }\r\n    }\r\n    \r\n    for(const key in map) {\r\n        if(Number(key) === map[key] && map[key] > max) {\r\n            max = map[key]\r\n        }\r\n    }\r\n    \r\n    return max\r\n};"
  }
}
