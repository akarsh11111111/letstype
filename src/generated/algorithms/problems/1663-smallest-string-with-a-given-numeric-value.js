export default {
  "id": 1663,
  "name": "Smallest String With A Given Numeric Value",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/smallest-string-with-a-given-numeric-value",
  "relativeDir": "S/Smallest String With A Given Numeric Value",
  "slug": "1663-smallest-string-with-a-given-numeric-value",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 26,
    "java": 17,
    "python": 14,
    "javascript": 7
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    string getSmallestString(int n, int k) {\r\n        string str=\"\";\r\n        for(int i=0;i<n;i++){\r\n            str+='a';\r\n        }\r\n        int curr=n;\r\n        int diff=k-curr;\r\n        if(diff==0) return str;\r\n        for(int i=n-1;i>=0 && diff>0;i--){\r\n            if(diff>25){\r\n                str[i]='z';\r\n                diff-=25;\r\n            }else{\r\n                str[i]=char('a'+diff);\r\n                return str;\r\n            }\r\n        }\r\n        return str;\r\n    }\r\n};\r\n// a a a a a\r\n// 5\r\n// diff= 73-5\r\n//",
    "python": "# Runtime: 1870 ms (Top 22.43%) | Memory: 15.5 MB (Top 41.47%)\r\nclass Solution:\r\n    def getSmallestString(self, n: int, k: int) -> str:\r\n        ans = ['a']*n # Initialize the answer to be 'aaa'.. length n\r\n        val = n #Value would be length as all are 'a'\r\n\r\n        for i in range(n-1, -1, -1):\r\n            if val == k: # if value has reached k, we have created our lexicographically smallest string\r\n                break\r\n            val -= 1 # reduce value by one as we are removing 'a' and replacing by a suitable character\r\n            ans[i] = chr(96 + min(k - val, 26)) # replace with a character which is k - value or 'z'\r\n            val += ord(ans[i]) - 96 # add the value of newly appended character to value\r\n\r\n        return ''.join(ans) # return the ans string in the by concatenating the list",
    "java": "// Runtime: 22 ms (Top 80.31%) | Memory: 63.1 MB (Top 85.85%)\r\nclass Solution {\r\n    public String getSmallestString(int n, int k) {\r\n        char[] ch = new char[n];\r\n        for(int i=0;i<n;i++) {\r\n            ch[i]='a';\r\n            k--;\r\n        }\r\n        int currChar=0;\r\n        while(k>0) {\r\n            currChar=Math.min(25,k);\r\n            ch[--n]+=currChar;\r\n            k-=currChar;\r\n        }\r\n        return String.valueOf(ch);\r\n    }\r\n}",
    "javascript": "var getSmallestString = function(n, k) {\r\n    k -= n\r\n    let alpha ='_bcdefghijklmnopqrstuvwxy_',\r\n        ans = 'z'.repeat(~~(k / 25))\r\n    if (k % 25) ans = alpha[k % 25] + ans\r\n    return ans.padStart(n, 'a')\r\n};"
  }
}
