export default {
  "id": 242,
  "name": "Valid Anagram",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/valid-anagram",
  "relativeDir": "V/Valid Anagram",
  "slug": "0242-valid-anagram",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 13,
    "java": 16,
    "python": 4,
    "javascript": 15
  },
  "languages": {
    "cpp": "// Runtime: 22 ms (Top 25.79%) | Memory: 7.4 MB (Top 47.98%)\r\nclass Solution {\r\npublic:\r\n    bool isAnagram(string s, string t) {\r\n        sort(s.begin(), s.end());\r\n        sort(t.begin(), t.end());\r\n\r\n        if(s != t)\r\n            return false;\r\n\r\n        return true;\r\n    }\r\n};",
    "python": "# Runtime: 86 ms (Top 42.25%) | Memory: 14.4 MB (Top 67.11%)\r\nclass Solution:\r\n    def isAnagram(self, s: str, t: str) -> bool:\r\n        return Counter(s) == Counter(t)",
    "java": "// Runtime: 5 ms (Top 73.70%) | Memory: 42.2 MB (Top 97.84%)\r\nclass Solution {\r\n    public boolean isAnagram(String s, String t) {\r\n        if (s.length() != t.length()) return false;\r\n        int[] haha1 = new int[26];//26 because input contains of only lower english letters\r\n        int[] haha2 = new int[26];\r\n        for (int i = 0; i < s.length(); ++i) {\r\n            haha1[(int)s.charAt(i)-97] += 1;//omitting 97 because 'a' is 97, it will be 0 now\r\n            haha2[(int)t.charAt(i)-97] += 1;\r\n        }\r\n        for (int i = 0; i < haha1.length; ++i) {\r\n            if (haha1[i] != haha2[i]) return false;\r\n        }\r\n        return true;\r\n    }\r\n}",
    "javascript": "var isAnagram = function(s, t) {\r\n    if(s.length !== t.length) return false\r\n    \r\n    let charFreq = {}\r\n    \r\n    for(let char of s){\r\n        charFreq[char] ? charFreq[char] +=1 : charFreq[char] = 1\r\n    }\r\n    \r\n    for(let char of t){\r\n        if(!(charFreq[char])) return false\r\n        charFreq[char] -= 1\r\n    }\r\n    return true\r\n};"
  }
}
