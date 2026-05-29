export default {
  "id": 214,
  "name": "Shortest Palindrome",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/shortest-palindrome",
  "relativeDir": "S/Shortest Palindrome",
  "slug": "0214-shortest-palindrome",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 57,
    "java": 23,
    "python": 20,
    "javascript": 24
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    string shortestPalindrome(string s) {\r\n        \r\n        int BASE = 26, MOD = 1e9+7;\r\n        int start = s.size()-1;\r\n        \r\n        // Calculate hash values from front and back\r\n        long front = 0, back = 0;\r\n        long power = 1;\r\n        \r\n        for(int i=0; i<s.size(); i++){\r\n            front = (front*BASE + (s[i]-'a'+1))%MOD;\r\n            back = (back*BASE + (s[start--]-'a'+1))%MOD;\r\n            power = (power*BASE)%MOD;\r\n        }\r\n        \r\n        // If hash values of both front and back are same, then it is a palindrome\r\n        if(front == back){\r\n            return s;\r\n        }\r\n        \r\n        // As it is not palindrome, add last characters in the beginning, and then check.\r\n        // Store the hash value of the newly added characters from front and back\r\n        \r\n\t\t// new_front will be added to front to get new hash value\r\n        // new_back will be added to back to get new hash value \r\n        long new_front = 0, new_back = 0;\r\n        long new_power = 1;\r\n\t\t\r\n\t\tint end=s.size()-1;\r\n        string ans = \"\";\r\n        \r\n        while(end >= 0){\r\n\t\t\t// Taking character from ending \r\n            int ch = (s[end]-'a'+1);\r\n            \r\n            new_front = (new_front*BASE + ch*power) % MOD;\r\n            new_back = (ch*new_power + new_back) % MOD;\r\n            new_power = (new_power*BASE) % MOD;\r\n            \r\n            int final_front = (new_front + front) % MOD;\r\n\t\t\tback = (back*BASE) % MOD;\r\n            int final_back = (new_back + back) % MOD;\r\n                \r\n\t\t\t// Storing it in separate string\r\n            ans += s[end];\r\n            end--;\r\n            \r\n\t\t\t// Both hashes are same\r\n            if(final_front == final_back){\r\n                break;\r\n            }\r\n        }\r\n        return ans+s;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def shortestPalindrome(self, s: str) -> str:\r\n        \r\n        end = 0\r\n        \r\n        # if the string itself is a palindrome return it\r\n        if(s == s[::-1]):\r\n            return s\r\n        \r\n        # Otherwise find the end index of the longest palindrome that starts\r\n        # from the first character of the string\r\n        \r\n        for i in range(len(s)+1):\r\n            if(s[:i]==s[:i][::-1]):\r\n                end=i-1\r\n        \r\n        # return the string with the remaining characters other than\r\n        # the palindrome reversed and added at the beginning\r\n        \r\n        return (s[end+1:][::-1])+s",
    "java": "class Solution {\r\n    public String shortestPalindrome(String s) {\r\n        for(int i=s.length()-1; i >= 0; i--){\r\n            if(isPalindrome(s, 0, i)){\r\n                String toAppend = s.substring(i+1);\r\n                String result = new StringBuilder(toAppend).reverse().append(s).toString();\r\n                return result;\r\n            }\r\n        }\r\n        String result = new StringBuilder(s).reverse().append(s).toString();\r\n        return result;        \r\n    }\r\n    \r\n    boolean isPalindrome(String s, int left, int right){\r\n        while(left < right){\r\n            if(s.charAt(left) != s.charAt(right))\r\n                return false;\r\n            left++;\r\n            right--;\r\n        }\r\n        return true;\r\n    }\r\n}",
    "javascript": "// Runtime: 85 ms (Top 82.20%) | Memory: 46.8 MB (Top 16.95%)\r\nvar shortestPalindrome = function(s) {\r\n    const rev = s.split('').reverse().join('');\r\n    const slen = s.length;\r\n\r\n    const z = s + '$' + rev;\r\n    const zlen = z.length;\r\n\r\n    const lpt = new Array(zlen).fill(0);\r\n\r\n    for(let i = 1; i < zlen; i++) {\r\n        let j = lpt[i-1];\r\n\r\n        while(j > 0 && z.charAt(i) != z.charAt(j))\r\n            j = lpt[j-1];\r\n\r\n        if(z.charAt(i) == z.charAt(j))\r\n            j++;\r\n\r\n        lpt[i] = j;\r\n    }\r\n\r\n    return rev.slice(0, slen - lpt.at(-1)) + s;\r\n};"
  }
}
