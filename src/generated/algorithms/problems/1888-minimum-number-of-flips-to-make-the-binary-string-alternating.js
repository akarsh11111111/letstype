export default {
  "id": 1888,
  "name": "Minimum Number of Flips to Make the Binary String Alternating",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-number-of-flips-to-make-the-binary-string-alternating",
  "relativeDir": "M/Minimum Number of Flips to Make the Binary String Alternating",
  "slug": "1888-minimum-number-of-flips-to-make-the-binary-string-alternating",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 29,
    "java": 31,
    "python": 20,
    "javascript": 45
  },
  "languages": {
    "cpp": "// Runtime: 153 ms (Top 12.53%) | Memory: 26.2 MB (Top 15.03%)\r\nclass Solution {\r\npublic:\r\n    int minFlips(string s)\r\n    {\r\n     int n = s.size();\r\n     string ss = s+s;\r\n     string s1, s2;\r\n     int ans = INT_MAX;\r\n     for(int i=0; i<ss.size(); i++)\r\n     {\r\n         s1+=(i%2?'1':'0');\r\n         s2+=(i%2?'0':'1');\r\n     }\r\n     int ans1 = 0, ans2 = 0;\r\n     for(int i=0; i<ss.size(); i++)\r\n     {\r\n         if(s1[i]!=ss[i]) ans1++;\r\n         if(s2[i]!=ss[i]) ans2++;\r\n         if(i>=n-1)\r\n         {\r\n             if(i!=n-1 && s1[i-n]!=ss[i-n]) ans1--;\r\n             if(i!=n-1 && s2[i-n]!=ss[i-n]) ans2--;\r\n             ans = min({ans,ans1,ans2});\r\n         }\r\n     }\r\n     return ans;\r\n    }\r\n};",
    "python": "# Runtime: 631 ms (Top 87.94%) | Memory: 14.8 MB (Top 94.52%)\r\nclass Solution:\r\n    def minFlips(self, s: str) -> int:\r\n        prev = 0\r\n        start_1, start_0, start_1_odd, start_0_odd = 0,0,sys.maxsize,sys.maxsize\r\n        odd = len(s)%2\r\n        for val in s:\r\n            val = int(val)\r\n            if val == prev:\r\n                if odd:\r\n                    start_0_odd = min(start_0_odd, start_1)\r\n                    start_1_odd += 1\r\n                start_1 += 1\r\n            else:\r\n                if odd:\r\n                    start_1_odd = min(start_1_odd, start_0)\r\n                    start_0_odd += 1\r\n                start_0 += 1\r\n            prev = 1 - prev\r\n        return min([start_1, start_0, start_1_odd, start_0_odd])",
    "java": "class Solution {\r\n    public int minFlips(String s) {\r\n        /*\r\n        * Sliding Window Approach\r\n        */\r\n        \r\n        \r\n        int n = s.length();\r\n        \r\n        int mininumFlip = Integer.MAX_VALUE;\r\n        \r\n        int misMatchCount = 0;\r\n        for(int i = 0; i < (2 * n); i++){\r\n            \r\n            int r = i % n;\r\n            \r\n            //add mis watch count in current window\r\n            if((s.charAt(r) - '0') != (i % 2 == 0 ? 1 : 0)) misMatchCount++;\r\n            \r\n            //remove mismatch count which are not relvent for current window\r\n            if(i >= n && (s.charAt(r) - '0') != (r % 2 == 0 ? 1 : 0)) misMatchCount--;\r\n            \r\n            \r\n            //misMatchCount : when valid binary string start from 1\r\n            //n - misMatchCount : when valid binary string start from 0\r\n            if(i >= n - 1) mininumFlip = Math.min(mininumFlip, Math.min(misMatchCount, n - misMatchCount));\r\n        }\r\n        \r\n        return mininumFlip;\r\n    }\r\n}",
    "javascript": "// Runtime: 154 ms (Top 50.0%) | Memory: 48.85 MB (Top 59.5%)\r\n\r\n/**\r\n * @param {string} s\r\n * @return {number}\r\n */\r\nvar minFlips = function(s) {\r\n    let length = s.length-1\r\n    let flipMap = {\r\n        '1': '0',\r\n        '0': '1'\r\n    }\r\n    s = s + s\r\n    let alt1 = '1'\r\n    let alt2 = '0'\r\n    let left = 0\r\n    let right = 0\r\n    let diff1 = 0\r\n    let diff2 = 0\r\n    let min = Infinity\r\n\r\n    while (right < s.length) {\r\n        if (right > 0) {\r\n            alt1 = flipMap[alt1]\r\n            alt2 = flipMap[alt2]\r\n        }\r\n\r\n        let current = s[right]\r\n        if (current !== alt1) diff1++\r\n        if (current !== alt2) diff2++\r\n        if (right-left === length) {\r\n            min = Math.min(diff1, diff2, min)\r\n            if ((length+1)%2 === 0) {\r\n                if (s[left] !== flipMap[alt1]) diff1--\r\n                if (s[left] !== flipMap[alt2]) diff2--\r\n            } else {\r\n                if (s[left] !== alt1) diff1--\r\n                if (s[left] !== alt2) diff2--\r\n            }\r\n            left++\r\n        }\r\n        right++\r\n    }\r\n    return min\r\n};"
  }
}
