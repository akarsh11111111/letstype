export default {
  "id": 1927,
  "name": "Sum Game",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/sum-game",
  "relativeDir": "S/Sum Game",
  "slug": "1927-sum-game",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 43,
    "java": 14,
    "python": 19,
    "javascript": 30
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool sumGame(string num) {\r\n        const int N = num.length();\r\n        \r\n        int lDigitSum = 0;\r\n        int lQCount = 0;\r\n        int rDigitSum = 0;\r\n        int rQCount = 0;\r\n        \r\n        for(int i = 0; i < N; ++i){\r\n            if(isdigit(num[i])){\r\n                if(i < N / 2){\r\n                    lDigitSum += (num[i] - '0');\r\n                }else{\r\n                    rDigitSum += (num[i] - '0');\r\n                }\r\n            }else{\r\n                if(i < N / 2){\r\n                    ++lQCount;\r\n                }else{\r\n                    ++rQCount;\r\n                }\r\n            }\r\n        }\r\n        \r\n        // Case 0: Only digits (without '?')\r\n        if((lQCount + rQCount) == 0){\r\n            return (lDigitSum != rDigitSum);\r\n        }\r\n        \r\n        // Case 1: Odd number of '?'\r\n        if((lQCount + rQCount) % 2 == 1){\r\n            return true;\r\n        }\r\n        \r\n        // Case 2: Even number of '?'\r\n        int minQCount = min(lQCount, rQCount);\r\n        lQCount -= minQCount;\r\n        rQCount -= minQCount;\r\n        return (lDigitSum + 9 * lQCount / 2 != rDigitSum + 9 * rQCount / 2);\r\n    }\r\n};",
    "python": "# Runtime: 173 ms (Top 90.14%) | Memory: 14.9 MB (Top 69.01%)\r\nclass Solution:\r\n    def sumGame(self, num: str) -> bool:\r\n        n = len(num)\r\n        q_cnt_1 = s1 = 0\r\n        for i in range(n//2): # get digit sum and question mark count for the first half of `num`\r\n            if num[i] == '?':\r\n                q_cnt_1 += 1\r\n            else:\r\n                s1 += int(num[i])\r\n        q_cnt_2 = s2 = 0\r\n        for i in range(n//2, n): # get digit sum and question mark count for the second half of `num`\r\n            if num[i] == '?':\r\n                q_cnt_2 += 1\r\n            else:\r\n                s2 += int(num[i])\r\n        s_diff = s1 - s2 # calculate sum difference and question mark difference\r\n        q_diff = q_cnt_2 - q_cnt_1\r\n        return not (q_diff % 2 == 0 and q_diff // 2 * 9 == s_diff) # When Bob can't win, Alice wins",
    "java": "// Runtime: 18 ms (Top 22.45%) | Memory: 50.6 MB (Top 24.49%)\r\nclass Solution {\r\n    public boolean sumGame(String num) {\r\n        int q = 0, d = 0, n = num.length();\r\n        for (int i = 0; i < n; i++){\r\n            if (num.charAt(i) == '?'){\r\n                q += 2* i < n? 1 : -1;\r\n            }else{\r\n                d += (2 * i < n? 1 : -1) * (num.charAt(i) - '0');\r\n            }\r\n        }\r\n        return (q & 1) > 0 || q * 9 + 2 * d != 0;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {string} num\r\n * @return {boolean}\r\n */\r\nvar sumGame = function(num) {\r\n    \r\n    function getInfo(s) {\r\n        var sum = 0;\r\n        var ques = 0;\r\n        for(let c of s.split(''))\r\n            if (c !== '?') sum += c - 0;\r\n            else ques++;\r\n        return [sum, ques];\r\n    }\r\n    \r\n    function check(sum1, sum2, q1, q2, q) {\r\n        return sum1 + 9* Math.min(q/2, q1) > sum2 + 9 * Math.min(q/2, q2);\r\n    }\r\n    \r\n    \r\n    var q = getInfo(num)[1];\r\n    var [sum1, q1] = getInfo(num.substring(0, Math.floor(num.length/2)));\r\n    var [sum2, q2] = getInfo(num.substring(Math.floor(num.length/2), num.length));\r\n    if (sum1 < sum2) { \r\n        [sum1, sum2] = [sum2, sum1];\r\n        [q1, q2] = [q2, q1];\r\n    }\r\n    \r\n    return check(sum1, sum2, q1, q2, q) || check(sum2, sum1, q2, q1, q);\r\n};"
  }
}
