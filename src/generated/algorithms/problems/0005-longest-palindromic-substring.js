export default {
  "id": 5,
  "name": "Longest Palindromic Substring",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/longest-palindromic-substring",
  "relativeDir": "L/Longest Palindromic Substring",
  "slug": "0005-longest-palindromic-substring",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 30,
    "java": 23,
    "python": 15,
    "javascript": 53
  },
  "languages": {
    "cpp": "// Runtime: 168 ms (Top 52.00%) | Memory: 173.7 MB (Top 19.81%)\r\nclass Solution {\r\npublic:\r\n    string longestPalindrome(string s) {\r\n        if(s.size() <= 1) return s;\r\n\r\n        string longest = \"\";\r\n\r\n        for (int i = 0; i < s.size(); i++) {\r\n            string sub1 = expand(s, i, i+1);\r\n            string sub2 = expand(s, i, i);\r\n\r\n            string sub3 = sub1.size() > sub2.size() ? sub1 : sub2;\r\n\r\n            if(sub3.size() > longest.size()) {\r\n                longest = sub3;\r\n            }\r\n        }\r\n        return longest;\r\n    }\r\n\r\n    string expand(string s, int i, int j) {\r\n        while(j < s.size() && i >= 0 && s[i] == s[j]) {\r\n            i--;\r\n            j++;\r\n        }\r\n        // Add 1 to i and subtract 1 from j because the range is expanded by 1 on each side before it ends\r\n        return s.substr(i+1, j-i-1);\r\n    }\r\n};",
    "python": "# Runtime: 643 ms (Top 86.54%) | Memory: 14 MB (Top 58.84%)\r\nclass Solution:\r\n    def longestPalindrome(self, s: str) -> str:\r\n        res = \"\"\r\n        for i in range(len(s)):\r\n            left, right = i - 1, i + 1\r\n\r\n            while (right < len(s) and s[right] == s[i]):\r\n                right += 1\r\n\r\n            while (0 <= left < right < len(s) and s[left] == s[right]):\r\n                left, right = left - 1, right + 1\r\n\r\n            res = s[left+1:right] if right - left-1 > len(res) else res\r\n        return res",
    "java": "class Solution {\r\n    String max = \"\";\r\n    \r\n    private void checkPalindrome(String s, int l, int r) {\r\n        while (l >= 0 && r < s.length() && s.charAt(l) == s.charAt(r)) {\r\n            if (r - l >= max.length()) {\r\n                max = s.substring(l, r + 1);\r\n            }   \r\n\r\n            l--;\r\n            r++;\r\n        }\r\n    }\r\n    \r\n    public String longestPalindrome(String s) {\r\n        for (int i = 0; i < s.length(); i++) {\r\n            checkPalindrome(s, i, i);\r\n            checkPalindrome(s, i, i + 1);   \r\n        }\r\n        \r\n        return max;\r\n    }\r\n}",
    "javascript": "I solve the problem distinguishing two different cases.\r\nFirst I consider the case when the length of the palindrome to be found is odd (there is a center). \r\n\tI then expand the search to left and right from the possible found center.\r\nThen I consider the case when the length of the palindrome to be found is pair (there is no center/middle).\r\n\tI then expand the search to left and right from the possible palindrome having the form \"xx\".\r\n```/**\r\n * @param {string} s\r\n * @return {string}\r\n */\r\nvar longestPalindrome = function(s) {\r\n    let longestP = s[0];\r\n    let palindrome = \"\";\r\n    if(s.length === 1 ) return s;\r\n    \r\n    //the length of the palindrome is odd\r\n    for(let index = 1; index < s.length-1; index++){\r\n        if(s[index - 1] === s[index + 1]){\r\n            palindrome = s[index - 1] + s[index] + s[index + 1];\r\n            for(let k = 1; index - 1 - k > -1 && index + 1 + k < s.length; k++){\r\n                if(s[index - 1 - k] === s[index + 1 + k]){\r\n                    palindrome = s[index - 1 - k] + palindrome + s[index + 1 + k];\r\n                }\r\n                else{\r\n                    break;\r\n                }\r\n            }\r\n        }\r\n        if (palindrome.length > longestP.length){\r\n            longestP = palindrome;\r\n        }\r\n        palindrome = \"\";\r\n    }\r\n    \r\n    //the length of the palindrome is pair\r\n    for(let index = 0; index < s.length-1; index++){\r\n        if(s[index] === s[index + 1]){\r\n            palindrome = s[index] + s[index + 1];\r\n            for(let k = 1; (index - k > -1) && (index + 1 + k < s.length); k++){\r\n                if(s[index - k] === s[index + 1 + k]){\r\n                    palindrome = s[index - k] + palindrome + s[index + 1 + k];\r\n                }\r\n                else{\r\n                    break;\r\n                }\r\n            }\r\n        }\r\n        if (palindrome.length > longestP.length){\r\n            longestP = palindrome;\r\n        }\r\n        palindrome = \"\";\r\n    }\r\n    return longestP;\r\n};`"
  }
}
