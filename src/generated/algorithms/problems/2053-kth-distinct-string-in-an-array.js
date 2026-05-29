export default {
  "id": 2053,
  "name": "Kth Distinct String in an Array",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/kth-distinct-string-in-an-array",
  "relativeDir": "K/Kth Distinct String in an Array",
  "slug": "2053-kth-distinct-string-in-an-array",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 24,
    "java": 23,
    "python": 11,
    "javascript": 15
  },
  "languages": {
    "cpp": "class Solution \r\n{\r\npublic:\r\n    string kthDistinct(vector<string>& arr, int k) \r\n    {\r\n        unordered_map<string,int>m;\r\n        for(int i=0;i<arr.size();i++)\r\n        {\r\n            m[arr[i]]++;\r\n        }\r\n        for(int i=0;i<arr.size();i++)\r\n        {\r\n            if(m[arr[i]]==1)\r\n            {\r\n                k--;\r\n            }\r\n            if(k==0 && m[arr[i]]==1)\r\n            {\r\n                return arr[i];\r\n            }\r\n        }\r\n        return \"\";\r\n    }\r\n};",
    "python": "class Solution:\r\n    def kthDistinct(self, arr: List[str], k: int) -> str:\r\n        hash_map = {}\r\n        for string in arr:\r\n            hash_map[string] = hash_map.get(string, 0) + 1\r\n        for string in arr:\r\n            if hash_map[string] == 1:\r\n                k -= 1\r\n                if k == 0:\r\n                    return string\r\n        return \"\"",
    "java": "// Runtime: 5 ms (Top 99.0%) | Memory: 43.48 MB (Top 20.1%)\r\n\r\nclass Solution {\r\n    public String kthDistinct(String[] arr, int k) {\r\n        Map<String,Integer> map=new HashMap<>();\r\n        \r\n        for(String s:arr){\r\n            \r\n            if(map.containsKey(s)) map.put(s,map.get(s)+1);\r\n             else map.put(s,1);\r\n        }\r\n\t\tint i=0;\r\n        for(String s:arr){\r\n            if(map.get(s)==1 && ++i==k){\r\n                \r\n                    return s;\r\n                } \r\n                 \r\n        }\r\n        return \"\";\r\n        \r\n    }\r\n}",
    "javascript": "var kthDistinct = function(arr, k) {\r\n    const map = {} // used for arr occurences\r\n    const distinctArr = [] // store the distinct values (only appearing once)\r\n    \r\n\t// increment the occurence to the map\r\n    arr.forEach(letter => map[letter] = map[letter] + 1 || 1)\r\n    \r\n\t// store all the distinct values in order\r\n    for (let [key, val] of Object.entries(map)) \r\n        if (val == 1) distinctArr.push(key)\r\n    \r\n\t// return the key or empty string\r\n    return distinctArr[k-1] || \"\"\r\n};\r\n~``"
  }
}
