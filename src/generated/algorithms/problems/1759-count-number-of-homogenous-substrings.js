export default {
  "id": 1759,
  "name": "Count Number of Homogenous Substrings",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/count-number-of-homogenous-substrings",
  "relativeDir": "C/Count Number of Homogenous Substrings",
  "slug": "1759-count-number-of-homogenous-substrings",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 15,
    "java": 16,
    "python": 15,
    "javascript": 18
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int countHomogenous(string s) {\r\n        int mod=1e9+7,size=s.size(),i=0,j=0,count=0;\r\n        while(j<size){\r\n            if(s[j]!=s[j+1]){\r\n                long n=j-i+1;\r\n                count = count + (n*(n+1)/2)%mod;\r\n                i=j+1;\r\n            }\r\n            j++;\r\n        }\r\n        return count;\r\n    }\r\n};",
    "python": "# Runtime: 127 ms (Top 59.9%) | Memory: 17.38 MB (Top 67.5%)\r\n\r\nclass Solution:\r\n    def countHomogenous(self, s: str) -> int:\r\n        res, count, n = 0, 1, len(s)\r\n        for i in range(1,n):\r\n            if s[i]==s[i-1]:\r\n                count+=1\r\n            else:\r\n                if count>1:\r\n                    res+=(count*(count-1)//2)\r\n                count=1    \r\n        if count>1:\r\n            res+=(count*(count-1)//2)\r\n        return (res+n)%(10**9+7)",
    "java": "// Runtime: 25 ms (Top 22.57%) | Memory: 50.5 MB (Top 79.00%)\r\nclass Solution {\r\n    public int countHomogenous(String s) {\r\n        int res = 1;\r\n        int carry = 1;\r\n        int mod = 1000000007;\r\n        for(int i =1;i<s.length();i++){\r\n            if(s.charAt(i) == s.charAt(i-1)) carry++;\r\n            else carry = 1;\r\n            res = (res + carry) % mod;\r\n        }\r\n\r\n        return res;\r\n\r\n    }\r\n}",
    "javascript": "var countHomogenous = function(s) {\r\n    let mod = 1e9 + 7\r\n    let n = s.length\r\n    let j=0, res = 0\r\n    \r\n    for(let i=0; i<n; i++){\r\n        if(i>0 && s[i-1] != s[i]){\r\n            let x = i-j\r\n            res += x*(x+1) / 2\r\n            j = i\r\n        }\r\n    }\r\n    \r\n    let x = n-j\r\n    res += x*(x+1) / 2\r\n\r\n    return res%mod\r\n};"
  }
}
