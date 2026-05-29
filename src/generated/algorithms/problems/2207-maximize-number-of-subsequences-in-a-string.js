export default {
  "id": 2207,
  "name": "Maximize Number of Subsequences in a String",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximize-number-of-subsequences-in-a-string",
  "relativeDir": "M/Maximize Number of Subsequences in a String",
  "slug": "2207-maximize-number-of-subsequences-in-a-string",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 30,
    "java": 46,
    "python": 11,
    "javascript": 28
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    long long maximumSubsequenceCount(string text, string pattern) {\r\n        // support variables\r\n        int len = text.size();\r\n        long long res = 0, aCount = 0, bCount = 0;\r\n        char a = pattern[0], b = pattern[1];\r\n        // getting the frequencies\r\n        for (char c: text)  {\r\n            if (c == a) aCount++;\r\n            else if (c == b) bCount++;\r\n        }\r\n        // edge case: a == b\r\n        if (a == b) return aCount++ * aCount / 2;\r\n        // adding our extra character to maximise the occurrences\r\n        if (aCount < bCount) res += bCount;\r\n        else bCount++;\r\n        // computing the occurrences\r\n        for (char c: text)  {\r\n            // first case: spotting the first element of a sequence\r\n            if (c == a) {\r\n                res += bCount;\r\n            }\r\n            // second case: we found an ending sequence\r\n            else if (c == b) bCount--;\r\n            // all the rest: we do nothing\r\n        }\r\n        return res;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def maximumSubsequenceCount(self, text: str, pattern: str) -> int:\r\n        total = count_a = count_b = 0\r\n        for c in text:\r\n            if c == pattern[1]:\r\n                total += count_a\r\n                count_b += 1\r\n            if c == pattern[0]:\r\n                count_a += 1\r\n        \r\n        return total + max(count_a, count_b)",
    "java": "// Runtime: 83 ms (Top 15.87%) | Memory: 54.4 MB (Top 56.08%)\r\nclass Solution {\r\n    public long maximumSubsequenceCount(String text, String pattern) {\r\n        //when pattern[0] == pattern[1]\r\n        if (pattern.charAt(0) == pattern.charAt(1)) {\r\n            long freq = 1;\r\n            //O(N)\r\n            for (int i = 0; i < text.length(); i++) {\r\n                if (text.charAt(i) == pattern.charAt(0)) {\r\n                    freq++;\r\n                }\r\n            }\r\n            //number of subsequences : choose any two characters from freq nC2\r\n            return (freq * (freq - 1)) / 2;\r\n        }\r\n\r\n        //choice 1\r\n        String text1 = pattern.charAt(0) + text;\r\n\r\n        int freq = 0;\r\n        long count1 = 0;\r\n        //O(N)\r\n        for (int i = 0; i < text1.length(); i++) {\r\n            if (text1.charAt(i) == pattern.charAt(0)) {\r\n                freq++;\r\n            } else if (text1.charAt(i) == pattern.charAt(1)) {\r\n                count1 += freq;\r\n            }\r\n        }\r\n\r\n        //choice 2\r\n        String text2 = text + pattern.charAt(1);\r\n        freq = 0;\r\n        long count2 = 0;\r\n        //O(N)\r\n        for (int i = text2.length() - 1; i>= 0; i--) {\r\n            if (text2.charAt(i) == pattern.charAt(1)) {\r\n                freq++;\r\n            } else if (text2.charAt(i) == pattern.charAt(0)) {\r\n                count2 += freq;\r\n            }\r\n        }\r\n\r\n        return Math.max(count1, count2);\r\n    }\r\n}",
    "javascript": "// Runtime: 366 ms (Top 17.65%) | Memory: 69.2 MB (Top 29.41%)\r\n/**\r\n * @param {string} text\r\n * @param {string} pattern\r\n * @return {number}\r\n */\r\nvar maximumSubsequenceCount = function(text, pattern) {\r\n    const arrText = text.split(\"\")\r\n    const lengthP0 = arrText.filter(x => x === pattern[0]).length\r\n    const lengthP1 = arrText.filter(x => x === pattern[1]).length\r\n    const [c1, c2, lengthmax] = lengthP0 <= lengthP1 ? [...pattern, lengthP1]: [pattern[1], pattern[0], lengthP0]\r\n    let newText = lengthP0 <= lengthP1 ? [c1,...arrText]: [...arrText, c1]\r\n    newText = lengthP0 <= lengthP1 ? newText : newText.reverse()\r\n\r\n    let i = 0;\r\n    let count = 0;\r\n    let countmax = lengthmax\r\n    while(i < newText.length) {\r\n        if(newText[i] === c1) {\r\n            count += countmax\r\n        }\r\n        if(newText[i] === c2) {\r\n            countmax--\r\n        }\r\n        i++;\r\n    }\r\n    return count\r\n};"
  }
}
