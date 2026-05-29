export default {
  "id": 1768,
  "name": "Merge Strings Alternately",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/merge-strings-alternately",
  "relativeDir": "M/Merge Strings Alternately",
  "slug": "1768-merge-strings-alternately",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 21,
    "java": 13,
    "python": 19,
    "javascript": 13
  },
  "languages": {
    "cpp": "// Runtime: 7 ms (Top 13.35%) | Memory: 9.3 MB (Top 5.39%)\r\nclass Solution {\r\npublic:\r\n    string mergeAlternately(string word1, string word2) {\r\n        string final=\"\";\r\n        int p=word1.size();\r\n        int q=word2.size();\r\n        int n=max(p,q);\r\n        for(int i=0;i<n;i++){\r\n            if(p){\r\n                final=final+word1[i];\r\n                p--;\r\n            }\r\n            if(q){\r\n                final=final+word2[i];\r\n                q--;\r\n            }\r\n        }\r\n        return final;\r\n    }\r\n};",
    "python": "# Runtime: 7 ms (Top 98.2%) | Memory: 13.31 MB (Top 45.5%)\r\n\r\nclass Solution(object):\r\n    def mergeAlternately(self, word1, word2):\r\n        i=0\r\n        j=0\r\n        st=[]\r\n        while i<len(word1) and j<len(word2):\r\n            st.append(word1[i])\r\n            st.append(word2[j])\r\n            i+=1\r\n            j+=1\r\n        while j<len(word2):\r\n            st.append(word2[j])\r\n            j+=1\r\n        while i<len(word1):\r\n            st.append(word1[i])\r\n            i+=1\r\n        return \"\".join(st)",
    "java": "// Runtime: 1 ms (Top 93.63%) | Memory: 41.7 MB (Top 86.60%)\r\nclass Solution {\r\n    public String mergeAlternately(String word1, String word2) {\r\n        StringBuilder sb = new StringBuilder();\r\n        int lenmax = Math.max(word1.length(),word2.length());\r\n        for(int i=0;i<=lenmax-1;i++)\r\n        {\r\n            if(i<word1.length()) sb.append(word1.charAt(i));\r\n            if(i<word2.length()) sb.append(word2.charAt(i));\r\n        }\r\n        return sb.toString();\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {string} word1\r\n * @param {string} word2\r\n * @return {string}\r\n */\r\nvar mergeAlternately = function(word1, word2) {\r\n    let length = Math.max(word1.length, word2.length), s = '';\r\n    for(let i = 0; i < length; i++){\r\n        s+= word1[i] || '';\r\n        s+= word2[i] || '';\r\n    }\r\n    return s;\r\n};"
  }
}
