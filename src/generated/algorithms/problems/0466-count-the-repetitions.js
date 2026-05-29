export default {
  "id": 466,
  "name": "Count The Repetitions",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/count-the-repetitions",
  "relativeDir": "C/Count The Repetitions",
  "slug": "0466-count-the-repetitions",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 37,
    "python": 19,
    "javascript": 32
  },
  "languages": {
    "cpp": "// Runtime: 3 ms (Top 77.01%) | Memory: 6.3 MB (Top 49.43%)\r\nclass Solution {\r\npublic:\r\n    int getMaxRepetitions(string s1, int n1, string s2, int n2) {\r\n        vector<int> countr(s2.size(),-1), indexr(s2.size(),-1);\r\n        int count = 0;\r\n        vector<int> seqIndex;\r\n        for (int i=0, j2=0; i<n1; i++) {\r\n            if (indexr[j2] > -1) {\r\n                int repC = count-countr[j2];\r\n                int repN = i - indexr[j2];\r\n                int remainingN = n1 - i;\r\n                //the times that the pattern repeated\r\n                count += remainingN/repN * repC;\r\n                //the residue at the end of str1, but still might form valid s2\r\n                int j2_ = seqIndex[indexr[j2]+remainingN%repN];\r\n                count += countr[j2_] - countr[j2];\r\n                break;\r\n            } else {\r\n                countr[j2] = count;\r\n                indexr[j2] = i;\r\n                seqIndex.push_back(j2);\r\n            }\r\n\r\n            for (int j1=0; j1<s1.size(); j1++) {\r\n                if (s1[j1] == s2[j2]) {\r\n                    j2++;\r\n                    if (j2 == s2.size()) {\r\n                        j2 = 0;\r\n                        count++;\r\n                    }\r\n                }\r\n            }\r\n        }\r\n        return count/n2;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def getMaxRepetitions(self, s1: str, n1: int, s2: str, n2: int) -> int:\r\n        dp = []\r\n        for i in range(len(s2)):\r\n            start = i\r\n            cnt = 0\r\n            for j in range(len(s1)):\r\n                if s1[j] == s2[start]:\r\n                    start += 1\r\n                    if start == len(s2):\r\n                        start = 0\r\n                        cnt += 1\r\n            dp.append((start,cnt))\r\n        res = 0\r\n        next = 0\r\n        for _ in range(n1):\r\n            res += dp[next][1]\r\n            next = dp[next][0]\r\n        return res // n2",
    "javascript": "// Runtime: 4176 ms (Top 50.0%) | Memory: 43.11 MB (Top 12.5%)\r\n\r\n/**\r\n * @param {string} s1\r\n * @param {number} n1\r\n * @param {string} s2\r\n * @param {number} n2\r\n * @return {number}\r\n */\r\nvar getMaxRepetitions = function(s1, n1, s2, n2) {\r\n    const len1 = s1.length;\r\n    const len2 = s2.length; \r\n    let count1 = 0; // Number of times s2 can be formed from s1\r\n    let count2 = 0; // Number of times str2 = [s2, count2] can be formed from str1 = [s1, count1]\r\n    let i = 0; // Pointer for s1\r\n    let j = 0; // Pointer for s2\r\n    while (count1 < n1) {\r\n        if (s1[i] === s2[j]) {\r\n            j++;\r\n            if (j === len2) {\r\n                j = 0;\r\n                count2++;\r\n            }\r\n        }\r\n        i++;\r\n        if (i === len1) {\r\n            i = 0;\r\n            count1++;\r\n        }\r\n    }\r\n    return Math.floor(count2 / n2);\r\n};"
  }
}
