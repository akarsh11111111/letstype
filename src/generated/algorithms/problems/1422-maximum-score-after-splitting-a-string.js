export default {
  "id": 1422,
  "name": "Maximum Score After Splitting a String",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-score-after-splitting-a-string",
  "relativeDir": "M/Maximum Score After Splitting a String",
  "slug": "1422-maximum-score-after-splitting-a-string",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 16,
    "java": 11,
    "python": 31,
    "javascript": 29
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int maxScore(string s) {\r\n        int ones = 0;\r\n        int res = -s.length();\r\n        for (int i = 0; i < s.length() - 1; i++) {\r\n            if (s[i] == '1') ones += 2;\r\n            if (i - ones > res) res = i - ones;\r\n        };\r\n\r\n        ones >>= 1;\r\n        if (s[s.length() - 1] == '1') ones++;\r\n\r\n        return ones + res + 1;\r\n    }\r\n};",
    "python": "# Runtime: 67 ms (Top 31.53%) | Memory: 13.9 MB (Top 60.59%)\r\nclass Solution:\r\n    def maxScore(self, s: str) -> int:\r\n        m0=0\r\n        m1=0\r\n        for i in s:\r\n            if i==\"0\":\r\n                m0+=1\r\n            else:\r\n                m1+=1\r\n        if m0==0 or m1==0:\r\n            return max(m0-1,m1-1)\r\n        l=len(s)\r\n        i=0\r\n        max_=0\r\n        c0=0\r\n        c1=m1\r\n        idx=-1\r\n        while i <l:\r\n            if s[i]==\"0\":\r\n                c0+=1\r\n            else:\r\n                c1-=1\r\n            if max_<c1+c0:\r\n                max_=c1+c0\r\n                idx=i\r\n            max_=max(max_,c1+c0)\r\n            i+=1\r\n        if idx==l-1:\r\n            return max_-1\r\n        return max_",
    "java": "// Runtime: 17 ms (Top 14.4%) | Memory: 44.28 MB (Top 5.7%)\r\n\r\nclass Solution {\r\n    public int maxScore(String s) {\r\n        int max =0;\r\n        for(int i =0; i<s.length()-1; i++)\r\n            max = Math.max(max,s.substring(0,i+1).replace(\"1\",\"\").length()+s.substring(i+1).replace(\"0\",\"\").length());\r\n        \r\n        return max;\r\n    }\r\n}",
    "javascript": "// Runtime: 45 ms (Top 96.83%) | Memory: 48.50 MB (Top 8.24%)\r\n\r\n/**\r\n * @param {string} s\r\n * @return {number}\r\n */\r\nvar maxScore = function(s) {\r\n    const length = s.length;\r\n        let ones = 0;\r\n        let tmpScore = s[0] === '0' ? 1 : 0;\r\n        let score = tmpScore;\r\n        \r\n        for (let i = 1; i < length - 1; i++) {\r\n            if (s[i] === '0') {\r\n                tmpScore += 1;\r\n            } else {\r\n                ones += 1;\r\n                tmpScore -= 1;\r\n            }\r\n\r\n            if (tmpScore > score) {\r\n                score = tmpScore;\r\n            }\r\n        }\r\n        \r\n        ones += s[length - 1] === '1' ? 1 : 0;\r\n\r\n        return ones + score;\r\n};"
  }
}
