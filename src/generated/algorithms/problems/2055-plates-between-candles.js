export default {
  "id": 2055,
  "name": "Plates Between Candles",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/plates-between-candles",
  "relativeDir": "P/Plates Between Candles",
  "slug": "2055-plates-between-candles",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 28,
    "java": 42,
    "python": 13,
    "javascript": 31
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<int> platesBetweenCandles(string s, vector<vector<int>>& queries) {\r\n        vector<int> candlesIndex;\r\n        \r\n        for(int i=0;i<s.length();i++){\r\n            if(s[i] == '|')\r\n                candlesIndex.push_back(i);\r\n        }\r\n        \r\n        vector<int> ans;\r\n        for(auto q : queries){\r\n            int firstCandleIndex = lower_bound(candlesIndex.begin() , candlesIndex.end() , q[0]) - candlesIndex.begin();\r\n            int lastCandleIndex = upper_bound(candlesIndex.begin() , candlesIndex.end() , q[1]) - candlesIndex.begin() - 1;\r\n            \r\n            if(lastCandleIndex <= firstCandleIndex){\r\n                ans.push_back(0);\r\n                continue;\r\n            }\r\n                \r\n            \r\n            int tempAns = candlesIndex[lastCandleIndex] - candlesIndex[firstCandleIndex] - (lastCandleIndex - firstCandleIndex);\r\n            \r\n            ans.push_back(tempAns);\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def platesBetweenCandles(self, s: str, queries: List[List[int]]) -> List[int]:\r\n        psum, next, prev = [0] * (len(s) + 1), [inf] * (len(s) + 1), [0] * (len(s) + 1)\r\n        res = []\r\n        for i, ch in enumerate(s):\r\n            psum[i + 1] = psum[i] + (ch == '|')\r\n            prev[i + 1] = i if ch == '|' else prev[i]\r\n        for i, ch in reversed(list(enumerate(s))):\r\n            next[i] = i if ch == '|' else next[i + 1]\r\n        for q in queries:\r\n            l, r = next[q[0]], prev[q[1] + 1]\r\n            res.append(r - l - (psum[r] - psum[l]) if l < r else 0)\r\n        return res",
    "java": "// Runtime: 20 ms (Top 58.35%) | Memory: 143.3 MB (Top 38.21%)\r\nclass Solution {\r\n    // O(sLen + queries.length) time, O(sLen) space\r\n    public int[] platesBetweenCandles(String s, int[][] queries) {\r\n        int sLen = s.length();\r\n        // cumulative number of plates from the left\r\n        int[] numberOfPlates = new int[sLen+1];\r\n        for (int i=0; i<sLen; i++) {\r\n            numberOfPlates[i+1] = numberOfPlates[i] + (s.charAt(i) == '*' ? 1 : 0);\r\n        }\r\n        // closest candle to the left\r\n        int[] candleToTheLeft = new int[sLen];\r\n        int cand = -1;\r\n        for (int i=0; i<sLen; i++) {\r\n            if (s.charAt(i) == '|') {\r\n                cand = i;\r\n            }\r\n            candleToTheLeft[i] = cand;\r\n        }\r\n        // closest candle to the right\r\n        int[] candleToTheRight = new int[sLen];\r\n        cand = -1;\r\n        for (int i=sLen-1; i>=0; i--) {\r\n            if (s.charAt(i) == '|') {\r\n                cand = i;\r\n            }\r\n            candleToTheRight[i] = cand;\r\n        }\r\n        // for each query - count the number of plates between closest candles\r\n        int[] res = new int[queries.length];\r\n        for (int i=0; i<queries.length; i++) {\r\n            int left = candleToTheRight[queries[i][0]];\r\n            int right = candleToTheLeft[queries[i][1]];\r\n            if (left == -1 || right == -1 || left >= right) {\r\n                res[i] = 0;\r\n            } else {\r\n                res[i] = numberOfPlates[right+1] - numberOfPlates[left];\r\n            }\r\n        }\r\n        return res;\r\n    }\r\n}",
    "javascript": "// Runtime: 326 ms (Top 98.70%) | Memory: 81.8 MB (Top 88.96%)\r\n// time O(N + M) Space O(N) N = s.length M = query.length\r\nvar platesBetweenCandles = function(s, queries) {\r\n    let platPreFixSum = [...Array(s.length + 1)];\r\n    let leftViewCandle = [...Array(s.length + 1)];\r\n    let rightViewCandle = [...Array(s.length + 1)];\r\n\r\n    platPreFixSum[0] = 0;\r\n    leftViewCandle[0] = -1;\r\n    rightViewCandle[s.length] = -1;\r\n\r\n    for(let i = 1; i <= s.length; i++){\r\n        platPreFixSum[i] = s[i-1] == '*' ? platPreFixSum[i - 1] + 1 : platPreFixSum[i - 1];\r\n        leftViewCandle[i] = s[i - 1] == '|' ? i - 1 : leftViewCandle[i - 1];\r\n        rightViewCandle[s.length - i] = s[s.length - i] == '|' ? s.length - i : rightViewCandle[s.length - i + 1];\r\n    }\r\n\r\n    let result = [];\r\n\r\n    queries.forEach(([left, right]) => {\r\n        if(rightViewCandle[left] >= 0 && leftViewCandle[right + 1] >= 0 &&\r\n           rightViewCandle[left] < leftViewCandle[right + 1]) {\r\n            result.push(platPreFixSum[leftViewCandle[right + 1]] - platPreFixSum[rightViewCandle[left]]);\r\n        } else {\r\n            result.push(0);\r\n        }\r\n    });\r\n\r\n    return result;\r\n\r\n};"
  }
}
