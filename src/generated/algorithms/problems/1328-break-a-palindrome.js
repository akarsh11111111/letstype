export default {
  "id": 1328,
  "name": "Break a Palindrome",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/break-a-palindrome",
  "relativeDir": "B/Break a Palindrome",
  "slug": "1328-break-a-palindrome",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 26,
    "java": 37,
    "python": 17,
    "javascript": 19
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    string breakPalindrome(string palindrome) {\r\n        int n = palindrome.size();\r\n        string res = \"\";\r\n        if(n==1){\r\n            return res;\r\n        }\r\n        int i = 0;\r\n        while(i<n){\r\n            if(n%2!=0 && i==n/2){\r\n                i++;\r\n                continue;\r\n            }\r\n            if(palindrome[i] != 'a'){\r\n                palindrome[i] = 'a';\r\n                break;\r\n            }\r\n            i++;\r\n        }\r\n        if(i==n){\r\n            palindrome[i-1] = 'b';\r\n        }\r\n        return palindrome;\r\n    }\r\n};",
    "python": "class Solution(object):\r\n    def breakPalindrome(self, palindrome):\r\n        \"\"\"\r\n        :type palindrome: str\r\n        :rtype: str\r\n        \"\"\"\r\n        s = palindrome\r\n        palindrome = [ch for ch in s]\r\n        if len(palindrome) == 1:\r\n            return \"\"\r\n        \r\n        for i in range(len(palindrome)//2):\r\n            if palindrome[i] != 'a':\r\n                palindrome[i] = 'a'\r\n                return \"\".join(palindrome)\r\n        palindrome[-1] = 'b'\r\n        return \"\".join(palindrome)",
    "java": "class Solution {\r\n    public String breakPalindrome(String palindrome) {\r\n        \r\n        int left = 0;\r\n        int right = palindrome.length()-1;\r\n        \r\n        if(palindrome.length()==1)\r\n            return \"\";\r\n        \r\n        while(left<right){\r\n            \r\n            char c = palindrome.charAt(left);\r\n            \r\n            if(c!='a'){\r\n                StringBuilder sb = new StringBuilder(palindrome);\r\n                sb.setCharAt(left,'a');\r\n                return sb.toString();\r\n            } \r\n            else{\r\n                left++;\r\n                right--;\r\n            }\r\n            \r\n        \r\n        }\r\n       \r\n        // aaaa\r\n        // aba\r\n        \r\n        \r\n              StringBuilder sb = new StringBuilder(palindrome);\r\n                sb.setCharAt(palindrome.length()-1,'b');\r\n                return sb.toString();\r\n        \r\n    \r\n    }\r\n}",
    "javascript": "// Runtime: 96 ms (Top 40.74%) | Memory: 41.7 MB (Top 89.81%)\r\nvar breakPalindrome = function(palindrome) {\r\n    // domain n / 2 k pehlay\r\n    palindrome = palindrome.split('');\r\n    const len = palindrome.length;\r\n    if(len == 1) return \"\";\r\n    const domain = Math.floor(len / 2);\r\n    let firstNonAChar = -1, lastAChar = -1;\r\n    for(let i = 0; i < domain; i++) {\r\n        if(palindrome[i] != 'a') {\r\n            firstNonAChar = i;\r\n            break;\r\n        }\r\n    }\r\n    if(firstNonAChar == -1) {\r\n        palindrome[len - 1] = 'b';\r\n    } else palindrome[firstNonAChar] = 'a';\r\n    return palindrome.join('');\r\n};"
  }
}
