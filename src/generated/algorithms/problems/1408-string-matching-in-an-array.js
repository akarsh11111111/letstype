export default {
  "id": 1408,
  "name": "String Matching in an Array",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/string-matching-in-an-array",
  "relativeDir": "S/String Matching in an Array",
  "slug": "1408-string-matching-in-an-array",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 22,
    "java": 18,
    "python": 9,
    "javascript": 19
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<string> stringMatching(vector<string>& words) {\r\n        vector<string> res; //output\r\n\r\n        for(int i = 0 ; i < words.size(); i++)\r\n        {\r\n            for(int j = 0; j < words.size(); j++)\r\n            {\r\n                if(i != j && words[j].find(words[i]) != -1)\r\n                {\r\n                    if(!count(res.begin(),res.end(), words[i])) //if vector result does not include this string, push it to vector\r\n                        res.push_back(words[i]);\r\n                    else\r\n                        continue; //if vector result includes this string, ignore\r\n                }\r\n            }\r\n        }\r\n        \r\n        return res;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def stringMatching(self, words: List[str]) -> List[str]:\r\n        ans=set()\r\n        l=len(words)\r\n        for i in range(l):\r\n            for j in range(l):\r\n                if (words[i] in words[j]) & (i!=j):\r\n                    ans.add(words[i])\r\n        return ans",
    "java": "class Solution {\r\n    public List<String> stringMatching(String[] words) {\r\n        List<String>ans = new ArrayList<>();\r\n        for(int i=0; i<words.length; i++){\r\n            String s = words[i];\r\n            for(int j=0; j<words.length; j++){\r\n                if(i == j){\r\n                    continue;\r\n                }\r\n                if(words[j].indexOf(s) >= 0){\r\n                    ans.add(s);\r\n                    break;\r\n                }\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n}",
    "javascript": "// Runtime: 116 ms (Top 28.95%) | Memory: 42.6 MB (Top 45.11%)\r\nvar stringMatching = function(words) {\r\n    let res = [];\r\n\r\n    for (let i = 0; i < words.length; i++) {\r\n\r\n        for (let j = 0; j < words.length; j++) {\r\n            if (j === i) continue;\r\n\r\n            if (words[j].includes(words[i])) {\r\n                res.push(words[i]);\r\n                break;\r\n            }\r\n\r\n        }\r\n    }\r\n\r\n    return res;\r\n};"
  }
}
