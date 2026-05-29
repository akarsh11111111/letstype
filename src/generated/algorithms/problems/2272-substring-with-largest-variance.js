export default {
  "id": 2272,
  "name": "Substring With Largest Variance",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/substring-with-largest-variance",
  "relativeDir": "S/Substring With Largest Variance",
  "slug": "2272-substring-with-largest-variance",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 38,
    "java": 41,
    "python": 46,
    "javascript": 25
  },
  "languages": {
    "cpp": "// Runtime: 277 ms (Top 33.70%) | Memory: 6.9 MB (Top 80.29%)\r\n/*\r\n    Time: O(26*26*n)\r\n    Space: O(1)\r\n    Tag: Kadane's Algorithm\r\n    Difficulty: H (Logic) | E(Implementation)\r\n*/\r\n\r\nclass Solution {\r\npublic:\r\n    int largestVariance(string s) {\r\n        int res = 0;\r\n        for (int i = 0; i < 26; i++) {\r\n            for (int j = 0; j < 26; j++) {\r\n                if (i == j) continue;\r\n                int highFreq = 0;\r\n                int lowFreq = 0;\r\n                bool prevHadLowFreqChar = false;\r\n                for (char ch : s) {\r\n                    if (ch - 'a' == i)\r\n                        highFreq++;\r\n                    else if (ch - 'a' == j)\r\n                        lowFreq++;\r\n                    if (lowFreq > 0)\r\n                        res = max(res, highFreq - lowFreq);\r\n                    else if (prevHadLowFreqChar)\r\n                        res = max(res, highFreq - 1);\r\n                    if (highFreq - lowFreq < 0) {\r\n                        highFreq = 0;\r\n                        lowFreq = 0;\r\n                        prevHadLowFreqChar = true;\r\n                    }\r\n                }\r\n            }\r\n        }\r\n        return res;\r\n    }\r\n};",
    "python": "class Solution:\r\n    class Solution:\r\n    def largestVariance(self, s: str) -> int:\r\n        \r\n        def maxSubArray(nums: List[int]):\r\n            ans=-float('inf')\r\n            runningSum=0\r\n            seen=False\r\n            for x in (nums):\r\n                if x<0:\r\n                    seen=True\r\n                runningSum+=x\r\n                if seen:\r\n                    ans=max(ans,runningSum)\r\n                else:\r\n                    ans=max(ans,runningSum-1)\r\n                if runningSum<0:\r\n                    runningSum=0\r\n                    seen=False\r\n            return ans\r\n        \r\n        f=set()\r\n        a=''\r\n        for x in s:\r\n            if x not in f:\r\n                a+=x\r\n                f.add(x)\r\n       \r\n        n=len(s)\r\n        res=0\r\n        for j in range(len(a)-1):\r\n            for k in range(j+1,len(a)):\r\n                x=a[j]\r\n                y=a[k]\r\n                arr=[]\r\n                for i in range(n):\r\n                    if s[i]!=x and s[i]!=y:\r\n                        continue\r\n                    elif s[i]==x:\r\n                        arr.append(1)\r\n                    else:\r\n                        arr.append(-1)\r\n                \r\n                res=max(res,maxSubArray(arr),maxSubArray([-x for x in arr]))\r\n                \r\n        return res",
    "java": "// Runtime: 170 ms (Top 86.6%) | Memory: 41.17 MB (Top 94.8%)\r\n\r\nclass Solution {\r\n    public int largestVariance(String s) {\r\n        \r\n        int [] freq = new int[26];\r\n        for(int i = 0 ; i < s.length() ; i++)\r\n            freq[(int)(s.charAt(i) - 'a')]++;\r\n        \r\n        int maxVariance = 0;\r\n        for(int a = 0 ; a < 26 ; a++){\r\n            for(int b = 0 ; b < 26 ; b++){\r\n                int remainingA = freq[a];\r\n                int remainingB = freq[b];\r\n                if(a == b || remainingA == 0 || remainingB == 0) continue;\r\n                \r\n\t\t\t\t// run kadanes on each possible character pairs (A & B)\r\n                int currBFreq = 0, currAFreq = 0;\r\n                for(int i = 0 ; i < s.length() ; i++){\r\n                    int c =  (int)(s.charAt(i) - 'a');\r\n                    \r\n                    if(c == b) currBFreq++;\r\n                    if(c == a) {\r\n                        currAFreq++;\r\n                        remainingA--;\r\n                    }\r\n                    \r\n                    if(currAFreq > 0)\r\n                        maxVariance = Math.max(maxVariance, currBFreq - currAFreq);\r\n                    \r\n                    if(currBFreq < currAFreq &&  remainingA >= 1){\r\n                        currBFreq = 0;\r\n                        currAFreq = 0;\r\n                    }\r\n                }\r\n            }\r\n        }\r\n        \r\n        return maxVariance;\r\n    }\r\n}",
    "javascript": "// Runtime: 1461 ms (Top 30.30%) | Memory: 44.6 MB (Top 59.39%)\r\nvar largestVariance = function(s) {\r\n  let chars = new Set(s.split(\"\")), maxDiff = 0;\r\n  for (let l of chars) {\r\n    for (let r of chars) {\r\n      if (l === r) continue;\r\n      let lCount = 0, rCount = 0, hasRight = false;\r\n      for (let char of s) {\r\n        lCount += char === l ? 1 : 0;\r\n        rCount += char === r ? 1 : 0;\r\n        if (rCount > 0 && lCount > rCount) { // has both characters and positive difference\r\n          maxDiff = Math.max(maxDiff, lCount - rCount);\r\n        }\r\n        if (lCount > rCount && hasRight) { // has positive difference and a previous \"right\" character we can add to the start\r\n          maxDiff = Math.max(maxDiff, lCount - rCount - 1);\r\n        }\r\n        if (lCount < rCount) {\r\n          lCount = 0, rCount = 0;\r\n          hasRight = true;\r\n        }\r\n      }\r\n    }\r\n  }\r\n  return maxDiff;\r\n};"
  }
}
