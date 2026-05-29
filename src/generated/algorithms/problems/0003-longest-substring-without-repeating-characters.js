export default {
  "id": 3,
  "name": "Longest Substring Without Repeating Characters",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/longest-substring-without-repeating-characters",
  "relativeDir": "L/Longest Substring Without Repeating Characters",
  "slug": "0003-longest-substring-without-repeating-characters",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 15,
    "java": 21,
    "python": 14,
    "javascript": 20
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int lengthOfLongestSubstring(string s) {\r\n        map<char, int> mp;\r\n        int ans = 1;\r\n        for(auto ch : s) {\r\n            if(mp.find(ch) != mp.end()) {\r\n                while(mp.find(ch) != mp.end()) mp.erase(mp.begin());\r\n            }\r\n            mp.insert({ch, 1});\r\n            if(mp.size() > ans) ans = mp.size();\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def lengthOfLongestSubstring(self, s: str) -> int:\r\n        \r\n        longest_s = ''\r\n        curr_s = ''\r\n        for i in s:\r\n            if i not in curr_s:\r\n                curr_s += i\r\n                if len(curr_s) >= len(longest_s):\r\n                    longest_s = curr_s\r\n            else:\r\n                curr_s = curr_s[curr_s.index(i)+1:]+i\r\n        \r\n        return len(longest_s)",
    "java": "// Runtime: 310 ms (Top 7.97%) | Memory: 117.9 MB (Top 6.60%)\r\nclass Solution {\r\n    public int lengthOfLongestSubstring(String s) {\r\n        Map<Character, Integer> hash = new HashMap<>();\r\n        int count = 0;\r\n        int ans = 0;\r\n        for(int i=0; i < s.length(); i++){\r\n            if(hash.containsKey(s.charAt(i))){\r\n                i = hash.get(s.charAt(i)) + 1;\r\n                hash.clear();\r\n                count = 0;\r\n            }\r\n            if(!hash.containsKey(s.charAt(i))){\r\n                hash.put(s.charAt(i), i);\r\n                count++;\r\n                ans = Math.max(ans, count);\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n}",
    "javascript": "// Runtime: 154 ms (Top 50.21%) | Memory: 45.2 MB (Top 88.94%)\r\nvar lengthOfLongestSubstring = function(s) {\r\n    // keeps track of the most recent index of each letter.\r\n    const seen = new Map();\r\n    // keeps track of the starting index of the current substring.\r\n    let start = 0;\r\n    // keeps track of the maximum substring length.\r\n    let maxLen = 0;\r\n\r\n    for(let i = 0; i < s.length; i++) {\r\n        // if the current char was seen, move the start to (1 + the last index of this char)\r\n        // max prevents moving backward, 'start' can only move forward\r\n        if(seen.has(s[i])) start = Math.max(seen.get(s[i]) + 1, start)\r\n        seen.set(s[i], i);\r\n        // maximum of the current substring length and maxLen\r\n        maxLen = Math.max(i - start + 1, maxLen);\r\n    }\r\n\r\n    return maxLen;\r\n};"
  }
}
