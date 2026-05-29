export default {
  "id": 1684,
  "name": "Count the Number of Consistent Strings",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/count-the-number-of-consistent-strings",
  "relativeDir": "C/Count the Number of Consistent Strings",
  "slug": "1684-count-the-number-of-consistent-strings",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 20,
    "java": 23,
    "python": 13,
    "javascript": 28
  },
  "languages": {
    "cpp": "// Runtime: 122 ms (Top 32.58%) | Memory: 30.1 MB (Top 90.27%)\r\nclass Solution {\r\npublic:\r\n    int countConsistentStrings(string allowed, vector<string>& words) {\r\n        // support variable\r\n        int res = words.size();\r\n        bool alpha[26] = {};\r\n        // populating alpha\r\n        for (char c: allowed) alpha[c - 'a'] = true;\r\n        // parsing all the words to see if each character is in alpha\r\n        for (string word: words) {\r\n            // in case we find an unallowed character, we decrease res and break\r\n            for (char c: word) if (!alpha[c - 'a']) {\r\n                res--;\r\n                break;\r\n            }\r\n        }\r\n        return res;\r\n    }\r\n};",
    "python": "# Runtime: 236 ms (Top 95.16%) | Memory: 16 MB (Top 85.69%)\r\nclass Solution:\r\n    def countConsistentStrings(self, allowed: str, words: List[str]) -> int:\r\n        allowed = set(allowed)\r\n        count = 0\r\n\r\n        for word in words:\r\n            for letter in word:\r\n                if letter not in allowed:\r\n                    count += 1\r\n                    break\r\n\r\n        return len(words) - count",
    "java": "// Runtime: 15 ms (Top 73.10%) | Memory: 54.7 MB (Top 46.20%)\r\nclass Solution {\r\n    public int countConsistentStrings(String allowed, String[] words) {\r\n        Set<Character> allowedSet = new HashSet<>();\r\n        for(int i=0;i<allowed.length();i++){\r\n            allowedSet.add(allowed.charAt(i));\r\n        }\r\n\r\n        int count = 0;\r\n        for(String word: words){\r\n            if(isConsistent(allowedSet, word)) count++;\r\n        }\r\n\r\n        return count;\r\n    }\r\n\r\n    boolean isConsistent(Set<Character> allowedSet, String word){\r\n        for (int i = 0; i < word.length(); i++){\r\n            if(!allowedSet.contains(word.charAt(i))) return false;\r\n        }\r\n        return true;\r\n    }\r\n}",
    "javascript": "// Runtime: 78 ms (Top 91.24%) | Memory: 51.20 MB (Top 63.23%)\r\n\r\n/**\r\n * @param {string} allowed\r\n * @param {string[]} words\r\n * @return {number}\r\n */\r\nvar countConsistentStrings = function(allowed, words) {\r\n    const hashmap = new Map();\r\n    let output = 0;\r\n\r\n    for (let i = 0; i < allowed.length; i++) {\r\n        hashmap.set(allowed[i], 1);\r\n    }\r\n\r\n    for (let i = 0; i < words.length; i++) {\r\n        const word = words[i];\r\n        output++;\r\n        for (let j = 0; j < word.length; j++) {\r\n            if (!hashmap.has(word[j])) {\r\n                output--;\r\n                break;\r\n            }\r\n        }\r\n    }\r\n\r\n    return output;\r\n};"
  }
}
