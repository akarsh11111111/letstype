export default {
  "id": 1513,
  "name": "Number of Substrings With Only 1s",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/number-of-substrings-with-only-1s",
  "relativeDir": "N/Number of Substrings With Only 1s",
  "slug": "1513-number-of-substrings-with-only-1s",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 30,
    "java": 19,
    "python": 12,
    "javascript": 5
  },
  "languages": {
    "cpp": "// Runtime: 12 ms (Top 82.80%) | Memory: 8.8 MB (Top 30.73%)\r\nclass Solution {\r\n    /*\r\n    To calculate the substring the formula is (n*n+1)/2 so just find the range and calculate the substrings.\r\n    */\r\nint mod=1e9+7;\r\n    long calculateNumbeOfSubstrings(string &s,int &l,int &r){\r\n        long range=r-l;\r\n        long ans=range*(range+1)/2;\r\n        return ans;\r\n    }\r\npublic:\r\n    int numSub(string s) {\r\n        int ans=0;\r\n        int len=s.size();\r\n        int r=0,l=0;\r\n        while(r<len){\r\n            while(r<len && s[l]!='1'){\r\n                l++;\r\n                r++;\r\n            }\r\n            while(r<len && s[r]!='0'){\r\n                r++;\r\n            }\r\n               ans=(ans+calculateNumbeOfSubstrings(s,l,r))%mod;\r\n                l=r;\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 46 ms (Top 40.6%) | Memory: 14.50 MB (Top 56.2%)\r\n\r\nclass Solution(object):\r\n    def numSub(self, s):\r\n        res, currsum = 0,0\r\n        for digit in s:\r\n            if digit == '0':\r\n                currsum = 0\r\n            else:\r\n                currsum += 1 \r\n                res+=currsum \r\n        return res % (10**9+7)",
    "java": "class Solution {\r\n    public int numSub(String s) {\r\n        char[] ch = s.toCharArray();\r\n        long count =0;\r\n        long result =0;\r\n        for(int i=0; i<ch.length; i++){\r\n            if(ch[i] == '1'){\r\n                count++;\r\n                result += count;\r\n            }\r\n            else{\r\n                count = 0;\r\n            \r\n            }\r\n        }\r\n        return (int)(result%1000000007);\r\n        \r\n    }\r\n}",
    "javascript": "// Runtime: 58 ms (Top 68.6%) | Memory: 45.00 MB (Top 50.0%)\r\n\r\nvar numSub = function(s) {\r\n    return s.split(\"0\").map(a=>a.length*(a.length+1)/2).reduce((a,b)=>a+b,0)  % 1000000007;\r\n};"
  }
}
