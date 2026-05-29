export default {
  "id": 2062,
  "name": "Count Vowel Substrings of a String",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/count-vowel-substrings-of-a-string",
  "relativeDir": "C/Count Vowel Substrings of a String",
  "slug": "2062-count-vowel-substrings-of-a-string",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 34,
    "java": 26,
    "python": 34,
    "javascript": 23
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.0%) | Memory: 6.90 MB (Top 63.9%)\r\n\r\nclass Solution {\r\n    public:\r\n    bool isVowel(char c) {\r\n        return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u';\r\n    };\r\n    \r\n    int atMostK(string &s, int k) {\r\n        int res = 0, i=0, n = s.size();\r\n        unordered_map<char, int> mp;\r\n        \r\n        for(int j=0; j<n; j++) {\r\n            if (!isVowel(s[j])) {\r\n                i = j + 1;\r\n                //Clear map as new substring will begin\r\n                mp.clear();\r\n                continue;\r\n            }\r\n            mp[s[j]]++;\r\n            while(mp.size() > k){\r\n                mp[s[i]]--;\r\n                if(mp[s[i]] == 0) mp.erase(s[i]);\r\n                i++;\r\n            }\r\n            res += j - i + 1;\r\n        }\r\n        return res;\r\n    }\r\n    \r\n    int countVowelSubstrings(string str) {\r\n        return atMostK(str, 5) - atMostK(str, 4);\r\n    }\r\n};",
    "python": "class Solution:\r\n    def countVowelSubstrings(self, word: str) -> int:\r\n        vowels = {'a','e','i','o','u'}\r\n        pointer = 0\r\n        res = 0\r\n        if len(word) <= 4:\r\n            return 0\r\n        while pointer != len(word)-4:\r\n            # if set(list(word[pointer:pointer+5])) == vowels:\r\n            #     temp = 1\r\n            #     res += 1\r\n            #     while set(list(word[pointer:pointer+temp+5])) == vowels and pointer+temp+4 != len(word):\r\n            #         res += 1\r\n            #         temp += 1\r\n            # elif word[pointer] in vowels:\r\n            #     temp = 1\r\n            #     while set(list(word[pointer:pointer+5+temp])) != vowels:\r\n            #         temp += 1\r\n            #     res += 1\r\n            # pointer += 1\r\n            temp = 0\r\n            if word[pointer] in vowels:\r\n                while temp+pointer != len(word)-4:\r\n                    test_1 = set(list(word[pointer:pointer+temp+5]))\r\n                    test_2 = word[pointer:pointer+temp+5]\r\n                    if set(list(word[pointer:pointer+temp+5])).issubset(vowels): \r\n                        if set(list(word[pointer:pointer+temp+5])) == vowels:\r\n                            res += 1\r\n                        temp+=1\r\n                    else:\r\n                        break\r\n                    \r\n            pointer += 1\r\n        return res",
    "java": "class Solution\r\n{\r\n    public int countVowelSubstrings(String word)\r\n    {\r\n        int vow = 0;\r\n        int n = word.length();\r\n        Set<Character> set = new HashSet<>();\r\n        for(int i = 0; i < n-4; i++)\r\n        {\r\n            set.clear();\r\n            for(int j = i; j < n; j++)\r\n            {\r\n                char ch = word.charAt(j);\r\n                if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u')\r\n                {\r\n                    set.add(ch);\r\n                    if(set.size() == 5)\r\n                        vow++;\r\n                }\r\n                else\r\n                    break;\r\n            }\r\n        }\r\n        return vow;\r\n    }\r\n}",
    "javascript": "// Runtime: 119 ms (Top 68.89%) | Memory: 44.2 MB (Top 75.56%)\r\n/**\r\n * @param {string} word\r\n * @return {number}\r\n */\r\nvar isVowel = function(c) {\r\n    return (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u');\r\n}\r\n\r\nvar countVowelSubstrings = function(word) {\r\n    let vowelMap = new Map();\r\n    let total = 0;\r\n    let totalLen = word.length - 1;\r\n    for(let i = 0 ; i <= totalLen; i++){\r\n        vowelMap.clear();\r\n        for(let j = i; j <= totalLen && isVowel(word[j]); j++){\r\n            vowelMap.set(word[j], (vowelMap.get(word[j]) ?? 0) + 1);\r\n            if(vowelMap.size == 5)\r\n                total++;\r\n        }\r\n    }\r\n    return total;\r\n};"
  }
}
