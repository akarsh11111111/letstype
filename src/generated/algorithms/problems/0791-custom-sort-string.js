export default {
  "id": 791,
  "name": "Custom Sort String",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/custom-sort-string",
  "relativeDir": "C/Custom Sort String",
  "slug": "0791-custom-sort-string",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 30,
    "java": 30,
    "python": 23,
    "javascript": 20
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.00%) | Memory: 6.5 MB (Top 11.00%)\r\nclass Solution {\r\npublic:\r\n    string customSortString(string order, string s) {\r\n\r\n        map<char,int>mp;\r\n\r\n        for(int i =0 ; i<order.size() ; i++)\r\n            mp[order[i]]=i+1;\r\n\r\n        vector<pair<int,char> > p;\r\n        int x=200;\r\n        for(int i =0 ; i < s.size(); i++)\r\n        {\r\n            if(mp[s[i]]!=0)\r\n            p.push_back(make_pair(mp[s[i]],s[i]));\r\n            else\r\n            p.push_back(make_pair(x--,s[i]));\r\n\r\n        }\r\n\r\n        sort(p.begin(),p.end());\r\n        string ans=\"\";\r\n        for(int i =0 ;i < p.size(); i++)\r\n        {\r\n            ans+=p[i].second;\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 328 ms (Top 5.22%) | Memory: 13.9 MB (Top 17.87%)\r\nclass Solution:\r\n    def customSortString(self, order: str, s: str) -> str:\r\n        charValue = [0] * 26\r\n        for i in range(len(order)):\r\n            idx = ord(order[i]) - ord('a')\r\n            charValue[idx] = 26 - i\r\n\r\n        arrS = []\r\n        n = 0\r\n        for c in s:\r\n            arrS.append(c)\r\n            n += 1\r\n\r\n        sorted = False\r\n        while not sorted:\r\n            sorted = True\r\n            for i in range(n - 1):\r\n                if charValue[ord(arrS[i]) - ord('a')] < charValue[ord(arrS[i + 1]) - ord('a')]:\r\n                    sorted = False\r\n                    arrS[i], arrS[i + 1] = arrS[i + 1], arrS[i]\r\n\r\n        return ''.join(arrS)",
    "java": "// Runtime: 0 ms (Top 100.0%) | Memory: 41.60 MB (Top 38.18%)\r\n\r\nclass Solution {\r\n    public String customSortString(String X, String Y) {\r\n        //char count of string Y\r\n        int[] charCount = new int[26];\r\n        for(char c : Y.toCharArray()){\r\n            charCount[c - 'a']++;\r\n        }\r\n        \r\n        StringBuilder sb = new StringBuilder();\r\n        \r\n        //first store char in same order of String X\r\n        for(char c : X.toCharArray()){\r\n            while(charCount[c - 'a'] --> 0){\r\n                sb.append(c);\r\n            }\r\n        }\r\n        \r\n        //now store remaining char of string Y\r\n        for(int i = 0; i < 26; i++){\r\n            char c = (char)('a' + i);\r\n            while(charCount[i] --> 0){\r\n                sb.append(c);\r\n            }\r\n        }\r\n        \r\n        return sb.toString();\r\n    }\r\n}",
    "javascript": "var customSortString = function(order, s) {\r\n    const hm = new Map();\r\n    for(let c of s) {\r\n        if(!hm.has(c)) hm.set(c, 0);\r\n        hm.set(c, hm.get(c) + 1);\r\n    }\r\n    \r\n    let op = \"\";\r\n    for(let c of order) {\r\n        if(hm.has(c)) {\r\n            op += \"\".padStart(hm.get(c), c);\r\n            hm.delete(c);\r\n        }\r\n    }\r\n    for(let [c, occ] of hm) {\r\n        op += \"\".padStart(hm.get(c), c);\r\n        hm.delete(c);\r\n    }\r\n    return op;\r\n};"
  }
}
