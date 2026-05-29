export default {
  "id": 455,
  "name": "Assign Cookies",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/assign-cookies",
  "relativeDir": "A/Assign Cookies",
  "slug": "0455-assign-cookies",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 20,
    "java": 30,
    "python": 16,
    "javascript": 21
  },
  "languages": {
    "cpp": "// Runtime: 28 ms (Top 16.33%) | Memory: 18.00 MB (Top 6.11%)\r\n\r\nclass Solution {\r\npublic:\r\n    int findContentChildren(vector<int>& g, vector<int>& s) {\r\n        sort(g.begin(), g.end()); // sort the children's greed factors in non-decreasing order\r\n        sort(s.begin(), s.end()); // sort the cookie sizes in non-decreasing order\r\n        int contentChildren = 0;\r\n        int i = 0; // pointer to the current child's greed factor\r\n        int j = 0; // pointer to the current cookie size\r\n        while (i < g.size() && j < s.size()) {\r\n            if (s[j] >= g[i]) { // if the current cookie can satisfy the current child's greed factor\r\n                contentChildren++;\r\n                i++;\r\n            }\r\n            j++;\r\n        }\r\n        return contentChildren;\r\n    }\r\n};",
    "python": "# Runtime: 437 ms (Top 8.80%) | Memory: 15.9 MB (Top 13.77%)\r\nclass Solution:\r\n    def findContentChildren(self, g: List[int], s: List[int]) -> int:\r\n        g.sort()\r\n        s.sort()\r\n        cont = 0\r\n        c = 0\r\n        k = 0\r\n        while k< len(s) and c < len(g):\r\n            if s[k] >= g[c]:\r\n                c+=1\r\n                k+=1\r\n                cont+=1\r\n            else:\r\n                k+=1\r\n        return cont",
    "java": "// Runtime: 8 ms (Top 98.76%) | Memory: 45.20 MB (Top 5.55%)\r\n\r\nclass Solution {\r\n    public int findContentChildren(int[] g, int[] s) {\r\n        int i =0,j=0,c=0;\r\n        \r\n        Arrays.sort(g);\r\n        Arrays.sort(s);\r\n        \r\n        \r\n        for(;i< g.length;i++)\r\n        {\r\n                // System.out.println(s[j]+\" \"+g[i]);\r\n \r\n            while(j<s.length)\r\n            {\r\n                if(s[j]>=g[i] )\r\n                {\r\n                    // System.out.println(s[j]+\" \"+g[i]);\r\n                    j++;c++;\r\n                    break;\r\n                }\r\n                j++;\r\n            }\r\n        }\r\n       \r\n        return c;\r\n        \r\n    }\r\n}",
    "javascript": "var findContentChildren = function(g, s) {\r\n\tg.sort(function(a, b) {\r\n\t\treturn b - a;\r\n\t});\r\n\ts.sort(function(a, b) {\r\n\t\treturn a - b;\r\n\t});\r\n\t\r\n    let content = 0;\r\n    for (let curG of g) {\r\n        for (let curS of s) {\r\n            if (curS >= curG) {\r\n                s.pop();\r\n\t\t\t\tcontent++;\t\r\n\t\t\t    break;\r\n            }\r\n        }\r\n    }\r\n\r\n\treturn content;\r\n}"
  }
}
