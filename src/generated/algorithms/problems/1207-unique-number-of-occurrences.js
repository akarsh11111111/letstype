export default {
  "id": 1207,
  "name": "Unique Number of Occurrences",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/unique-number-of-occurrences",
  "relativeDir": "U/Unique Number of Occurrences",
  "slug": "1207-unique-number-of-occurrences",
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
    "python": 21,
    "javascript": 19
  },
  "languages": {
    "cpp": "// Runtime: 4 ms (Top 63.35%) | Memory: 8.2 MB (Top 47.42%)\r\nclass Solution {\r\npublic:\r\n    bool uniqueOccurrences(vector<int>& arr) {\r\n        unordered_map<int,int>sk;\r\n        unordered_map<int,int>skk;\r\n        for(int i=0;i<arr.size();i++){\r\n            sk[arr[i]]++;\r\n        }\r\n         for(auto j : sk)\r\n        {\r\n            if(skk[j.second]==1){\r\n                return false;\r\n            }\r\n            skk[j.second]++;\r\n        }\r\n\r\n        return true;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def uniqueOccurrences(self, arr: List[int]) -> bool:\r\n\t\t# defining dictionary\r\n        occ = dict()\r\n        \r\n\t\t# adding elements with their counts in dictionary\r\n        for element in arr:\r\n            if element not in occ:\r\n                occ[element] = 0\r\n            else:\r\n                occ[element] += 1\r\n        \r\n\t\t# list of count of elements\r\n        values = list(occ.values())\r\n\t\t# Unique count\r\n        unique = set(values)\r\n        \r\n        if len(values) == len(unique):\r\n            return True\r\n        else:\r\n            return False",
    "java": "class Solution {\r\n    public boolean uniqueOccurrences(int[] arr) {\r\n        Arrays.sort(arr);\r\n        HashSet<Integer> set = new HashSet<>();\r\n\r\n        int c = 1;\r\n        for(int i = 1; i < arr.length; i++)\r\n        {\r\n            if(arr[i] == arr[i-1]) c++;\r\n\r\n            else\r\n            {\r\n                if(set.contains(c)) return false;\r\n\r\n                set.add(c);\r\n\r\n                c = 1;\r\n            }\r\n        }\r\n\r\n        if(set.contains(c)) return false;\r\n\r\n        return true;\r\n    }\r\n}",
    "javascript": "// Runtime: 54 ms (Top 59.88%) | Memory: 43.70 MB (Top 21.19%)\r\n\r\n// time O(n) space O(n)\r\nvar uniqueOccurrences = function(arr) {\r\n    const map = {}\r\n    \r\n    for(const number of arr) {\r\n        if(map[number]) {\r\n            map[number] += 1\r\n        } else {\r\n            map[number] = 1\r\n        }\r\n    }\r\n    \r\n    const frequencies = Object.values(map)\r\n    const set = new Set(frequencies)\r\n    \r\n    return frequencies.length === set.size\r\n};"
  }
}
