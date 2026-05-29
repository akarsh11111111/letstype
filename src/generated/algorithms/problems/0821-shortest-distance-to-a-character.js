export default {
  "id": 821,
  "name": "Shortest Distance to a Character",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/shortest-distance-to-a-character",
  "relativeDir": "S/Shortest Distance to a Character",
  "slug": "0821-shortest-distance-to-a-character",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 36,
    "java": 24,
    "python": 14,
    "javascript": 22
  },
  "languages": {
    "cpp": "// Runtime: 11 ms (Top 11.73%) | Memory: 6.7 MB (Top 59.28%)\r\nclass Solution {\r\npublic:\r\n    vector<int> shortestToChar(string s, char c) {\r\n        vector<int>sk;\r\n        vector<int>res;\r\n        vector<int>temp;\r\n        int ss=0;\r\n        int mins;\r\n        for(int i=0;i<s.length();i++){\r\n            if(s[i]==c)\r\n            //storing all the c character location i.e 'e' in sk i.e [3,5,6,11]\r\n             sk.push_back(i);\r\n        }\r\n        for(int i=0;i<s.length();i++){\r\n            for(int j=0;j<sk.size();j++){\r\n            //now subtracting every i value with all value of character locations and storing the minimum in res vector.\r\n\r\n                mins=abs(sk[j]-i);\r\n                temp.push_back(mins);\r\n            }\r\n                //in first iteration [3-0=3,5-0=5,6-0=6,11-0=0] so removing the minimum elemnet from this that is 3 and stroing is res.\r\n            int min=temp[0];\r\n            for(auto i:temp){\r\n                if(i<min){\r\n                    min=i;\r\n                }\r\n            }\r\n            res.push_back(min);\r\n            temp.clear();\r\n\r\n        }\r\n\r\n        return res;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def shortestToChar(self, s: str, c: str) -> List[int]:\r\n        res = []\r\n        ch= []\r\n        for i in range(len(s)):\r\n            if s[i] == c:\r\n                ch.append(i)\r\n        min_d = len(s)\r\n        for i in range(len(s)):\r\n            for j in range(len(ch)):\r\n                min_d = min(min_d, abs(i-ch[j]))\r\n            res.append(min_d)\r\n            min_d = len(s)\r\n        return res",
    "java": "// Runtime: 2 ms (Top 72.97%) | Memory: 43.3 MB (Top 45.95%)\r\nclass Solution {\r\n    public int[] shortestToChar(String s, char c) {\r\n        int n = s.length();\r\n        int index = -1;\r\n        int[] ans = new int[n];\r\n        // Starting from index 0 and storing the distance from the next c;\r\n        for(int i=0;i<n;i++){\r\n            if(s.charAt(i)==c) index = i;//to store the index of the nearest previous c\r\n\r\n            if(index==-1) ans[i] = Integer.MAX_VALUE;\r\n            else ans[i] = i-index;\r\n        }\r\n\r\n        // Starting from thr end and storing the distance from the previous c;\r\n        index = -1;\r\n        for(int i=n-1;i>=0;i--){\r\n            if(s.charAt(i)==c) index = i;//to store the index of the nearest next c\r\n\r\n            if(index!=-1) ans[i] = Math.min(ans[i],index-i);\r\n        }\r\n        return ans;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {string} s\r\n * @param {character} c\r\n * @return {number[]}\r\n */\r\nvar shortestToChar = function(s, c) {\r\n    \r\n    let result = []\r\n    \r\n    for(let i = 0; i< s.length ; i++) {\r\n        \r\n        if(s.charAt(i) === c) result.push(0)\r\n        else {\r\n            const next = s.indexOf(c,i) === -1 ? Infinity : s.indexOf(c,i) -i\r\n            const prev = result.lastIndexOf(0) === -1 ? Infinity : i- result.lastIndexOf(0) \r\n            result.push(Math.min(next,prev))\r\n        }\r\n        \r\n    }\r\n    \r\n    return result\r\n};"
  }
}
