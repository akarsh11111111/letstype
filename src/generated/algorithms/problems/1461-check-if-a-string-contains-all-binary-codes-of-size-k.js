export default {
  "id": 1461,
  "name": "Check If a String Contains All Binary Codes of Size K",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k",
  "relativeDir": "C/Check If a String Contains All Binary Codes of Size K",
  "slug": "1461-check-if-a-string-contains-all-binary-codes-of-size-k",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 35,
    "java": 10,
    "python": 12,
    "javascript": 37
  },
  "languages": {
    "cpp": "// Runtime: 183 ms (Top 88.92%) | Memory: 20.50 MB (Top 92.45%)\r\n\r\nclass Solution {\r\npublic:\r\n    bool hasAllCodes(string s, int k) {\r\n        int n=pow(2,k),m=s.size();\r\n        vector<bool>check(n,0); //Check Array ,initially all value false;\r\n        \r\n        int val=0; //Variable that will help in formation of binary to decimal value of every substring.\r\n        int i=0,j=0; //Sliding window ponter.\r\n        \r\n        while(j<m)\r\n        {\r\n            val=val*2+(s[j]-'0'); //Form Binary ,Make it decimal.\r\n            \r\n            if(j-i+1<k) //If window size is Less than k ,just j++;\r\n                j++;\r\n            else if(j-i+1==k) //If we hit k size.\r\n            {\r\n                check[val]=true; //Mark check cval true.\r\n                val=val-(s[i]-'0')*(pow(2,k-1)); //Remove ith value's Calucaltion .\r\n                i++; //Increment i \r\n                j++; //and Increment j to maintain size of window as k\r\n            }\r\n        }\r\n        \r\n        for(int l=0;l<n;l++)\r\n        {\r\n            if(check[l]==false) //If we didn't find any value ,means that susbtring is missing\r\n                return false; //Return false;\r\n        }\r\n        \r\n        return true; //Return true;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def hasAllCodes(self, s: str, k: int) -> bool:\r\n        \r\n        Z = set()\r\n\r\n        for i in range(len(s)-k+1):\r\n            Z.add(s[i:i+k])\r\n            \r\n        if len(Z) == 2**k:\r\n            return True\r\n\r\n        return False",
    "java": "class Solution {\r\n    public boolean hasAllCodes(String s, int k) {\r\n        HashSet<String> hs=new HashSet();\r\n        for(int i=0;i<=s.length()-k;i++){\r\n            hs.add(s.substring(i,i+k));\r\n        }\r\n        if(hs.size() == Math.pow(2,k))return true;\r\n        return false;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {string} s\r\n * @param {number} k\r\n * @return {boolean}\r\n */\r\nvar hasAllCodes = function(s, k) {\r\n    \r\n    if (k > s.length) {\r\n        return false;\r\n    }\r\n    \r\n    /* Max strings can be generated of k chars 0/1. */\r\n    const max = Math.pow(2, k);\r\n    \r\n    /*\r\n    * Create a set. \r\n    * It will contain all unique values.\r\n    */ \r\n    const set = new Set();\r\n    \r\n    for(let i = 0; i < s.length - k + 1; i++) {\r\n        /* Generate substring of size k from index i */\r\n        const substr = s.substr(i, k);        \r\n        set.add(substr);\r\n        \r\n        /* \r\n        * if enough of unique strings are generated, \r\n        * break the loop as there is no point of iterating\r\n        * as we have found all necessary strings.\r\n        */\r\n        if (set.size === max) {\r\n            return true;\r\n        }\r\n    }\r\n          \r\n    return set.size === max;\r\n};"
  }
}
