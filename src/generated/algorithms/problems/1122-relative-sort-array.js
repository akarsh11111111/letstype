export default {
  "id": 1122,
  "name": "Relative Sort Array",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/relative-sort-array",
  "relativeDir": "R/Relative Sort Array",
  "slug": "1122-relative-sort-array",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 50,
    "java": 36,
    "python": 25,
    "javascript": 20
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<int> relativeSortArray(vector<int>& arr1, vector<int>& arr2) {\r\n        map<int,int>sk;\r\n        vector<int>res;\r\n        for(auto i:arr1){\r\n            sk[i]++;\r\n        }\r\n        for(auto j:arr2){\r\n            for(auto z:sk){\r\n                if(z.first==j){\r\n                    int x=z.second;\r\n                    for(int l=0;l<x;l++){\r\n                        res.push_back(z.first);\r\n                    }\r\n                }\r\n               \r\n            }\r\n        }\r\n        for(auto z:sk){\r\n            if(z.second==4 && find(res.begin(), res.end(),z.first)==res.end()){\r\n                   int p=z.second;\r\n                  for(int aqq=0;aqq<p;aqq++){\r\n                      res.push_back(z.first);\r\n                  }\r\n                }\r\n            \r\n            if(z.second==3 && find(res.begin(), res.end(),z.first)==res.end()){\r\n                   int p=z.second;\r\n                  for(int aq=0;aq<p;aq++){\r\n                      res.push_back(z.first);\r\n                  }\r\n                }\r\n            \r\n              if(z.second==2 && find(res.begin(), res.end(),z.first)==res.end()){\r\n                   int p=z.second;\r\n                  for(int a=0;a<p;a++){\r\n                      res.push_back(z.first);\r\n                  }\r\n                }\r\n            \r\n         if(z.second==1 && find(res.begin(), res.end(),z.first)==res.end()){\r\n                    res.push_back(z.first);\r\n                }\r\n        }\r\n        \r\n        return res;\r\n            \r\n    }\r\n};",
    "python": "// Runtime: 42 ms (Top 73.46%) | Memory: 17.40 MB (Top 13.95%)\r\n\r\nclass Solution:\r\n    def relativeSortArray(self, arr1: List[int], arr2: List[int]) -> List[int]:\r\n\t\t# initialise a dictionary since we're going to want to count the occurences of each element in arr1\r\n        dic = {}\r\n\t\t# this loop populates the dictionary with the number of occurences for each element\r\n        for elem in arr1:\r\n            if dic.get(elem) is None:\r\n                dic[elem] = 1\r\n            else:\r\n                dic[elem] = dic[elem] + 1\r\n\t\t# initialise a new list to store the values which exist in both arr2 and arr1\r\n        output = []\r\n\t\t# populate output with the elements multiplied by their occurences (e.g. [1]*2 = [1, 1])\r\n        for elem in arr2:\r\n            output += [elem]*dic[elem]\r\n\t\t# initialise a new list to store the elements which are in arr1 but not arr2\r\n        extra_output = []\r\n\t\t# populate extra_output with these elements multiplied by their occurences. \r\n\t\t# Note: set(arr1)-set(arr2) provides us with the set of numbers which exist in arr1 but not in arr2\r\n        for elem in set(arr1)-set(arr2):\r\n            extra_output += [elem]*dic[elem]\r\n\t\t# return the first list and the sorted second list\r\n        return output + sorted(extra_output)",
    "java": "// Runtime: 6 ms (Top 28.58%) | Memory: 43 MB (Top 43.79%)\r\nclass Solution {\r\n    public int[] relativeSortArray(int[] arr1, int[] arr2) {\r\n        Map <Integer, Integer> map = new TreeMap();\r\n        for(int i = 0; i<arr1.length; i++){\r\n            if(map.containsKey(arr1[i])){\r\n                map.replace(arr1[i], map.get(arr1[i]),map.get(arr1[i])+1);\r\n            }\r\n            else{\r\n                map.put(arr1[i], 1);\r\n            }\r\n        }\r\n\r\n        int[] arr = new int [arr1.length];\r\n        int ind = 0;\r\n        for(int i = 0; i<arr2.length; i++){\r\n\r\n            for(int j = 0; j<map.get(arr2[i]);j++){\r\n                arr[ind] = arr2[i];\r\n                ind++;\r\n            }\r\n            map.remove(arr2[i]);\r\n        }\r\n\r\n        for(int i: map.keySet()){\r\n\r\n            for(int j = 0; j<map.get(i);j++){\r\n                arr[ind] = i;\r\n                ind++;\r\n            }\r\n\r\n        }\r\n\r\n        return arr;\r\n    }\r\n}",
    "javascript": "// Runtime: 92 ms (Top 51.55%) | Memory: 42.4 MB (Top 64.95%)\r\n/**\r\n * @param {number[]} arr1\r\n * @param {number[]} arr2\r\n * @return {number[]}\r\n */\r\nvar relativeSortArray = function(arr1, arr2) {\r\n  const indices = new Map();\r\n  arr2.forEach(indices.set, indices);\r\n\r\n  return arr1.sort((a, b) => {\r\n    if (indices.has(a)) {\r\n      return indices.has(b) ? indices.get(a) - indices.get(b) : -1;\r\n    }\r\n    if (indices.has(b)) {\r\n      return 1;\r\n    }\r\n    return a - b;\r\n  });\r\n};"
  }
}
