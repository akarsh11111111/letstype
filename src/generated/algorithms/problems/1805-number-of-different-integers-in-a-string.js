export default {
  "id": 1805,
  "name": "Number of Different Integers in a String",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/number-of-different-integers-in-a-string",
  "relativeDir": "N/Number of Different Integers in a String",
  "slug": "1805-number-of-different-integers-in-a-string",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 18,
    "java": 14,
    "python": 8,
    "javascript": 21
  },
  "languages": {
    "cpp": "// Runtime: 3 ms (Top 68.35%) | Memory: 6.5 MB (Top 93.46%)\r\nclass Solution {\r\npublic:\r\n    int numDifferentIntegers(string word) {\r\n        unordered_map<string, int> hmap;\r\n        for (int i = 0; i < word.size(); i++) {\r\n            if (isdigit(word[i])) {\r\n                string str;\r\n                while (word[i] == '0')\r\n                    i++;\r\n                while (isdigit(word[i]))\r\n                    str += word[i++];\r\n                hmap[str]++;\r\n            }\r\n        }\r\n        return hmap.size();\r\n    }\r\n};",
    "python": "// Runtime: 34 ms (Top 85.83%) | Memory: 16.50 MB (Top 46.61%)\r\n\r\nclass Solution:\r\n    def numDifferentIntegers(self, word: str) -> int:\r\n        word = re.findall('(\\d+)', word)\r\n        nums = [int(i) for i in word]\r\n        \r\n        return len(set(nums))",
    "java": "// Runtime: 22 ms (Top 16.67%) | Memory: 44.5 MB (Top 21.67%)\r\nclass Solution {\r\n    public int numDifferentIntegers(String word) {\r\n        String[] arr = word.replaceAll(\"[a-zA-Z]\", \" \").split(\"\\\\s+\");\r\n        Set<String> set = new HashSet<String>();\r\n\r\n        for (String str : arr) {\r\n            if (!str.isEmpty())\r\n                set.add(String.valueOf(str.replaceAll(\"^0*\",\"\")));\r\n        }\r\n\r\n        return set.size();\r\n    }\r\n}",
    "javascript": "const CC0 = '0'.charCodeAt(0);\r\n\r\nvar numDifferentIntegers = function(word) {\r\n    const numStrSet = new Set();\r\n    \r\n    // get numbers as strings\r\n    const numStrs = word.split(/[^0-9]+/);\r\n    \r\n    // drop leading zeros\r\n    for (const numStr of numStrs) {\r\n        if (numStr.length > 0) {\r\n            let i = 0;\r\n            while (numStr.charCodeAt(i) === CC0) i++;\r\n            \r\n            // make sure that we preserve last 0 if string is composed of zeros only\r\n            numStrSet.add(numStr.slice(i) || '0');\r\n        }\r\n    }\r\n    \r\n    return numStrSet.size;\r\n};"
  }
}
