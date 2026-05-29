export default {
  "id": 424,
  "name": "Longest Repeating Character Replacement",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/longest-repeating-character-replacement",
  "relativeDir": "L/Longest Repeating Character Replacement",
  "slug": "0424-longest-repeating-character-replacement",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 25,
    "java": 23,
    "python": 24,
    "javascript": 26
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int characterReplacement(string s, int k) {\r\n        int n = s.length();\r\n        if(n == k) return n;\r\n        if(n == 1) return 1;\r\n\r\n        int res = 0;\r\n        int maxCnt = 0;\r\n        \r\n        unordered_map<char,int> mp;\r\n        \r\n        for(int l = 0, r = 0; r < n; r++)\r\n        {\r\n            mp[s[r]]++;\r\n            maxCnt = max(maxCnt,mp[s[r]]);\r\n            while(r - l + 1 - maxCnt > k){\r\n                mp[s[l]]--;\r\n                l++;\r\n            }\r\n            res = max(r - l + 1, res);\r\n        }\r\n        return res;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def characterReplacement(self, s: str, k: int) -> int:\r\n        # Initialize variables\r\n        window_start = 0\r\n        max_length = 0\r\n        max_count = 0\r\n        char_count = {}\r\n\r\n        # Traverse the string s\r\n        for window_end in range(len(s)):\r\n            # Increment the count of the current character\r\n            char_count[s[window_end]] = char_count.get(s[window_end], 0) + 1\r\n            # Update the maximum count seen so far\r\n            max_count = max(max_count, char_count[s[window_end]])\r\n            \r\n            # Shrink the window if required\r\n            if window_end - window_start + 1 > max_count + k:\r\n                char_count[s[window_start]] -= 1\r\n                window_start += 1\r\n            \r\n            # Update the maximum length of the substring with repeating characters seen so far\r\n            max_length = max(max_length, window_end - window_start + 1)\r\n        \r\n        return max_length",
    "java": "// Runtime: 7 ms (Top 85.13%) | Memory: 42.60 MB (Top 48.1%)\r\n\r\n/**\r\n * Time O(n)\r\n * Space O(26)\r\n */\r\nclass Solution {\r\n  public int characterReplacement(String s, int k) {\r\n    // Space O(26)\r\n    int[] dic = new int[26];\r\n    int start = 0;\r\n    int maxLen = 0;\r\n    // Time O(n)\r\n    for (int end = 0; end < s.length(); end++) {\r\n      maxLen = Math.max(maxLen, ++dic[s.charAt(end) - 'A']);\r\n      if (end - start + 1 > maxLen + k) {\r\n        dic[s.charAt(start) - 'A']--;\r\n        start++;\r\n      }\r\n    }\r\n    return s.length() - start;\r\n  }\r\n}",
    "javascript": "// O(n) time | O(26) -> O(1) space - only uppercase English letters\r\nvar characterReplacement = function(s, k) {\r\n    const sLen = s.length, \r\n          charCount = {};\r\n    if (k >= sLen) return sLen;\r\n    let maxLen = 0,\r\n        windowStart = 0,\r\n        maxRepeatChar = 0;\r\n    for (let windowEnd = 0; windowEnd < sLen; windowEnd++) {\r\n        // increment charCount\r\n        charCount[s[windowEnd]] ? charCount[s[windowEnd]]++ : charCount[s[windowEnd]] = 1;\r\n        // calc max repeating char\r\n        maxRepeatChar = Math.max(maxRepeatChar, charCount[s[windowEnd]]);\r\n        // calc number of char that is not (or has fewer chars) repeating in window\r\n        const remainingChar = windowEnd - windowStart + 1 - maxRepeatChar;\r\n        // slide window by incrementing start of window\r\n        if (remainingChar > k) {\r\n            // decrement charCount\r\n            charCount[s[windowStart]]--;\r\n            windowStart++;\r\n        }\r\n        // calc maxLen\r\n        maxLen = Math.max(maxLen, windowEnd - windowStart + 1);\r\n    }\r\n    return maxLen;\r\n};"
  }
}
