export default {
  "id": 680,
  "name": "Valid Palindrome II",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/valid-palindrome-ii",
  "relativeDir": "V/Valid Palindrome II",
  "slug": "0680-valid-palindrome-ii",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 35,
    "java": 25,
    "python": 19,
    "javascript": 30
  },
  "languages": {
    "cpp": "class Solution {\r\n  int first_diff(string s) {\r\n    for (int i = 0; i < (s.size() + 1) / 2; ++i) {\r\n      if (s[i] != s[s.size() - 1 - i]) {\r\n        return i;\r\n      }\r\n    }\r\n    return -1;\r\n  }\r\npublic:\r\n    bool validPalindrome(string s) {\r\n      int diff = first_diff(s);\r\n      if (diff == -1 || (s.size() % 2 == 0 && diff + 1 == s.size() / 2)) {\r\n        // abca. If we have pattern like this than we can delete one of the symbols\r\n        return true;\r\n      }\r\n      \r\n      bool first_valid = true;\r\n      for (int i = diff; i < (s.size() + 1) / 2; ++i) {\r\n        if (s[i] != s[s.size() - 2 - i]) {\r\n          first_valid = false;\r\n          break;\r\n        }\r\n      }\r\n      \r\n      bool second_valid = true;\r\n      for (int i = diff; i < (s.size() + 1) / 2; ++i) {\r\n        if (s[i + 1] != s[s.size() - 1 - i]) {\r\n          second_valid = false;\r\n          break;\r\n        }\r\n      }\r\n      return first_valid || second_valid;\r\n    }\r\n};",
    "python": "# Runtime: 9164 ms (Top 5.04%) | Memory: 645.8 MB (Top 5.21%)\r\nclass Solution:\r\n    def validPalindrome(self, s: str) -> bool:\r\n        has_deleted = False\r\n\r\n        def compare(s, has_deleted):\r\n\r\n            if len(s) <= 1:\r\n                return True\r\n\r\n            if s[0] == s[-1]:\r\n                return compare(s[1:-1], has_deleted)\r\n            else:\r\n                if not has_deleted:\r\n                    return compare(s[1:], True) or compare(s[:-1], True)\r\n                else:\r\n                    return False\r\n\r\n        return compare(s, has_deleted)",
    "java": "class Solution {\r\n    boolean first = false;\r\n    public boolean validPalindrome(String s) {\r\n        int left = 0;\r\n        int right = s.length()-1;\r\n        \r\n        \r\n        while(left <= right){\r\n            if( s.charAt(left) == (s.charAt(right))){\r\n                left++;\r\n                right--;\r\n            }else if(!first){\r\n                first = true;\r\n                String removeLeft = s.substring(0,left).concat(s.substring(left+1));\r\n                String removeright = s.substring(0,right).concat(s.substring(right+1));\r\n                left++;\r\n                right--;\r\n                return validPalindrome(removeLeft) || validPalindrome(removeright);   \r\n            } else {\r\n                return false;\r\n            }\r\n        }\r\n     return true;   \r\n    }\r\n}",
    "javascript": "// Runtime: 77 ms (Top 37.5%) | Memory: 48.02 MB (Top 54.6%)\r\n\r\n/*\r\nSolution:\r\n\r\n1. Use two pointers, one initialised to 0 and the other initialised to end of string. Check if characters at each index\r\nare the same. If they are the same, shrink both pointers. Else, we have two possibilities: one that neglects character\r\nat left pointer and the other that neglects character at right pointer. Hence, we check if s[low+1...right] is a palindrome\r\nor s[low...right-1] is a palindrome. If one of them is a palindrome, we know that we can form a palindrome with one deletion and return true. Else, we require more than one deletion, and hence we return false.\r\n*/\r\nvar validPalindrome = function(s) {\r\n    let low = 0, high = s.length-1;\r\n    while (low < high) {\r\n        if (s[low] !== s[high]) {\r\n            return isPalindrome(s, low+1, high) || isPalindrome(s, low, high-1);\r\n        }\r\n        low++, high--;\r\n    }\r\n    return true;\r\n    // T.C: O(N)\r\n    // S.C: O(1)\r\n};\r\n\r\nfunction isPalindrome(str, low, high) {\r\n    while (low < high) {\r\n        if (str[low] !== str[high]) return false;\r\n        low++, high--;\r\n    }\r\n    return true;\r\n}"
  }
}
