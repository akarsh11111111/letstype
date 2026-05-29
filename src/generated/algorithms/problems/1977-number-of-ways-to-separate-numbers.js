export default {
  "id": 1977,
  "name": "Number of Ways to Separate Numbers",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/number-of-ways-to-separate-numbers",
  "relativeDir": "N/Number of Ways to Separate Numbers",
  "slug": "1977-number-of-ways-to-separate-numbers",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 30,
    "python": 19,
    "javascript": 46
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n  \r\n  int helper(string& num, int idx, string last){\r\n    // If we have made it to the end of num we have found a valid sequence\r\n    if(num.size() == idx){ return 1; }\r\n    // The number of valid sequences starting from idx\r\n    int count = 0;\r\n    // If num[idx] == '0' then skip\r\n    if(num[idx] != '0'){\r\n      // Check all the possible numbers starting from idx\r\n      for(int i=idx; i<num.size(); ++i){\r\n        // Construct the number\r\n        string s = num.substr(idx, i-idx+1);\r\n        // If the number has less digits then the last number in the sequence it can't be bigger\r\n        if(s.size() < last.size()){ continue; }\r\n        // If the number is bigger or equal than the last (needs the size check as \"3\" > \"20\")\r\n        if(last.size() < s.size() || s >= last){\r\n\t\t  // Do the recursice call  with idx = i+1 and last=s \r\n          count += helper(num, i+1, s);\r\n        }\r\n      }\r\n    }\r\n    return count;\r\n  }\r\n  \r\n  int numberOfCombinations(string num) {\r\n    return helper(num, 0, \"0\");\r\n  }\r\n};",
    "python": "# Runtime: 11887 ms (Top 6.00%) | Memory: 14.2 MB (Top 88.00%)\r\nclass Solution:\r\n    def numberOfCombinations(self, num: str) -> int:\r\n        if num[0]=='0': return 0\r\n        N=len(num)\r\n        MOD=int(10**9+7)\r\n        ways = (N+1)*[0]\r\n        acc = list(ways)\r\n        for n in range(1,N+1):\r\n            ways[n] = int(n==N or num[n]!='0')\r\n            for i in range(n+1,N+1):\r\n                if i<N and num[i]=='0':\r\n                    ways[i] = 0\r\n                    continue\r\n                ways[i] = (acc[i-n] + ((w := ways[i-n]) and i>=2*n and num[i-2*n:i-n] <= num[i-n:i] and w)) %MOD\r\n            for i in range(n,N+1):\r\n                a = (acc[i] + ways[i]) %MOD\r\n                acc[i] = a\r\n        return acc[N]",
    "javascript": "// Runtime: 257 ms (Top 75.0%) | Memory: 169.60 MB (Top 50.0%)\r\n\r\nconst MOD = 10**9 + 7;\r\nvar numberOfCombinations = function(num) {\r\n    const n = num.length;\r\n    const counts = Array.from({length: n}, () => new Array(n+1).fill(0));\r\n    const allSameFlag = num.split('').every(c => c === num[0]);\r\n    for (let i = 0; i < n; i++) {\r\n        counts[i][n] = num[i] !== '0' ? 1 : 0;\r\n    }\r\n    \r\n    const partialCompare = (i, j) => {\r\n        if (i === j || allSameFlag) {\r\n            return 0;\r\n        } else if (num[i] !== num[j]) {\r\n            return num[i] > num[j] ? i+1 : -(i+1);\r\n        } else if (2*j - i === n || 2*j - i === n-1) {\r\n            for (let k = 0; k < j-i; k++) {\r\n                if (num[i+k] !== num[j+k]) {\r\n                    return num[i+k] > num[j+k] ? i+k : -(i+k+1);\r\n                }\r\n            }\r\n            return 0;\r\n        } else {\r\n            const idx = partialCompare(i+1, j+1);\r\n            return idx===0 ? 0 : Math.abs(idx)-1 >= j ? 0 : idx;\r\n        }\r\n    }\r\n    \r\n    let ans = counts[0][n];\r\n    for (let j = n-1; j > 0; j--) {\r\n        let k = n, total = 0;\r\n        for (let i = 0; i < j; i++) {\r\n            if (num[i] !== '0') {\r\n                while (k-j > j-i || (k-j === j-i && partialCompare(i, j) <= 0)) {\r\n                    total = (total + counts[j][k]) % MOD;\r\n                    k--;\r\n                }\r\n                counts[i][j] = total;\r\n            }\r\n        }\r\n        ans = (ans + counts[0][j]) % MOD;\r\n        counts.pop();\r\n    }\r\n    return ans;\r\n};"
  }
}
