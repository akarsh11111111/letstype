export default {
  "id": 1754,
  "name": "Largest Merge Of Two Strings",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/largest-merge-of-two-strings",
  "relativeDir": "L/Largest Merge Of Two Strings",
  "slug": "1754-largest-merge-of-two-strings",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 18,
    "java": 62,
    "python": 17,
    "javascript": 20
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    string largestMerge(string word1, string word2) {\r\n        \r\n        string ans=\"\";\r\n        \r\n        while(word1.size()!=0 && word2.size()!=0){\r\n            if(word1>=word2) {ans+=word1[0];word1=word1.substr(1);}\r\n            \r\n            else             {ans+=word2[0];word2=word2.substr(1);}\r\n        }\r\n        \r\n        if(word1.size()!=0)ans=ans+word1;\r\n        if(word2.size()!=0)ans=ans+word2;\r\n        \r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def largestMerge(self, word1: str, word2: str) -> str:\r\n        res = ''\r\n        p1 = 0\r\n        p2 = 0\r\n        while p1 < len(word1) and p2 < len(word2):\r\n            if word1[p1:] > word2[p2:]:\r\n                res += word1[p1]\r\n                p1 += 1\r\n            else:\r\n                res += word2[p2]\r\n                p2 += 1\r\n        \r\n        res += word1[p1:] + word2[p2:]\r\n\r\n        \r\n        return res",
    "java": "// Runtime: 18 ms (Top 92.79%) | Memory: 44.70 MB (Top 66.67%)\r\n\r\nclass Solution {\r\n    public String largestMerge(String word1, String word2) {\r\n        StringBuilder sb = new StringBuilder();\r\n        int i=0;\r\n        int j=0;\r\n        char[] w1 = word1.toCharArray();\r\n        char[] w2 = word2.toCharArray();\r\n        \r\n        int n1=w1.length;\r\n        int n2=w2.length;\r\n        \r\n        // we loop until we exhaust any one of the 2 words completely\r\n        while(i<n1 && j<n2){\r\n            \r\n            // if both the characters are equal we choose the one where the next largest occurs earlier\r\n            if(w1[i]==w2[j]){\r\n                if(check(w1,i,w2,j)){\r\n                    sb.append(w1[i++]);\r\n                }else{\r\n                    sb.append(w2[j++]);\r\n                }\r\n            }\r\n            \r\n            // else we greedily choose the largest of the two characters\r\n            else if(w1[i]>w2[j]){\r\n                sb.append(w1[i++]);\r\n            }else{\r\n                sb.append(w2[j++]);\r\n            }\r\n        }\r\n        \r\n        // at the end of the loop we append any remaining word\r\n        sb.append(word1.substring(i));\r\n        sb.append(word2.substring(j));\r\n\t\t\r\n        return sb.toString();\r\n    }\r\n    \r\n    private boolean check(char[] w1, int i, char[] w2, int j){\r\n        // will return true if we need to extract from word1 and false if we need to extract from word2\r\n        \r\n        while(i<w1.length && j<w2.length){\r\n            if(w1[i]==w2[j]){\r\n                i++;\r\n                j++;\r\n            }\r\n            else if(w1[i]>w2[j]){\r\n                return true;\r\n            }else{\r\n                return false;\r\n            }\r\n        }\r\n        \r\n        // if we are unable to find any exhaustable character till the end of the loop we use the one having larger length\r\n        if(i<w1.length){\r\n            return true;\r\n        }\r\n        return false;\r\n    }\r\n}",
    "javascript": "// Runtime: 119 ms (Top 57.14%) | Memory: 49 MB (Top 61.90%)\r\nvar largestMerge = function(word1, word2) {\r\n    let ans = '';\r\n    let w1 = 0, w2 = 0;\r\n\r\n    while(w1 < word1.length && w2 < word2.length) {\r\n        if(word1[w1] > word2[w2]) ans += word1[w1++];\r\n        else if(word2[w2] > word1[w1]) ans += word2[w2++];\r\n        else {\r\n            const rest1 = word1.slice(w1);\r\n            const rest2 = word2.slice(w2);\r\n\r\n            if(rest1 > rest2) ans += word1[w1++];\r\n            else ans += word2[w2++];\r\n        }\r\n    }\r\n    ans += word1.slice(w1);\r\n    ans += word2.slice(w2);\r\n    return ans;\r\n};"
  }
}
