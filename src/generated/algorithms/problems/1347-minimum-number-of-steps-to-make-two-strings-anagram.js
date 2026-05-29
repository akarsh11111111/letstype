export default {
  "id": 1347,
  "name": "Minimum Number of Steps to Make Two Strings Anagram",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram",
  "relativeDir": "M/Minimum Number of Steps to Make Two Strings Anagram",
  "slug": "1347-minimum-number-of-steps-to-make-two-strings-anagram",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 17,
    "java": 19,
    "python": 7,
    "javascript": 32
  },
  "languages": {
    "cpp": "// Runtime: 88 ms (Top 64.62%) | Memory: 16.6 MB (Top 74.51%)\r\nclass Solution {\r\npublic:\r\n    int minSteps(string s, string t) {\r\n        int count = 0, length = s.length();\r\n        vector<int> vec1(26, 0), vec2(26, 0);\r\n        for(int i = 0; i < length; ++i){\r\n            vec1[s[i] - 'a']++;\r\n            vec2[t[i] - 'a']++;\r\n        }\r\n        for(int i = 0; i < 26; ++i){\r\n            if(vec1[i] > vec2[i])\r\n                count += vec1[i] - vec2[i];\r\n        }\r\n        return count;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def minSteps(self, s: str, t: str) -> int:\r\n        for ch in s:\r\n\t\t    # Find and replace only one occurence of this character in t\r\n            t = t.replace(ch, '', 1)\r\n            \r\n        return len(t)",
    "java": "// Runtime: 16 ms (Top 64.38%) | Memory: 54.3 MB (Top 67.83%)\r\n//find the frequency of every letter and check diffrence between the frequency of each letter then divide it by 2 to calculate the minimum number of letter to be changed.\r\nclass Solution {\r\n    public int minSteps(String s, String t) {\r\n        int sf[]=new int[26];\r\n        int tf[]=new int[26];\r\n        int diff=0;\r\n        for(char c:s.toCharArray()){\r\n            sf[c-'a']++;\r\n        }\r\n        for(char c:t.toCharArray()){\r\n            tf[c-'a']++;\r\n        }\r\n        for(int i=0;i<26;i++){\r\n            diff+=(int)Math.abs(sf[i]-tf[i]);\r\n        }\r\n        return diff/2;\r\n    }\r\n}",
    "javascript": "// Runtime: 290 ms (Top 23.15%) | Memory: 46.9 MB (Top 83.22%)\r\nvar minSteps = function(s, t) {\r\n\r\n    let hash1 = hash(s);\r\n    let hash2 = hash(t);\r\n    let steps = 0;\r\n\r\n    for(let key of Object.keys(hash1)) {\r\n        if( hash2[key]) {\r\n            hash1[key] = hash1[key] - hash2[key];\r\n        }\r\n        if( hash1[key] > 0 ) {\r\n            steps += hash1[key];\r\n        }\r\n    }\r\n\r\n    return steps;\r\n};\r\n\r\nfunction hash(str) {\r\n    let hash = {};\r\n    for(let i=0; i<str.length; i++) {\r\n        let letter = str[i];\r\n        if( hash[letter] ) {\r\n            hash[letter]++;\r\n        } else {\r\n            hash[letter] = 1;\r\n        }\r\n    }\r\n\r\n    return hash;\r\n}"
  }
}
