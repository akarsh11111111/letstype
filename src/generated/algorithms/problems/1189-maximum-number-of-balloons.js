export default {
  "id": 1189,
  "name": "Maximum Number of Balloons",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-number-of-balloons",
  "relativeDir": "M/Maximum Number of Balloons",
  "slug": "1189-maximum-number-of-balloons",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 29,
    "java": 29,
    "python": 15,
    "javascript": 34
  },
  "languages": {
    "cpp": "// Runtime: 11 ms (Top 8.63%) | Memory: 6.7 MB (Top 45.44%)\r\nclass Solution {\r\npublic:\r\n    int maxNumberOfBalloons(string text) {\r\n        map<char,int>m;\r\n        for(int i=0;i<text.length();i++)\r\n        {\r\n            m[text[i]]++;\r\n        }\r\n        string s=\"balloon\";\r\n        int flag=1;\r\n        int c=0;\r\n        while(1)\r\n        {\r\n            for(int i=0;i<s.length();i++)\r\n            {\r\n                m[s[i]]--;\r\n                if(m[s[i]]==-1)\r\n                {\r\n                    flag=0;\r\n                }\r\n            }\r\n            if(flag==0)\r\n                break;\r\n            c++;\r\n        }\r\n        return c;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def maxNumberOfBalloons(self, text: str) -> int:\r\n        freq = {'b': 0, 'a': 0, 'l': 0, 'o': 0, 'n': 0}\r\n        \r\n        for char in text:\r\n            if not char in freq:\r\n                continue\r\n                \r\n            step = 0.5 if char == 'l' or char == 'o' else 1\r\n            \r\n            freq[char] += step\r\n        \r\n        result = min(freq.values())\r\n        \r\n        return floor(result)",
    "java": "// Runtime: 3 ms (Top 74.74%) | Memory: 42.3 MB (Top 69.99%)\r\nclass Solution {\r\n\r\n    public int maxNumberOfBalloons(String text) {\r\n        return maxNumberOfWords(text, \"balloon\");\r\n    }\r\n\r\n    private int maxNumberOfWords(String text, String word) {\r\n        final int[] tFrequencies = new int[26];\r\n        for (int i = 0; i < text.length(); ++i) {\r\n            tFrequencies[text.charAt(i) - 'a']++;\r\n        }\r\n        final int[] wFrequencies = new int[26];\r\n        for (int i = 0; i < word.length(); ++i) {\r\n            wFrequencies[word.charAt(i) - 'a']++;\r\n        }\r\n        int min = Integer.MAX_VALUE;\r\n        for (int i = 0; i < 26; ++i) {\r\n            if (wFrequencies[i] > 0) {\r\n                final int count = (tFrequencies[i] / wFrequencies[i]);\r\n                if (count < min) {\r\n                    min = count;\r\n                }\r\n            }\r\n        }\r\n        return min;\r\n    }\r\n\r\n}",
    "javascript": "/**\r\n * @param {string} text\r\n * @return {number}\r\n */\r\nvar maxNumberOfBalloons = function(text) {\r\n//    1. create hashmap with \"balloon\" letters\r\n//    2. keep track of how many letters in text belong to \"balloon\"\r\n//     3. account for fact that we need two \"l\" and \"o\" per \"balloon\" instance\r\n//    4. then select all map values and get the minimum - this will be the max value\r\n    \r\n    const balloonMap = {\r\n        \"b\": 0,\r\n        \"a\": 0,\r\n        \"l\": 0,\r\n        \"o\": 0,\r\n        \"n\": 0\r\n    }\r\n    \r\n    for (const char of text) {\r\n        if (balloonMap[char] !== undefined) {\r\n            balloonMap[char] += 1\r\n        }\r\n    }\r\n    \r\n    const letterFreq = []\r\n    for (const key in balloonMap) {\r\n        if ([\"l\", \"o\"].includes(key)) {\r\n            letterFreq.push(Math.floor(balloonMap[key]/2))\r\n        } else {\r\n            letterFreq.push(balloonMap[key])\r\n        }\r\n    }\r\n    return Math.min(...letterFreq)\r\n};"
  }
}
