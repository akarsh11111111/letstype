export default {
  "id": 14,
  "name": "Longest Common Prefix",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/longest-common-prefix",
  "relativeDir": "L/Longest Common Prefix",
  "slug": "0014-longest-common-prefix",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 23,
    "java": 47,
    "python": 22,
    "javascript": 12
  },
  "languages": {
    "cpp": "// Runtime: 10 ms (Top 30.63%) | Memory: 9.3 MB (Top 55.11%)\r\nclass Solution {\r\npublic:\r\n    string longestCommonPrefix(vector<string>& strs) {\r\n        //brute\r\n        string ans=\"\";\r\n        string ref=strs[0];\r\n        for(int i=0;i<ref.size();i++)\r\n        {\r\n            int j=1;\r\n            for(;j<strs.size();j++)\r\n            {\r\n                if(ref[i]!=strs[j][i])\r\n                    break;\r\n            }\r\n            if(j==strs.size())\r\n                ans+=ref[i];\r\n            else\r\n                break;\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def longestCommonPrefix(self, strs: List[str]) -> str:\r\n        cmp=strs[0]\r\n        for i in range(1,len(strs)):\r\n            l=0\r\n            if (len(cmp)>len(strs[i])):\r\n                l+=len(strs[i])\r\n            else:\r\n                l+=len(cmp)\r\n            ans=\"\"\r\n            for j in range(l):\r\n                if (cmp[j]!=strs[i][j]):\r\n                    if (j==0):\r\n                        return \"\"\r\n                    else:\r\n                        break\r\n                else:\r\n                    ans+=strs[i][j]\r\n            cmp=ans\r\n        return cmp\r\n\t\t\r\nUpvote If you Like!!!",
    "java": "// Runtime: 10 ms (Top 21.11%) | Memory: 42.4 MB (Top 35.11%)\r\nclass TrieNode{\r\n    TrieNode[] childs;\r\n    int frequency;\r\n    TrieNode(){\r\n        childs = new TrieNode[26];\r\n        this.frequency = 1;\r\n    }\r\n}\r\n\r\nclass Solution {\r\n\r\n    TrieNode root = new TrieNode();\r\n\r\n    public String longestCommonPrefix(String[] strs) {\r\n        if(strs.length == 0) return \"\";\r\n        if(strs.length == 1) return strs[0];\r\n        for(String str : strs){\r\n            insertIntoTrie(str.toLowerCase());\r\n        }\r\n        return findCommonPrefix(strs[0], strs.length);\r\n    }\r\n\r\n    private void insertIntoTrie(String str) {\r\n        TrieNode ptr = root;\r\n        for(int i=0; i<str.length(); i++){\r\n            if(ptr.childs[str.charAt(i)-'a'] == null){\r\n                ptr.childs[str.charAt(i)-'a'] = new TrieNode();\r\n            } else {\r\n                ptr.childs[str.charAt(i)-'a'].frequency++;\r\n            }\r\n            ptr = ptr.childs[str.charAt(i)-'a'];\r\n        }\r\n    }\r\n\r\n    private String findCommonPrefix(String str, int n) {\r\n        String ans = \"\";\r\n        for(int i=0; i<str.length(); i++){\r\n            if(root.childs[str.charAt(i) -'a'].frequency != n){\r\n                return ans;\r\n            }\r\n            ans += str.charAt(i);\r\n            root = root.childs[str.charAt(i)-'a'];\r\n        }\r\n        return ans;\r\n    }\r\n}",
    "javascript": " var longestCommonPrefix = function(strs) {\r\n let commonStr=strs[0];\r\n for(let i=1; i<strs.length;i++){\r\n   let currentStr= strs[i]\r\n    for(let j=0; j<commonStr.length;j++){\r\n      if (commonStr[j]!==currentStr[j]){\r\n          commonStr=currentStr.slice(0,j)  \r\n          break;\r\n      }\r\n    }\r\n}   \r\nreturn commonStr"
  }
}
