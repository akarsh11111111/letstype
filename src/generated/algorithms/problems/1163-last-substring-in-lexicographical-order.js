export default {
  "id": 1163,
  "name": "Last Substring in Lexicographical Order",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/last-substring-in-lexicographical-order",
  "relativeDir": "L/Last Substring in Lexicographical Order",
  "slug": "1163-last-substring-in-lexicographical-order",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 33,
    "java": 27,
    "python": 19,
    "javascript": 41
  },
  "languages": {
    "cpp": "// Runtime: 63 ms (Top 63.10%) | Memory: 18.5 MB (Top 16.07%)\r\n\r\nclass Solution\r\n{\r\n    public:\r\n        string lastSubstring(string s)\r\n        {\r\n            int maxIndex = s.length() - 1;\r\n\r\n            for (int currIndex = s.length() - 1; currIndex >= 0; currIndex--)\r\n            {\r\n                if (s[currIndex] > s[maxIndex])\r\n                    maxIndex = currIndex;\r\n\r\n                else if (s[currIndex] == s[maxIndex])\r\n                {\r\n                    int i = currIndex + 1;\r\n                    int j = maxIndex + 1;\r\n\r\n                    while (i < maxIndex && j < s.length() && s[i] == s[j])\r\n                    {\r\n                        i++;\r\n                        j++;\r\n                    }\r\n\r\n                    if (i == maxIndex || j == s.length() || s[i] > s[j])\r\n                        maxIndex = currIndex;\r\n                }\r\n            }\r\n\r\n            return s.substr(maxIndex);\r\n        }\r\n};",
    "python": "# Runtime: 273 ms (Top 82.1%) | Memory: 20.15 MB (Top 100.0%)\r\n\r\nclass Solution:\r\n    def lastSubstring(self, s: str) -> str:\r\n        i = 0\r\n        j = 1\r\n        k = 0\r\n        n = len(s)\r\n        while j + k < n:\r\n            if s[i + k] == s[j + k]:\r\n                k += 1\r\n            elif s[i + k] > s[j + k]:\r\n                j += k + 1\r\n                k = 0\r\n            elif s[i + k] < s[j + k]:\r\n                i = max(i + k + 1, j)\r\n                j = i + 1\r\n                k = 0\r\n        return s[i:]",
    "java": "// Runtime: 27 ms (Top 54.24%) | Memory: 57.7 MB (Top 33.05%)\r\nclass Solution {\r\n\r\npublic String lastSubstring(String s) {\r\nint maxIndex = s.length() - 1;\r\n\r\nfor(int currIndex = s.length() - 1 ; currIndex >= 0 ; currIndex--){\r\n    if(s.charAt(currIndex) > s.charAt(maxIndex))\r\n        maxIndex = currIndex;\r\n\r\n    else if(s.charAt(currIndex) == s.charAt(maxIndex)){\r\n        int i = currIndex + 1;\r\n        int j = maxIndex + 1;\r\n\r\n        while(i < maxIndex && j < s.length() && s.charAt(i) == s.charAt(j)){\r\n            i++;\r\n            j++;\r\n        }\r\n\r\n        if(i == maxIndex || j == s.length() || s.charAt(i) > s.charAt(j))\r\n            maxIndex = currIndex;\r\n    }\r\n}\r\n\r\nreturn s.substring(maxIndex);\r\n}\r\n}",
    "javascript": "// Runtime: 83 ms (Top 70.37%) | Memory: 48.90 MB (Top 44.44%)\r\n\r\n// Second Solution\r\n// Efficient\r\n/*\r\nThe substring starting with the largest character is the answer. Hence we advance j and try to find the biggest character \r\nwhile we use i to keep track of the current maximum string.\r\nWhat if there is more than one largest character?\r\n- we will need to compare both substrings starting with the largest character.\r\n- (1) the substring with bigger next character is the answer.\r\n- (2) if the shorter substring is exactly the same to the longer substring up to its end, the longer substring is the answer.\r\n\r\ni is the starting index of the answer\r\nj is the pointer iterating through given string\r\nk is the offset to use when we find two substrings starting with the same character\r\n*/\r\nvar lastSubstring = function(s) {\r\n    let i = 0, j = 1, k = 0;\r\n    while (j + k < s.length) {\r\n        k = 0;\r\n        while (s[i+k] === s[j+k]) {\r\n            k += 1;\r\n            if (j + k === s.length) break;\r\n            // if the shorter substring is exactly the same to the longer substring up to its end, \r\n            // the longer substring is the answer.\r\n            // hence, if j+k reaches the end, s.substring(i) will be the answer since we maintain i < j\r\n        }\r\n        if (s[i+k] > s[j+k]) {\r\n            j = j + 1 + k; // because there is no chance s[i+k] <= s[j+k]\r\n        } else if (s[i+k] < s[j+k]) {\r\n            i = i + 1 + k; // because there is no chance s[i+k] >= s[j+k]\r\n        }\r\n        // to ensure that i < j\r\n        if (i >= j) {\r\n            j = i + 1;\r\n        }\r\n    }\r\n    return s.substring(i);\r\n    // T.C: O(N)\r\n    // S.C: O(1)\r\n};"
  }
}
